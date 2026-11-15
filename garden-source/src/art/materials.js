import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const PALETTE = {
  blossomDeep: '#D98DA9',
  blossomMid: '#F1B3C8',
  blossomPale: '#F6D6DD',
  warmIvory: '#F2E5C9',
  amberCore: '#F5C987',
  lanternGlow: '#FFD9A0',
  twilightBlue: '#52657D',
  shadowBlue: '#44536A',
  lavenderDusk: '#8880A0',
  barkBrown: '#4B3834',
  grassMuted: '#586e51',
  fogColor: '#676883',
  pondDeep: '#2e4b5d'
};

export const windUniforms = {
  uTime: { value: 0 },
  uWindAmp: { value: 1.0 }
};

export function createRng(initialSeed = 78) {
  let seed = initialSeed >>> 0;
  return () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}

export function createMaterialLibrary(renderer) {
  const loader = new T.TextureLoader();
  const maxAniso = Math.min(8, renderer.capabilities.getMaxAnisotropy() || 4);

  function loadTex(file, { srgb = true, repeat = [1, 1], clamp = false } = {}) {
    const tex = loader.load(`./assets/textures/${file}`);
    tex.colorSpace = srgb ? T.SRGBColorSpace : T.NoColorSpace;
    tex.wrapS = clamp ? T.ClampToEdgeWrapping : T.RepeatWrapping;
    tex.wrapT = clamp ? T.ClampToEdgeWrapping : T.RepeatWrapping;
    tex.repeat.set(repeat[0], repeat[1]);
    tex.anisotropy = maxAniso;
    tex.generateMipmaps = true;
    tex.minFilter = T.LinearMipmapLinearFilter;
    tex.magFilter = T.LinearFilter;
    return tex;
  }

  function applyWindSway(material, { heightStart = 0.0, amp = 0.06, speed = 1.6 } = {}) {
    material.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = windUniforms.uTime;
      shader.uniforms.uWindAmp = windUniforms.uWindAmp;
      shader.vertexShader =
        `uniform float uTime;\nuniform float uWindAmp;\n` +
        shader.vertexShader.replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
          float wFactor = max(0.0, uv.y - ${heightStart.toFixed(2)});
          vec4 wp = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            wp = instanceMatrix * wp;
          #endif
          float phase = wp.x * 0.45 + wp.z * 0.38;
          transformed.x += sin(uTime * ${speed.toFixed(2)} + phase) * ${amp.toFixed(3)} * wFactor * uWindAmp;
          transformed.z += cos(uTime * ${(speed * 0.83).toFixed(2)} + phase * 1.3) * ${(amp * 0.7).toFixed(3)} * wFactor * uWindAmp;`
        );
    };
  }

  const barkAlbedo = loadTex('bark_albedo.webp', { repeat: [1, 3] });
  const barkNormal = loadTex('bark_normal.webp', { srgb: false, repeat: [1, 3] });
  const barkRough = loadTex('bark_roughness.webp', { srgb: false, repeat: [1, 3] });

  const stoneAlbedo = loadTex('stone_albedo.webp', { repeat: [1.5, 1.5] });
  const stoneNormal = loadTex('stone_normal.webp', { srgb: false, repeat: [1.5, 1.5] });
  const stoneRough = loadTex('stone_roughness.webp', { srgb: false, repeat: [1.5, 1.5] });

  const woodAlbedo = loadTex('wood_albedo.webp', { repeat: [1.5, 1.5] });
  const woodNormal = loadTex('wood_normal.webp', { srgb: false, repeat: [1.5, 1.5] });

  const roofAlbedo = loadTex('roof_tile_albedo.webp', { repeat: [3, 2] });
  const roofNormal = loadTex('roof_tile_normal.webp', { srgb: false, repeat: [3, 2] });

  const grassTex = loadTex('terrain_grass_albedo.webp', { repeat: [26, 26] });
  const soilTex = loadTex('terrain_soil_albedo.webp', { repeat: [26, 26] });
  const terrainNormal = loadTex('terrain_normal.webp', { srgb: false, repeat: [26, 26] });

  const blossomTex = loadTex('blossom_cluster.webp', { clamp: true });
  const grassCardTex = loadTex('grass_wildflower_card.webp', { clamp: true });
  const shrubTex = loadTex('shrub_foliage.webp', { clamp: true });
  const lilyPadTex = loadTex('waterlily_pad.webp', { clamp: true });
  const shojiTex = loadTex('shoji_paper.webp', { clamp: true });
  const linenTex = loadTex('linen_cloth.webp', { repeat: [1, 1] });
  const waterNormal = loadTex('water_normal.webp', { srgb: false, repeat: [4, 4] });
  const skyTex = loadTex('sky_twilight.webp', { clamp: true });

  const photoArtTex = loadTex('memory_photo_art.webp', { clamp: true });
  const cinemaArtTex = loadTex('cinema_screen_art.webp', { clamp: true });
  const welcomeSignTex = loadTex('welcome_sign_art.webp', { clamp: true });

  const barkMat = new T.MeshStandardMaterial({
    map: barkAlbedo,
    normalMap: barkNormal,
    normalScale: new T.Vector2(1.35, 1.35),
    roughnessMap: barkRough,
    roughness: 0.92,
    metalness: 0.02
  });

  const stoneMat = new T.MeshStandardMaterial({
    map: stoneAlbedo,
    normalMap: stoneNormal,
    normalScale: new T.Vector2(1.15, 1.15),
    roughnessMap: stoneRough,
    roughness: 0.88,
    metalness: 0.04
  });

  const stoneDarkMat = new T.MeshStandardMaterial({
    color: '#918d8a',
    map: stoneAlbedo,
    normalMap: stoneNormal,
    normalScale: new T.Vector2(1.2, 1.2),
    roughnessMap: stoneRough,
    roughness: 0.9,
    metalness: 0.04
  });

  const woodMat = new T.MeshStandardMaterial({
    color: '#c8b2a2',
    map: woodAlbedo,
    normalMap: woodNormal,
    normalScale: new T.Vector2(1.0, 1.0),
    roughness: 0.84,
    metalness: 0.03
  });

  const woodDarkMat = new T.MeshStandardMaterial({
    color: '#7a6056',
    map: woodAlbedo,
    normalMap: woodNormal,
    normalScale: new T.Vector2(1.0, 1.0),
    roughness: 0.88,
    metalness: 0.03
  });

  const roofTileMat = new T.MeshStandardMaterial({
    map: roofAlbedo,
    normalMap: roofNormal,
    normalScale: new T.Vector2(1.25, 1.25),
    roughness: 0.72,
    metalness: 0.08
  });

  const shojiMat = new T.MeshStandardMaterial({
    map: shojiTex,
    emissiveMap: shojiTex,
    emissive: new T.Color('#ffb969'),
    emissiveIntensity: 1.55,
    roughness: 0.5
  });

  const blossomCardMat = new T.MeshStandardMaterial({
    map: blossomTex,
    alphaTest: 0.36,
    side: T.DoubleSide,
    roughness: 0.86,
    metalness: 0.0,
    emissive: new T.Color('#8c4f67'),
    emissiveIntensity: 0.32
  });
  applyWindSway(blossomCardMat, { heightStart: 0.15, amp: 0.05, speed: 1.4 });

  const grassCardMat = new T.MeshStandardMaterial({
    map: grassCardTex,
    alphaTest: 0.36,
    side: T.DoubleSide,
    roughness: 0.88,
    metalness: 0.0
  });
  applyWindSway(grassCardMat, { heightStart: 0.08, amp: 0.07, speed: 1.9 });

  const shrubCardMat = new T.MeshStandardMaterial({
    map: shrubTex,
    alphaTest: 0.36,
    side: T.DoubleSide,
    roughness: 0.84,
    metalness: 0.0
  });
  applyWindSway(shrubCardMat, { heightStart: 0.12, amp: 0.04, speed: 1.5 });

  const lilyPadMat = new T.MeshStandardMaterial({
    map: lilyPadTex,
    alphaTest: 0.4,
    side: T.DoubleSide,
    roughness: 0.65,
    metalness: 0.05
  });

  const linenMat = new T.MeshStandardMaterial({
    map: linenTex,
    roughness: 0.92,
    side: T.DoubleSide
  });

  const ceramicMat = new T.MeshStandardMaterial({
    color: '#ece2d4',
    roughness: 0.34,
    metalness: 0.05
  });

  const darkMetalMat = new T.MeshStandardMaterial({
    color: '#323740',
    roughness: 0.45,
    metalness: 0.65
  });

  const brassMat = new T.MeshStandardMaterial({
    color: '#d8b275',
    roughness: 0.35,
    metalness: 0.82
  });

  const glassMat = new T.MeshStandardMaterial({
    color: '#e5eef5',
    roughness: 0.1,
    metalness: 0.12,
    envMapIntensity: 1.5,
    transparent: true,
    opacity: 0.46
  });

  // Soft radial glow texture for lantern halos, fireflies & moon aura
  const glowCanvas = document.createElement('canvas');
  glowCanvas.width = glowCanvas.height = 128;
  const gctx = glowCanvas.getContext('2d');
  const grad = gctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(255, 240, 200, 1)');
  grad.addColorStop(0.18, 'rgba(255, 214, 150, 0.65)');
  grad.addColorStop(0.5, 'rgba(255, 185, 115, 0.14)');
  grad.addColorStop(1, 'rgba(255, 185, 115, 0)');
  gctx.fillStyle = grad;
  gctx.fillRect(0, 0, 128, 128);
  const glowTex = new T.CanvasTexture(glowCanvas);
  glowTex.colorSpace = T.SRGBColorSpace;

  // Soft contact shadow decal texture
  const shadCanvas = document.createElement('canvas');
  shadCanvas.width = shadCanvas.height = 64;
  const sctx = shadCanvas.getContext('2d');
  const sg = sctx.createRadialGradient(32, 32, 2, 32, 32, 31);
  sg.addColorStop(0, 'rgba(18, 22, 34, 0.55)');
  sg.addColorStop(0.55, 'rgba(18, 22, 34, 0.22)');
  sg.addColorStop(1, 'rgba(18, 22, 34, 0)');
  sctx.fillStyle = sg;
  sctx.fillRect(0, 0, 64, 64);
  const contactShadowTex = new T.CanvasTexture(shadCanvas);

  const contactShadowMat = new T.MeshBasicMaterial({
    map: contactShadowTex,
    transparent: true,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -2
  });

  return {
    textures: {
      grassTex,
      soilTex,
      terrainNormal,
      waterNormal,
      skyTex,
      photoArtTex,
      cinemaArtTex,
      welcomeSignTex,
      glowTex,
      blossomTex
    },
    materials: {
      barkMat,
      stoneMat,
      stoneDarkMat,
      woodMat,
      woodDarkMat,
      roofTileMat,
      shojiMat,
      blossomCardMat,
      grassCardMat,
      shrubCardMat,
      lilyPadMat,
      linenMat,
      ceramicMat,
      darkMetalMat,
      brassMat,
      glassMat,
      contactShadowMat
    }
  };
}

export function addContactShadow(parent, mat, radius = 0.8, y = 0.015) {
  const s = new T.Mesh(new T.PlaneGeometry(radius * 2, radius * 2), mat);
  s.rotation.x = -Math.PI / 2;
  s.position.y = y;
  parent.add(s);
  return s;
}

/**
 * Merges static non-instanced child meshes inside `root` by shared material so
 * detailed multi-part props render in minimal draw calls while keeping dynamic
 * meshes, sprites, and lights untouched.
 */
export function batchStaticGroup(root, skipObjects = []) {
  const skip = new Set(skipObjects);
  root.updateMatrixWorld(true);
  const invRoot = root.matrixWorld.clone().invert();
  const buckets = new Map();
  const toRemove = [];

  root.traverse((obj) => {
    if (!obj.isMesh || obj.isInstancedMesh || Array.isArray(obj.material)) return;
    let cur = obj;
    while (cur && cur !== root) {
      if (skip.has(cur)) return;
      cur = cur.parent;
    }
    if (skip.has(obj)) return;

    const relMat = new T.Matrix4().multiplyMatrices(invRoot, obj.matrixWorld);
    let g = obj.geometry.index ? obj.geometry.toNonIndexed() : obj.geometry.clone();
    // Normalize attribute set across mixed primitives so mergeGeometries never fails
    for (const key of Object.keys(g.attributes)) {
      if (key !== 'position' && key !== 'normal' && key !== 'uv') {
        g.deleteAttribute(key);
      }
    }
    if (!g.attributes.normal) g.computeVertexNormals();
    if (!g.attributes.uv) {
      const count = g.attributes.position.count;
      g.setAttribute('uv', new T.BufferAttribute(new Float32Array(count * 2), 2));
    }
    g.clearGroups();
    g.applyMatrix4(relMat);

    const bucket = buckets.get(obj.material) || {
      geos: [],
      castShadow: false,
      receiveShadow: false
    };
    bucket.geos.push(g);
    bucket.castShadow = bucket.castShadow || obj.castShadow;
    bucket.receiveShadow = bucket.receiveShadow || obj.receiveShadow;
    buckets.set(obj.material, bucket);
    toRemove.push(obj);
  });

  for (const obj of toRemove) {
    obj.parent?.remove(obj);
  }

  for (const [mat, bucket] of buckets.entries()) {
    if (!bucket.geos.length) continue;
    const merged = mergeGeometries(bucket.geos, false);
    bucket.geos.forEach((g) => g.dispose());
    if (!merged) continue;
    const m = new T.Mesh(merged, mat);
    m.castShadow = bucket.castShadow;
    m.receiveShadow = bucket.receiveShadow;
    root.add(m);
  }
}
