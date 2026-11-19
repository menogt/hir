import * as T from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ORIGINAL_DISCOVERIES, MEMORY_TRAIL } from './memories.js';
import { PALETTE, windUniforms, createRng, createMaterialLibrary } from './src/art/materials.js';
import { getTerrainHeight, pondDistance, buildTerrainAndFoliage } from './src/art/terrain.js';
import { buildSakuraTrees } from './src/art/trees.js';
import { buildGardenPavilion, placeGardenLanterns } from './src/art/architecture.js';
import { buildReflectivePond } from './src/art/pond.js';
import {
  buildMemoryLandmark,
  buildShySpirit,
  buildBlossomShrine,
  buildPlayerOrb
} from './src/art/landmarks.js';
import { loadExternalGardenModels } from './src/art/externalAssets.js';
import './style.css';

const $ = (id) => document.getElementById(id);
const mobile = innerWidth < 720 || matchMedia('(pointer: coarse)').matches;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

function setEntryProgress(pct, label) {
  const bar = $('entryLoaderBar');
  const txt = $('entryLoaderText');
  if (bar) bar.style.width = `${pct}%`;
  if (txt && label) txt.textContent = label;
}
setEntryProgress(24, 'Sculpting terrain & twilight sky…');

// ============================================================================
// RENDERER, SCENE, SKY DOME & TWILIGHT LIGHTING
// ============================================================================
let renderer;
try {
  renderer = new T.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
} catch {
  $('entry').innerHTML =
    '<div class="entry-card"><h1>A little place</h1><p>This garden needs WebGL. Please open it in a recent Chrome, Safari, Firefox, or Edge browser.</p></div>';
  throw new Error('WebGL unavailable');
}

renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.35 : 1.75));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = T.PCFSoftShadowMap;
renderer.shadowMap.autoUpdate = false;
renderer.toneMapping = T.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.info.autoReset = false;
$('world').append(renderer.domElement);

const scene = new T.Scene();
scene.background = new T.Color('#475773');
scene.fog = new T.FogExp2('#696682', 0.0145);

const camera = new T.PerspectiveCamera(mobile ? 58 : 48, innerWidth / innerHeight, 0.1, 220);

const lib = createMaterialLibrary(renderer);
const { textures } = lib;

// Twilight sky dome & PMREM environment reflections
const skyMat = new T.MeshBasicMaterial({ map: textures.skyTex, side: T.BackSide, fog: false });
const skyDome = new T.Mesh(new T.SphereGeometry(125, 36, 20), skyMat);
skyDome.rotation.y = Math.PI * 0.62;
scene.add(skyDome);

const pmrem = new T.PMREMGenerator(renderer);
const envScene = new T.Scene();
envScene.add(new T.Mesh(new T.SphereGeometry(20, 24, 16), skyMat.clone()));
const envRT = pmrem.fromScene(envScene, 0.04);
scene.environment = envRT.texture;
scene.environmentIntensity = 0.62;
pmrem.dispose();

// Crescent moon, warm dusk horizon halo & gentle twilight/night starfield
const moon = new T.Mesh(
  new T.SphereGeometry(2.3, 28, 20),
  new T.MeshBasicMaterial({ color: '#fff3db', fog: false })
);
moon.position.set(18, 22, -62);
scene.add(moon);
const moonHalo = new T.Sprite(
  new T.SpriteMaterial({
    map: textures.glowTex,
    transparent: true,
    opacity: 0.42,
    depthWrite: false,
    blending: T.AdditiveBlending,
    fog: false
  })
);
moonHalo.position.copy(moon.position);
moonHalo.scale.set(13, 13, 13);
scene.add(moonHalo);

const starRng = createRng(9911);
const starCount = 240;
const starPositions = new Float32Array(starCount * 3);
for (let i = 0; i < starCount; i++) {
  const theta = starRng() * Math.PI * 2;
  const phi = Math.acos(0.18 + starRng() * 0.82);
  const rad = 108;
  starPositions[i * 3] = rad * Math.sin(phi) * Math.cos(theta);
  starPositions[i * 3 + 1] = rad * Math.cos(phi);
  starPositions[i * 3 + 2] = rad * Math.sin(phi) * Math.sin(theta);
}
const starGeo = new T.BufferGeometry();
starGeo.setAttribute('position', new T.BufferAttribute(starPositions, 3));
const starMat = new T.PointsMaterial({
  color: '#fff6e3',
  size: 0.72,
  transparent: true,
  opacity: 0.35,
  depthWrite: false,
  fog: false
});
const starField = new T.Points(starGeo, starMat);
scene.add(starField);

// Balanced twilight lighting: warm golden sunset key + cool blue-violet shadow fill
const hemi = new T.HemisphereLight('#d6b4c8', '#3c3633', 0.95);
scene.add(hemi);

const sun = new T.DirectionalLight('#f7c68d', 2.15);
sun.position.set(-28, 21, -18);
sun.castShadow = true;
sun.shadow.mapSize.set(1536, 1536);
Object.assign(sun.shadow.camera, { left: -34, right: 34, top: 42, bottom: -44, near: 2, far: 105 });
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.025;
scene.add(sun);

const coolFill = new T.DirectionalLight('#6d87b0', 0.65);
coolFill.position.set(24, 16, 26);
scene.add(coolFill);

// ============================================================================
// ENVIRONMENT, PAVILION, POND, TREES & MEMORY LANDMARKS
// ============================================================================
const publicMemories = MEMORY_TRAIL.filter((m) => !m.isPrivate && m.isUnlocked !== false)
  .sort((a, b) => a.sortOrder - b.sortOrder);

const allInteractiveNodes = [
  ...ORIGINAL_DISCOVERIES.map((d, idx) => ({ ...d, nodeIndex: idx })),
  ...publicMemories.map((m, idx) => ({ ...m, nodeIndex: ORIGINAL_DISCOVERIES.length + idx }))
];

const landmarkCoords = allInteractiveNodes.map((n) => n.location);

buildTerrainAndFoliage(scene, lib, landmarkCoords);
const { colliders } = buildSakuraTrees(scene, lib);
const pavilion = buildGardenPavilion(scene, lib, -4.2, -14.2);
colliders.push(pavilion.collider);
const lanterns = placeGardenLanterns(scene, lib);
const pond = buildReflectivePond(scene, lib, sun.position);

const animatedProps = {};
const landmarkHitTargets = [];
const virtualLights = [
  ...pavilion.lights,
  ...lanterns.primaryLights,
  ...lanterns.secondaryLights
].filter(Boolean);

publicMemories.forEach((m, idx) => {
  const res = buildMemoryLandmark(scene, lib, m);
  Object.assign(animatedProps, res.animated);
  if (res.virtualLights?.length) virtualLights.push(...res.virtualLights);
  landmarkHitTargets.push({ nodeIdx: ORIGINAL_DISCOVERIES.length + idx, group: res.group });
});

setEntryProgress(68, 'Lighting lanterns & garden pond…');

loadExternalGardenModels(scene, landmarkCoords).catch((err) => {
  console.warn('Optional 3D models skipped:', err);
});

const { player, body, wings, aura } = buildPlayerOrb(scene, lib);
const { ghost, ghostEyes, baseY: ghostBaseY } = buildShySpirit(scene, lib, 2.2, -12.0);
const { bloomPetals, coreOrb: shrineCore, shrineLight } = buildBlossomShrine(scene, lib, 0.0, -30.0);
if (shrineLight) virtualLights.push(shrineLight);

// Dynamic Nearest-Light Pool (keeps NUM_POINT_LIGHTS = 5 in all PBR shaders for faster compile & higher FPS)
const LIGHT_POOL_SIZE = 5;
const lightPool = Array.from({ length: LIGHT_POOL_SIZE }, () => {
  const pl = new T.PointLight('#ffd294', 0, 8.5, 1.8);
  pl.position.set(0, -100, 0);
  scene.add(pl);
  return pl;
});
let activeLightCount = LIGHT_POOL_SIZE;

// Guiding Firefly Orb subtly hovering over the next unvisited memory
const guideOrb = new T.Sprite(
  new T.SpriteMaterial({
    map: textures.glowTex,
    color: '#ffe3a8',
    transparent: true,
    opacity: 0.78,
    depthWrite: false,
    blending: T.AdditiveBlending
  })
);
guideOrb.scale.set(0.72, 0.72, 0.72);
scene.add(guideOrb);

// Ground discovery & memory marker rings
const rings = [];
allInteractiveNodes.forEach((node) => {
  const ry = getTerrainHeight(node.location.x, node.location.z) + 0.032;
  const isMemory = node.type === 'memory';
  const r = new T.Mesh(
    new T.RingGeometry(isMemory ? 0.56 : 0.72, isMemory ? 0.62 : 0.78, 36),
    new T.MeshBasicMaterial({
      color: isMemory ? PALETTE.blossomMid : PALETTE.lanternGlow,
      transparent: true,
      opacity: 0.48,
      side: T.DoubleSide
    })
  );
  r.position.set(node.location.x, ry, node.location.z);
  r.rotation.x = -Math.PI / 2;
  scene.add(r);
  rings.push(r);
});

// ============================================================================
// RESTRAINED FIREFLIES, FLOATING SAKURA PETALS & DISCOVERY BURST
// ============================================================================
const rng = createRng(303);
const wisps = [];
for (let i = 0; i < 32; i++) {
  const isPond = i < 12;
  const wx = isPond ? -10.4 + (rng() - 0.5) * 8.5 : (rng() - 0.5) * 20;
  const wz = isPond ? -2.2 + (rng() - 0.5) * 10.5 : 21 - rng() * 56;
  const wy = Math.max(0.2, getTerrainHeight(wx, wz)) + 0.45 + rng() * 1.7;
  const sp = new T.Sprite(
    new T.SpriteMaterial({
      map: textures.glowTex,
      transparent: true,
      opacity: 0.62,
      depthWrite: false,
      blending: T.AdditiveBlending
    })
  );
  sp.position.set(wx, wy, wz);
  const sc = 0.24 + rng() * 0.34;
  sp.scale.set(sc, sc, sc);
  scene.add(sp);
  wisps.push({ o: sp, x: wx, y: wy, z: wz, phase: rng() * 6.28, baseScale: sc });
}

// Dropping cherry-blossom flurry (bezier petal shape & flutter tumble from a-flurry-of-cherry-blossoms)
const maxPetals = mobile ? 95 : 190;
const petalShape = new T.PlaneGeometry(0.145, 0.145, 2, 2);
{
  const pPos = petalShape.attributes.position;
  for (let i = 0; i < pPos.count; i++) {
    const px = pPos.getX(i);
    const py = pPos.getY(i);
    // Subtle natural petal cupping & arch
    const cupZ = (px * px) * 1.4 - (py * py) * 0.9;
    pPos.setZ(i, cupZ);
  }
  petalShape.computeVertexNormals();
}
const petals = new T.InstancedMesh(petalShape, lib.materials.cherryPetalMat, maxPetals);
const petalPalette = [new T.Color('#ffdce8'), new T.Color('#f7b5ce'), new T.Color('#f298ba'), new T.Color('#fff0f5')];
const petalData = Array.from({ length: maxPetals }, (_, idx) => {
  petals.setColorAt(idx, petalPalette[idx % petalPalette.length]);
  return {
    x: (rng() - 0.5) * 24,
    y: 0.4 + rng() * 8.2,
    z: 22 - rng() * 58,
    vx: (rng() - 0.5) * 0.45,
    vy: 0.45 + rng() * 0.35,
    theta: rng() * Math.PI * 2,
    phi: rng() * Math.PI * 2,
    dTheta: 0.7 + rng() * 0.8,
    dPhi: 0.8 + rng() * 0.9,
    sc: 0.78 + rng() * 0.55,
    restTimer: 0
  };
});
scene.add(petals);
if (reduced) petals.count = 0;

const burstCount = 22;
const burstMesh = new T.InstancedMesh(
  new T.SphereGeometry(0.036, 6, 4),
  new T.MeshBasicMaterial({ color: PALETTE.lanternGlow }),
  burstCount
);
burstMesh.count = 0;
scene.add(burstMesh);
let burstTimer = 0;
const burstOrigin = new T.Vector3();

function triggerDiscoveryBurst(x, y, z) {
  if (reduced) return;
  burstOrigin.set(x, y + 0.6, z);
  burstTimer = 1.5;
  burstMesh.count = burstCount;
}

// ============================================================================
// SELECTIVE POST-PROCESSING & QUALITY PRESETS
// ============================================================================
const rt = new T.WebGLRenderTarget(innerWidth, innerHeight, {
  type: T.HalfFloatType
});
const composer = new EffectComposer(renderer, rt);
const renderPass = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(
  new T.Vector2(innerWidth, innerHeight),
  0.24,
  0.42,
  0.88
);
const outputPass = new OutputPass();
composer.addPass(renderPass);
composer.addPass(bloomPass);
composer.addPass(outputPass);

const QUALITY_LEVELS = ['low', 'medium', 'high'];
let qualityIndex = mobile ? 1 : 2;
let usePostFX = true;

function applyQualityPreset(level) {
  if (level === 'low') {
    renderer.setPixelRatio(1);
    renderer.shadowMap.enabled = false;
    sun.castShadow = false;
    usePostFX = false;
    pond.setReflectiveEnabled(false);
    petals.count = reduced ? 0 : Math.floor(maxPetals * 0.35);
    activeLightCount = 2;
    wisps.forEach((w, i) => (w.o.visible = i % 3 === 0));
  } else if (level === 'medium') {
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.25));
    renderer.shadowMap.enabled = true;
    sun.castShadow = true;
    usePostFX = true;
    bloomPass.strength = 0.2;
    pond.setReflectiveEnabled(true);
    petals.count = reduced ? 0 : Math.floor(maxPetals * 0.68);
    activeLightCount = 4;
    wisps.forEach((w, i) => (w.o.visible = i % 2 === 0));
  } else {
    renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.4 : 1.75));
    renderer.shadowMap.enabled = true;
    sun.castShadow = true;
    usePostFX = true;
    bloomPass.strength = 0.24;
    pond.setReflectiveEnabled(true);
    petals.count = reduced ? 0 : maxPetals;
    activeLightCount = LIGHT_POOL_SIZE;
    wisps.forEach((w) => (w.o.visible = true));
  }
  composer.setSize(innerWidth, innerHeight);
  composer.setPixelRatio(renderer.getPixelRatio());
  bloomPass.setSize(innerWidth, innerHeight);
  renderer.shadowMap.needsUpdate = true;
  $('qualityButton').textContent = `quality: ${level}`;
}
applyQualityPreset(QUALITY_LEVELS[qualityIndex]);

$('qualityButton').onclick = () => {
  qualityIndex = (qualityIndex + 1) % QUALITY_LEVELS.length;
  applyQualityPreset(QUALITY_LEVELS[qualityIndex]);
};

// ============================================================================
// SKY / LIGHTING MOOD PRESETS (Twilight · Golden Hour · Starry Night)
// ============================================================================
const MOOD_PRESETS = [
  {
    key: 'twilight',
    label: 'sky: twilight',
    bg: new T.Color('#475773'),
    fog: new T.Color('#696682'),
    fogDensity: 0.0145,
    skyTint: new T.Color('#ffffff'),
    sunColor: new T.Color('#f7c68d'),
    sunInt: 2.15,
    hemiSky: new T.Color('#d6b4c8'),
    hemiGround: new T.Color('#3c3633'),
    hemiInt: 0.95,
    lightScale: 1.0,
    starOp: 0.35,
    moonOp: 0.42
  },
  {
    key: 'golden',
    label: 'sky: golden hour',
    bg: new T.Color('#8c686b'),
    fog: new T.Color('#b88978'),
    fogDensity: 0.0128,
    skyTint: new T.Color('#ffdec2'),
    sunColor: new T.Color('#ffbd6e'),
    sunInt: 2.85,
    hemiSky: new T.Color('#ffe0c2'),
    hemiGround: new T.Color('#524034'),
    hemiInt: 1.12,
    lightScale: 0.68,
    starOp: 0.0,
    moonOp: 0.12
  },
  {
    key: 'night',
    label: 'sky: starry night',
    bg: new T.Color('#141d30'),
    fog: new T.Color('#1d2740'),
    fogDensity: 0.016,
    skyTint: new T.Color('#5a6d96'),
    sunColor: new T.Color('#82a3d9'),
    sunInt: 0.92,
    hemiSky: new T.Color('#6277a6'),
    hemiGround: new T.Color('#1c202b'),
    hemiInt: 0.68,
    lightScale: 1.55,
    starOp: 0.95,
    moonOp: 0.72
  }
];
let moodIndex = 0;
let curMoodLightScale = 1.0;

$('moodButton')?.addEventListener('click', () => {
  moodIndex = (moodIndex + 1) % MOOD_PRESETS.length;
  $('moodButton').textContent = MOOD_PRESETS[moodIndex].label;
});

// ============================================================================
// STATUS TOAST, PROGRESS, INDEXEDDB PHOTOS & SYNTHESIZED SOUNDSCAPE
// ============================================================================
let started = false;
let sound = true;
let nearest = -1;
let activeNode = null;
let yaw = 0;
let opening = 0;
let ghostShyTimer = 0;
let organPulseTimer = 0;
let stepTimer = 0;
let firstFrameRendered = false;

let statusToastTimer = null;
function showStatusToast(text, durationMs = 3600) {
  const el = $('status');
  if (!el) return;
  el.textContent = text;
  if (statusToastTimer) clearTimeout(statusToastTimer);
  statusToastTimer = setTimeout(() => {
    el.textContent = '';
  }, durationMs);
}

const PROGRESS_KEY = 'hir_garden_progress_v1';
const PHOTO_DB_NAME = 'hir_garden_photos_v1';
const PHOTO_STORE = 'photos';
const foundDiscoveries = new Set();
const foundMemories = new Set();
const customPhotos = new Map();
let uploadedEaselTexture = null;

function loadSavedProgress() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    saved.discoveries?.forEach((id) => foundDiscoveries.add(id));
    saved.memories?.forEach((id) => foundMemories.add(id));
  } catch {
    // ignore storage access issues
  }
}

function saveProgress() {
  try {
    localStorage.setItem(
      PROGRESS_KEY,
      JSON.stringify({
        discoveries: [...foundDiscoveries],
        memories: [...foundMemories]
      })
    );
  } catch {
    // ignore storage access issues
  }
}

function openPhotoDB() {
  return new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) return reject(new Error('IndexedDB unavailable'));
    const req = indexedDB.open(PHOTO_DB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(PHOTO_STORE)) {
        db.createObjectStore(PHOTO_STORE);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function savePhotoToDB(id, dataUrl) {
  try {
    const db = await openPhotoDB();
    await new Promise((resolve, reject) => {
      const tx = db.transaction(PHOTO_STORE, 'readwrite');
      tx.objectStore(PHOTO_STORE).put(dataUrl, id);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
    db.close();
  } catch {
    // gracefully ignore in private browsing or restricted storage
  }
}

function applyPhotoTo3DEasel(dataUrl) {
  const artMesh = animatedProps.photoStandArt;
  if (!artMesh || !dataUrl) return;
  const img = new Image();
  img.onload = () => {
    const tex = new T.Texture(img);
    tex.colorSpace = T.SRGBColorSpace;
    tex.needsUpdate = true;
    if (uploadedEaselTexture) uploadedEaselTexture.dispose();
    uploadedEaselTexture = tex;
    artMesh.material.map = tex;
    artMesh.material.needsUpdate = true;
  };
  img.src = dataUrl;
}

async function loadSavedPhotosFromDB() {
  try {
    const db = await openPhotoDB();
    await new Promise((resolve, reject) => {
      const tx = db.transaction(PHOTO_STORE, 'readonly');
      const store = tx.objectStore(PHOTO_STORE);
      const req = store.openCursor();
      req.onsuccess = () => {
        const cursor = req.result;
        if (cursor) {
          customPhotos.set(cursor.key, cursor.value);
          cursor.continue();
        } else {
          resolve();
        }
      };
      req.onerror = () => reject(req.error);
    });
    db.close();
    if (customPhotos.has('memory-02')) {
      applyPhotoTo3DEasel(customPhotos.get('memory-02'));
    }
  } catch {
    // ignore storage access issues
  }
}

loadSavedProgress();
loadSavedPhotosFromDB();
let trailCompleteTriggered =
  foundDiscoveries.size === ORIGINAL_DISCOVERIES.length &&
  foundMemories.size === publicMemories.length;

allInteractiveNodes.forEach((node, idx) => {
  const visited = node.type === 'discovery' ? foundDiscoveries.has(node.id) : foundMemories.has(node.id);
  if (visited && rings[idx]) rings[idx].material.color.set('#c8e9b9');
});

let audioCtx;
let ambientGain;
let waterGain;
let sharedNoiseBuffer;

function ensureAudio() {
  if (!sound) return;
  audioCtx ??= new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  if (!sharedNoiseBuffer) {
    const bufferSize = audioCtx.sampleRate * 2;
    sharedNoiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = sharedNoiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.997 * b0 + white * 0.029;
      b1 = 0.985 * b1 + white * 0.032;
      b2 = 0.950 * b2 + white * 0.048;
      data[i] = (b0 + b1 + b2) * 0.12;
    }
  }
  if (!ambientGain) {
    const noise = audioCtx.createBufferSource();
    noise.buffer = sharedNoiseBuffer;
    noise.loop = true;
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 380;
    ambientGain = audioCtx.createGain();
    ambientGain.gain.value = 0.055;
    noise.connect(filter);
    filter.connect(ambientGain);
    ambientGain.connect(audioCtx.destination);
    noise.start();
  }
  if (!waterGain) {
    const waterNoise = audioCtx.createBufferSource();
    waterNoise.buffer = sharedNoiseBuffer;
    waterNoise.loop = true;
    const waterFilter = audioCtx.createBiquadFilter();
    waterFilter.type = 'bandpass';
    waterFilter.frequency.value = 920;
    waterFilter.Q.value = 1.3;
    waterGain = audioCtx.createGain();
    waterGain.gain.value = 0.0;
    waterNoise.connect(waterFilter);
    waterFilter.connect(waterGain);
    waterGain.connect(audioCtx.destination);
    waterNoise.start();
  }
}

function playFootstep() {
  if (!sound || !audioCtx || audioCtx.state !== 'running' || !sharedNoiseBuffer) return;
  const src = audioCtx.createBufferSource();
  src.buffer = sharedNoiseBuffer;
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 540 + Math.random() * 140;
  filter.Q.value = 1.6;
  const g = audioCtx.createGain();
  const t = audioCtx.currentTime;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.028, t + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.065);
  src.connect(filter);
  filter.connect(g);
  g.connect(audioCtx.destination);
  src.start(t, Math.random() * 1.4, 0.07);
}

function chime(notes) {
  if (!sound) return;
  ensureAudio();
  notes.forEach((f, i) => {
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    const t = audioCtx.currentTime + i * 0.14;
    o.type = 'sine';
    o.frequency.value = f;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.038, t + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.4);
    o.connect(g);
    g.connect(audioCtx.destination);
    o.start(t);
    o.stop(t + 1.5);
  });
}

function playOrganChord(notes, delaySec = 0, durationSec = 2.2) {
  if (!sound) return;
  ensureAudio();
  notes.forEach((f, i) => {
    const o1 = audioCtx.createOscillator();
    const o2 = audioCtx.createOscillator();
    const filter = audioCtx.createBiquadFilter();
    const g = audioCtx.createGain();
    const t = audioCtx.currentTime + delaySec + i * 0.06;
    o1.type = 'triangle';
    o2.type = 'sine';
    o1.frequency.value = f;
    o2.frequency.value = f * 2;
    filter.type = 'lowpass';
    filter.frequency.value = 1100;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.03, t + 0.14);
    g.gain.exponentialRampToValueAtTime(0.0001, t + durationSec);
    o1.connect(filter);
    o2.connect(filter);
    filter.connect(g);
    g.connect(audioCtx.destination);
    o1.start(t);
    o2.start(t);
    o1.stop(t + durationSec + 0.1);
    o2.stop(t + durationSec + 0.1);
  });
}

function playOrganMelody() {
  organPulseTimer = 4.5;
  if (!sound) return;
  ensureAudio();
  const progression = [
    { delay: 0.0, notes: [261.63, 329.63, 392.0, 523.25], dur: 1.15 },
    { delay: 0.85, notes: [220.0, 261.63, 329.63, 392.0], dur: 1.15 },
    { delay: 1.7, notes: [174.61, 261.63, 329.63, 440.0], dur: 1.15 },
    { delay: 2.55, notes: [196.0, 293.66, 329.63, 392.0], dur: 1.15 },
    { delay: 3.4, notes: [261.63, 329.63, 392.0, 493.88, 587.33], dur: 2.4 }
  ];
  progression.forEach((step) => playOrganChord(step.notes, step.delay, step.dur));
}

function playCandlePuff(relight = false) {
  if (!sound) return;
  ensureAudio();
  if (relight) {
    chime([523.25, 659.25]);
    return;
  }
  if (sharedNoiseBuffer) {
    const src = audioCtx.createBufferSource();
    src.buffer = sharedNoiseBuffer;
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 680;
    const g = audioCtx.createGain();
    const t = audioCtx.currentTime;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.08, t + 0.05);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.32);
    src.connect(filter);
    filter.connect(g);
    g.connect(audioCtx.destination);
    src.start(t, 0.2, 0.35);
  }
  chime([659.25, 783.99, 1046.5]);
}

// ============================================================================
// UI PANELS: MAP, COMPACT JOURNAL, PHOTO VIEWER & INTERACTION
// ============================================================================
function updateProgressUI() {
  $('count').textContent = `${foundDiscoveries.size} / ${ORIGINAL_DISCOVERIES.length} discoveries · ${foundMemories.size} / ${publicMemories.length} memories`;
  $('journalCount').textContent = `${foundMemories.size}/${publicMemories.length}`;
  renderMapAndJournal();
}

function renderMapAndJournal() {
  const discContainer = $('mapDiscoveries');
  discContainer.innerHTML = '';
  ORIGINAL_DISCOVERIES.forEach((d, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'map-item' + (foundDiscoveries.has(d.id) ? ' visited' : '');
    btn.innerHTML = `<span>${d.chapterNumber} · ${d.name}</span><span class="status-dot">${foundDiscoveries.has(d.id) ? '✿' : '○'}</span>`;
    btn.onclick = () => teleportToNode(idx);
    discContainer.appendChild(btn);
  });

  const memContainer = $('mapMemories');
  memContainer.innerHTML = '';
  publicMemories.forEach((m, idx) => {
    const nodeIdx = ORIGINAL_DISCOVERIES.length + idx;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'map-item' + (foundMemories.has(m.id) ? ' visited' : '');
    btn.innerHTML = `<span>${String(idx + 1).padStart(2, '0')} · ${m.title}</span><span class="status-dot">${foundMemories.has(m.id) ? '✿' : '○'}</span>`;
    btn.onclick = () => teleportToNode(nodeIdx);
    memContainer.appendChild(btn);
  });

  const jList = $('journalList');
  jList.innerHTML = '';
  publicMemories.forEach((m, idx) => {
    const visited = foundMemories.has(m.id);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'journal-item' + (visited ? ' visited' : '');
    btn.innerHTML = `<span><strong>${m.code}</strong> · ${m.title}<br><small style="margin:2px 0 0;opacity:.7">${m.date}</small></span><span class="status-dot">${visited ? 'View →' : 'Walk to'}</span>`;
    btn.onclick = () => {
      $('journal').hidden = true;
      $('journalButton').setAttribute('aria-expanded', 'false');
      teleportToNode(ORIGINAL_DISCOVERIES.length + idx, visited);
    };
    jList.appendChild(btn);
  });
}

function teleportToNode(nodeIdx, openImmediately = false) {
  const node = allInteractiveNodes[nodeIdx];
  if (!node) return;
  const tz = node.location.z + 1.45;
  player.position.set(node.location.x, getTerrainHeight(node.location.x, tz), tz);
  yaw = 0;
  closeMessage();
  $('map').hidden = true;
  $('journal').hidden = true;
  $('mapButton').setAttribute('aria-expanded', 'false');
  $('journalButton').setAttribute('aria-expanded', 'false');
  keys.clear();
  if (openImmediately) {
    nearest = nodeIdx;
    interact();
  }
}

let detailCameraView = null;

function setSceneFocus(mode) {
  const wbBtn = $('focusWhiteboard');
  const keyBtn = $('focusBrokenKey');
  const ovBtn = $('focusOverview');
  wbBtn?.classList.toggle('active', mode === 'whiteboard');
  keyBtn?.classList.toggle('active', mode === 'key');
  ovBtn?.classList.toggle('active', mode === 'overview');

  if (mode === 'whiteboard') {
    $('message').classList.add('inspecting-detail');
    detailCameraView = {
      pos: [1.85, 1.38, -24.08],
      look: [1.88, 1.15, -25.18]
    };
  } else if (mode === 'key') {
    $('message').classList.add('inspecting-detail');
    detailCameraView = {
      pos: [2.72, 0.92, -24.05],
      look: [2.98, 0.56, -24.68]
    };
  } else {
    $('message').classList.remove('inspecting-detail');
    detailCameraView = null;
  }
}

$('focusWhiteboard')?.addEventListener('click', () => setSceneFocus('whiteboard'));
$('focusBrokenKey')?.addEventListener('click', () => setSceneFocus('key'));
$('focusOverview')?.addEventListener('click', () => setSceneFocus('overview'));

function updateMemoryActionBar(node) {
  const bar = $('memoryActionBar');
  const label = $('memoryActionLabel');
  const btn = $('memoryActionBtn');
  if (!bar || !label || !btn) return;
  if (node?.id === 'memory-05' && animatedProps.cupcake) {
    bar.hidden = false;
    label.textContent = 'Birthday cupcake candle:';
    btn.textContent = animatedProps.cupcake.lit ? 'blow out candle ✦' : 'relight candle ✦';
  } else if (node?.id === 'memory-07') {
    bar.hidden = false;
    label.textContent = 'Choir organ:';
    btn.textContent = '♪ play organ melody';
  } else {
    bar.hidden = true;
  }
}

$('memoryActionBtn')?.addEventListener('click', () => {
  if (activeNode?.id === 'memory-05' && animatedProps.cupcake) {
    const c = animatedProps.cupcake;
    c.lit = !c.lit;
    c.flame.visible = c.lit;
    c.halo.visible = c.lit;
    if (c.tableGlow) c.tableGlow.intensity = c.lit ? 1.4 : 0.22;
    if (!c.lit) {
      triggerDiscoveryBurst(
        activeNode.location.x,
        getTerrainHeight(activeNode.location.x, activeNode.location.z) + 0.35,
        activeNode.location.z
      );
      showStatusToast('Make a wish, Hirushi ✿');
    } else {
      showStatusToast('Candle relit ✦', 2400);
    }
    playCandlePuff(c.lit);
    updateMemoryActionBar(activeNode);
  } else if (activeNode?.id === 'memory-07') {
    playOrganMelody();
    showStatusToast('♪ Playing a quiet organ melody…', 4400);
  }
});

function checkTrailComplete() {
  if (
    !trailCompleteTriggered &&
    foundDiscoveries.size === ORIGINAL_DISCOVERIES.length &&
    foundMemories.size === publicMemories.length
  ) {
    trailCompleteTriggered = true;
    opening = 1;
    triggerDiscoveryBurst(0, getTerrainHeight(0, -30) + 0.6, -30);
    chime([392, 493.88, 587.33, 659.25, 783.99, 987.77]);
    showStatusToast('✿ You walked through every memory in the garden.', 6200);
  }
}

function closeMessage() {
  $('message').hidden = true;
  $('message').classList.remove('inspecting-detail');
  if ($('memoryActionBar')) $('memoryActionBar').hidden = true;
  detailCameraView = null;
  activeNode = null;
  keys.clear();
}

function openNodePanel(node, nodeIdx) {
  activeNode = node;
  setSceneFocus('overview');
  if ($('sceneFocusBar')) {
    $('sceneFocusBar').hidden = node.id !== 'memory-09';
  }
  updateMemoryActionBar(node);

  if (node.type === 'discovery') {
    foundDiscoveries.add(node.id);
    $('chapter').textContent = `${node.chapterNumber} / ${node.name}`;
    $('memoryDate').textContent = '';
    $('themeLine').hidden = true;
    $('title').innerHTML = node.title;
    $('copy').textContent = node.description;
    $('photoContainer').hidden = true;
    $('photoPlaceholder').hidden = true;
    $('closeMessage').textContent = node.id === 'discovery-04' ? 'one tiny surprise ✿' : 'keep exploring →';
    if (node.id === 'discovery-01' && lanterns.gate.light) lanterns.gate.light.intensity = 12;
    if (node.id === 'discovery-03') ghostShyTimer = 2.0;
    if (node.id === 'discovery-04') opening = 1;
  } else {
    foundMemories.add(node.id);
    $('chapter').textContent = `${node.code} · MEMORY TRAIL`;
    $('memoryDate').textContent = node.date || '';
    if (node.theme) {
      $('themeLine').textContent = node.theme;
      $('themeLine').hidden = false;
    } else {
      $('themeLine').hidden = true;
    }
    $('title').textContent = node.title;
    $('copy').textContent = node.description;
    $('closeMessage').textContent = 'keep walking →';

    const photoSrc = customPhotos.get(node.id) || node.photo;
    if (photoSrc) {
      $('memoryPhoto').src = photoSrc;
      $('photoContainer').hidden = false;
      $('photoPlaceholder').hidden = true;
    } else if (node.photoCaption) {
      $('photoContainer').hidden = true;
      $('photoCaptionText').textContent = node.photoCaption;
      $('photoPlaceholder').hidden = false;
    } else {
      $('photoContainer').hidden = true;
      $('photoPlaceholder').hidden = true;
    }
  }

  rings[nodeIdx].material.color.set('#c8e9b9');
  triggerDiscoveryBurst(node.location.x, getTerrainHeight(node.location.x, node.location.z), node.location.z);
  saveProgress();
  updateProgressUI();
  $('message').hidden = false;
  $('closeMessage').focus();
  if (node.id === 'memory-07') {
    playOrganChord([261.63, 329.63, 392.0, 523.25]);
  } else {
    chime([392 + (nodeIdx % 6) * 45, 523.25, 659.25]);
  }
  checkTrailComplete();
  keys.clear();
}

function interact() {
  if (nearest < 0 || !$('message').hidden || $('note').open) return;
  openNodePanel(allInteractiveNodes[nearest], nearest);
}

$('photoInput').onchange = (e) => {
  const file = e.target.files?.[0];
  if (!file || !activeNode) return;
  const nodeId = activeNode.id;
  const reader = new FileReader();
  reader.onload = () => {
    const dataUrl = reader.result;
    customPhotos.set(nodeId, dataUrl);
    savePhotoToDB(nodeId, dataUrl);
    $('memoryPhoto').src = dataUrl;
    $('photoContainer').hidden = false;
    $('photoPlaceholder').hidden = true;
    if (nodeId === 'memory-02') {
      applyPhotoTo3DEasel(dataUrl);
      showStatusToast('Photo saved & framed on the garden easel ✿', 4200);
    } else {
      showStatusToast('Photo saved to this memory ✿', 3200);
    }
  };
  reader.readAsDataURL(file);
};

$('snapshotBtn')?.addEventListener('click', () => {
  try {
    document.body.classList.add('capturing-postcard');
    if (usePostFX) composer.render();
    else renderer.render(scene, camera);
    const dataUrl = renderer.domElement.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'memory-garden-postcard.png';
    document.body.appendChild(a);
    a.click();
    a.remove();
    showStatusToast('Postcard saved ✿', 3400);
  } catch {
    showStatusToast('Could not save postcard in this browser', 3400);
  } finally {
    document.body.classList.remove('capturing-postcard');
  }
});

$('openLightbox').onclick = () => {
  if (!activeNode) return;
  const src = customPhotos.get(activeNode.id) || activeNode.photo;
  if (!src) return;
  $('lightboxImg').src = src;
  $('lightboxCaption').textContent = `${activeNode.title} (${activeNode.date || ''})`;
  $('lightbox').showModal();
};
$('closeLightbox').onclick = () => $('lightbox').close();

$('begin').onclick = () => {
  started = true;
  document.body.classList.add('playing');
  $('entry').classList.add('leaving');
  setTimeout(() => ($('entry').hidden = true), 950);
  if (sound) ensureAudio();
  chime([392, 523.25, 659.25]);
};

$('sound').onclick = () => {
  sound = !sound;
  $('sound').textContent = sound ? '♪ sound on' : '♪ sound off';
  $('sound').setAttribute('aria-pressed', String(sound));
  if (sound && started) ensureAudio();
  else audioCtx?.suspend();
};

$('mapButton').onclick = () => {
  const open = $('map').hidden;
  $('map').hidden = !open;
  $('journal').hidden = true;
  $('mapButton').setAttribute('aria-expanded', String(open));
  $('journalButton').setAttribute('aria-expanded', 'false');
};
$('closeMap').onclick = () => {
  $('map').hidden = true;
  $('mapButton').setAttribute('aria-expanded', 'false');
};

$('journalButton').onclick = () => {
  const open = $('journal').hidden;
  $('journal').hidden = !open;
  $('map').hidden = true;
  $('journalButton').setAttribute('aria-expanded', String(open));
  $('mapButton').setAttribute('aria-expanded', 'false');
};
$('closeJournal').onclick = () => {
  $('journal').hidden = true;
  $('journalButton').setAttribute('aria-expanded', 'false');
};

$('home').onclick = $('reset').onclick = () => {
  player.position.set(0, getTerrainHeight(0, 21.5), 21.5);
  yaw = 0;
  closeMessage();
  $('map').hidden = true;
  $('journal').hidden = true;
  $('place').textContent = 'THE LANTERN GATE';
  keys.clear();
};

$('closeMessage').onclick = () => {
  if (activeNode?.id === 'discovery-04') {
    $('note').showModal();
    $('closeNote').focus();
  } else {
    closeMessage();
  }
};
$('closeNote').onclick = () => {
  $('note').close();
  closeMessage();
};
$('interact').onclick = interact;

// ============================================================================
// INPUT, EYE-LEVEL WALK-THROUGH CAMERA & RENDER LOOP
// ============================================================================
const keys = new Set();
const stick = { x: 0, y: 0 };
const velocity = { x: 0, z: 0 };
let drag = null;
let last = performance.now();

addEventListener('keydown', (e) => {
  if (e.target.tagName === 'BUTTON' && [' ', 'Enter'].includes(e.key)) return;
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) e.preventDefault();
  keys.add(e.code);
  if (e.code === 'KeyE' && !e.repeat) interact();
  if (e.code === 'Escape') {
    closeMessage();
    $('map').hidden = true;
    $('journal').hidden = true;
  }
  if (e.code === 'KeyM' && !e.repeat) $('mapButton').click();
  if (e.code === 'KeyJ' && !e.repeat) $('journalButton').click();
});
addEventListener('keyup', (e) => keys.delete(e.code));
addEventListener('blur', () => {
  keys.clear();
  stick.x = stick.y = 0;
});

const raycaster = new T.Raycaster();
const tapNdc = new T.Vector2();

renderer.domElement.addEventListener('pointerdown', (e) => {
  // Click/tap outside open Map or Journal drawer dismisses it
  if (!$('map').hidden || !$('journal').hidden) {
    $('map').hidden = true;
    $('journal').hidden = true;
    $('mapButton').setAttribute('aria-expanded', 'false');
    $('journalButton').setAttribute('aria-expanded', 'false');
    return;
  }
  drag = { id: e.pointerId, x: e.clientX, startX: e.clientX, startY: e.clientY };
  renderer.domElement.setPointerCapture(e.pointerId);
});
renderer.domElement.addEventListener('pointermove', (e) => {
  if (drag && drag.id === e.pointerId) {
    yaw -= (e.clientX - drag.x) * 0.005;
    drag.x = e.clientX;
  }
});
renderer.domElement.addEventListener('pointerup', (e) => {
  if (!drag || drag.id !== e.pointerId) {
    drag = null;
    return;
  }
  const moved = Math.hypot(e.clientX - drag.startX, e.clientY - drag.startY);
  drag = null;
  if (moved < 6 && started && $('message').hidden && !$('note').open && $('map').hidden && $('journal').hidden) {
    tapNdc.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
    raycaster.setFromCamera(tapNdc, camera);
    for (const target of landmarkHitTargets) {
      if (raycaster.intersectObject(target.group, true).length > 0) {
        const node = allInteractiveNodes[target.nodeIdx];
        const dist = Math.hypot(node.location.x - player.position.x, node.location.z - player.position.z);
        if (dist <= (node.interactionRadius || 3.2) + 1.4) {
          openNodePanel(node, target.nodeIdx);
          return;
        }
      }
    }
    if (nearest >= 0) interact();
  }
});
renderer.domElement.addEventListener('pointercancel', () => (drag = null));

$('resetProgress')?.addEventListener('click', () => {
  foundDiscoveries.clear();
  foundMemories.clear();
  trailCompleteTriggered = false;
  saveProgress();
  rings.forEach((r, idx) => {
    const isMem = allInteractiveNodes[idx]?.type === 'memory';
    r.material.color.set(isMem ? PALETTE.blossomMid : PALETTE.lanternGlow);
    r.scale.setScalar(1);
  });
  updateProgressUI();
  showStatusToast('Trail progress reset', 2400);
});

const joy = $('joystick');
function stickMove(e) {
  const r = joy.getBoundingClientRect();
  const x = (e.clientX - r.left - r.width / 2) / 34;
  const y = (e.clientY - r.top - r.height / 2) / 34;
  const l = Math.max(1, Math.hypot(x, y));
  stick.x = x / l;
  stick.y = y / l;
  joy.firstElementChild.style.transform = `translate(${stick.x * 30}px,${stick.y * 30}px)`;
}
joy.onpointerdown = (e) => {
  joy.setPointerCapture(e.pointerId);
  stickMove(e);
};
joy.onpointermove = (e) => {
  if (joy.hasPointerCapture(e.pointerId)) stickMove(e);
};
joy.onpointerup = joy.onpointercancel = () => {
  stick.x = stick.y = 0;
  joy.firstElementChild.style.transform = 'none';
};

document.addEventListener('visibilitychange', () => {
  keys.clear();
  stick.x = stick.y = 0;
  if (document.hidden) audioCtx?.suspend();
  else if (started && sound) audioCtx?.resume();
});

updateProgressUI();

// Pre-convert virtual light colors once & reuse scoring array to avoid per-frame GC
const scoredLights = virtualLights.map((vl) => {
  vl.colorObj = new T.Color(vl.color);
  return { vl, d2: 0 };
});

// Position guiding firefly at initial unvisited target
{
  const firstUnvisited = publicMemories.find((m) => !foundMemories.has(m.id));
  const gx = firstUnvisited ? firstUnvisited.location.x : 0;
  const gz = firstUnvisited ? firstUnvisited.location.z : -30;
  guideOrb.position.set(gx, getTerrainHeight(gx, gz) + 1.55, gz);
}
const guideTargetVec = new T.Vector3();

const camTarget = new T.Vector3();
const look = new T.Vector3();
// Eye-level composed opening frame looking through the cherry blossom arch down the stone path
camera.position.set(0, 2.05, 25.8);
look.set(0, 1.55, 11.0);
camera.lookAt(look);

let overrideCameraView = null;
const dummy = new T.Object3D();

function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.max(0.001, Math.min((now - last) / 1000, 0.05));
  last = now;
  if (document.hidden) return;
  const t = now / 1000;
  renderer.info.reset();

  windUniforms.uTime.value = t;
  windUniforms.uWindAmp.value = reduced ? 0 : 1.0;

  let movedWhileWalking = false;
  if (started && $('message').hidden && !$('note').open && $('map').hidden && $('journal').hidden) {
    let inputX = Number(keys.has('KeyD') || keys.has('ArrowRight')) - Number(keys.has('KeyA') || keys.has('ArrowLeft')) + stick.x;
    let inputZ = Number(keys.has('KeyS') || keys.has('ArrowDown')) - Number(keys.has('KeyW') || keys.has('ArrowUp')) + stick.y;
    const len = Math.max(1, Math.hypot(inputX, inputZ));
    inputX /= len;
    inputZ /= len;

    const targetVx = (inputX * Math.cos(yaw) + inputZ * Math.sin(yaw)) * 3.8;
    const targetVz = (-inputX * Math.sin(yaw) + inputZ * Math.cos(yaw)) * 3.8;
    const accel = 1 - Math.exp(-dt * 10);
    velocity.x = T.MathUtils.lerp(velocity.x, targetVx, accel);
    velocity.z = T.MathUtils.lerp(velocity.z, targetVz, accel);

    const nx = T.MathUtils.clamp(player.position.x + velocity.x * dt, -16, 16);
    const nz = T.MathUtils.clamp(player.position.z + velocity.z * dt, -37.5, 24);
    const blocked =
      colliders.some((c) => Math.hypot(nx - c.x, nz - c.z) < c.r + 0.28) ||
      pondDistance(nx, nz) < 5.35;

    const speed = Math.hypot(velocity.x, velocity.z);
    if (!blocked) {
      player.position.x = nx;
      player.position.z = nz;
      player.position.y = getTerrainHeight(nx, nz);
      if (speed > 0.65) movedWhileWalking = true;
    }
    if (speed > 0.18) {
      player.rotation.y = Math.atan2(velocity.x, velocity.z);
    }
  }

  // Subtle footsteps & proximity pond ambience
  if (started && sound && audioCtx && audioCtx.state === 'running') {
    if (movedWhileWalking) {
      stepTimer -= dt;
      if (stepTimer <= 0) {
        playFootstep();
        stepTimer = 0.42;
      }
    } else {
      stepTimer = Math.min(stepTimer, 0.12);
    }
    if (waterGain) {
      const pDist = pondDistance(player.position.x, player.position.z);
      const waterProx = T.MathUtils.clamp(1 - (pDist - 5.2) / 5.5, 0, 1);
      waterGain.gain.setTargetAtTime(waterProx * 0.042, audioCtx.currentTime, 0.2);
    }
  }

  // Smooth sky & mood lighting transition
  const targetMood = MOOD_PRESETS[moodIndex];
  const moodLerp = reduced ? 1 : 1 - Math.exp(-dt * 2.8);
  scene.background.lerp(targetMood.bg, moodLerp);
  scene.fog.color.lerp(targetMood.fog, moodLerp);
  scene.fog.density = T.MathUtils.lerp(scene.fog.density, targetMood.fogDensity, moodLerp);
  skyMat.color.lerp(targetMood.skyTint, moodLerp);
  sun.color.lerp(targetMood.sunColor, moodLerp);
  sun.intensity = T.MathUtils.lerp(sun.intensity, targetMood.sunInt, moodLerp);
  hemi.color.lerp(targetMood.hemiSky, moodLerp);
  hemi.groundColor.lerp(targetMood.hemiGround, moodLerp);
  hemi.intensity = T.MathUtils.lerp(hemi.intensity, targetMood.hemiInt, moodLerp);
  starMat.opacity = T.MathUtils.lerp(starMat.opacity, targetMood.starOp, moodLerp);
  moonHalo.material.opacity = T.MathUtils.lerp(moonHalo.material.opacity, targetMood.moonOp, moodLerp);
  curMoodLightScale = T.MathUtils.lerp(curMoodLightScale, targetMood.lightScale, moodLerp);

  // Nearest interactive station
  nearest = -1;
  let minDist = 3.6;
  allInteractiveNodes.forEach((node, idx) => {
    const radius = node.interactionRadius || 3.2;
    const d = Math.hypot(node.location.x - player.position.x, node.location.z - player.position.z);
    if (d < Math.min(minDist, radius)) {
      minDist = d;
      nearest = idx;
    }
  });

  $('interact').hidden = !started || nearest < 0 || !$('message').hidden || $('note').open;
  if (nearest >= 0) {
    const node = allInteractiveNodes[nearest];
    $('interact').textContent = `${node.interactLabel}${mobile ? '' : ' · E'}`;
    $('place').textContent = node.type === 'memory' ? `${node.code} · ${node.title.toUpperCase()}` : node.name;
  }

  // Guiding firefly hovering over the next unvisited memory + gentle ground ring pulse
  const nextMemIdx = publicMemories.findIndex((m) => !foundMemories.has(m.id));
  let guideRingIdx = -1;
  let gx = 0;
  let gz = -30;
  if (nextMemIdx >= 0) {
    const targetNode = publicMemories[nextMemIdx];
    gx = targetNode.location.x;
    gz = targetNode.location.z;
    guideRingIdx = ORIGINAL_DISCOVERIES.length + nextMemIdx;
  } else {
    guideRingIdx = ORIGINAL_DISCOVERIES.findIndex((d) => d.id === 'discovery-04');
  }
  const orbBobX = reduced ? 0 : Math.sin(t * 1.4) * 0.34;
  const orbBobY = reduced ? 0 : Math.sin(t * 2.2) * 0.2;
  const orbBobZ = reduced ? 0 : Math.cos(t * 1.1) * 0.34;
  guideTargetVec.set(gx + orbBobX, getTerrainHeight(gx, gz) + 1.55 + orbBobY, gz + orbBobZ);
  guideOrb.position.lerp(guideTargetVec, reduced ? 1 : 1 - Math.exp(-dt * 3.2));
  guideOrb.scale.setScalar(0.68 + (reduced ? 0 : Math.sin(t * 3.2) * 0.12));

  rings.forEach((r, idx) => {
    if (idx === guideRingIdx && !reduced) {
      const pulse = 1.0 + Math.sin(t * 3.0) * 0.11;
      r.scale.setScalar(pulse);
    } else if (r.scale.x !== 1) {
      r.scale.setScalar(1);
    }
  });

  // Eye-level, cinematic third-person follow camera (or test bookmark / smooth detail focus)
  if (overrideCameraView) {
    camera.position.set(...overrideCameraView.pos);
    camera.lookAt(...overrideCameraView.look);
  } else if (detailCameraView) {
    camTarget.set(...detailCameraView.pos);
    const dLook = new T.Vector3(...detailCameraView.look);
    camera.position.lerp(camTarget, reduced ? 1 : 1 - Math.exp(-dt * 6.5));
    look.lerp(dLook, reduced ? 1 : 1 - Math.exp(-dt * 6.5));
    camera.lookAt(look);
  } else {
    const camDist = 4.4;
    const camH = 1.92;
    camTarget.set(
      player.position.x + Math.sin(yaw) * camDist,
      player.position.y + camH,
      player.position.z + Math.cos(yaw) * camDist
    );
    camera.position.lerp(camTarget, reduced ? 1 : 1 - Math.exp(-dt * 5.2));
    look.set(
      player.position.x - Math.sin(yaw) * 3.8,
      player.position.y + 1.38,
      player.position.z - Math.cos(yaw) * 3.8
    );
    camera.lookAt(look);
  }

  // Player winged orb & shy spirit animations
  body.position.y = 0.55 + (reduced ? 0 : Math.sin(t * 3.0) * 0.055);
  aura.position.y = body.position.y;
  wings.forEach((w, i) => (w.rotation.z = reduced ? 0 : Math.sin(t * 16) * (i ? 1 : -1) * 0.3));

  const distToGhost = Math.hypot(player.position.x - ghost.position.x, player.position.z - ghost.position.z);
  if (ghostShyTimer > 0) ghostShyTimer = Math.max(0, ghostShyTimer - dt);
  ghost.position.y = ghostBaseY + 0.78 + (reduced ? 0 : Math.sin(t * 2.0) * 0.11);
  ghost.rotation.y = Math.sin(t * 0.6) * 0.28;
  ghost.rotation.z = distToGhost < 3.6 || ghostShyTimer > 0 ? -0.16 : 0;
  const blink = Math.sin(t * 1.7) > 0.96 ? 0.14 : 1;
  ghostEyes.forEach((eye) => (eye.scale.y = blink));

  // Pond & bespoke memory prop subtle life
  pond.update(dt, t);
  if (animatedProps.cupcake) {
    const c = animatedProps.cupcake;
    if (c.lit) {
      c.flame.visible = true;
      c.halo.visible = true;
      const f = 1 + Math.sin(t * 9.5) * 0.12;
      c.flame.scale.set(0.75, 1.45 * f, 0.75);
      c.halo.scale.setScalar(0.3 + Math.sin(t * 8) * 0.04);
      if (c.tableGlow) c.tableGlow.intensity = 1.4 + Math.sin(t * 9.5) * 0.14;
    } else {
      c.flame.visible = false;
      c.halo.visible = false;
      if (c.tableGlow) c.tableGlow.intensity = 0.22;
    }
  }
  if (animatedProps.organLamp) {
    if (organPulseTimer > 0) {
      organPulseTimer = Math.max(0, organPulseTimer - dt);
      animatedProps.organLamp.intensity = 1.6 + Math.sin(t * 7.5) * 0.55 + (organPulseTimer / 4.5) * 1.6;
    } else {
      animatedProps.organLamp.intensity = T.MathUtils.lerp(animatedProps.organLamp.intensity, 1.6, dt * 4);
    }
  }
  if (animatedProps.firstTextPhone) {
    const fp = animatedProps.firstTextPhone;
    const dPhone = Math.hypot(player.position.x - fp.location.x, player.position.z - fp.location.z);
    const wake = dPhone < 4.2 ? 1.0 : 0.22;
    const pulse = 0.85 + Math.sin(t * 4.5) * 0.2;
    fp.screenMat.emissiveIntensity = T.MathUtils.lerp(fp.screenMat.emissiveIntensity, wake * 0.78 * pulse, dt * 5);
    fp.halo.material.opacity = T.MathUtils.lerp(fp.halo.material.opacity, wake * 0.38 * pulse, dt * 5);
    fp.light.intensity = T.MathUtils.lerp(fp.light.intensity, wake * 1.55 * pulse, dt * 5);
    const rScale = 1 + Math.sin(t * 3.8) * (dPhone < 4.2 ? 0.18 : 0.05);
    fp.ring.scale.set(rScale, rScale, 1);
  }
  if (animatedProps.movieNight) {
    const mn = animatedProps.movieNight;
    mn.motes.forEach((m, idx) => {
      const wave = 0.5 + 0.5 * Math.sin(t * 3.2 - m.phase);
      m.mesh.position.y = m.baseY + Math.sin(t * 2.4 + idx) * 0.025;
      m.mesh.scale.setScalar(0.68 + wave * 0.55);
    });
  }

  // Assign nearest virtual lights to the 5-light GPU pool (centered around player or override camera)
  const focusX = overrideCameraView ? overrideCameraView.look[0] : player.position.x;
  const focusZ = overrideCameraView ? overrideCameraView.look[2] : player.position.z;
  for (let i = 0; i < scoredLights.length; i++) {
    const entry = scoredLights[i];
    const dx = entry.vl.x - focusX;
    const dz = entry.vl.z - focusZ;
    entry.d2 = dx * dx + dz * dz;
  }
  scoredLights.sort((a, b) => a.d2 - b.d2);
  for (let i = 0; i < LIGHT_POOL_SIZE; i++) {
    const pl = lightPool[i];
    if (i < activeLightCount && i < scoredLights.length) {
      const vl = scoredLights[i].vl;
      pl.position.set(vl.x, vl.y, vl.z);
      pl.color.copy(vl.colorObj);
      pl.intensity = vl.intensity * curMoodLightScale;
      pl.distance = vl.distance;
      pl.decay = vl.decay;
    } else {
      pl.intensity = 0;
    }
  }

  // Fireflies & falling blossom petals
  wisps.forEach((w) => {
    if (!w.o.visible) return;
    w.o.position.x = w.x + Math.sin(t * 0.5 + w.phase) * 0.55;
    w.o.position.y = w.y + Math.sin(t * 1.05 + w.phase) * 0.2;
    const pulse = w.baseScale * (0.85 + Math.sin(t * 2.2 + w.phase) * 0.2);
    w.o.scale.setScalar(pulse);
  });

  if (!reduced && petals.count > 0) {
    for (let i = 0; i < petals.count; i++) {
      const p = petalData[i];
      const groundY = Math.max(-0.18, getTerrainHeight(p.x, p.z)) + 0.025;
      if (p.restTimer > 0) {
        p.restTimer -= dt;
        const fade = Math.max(0.001, Math.min(1, p.restTimer / 1.1));
        dummy.position.set(p.x, groundY, p.z);
        dummy.rotation.set(-Math.PI / 2, p.theta, 0);
        dummy.scale.setScalar(p.sc * fade);
        if (p.restTimer <= 0) {
          p.x = (rng() - 0.5) * 24;
          p.y = 6.2 + rng() * 3.0;
          p.z = 22 - rng() * 58;
          p.theta = rng() * Math.PI * 2;
          p.phi = rng() * Math.PI * 2;
        }
      } else {
        p.x += (p.vx + Math.sin(t * 0.7 + p.theta) * 0.28) * dt;
        p.y -= p.vy * dt;
        p.z += Math.cos(t * 0.55 + p.phi) * 0.14 * dt;
        p.theta += p.dTheta * dt;
        p.phi += p.dPhi * dt;

        if (p.y <= groundY) {
          p.y = groundY;
          p.restTimer = 1.1;
          if (pondDistance(p.x, p.z) < 4.9) {
            pond.spawnRipple(p.x, p.z);
          }
        }
        dummy.position.set(p.x, p.y, p.z);
        dummy.rotation.set(p.phi, p.theta, Math.sin(p.phi) * 0.6);
        dummy.scale.set(p.sc, p.sc * (0.45 + 0.55 * Math.abs(Math.sin(p.phi))), p.sc);
      }
      dummy.updateMatrix();
      petals.setMatrixAt(i, dummy.matrix);
    }
    petals.instanceMatrix.needsUpdate = true;
  }

  if (burstTimer > 0) {
    burstTimer = Math.max(0, burstTimer - dt);
    const progress = 1 - burstTimer / 1.5;
    for (let i = 0; i < burstCount; i++) {
      const ang = (i / burstCount) * Math.PI * 2;
      const rad = progress * 1.5;
      dummy.position.set(
        burstOrigin.x + Math.cos(ang) * rad,
        burstOrigin.y + Math.sin(progress * Math.PI) * 1.0 + (i % 3) * 0.14,
        burstOrigin.z + Math.sin(ang) * rad
      );
      dummy.scale.setScalar(Math.max(0.01, (1 - progress) * 1.1));
      dummy.updateMatrix();
      burstMesh.setMatrixAt(i, dummy.matrix);
    }
    burstMesh.instanceMatrix.needsUpdate = true;
    if (burstTimer === 0) burstMesh.count = 0;
  }

  bloomPetals.forEach((p) => {
    p.rotation.x = T.MathUtils.lerp(p.rotation.x, opening ? -1.2 : -0.32, dt * 2);
    p.position.z = T.MathUtils.lerp(p.position.z, opening ? 0.5 : 0.24, dt * 2);
  });
  shrineCore.position.y = 0.32 + Math.sin(t * 1.8) * 0.04;

  if (usePostFX) composer.render();
  else renderer.render(scene, camera);

  if (!firstFrameRendered) {
    firstFrameRendered = true;
    setEntryProgress(100, 'Garden ready');
    $('entryLoader')?.classList.add('ready');
  }
}
requestAnimationFrame(frame);

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  composer.setSize(innerWidth, innerHeight);
  bloomPass.setSize(innerWidth, innerHeight);
});

window.setGardenView = (pos, lookAt) => {
  if (!pos) {
    overrideCameraView = null;
    return;
  }
  overrideCameraView = { pos, look: lookAt };
};

window.gardenState = () => {
  let meshes = 0, instanced = 0, sprites = 0, groupsMulti = 0, totalTris = 0;
  scene.traverse((o) => {
    if (o.isInstancedMesh) {
      instanced++;
      const idx = o.geometry.index;
      totalTris += ((idx ? idx.count : o.geometry.attributes.position.count) / 3) * o.count;
    } else if (o.isMesh) {
      meshes++;
      if (o.geometry.groups && o.geometry.groups.length > 1) groupsMulti++;
      const idx = o.geometry.index;
      totalTris += (idx ? idx.count : o.geometry.attributes.position.count) / 3;
    } else if (o.isSprite) {
      sprites++;
    }
  });
  return {
    started,
    firstFrameRendered,
    quality: QUALITY_LEVELS[qualityIndex],
    mood: MOOD_PRESETS[moodIndex].key,
    cupcakeLit: animatedProps.cupcake?.lit ?? null,
    activeLightCount,
    virtualLightCount: virtualLights.length,
    position: player.position.toArray(),
    cameraPos: camera.position.toArray(),
    nearest,
    discoveriesFound: foundDiscoveries.size,
    memoriesFound: foundMemories.size,
    totalStations: allInteractiveNodes.length,
    drawCalls: renderer.info.render.calls,
    triangles: renderer.info.render.triangles,
    sceneObjects: { meshes, instanced, sprites, groupsMulti, totalTris: Math.round(totalTris) }
  };
};
