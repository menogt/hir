import * as T from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { createRng, windUniforms } from './materials.js';
import { getTerrainHeight, pathX, pondDistance } from './terrain.js';

function applyFoliageWind(mat, amp = 0.035, maxH = 1.0) {
  const key = `foliage-wind-${amp.toFixed(3)}-${maxH.toFixed(1)}`;
  mat.customProgramCacheKey = () => key;
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = windUniforms.uTime;
    shader.uniforms.uWindAmp = windUniforms.uWindAmp;
    shader.vertexShader =
      `uniform float uTime;\nuniform float uWindAmp;\n` +
      shader.vertexShader.replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
         float h = clamp(position.y / ${maxH.toFixed(3)}, 0.0, 1.0);
         #ifdef USE_INSTANCING
           vec4 wRef = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
           float wp = wRef.x * 0.65 + wRef.z * 0.55;
         #else
           float wp = position.x * 0.65 + position.z * 0.55;
         #endif
         transformed.x += sin(uTime * 1.45 + wp) * ${amp.toFixed(4)} * h * uWindAmp;
         transformed.z += cos(uTime * 1.15 + wp * 1.2) * ${(amp * 0.65).toFixed(4)} * h * uWindAmp;`
      );
  };
}

function collectMeshParts(root) {
  root.updateMatrixWorld(true);
  const parts = [];
  root.traverse((obj) => {
    if (!obj.isMesh) return;
    parts.push({
      mesh: obj,
      geometry: obj.geometry,
      material: obj.material,
      localMatrix: obj.matrixWorld.clone(),
      name: obj.name || ''
    });
  });
  return parts;
}

export async function loadExternalGardenModels(scene, landmarkCoords = []) {
  const rng = createRng(7717);
  const dummy = new T.Object3D();
  const nearLandmark = (x, z, minD = 1.6) =>
    landmarkCoords.some((c) => Math.hypot(x - c.x, z - c.z) < minD);

  // --------------------------------------------------------------------------
  // 1. BLUE FLOWER CLUMPS (Blue+Flower.glb -> 500 tris, instanced along pond & path)
  // --------------------------------------------------------------------------
  const loadBlueFlowers = async () => {
    const gltf = await new GLTFLoader().loadAsync('./assets/models/blue_flower.glb');
    const root = gltf.scene;
    root.updateMatrixWorld(true);
    const box = new T.Box3().setFromObject(root);
    const size = box.getSize(new T.Vector3());
    const center = box.getCenter(new T.Vector3());
    const normScale = 0.64 / Math.max(0.001, size.y);

    // Anchor root at X=0, Y=0 (ground), Z=0
    const anchorMat = new T.Matrix4()
      .makeScale(normScale, normScale, normScale)
      .multiply(new T.Matrix4().makeTranslation(-center.x, -box.min.y, -center.z));

    const parts = collectMeshParts(root);
    if (!parts.length) return;

    const spots = [];
    // Lush indigo/cornflower accents around the pond shore
    for (let i = 0; i < 44; i++) {
      const a = rng() * Math.PI * 2;
      const rad = 5.38 + rng() * 1.15;
      const x = -10.6 + Math.cos(a) * rad * (1 + Math.sin(a * 2 + 0.6) * 0.11);
      const z = -2.2 + Math.sin(a) * rad * 1.32 * (1 + Math.cos(a * 3 - 0.4) * 0.07);
      if (Math.abs(x - pathX(z)) < 1.35) continue;
      if (nearLandmark(x, z, 1.45)) continue;
      spots.push({ x, y: getTerrainHeight(x, z) - 0.02, z, s: 0.78 + rng() * 0.55, ry: rng() * Math.PI * 2 });
    }
    // Pathside clusters & tree/boulder pockets
    for (let i = 0; i < 56; i++) {
      const z = 22.8 - rng() * 58;
      const side = rng() > 0.5 ? 1 : -1;
      const dist = 1.52 + rng() * 2.15;
      const x = pathX(z) + side * dist;
      if (pondDistance(x, z) < 5.35) continue;
      if (Math.hypot(x + 4.2, z + 14.2) < 3.5) continue;
      if (nearLandmark(x, z, 1.35)) continue;
      spots.push({ x, y: getTerrainHeight(x, z) - 0.02, z, s: 0.72 + rng() * 0.52, ry: rng() * Math.PI * 2 });
    }

    const combinedMat = new T.Matrix4();
    const partLocal = new T.Matrix4();

    parts.forEach((p) => {
      const mats = Array.isArray(p.material) ? p.material : [p.material];
      mats.forEach((m) => {
        m.alphaTest = 0.36;
        m.transparent = false;
        m.side = T.DoubleSide;
        m.roughness = 0.68;
        if ((m.name || '').toLowerCase().includes('flower')) {
          m.emissive = new T.Color('#4a7cc7');
          m.emissiveIntensity = 0.35;
        }
        applyFoliageWind(m, 0.045, Math.max(0.2, size.y));
      });

      const im = new T.InstancedMesh(p.geometry, mats.length === 1 ? mats[0] : mats, spots.length);
      im.castShadow = false;
      im.receiveShadow = false;

      partLocal.multiplyMatrices(anchorMat, p.localMatrix);
      spots.forEach((s, idx) => {
        dummy.position.set(s.x, s.y, s.z);
        dummy.rotation.set((rng() - 0.5) * 0.08, s.ry, (rng() - 0.5) * 0.08);
        dummy.scale.setScalar(s.s);
        dummy.updateMatrix();
        combinedMat.multiplyMatrices(dummy.matrix, partLocal);
        im.setMatrixAt(idx, combinedMat);
      });
      scene.add(im);
    });
  };

  // --------------------------------------------------------------------------
  // 2. WATERCOLOR SAKURA ACCENT TREES (Tree.zip -> 5.3k faces, 6 ornamental trees)
  // --------------------------------------------------------------------------
  const loadSakuraAccentTrees = async () => {
    const texLoader = new T.TextureLoader();
    const [leavesTex, trunkTex, petalsTex, treeObj] = await Promise.all([
      texLoader.loadAsync('./assets/models/sakura_leaves.webp'),
      texLoader.loadAsync('./assets/models/sakura_trunk.webp'),
      texLoader.loadAsync('./assets/models/sakura_petals.webp'),
      new OBJLoader().loadAsync('./assets/models/sakura_tree.obj')
    ]);
    [leavesTex, trunkTex, petalsTex].forEach((t) => {
      t.colorSpace = T.SRGBColorSpace;
    });

    const leavesMat = new T.MeshStandardMaterial({
      map: leavesTex,
      color: '#ffe8ef',
      alphaTest: 0.34,
      transparent: false,
      side: T.DoubleSide,
      roughness: 0.8,
      emissive: new T.Color('#5c2840'),
      emissiveIntensity: 0.22
    });
    applyFoliageWind(leavesMat, 0.45, 44.0);

    const trunkMat = new T.MeshStandardMaterial({
      map: trunkTex,
      color: '#6d4c3e',
      roughness: 0.9
    });

    const groundPetalMat = new T.MeshStandardMaterial({
      map: petalsTex,
      alphaTest: 0.3,
      transparent: false,
      side: T.DoubleSide,
      roughness: 0.7,
      emissive: new T.Color('#663047'),
      emissiveIntensity: 0.18
    });

    treeObj.traverse((c) => {
      if (!c.isMesh) return;
      if (c.name.includes('Leaves')) c.material = leavesMat;
      else if (c.name.includes('Trunk')) c.material = trunkMat;
      else c.material = groundPetalMat;
    });

    treeObj.updateMatrixWorld(true);
    const box = new T.Box3().setFromObject(treeObj);
    const size = box.getSize(new T.Vector3());
    const center = box.getCenter(new T.Vector3());
    const normScale = 5.6 / Math.max(0.001, size.y);
    const anchorMat = new T.Matrix4()
      .makeScale(normScale, normScale, normScale)
      .multiply(new T.Matrix4().makeTranslation(-center.x, -box.min.y, -center.z));

    const candidateSpots = [
      [-4.8, 14.8, 0.98, 0.4],
      [5.4, 12.8, 0.95, 1.7],
      [-5.4, 8.2, 1.04, 2.5],
      [5.2, 1.2, 1.0, 3.8],
      [-15.6, -1.6, 1.14, 2.7],
      [-6.8, -6.4, 0.96, 5.1],
      [5.4, -7.2, 1.02, 4.1],
      [5.8, -14.0, 1.08, 1.1],
      [-8.4, -22.2, 1.06, 0.9],
      [5.6, -27.4, 1.02, 3.3],
      [-4.6, -32.2, 1.1, 2.1]
    ];
    const treeSpots = candidateSpots.filter(
      ([tx, tz]) =>
        Math.abs(tx - pathX(tz)) >= 3.2 &&
        pondDistance(tx, tz) >= 5.6 &&
        Math.hypot(tx + 4.2, tz + 14.2) >= 3.7 &&
        !nearLandmark(tx, tz, 2.3)
    );
    if (!treeSpots.length) return;

    const parts = collectMeshParts(treeObj);
    const combinedMat = new T.Matrix4();
    const partLocal = new T.Matrix4();

    parts.forEach((p) => {
      const im = new T.InstancedMesh(p.geometry, p.material, treeSpots.length);
      im.castShadow = p.name.includes('Trunk');
      im.receiveShadow = false;
      partLocal.multiplyMatrices(anchorMat, p.localMatrix);

      treeSpots.forEach(([tx, tz, ts, ry], idx) => {
        const ty = getTerrainHeight(tx, tz) - 0.08;
        dummy.position.set(tx, ty, tz);
        dummy.rotation.set(0, ry, 0);
        dummy.scale.setScalar(ts);
        dummy.updateMatrix();
        combinedMat.multiplyMatrices(dummy.matrix, partLocal);
        im.setMatrixAt(idx, combinedMat);
      });
      scene.add(im);
    });
  };

  await Promise.allSettled([loadBlueFlowers(), loadSakuraAccentTrees()]);
}
