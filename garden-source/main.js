import * as T from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ORIGINAL_DISCOVERIES, MEMORY_TRAIL } from './memories.js';
import { PALETTE, windUniforms, createRng, createMaterialLibrary } from './src/art/materials.js';
import { getTerrainHeight, pondDistance, pathX, buildTerrainAndFoliage } from './src/art/terrain.js';
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
import { getEntryGreeting } from './src/art/dailyGreetings.js';
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
scene.background = new T.Color('#42355e');
scene.fog = new T.FogExp2('#635482', 0.0145);

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

// Balanced twilight lighting: warm golden sunset key + amethyst-violet twilight shadow fill
const hemi = new T.HemisphereLight('#d9b5e6', '#3a2f42', 0.96);
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

const { player, body, wings, aura, starRing } = buildPlayerOrb(scene, lib);
const { ghost, ghostEyes, spiritShadow, baseY: ghostBaseY } = buildShySpirit(scene, lib, 2.2, -12.0);
const {
  bloom: shrineBloom,
  bloomPetals,
  bloomRings,
  coreOrb: shrineCore,
  halo: shrineHalo,
  pollenMotes,
  shrineLight
} = buildBlossomShrine(scene, lib, 0.0, -30.0);
colliders.push({ x: 0.0, z: -30.0, r: 1.72 });
if (shrineLight) virtualLights.push(shrineLight);

// Mood-Adaptive Fluttering Butterflies (Golden Hour & Twilight)
const butterflyRng = createRng(742);
const butterflies = [];
const bfWingGeo = new T.PlaneGeometry(0.11, 0.085);
bfWingGeo.translate(0.055, 0, 0);
const bfColors = ['#f6b8e0', '#d6b4ff', '#ffe2a8', '#b8e0ff'];
for (let i = 0; i < 8; i++) {
  const bGroup = new T.Group();
  const bx = (butterflyRng() - 0.5) * 14;
  const bz = 17 - butterflyRng() * 44;
  const by = getTerrainHeight(bx, bz) + 0.75 + butterflyRng() * 1.1;
  bGroup.position.set(bx, by, bz);
  const wMat = new T.MeshBasicMaterial({
    color: bfColors[i % bfColors.length],
    side: T.DoubleSide,
    transparent: true,
    opacity: 0.88
  });
  const wL = new T.Mesh(bfWingGeo, wMat);
  const wR = new T.Mesh(bfWingGeo, wMat);
  wL.scale.x = -1;
  bGroup.add(wL, wR);
  scene.add(bGroup);
  butterflies.push({
    group: bGroup,
    wL,
    wR,
    mat: wMat,
    cx: bx,
    cy: by,
    cz: bz,
    rad: 0.85 + butterflyRng() * 1.1,
    speed: 0.55 + butterflyRng() * 0.45,
    phase: butterflyRng() * 6.28
  });
}

// Starry Night Shooting Star Streak
const shootingStarMat = new T.MeshBasicMaterial({
  color: '#fff6e0',
  transparent: true,
  opacity: 0,
  depthWrite: false,
  blending: T.AdditiveBlending,
  fog: false
});
const shootingStar = new T.Mesh(new T.CylinderGeometry(0.015, 0.09, 8.5, 6), shootingStarMat);
shootingStar.rotation.z = Math.PI * 0.36;
shootingStar.visible = false;
scene.add(shootingStar);
let shootingStarTimer = 3.5;
let shootingStarLife = 0;
const shootingStarVel = new T.Vector3();

// Floating Sky Wish Lanterns (persisted in localStorage)
const LANTERN_KEY = 'hir_garden_lanterns_v1';
const skyLanterns = [];
const skyLanternBodyGeo = new T.CylinderGeometry(0.22, 0.14, 0.42, 10, 1, true);
const skyLanternRimGeo = new T.TorusGeometry(0.14, 0.012, 6, 12);

function spawnSkyLantern(x, y, z, { startHigh = false } = {}) {
  const g = new T.Group();
  const bodyMesh = new T.Mesh(skyLanternBodyGeo, lib.materials.skyLanternMat);
  g.add(bodyMesh);
  const rim = new T.Mesh(skyLanternRimGeo, lib.materials.woodDarkMat);
  rim.rotation.x = Math.PI / 2;
  rim.position.y = -0.21;
  g.add(rim);
  const glow = new T.Sprite(
    new T.SpriteMaterial({
      map: textures.glowTex,
      color: '#ffcf8f',
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
      blending: T.AdditiveBlending
    })
  );
  glow.scale.set(1.35, 1.35, 1.35);
  g.add(glow);
  g.position.set(x, startHigh ? 7.5 + Math.random() * 8.5 : y, z);
  scene.add(g);
  skyLanterns.push({
    group: g,
    baseX: x,
    baseZ: z,
    riseSpeed: 0.36 + Math.random() * 0.18,
    phase: Math.random() * 6.28,
    ceiling: 18 + Math.random() * 6
  });
}

function loadSavedWishLanterns() {
  try {
    const raw = localStorage.getItem(LANTERN_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (Array.isArray(saved)) {
      saved.slice(0, 10).forEach((l) => spawnSkyLantern(l.x, 8, l.z, { startHigh: true }));
    }
  } catch {
    // ignore storage issues
  }
}

function saveWishLantern(x, z) {
  try {
    const raw = localStorage.getItem(LANTERN_KEY);
    const list = raw ? JSON.parse(raw) : [];
    list.push({ x: Number(x.toFixed(2)), z: Number(z.toFixed(2)) });
    localStorage.setItem(LANTERN_KEY, JSON.stringify(list.slice(-10)));
  } catch {
    // ignore storage issues
  }
}
loadSavedWishLanterns();

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
  const qLabel = $('qualityButton')?.querySelector('.slot-label');
  const qText = level.charAt(0).toUpperCase() + level.slice(1);
  if (qLabel) qLabel.textContent = qText;
  else if ($('qualityButton')) $('qualityButton').textContent = `quality: ${level}`;
}
applyQualityPreset(QUALITY_LEVELS[qualityIndex]);

$('qualityButton').onclick = () => {
  qualityIndex = (qualityIndex + 1) % QUALITY_LEVELS.length;
  applyQualityPreset(QUALITY_LEVELS[qualityIndex]);
};

// ============================================================================
// SKY / LIGHTING MOOD PRESETS (Amethyst Twilight · Golden Hour · Starry Night)
// ============================================================================
const MOOD_PRESETS = [
  {
    key: 'twilight',
    label: 'Twilight',
    bg: new T.Color('#42355e'),
    fog: new T.Color('#635482'),
    fogDensity: 0.0145,
    skyTint: new T.Color('#f4e2ff'),
    sunColor: new T.Color('#f7c68d'),
    sunInt: 2.15,
    hemiSky: new T.Color('#d9b5e6'),
    hemiGround: new T.Color('#3a2f42'),
    hemiInt: 0.96,
    lightScale: 1.0,
    starOp: 0.4,
    moonOp: 0.45
  },
  {
    key: 'golden',
    label: 'Golden',
    bg: new T.Color('#8c6674'),
    fog: new T.Color('#b58584'),
    fogDensity: 0.0128,
    skyTint: new T.Color('#ffdec6'),
    sunColor: new T.Color('#ffbd6e'),
    sunInt: 2.85,
    hemiSky: new T.Color('#ffe0ca'),
    hemiGround: new T.Color('#523f3c'),
    hemiInt: 1.12,
    lightScale: 0.68,
    starOp: 0.0,
    moonOp: 0.12
  },
  {
    key: 'night',
    label: 'Starry',
    bg: new T.Color('#16122e'),
    fog: new T.Color('#211a42'),
    fogDensity: 0.016,
    skyTint: new T.Color('#675a99'),
    sunColor: new T.Color('#979ee6'),
    sunInt: 0.95,
    hemiSky: new T.Color('#776eb5'),
    hemiGround: new T.Color('#1d182e'),
    hemiInt: 0.72,
    lightScale: 1.62,
    starOp: 0.98,
    moonOp: 0.78
  }
];
let moodIndex = 0;
let curMoodLightScale = 1.0;

function cycleMood() {
  moodIndex = (moodIndex + 1) % MOOD_PRESETS.length;
  const mLabel = $('moodButton')?.querySelector('.slot-label');
  if (mLabel) mLabel.textContent = MOOD_PRESETS[moodIndex].label;
  else if ($('moodButton')) $('moodButton').textContent = `sky: ${MOOD_PRESETS[moodIndex].label.toLowerCase()}`;
  showStatusToast(`Sky mood: ${MOOD_PRESETS[moodIndex].label}`, 2200);
}
$('moodButton')?.addEventListener('click', cycleMood);

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

let rpgBannerTimer = null;
function showRpgBanner(sub, title) {
  const banner = $('rpgBanner');
  if (!banner) return;
  $('rpgBannerSub').textContent = sub;
  $('rpgBannerTitle').textContent = title;
  banner.hidden = false;
  requestAnimationFrame(() => banner.classList.add('show'));
  if (rpgBannerTimer) clearTimeout(rpgBannerTimer);
  rpgBannerTimer = setTimeout(() => {
    banner.classList.remove('show');
    setTimeout(() => {
      if (!banner.classList.contains('show')) banner.hidden = true;
    }, 480);
  }, 3600);
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

// Living Daily Entry Greeting (visit-aware + time-of-day sky match + daily whispers)
const VISITS_KEY = 'hir_garden_visits_v1';
let visitCount = 0;
try {
  visitCount = Math.max(0, parseInt(localStorage.getItem(VISITS_KEY) || '0', 10) || 0);
} catch {
  visitCount = 0;
}

const entryGreeting = getEntryGreeting({
  visitCount,
  memoriesFound: foundMemories.size,
  totalMemories: publicMemories.length,
  wishLanternCount: skyLanterns.length
});

if ($('entryEyebrow')) $('entryEyebrow').textContent = entryGreeting.eyebrow;
if ($('entryHeading')) $('entryHeading').innerHTML = entryGreeting.headingHtml;
if ($('entryLead')) $('entryLead').textContent = entryGreeting.lead;
if ($('begin')) $('begin').textContent = entryGreeting.buttonLabel;
if ($('entryStatusTrail')) $('entryStatusTrail').textContent = entryGreeting.trailPill;
if ($('entryStatusSky')) $('entryStatusSky').textContent = entryGreeting.skyPill;
if ($('entryStatusExtra')) $('entryStatusExtra').textContent = entryGreeting.extraPill;

// Sync starting sky mood immediately to match local time-of-day (no jarring transition)
moodIndex = entryGreeting.moodIndex;
{
  const initMood = MOOD_PRESETS[moodIndex];
  scene.background.copy(initMood.bg);
  scene.fog.color.copy(initMood.fog);
  scene.fog.density = initMood.fogDensity;
  skyMat.color.copy(initMood.skyTint);
  sun.color.copy(initMood.sunColor);
  sun.intensity = initMood.sunInt;
  hemi.color.copy(initMood.hemiSky);
  hemi.groundColor.copy(initMood.hemiGround);
  hemi.intensity = initMood.hemiInt;
  starMat.opacity = initMood.starOp;
  moonHalo.material.opacity = initMood.moonOp;
  curMoodLightScale = initMood.lightScale;
  const mLabel = $('moodButton')?.querySelector('.slot-label');
  if (mLabel) mLabel.textContent = initMood.label;
}

allInteractiveNodes.forEach((node, idx) => {
  const visited = node.type === 'discovery' ? foundDiscoveries.has(node.id) : foundMemories.has(node.id);
  if (visited && rings[idx]) rings[idx].material.color.set('#f5d292');
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

function playOrganNote(freq, durationSec = 1.1) {
  organPulseTimer = Math.max(organPulseTimer, 1.4);
  if (!sound) return;
  ensureAudio();
  const o1 = audioCtx.createOscillator();
  const o2 = audioCtx.createOscillator();
  const filter = audioCtx.createBiquadFilter();
  const g = audioCtx.createGain();
  const t = audioCtx.currentTime;
  o1.type = 'triangle';
  o2.type = 'sine';
  o1.frequency.value = freq;
  o2.frequency.value = freq * 2;
  filter.type = 'lowpass';
  filter.frequency.value = 1250;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.048, t + 0.04);
  g.gain.exponentialRampToValueAtTime(0.0001, t + durationSec);
  o1.connect(filter);
  o2.connect(filter);
  filter.connect(g);
  g.connect(audioCtx.destination);
  o1.start(t);
  o2.start(t);
  o1.stop(t + durationSec + 0.06);
  o2.stop(t + durationSec + 0.06);
}

const MUSIC_BOX_NOTES = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25];
let musicBoxTimer = 3.2;
let musicBoxIdx = 0;

function playGentleMusicBoxNote() {
  if (!sound || !audioCtx || audioCtx.state !== 'running') return;
  const seq = [0, 3, 5, 4, 2, 5, 6, 3, 1, 4, 7, 5];
  const freq = MUSIC_BOX_NOTES[seq[musicBoxIdx % seq.length]];
  musicBoxIdx++;
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  const t = audioCtx.currentTime;
  o.type = 'sine';
  o.frequency.value = freq;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.014, t + 0.045);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 2.4);
  o.connect(g);
  g.connect(audioCtx.destination);
  o.start(t);
  o.stop(t + 2.5);
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
  const pct = Math.round(((foundDiscoveries.size + foundMemories.size) / allInteractiveNodes.length) * 100);
  const fill = $('trailFill');
  if (fill) fill.style.width = `${pct}%`;
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
  stopTour();
  const zOffset = node.id === 'discovery-04' ? 2.65 : 1.45;
  const tz = node.location.z + zOffset;
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

// ============================================================================
// PLAYABLE 1-OCTAVE CHOIR ORGAN MINI-KEYBOARD (Memory 07)
// ============================================================================
const ORGAN_KEYS = [
  { note: 'C4', freq: 261.63, key: 'KeyA', label: 'A', black: false },
  { note: 'C#4', freq: 277.18, key: 'KeyW', label: 'W', black: true, leftPct: 8.6 },
  { note: 'D4', freq: 293.66, key: 'KeyS', label: 'S', black: false },
  { note: 'D#4', freq: 311.13, key: 'KeyE', label: 'E', black: true, leftPct: 21.1 },
  { note: 'E4', freq: 329.63, key: 'KeyD', label: 'D', black: false },
  { note: 'F4', freq: 349.23, key: 'KeyF', label: 'F', black: false },
  { note: 'F#4', freq: 369.99, key: 'KeyT', label: 'T', black: true, leftPct: 45.8 },
  { note: 'G4', freq: 392.0, key: 'KeyG', label: 'G', black: false },
  { note: 'G#4', freq: 415.3, key: 'KeyY', label: 'Y', black: true, leftPct: 58.3 },
  { note: 'A4', freq: 440.0, key: 'KeyH', label: 'H', black: false },
  { note: 'A#4', freq: 466.16, key: 'KeyU', label: 'U', black: true, leftPct: 70.8 },
  { note: 'B4', freq: 493.88, key: 'KeyJ', label: 'J', black: false },
  { note: 'C5', freq: 523.25, key: 'KeyK', label: 'K', black: false }
];
const organKeyButtons = new Map();

function triggerOrganKey(spec) {
  playOrganNote(spec.freq, 1.25);
  const btn = organKeyButtons.get(spec.key);
  if (btn) {
    btn.classList.add('pressed');
    setTimeout(() => btn.classList.remove('pressed'), 220);
  }
}

(function buildOrganKeyboardUI() {
  const kb = $('organKeyboard');
  if (!kb) return;
  ORGAN_KEYS.forEach((spec) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `organ-key ${spec.black ? 'black' : 'white'}`;
    btn.textContent = spec.label;
    btn.title = `${spec.note} (${spec.label})`;
    if (spec.black) btn.style.left = `${spec.leftPct}%`;
    btn.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      triggerOrganKey(spec);
    });
    kb.appendChild(btn);
    organKeyButtons.set(spec.key, btn);
  });
})();

function releaseWishLanternAtPlayer() {
  const lx = player.position.x - Math.sin(yaw) * 1.1;
  const lz = player.position.z - Math.cos(yaw) * 1.1;
  const ly = getTerrainHeight(lx, lz) + 1.15;
  spawnSkyLantern(lx, ly, lz);
  saveWishLantern(lx, lz);
  triggerDiscoveryBurst(lx, ly, lz);
  chime([523.25, 659.25, 783.99]);
  showStatusToast('✦ A wish lantern floats into the twilight sky…', 3400);
}
$('lanternButton')?.addEventListener('click', releaseWishLanternAtPlayer);

// Guided Memory Walk (Auto-Tour)
let tourActive = false;
let tourStep = 0;
let tourPauseTimer = 0;
const tourStops = [
  ...publicMemories.map((_, idx) => ORIGINAL_DISCOVERIES.length + idx),
  ORIGINAL_DISCOVERIES.findIndex((d) => d.id === 'discovery-04')
].filter((i) => i >= 0);

function stopTour() {
  if (!tourActive) return;
  tourActive = false;
  $('tourButton')?.setAttribute('aria-pressed', 'false');
  const lbl = $('tourButton')?.querySelector('.slot-label');
  if (lbl) lbl.textContent = 'Tour';
}

function toggleTour() {
  if (tourActive) {
    stopTour();
    showStatusToast('Guided tour paused', 2200);
    return;
  }
  closeMessage();
  $('map').hidden = true;
  $('journal').hidden = true;
  tourActive = true;
  tourStep = 0;
  tourPauseTimer = 0;
  $('tourButton')?.setAttribute('aria-pressed', 'true');
  const lbl = $('tourButton')?.querySelector('.slot-label');
  if (lbl) lbl.textContent = 'Stop';
  showStatusToast('✦ Guided Memory Walk started — sit back & enjoy', 3400);
}
$('tourButton')?.addEventListener('click', toggleTour);

function updateMemoryActionBar(node) {
  const bar = $('memoryActionBar');
  const label = $('memoryActionLabel');
  const btn = $('memoryActionBtn');
  if ($('organKeyboardWrap')) {
    $('organKeyboardWrap').hidden = node?.id !== 'memory-07';
  }
  if (!bar || !label || !btn) return;
  if (node?.id === 'memory-05' && animatedProps.cupcake) {
    bar.hidden = false;
    label.textContent = 'Birthday cupcake candle:';
    btn.textContent = animatedProps.cupcake.lit ? 'blow out candle ✦' : 'relight candle ✦';
  } else if (node?.id === 'memory-07') {
    bar.hidden = false;
    label.textContent = 'Choir organ:';
    btn.textContent = '♪ play organ melody';
  } else if (node?.id === 'discovery-04') {
    bar.hidden = false;
    label.textContent = 'Blossom sanctuary:';
    btn.textContent = 'release wish lantern ✦';
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
  } else if (activeNode?.id === 'discovery-04') {
    releaseWishLanternAtPlayer();
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
    showRpgBanner('TRAIL COMPLETE', 'Every Memory Unlocked ✿');
    showStatusToast('✿ You walked through every memory in the garden.', 6200);
  }
}

function closeMessage() {
  $('message').hidden = true;
  $('message').classList.remove('inspecting-detail');
  if ($('memoryActionBar')) $('memoryActionBar').hidden = true;
  if ($('organKeyboardWrap')) $('organKeyboardWrap').hidden = true;
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

  const isFirstTime =
    node.type === 'discovery' ? !foundDiscoveries.has(node.id) : !foundMemories.has(node.id);

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
    if (isFirstTime) showRpgBanner('GARDEN DISCOVERY', node.name);
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
    if (isFirstTime) showRpgBanner('MEMORY UNLOCKED', node.title);

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

  rings[nodeIdx].material.color.set('#f5d292');
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
  visitCount += 1;
  try {
    localStorage.setItem(VISITS_KEY, String(visitCount));
  } catch {
    // ignore storage issues
  }
  document.body.classList.add('playing');
  $('entry').classList.add('leaving');
  setTimeout(() => ($('entry').hidden = true), 950);
  if (sound) ensureAudio();
  chime([392, 523.25, 659.25]);
};

$('sound').onclick = () => {
  sound = !sound;
  const lbl = $('sound').querySelector('.slot-label');
  if (lbl) lbl.textContent = sound ? 'On' : 'Off';
  else $('sound').textContent = sound ? '♪ sound on' : '♪ sound off';
  $('sound').setAttribute('aria-pressed', String(sound));
  if (sound && started) ensureAudio();
  else audioCtx?.suspend();
};

$('minimapWrap')?.addEventListener('click', () => $('mapButton').click());

$('questToggle')?.addEventListener('click', () => {
  const qt = $('questTracker');
  if (!qt) return;
  const collapsed = qt.classList.toggle('collapsed');
  $('questToggle').textContent = collapsed ? '+' : '−';
});

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
  stopTour();
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

  // Playable 1-Octave Organ Mini-Keyboard takes keyboard priority when Memory 07 is open
  if (activeNode?.id === 'memory-07' && !$('message').hidden) {
    if (e.code === 'Escape') {
      closeMessage();
      return;
    }
    const organSpec = ORGAN_KEYS.find((k) => k.key === e.code);
    if (organSpec && !e.repeat) {
      e.preventDefault();
      triggerOrganKey(organSpec);
      return;
    }
  }

  if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
    stopTour();
  }
  keys.add(e.code);
  if (e.code === 'KeyE' && !e.repeat) interact();
  if (e.code === 'Escape') {
    stopTour();
    closeMessage();
    $('map').hidden = true;
    $('journal').hidden = true;
  }
  if (e.code === 'KeyM' && !e.repeat) $('mapButton').click();
  if (e.code === 'KeyJ' && !e.repeat) $('journalButton').click();
  if (e.code === 'KeyT' && !e.repeat && started) toggleTour();
  if (e.code === 'KeyL' && !e.repeat && started) releaseWishLanternAtPlayer();
  if (e.code === 'KeyV' && !e.repeat && started) cycleMood();
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

// ============================================================================
// MMORPG CIRCULAR FANTASY MINI-MAP & QUEST OBJECTIVE TRACKER
// ============================================================================
const minimapCanvas = $('minimapCanvas');
const minimapCtx = minimapCanvas?.getContext('2d');
let minimapTimer = 0;

function drawMinimap(t, nextRingIdx) {
  if (!minimapCtx || !minimapCanvas) return;
  const w = minimapCanvas.width;
  const h = minimapCanvas.height;
  const cx = w * 0.5;
  const cy = h * 0.5;
  const scale = 2.65; // pixels per world meter

  minimapCtx.clearRect(0, 0, w, h);

  // Twilight amethyst radar backdrop
  const bg = minimapCtx.createRadialGradient(cx, cy, 4, cx, cy, cx);
  bg.addColorStop(0, '#312054');
  bg.addColorStop(0.72, '#1f143a');
  bg.addColorStop(1, '#130b26');
  minimapCtx.fillStyle = bg;
  minimapCtx.fillRect(0, 0, w, h);

  // Subtle compass rings
  minimapCtx.strokeStyle = 'rgba(214, 178, 255, 0.16)';
  minimapCtx.lineWidth = 1;
  for (const r of [22, 42]) {
    minimapCtx.beginPath();
    minimapCtx.arc(cx, cy, r, 0, Math.PI * 2);
    minimapCtx.stroke();
  }

  const toMapX = (wx) => cx + (wx - player.position.x) * scale;
  const toMapY = (wz) => cy + (wz - player.position.z) * scale;

  // Firefly pond silhouette
  minimapCtx.fillStyle = 'rgba(116, 152, 224, 0.42)';
  minimapCtx.beginPath();
  minimapCtx.ellipse(toMapX(-10.4), toMapY(-2.2), 5.2 * scale, 6.2 * scale, 0.15, 0, Math.PI * 2);
  minimapCtx.fill();

  // Curved lantern stone path
  minimapCtx.strokeStyle = 'rgba(245, 210, 146, 0.36)';
  minimapCtx.lineWidth = 3;
  minimapCtx.lineCap = 'round';
  minimapCtx.beginPath();
  for (let wz = 22; wz >= -35; wz -= 2) {
    const mx = toMapX(pathX(wz));
    const my = toMapY(wz);
    if (wz === 22) minimapCtx.moveTo(mx, my);
    else minimapCtx.lineTo(mx, my);
  }
  minimapCtx.stroke();

  // Waypoint markers (visited = champagne gold, next target = pulsing sakura pink, unvisited = soft violet)
  allInteractiveNodes.forEach((node, idx) => {
    const mx = toMapX(node.location.x);
    const my = toMapY(node.location.z);
    if (Math.hypot(mx - cx, my - cy) > cx - 5) return;
    const visited = node.type === 'discovery' ? foundDiscoveries.has(node.id) : foundMemories.has(node.id);
    if (idx === nextRingIdx) {
      const pulseR = 4.8 + Math.sin(t * 4.5) * 1.8;
      minimapCtx.strokeStyle = 'rgba(243, 180, 208, 0.78)';
      minimapCtx.lineWidth = 1.4;
      minimapCtx.beginPath();
      minimapCtx.arc(mx, my, pulseR, 0, Math.PI * 2);
      minimapCtx.stroke();
    }
    minimapCtx.fillStyle =
      node.id === 'discovery-04'
        ? '#f5b6ff'
        : visited
          ? '#f5d292'
          : idx === nextRingIdx
            ? '#ff9ec9'
            : '#b28cff';
    minimapCtx.beginPath();
    minimapCtx.arc(mx, my, node.id === 'discovery-04' ? 4.2 : visited ? 2.8 : 3.2, 0, Math.PI * 2);
    minimapCtx.fill();
  });

  // Player directional chevron at center
  minimapCtx.save();
  minimapCtx.translate(cx, cy);
  minimapCtx.rotate(-yaw);
  minimapCtx.fillStyle = '#ffe5a8';
  minimapCtx.beginPath();
  minimapCtx.moveTo(0, -6.5);
  minimapCtx.lineTo(4.6, 5.2);
  minimapCtx.lineTo(0, 2.4);
  minimapCtx.lineTo(-4.6, 5.2);
  minimapCtx.closePath();
  minimapCtx.fill();
  minimapCtx.restore();
}

const COMPASS_ARROWS = ['↑', '↗', '→', '↘', '↓', '↙', '←', '↖'];
function updateQuestTracker(targetNode, targetLabel) {
  const titleEl = $('questTitle');
  const metaEl = $('questMeta');
  if (!titleEl || !metaEl || !targetNode) return;
  titleEl.textContent = targetLabel;
  const dx = targetNode.location.x - player.position.x;
  const dz = targetNode.location.z - player.position.z;
  const dist = Math.round(Math.hypot(dx, dz));
  // Angle relative to camera forward (-sin(yaw), -cos(yaw))
  const worldAngle = Math.atan2(dx, -dz);
  const relAngle = worldAngle + yaw;
  const oct = ((Math.round(relAngle / (Math.PI / 4)) % 8) + 8) % 8;
  metaEl.textContent = `${dist}m ${COMPASS_ARROWS[oct]}`;
}

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
    if (tourActive && tourStops.length > 0) {
      const stopNodeIdx = tourStops[tourStep % tourStops.length];
      const stopNode = allInteractiveNodes[stopNodeIdx];
      const stopZ = stopNode.location.z + (stopNode.id === 'discovery-04' ? 2.8 : 1.7);
      const dx = stopNode.location.x - player.position.x;
      const dz = stopZ - player.position.z;
      const dist = Math.hypot(dx, dz);
      if (dist > 0.38) {
        const stepSpeed = Math.min(2.65, dist * 1.4);
        const vx = (dx / dist) * stepSpeed;
        const vz = (dz / dist) * stepSpeed;
        player.position.x += vx * dt;
        player.position.z += vz * dt;
        player.position.y = getTerrainHeight(player.position.x, player.position.z);
        player.rotation.y = Math.atan2(vx, vz);
        const desiredYaw = Math.atan2(-dx, -dz);
        const diff = Math.atan2(Math.sin(desiredYaw - yaw), Math.cos(desiredYaw - yaw));
        yaw += diff * Math.min(1, dt * 2.2);
        movedWhileWalking = true;
      } else {
        if (tourPauseTimer <= 0) {
          tourPauseTimer = 4.2;
          showStatusToast(
            `✦ Guided Tour · ${stopNode.type === 'memory' ? `${stopNode.code} ${stopNode.title}` : stopNode.name}`,
            3800
          );
          if (stopNode.id === 'discovery-04') opening = 1;
        } else {
          tourPauseTimer -= dt;
          yaw += dt * 0.22;
          if (tourPauseTimer <= 0) {
            tourStep++;
            if (tourStep >= tourStops.length) {
              stopTour();
              showStatusToast('✿ Guided Memory Walk complete', 4200);
            }
          }
        }
      }
    } else {
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
  }

  // Subtle footsteps, proximity pond shimmer & gentle pentatonic music-box underscore
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
    if ($('message').hidden) {
      musicBoxTimer -= dt;
      if (musicBoxTimer <= 0) {
        playGentleMusicBoxNote();
        musicBoxTimer = 2.4 + Math.random() * 1.6;
      }
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
  let questTargetNode = null;
  let questTargetLabel = '04 · The Blossom Grove';
  if (nextMemIdx >= 0) {
    const targetNode = publicMemories[nextMemIdx];
    gx = targetNode.location.x;
    gz = targetNode.location.z;
    guideRingIdx = ORIGINAL_DISCOVERIES.length + nextMemIdx;
    questTargetNode = targetNode;
    questTargetLabel = `${String(nextMemIdx + 1).padStart(2, '0')} · ${targetNode.title}`;
  } else {
    guideRingIdx = ORIGINAL_DISCOVERIES.findIndex((d) => d.id === 'discovery-04');
    questTargetNode = allInteractiveNodes[guideRingIdx];
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

  // Throttle Circular Mini-Map & Quest Tracker redraws (~20fps)
  minimapTimer -= dt;
  if (minimapTimer <= 0) {
    minimapTimer = 0.05;
    drawMinimap(t, guideRingIdx);
    updateQuestTracker(questTargetNode, questTargetLabel);
  }

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

  // Upgraded Player Firefly Spirit (4 gossamer wings + orbiting gold stardust ring)
  body.position.y = 0.56 + (reduced ? 0 : Math.sin(t * 3.0) * 0.055);
  aura.position.y = body.position.y;
  if (starRing && !reduced) {
    starRing.rotation.z = t * 1.1;
    starRing.rotation.y = Math.sin(t * 0.7) * 0.35;
  }
  wings.forEach((w, i) => {
    const isRight = i >= 2;
    const isLower = i % 2 === 1;
    const flap = reduced ? 0 : Math.sin(t * 16 + (isLower ? 0.45 : 0)) * (isRight ? 1 : -1) * (isLower ? 0.24 : 0.34);
    w.rotation.z = flap;
  });

  // Shy Spirit animation + Companion Follow Mode once discovered!
  if (foundDiscoveries.has('discovery-03') && started) {
    const followX = player.position.x + Math.cos(yaw) * 1.25 + Math.sin(yaw) * 1.15;
    const followZ = player.position.z - Math.sin(yaw) * 1.25 + Math.cos(yaw) * 1.15;
    ghost.position.x = T.MathUtils.lerp(ghost.position.x, followX, 1 - Math.exp(-dt * 1.9));
    ghost.position.z = T.MathUtils.lerp(ghost.position.z, followZ, 1 - Math.exp(-dt * 1.9));
    const gTerrain = getTerrainHeight(ghost.position.x, ghost.position.z);
    ghost.position.y = gTerrain + 0.8 + (reduced ? 0 : Math.sin(t * 2.1) * 0.11);
    if (spiritShadow) spiritShadow.position.set(ghost.position.x, gTerrain + 0.02, ghost.position.z);
    ghost.rotation.y = Math.atan2(player.position.x - ghost.position.x, player.position.z - ghost.position.z);
  } else {
    ghost.position.y = ghostBaseY + 0.78 + (reduced ? 0 : Math.sin(t * 2.0) * 0.11);
    ghost.rotation.y = Math.sin(t * 0.6) * 0.28;
  }
  const distToGhost = Math.hypot(player.position.x - ghost.position.x, player.position.z - ghost.position.z);
  if (ghostShyTimer > 0) ghostShyTimer = Math.max(0, ghostShyTimer - dt);
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

  // Mood-Adaptive Butterflies, Shooting Stars & Floating Sky Wish Lanterns
  const bfTargetOp = targetMood.key === 'night' ? 0.0 : targetMood.key === 'golden' ? 0.92 : 0.65;
  butterflies.forEach((b) => {
    b.mat.opacity = T.MathUtils.lerp(b.mat.opacity, bfTargetOp, dt * 2.5);
    b.group.visible = b.mat.opacity > 0.04;
    if (!b.group.visible || reduced) return;
    const a = t * b.speed + b.phase;
    const bx = b.cx + Math.cos(a) * b.rad;
    const bz = b.cz + Math.sin(a * 1.3) * b.rad * 0.72;
    const by = b.cy + Math.sin(a * 2.4) * 0.24;
    b.group.position.set(bx, by, bz);
    b.group.rotation.y = -a;
    const flap = Math.sin(t * 14 + b.phase) * 0.85;
    b.wL.rotation.y = flap;
    b.wR.rotation.y = -flap;
  });

  if (targetMood.key === 'night' && !reduced) {
    if (shootingStarLife > 0) {
      shootingStarLife -= dt;
      shootingStar.position.addScaledVector(shootingStarVel, dt);
      shootingStarMat.opacity = Math.sin(Math.max(0, shootingStarLife / 1.1) * Math.PI) * 0.88;
      if (shootingStarLife <= 0) shootingStar.visible = false;
    } else {
      shootingStarTimer -= dt;
      if (shootingStarTimer <= 0) {
        shootingStarTimer = 4.2 + Math.random() * 4.5;
        shootingStarLife = 1.1;
        shootingStar.visible = true;
        shootingStar.position.set(-28 + Math.random() * 24, 38 + Math.random() * 14, -75 - Math.random() * 20);
        shootingStarVel.set(36, -15, 6);
      }
    }
  } else {
    shootingStar.visible = false;
  }

  skyLanterns.forEach((l) => {
    if (reduced) return;
    l.group.position.y += l.riseSpeed * dt;
    l.group.position.x = l.baseX + Math.sin(t * 0.45 + l.phase) * 0.9;
    l.group.position.z = l.baseZ + Math.cos(t * 0.38 + l.phase) * 0.9;
    l.group.rotation.y = Math.sin(t * 0.5 + l.phase) * 0.25;
    if (l.group.position.y > l.ceiling) {
      l.group.position.y = 8.5 + (l.phase % 2.5);
    }
  });

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

  // Hero Multi-Layered Blooming Flower progressive unfurling + golden pollen motes
  const bloomProgress = T.MathUtils.clamp(
    0.22 + (foundMemories.size / Math.max(1, publicMemories.length)) * 0.56 + (opening ? 0.22 : 0),
    0.22,
    1.0
  );
  if (bloomRings) {
    bloomRings.forEach((ring, rIdx) => {
      const targetTilt = T.MathUtils.lerp(ring.closedTilt, ring.openTilt, bloomProgress);
      const breathe = reduced ? 0 : Math.sin(t * 1.3 + rIdx * 0.9) * 0.035;
      ring.petals.forEach((pivot) => {
        pivot.rotation.x = T.MathUtils.lerp(pivot.rotation.x, targetTilt + breathe, dt * 2.2);
      });
    });
  }
  if (shrineBloom && !reduced) {
    shrineBloom.rotation.y += dt * 0.055;
  }
  shrineCore.position.y = 0.46 + (reduced ? 0 : Math.sin(t * 1.8) * 0.05);
  if (shrineHalo) {
    const haloScale = 2.4 + bloomProgress * 1.2 + (reduced ? 0 : Math.sin(t * 2.1) * 0.22);
    shrineHalo.scale.setScalar(haloScale);
  }
  if (pollenMotes && !reduced) {
    pollenMotes.forEach((m) => {
      const a = m.angle + t * m.speed;
      const r = m.rad * (0.85 + bloomProgress * 0.35);
      m.mesh.position.set(
        Math.cos(a) * r,
        m.baseH + Math.sin(t * 1.4 + m.angle) * 0.16,
        Math.sin(a) * r
      );
    });
  }

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
    visitCount,
    entryGreeting,
    quality: QUALITY_LEVELS[qualityIndex],
    mood: MOOD_PRESETS[moodIndex].key,
    tourActive,
    skyLanternCount: skyLanterns.length,
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
