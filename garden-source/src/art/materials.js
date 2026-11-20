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

  function applyWindSway(material, { heightStart = 0.0, amp = 0.06, speed = 1.6, usePosY = false } = {}) {
    material.customProgramCacheKey = () => `wind-${heightStart}-${amp}-${speed}-${usePosY ? 1 : 0}`;
    const wExpr = usePosY
      ? `clamp(position.y, 0.0, 1.0)`
      : `max(0.0, uv.y - ${heightStart.toFixed(2)})`;
    material.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = windUniforms.uTime;
      shader.uniforms.uWindAmp = windUniforms.uWindAmp;
      shader.vertexShader =
        `uniform float uTime;\nuniform float uWindAmp;\n` +
        shader.vertexShader.replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
          float wFactor = ${wExpr};
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
    color: '#c9ae9e',
    map: woodAlbedo,
    normalMap: woodNormal,
    normalScale: new T.Vector2(1.25, 1.25),
    roughness: 0.64,
    metalness: 0.05
  });

  const woodDarkMat = new T.MeshStandardMaterial({
    color: '#6e524d',
    map: woodAlbedo,
    normalMap: woodNormal,
    normalScale: new T.Vector2(1.25, 1.25),
    roughness: 0.7,
    metalness: 0.05
  });

  const roofTileMat = new T.MeshStandardMaterial({
    map: roofAlbedo,
    normalMap: roofNormal,
    normalScale: new T.Vector2(1.35, 1.35),
    roughness: 0.62,
    metalness: 0.14
  });

  const shojiMat = new T.MeshStandardMaterial({
    map: shojiTex,
    emissiveMap: shojiTex,
    emissive: new T.Color('#ffc172'),
    emissiveIntensity: 1.65,
    roughness: 0.45
  });

  const blossomCardMat = new T.MeshStandardMaterial({
    map: blossomTex,
    alphaTest: 0.32,
    side: T.DoubleSide,
    roughness: 0.68,
    metalness: 0.0,
    emissive: new T.Color('#965274'),
    emissiveIntensity: 0.36
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

  const foliage3DMat = new T.MeshStandardMaterial({
    vertexColors: true,
    side: T.DoubleSide,
    roughness: 0.58,
    metalness: 0.03,
    emissive: new T.Color('#19241b'),
    emissiveIntensity: 0.16
  });
  applyWindSway(foliage3DMat, { heightStart: 0.04, amp: 0.085, speed: 1.85, usePosY: true });

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

  const ceramicMat = new T.MeshPhysicalMaterial({
    color: '#f3ebe1',
    roughness: 0.2,
    metalness: 0.04,
    clearcoat: 0.85,
    clearcoatRoughness: 0.14
  });

  const darkMetalMat = new T.MeshStandardMaterial({
    color: '#2c2938',
    roughness: 0.36,
    metalness: 0.76
  });

  const brassMat = new T.MeshPhysicalMaterial({
    color: '#e6c17a',
    roughness: 0.24,
    metalness: 0.88,
    clearcoat: 0.35,
    clearcoatRoughness: 0.2
  });

  const glassMat = new T.MeshPhysicalMaterial({
    color: '#ece6fa',
    roughness: 0.08,
    metalness: 0.08,
    clearcoat: 1.0,
    envMapIntensity: 1.6,
    transparent: true,
    opacity: 0.44
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

  // Procedural story-specific high-DPI textures (non-invented, crisp details)
  // 1. Memory 02: Intentional non-face assignment photo placeholder card
  const phCanvas = document.createElement('canvas');
  phCanvas.width = 512;
  phCanvas.height = 384;
  const pctx = phCanvas.getContext('2d');
  const pGrad = pctx.createLinearGradient(0, 0, 0, 384);
  pGrad.addColorStop(0, '#f6efe4');
  pGrad.addColorStop(1, '#e7dccb');
  pctx.fillStyle = pGrad;
  pctx.fillRect(0, 0, 512, 384);
  // Subtle mat border & photo corners
  pctx.strokeStyle = '#9a826b';
  pctx.lineWidth = 4;
  pctx.strokeRect(24, 24, 464, 336);
  pctx.strokeStyle = '#c5ad93';
  pctx.lineWidth = 2;
  pctx.setLineDash([8, 6]);
  pctx.strokeRect(42, 42, 428, 300);
  pctx.setLineDash([]);
  // Photo mounting corners
  pctx.fillStyle = '#6f5542';
  for (const [cx, cy, dx, dy] of [
    [36, 36, 1, 1],
    [476, 36, -1, 1],
    [36, 348, 1, -1],
    [476, 348, -1, -1]
  ]) {
    pctx.beginPath();
    pctx.moveTo(cx, cy);
    pctx.lineTo(cx + dx * 28, cy);
    pctx.lineTo(cx, cy + dy * 28);
    pctx.closePath();
    pctx.fill();
  }
  // Sustainability leaf emblem in center (no fictional faces!)
  pctx.save();
  pctx.translate(256, 142);
  pctx.fillStyle = 'rgba(105, 138, 102, 0.18)';
  pctx.beginPath();
  pctx.arc(0, 0, 54, 0, Math.PI * 2);
  pctx.fill();
  pctx.strokeStyle = '#5c7f59';
  pctx.lineWidth = 4;
  pctx.fillStyle = '#7ea37a';
  pctx.beginPath();
  pctx.moveTo(0, 34);
  pctx.bezierCurveTo(-36, 18, -38, -24, 0, -40);
  pctx.bezierCurveTo(38, -24, 36, 18, 0, 34);
  pctx.fill();
  pctx.stroke();
  pctx.beginPath();
  pctx.moveTo(0, 36);
  pctx.lineTo(0, -28);
  pctx.stroke();
  pctx.restore();
  // Typography
  pctx.fillStyle = '#4e3c30';
  pctx.textAlign = 'center';
  pctx.font = '600 18px "Plus Jakarta Sans", sans-serif';
  pctx.fillText('JULY 27, 2026 · UNIVERSITY', 256, 232);
  pctx.font = 'italic 600 28px "Cormorant Garamond", Georgia, serif';
  pctx.fillText('Sustainability Group Photo', 256, 268);
  pctx.fillStyle = '#7d6858';
  pctx.font = '500 15px "Plus Jakarta Sans", sans-serif';
  pctx.fillText('[ Reserved for Real Group Photograph ]', 256, 304);
  const assignmentPlaceholderTex = new T.CanvasTexture(phCanvas);
  assignmentPlaceholderTex.colorSpace = T.SRGBColorSpace;

  // 2. Memory 03 & 08: University exam paper / lecture notes sheet
  const exCanvas = document.createElement('canvas');
  exCanvas.width = 256;
  exCanvas.height = 340;
  const exCtx = exCanvas.getContext('2d');
  exCtx.fillStyle = '#f8f3ea';
  exCtx.fillRect(0, 0, 256, 340);
  exCtx.fillStyle = '#3d4c63';
  exCtx.fillRect(20, 22, 140, 10);
  exCtx.fillStyle = '#7b8ba1';
  exCtx.fillRect(20, 40, 95, 6);
  exCtx.strokeStyle = '#c4baa8';
  exCtx.lineWidth = 2;
  exCtx.strokeRect(18, 16, 220, 308);
  for (let y = 68; y < 300; y += 18) {
    exCtx.strokeStyle = 'rgba(130, 148, 170, 0.45)';
    exCtx.beginPath();
    exCtx.moveTo(28, y);
    exCtx.lineTo(226, y);
    exCtx.stroke();
    if (y % 36 === 0) {
      exCtx.fillStyle = 'rgba(70, 82, 98, 0.65)';
      exCtx.fillRect(32, y - 9, 110 + ((y * 13) % 65), 4);
    }
  }
  // Subtle exam checkmark / box in corner
  exCtx.strokeStyle = '#c45b5b';
  exCtx.lineWidth = 3;
  exCtx.strokeRect(184, 24, 42, 32);
  exCtx.beginPath();
  exCtx.moveTo(193, 40);
  exCtx.lineTo(202, 48);
  exCtx.lineTo(218, 30);
  exCtx.stroke();
  const examSheetTex = new T.CanvasTexture(exCanvas);
  examSheetTex.colorSpace = T.SRGBColorSpace;

  // 3. Memory 04 & 10: Smartphone lock/notification screen (simple "Hi", no invented chat log)
  const phoneCanvas = document.createElement('canvas');
  phoneCanvas.width = 256;
  phoneCanvas.height = 512;
  const phCtx = phoneCanvas.getContext('2d');
  const scrGrad = phCtx.createLinearGradient(0, 0, 0, 512);
  scrGrad.addColorStop(0, '#1d2438');
  scrGrad.addColorStop(0.5, '#2b334d');
  scrGrad.addColorStop(1, '#3b2d44');
  phCtx.fillStyle = scrGrad;
  phCtx.fillRect(0, 0, 256, 512);
  // Clock indicator
  phCtx.fillStyle = 'rgba(255, 246, 235, 0.9)';
  phCtx.textAlign = 'center';
  phCtx.font = '300 54px "Plus Jakarta Sans", sans-serif';
  phCtx.fillText('18:42', 128, 128);
  // Warm notification card ("Hi") — high contrast against bloom
  phCtx.fillStyle = 'rgba(34, 28, 44, 0.92)';
  phCtx.strokeStyle = '#e8b878';
  phCtx.lineWidth = 4;
  phCtx.beginPath();
  phCtx.roundRect(22, 200, 212, 92, 18);
  phCtx.fill();
  phCtx.stroke();
  phCtx.fillStyle = '#e8b878';
  phCtx.textAlign = 'left';
  phCtx.font = '700 16px "Plus Jakarta Sans", sans-serif';
  phCtx.fillText('NEW MESSAGE', 42, 234);
  phCtx.fillStyle = '#fff5e6';
  phCtx.font = '700 30px "Plus Jakarta Sans", sans-serif';
  phCtx.fillText('“Hi”', 42, 272);
  const phoneLockTex = new T.CanvasTexture(phoneCanvas);
  phoneLockTex.colorSpace = T.SRGBColorSpace;

  // 4. Memory 07: Choir & organ sheet music notation
  const smCanvas = document.createElement('canvas');
  smCanvas.width = 512;
  smCanvas.height = 340;
  const smCtx = smCanvas.getContext('2d');
  smCtx.fillStyle = '#f7f0e2';
  smCtx.fillRect(0, 0, 512, 340);
  // Center book fold shadow
  const foldG = smCtx.createLinearGradient(236, 0, 276, 0);
  foldG.addColorStop(0, 'rgba(90,70,50,0)');
  foldG.addColorStop(0.5, 'rgba(90,70,50,0.28)');
  foldG.addColorStop(1, 'rgba(90,70,50,0)');
  smCtx.fillStyle = foldG;
  smCtx.fillRect(236, 0, 40, 340);
  // Staff lines & notes on both pages
  smCtx.strokeStyle = '#5c4d3d';
  smCtx.fillStyle = '#3b2f25';
  for (const pageX of [28, 278]) {
    smCtx.fillRect(pageX + 45, 24, 110, 7);
    for (let staff = 0; staff < 4; staff++) {
      const sy = 58 + staff * 66;
      smCtx.lineWidth = 1.5;
      for (let l = 0; l < 5; l++) {
        smCtx.beginPath();
        smCtx.moveTo(pageX, sy + l * 7);
        smCtx.lineTo(pageX + 204, sy + l * 7);
        smCtx.stroke();
      }
      // Measure bars & musical notes
      for (let n = 0; n < 7; n++) {
        const nx = pageX + 18 + n * 26;
        const ny = sy + ((n * 11 + staff * 7) % 4) * 7;
        smCtx.beginPath();
        smCtx.ellipse(nx, ny, 5, 3.8, -0.3, 0, Math.PI * 2);
        smCtx.fill();
        smCtx.lineWidth = 2;
        smCtx.beginPath();
        smCtx.moveTo(nx + 4, ny);
        smCtx.lineTo(nx + 4, ny - 20);
        smCtx.stroke();
      }
    }
  }
  const sheetMusicTex = new T.CanvasTexture(smCanvas);
  sheetMusicTex.colorSpace = T.SRGBColorSpace;

  // 5. Memory 09: Library study room whiteboard ("Hirushi × Menaka")
  const wbCanvas = document.createElement('canvas');
  wbCanvas.width = 512;
  wbCanvas.height = 320;
  const wbCtx = wbCanvas.getContext('2d');
  wbCtx.fillStyle = '#f7f9fc';
  wbCtx.fillRect(0, 0, 512, 320);
  // Subtle dry-erase smudge & grid wireframe diagram on left
  wbCtx.strokeStyle = 'rgba(70, 105, 155, 0.35)';
  wbCtx.lineWidth = 3;
  wbCtx.strokeRect(28, 36, 130, 90);
  wbCtx.beginPath();
  wbCtx.moveTo(28, 60);
  wbCtx.lineTo(158, 60);
  wbCtx.stroke();
  wbCtx.strokeRect(40, 72, 46, 40);
  wbCtx.strokeRect(96, 72, 50, 40);
  // Prominent marker writing: "Hirushi × Menaka"
  wbCtx.save();
  wbCtx.translate(275, 165);
  wbCtx.rotate(-0.04);
  wbCtx.fillStyle = '#24477a';
  wbCtx.textAlign = 'center';
  wbCtx.font = '700 42px "Comic Sans MS", "Segoe Print", "Plus Jakarta Sans", cursive, sans-serif';
  wbCtx.fillText('Hirushi × Menaka', 0, 0);
  // Marker underline flourish
  wbCtx.strokeStyle = '#c84b6b';
  wbCtx.lineWidth = 5;
  wbCtx.lineCap = 'round';
  wbCtx.beginPath();
  wbCtx.moveTo(-165, 22);
  wbCtx.quadraticCurveTo(0, 34, 168, 16);
  wbCtx.stroke();
  wbCtx.restore();
  // Small corner note "Web Project — Study Room"
  wbCtx.fillStyle = '#53687e';
  wbCtx.font = '600 16px "Plus Jakarta Sans", sans-serif';
  wbCtx.fillText('Web Project · Study Room 02', 32, 282);
  const whiteboardTex = new T.CanvasTexture(wbCanvas);
  whiteboardTex.colorSpace = T.SRGBColorSpace;

  // 6. Memory 09: Laptop web-project screen
  const wpCanvas = document.createElement('canvas');
  wpCanvas.width = 256;
  wpCanvas.height = 160;
  const wpCtx = wpCanvas.getContext('2d');
  wpCtx.fillStyle = '#1b2230';
  wpCtx.fillRect(0, 0, 256, 160);
  wpCtx.fillStyle = '#273144';
  wpCtx.fillRect(0, 0, 56, 160);
  wpCtx.fillStyle = '#f2ede4';
  wpCtx.fillRect(68, 16, 172, 128);
  wpCtx.fillStyle = '#6b94b8';
  wpCtx.fillRect(76, 24, 156, 26);
  wpCtx.fillStyle = '#d8b4a0';
  wpCtx.fillRect(76, 58, 74, 68);
  wpCtx.fillStyle = '#9bb89e';
  wpCtx.fillRect(158, 58, 74, 68);
  const webProjectScreenTex = new T.CanvasTexture(wpCanvas);
  webProjectScreenTex.colorSpace = T.SRGBColorSpace;

  // 7. Memory 10: Atmospheric late-night movie screen (origami yellow paper boat & warm crimson-amber reflection, no copyrighted film art)
  const mvCanvas = document.createElement('canvas');
  mvCanvas.width = 512;
  mvCanvas.height = 320;
  const mvCtx = mvCanvas.getContext('2d');
  const mvGrad = mvCtx.createLinearGradient(0, 0, 0, 320);
  mvGrad.addColorStop(0, '#0d101d');
  mvGrad.addColorStop(0.58, '#1a1b2f');
  mvGrad.addColorStop(1, '#261824');
  mvCtx.fillStyle = mvGrad;
  mvCtx.fillRect(0, 0, 512, 320);
  // Subtle crimson-amber streetlight reflection on dark rain puddle
  const refGrad = mvCtx.createRadialGradient(256, 220, 8, 256, 220, 145);
  refGrad.addColorStop(0, 'rgba(235, 92, 75, 0.52)');
  refGrad.addColorStop(0.5, 'rgba(245, 162, 92, 0.22)');
  refGrad.addColorStop(1, 'rgba(20, 18, 30, 0)');
  mvCtx.fillStyle = refGrad;
  mvCtx.fillRect(0, 120, 512, 200);
  // Rain streaks
  mvCtx.strokeStyle = 'rgba(185, 205, 235, 0.22)';
  mvCtx.lineWidth = 1.5;
  for (let i = 0; i < 42; i++) {
    const rx = (i * 47) % 500;
    const ry = (i * 29) % 240;
    mvCtx.beginPath();
    mvCtx.moveTo(rx, ry);
    mvCtx.lineTo(rx - 8, ry + 26);
    mvCtx.stroke();
  }
  // Yellow paper origami boat silhouette floating at center
  mvCtx.save();
  mvCtx.translate(256, 208);
  mvCtx.fillStyle = '#f2c14e';
  mvCtx.beginPath();
  mvCtx.moveTo(-48, 0);
  mvCtx.lineTo(48, 0);
  mvCtx.lineTo(32, 20);
  mvCtx.lineTo(-32, 20);
  mvCtx.closePath();
  mvCtx.fill();
  mvCtx.fillStyle = '#ffd972';
  mvCtx.beginPath();
  mvCtx.moveTo(0, -34);
  mvCtx.lineTo(24, 0);
  mvCtx.lineTo(-24, 0);
  mvCtx.closePath();
  mvCtx.fill();
  mvCtx.restore();
  const movieScreenTex = new T.CanvasTexture(mvCanvas);
  movieScreenTex.colorSpace = T.SRGBColorSpace;

  // 8. Authentic cherry blossom petal texture (ported from a-flurry-of-cherry-blossoms/script.js)
  const cpCanvas = document.createElement('canvas');
  cpCanvas.width = cpCanvas.height = 128;
  const cpCtx = cpCanvas.getContext('2d');
  cpCtx.save();
  cpCtx.translate(64, 68);
  const cpGrad = cpCtx.createRadialGradient(0, 34, 2, 0, 12, 68);
  cpGrad.addColorStop(0, 'hsl(330, 72%, 66%)');
  cpGrad.addColorStop(0.28, 'hsl(330, 62%, 78%)');
  cpGrad.addColorStop(1, 'hsl(330, 48%, 92%)');
  cpCtx.fillStyle = cpGrad;
  cpCtx.strokeStyle = 'hsl(330, 45%, 82%)';
  cpCtx.lineWidth = 1.5;
  cpCtx.beginPath();
  cpCtx.moveTo(0, 38);
  cpCtx.bezierCurveTo(-56, 18, -10, -56, 0, -18);
  cpCtx.bezierCurveTo(10, -56, 56, 18, 0, 38);
  cpCtx.fill();
  cpCtx.stroke();
  cpCtx.strokeStyle = 'rgba(205, 115, 152, 0.42)';
  cpCtx.lineWidth = 1.2;
  for (let i = -4; i < 4; i++) {
    cpCtx.beginPath();
    cpCtx.moveTo(0, 38);
    cpCtx.quadraticCurveTo(i * 11, 8, i * 3.8, -22 + Math.abs(i) * 2);
    cpCtx.stroke();
  }
  cpCtx.restore();
  const cherryPetalTex = new T.CanvasTexture(cpCanvas);
  cherryPetalTex.colorSpace = T.SRGBColorSpace;

  const cherryPetalMat = new T.MeshStandardMaterial({
    map: cherryPetalTex,
    alphaTest: 0.25,
    side: T.DoubleSide,
    roughness: 0.56,
    metalness: 0.0,
    emissive: new T.Color('#6b3048'),
    emissiveIntensity: 0.25
  });

  // 9. Luminous veined sakura-lotus petal texture for the Hero Blooming Flower at the shrine
  const lpCanvas = document.createElement('canvas');
  lpCanvas.width = 256;
  lpCanvas.height = 512;
  const lpCtx = lpCanvas.getContext('2d');
  const lpGrad = lpCtx.createLinearGradient(0, 512, 0, 0);
  lpGrad.addColorStop(0.0, '#7c4594'); // rich amethyst-plum base
  lpGrad.addColorStop(0.28, '#c972b2'); // rose-orchid mid
  lpGrad.addColorStop(0.68, '#f6bdd6'); // sakura pink upper
  lpGrad.addColorStop(1.0, '#fff4fa'); // luminous pearl tip
  lpCtx.fillStyle = lpGrad;
  lpCtx.fillRect(0, 0, 256, 512);
  // Delicate botanical veins radiating from petal base
  lpCtx.strokeStyle = 'rgba(255, 240, 250, 0.34)';
  lpCtx.lineWidth = 2.2;
  for (let i = -5; i <= 5; i++) {
    lpCtx.beginPath();
    lpCtx.moveTo(128, 512);
    lpCtx.quadraticCurveTo(128 + i * 26, 280, 128 + i * 19, 36 + Math.abs(i) * 14);
    lpCtx.stroke();
  }
  // Subtle golden inner luminescence at the base
  const lpBaseGlow = lpCtx.createRadialGradient(128, 505, 8, 128, 490, 130);
  lpBaseGlow.addColorStop(0, 'rgba(255, 224, 152, 0.72)');
  lpBaseGlow.addColorStop(1, 'rgba(255, 224, 152, 0)');
  lpCtx.fillStyle = lpBaseGlow;
  lpCtx.fillRect(0, 340, 256, 172);
  const lotusPetalTex = new T.CanvasTexture(lpCanvas);
  lotusPetalTex.colorSpace = T.SRGBColorSpace;

  const lotusPetalMat = new T.MeshPhysicalMaterial({
    map: lotusPetalTex,
    emissiveMap: lotusPetalTex,
    emissive: new T.Color('#c87ae6'),
    emissiveIntensity: 0.42,
    roughness: 0.34,
    metalness: 0.04,
    clearcoat: 0.45,
    clearcoatRoughness: 0.28,
    sheen: 0.85,
    sheenColor: new T.Color('#ffd6ee'),
    side: T.DoubleSide
  });

  // 10. Iridescent gossamer wing texture for the Player Firefly Spirit
  const wgCanvas = document.createElement('canvas');
  wgCanvas.width = 256;
  wgCanvas.height = 128;
  const wgCtx = wgCanvas.getContext('2d');
  const wgGrad = wgCtx.createLinearGradient(0, 64, 256, 64);
  wgGrad.addColorStop(0, 'rgba(255, 242, 214, 0.92)');
  wgGrad.addColorStop(0.45, 'rgba(242, 198, 248, 0.78)');
  wgGrad.addColorStop(1, 'rgba(196, 158, 255, 0.56)');
  wgCtx.fillStyle = wgGrad;
  wgCtx.fillRect(0, 0, 256, 128);
  wgCtx.strokeStyle = 'rgba(255, 246, 225, 0.62)';
  wgCtx.lineWidth = 2;
  for (let i = 0; i < 6; i++) {
    wgCtx.beginPath();
    wgCtx.moveTo(0, 64);
    wgCtx.quadraticCurveTo(110, 22 + i * 17, 248, 16 + i * 19);
    wgCtx.stroke();
  }
  const gossamerWingTex = new T.CanvasTexture(wgCanvas);
  gossamerWingTex.colorSpace = T.SRGBColorSpace;

  const gossamerWingMat = new T.MeshPhysicalMaterial({
    map: gossamerWingTex,
    emissive: new T.Color('#d8a6ff'),
    emissiveIntensity: 0.45,
    roughness: 0.2,
    metalness: 0.1,
    clearcoat: 0.7,
    transparent: true,
    opacity: 0.84,
    side: T.DoubleSide
  });

  // 11. Warm glowing paper material for floating Sky Wish Lanterns
  const skyLanternMat = new T.MeshStandardMaterial({
    color: '#ffe6c4',
    emissive: new T.Color('#ffaa66'),
    emissiveIntensity: 1.45,
    roughness: 0.6,
    transparent: true,
    opacity: 0.92,
    side: T.DoubleSide
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
      blossomTex,
      cherryPetalTex,
      lotusPetalTex,
      gossamerWingTex,
      assignmentPlaceholderTex,
      examSheetTex,
      phoneLockTex,
      sheetMusicTex,
      whiteboardTex,
      webProjectScreenTex,
      movieScreenTex
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
      foliage3DMat,
      cherryPetalMat,
      lotusPetalMat,
      gossamerWingMat,
      skyLanternMat,
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
    const keepColor = Boolean(obj.material.vertexColors);
    for (const key of Object.keys(g.attributes)) {
      if (key !== 'position' && key !== 'normal' && key !== 'uv' && !(keepColor && key === 'color')) {
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
