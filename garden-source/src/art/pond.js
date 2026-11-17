import * as T from 'three';
import { Water } from 'three/addons/objects/Water.js';
import { PALETTE, createRng, batchStaticGroup } from './materials.js';
import { getTerrainHeight, pondDistance } from './terrain.js';

function createWaterlilyFlower(lib, scale = 1) {
  const g = new T.Group();
  const petalMat = new T.MeshStandardMaterial({
    color: '#f5c7d7',
    emissive: '#592d3e',
    emissiveIntensity: 0.12,
    roughness: 0.55,
    side: T.DoubleSide
  });
  const innerMat = new T.MeshStandardMaterial({
    color: '#fae3eb',
    roughness: 0.5,
    side: T.DoubleSide
  });
  const stamenMat = new T.MeshStandardMaterial({
    color: '#f5c987',
    emissive: '#f5c987',
    emissiveIntensity: 0.35,
    roughness: 0.5
  });

  const petalGeo = new T.SphereGeometry(0.11, 8, 6);
  petalGeo.scale(0.48, 0.22, 1.0);
  petalGeo.translate(0, 0.02, 0.09);

  for (let ring = 0; ring < 2; ring++) {
    const count = ring === 0 ? 8 : 6;
    const tilt = ring === 0 ? -0.25 : -0.62;
    const sc = ring === 0 ? 1.0 : 0.76;
    for (let i = 0; i < count; i++) {
      const p = new T.Mesh(petalGeo, ring === 0 ? petalMat : innerMat);
      p.rotation.y = (i / count) * Math.PI * 2 + ring * 0.3;
      p.rotation.x = tilt;
      p.scale.setScalar(sc);
      g.add(p);
    }
  }
  const core = new T.Mesh(new T.SphereGeometry(0.045, 8, 6), stamenMat);
  core.position.y = 0.04;
  g.add(core);
  g.scale.setScalar(scale);
  batchStaticGroup(g);
  return g;
}

function buildFootbridge(scene, lib) {
  const { materials } = lib;
  // Curved timber footbridge spanning the northern cove of the pond
  const g = new T.Group();
  g.position.set(-10.4, -0.1, -7.8);
  g.rotation.y = 0.28;
  scene.add(g);

  const span = 4.2;
  const steps = 16;
  for (let i = 0; i < steps; i++) {
    const t = i / (steps - 1);
    const x = (t - 0.5) * span;
    const archY = Math.sin(t * Math.PI) * 0.48;
    const slope = Math.cos(t * Math.PI) * 0.34;
    const plank = new T.Mesh(new T.BoxGeometry(0.24, 0.055, 1.38), materials.woodMat);
    plank.position.set(x, archY, 0);
    plank.rotation.z = slope;
    plank.castShadow = plank.receiveShadow = true;
    g.add(plank);
  }

  // Curved side stringers & wooden handrail posts
  for (const sz of [-0.66, 0.66]) {
    const pts = [];
    for (let i = 0; i <= 8; i++) {
      const t = i / 8;
      pts.push(new T.Vector3((t - 0.5) * span, Math.sin(t * Math.PI) * 0.48 - 0.04, sz));
    }
    const curve = new T.CatmullRomCurve3(pts);
    const beam = new T.Mesh(new T.TubeGeometry(curve, 16, 0.055, 6, false), materials.woodDarkMat);
    beam.castShadow = true;
    g.add(beam);

    // Handrail curve
    const railPts = pts.map((p) => new T.Vector3(p.x, p.y + 0.58, p.z));
    const rail = new T.Mesh(
      new T.TubeGeometry(new T.CatmullRomCurve3(railPts), 16, 0.036, 6, false),
      materials.woodMat
    );
    rail.castShadow = true;
    g.add(rail);

    for (const pi of [0, 2, 4, 6, 8]) {
      const p = pts[pi];
      const post = new T.Mesh(new T.BoxGeometry(0.075, 0.68, 0.075), materials.woodDarkMat);
      post.position.set(p.x, p.y + 0.3, p.z);
      post.castShadow = true;
      g.add(post);
    }
  }
  batchStaticGroup(g);
  return g;
}

export function buildReflectivePond(scene, lib, sunDir) {
  const rng = createRng(2026);
  const { textures, materials } = lib;
  const pondGroup = new T.Group();
  scene.add(pondGroup);

  const waterY = -0.18;
  const waterGeo = new T.PlaneGeometry(14.8, 18.8);

  // High/Medium planar-reflective twilight pond
  const waterReflective = new Water(waterGeo, {
    textureWidth: 384,
    textureHeight: 384,
    waterNormals: textures.waterNormal,
    sunDirection: sunDir.clone().normalize(),
    sunColor: new T.Color('#f7c994'),
    waterColor: new T.Color('#233a49'),
    distortionScale: 1.35,
    fog: true
  });
  waterReflective.rotation.x = -Math.PI / 2;
  waterReflective.position.set(-10.6, waterY, -2.2);
  if (waterReflective.material.uniforms.size) {
    waterReflective.material.uniforms.size.value = 3.4;
  }
  pondGroup.add(waterReflective);

  // Lightweight fallback water surface for LOW preset
  const waterFallback = new T.Mesh(
    waterGeo,
    new T.MeshStandardMaterial({
      color: '#2c4a5c',
      normalMap: textures.waterNormal,
      normalScale: new T.Vector2(0.45, 0.45),
      roughness: 0.14,
      metalness: 0.68,
      envMapIntensity: 1.4
    })
  );
  waterFallback.rotation.x = -Math.PI / 2;
  waterFallback.position.set(-10.6, waterY, -2.2);
  waterFallback.visible = false;
  pondGroup.add(waterFallback);

  // Waterlily pads & multi-petaled waterlilies
  const padGeo = new T.PlaneGeometry(0.56, 0.56);
  padGeo.rotateX(-Math.PI / 2);
  const padSpots = [
    [-8.4, 0.4, 1.05],
    [-8.9, -0.3, 0.85],
    [-7.8, -1.6, 1.15],
    [-9.6, -2.9, 0.92],
    [-11.8, -1.2, 1.1],
    [-12.6, 1.4, 0.88],
    [-9.2, 2.6, 1.02],
    [-7.6, 1.8, 0.78],
    [-11.3, -4.4, 1.0],
    [-13.0, -3.5, 0.94]
  ];
  const padInst = new T.InstancedMesh(padGeo, materials.lilyPadMat, padSpots.length);
  const dummy = new T.Object3D();
  padSpots.forEach(([px, pz, ps], i) => {
    dummy.position.set(px, waterY + 0.014, pz);
    dummy.rotation.set(0, rng() * Math.PI * 2, 0);
    dummy.scale.setScalar(ps);
    dummy.updateMatrix();
    padInst.setMatrixAt(i, dummy.matrix);
    if (i % 2 === 0) {
      const flower = createWaterlilyFlower(lib, 0.78 + rng() * 0.28);
      flower.position.set(px + 0.08, waterY + 0.018, pz + 0.04);
      pondGroup.add(flower);
    }
  });
  pondGroup.add(padInst);

  // Floating shaped cherry-blossom petals resting on water surface
  const floatPetalGeo = new T.PlaneGeometry(0.115, 0.115);
  floatPetalGeo.rotateX(-Math.PI / 2);
  const floatPetals = new T.InstancedMesh(
    floatPetalGeo,
    materials.cherryPetalMat,
    72
  );
  for (let i = 0; i < 72; i++) {
    const a = rng() * Math.PI * 2;
    const rad = 1.0 + rng() * 3.9;
    const fx = -10.6 + Math.cos(a) * rad;
    const fz = -2.2 + Math.sin(a) * rad * 1.25;
    dummy.position.set(fx, waterY + 0.015, fz);
    dummy.rotation.set(0, rng() * Math.PI * 2, 0);
    dummy.scale.setScalar(0.85 + rng() * 0.75);
    dummy.updateMatrix();
    floatPetals.setMatrixAt(i, dummy.matrix);
  }
  pondGroup.add(floatPetals);

  // Expanding concentric cherry-blossom water ripples across the pond surface (1 batched InstancedMesh)
  const rippleCount = 16;
  const rippleGeo = new T.RingGeometry(0.18, 0.215, 24);
  rippleGeo.rotateX(-Math.PI / 2);
  const rippleMat = new T.MeshBasicMaterial({
    color: '#f5dbe5',
    transparent: true,
    opacity: 0.28,
    depthWrite: false
  });
  const rippleInst = new T.InstancedMesh(rippleGeo, rippleMat, rippleCount);
  const ripples = [];
  for (let i = 0; i < rippleCount; i++) {
    const a = rng() * Math.PI * 2;
    const rad = 0.8 + rng() * 3.6;
    ripples.push({
      x: -10.6 + Math.cos(a) * rad,
      z: -2.2 + Math.sin(a) * rad * 1.25,
      phase: rng(),
      speed: 0.24 + rng() * 0.14,
      maxScale: 1.5 + rng() * 1.4
    });
  }
  pondGroup.add(rippleInst);
  let nextRippleIdx = 0;

  // Cattails & tall pond reeds clustered around the banks
  const reedBladeGeo = new T.ConeGeometry(0.028, 1.05, 4);
  reedBladeGeo.translate(0, 0.52, 0);
  const reedMat = new T.MeshStandardMaterial({ color: '#536c49', roughness: 0.85 });
  const cattailHeadGeo = new T.CylinderGeometry(0.032, 0.032, 0.16, 7);
  const cattailMat = new T.MeshStandardMaterial({ color: '#4d3228', roughness: 0.92 });

  const reedTransforms = [];
  const headTransforms = [];
  for (let c = 0; c < 18; c++) {
    const a = (c / 18) * Math.PI * 2 + (rng() - 0.5) * 0.18;
    const rad = 5.1 + (rng() - 0.5) * 0.45;
    const cx = -10.6 + Math.cos(a) * rad * (1 + Math.sin(a * 2 + 0.6) * 0.11);
    const cz = -2.2 + Math.sin(a) * rad * 1.32 * (1 + Math.cos(a * 3 - 0.4) * 0.07);
    if (cx > -5.5 && Math.abs(cz + 2.0) < 2.2) continue; // keep discovery-02 viewpoint clean
    const cy = Math.max(waterY - 0.08, getTerrainHeight(cx, cz));
    const blades = 5 + Math.floor(rng() * 5);
    for (let b = 0; b < blades; b++) {
      const bx = cx + (rng() - 0.5) * 0.42;
      const bz = cz + (rng() - 0.5) * 0.42;
      const h = 0.75 + rng() * 0.6;
      const tiltX = (rng() - 0.5) * 0.22;
      const tiltZ = (rng() - 0.5) * 0.22;
      dummy.position.set(bx, cy - 0.04, bz);
      dummy.rotation.set(tiltX, rng() * Math.PI, tiltZ);
      dummy.scale.set(1, h, 1);
      dummy.updateMatrix();
      reedTransforms.push(dummy.matrix.clone());

      if (b < 2 && rng() > 0.3) {
        dummy.position.set(
          bx + Math.sin(tiltZ) * h * 0.45,
          cy + h * 0.86,
          bz + Math.sin(tiltX) * h * 0.45
        );
        dummy.rotation.set(tiltX, 0, tiltZ);
        dummy.scale.setScalar(1);
        dummy.updateMatrix();
        headTransforms.push(dummy.matrix.clone());
      }
    }
  }
  if (reedTransforms.length) {
    const reedInst = new T.InstancedMesh(reedBladeGeo, reedMat, reedTransforms.length);
    reedTransforms.forEach((m, i) => reedInst.setMatrixAt(i, m));
    reedInst.castShadow = true;
    pondGroup.add(reedInst);
  }
  if (headTransforms.length) {
    const headInst = new T.InstancedMesh(cattailHeadGeo, cattailMat, headTransforms.length);
    headTransforms.forEach((m, i) => headInst.setMatrixAt(i, m));
    pondGroup.add(headInst);
  }

  // Timber arched footbridge over the northern pond cove
  buildFootbridge(scene, lib);

  let curTime = 0;

  return {
    waterReflective,
    waterFallback,
    setReflectiveEnabled(enabled) {
      waterReflective.visible = enabled;
      waterFallback.visible = !enabled;
    },
    spawnRipple(rx, rz) {
      const rp = ripples[nextRippleIdx];
      nextRippleIdx = (nextRippleIdx + 1) % rippleCount;
      rp.x = rx;
      rp.z = rz;
      rp.phase = (-(curTime * rp.speed) % 1 + 1) % 1;
    },
    update(dt, t) {
      curTime = t;
      if (waterReflective.visible && waterReflective.material.uniforms.time) {
        waterReflective.material.uniforms.time.value += dt * 0.38;
      }
      if (waterFallback.visible) {
        textures.waterNormal.offset.x = (t * 0.015) % 1;
        textures.waterNormal.offset.y = (t * 0.011) % 1;
      }
      ripples.forEach((rp, i) => {
        const life = (t * rp.speed + rp.phase) % 1;
        const sc = 0.25 + life * rp.maxScale;
        dummy.position.set(rp.x, waterY + 0.016, rp.z);
        dummy.rotation.set(0, 0, 0);
        dummy.scale.set(sc, 1, sc);
        dummy.updateMatrix();
        rippleInst.setMatrixAt(i, dummy.matrix);
      });
      rippleInst.instanceMatrix.needsUpdate = true;
    }
  };
}
