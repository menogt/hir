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
import './style.css';

const $ = (id) => document.getElementById(id);
const mobile = innerWidth < 720;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

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

// Crescent moon & warm dusk horizon halo
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
publicMemories.forEach((m) => {
  const res = buildMemoryLandmark(scene, lib, m);
  Object.assign(animatedProps, res.animated);
});

const { player, body, wings, aura } = buildPlayerOrb(scene, lib);
const { ghost, ghostEyes, baseY: ghostBaseY } = buildShySpirit(scene, lib, 2.2, -12.0);
const { bloomPetals, coreOrb: shrineCore } = buildBlossomShrine(scene, lib, 0.0, -30.0);

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

const maxPetals = mobile ? 75 : 145;
const petalShape = new T.PlaneGeometry(0.085, 0.065);
const petalFallMat = new T.MeshStandardMaterial({
  color: PALETTE.blossomPale,
  roughness: 0.65,
  side: T.DoubleSide
});
const petals = new T.InstancedMesh(petalShape, petalFallMat, maxPetals);
const petalData = Array.from({ length: maxPetals }, () => ({
  x: (rng() - 0.5) * 20,
  y: rng() * 7.5,
  z: 22 - rng() * 58,
  p: rng() * 6.28
}));
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
    lanterns.secondaryLights.forEach((l) => (l.visible = false));
    wisps.forEach((w, i) => (w.o.visible = i % 3 === 0));
  } else if (level === 'medium') {
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.25));
    renderer.shadowMap.enabled = true;
    sun.castShadow = true;
    usePostFX = true;
    bloomPass.strength = 0.2;
    pond.setReflectiveEnabled(true);
    petals.count = reduced ? 0 : Math.floor(maxPetals * 0.68);
    lanterns.secondaryLights.forEach((l, i) => (l.visible = i % 2 === 0));
    wisps.forEach((w, i) => (w.o.visible = i % 2 === 0));
  } else {
    renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.4 : 1.75));
    renderer.shadowMap.enabled = true;
    sun.castShadow = true;
    usePostFX = true;
    bloomPass.strength = 0.24;
    pond.setReflectiveEnabled(true);
    petals.count = reduced ? 0 : maxPetals;
    lanterns.secondaryLights.forEach((l) => (l.visible = true));
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
// AUDIO & AMBIENCE (Synthesized Web Audio Wind + Chimes, Zero 404s)
// ============================================================================
let started = false;
let sound = true;
let nearest = -1;
let activeNode = null;
let yaw = 0;
let opening = 0;
let ghostShyTimer = 0;
const foundDiscoveries = new Set();
const foundMemories = new Set();
const customPhotos = new Map();

let audioCtx;
let ambientGain;

function ensureAudio() {
  if (!sound) return;
  audioCtx ??= new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  if (!ambientGain) {
    const bufferSize = audioCtx.sampleRate * 2;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.997 * b0 + white * 0.029;
      b1 = 0.985 * b1 + white * 0.032;
      b2 = 0.950 * b2 + white * 0.048;
      data[i] = (b0 + b1 + b2) * 0.12;
    }
    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;
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

function closeMessage() {
  $('message').hidden = true;
  $('message').classList.remove('inspecting-detail');
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
  updateProgressUI();
  $('message').hidden = false;
  $('closeMessage').focus();
  chime([392 + (nodeIdx % 6) * 45, 523.25, 659.25]);
  keys.clear();
}

function interact() {
  if (nearest < 0 || !$('message').hidden || $('note').open) return;
  openNodePanel(allInteractiveNodes[nearest], nearest);
}

$('photoInput').onchange = (e) => {
  const file = e.target.files?.[0];
  if (!file || !activeNode) return;
  const reader = new FileReader();
  reader.onload = () => {
    customPhotos.set(activeNode.id, reader.result);
    $('memoryPhoto').src = reader.result;
    $('photoContainer').hidden = false;
    $('photoPlaceholder').hidden = true;
  };
  reader.readAsDataURL(file);
};

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

renderer.domElement.addEventListener('pointerdown', (e) => {
  drag = { id: e.pointerId, x: e.clientX };
  renderer.domElement.setPointerCapture(e.pointerId);
});
renderer.domElement.addEventListener('pointermove', (e) => {
  if (drag && drag.id === e.pointerId) {
    yaw -= (e.clientX - drag.x) * 0.005;
    drag.x = e.clientX;
  }
});
renderer.domElement.addEventListener('pointerup', () => (drag = null));
renderer.domElement.addEventListener('pointercancel', () => (drag = null));

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

    if (!blocked) {
      player.position.x = nx;
      player.position.z = nz;
      player.position.y = getTerrainHeight(nx, nz);
    }
    if (Math.hypot(velocity.x, velocity.z) > 0.18) {
      player.rotation.y = Math.atan2(velocity.x, velocity.z);
    }
  }

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

  // Eye-level, cinematic third-person follow camera (or test bookmark / detail override)
  const activeViewOverride = overrideCameraView || detailCameraView;
  if (activeViewOverride) {
    camera.position.set(...activeViewOverride.pos);
    camera.lookAt(...activeViewOverride.look);
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
    const f = 1 + Math.sin(t * 9.5) * 0.12;
    animatedProps.cupcake.flame.scale.set(0.75, 1.45 * f, 0.75);
    animatedProps.cupcake.halo.scale.setScalar(0.3 + Math.sin(t * 8) * 0.04);
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
      p.y -= dt * 0.32;
      if (p.y < 0) p.y = 7.5;
      dummy.position.set(p.x + Math.sin(t * 0.45 + p.p) * 0.85, p.y, p.z);
      dummy.rotation.set(t * 0.5 + p.p, t * 0.3, t * 0.65);
      dummy.scale.setScalar(1);
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
    quality: QUALITY_LEVELS[qualityIndex],
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
