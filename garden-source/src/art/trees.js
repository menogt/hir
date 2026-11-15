import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { PALETTE, createRng } from './materials.js';
import { getTerrainHeight, pathX, pondDistance } from './terrain.js';

function createTaperedSplineTube(points, tubularSegs, radialSegs, rStart, rEnd, gnarl = 0.04) {
  const curve = new T.CatmullRomCurve3(points);
  const frames = curve.computeFrenetFrames(tubularSegs, false);
  const positions = [];
  const normals = [];
  const uvs = [];
  const indices = [];

  const v = new T.Vector3();
  const n = new T.Vector3();

  for (let i = 0; i <= tubularSegs; i++) {
    const t = i / tubularSegs;
    const p = curve.getPointAt(t);
    const N = frames.normals[i];
    const B = frames.binormals[i];
    const baseR = T.MathUtils.lerp(rStart, rEnd, Math.pow(t, 0.85));

    for (let j = 0; j <= radialSegs; j++) {
      const u = j / radialSegs;
      const theta = u * Math.PI * 2;
      const flute = 1 + Math.sin(theta * 5 + t * 4.0) * gnarl * (1 - t * 0.6);
      const r = baseR * flute;
      const cos = Math.cos(theta);
      const sin = Math.sin(theta);

      n.set(0, 0, 0).addScaledVector(N, cos).addScaledVector(B, sin).normalize();
      v.copy(p).addScaledVector(n, r);

      positions.push(v.x, v.y, v.z);
      normals.push(n.x, n.y, n.z);
      uvs.push(u * 2, t * 3);
    }
  }

  const stride = radialSegs + 1;
  for (let i = 0; i < tubularSegs; i++) {
    for (let j = 0; j < radialSegs; j++) {
      const a = i * stride + j;
      const b = (i + 1) * stride + j;
      const c = (i + 1) * stride + (j + 1);
      const d = i * stride + (j + 1);
      indices.push(a, b, d);
      indices.push(b, c, d);
    }
  }

  const geo = new T.BufferGeometry();
  geo.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  geo.setAttribute('normal', new T.Float32BufferAttribute(normals, 3));
  geo.setAttribute('uv', new T.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  return geo;
}

function createBlossomClusterGeometry() {
  // 3 intersecting slightly-tilted foliage planes for volumetric silhouette from any angle
  const planes = [];
  const angles = [
    [0, 0, 0],
    [0.24, Math.PI / 3, 0.16],
    [-0.22, -Math.PI / 3, -0.14]
  ];
  for (const [rx, ry, rz] of angles) {
    const p = new T.PlaneGeometry(1.45, 1.35);
    p.rotateX(rx);
    p.rotateY(ry);
    p.rotateZ(rz);
    planes.push(p);
  }
  const merged = mergeGeometries(planes, false);
  planes.forEach((p) => p.dispose());
  return merged;
}

export function buildSakuraTrees(scene, lib) {
  const rng = createRng(512);
  const { materials } = lib;
  const colliders = [];
  const trunkGeos = [];
  const blossomInstances = [];

  function addTree(x, z, scale = 1, leanX = 0, leanZ = 0, hero = false) {
    const baseY = getTerrainHeight(x, z);
    colliders.push({ x, z, r: 0.62 * scale });

    const rBase = (hero ? 0.5 : 0.36) * scale;
    const hTrunk = (hero ? 3.85 : 3.45) * scale;
    const p0 = new T.Vector3(x, baseY - 0.18, z);
    const p1 = new T.Vector3(x + leanX * 0.25, baseY + hTrunk * 0.36, z + leanZ * 0.25);
    const p2 = new T.Vector3(
      x + leanX * 0.72 + (rng() - 0.5) * 0.35 * scale,
      baseY + hTrunk * 0.74,
      z + leanZ * 0.72 + (rng() - 0.5) * 0.3 * scale
    );
    const p3 = new T.Vector3(x + leanX, baseY + hTrunk, z + leanZ);

    const mainTrunk = createTaperedSplineTube([p0, p1, p2, p3], 10, hero ? 9 : 7, rBase, rBase * 0.42, 0.1);
    trunkGeos.push(mainTrunk.toNonIndexed());

    // 4 flared root buttresses gripping the earth
    const rootCount = hero ? 5 : 4;
    for (let r = 0; r < rootCount; r++) {
      const a = (r / rootCount) * Math.PI * 2 + rng() * 0.5;
      const rLen = (0.75 + rng() * 0.55) * scale;
      const rp0 = new T.Vector3(x + Math.cos(a) * rBase * 0.45, baseY + 0.65 * scale, z + Math.sin(a) * rBase * 0.45);
      const rp1 = new T.Vector3(x + Math.cos(a) * rLen * 0.65, baseY + 0.18 * scale, z + Math.sin(a) * rLen * 0.65);
      const rp2 = new T.Vector3(x + Math.cos(a) * rLen, baseY - 0.16, z + Math.sin(a) * rLen);
      trunkGeos.push(createTaperedSplineTube([rp0, rp1, rp2], 5, 5, rBase * 0.42, rBase * 0.12, 0.06).toNonIndexed());
    }

    // Sweeping boughs & forked branches
    const boughCount = hero ? 7 : 5;
    for (let i = 0; i < boughCount; i++) {
      const a = (i / boughCount) * Math.PI * 2 + rng() * 0.55;
      const reach = (2.1 + rng() * 1.45) * scale;
      const startPt = i % 2 === 0 ? p2.clone() : p3.clone();
      const midPt = new T.Vector3(
        startPt.x + Math.cos(a) * reach * 0.52,
        startPt.y + (0.65 + rng() * 0.55) * scale,
        startPt.z + Math.sin(a) * reach * 0.52
      );
      const endPt = new T.Vector3(
        startPt.x + Math.cos(a) * reach,
        startPt.y + (1.05 + rng() * 1.05) * scale,
        startPt.z + Math.sin(a) * reach
      );
      const bough = createTaperedSplineTube([startPt, midPt, endPt], 7, 6, rBase * 0.34, rBase * 0.1, 0.05);
      trunkGeos.push(bough.toNonIndexed());

      // Two forked sub-branches per bough
      for (let f = -1; f <= 1; f += 2) {
        const fa = a + f * (0.48 + rng() * 0.25);
        const fReach = (0.95 + rng() * 0.7) * scale;
        const forkStart = midPt.clone().lerp(endPt, 0.55);
        const forkEnd = new T.Vector3(
          forkStart.x + Math.cos(fa) * fReach,
          forkStart.y + (0.42 + rng() * 0.55) * scale,
          forkStart.z + Math.sin(fa) * fReach
        );
        trunkGeos.push(
          createTaperedSplineTube([forkStart, forkEnd], 4, 5, rBase * 0.16, rBase * 0.05, 0.02).toNonIndexed()
        );

        // Layered blossom clusters on fork tips & along bough
        const clusters = hero ? 6 : 5;
        for (let c = 0; c < clusters; c++) {
          const anchor = c < 3 ? forkEnd : endPt;
          blossomInstances.push({
            x: anchor.x + (rng() - 0.5) * 1.35 * scale,
            y: anchor.y + (rng() - 0.35) * 0.9 * scale,
            z: anchor.z + (rng() - 0.5) * 1.35 * scale,
            s: (1.05 + rng() * 0.85) * scale,
            tone: rng(),
            rotY: rng() * Math.PI * 2,
            tilt: (rng() - 0.5) * 0.35
          });
        }
      }
    }

    // Crown clusters above trunk top
    for (let c = 0; c < (hero ? 10 : 7); c++) {
      blossomInstances.push({
        x: p3.x + (rng() - 0.5) * 2.2 * scale,
        y: p3.y + (0.7 + rng() * 1.4) * scale,
        z: p3.z + (rng() - 0.5) * 2.2 * scale,
        s: (1.2 + rng() * 0.85) * scale,
        tone: rng(),
        rotY: rng() * Math.PI * 2,
        tilt: (rng() - 0.5) * 0.3
      });
    }
  }

  // Hero framing entry trees (leaning gently inward over the path!)
  addTree(-5.1, 17.8, 1.24, 1.35, -0.3, true);
  addTree(5.4, 16.0, 1.22, -1.15, -0.2, true);

  // Midground path & pavilion trees (carefully keeping pond basin & sightlines clear)
  const treeCoords = [
    [-5.8, 11.2, 1.05, 0.55, 0.1],
    [6.6, 10.4, 1.08, -0.6, -0.2],
    [6.5, 3.8, 1.12, -0.65, 0.1],
    [-4.9, 5.2, 1.02, 0.45, 0.2],
    [6.7, -3.2, 1.15, -0.55, 0.0],
    [-16.8, 3.8, 1.2, 0.8, -0.4],
    [-17.4, -5.2, 1.25, 1.1, 0.2],
    [-12.5, -12.6, 1.18, 0.6, 0.5],
    [6.8, -10.5, 1.12, -0.6, 0.1],
    [-9.2, -19.2, 1.16, 0.8, 0.2],
    [6.6, -18.4, 1.1, -0.55, -0.2],
    [-6.4, -25.8, 1.18, 0.5, 0.2],
    [6.4, -26.2, 1.15, -0.55, 0.1],
    [-3.8, -33.6, 1.35, 0.7, -0.2],
    [4.8, -34.0, 1.32, -0.7, -0.2],
    // Outer depth groves
    [-11.5, 14.5, 1.15, 0.2, 0],
    [11.2, 12.8, 1.2, -0.3, 0],
    [12.0, -1.5, 1.25, -0.4, 0],
    [11.8, -16.0, 1.22, -0.2, 0],
    [-14.5, -26.5, 1.28, 0.3, 0],
    [11.5, -31.5, 1.3, -0.3, 0]
  ];
  for (const [tx, tz, ts, lx, lz] of treeCoords) {
    if (pondDistance(tx, tz) < 6.5) continue;
    if (Math.hypot(tx + 4.2, tz + 14.2) < 3.8) continue;
    addTree(tx, tz, ts, lx, lz, false);
  }

  // Merge all tree trunks into ONE optimized draw call!
  const mergedTrunks = mergeGeometries(trunkGeos, false);
  trunkGeos.forEach((g) => g.dispose());
  const trunkMesh = new T.Mesh(mergedTrunks, materials.barkMat);
  trunkMesh.castShadow = true;
  trunkMesh.receiveShadow = true;
  scene.add(trunkMesh);

  // Single InstancedMesh for ALL volumetric sakura canopy clusters
  const clusterGeo = createBlossomClusterGeometry();
  const blossomInst = new T.InstancedMesh(clusterGeo, materials.blossomCardMat, blossomInstances.length);
  blossomInst.castShadow = true;
  blossomInst.receiveShadow = false;

  const dummy = new T.Object3D();
  const cDeep = new T.Color('#d07c9c');
  const cMid = new T.Color(PALETTE.blossomMid);
  const cPale = new T.Color(PALETTE.blossomPale);
  const cWarm = new T.Color('#f7dce0');
  const tmp = new T.Color();

  blossomInstances.forEach((b, i) => {
    dummy.position.set(b.x, b.y, b.z);
    dummy.rotation.set(b.tilt, b.rotY, b.tilt * 0.6);
    dummy.scale.set(b.s, b.s * 0.88, b.s);
    dummy.updateMatrix();
    blossomInst.setMatrixAt(i, dummy.matrix);
    if (b.tone < 0.3) tmp.lerpColors(cDeep, cMid, b.tone / 0.3);
    else if (b.tone < 0.72) tmp.lerpColors(cMid, cPale, (b.tone - 0.3) / 0.42);
    else tmp.lerpColors(cPale, cWarm, (b.tone - 0.72) / 0.28);
    blossomInst.setColorAt(i, tmp);
  });
  scene.add(blossomInst);

  // Distant background silhouette blossom trees firmly rooted into hills
  const bgPositions = [
    [-22, -38, 1.65],
    [-12, -45, 1.75],
    [11, -45, 1.7],
    [22, -40, 1.75],
    [-24, -18, 1.6],
    [22, -14, 1.65],
    [-23, 8, 1.55],
    [21, 6, 1.6]
  ];
  const bgCanopyGeo = createBlossomClusterGeometry();
  const bgCanopy = new T.InstancedMesh(bgCanopyGeo, materials.blossomCardMat, bgPositions.length * 5);
  const bgTrunkGeo = new T.CylinderGeometry(0.14, 0.42, 4.4, 7);
  const bgTrunks = new T.InstancedMesh(bgTrunkGeo, materials.barkMat, bgPositions.length);
  bgPositions.forEach(([bx, bz, bs], idx) => {
    const by = getTerrainHeight(bx, bz);
    dummy.position.set(bx, by + 1.45 * bs, bz);
    dummy.rotation.set(0, rng() * 3, 0);
    dummy.scale.setScalar(bs);
    dummy.updateMatrix();
    bgTrunks.setMatrixAt(idx, dummy.matrix);

    for (let k = 0; k < 5; k++) {
      const ang = (k / 5) * Math.PI * 2;
      const rad = k === 0 ? 0 : 0.95 * bs;
      dummy.position.set(
        bx + Math.cos(ang) * rad,
        by + (3.1 + (k % 2) * 0.65) * bs,
        bz + Math.sin(ang) * rad
      );
      dummy.rotation.set(0, k * 1.1, 0);
      dummy.scale.setScalar(bs * 1.95);
      dummy.updateMatrix();
      bgCanopy.setMatrixAt(idx * 5 + k, dummy.matrix);
      bgCanopy.setColorAt(idx * 5 + k, new T.Color('#df9fb8'));
    }
  });
  scene.add(bgTrunks);
  scene.add(bgCanopy);

  return { colliders, blossomInst };
}
