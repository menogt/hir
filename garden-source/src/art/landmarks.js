import * as T from 'three';
import { PALETTE, addContactShadow, createRng, batchStaticGroup } from './materials.js';
import { getTerrainHeight } from './terrain.js';

/**
 * Rounded-corner, softly beveled box geometry (horizontal slab by default, or vertical for screens/phones).
 */
function createRoundedBoxGeo(w, h, d, r = 0.014, bevelSize = 0.005, vertical = false) {
  const spanY = vertical ? h : d;
  const extrudeDist = vertical ? d : h;
  const hw = Math.max(0.003, w * 0.5 - bevelSize);
  const hs = Math.max(0.003, spanY * 0.5 - bevelSize);
  const rad = Math.min(r, hw * 0.85, hs * 0.85);
  const shape = new T.Shape();
  shape.moveTo(-hw + rad, -hs);
  shape.lineTo(hw - rad, -hs);
  shape.quadraticCurveTo(hw, -hs, hw, -hs + rad);
  shape.lineTo(hw, hs - rad);
  shape.quadraticCurveTo(hw, hs, hw - rad, hs);
  shape.lineTo(-hw + rad, hs);
  shape.quadraticCurveTo(-hw, hs, -hw, hs - rad);
  shape.lineTo(-hw, -hs + rad);
  shape.quadraticCurveTo(-hw, -hs, -hw + rad, -hs);

  const depth = Math.max(0.002, extrudeDist - bevelSize * 2);
  const geo = new T.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness: bevelSize,
    bevelSize,
    bevelSegments: 1,
    curveSegments: 2
  });
  if (!vertical) geo.rotateX(Math.PI / 2);
  geo.center();
  return geo;
}

/**
 * Continuous radially-pleated sinusoidal fluted paper cupcake liner (open cup with crinkled rim).
 */
function createFlutedWrapperGeo(rBot = 0.068, rTop = 0.098, h = 0.09, flutes = 20) {
  const radialSegs = flutes * 2;
  const geo = new T.CylinderGeometry(rTop, rBot, h, radialSegs, 2, true);
  const pos = geo.attributes.position;
  const cols = new Float32Array(pos.count * 3);
  const cCrest = new T.Color('#f4d6c4');
  const cValley = new T.Color('#c77b5e');
  const tmp = new T.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const ang = Math.atan2(z, x);
    const t = (y + h * 0.5) / h; // 0 bottom .. 1 top
    const wave = Math.sin(ang * flutes);
    const pleatAmp = (0.002 + t * 0.0068) * wave;
    const r = Math.hypot(x, z);
    const scale = r > 0.0001 ? (r + pleatAmp) / r : 1;
    const rimWave = t > 0.7 ? Math.sin(ang * 3 + 0.5) * 0.003 * t : 0;
    pos.setXYZ(i, x * scale, y + rimWave, z * scale);
    tmp.lerpColors(cValley, cCrest, wave * 0.5 + 0.5);
    cols[i * 3] = tmp.r;
    cols[i * 3 + 1] = tmp.g;
    cols[i * 3 + 2] = tmp.b;
  }
  geo.setAttribute('color', new T.BufferAttribute(cols, 3));
  geo.computeVertexNormals();
  return geo;
}

/**
 * Softly draped undulating cloth geometry (for folded handkerchief & table linens).
 */
function createDrapedClothGeo(w, d, waveAmp = 0.008) {
  const geo = new T.PlaneGeometry(w, d, 14, 14);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const nx = x / (w * 0.5);
    const nz = z / (d * 0.5);
    const wave =
      Math.sin(nx * Math.PI * 1.4 + 0.3) * Math.cos(nz * Math.PI * 1.1) * waveAmp +
      Math.cos((nx + nz) * 2.5) * waveAmp * 0.45;
    // Softly curl corners downward onto surface
    const edgeDroop = Math.max(0, (nx * nx + nz * nz - 1.1)) * -0.008;
    pos.setY(i, wave + edgeDroop);
  }
  geo.computeVertexNormals();
  return geo;
}

/**
 * Curved ergonomic wooden chair backrest.
 */
function createCurvedChairBackGeo(w = 0.42, h = 0.22, depth = 0.03, curve = 0.045) {
  const geo = new T.BoxGeometry(w, h, depth, 10, 2, 1);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const t = x / (w * 0.5);
    pos.setZ(i, pos.getZ(i) + (1 - t * t) * -curve);
  }
  geo.computeVertexNormals();
  return geo;
}

function createCeramicMug(color = '#e8dfd1', coffeeColor = '#4f3021') {
  const g = new T.Group();
  const mat = new T.MeshStandardMaterial({ color, roughness: 0.32 });
  const cup = new T.Mesh(
    new T.LatheGeometry(
      [
        new T.Vector2(0.0, 0.0),
        new T.Vector2(0.036, 0.0),
        new T.Vector2(0.041, 0.04),
        new T.Vector2(0.044, 0.086),
        new T.Vector2(0.039, 0.086),
        new T.Vector2(0.036, 0.072),
        new T.Vector2(0.0, 0.072)
      ],
      16
    ),
    mat
  );
  cup.castShadow = true;
  g.add(cup);

  const handle = new T.Mesh(new T.TorusGeometry(0.024, 0.006, 8, 14, Math.PI), mat);
  handle.rotation.z = -Math.PI / 2;
  handle.position.set(0.039, 0.046, 0);
  g.add(handle);

  const liquid = new T.Mesh(
    new T.CircleGeometry(0.038, 14),
    new T.MeshStandardMaterial({ color: coffeeColor, roughness: 0.16, metalness: 0.1 })
  );
  liquid.rotation.x = -Math.PI / 2;
  liquid.position.y = 0.076;
  g.add(liquid);
  return g;
}

function createCupcakeGroup(lib, scale = 1) {
  const { textures, materials } = lib;
  const g = new T.Group();

  // Ceramic plate with raised lip
  const plate = new T.Mesh(new T.CylinderGeometry(0.22, 0.15, 0.025, 20), materials.ceramicMat);
  plate.position.y = 0.012;
  plate.castShadow = plate.receiveShadow = true;
  g.add(plate);

  // Fluted paper wrapper
  const liner = new T.Mesh(
    new T.CylinderGeometry(0.088, 0.066, 0.105, 18),
    new T.MeshStandardMaterial({ color: '#c48668', roughness: 0.88 })
  );
  liner.position.y = 0.072;
  liner.castShadow = true;
  g.add(liner);

  // Baked sponge dome
  const sponge = new T.Mesh(
    new T.SphereGeometry(0.088, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.55),
    new T.MeshStandardMaterial({ color: '#a87454', roughness: 0.88 })
  );
  sponge.position.y = 0.11;
  g.add(sponge);

  // Multi-tier piped vanilla-blossom frosting swirl
  const frostMat = new T.MeshStandardMaterial({ color: '#f6e8e4', roughness: 0.58 });
  const tier1 = new T.Mesh(new T.TorusGeometry(0.056, 0.028, 10, 18), frostMat);
  tier1.rotation.x = Math.PI / 2;
  tier1.position.y = 0.145;
  g.add(tier1);
  const tier2 = new T.Mesh(new T.TorusGeometry(0.036, 0.023, 10, 16), frostMat);
  tier2.rotation.x = Math.PI / 2;
  tier2.position.y = 0.178;
  g.add(tier2);
  const peak = new T.Mesh(new T.ConeGeometry(0.036, 0.055, 12), frostMat);
  peak.position.y = 0.21;
  g.add(peak);

  // Pink blossom accent & slim candle with warm amber flame
  const cherryPetal = new T.Mesh(
    new T.SphereGeometry(0.022, 8, 6),
    new T.MeshStandardMaterial({ color: PALETTE.blossomMid, roughness: 0.5 })
  );
  cherryPetal.scale.set(1.2, 0.45, 1.0);
  cherryPetal.position.set(0.032, 0.19, 0.025);
  g.add(cherryPetal);

  const candle = new T.Mesh(
    new T.CylinderGeometry(0.008, 0.009, 0.085, 8),
    new T.MeshStandardMaterial({ color: '#f7efe1', roughness: 0.5 })
  );
  candle.position.y = 0.255;
  g.add(candle);

  const flame = new T.Mesh(
    new T.SphereGeometry(0.015, 8, 8),
    new T.MeshStandardMaterial({
      color: '#fff4d2',
      emissive: '#ffb24f',
      emissiveIntensity: 2.2,
      roughness: 0.2
    })
  );
  flame.scale.set(0.75, 1.45, 0.75);
  flame.position.y = 0.308;
  g.add(flame);

  const halo = new T.Sprite(
    new T.SpriteMaterial({
      map: textures.glowTex,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      blending: T.AdditiveBlending
    })
  );
  halo.position.y = 0.308;
  halo.scale.set(0.32, 0.32, 0.32);
  g.add(halo);

  g.scale.setScalar(scale);
  return { group: g, flame, halo };
}

function createVaseWithFlowers(lib, scale = 1) {
  const { materials } = lib;
  const g = new T.Group();
  const vase = new T.Mesh(
    new T.LatheGeometry(
      [
        new T.Vector2(0.0, 0.0),
        new T.Vector2(0.06, 0.0),
        new T.Vector2(0.095, 0.08),
        new T.Vector2(0.082, 0.18),
        new T.Vector2(0.042, 0.25),
        new T.Vector2(0.052, 0.28)
      ],
      14
    ),
    materials.ceramicMat
  );
  vase.castShadow = true;
  g.add(vase);

  const stemMat = new T.MeshStandardMaterial({ color: '#55704a', roughness: 0.85 });
  const blossomMat = new T.MeshStandardMaterial({ color: '#f7efe3', roughness: 0.65 });
  const pinkMat = new T.MeshStandardMaterial({ color: PALETTE.blossomPale, roughness: 0.65 });
  for (let i = 0; i < 11; i++) {
    const a = (i / 11) * Math.PI * 2;
    const tilt = 0.16 + (i % 3) * 0.11;
    const stem = new T.Mesh(new T.CylinderGeometry(0.004, 0.005, 0.23, 5), stemMat);
    stem.position.set(Math.cos(a) * 0.026, 0.31, Math.sin(a) * 0.026);
    stem.rotation.set(Math.sin(a) * tilt, 0, -Math.cos(a) * tilt);
    g.add(stem);

    const spray = new T.Group();
    spray.position.set(Math.cos(a) * (0.055 + (i % 3) * 0.022), 0.41 + (i % 3) * 0.026, Math.sin(a) * (0.055 + (i % 3) * 0.022));
    for (let f = 0; f < 3; f++) {
      const fa = (f / 3) * Math.PI * 2 + i;
      const bud = new T.Mesh(new T.OctahedronGeometry(0.011, 0), i % 3 === 0 ? pinkMat : blossomMat);
      bud.position.set(Math.cos(fa) * 0.014, (f - 1) * 0.01, Math.sin(fa) * 0.014);
      spray.add(bud);
    }
    g.add(spray);
  }
  g.scale.setScalar(scale);
  return g;
}

function createPhotoFrame(lib, w = 0.46, h = 0.36, tex = null) {
  const { textures, materials } = lib;
  const g = new T.Group();
  const frame = new T.Mesh(new T.BoxGeometry(w, h, 0.045), materials.woodMat);
  frame.castShadow = true;
  g.add(frame);

  // Brass corner brackets
  for (const sx of [-1, 1]) {
    for (const sy of [-1, 1]) {
      const corner = new T.Mesh(new T.BoxGeometry(0.055, 0.055, 0.048), materials.brassMat);
      corner.position.set(sx * (w * 0.5 - 0.022), sy * (h * 0.5 - 0.022), 0.002);
      g.add(corner);
    }
  }

  const art = new T.Mesh(
    new T.PlaneGeometry(w - 0.068, h - 0.068),
    new T.MeshStandardMaterial({
      map: tex || textures.assignmentPlaceholderTex || textures.photoArtTex,
      roughness: 0.42
    })
  );
  art.position.z = 0.025;
  g.add(art);

  // Easel kickstand behind frame
  const leg = new T.Mesh(new T.BoxGeometry(0.04, h * 0.82, 0.03), materials.woodDarkMat);
  leg.position.set(0, -0.02, -0.1);
  leg.rotation.x = 0.48;
  g.add(leg);

  return g;
}

function createMiniTableLantern(lib) {
  const { textures, materials } = lib;
  const g = new T.Group();
  const base = new T.Mesh(new T.BoxGeometry(0.18, 0.03, 0.18), materials.woodDarkMat);
  base.position.y = 0.015;
  g.add(base);
  const core = new T.Mesh(new T.BoxGeometry(0.12, 0.18, 0.12), materials.shojiMat);
  core.position.y = 0.12;
  g.add(core);
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const post = new T.Mesh(new T.BoxGeometry(0.018, 0.2, 0.018), materials.woodDarkMat);
      post.position.set(sx * 0.066, 0.12, sz * 0.066);
      g.add(post);
    }
  }
  const cap = new T.Mesh(new T.ConeGeometry(0.14, 0.08, 4), materials.woodDarkMat);
  cap.position.y = 0.25;
  cap.rotation.y = Math.PI / 4;
  g.add(cap);

  const halo = new T.Sprite(
    new T.SpriteMaterial({
      map: textures.glowTex,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
      blending: T.AdditiveBlending
    })
  );
  halo.position.y = 0.13;
  halo.scale.set(0.55, 0.55, 0.55);
  g.add(halo);
  return g;
}

export function buildMemoryLandmark(scene, lib, memory) {
  const rng = createRng(memory.sortOrder * 137 + 31);
  const { textures, materials } = lib;
  const { x, z } = memory.location;
  const y = getTerrainHeight(x, z);
  const g = new T.Group();
  g.position.set(x, y, z);
  scene.add(g);

  // Subtle flat weathered stone pad under each station
  const pad = new T.Mesh(new T.CylinderGeometry(0.88, 0.96, 0.06, 9), materials.stoneDarkMat);
  pad.position.y = 0.025;
  pad.receiveShadow = true;
  g.add(pad);
  addContactShadow(g, materials.contactShadowMat, 1.15, 0.015);

  const animated = {};

  switch (memory.assetReference) {
    case 'headband-stand':
    case 'welcome-sign': {
      // MEMORY 01 — That Headband:
      // Elegant headband displayed on a decorative wooden stand beneath a blossoming cherry tree branch
      g.rotation.y = -0.28;

      // Stepped wooden pedestal table
      const plinth = new T.Mesh(new T.BoxGeometry(0.76, 0.08, 0.56), materials.woodDarkMat);
      plinth.position.set(0, 0.08, 0);
      plinth.castShadow = plinth.receiveShadow = true;
      g.add(plinth);

      for (const lx of [-0.28, 0.28]) {
        for (const lz of [-0.18, 0.18]) {
          const leg = new T.Mesh(new T.BoxGeometry(0.065, 0.66, 0.065), materials.woodDarkMat);
          leg.position.set(lx, 0.41, lz);
          leg.castShadow = true;
          g.add(leg);
        }
      }
      const tableTop = new T.Mesh(new T.BoxGeometry(0.84, 0.055, 0.62), materials.woodMat);
      tableTop.position.set(0, 0.74, 0);
      tableTop.castShadow = tableTop.receiveShadow = true;
      g.add(tableTop);

      // Soft linen display cloth on the stand
      const cloth = new T.Mesh(new T.BoxGeometry(0.52, 0.016, 0.42), materials.linenMat);
      cloth.position.set(-0.04, 0.775, 0.02);
      g.add(cloth);

      // Decorative carved wooden headband T-stand / velvet cylinder crown
      const standBase = new T.Mesh(new T.CylinderGeometry(0.14, 0.17, 0.035, 16), materials.woodDarkMat);
      standBase.position.set(-0.04, 0.798, 0.02);
      g.add(standBase);
      const standStem = new T.Mesh(new T.CylinderGeometry(0.028, 0.036, 0.22, 12), materials.woodDarkMat);
      standStem.position.set(-0.04, 0.91, 0.02);
      g.add(standStem);
      const cushionBar = new T.Mesh(
        new T.CylinderGeometry(0.085, 0.085, 0.24, 16),
        new T.MeshStandardMaterial({ color: '#ede3d5', roughness: 0.78 })
      );
      cushionBar.rotation.x = Math.PI / 2;
      cushionBar.position.set(-0.04, 1.02, 0.02);
      cushionBar.castShadow = true;
      g.add(cushionBar);
      for (const ez of [-0.125, 0.125]) {
        const cap = new T.Mesh(new T.CylinderGeometry(0.09, 0.09, 0.018, 16), materials.woodMat);
        cap.rotation.x = Math.PI / 2;
        cap.position.set(-0.04, 1.02, 0.02 + ez);
        g.add(cap);
      }

      // The Headband itself — sculpted horseshoe arc with satin sheen + dainty ribbon bow accent
      const headbandGroup = new T.Group();
      headbandGroup.position.set(-0.04, 1.03, 0.03);
      g.add(headbandGroup);

      const bandMat = new T.MeshStandardMaterial({
        color: '#d87a96',
        roughness: 0.36,
        metalness: 0.08
      });
      const bandTrimMat = new T.MeshStandardMaterial({
        color: '#f7dce5',
        roughness: 0.45
      });
      const mainArc = new T.Mesh(
        new T.TorusGeometry(0.145, 0.022, 14, 28, Math.PI * 1.28),
        bandMat
      );
      mainArc.rotation.z = -Math.PI * 0.14;
      mainArc.castShadow = true;
      headbandGroup.add(mainArc);

      const innerArc = new T.Mesh(
        new T.TorusGeometry(0.146, 0.01, 10, 24, Math.PI * 1.24),
        bandTrimMat
      );
      innerArc.rotation.z = -Math.PI * 0.12;
      innerArc.position.z = 0.012;
      headbandGroup.add(innerArc);

      // Cute side bow + pearl center on the headband
      const bowGroup = new T.Group();
      bowGroup.position.set(0.105, 0.105, 0.018);
      bowGroup.rotation.z = -0.58;
      headbandGroup.add(bowGroup);
      for (const side of [-1, 1]) {
        const loop = new T.Mesh(new T.ConeGeometry(0.036, 0.068, 10), bandTrimMat);
        loop.rotation.z = side * (Math.PI / 2);
        loop.scale.set(1, 1, 0.52);
        loop.position.x = side * 0.032;
        bowGroup.add(loop);
      }
      const pearl = new T.Mesh(
        new T.SphereGeometry(0.016, 10, 8),
        new T.MeshStandardMaterial({ color: '#fff8ef', roughness: 0.2, metalness: 0.15 })
      );
      bowGroup.add(pearl);

      // Overarching blossoming miniature cherry tree rising behind & canopying over the headband stand
      const trunkPts = [
        new T.Vector3(-0.46, 0.02, -0.26),
        new T.Vector3(-0.52, 0.65, -0.22),
        new T.Vector3(-0.36, 1.32, -0.12),
        new T.Vector3(-0.02, 1.66, 0.04),
        new T.Vector3(0.32, 1.72, 0.12)
      ];
      const trunkGeo = new T.TubeGeometry(new T.CatmullRomCurve3(trunkPts), 14, 0.055, 7, false);
      const trunk = new T.Mesh(trunkGeo, materials.barkMat);
      trunk.castShadow = true;
      g.add(trunk);

      const subBranchPts = [
        new T.Vector3(-0.36, 1.32, -0.12),
        new T.Vector3(-0.18, 1.54, 0.24),
        new T.Vector3(0.12, 1.58, 0.34)
      ];
      const subBranch = new T.Mesh(
        new T.TubeGeometry(new T.CatmullRomCurve3(subBranchPts), 8, 0.032, 6, false),
        materials.barkMat
      );
      g.add(subBranch);

      // Lush painterly cherry blossom clusters framing the stand
      const blossomMatPale = new T.MeshStandardMaterial({ color: PALETTE.blossomPale, roughness: 0.7 });
      const blossomMatMid = new T.MeshStandardMaterial({ color: PALETTE.blossomMid, roughness: 0.68 });
      const clusterCenters = [
        [-0.26, 1.56, -0.06, 0.56],
        [0.02, 1.68, 0.04, 0.64],
        [0.3, 1.68, 0.12, 0.54],
        [-0.14, 1.54, 0.24, 0.52],
        [0.14, 1.58, 0.3, 0.5]
      ];
      clusterCenters.forEach(([cx, cy, cz, sz], idx) => {
        for (let b = 0; b < 3; b++) {
          const card = new T.Mesh(new T.PlaneGeometry(sz, sz * 0.85), materials.blossomCardMat);
          card.position.set(cx, cy, cz);
          card.rotation.set(
            (b - 1) * 0.32 + idx * 0.15,
            (b / 3) * Math.PI + idx * 0.7,
            (b % 2 ? 1 : -1) * 0.18
          );
          g.add(card);
        }
        // Small 3D blossom buds nestled in the foliage
        for (let f = 0; f < 4; f++) {
          const ang = (f / 4) * Math.PI * 2 + idx;
          const bud = new T.Mesh(
            new T.OctahedronGeometry(0.028, 0),
            (f + idx) % 2 ? blossomMatMid : blossomMatPale
          );
          bud.position.set(cx + Math.cos(ang) * 0.14, cy - 0.04 + (f % 2) * 0.05, cz + Math.sin(ang) * 0.14);
          g.add(bud);
        }
      });

      // Scattered fallen sakura petals on the wooden stand
      for (let p = 0; p < 7; p++) {
        const pet = new T.Mesh(new T.SphereGeometry(0.018, 6, 5), p % 2 ? blossomMatMid : blossomMatPale);
        pet.scale.set(1.3, 0.25, 0.85);
        pet.position.set(-0.22 + (p * 0.07), 0.785, -0.14 + ((p * 3) % 5) * 0.065);
        pet.rotation.y = p * 1.1;
        g.add(pet);
      }

      const miniLamp = createMiniTableLantern(lib);
      miniLamp.position.set(0.26, 0.768, -0.14);
      g.add(miniLamp);
      break;
    }

    case 'photo-stand': {
      // MEMORY 02 — The Assignment Photo:
      // Beautifully modeled wooden photograph stand with intentional July 27 placeholder
      // (no fictional faces!) + subtle university sustainability assignment details
      g.rotation.y = 0.25;
      const easel = new T.Group();
      g.add(easel);
      for (const sx of [-0.28, 0.28]) {
        const leg = new T.Mesh(new T.BoxGeometry(0.058, 1.44, 0.058), materials.woodDarkMat);
        leg.position.set(sx, 0.71, 0.08);
        leg.rotation.x = -0.14;
        leg.rotation.z = sx > 0 ? 0.1 : -0.1;
        leg.castShadow = true;
        easel.add(leg);
      }
      const backLeg = new T.Mesh(new T.BoxGeometry(0.052, 1.36, 0.052), materials.woodDarkMat);
      backLeg.position.set(0, 0.66, -0.24);
      backLeg.rotation.x = 0.36;
      backLeg.castShadow = true;
      easel.add(backLeg);

      // Top brass hinge & mast crest
      const mast = new T.Mesh(new T.BoxGeometry(0.06, 0.96, 0.045), materials.woodDarkMat);
      mast.position.set(0, 1.02, 0.02);
      mast.rotation.x = -0.14;
      easel.add(mast);

      const shelf = new T.Mesh(new T.BoxGeometry(0.82, 0.055, 0.2), materials.woodMat);
      shelf.position.set(0, 0.78, 0.1);
      shelf.castShadow = true;
      easel.add(shelf);

      // Framed intentional placeholder card (July 27, 2026 Sustainability Group Photo)
      const frame = createPhotoFrame(lib, 0.72, 0.54, textures.assignmentPlaceholderTex);
      frame.position.set(0, 1.08, 0.09);
      frame.rotation.x = -0.14;
      easel.add(frame);

      // Side wooden stool holding university sustainability assignment details:
      // Clipboard with assignment field sheet, brass clip, pen, and potted green seedling
      const sideStool = new T.Mesh(new T.CylinderGeometry(0.24, 0.27, 0.42, 12), materials.woodDarkMat);
      sideStool.position.set(0.42, 0.23, 0.28);
      sideStool.castShadow = sideStool.receiveShadow = true;
      g.add(sideStool);

      // Wooden assignment clipboard
      const clipBoard = new T.Mesh(new T.BoxGeometry(0.24, 0.018, 0.32), materials.woodMat);
      clipBoard.position.set(0.38, 0.45, 0.28);
      clipBoard.rotation.y = -0.28;
      g.add(clipBoard);
      const sheet = new T.Mesh(
        new T.PlaneGeometry(0.2, 0.27),
        new T.MeshStandardMaterial({ map: textures.examSheetTex, roughness: 0.65 })
      );
      sheet.rotation.x = -Math.PI / 2;
      sheet.rotation.z = -0.28;
      sheet.position.set(0.38, 0.461, 0.28);
      g.add(sheet);
      const clipMetal = new T.Mesh(new T.BoxGeometry(0.08, 0.02, 0.03), materials.brassMat);
      clipMetal.position.set(0.34, 0.466, 0.15);
      clipMetal.rotation.y = -0.28;
      g.add(clipMetal);

      // Small terracotta pot with green sustainability sapling sprout
      const pot = new T.Mesh(
        new T.CylinderGeometry(0.075, 0.055, 0.11, 12),
        new T.MeshStandardMaterial({ color: '#b5674a', roughness: 0.78 })
      );
      pot.position.set(-0.34, 0.835, 0.12);
      easel.add(pot);
      const leafMat = new T.MeshStandardMaterial({ color: '#689662', roughness: 0.6 });
      const stem = new T.Mesh(new T.CylinderGeometry(0.008, 0.01, 0.11, 6), leafMat);
      stem.position.set(-0.34, 0.92, 0.12);
      easel.add(stem);
      for (const side of [-1, 1]) {
        const leaf = new T.Mesh(new T.SphereGeometry(0.035, 8, 6), leafMat);
        leaf.scale.set(1.4, 0.32, 0.75);
        leaf.position.set(-0.34 + side * 0.038, 0.96, 0.12);
        leaf.rotation.z = -side * 0.35;
        easel.add(leaf);
      }

      const vase = createVaseWithFlowers(lib, 0.62);
      vase.position.set(-0.38, 0.05, 0.34);
      g.add(vase);
      break;
    }

    case 'after-exams-seats':
    case 'cupcake-table': {
      // MEMORY 03 — After Exams:
      // Small university-inspired conversation area with two seats, books, and exam-related props
      // (casual post-exam campus chat, not a romantic date)
      g.rotation.y = -0.22;

      // Two campus courtyard benches/seats angled casually toward a shared low study table
      for (const side of [-1, 1]) {
        const seat = new T.Group();
        seat.position.set(side * 0.52, 0.04, 0.06);
        seat.rotation.y = side < 0 ? 0.42 : -0.42;
        g.add(seat);

        for (const lx of [-0.21, 0.21]) {
          for (const lz of [-0.18, 0.18]) {
            const leg = new T.Mesh(new T.BoxGeometry(0.048, 0.44, 0.048), materials.darkMetalMat);
            leg.position.set(lx, 0.22, lz);
            leg.castShadow = true;
            seat.add(leg);
          }
        }
        for (let s = -1; s <= 1; s++) {
          const slat = new T.Mesh(new T.BoxGeometry(0.48, 0.038, 0.115), materials.woodMat);
          slat.position.set(0, 0.44, s * 0.125);
          slat.castShadow = slat.receiveShadow = true;
          seat.add(slat);
        }
        for (const bx of [-0.2, 0.2]) {
          const post = new T.Mesh(new T.BoxGeometry(0.042, 0.46, 0.042), materials.darkMetalMat);
          post.position.set(bx, 0.66, -0.18);
          post.rotation.x = -0.12;
          seat.add(post);
        }
        for (const by of [0.64, 0.8]) {
          const backSlat = new T.Mesh(new T.BoxGeometry(0.48, 0.085, 0.032), materials.woodMat);
          backSlat.position.set(0, by, -0.19);
          backSlat.rotation.x = -0.12;
          backSlat.castShadow = true;
          seat.add(backSlat);
        }
      }

      // Central low campus timber table between the two seats
      const tableH = 0.52;
      const tableTop = new T.Mesh(new T.BoxGeometry(0.62, 0.048, 0.48), materials.woodMat);
      tableTop.position.set(0, tableH, -0.06);
      tableTop.castShadow = tableTop.receiveShadow = true;
      g.add(tableTop);
      for (const lx of [-0.25, 0.25]) {
        for (const lz of [-0.18, 0.18]) {
          const leg = new T.Mesh(new T.BoxGeometry(0.05, tableH - 0.02, 0.05), materials.woodDarkMat);
          leg.position.set(lx, (tableH - 0.02) * 0.5, -0.06 + lz);
          leg.castShadow = true;
          g.add(leg);
        }
      }

      // Stacked university textbooks on the table and left seat edge
      const bookColors = ['#3d5a78', '#8c584c', '#5b7861'];
      bookColors.forEach((col, i) => {
        const bk = new T.Mesh(
          new T.BoxGeometry(0.24 - i * 0.012, 0.04, 0.175),
          new T.MeshStandardMaterial({ color: col, roughness: 0.8 })
        );
        bk.position.set(-0.14, tableH + 0.044 + i * 0.04, -0.12);
        bk.rotation.y = 0.18 - i * 0.15;
        bk.castShadow = true;
        g.add(bk);
      });

      // Exam question/answer paper & clipboard + two pens on the right half of the table
      const examPad = new T.Mesh(new T.BoxGeometry(0.22, 0.014, 0.28), materials.woodDarkMat);
      examPad.position.set(0.14, tableH + 0.031, -0.02);
      examPad.rotation.y = -0.24;
      g.add(examPad);

      const examPaper = new T.Mesh(
        new T.PlaneGeometry(0.19, 0.25),
        new T.MeshStandardMaterial({ map: textures.examSheetTex, roughness: 0.65 })
      );
      examPaper.rotation.x = -Math.PI / 2;
      examPaper.rotation.z = -0.24;
      examPaper.position.set(0.14, tableH + 0.04, -0.02);
      g.add(examPaper);

      // Loose second exam paper slightly fanned underneath
      const examPaper2 = new T.Mesh(
        new T.PlaneGeometry(0.19, 0.25),
        new T.MeshStandardMaterial({ map: textures.examSheetTex, roughness: 0.7 })
      );
      examPaper2.rotation.x = -Math.PI / 2;
      examPaper2.rotation.z = 0.08;
      examPaper2.position.set(0.11, tableH + 0.028, 0.02);
      g.add(examPaper2);

      // Two pens + pencil case resting beside the exam papers
      for (const [px, pz, rot, col] of [
        [0.24, 0.04, 0.45, '#2b476e'],
        [0.03, 0.11, -0.35, '#8c3b4a']
      ]) {
        const pen = new T.Mesh(
          new T.CylinderGeometry(0.007, 0.006, 0.15, 6),
          new T.MeshStandardMaterial({ color: col, roughness: 0.35 })
        );
        pen.rotation.set(0, rot, Math.PI / 2);
        pen.position.set(px, tableH + 0.042, pz);
        g.add(pen);
      }

      const miniLantern = createMiniTableLantern(lib);
      miniLantern.position.set(-0.22, tableH + 0.024, 0.1);
      g.add(miniLantern);
      break;
    }

    case 'first-text-chocolate':
    case 'two-seats': {
      // MEMORY 04 — The First Text (and Chocolate):
      // Miniature scene featuring a smartphone (that gently lights up when approached) and a wrapped chocolate gift
      g.rotation.y = 0.24;

      const tableH = 0.64;
      // Warm wooden bench/table corner
      for (let p = -1; p <= 1; p++) {
        const plank = new T.Mesh(new T.BoxGeometry(0.96, 0.052, 0.2), materials.woodMat);
        plank.position.set(0, tableH, p * 0.21);
        plank.castShadow = plank.receiveShadow = true;
        g.add(plank);
      }
      for (const lx of [-0.38, 0.38]) {
        for (const lz of [-0.22, 0.22]) {
          const leg = new T.Mesh(new T.BoxGeometry(0.07, tableH - 0.02, 0.07), materials.woodDarkMat);
          leg.position.set(lx, (tableH - 0.02) * 0.5, lz);
          leg.castShadow = true;
          g.add(leg);
        }
      }

      // Soft linen mat under the phone & chocolate
      const mat = new T.Mesh(new T.BoxGeometry(0.66, 0.014, 0.42), materials.linenMat);
      mat.position.set(0, tableH + 0.03, 0.02);
      g.add(mat);

      // Smartphone on a small angled wooden cradle (left side)
      const cradle = new T.Mesh(new T.BoxGeometry(0.18, 0.05, 0.14), materials.woodDarkMat);
      cradle.position.set(-0.17, tableH + 0.058, 0.02);
      cradle.rotation.y = 0.22;
      g.add(cradle);

      const phoneGroup = new T.Group();
      phoneGroup.position.set(-0.17, tableH + 0.145, 0.03);
      phoneGroup.rotation.y = 0.22;
      phoneGroup.rotation.x = -0.58;
      g.add(phoneGroup);

      const phoneBody = new T.Mesh(
        createRoundedBoxGeo(0.16, 0.31, 0.02, 0.022, 0.004, true),
        new T.MeshStandardMaterial({ color: '#242b38', roughness: 0.28, metalness: 0.62 })
      );
      phoneBody.castShadow = true;
      phoneGroup.add(phoneBody);
      // Camera module detail on rear shell
      const camBump = new T.Mesh(createRoundedBoxGeo(0.048, 0.052, 0.008, 0.01, 0.002, true), materials.darkMetalMat);
      camBump.position.set(-0.042, 0.11, -0.012);
      phoneGroup.add(camBump);

      const screenMat = new T.MeshStandardMaterial({
        map: textures.phoneLockTex,
        emissiveMap: textures.phoneLockTex,
        emissive: new T.Color('#ffdfb8'),
        emissiveIntensity: 0.45,
        roughness: 0.22
      });
      const phoneScreen = new T.Mesh(new T.PlaneGeometry(0.142, 0.285), screenMat);
      phoneScreen.position.z = 0.012;
      phoneGroup.add(phoneScreen);

      const phoneHalo = new T.Sprite(
        new T.SpriteMaterial({
          map: textures.glowTex,
          color: '#ffd6a5',
          transparent: true,
          opacity: 0.38,
          depthWrite: false,
          blending: T.AdditiveBlending
        })
      );
      phoneHalo.position.set(0, 0, 0.05);
      phoneHalo.scale.set(0.45, 0.45, 0.45);
      phoneGroup.add(phoneHalo);

      const phoneRing = new T.Mesh(
        new T.RingGeometry(0.14, 0.165, 28),
        new T.MeshBasicMaterial({
          color: '#ffd6a0',
          transparent: true,
          opacity: 0.5,
          side: T.DoubleSide
        })
      );
      phoneRing.position.set(-0.17, tableH + 0.042, 0.03);
      phoneRing.rotation.x = -Math.PI / 2;
      g.add(phoneRing);

      const phoneLight = new T.PointLight('#ffd29d', 0.9, 3.2, 1.8);
      phoneLight.position.set(-0.17, tableH + 0.32, 0.14);
      g.add(phoneLight);

      // Wrapped Chocolate Bar Gift (right side) — rich burgundy/purple wrapper, gold foil & exposed chocolate squares
      const chocGroup = new T.Group();
      chocGroup.position.set(0.15, tableH + 0.058, 0.05);
      chocGroup.rotation.y = -0.26;
      g.add(chocGroup);

      // Main wrapper sleeve
      const wrapperMat = new T.MeshStandardMaterial({ color: '#5c2b47', roughness: 0.45, metalness: 0.12 });
      const goldFoilMat = new T.MeshStandardMaterial({ color: '#e3ba66', roughness: 0.3, metalness: 0.68 });
      const darkChocMat = new T.MeshStandardMaterial({ color: '#3b2116', roughness: 0.52 });

      const sleeve = new T.Mesh(new T.BoxGeometry(0.22, 0.038, 0.16), wrapperMat);
      sleeve.castShadow = true;
      chocGroup.add(sleeve);

      // Gold foil inner band + exposed sculpted chocolate squares at top end
      const foilPart = new T.Mesh(new T.BoxGeometry(0.205, 0.034, 0.09), goldFoilMat);
      foilPart.position.set(0, 0.001, -0.075);
      chocGroup.add(foilPart);

      const chocBar = new T.Mesh(new T.BoxGeometry(0.19, 0.032, 0.075), darkChocMat);
      chocBar.position.set(0, 0.004, -0.115);
      chocGroup.add(chocBar);
      for (const cx of [-0.06, 0, 0.06]) {
        for (const cz of [-0.13, -0.095]) {
          const sq = new T.Mesh(new T.BoxGeometry(0.05, 0.012, 0.028), darkChocMat);
          sq.position.set(cx, 0.022, cz);
          chocGroup.add(sq);
        }
      }

      // Satin ribbon band & bow around the chocolate wrapper
      const ribbonBand = new T.Mesh(new T.BoxGeometry(0.226, 0.042, 0.032), goldFoilMat);
      ribbonBand.position.set(0, 0, 0.01);
      chocGroup.add(ribbonBand);
      for (const side of [-1, 1]) {
        const loop = new T.Mesh(new T.ConeGeometry(0.028, 0.055, 8), goldFoilMat);
        loop.rotation.z = side * (Math.PI / 2);
        loop.position.set(side * 0.028, 0.03, 0.01);
        chocGroup.add(loop);
      }

      const miniLantern = createMiniTableLantern(lib);
      miniLantern.position.set(0.32, tableH + 0.025, -0.16);
      g.add(miniLantern);

      animated.firstTextPhone = {
        screen: phoneScreen,
        screenMat,
        halo: phoneHalo,
        ring: phoneRing,
        light: phoneLight,
        location: memory.location
      };
      break;
    }

    case 'cupcake-wrapper-table':
    case 'lecture-desk': {
      // MEMORY 05 — The Cupcake Wrapper (October 15, 2026):
      // Small birthday-themed garden table with:
      // 1) A cupcake, 2) Its recognizable saved paper wrapper (hero object!),
      // 3) A chocolate cake slice, and 4) A little chocolate gift. (No hearts or giant romantic decor)
      g.rotation.y = -0.24;
      const tableH = 0.66;
      for (let p = -1; p <= 1; p++) {
        const plank = new T.Mesh(new T.BoxGeometry(1.16, 0.055, 0.22), materials.woodMat);
        plank.position.set(0, tableH, p * 0.23);
        plank.castShadow = plank.receiveShadow = true;
        g.add(plank);
      }
      for (const lx of [-0.46, 0.46]) {
        for (const lz of [-0.26, 0.26]) {
          const leg = new T.Mesh(new T.BoxGeometry(0.082, tableH - 0.02, 0.082), materials.woodDarkMat);
          leg.position.set(lx, (tableH - 0.02) * 0.5, lz);
          leg.castShadow = true;
          g.add(leg);
        }
      }

      // Woven linen table runner
      const runnerTop = new T.Mesh(new T.BoxGeometry(0.88, 0.012, 0.54), materials.linenMat);
      runnerTop.position.set(0, tableH + 0.032, 0.02);
      runnerTop.receiveShadow = true;
      g.add(runnerTop);

      // 1. Hero Kept Paper Cupcake Wrapper (front-center on a dedicated small wooden coaster/napkin)
      const wrapperGroup = new T.Group();
      wrapperGroup.position.set(0.04, tableH + 0.04, 0.15);
      g.add(wrapperGroup);

      const napkin = new T.Mesh(
        new T.BoxGeometry(0.24, 0.008, 0.22),
        new T.MeshStandardMaterial({ color: '#f7efe4', roughness: 0.85 })
      );
      napkin.rotation.y = 0.18;
      wrapperGroup.add(napkin);

      // Continuous sinusoidal fluted paper cupcake wrapper with subtle pleat shading
      const paperOuterMat = new T.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.84,
        side: T.DoubleSide
      });
      const paperInnerMat = new T.MeshStandardMaterial({
        color: '#f2dfd0',
        roughness: 0.86,
        side: T.DoubleSide
      });
      const wrapperBase = new T.Mesh(new T.CylinderGeometry(0.068, 0.068, 0.005, 22), paperInnerMat);
      wrapperBase.position.y = 0.007;
      wrapperGroup.add(wrapperBase);

      const flutedCup = new T.Mesh(createFlutedWrapperGeo(0.068, 0.102, 0.092, 24), paperOuterMat);
      flutedCup.position.y = 0.052;
      flutedCup.castShadow = flutedCup.receiveShadow = true;
      wrapperGroup.add(flutedCup);

      // Subtle chocolate/sponge crumbs inside the kept wrapper
      const crumbMat = new T.MeshStandardMaterial({ color: '#7a4d32', roughness: 0.9 });
      for (const [cx, cz, cr] of [[-0.02, 0.01, 0.012], [0.022, -0.015, 0.01], [0.005, 0.024, 0.009]]) {
        const crumb = new T.Mesh(new T.DodecahedronGeometry(cr, 0), crumbMat);
        crumb.position.set(cx, 0.013, cz);
        wrapperGroup.add(crumb);
      }

      // 2. Frosted Birthday Cupcake on ceramic plate (back-left)
      const cupcake = createCupcakeGroup(lib, 0.98);
      cupcake.group.position.set(-0.24, tableH + 0.038, -0.05);
      g.add(cupcake.group);

      // 3. Layered Chocolate Cake Slice on a white ceramic saucer (right side)
      const cakeGroup = new T.Group();
      cakeGroup.position.set(0.29, tableH + 0.038, 0.02);
      cakeGroup.rotation.y = -0.35;
      g.add(cakeGroup);

      const cakePlate = new T.Mesh(new T.CylinderGeometry(0.18, 0.13, 0.022, 18), materials.ceramicMat);
      cakePlate.position.y = 0.011;
      cakePlate.castShadow = cakePlate.receiveShadow = true;
      cakeGroup.add(cakePlate);

      // Triangular wedge slice of dark chocolate cake (extruded prism / 3-sided cylinder wedge)
      const spongeDarkMat = new T.MeshStandardMaterial({ color: '#45281a', roughness: 0.78 });
      const ganacheMat = new T.MeshStandardMaterial({ color: '#29150c', roughness: 0.38 });
      const creamFillMat = new T.MeshStandardMaterial({ color: '#b58363', roughness: 0.65 });

      const wedge = new T.Mesh(
        new T.CylinderGeometry(0.12, 0.12, 0.095, 3, 1, false, 0, Math.PI * 0.55),
        spongeDarkMat
      );
      wedge.position.set(0, 0.068, 0.02);
      wedge.castShadow = true;
      cakeGroup.add(wedge);

      // Layered chocolate fudge stripes + top ganache glaze
      for (const ly of [0.048, 0.082]) {
        const layer = new T.Mesh(new T.BoxGeometry(0.14, 0.012, 0.095), creamFillMat);
        layer.position.set(0.01, ly, 0.01);
        cakeGroup.add(layer);
      }
      const topGlaze = new T.Mesh(new T.BoxGeometry(0.145, 0.016, 0.1), ganacheMat);
      topGlaze.position.set(0.01, 0.118, 0.01);
      cakeGroup.add(topGlaze);

      // 4. Little Wrapped Chocolate Gift (front-left)
      const giftChoc = new T.Group();
      giftChoc.position.set(-0.28, tableH + 0.052, 0.17);
      giftChoc.rotation.y = 0.32;
      g.add(giftChoc);
      const giftBar = new T.Mesh(
        new T.BoxGeometry(0.16, 0.028, 0.1),
        new T.MeshStandardMaterial({ color: '#6b304b', roughness: 0.45 })
      );
      giftBar.castShadow = true;
      giftChoc.add(giftBar);
      const giftRibbon = new T.Mesh(
        new T.BoxGeometry(0.164, 0.032, 0.024),
        new T.MeshStandardMaterial({ color: '#e3ba66', roughness: 0.32, metalness: 0.6 })
      );
      giftChoc.add(giftRibbon);

      const miniLantern = createMiniTableLantern(lib);
      miniLantern.position.set(0.38, tableH + 0.032, -0.17);
      g.add(miniLantern);

      const tableGlow = new T.PointLight('#ffbe70', 1.15, 3.8, 1.8);
      tableGlow.position.set(0.15, tableH + 0.32, 0.05);
      g.add(tableGlow);

      animated.cupcake = cupcake;
      break;
    }

    case 'student-centre-table':
    case 'study-desk': {
      // MEMORY 06 — At the Student Centre:
      // Small seating arrangement inspired by a university Student Centre:
      // Two seats, a table, and a recognizable folded handkerchief (ordinary conversation, NOT medical)
      g.rotation.y = 0.2;

      // Round university Student Centre café/courtyard table
      const tableH = 0.66;
      const baseDisc = new T.Mesh(new T.CylinderGeometry(0.28, 0.32, 0.04, 16), materials.darkMetalMat);
      baseDisc.position.y = 0.04;
      g.add(baseDisc);
      const post = new T.Mesh(new T.CylinderGeometry(0.055, 0.065, tableH - 0.04, 12), materials.darkMetalMat);
      post.position.y = tableH * 0.5;
      post.castShadow = true;
      g.add(post);
      const tableTop = new T.Mesh(new T.CylinderGeometry(0.52, 0.52, 0.048, 22), materials.woodMat);
      tableTop.position.y = tableH;
      tableTop.castShadow = tableTop.receiveShadow = true;
      g.add(tableTop);

      // Two comfortable Student Centre chairs pulled up close for conversation
      for (const [side, ang] of [[-1, 0.48], [1, -0.48]]) {
        const chair = new T.Group();
        chair.position.set(side * 0.56, 0.03, 0.14);
        chair.rotation.y = ang;
        g.add(chair);

        for (const lx of [-0.18, 0.18]) {
          for (const lz of [-0.17, 0.17]) {
            const leg = new T.Mesh(new T.CylinderGeometry(0.022, 0.018, 0.44, 8), materials.darkMetalMat);
            leg.position.set(lx, 0.22, lz);
            leg.castShadow = true;
            chair.add(leg);
          }
        }
        const seatPad = new T.Mesh(createRoundedBoxGeo(0.42, 0.046, 0.4, 0.035, 0.008), materials.woodMat);
        seatPad.position.set(0, 0.44, 0);
        seatPad.castShadow = true;
        chair.add(seatPad);

        const backRest = new T.Mesh(createCurvedChairBackGeo(0.42, 0.24, 0.034, 0.045), materials.woodMat);
        backRest.position.set(0, 0.68, -0.19);
        backRest.rotation.x = -0.1;
        backRest.castShadow = true;
        chair.add(backRest);
        for (const bx of [-0.16, 0.16]) {
          const rail = new T.Mesh(new T.CylinderGeometry(0.016, 0.016, 0.34, 8), materials.darkMetalMat);
          rail.position.set(bx, 0.58, -0.18);
          rail.rotation.x = -0.1;
          chair.add(rail);
        }
      }

      // Hero prop: Softly undulating draped folded cloth handkerchief resting on the table
      const hankyGroup = new T.Group();
      hankyGroup.position.set(-0.1, tableH + 0.029, 0.12);
      hankyGroup.rotation.y = 0.28;
      g.add(hankyGroup);

      const hankyClothMat = new T.MeshStandardMaterial({
        color: '#f8eff3',
        roughness: 0.86,
        side: T.DoubleSide
      });
      const hankyBorderMat = new T.MeshStandardMaterial({
        color: '#d89ab0',
        roughness: 0.82,
        side: T.DoubleSide
      });

      const foldBottom = new T.Mesh(createDrapedClothGeo(0.24, 0.22, 0.005), hankyBorderMat);
      foldBottom.castShadow = true;
      hankyGroup.add(foldBottom);

      const foldMain = new T.Mesh(createDrapedClothGeo(0.226, 0.206, 0.007), hankyClothMat);
      foldMain.position.set(0, 0.004, 0);
      foldMain.castShadow = true;
      hankyGroup.add(foldMain);

      const foldTop = new T.Mesh(createDrapedClothGeo(0.195, 0.165, 0.008), hankyClothMat);
      foldTop.position.set(0.012, 0.012, -0.012);
      foldTop.rotation.y = 0.14;
      hankyGroup.add(foldTop);

      const foldTopCrease = new T.Mesh(
        new T.CylinderGeometry(0.016, 0.018, 0.19, 10, 1, false, 0, Math.PI),
        hankyClothMat
      );
      foldTopCrease.rotation.z = Math.PI / 2;
      foldTopCrease.rotation.y = 0.1;
      foldTopCrease.position.set(0.006, 0.016, 0.055);
      hankyGroup.add(foldTopCrease);

      // Two warm handled ceramic mugs on the Student Centre table
      for (const [mx, mz, col, ry] of [[0.18, 0.08, '#e8dfd1', -0.4], [-0.18, -0.14, '#d9c5b4', 2.4]]) {
        const mug = createCeramicMug(col);
        mug.position.set(mx, tableH + 0.024, mz);
        mug.rotation.y = ry;
        g.add(mug);
      }

      const miniLantern = createMiniTableLantern(lib);
      miniLantern.position.set(0.14, tableH + 0.024, -0.18);
      g.add(miniLantern);
      break;
    }

    case 'choir-organ':
    case 'ringing-phone': {
      // MEMORY 07 — The Organ:
      // Electronic church choir organ/keyboard with recognizable white & black keys,
      // wooden console stand, pedalboard, bench, and choir sheet music
      g.rotation.y = -0.26;

      // Wooden organ console side panels & stand
      const organW = 1.06;
      const keybedY = 0.76;
      for (const sx of [-0.48, 0.48]) {
        const sidePanel = new T.Mesh(new T.BoxGeometry(0.065, 0.82, 0.46), materials.woodDarkMat);
        sidePanel.position.set(sx, 0.43, -0.06);
        sidePanel.castShadow = sidePanel.receiveShadow = true;
        g.add(sidePanel);

        const foot = new T.Mesh(new T.BoxGeometry(0.09, 0.05, 0.58), materials.woodDarkMat);
        foot.position.set(sx, 0.045, -0.04);
        g.add(foot);
      }

      // Modesty back panel & lower pedalboard with bass pedals
      const backPanel = new T.Mesh(new T.BoxGeometry(organW - 0.06, 0.68, 0.04), materials.woodMat);
      backPanel.position.set(0, 0.42, -0.22);
      backPanel.castShadow = true;
      g.add(backPanel);

      for (let p = -4; p <= 4; p++) {
        const pedal = new T.Mesh(new T.BoxGeometry(0.042, 0.022, 0.24), materials.woodMat);
        pedal.position.set(p * 0.075, 0.055, -0.06);
        g.add(pedal);
      }

      // Main keyboard console body & cheek blocks
      const keybedBase = new T.Mesh(new T.BoxGeometry(organW, 0.09, 0.48), materials.woodDarkMat);
      keybedBase.position.set(0, keybedY, -0.05);
      keybedBase.castShadow = keybedBase.receiveShadow = true;
      g.add(keybedBase);

      const topConsole = new T.Mesh(new T.BoxGeometry(organW, 0.08, 0.24), materials.woodMat);
      topConsole.position.set(0, keybedY + 0.08, -0.17);
      topConsole.castShadow = true;
      g.add(topConsole);

      // Organ stop tabs / drawbars along the upper console rail
      for (let s = -5; s <= 5; s++) {
        const stopTab = new T.Mesh(
          new T.BoxGeometry(0.042, 0.018, 0.03),
          s % 3 === 0
            ? new T.MeshStandardMaterial({ color: '#c45b5b', roughness: 0.4 })
            : materials.ceramicMat
        );
        stopTab.position.set(s * 0.068, keybedY + 0.09, -0.05);
        stopTab.rotation.x = 0.35;
        g.add(stopTab);
      }

      // Recognizable Keyboard Manual: 21 individual white keys + raised black sharps/flats in 2-3 pattern
      const whiteKeyMat = new T.MeshStandardMaterial({ color: '#faf6ed', roughness: 0.25 });
      const blackKeyMat = new T.MeshStandardMaterial({ color: '#1e1d22', roughness: 0.28, metalness: 0.2 });
      const numWhiteKeys = 21;
      const keyPitch = 0.041;
      const startX = -((numWhiteKeys - 1) * keyPitch) * 0.5;

      for (let k = 0; k < numWhiteKeys; k++) {
        const wk = new T.Mesh(new T.BoxGeometry(0.036, 0.026, 0.175), whiteKeyMat);
        wk.position.set(startX + k * keyPitch, keybedY + 0.052, 0.095);
        wk.castShadow = true;
        g.add(wk);

        // Add raised black key between appropriate scale degrees (C#, D#, F#, G#, A#)
        const deg = k % 7;
        if (k < numWhiteKeys - 1 && (deg === 0 || deg === 1 || deg === 3 || deg === 4 || deg === 5)) {
          const bk = new T.Mesh(new T.BoxGeometry(0.022, 0.034, 0.105), blackKeyMat);
          bk.position.set(startX + (k + 0.5) * keyPitch, keybedY + 0.07, 0.062);
          bk.castShadow = true;
          g.add(bk);
        }
      }

      // Slanted wooden music rest + open Choir Sheet Music
      const musicRest = new T.Mesh(new T.BoxGeometry(0.56, 0.32, 0.022), materials.woodDarkMat);
      musicRest.position.set(0, keybedY + 0.26, -0.17);
      musicRest.rotation.x = -0.24;
      musicRest.castShadow = true;
      g.add(musicRest);

      const sheetMusic = new T.Mesh(
        new T.PlaneGeometry(0.46, 0.27),
        new T.MeshStandardMaterial({ map: textures.sheetMusicTex, roughness: 0.55 })
      );
      sheetMusic.position.set(0, keybedY + 0.26, -0.155);
      sheetMusic.rotation.x = -0.24;
      g.add(sheetMusic);

      // Understated church choir detail: burgundy choir hymnal folder with subtle brass cross emblem
      const hymnal = new T.Mesh(
        new T.BoxGeometry(0.2, 0.026, 0.15),
        new T.MeshStandardMaterial({ color: '#6b2737', roughness: 0.65 })
      );
      hymnal.position.set(0.36, keybedY + 0.132, -0.16);
      hymnal.rotation.y = -0.22;
      g.add(hymnal);
      const crossV = new T.Mesh(new T.BoxGeometry(0.012, 0.006, 0.065), materials.brassMat);
      crossV.position.set(0.36, keybedY + 0.146, -0.16);
      crossV.rotation.y = -0.22;
      g.add(crossV);
      const crossH = new T.Mesh(new T.BoxGeometry(0.042, 0.006, 0.012), materials.brassMat);
      crossH.position.set(0.36, keybedY + 0.146, -0.17);
      crossH.rotation.y = -0.22;
      g.add(crossH);

      // Brass decorative music-rest lip & expression swell pedal
      const musicLip = new T.Mesh(new T.BoxGeometry(0.58, 0.024, 0.042), materials.brassMat);
      musicLip.position.set(0, keybedY + 0.115, -0.145);
      musicLip.rotation.x = -0.24;
      g.add(musicLip);

      // Subtle brass choir pipe/grille vertical reeds behind music stand
      for (let p = -3; p <= 3; p++) {
        if (Math.abs(p) <= 1) continue;
        const pipe = new T.Mesh(new T.CylinderGeometry(0.014, 0.014, 0.26 - Math.abs(p) * 0.025, 10), materials.brassMat);
        pipe.position.set(p * 0.095, keybedY + 0.25, -0.24);
        g.add(pipe);
      }

      // Wooden organ bench in front of the console
      const benchTop = new T.Mesh(createRoundedBoxGeo(0.68, 0.048, 0.28, 0.022, 0.006), materials.woodMat);
      benchTop.position.set(0, 0.46, 0.36);
      benchTop.castShadow = benchTop.receiveShadow = true;
      g.add(benchTop);
      for (const bx of [-0.28, 0.28]) {
        const bLeg = new T.Mesh(new T.BoxGeometry(0.05, 0.44, 0.24), materials.woodDarkMat);
        bLeg.position.set(bx, 0.23, 0.36);
        bLeg.castShadow = true;
        g.add(bLeg);
      }

      // Warm brass music lamp illuminating the sheet music & keys
      const lampLight = new T.PointLight('#ffd294', 1.4, 3.6, 1.8);
      lampLight.position.set(0, keybedY + 0.44, 0.08);
      g.add(lampLight);

      const miniLantern = createMiniTableLantern(lib);
      miniLantern.position.set(-0.38, keybedY + 0.115, -0.17);
      g.add(miniLantern);
      break;
    }

    case 'lecture-rows':
    case 'iced-coffee-bench': {
      // MEMORY 08 — The Seat Behind You (November 12, 2026):
      // Miniature lecture-hall section with TWO rows of desks and seats positioned directly
      // one behind the other + subtle details from the final lecture & small Panadol packet
      g.rotation.y = 0.22;

      // Enlarge stone pad slightly for two rows of desks
      pad.scale.set(1.25, 1, 1.32);

      // Tiered lecture-hall riser under the back row (Menaka's seat directly behind Hirushi's)
      const backRiser = new T.Mesh(new T.BoxGeometry(1.12, 0.11, 0.68), materials.woodDarkMat);
      backRiser.position.set(0, 0.085, 0.36);
      backRiser.receiveShadow = true;
      g.add(backRiser);

      const buildLectureRow = (rowZ, baseY, chairYawOffset = 0) => {
        const rowGroup = new T.Group();
        rowGroup.position.set(0, baseY, rowZ);
        g.add(rowGroup);

        // Beveled lecture desk
        const deskTop = new T.Mesh(createRoundedBoxGeo(0.86, 0.045, 0.38, 0.018, 0.006), materials.woodMat);
        deskTop.position.set(0, 0.66, -0.12);
        deskTop.castShadow = deskTop.receiveShadow = true;
        rowGroup.add(deskTop);

        const modesty = new T.Mesh(new T.BoxGeometry(0.82, 0.26, 0.025), materials.woodDarkMat);
        modesty.position.set(0, 0.51, -0.28);
        rowGroup.add(modesty);

        for (const lx of [-0.38, 0.38]) {
          const leg = new T.Mesh(new T.BoxGeometry(0.045, 0.64, 0.34), materials.darkMetalMat);
          leg.position.set(lx, 0.32, -0.12);
          leg.castShadow = true;
          rowGroup.add(leg);
        }

        // Lecture chair positioned behind the desk
        const chair = new T.Group();
        chair.position.set(0, 0, 0.18);
        chair.rotation.y = chairYawOffset;
        rowGroup.add(chair);

        for (const cx of [-0.17, 0.17]) {
          for (const cz of [-0.15, 0.15]) {
            const cLeg = new T.Mesh(new T.CylinderGeometry(0.018, 0.016, 0.42, 8), materials.darkMetalMat);
            cLeg.position.set(cx, 0.21, cz);
            chair.add(cLeg);
          }
        }
        const seat = new T.Mesh(createRoundedBoxGeo(0.4, 0.042, 0.36, 0.032, 0.007), materials.woodMat);
        seat.position.set(0, 0.42, 0);
        seat.castShadow = true;
        chair.add(seat);

        const back = new T.Mesh(createCurvedChairBackGeo(0.4, 0.22, 0.032, -0.04), materials.woodMat);
        back.position.set(0, 0.62, 0.16);
        back.rotation.x = 0.08;
        back.castShadow = true;
        chair.add(back);

        for (const bx of [-0.15, 0.15]) {
          const post = new T.Mesh(new T.CylinderGeometry(0.015, 0.015, 0.28, 8), materials.darkMetalMat);
          post.position.set(bx, 0.52, 0.16);
          chair.add(post);
        }

        return rowGroup;
      };

      // Row 1 (Front row — Hirushi's seat, chair slightly turned back as if teasing him)
      const frontRow = buildLectureRow(-0.34, 0.04, -0.26);
      const frontNotes = new T.Mesh(
        new T.PlaneGeometry(0.22, 0.26),
        new T.MeshStandardMaterial({ map: textures.examSheetTex, roughness: 0.65 })
      );
      frontNotes.rotation.x = -Math.PI / 2;
      frontNotes.rotation.z = 0.12;
      frontNotes.position.set(-0.08, 0.686, -0.12);
      frontRow.add(frontNotes);

      // Row 2 (Back row directly behind — Menaka's seat)
      const backRow = buildLectureRow(0.36, 0.14, 0.05);
      // Open notebook on the back desk
      const nbLeft = new T.Mesh(new T.BoxGeometry(0.18, 0.014, 0.23), materials.ceramicMat);
      nbLeft.position.set(-0.18, 0.69, -0.11);
      nbLeft.rotation.z = 0.03;
      backRow.add(nbLeft);
      const nbRight = new T.Mesh(
        new T.BoxGeometry(0.18, 0.014, 0.23),
        new T.MeshStandardMaterial({ map: textures.examSheetTex, roughness: 0.65 })
      );
      nbRight.position.set(0.0, 0.69, -0.11);
      nbRight.rotation.z = -0.03;
      backRow.add(nbRight);

      const pen = new T.Mesh(new T.CylinderGeometry(0.007, 0.005, 0.15, 6), materials.brassMat);
      pen.rotation.set(0, 0.4, Math.PI / 2);
      pen.position.set(0.06, 0.702, -0.05);
      backRow.add(pen);

      // Subtle, non-dominant Panadol blister packet tucked near the right edge of the desk
      const blister = new T.Mesh(
        new T.BoxGeometry(0.11, 0.008, 0.065),
        new T.MeshStandardMaterial({ color: '#d7e2e8', metalness: 0.65, roughness: 0.32 })
      );
      blister.position.set(0.24, 0.688, -0.1);
      blister.rotation.y = 0.24;
      backRow.add(blister);
      for (const px of [-0.025, 0.025]) {
        for (const pz of [-0.014, 0.014]) {
          const pill = new T.Mesh(new T.CapsuleGeometry(0.008, 0.01, 4, 8), materials.ceramicMat);
          pill.rotation.z = Math.PI / 2;
          pill.position.set(0.24 + px, 0.695, -0.1 + pz);
          backRow.add(pill);
        }
      }

      const miniLantern = createMiniTableLantern(lib);
      miniLantern.position.set(-0.34, 0.685, -0.14);
      frontRow.add(miniLantern);
      break;
    }

    case 'library-study-room':
    case 'mini-cinema': {
      // MEMORY 09 — The Library Key Disaster (November 13, 2026):
      // Unified miniature library study-room scene with:
      // 1) Study table & two laptops, 2) Standing whiteboard showing "Hirushi × Menaka",
      // 3) Broken key near a study-room doorframe, 4) Small phone (first call), 5) Iced coffee
      g.rotation.y = -0.18;
      pad.scale.set(1.38, 1, 1.32);

      // 1. Central Library Study Table with Two Laptops, Small Phone & Iced Coffee
      const tableH = 0.68;
      const tableTop = new T.Mesh(new T.BoxGeometry(0.92, 0.05, 0.56), materials.woodMat);
      tableTop.position.set(-0.08, tableH, 0.14);
      tableTop.castShadow = tableTop.receiveShadow = true;
      g.add(tableTop);
      for (const lx of [-0.46, 0.3]) {
        const leg = new T.Mesh(new T.BoxGeometry(0.06, tableH - 0.02, 0.46), materials.woodDarkMat);
        leg.position.set(lx, (tableH - 0.02) * 0.5, 0.14);
        leg.castShadow = true;
        g.add(leg);
      }

      // Two open beveled laptops side-by-side working on the web project
      for (const [lapX, lapZ, lapYaw] of [[-0.28, 0.12, 0.14], [0.06, 0.1, -0.12]]) {
        const lap = new T.Group();
        lap.position.set(lapX, tableH + 0.026, lapZ);
        lap.rotation.y = lapYaw;
        g.add(lap);

        const base = new T.Mesh(createRoundedBoxGeo(0.28, 0.016, 0.2, 0.014, 0.004), materials.darkMetalMat);
        lap.add(base);
        // Sculpted keyboard keybed recess + trackpad on laptop palmrest
        const kb = new T.Mesh(
          new T.BoxGeometry(0.23, 0.004, 0.095),
          new T.MeshStandardMaterial({ color: '#1b1f28', roughness: 0.5 })
        );
        kb.position.set(0, 0.008, -0.02);
        lap.add(kb);
        const padTouch = new T.Mesh(
          new T.BoxGeometry(0.075, 0.003, 0.048),
          new T.MeshStandardMaterial({ color: '#3b4252', roughness: 0.4 })
        );
        padTouch.position.set(0, 0.008, 0.06);
        lap.add(padTouch);

        const lid = new T.Mesh(createRoundedBoxGeo(0.28, 0.19, 0.014, 0.012, 0.004, true), materials.darkMetalMat);
        lid.position.set(0, 0.095, -0.095);
        lid.rotation.x = -0.22;
        lap.add(lid);
        const scr = new T.Mesh(
          new T.PlaneGeometry(0.255, 0.165),
          new T.MeshStandardMaterial({
            map: textures.webProjectScreenTex,
            emissiveMap: textures.webProjectScreenTex,
            emissive: new T.Color('#ffffff'),
            emissiveIntensity: 0.55,
            roughness: 0.25
          })
        );
        scr.position.set(0, 0.095, -0.086);
        scr.rotation.x = -0.22;
        lap.add(scr);
      }

      // 4. Small Smartphone on the study table (representing the first tiny phone call)
      const callPhone = new T.Mesh(
        new T.BoxGeometry(0.085, 0.014, 0.16),
        new T.MeshStandardMaterial({ color: '#232a38', roughness: 0.3, metalness: 0.5 })
      );
      callPhone.position.set(-0.09, tableH + 0.033, 0.29);
      callPhone.rotation.y = 0.35;
      g.add(callPhone);
      const callScreen = new T.Mesh(
        new T.PlaneGeometry(0.074, 0.14),
        new T.MeshStandardMaterial({
          color: '#b8f2d0',
          emissive: '#6ad99b',
          emissiveIntensity: 0.9,
          roughness: 0.2
        })
      );
      callScreen.rotation.x = -Math.PI / 2;
      callScreen.rotation.z = 0.35;
      callScreen.position.set(-0.09, tableH + 0.041, 0.29);
      g.add(callScreen);

      // 5. Layered Iced Coffee Cup with cream top, dome lid & straw on right corner of table
      const coffeeGroup = new T.Group();
      coffeeGroup.position.set(0.26, tableH + 0.025, 0.24);
      g.add(coffeeGroup);
      const cupBody = new T.Mesh(
        new T.CylinderGeometry(0.056, 0.042, 0.13, 14),
        new T.MeshStandardMaterial({ color: '#8f5e42', roughness: 0.25 })
      );
      cupBody.position.y = 0.065;
      coffeeGroup.add(cupBody);
      const creamLayer = new T.Mesh(
        new T.CylinderGeometry(0.058, 0.055, 0.036, 14),
        new T.MeshStandardMaterial({ color: '#ead8c5', roughness: 0.35 })
      );
      creamLayer.position.y = 0.12;
      coffeeGroup.add(creamLayer);
      const domeLid = new T.Mesh(
        new T.SphereGeometry(0.058, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5),
        materials.glassMat
      );
      domeLid.position.y = 0.136;
      coffeeGroup.add(domeLid);
      const straw = new T.Mesh(
        new T.CylinderGeometry(0.007, 0.007, 0.14, 6),
        new T.MeshStandardMaterial({ color: PALETTE.blossomMid, roughness: 0.4 })
      );
      straw.position.set(0.015, 0.18, 0);
      straw.rotation.z = -0.22;
      coffeeGroup.add(straw);

      // 2. Standing Dry-Erase Whiteboard showing "Hirushi × Menaka" behind the study table
      const wbGroup = new T.Group();
      wbGroup.position.set(-0.34, 0.04, -0.34);
      wbGroup.rotation.y = 0.22;
      g.add(wbGroup);

      for (const sx of [-0.46, 0.46]) {
        const post = new T.Mesh(new T.BoxGeometry(0.048, 1.42, 0.048), materials.darkMetalMat);
        post.position.set(sx, 0.71, 0);
        post.castShadow = true;
        wbGroup.add(post);
        const foot = new T.Mesh(new T.BoxGeometry(0.06, 0.04, 0.38), materials.darkMetalMat);
        foot.position.set(sx, 0.02, 0);
        wbGroup.add(foot);
      }
      const wbFrame = new T.Mesh(new T.BoxGeometry(0.96, 0.62, 0.04), materials.woodDarkMat);
      wbFrame.position.set(0, 1.06, 0);
      wbFrame.castShadow = true;
      wbGroup.add(wbFrame);

      const wbBoard = new T.Mesh(
        new T.PlaneGeometry(0.88, 0.54),
        new T.MeshStandardMaterial({
          map: textures.whiteboardTex,
          roughness: 0.28
        })
      );
      wbBoard.position.set(0, 1.06, 0.022);
      wbGroup.add(wbBoard);

      // Marker tray with blue & red markers
      const tray = new T.Mesh(new T.BoxGeometry(0.88, 0.025, 0.06), materials.darkMetalMat);
      tray.position.set(0, 0.74, 0.035);
      wbGroup.add(tray);

      // 3. Architectural Study-Room Doorframe & Broken Key (right side of the room)
      const doorGroup = new T.Group();
      doorGroup.position.set(0.58, 0.04, -0.12);
      doorGroup.rotation.y = -0.38;
      g.add(doorGroup);

      // Doorframe jambs & lintel with frosted sidelight glass panel
      for (const dx of [-0.28, 0.28]) {
        const jamb = new T.Mesh(new T.BoxGeometry(0.065, 1.48, 0.09), materials.woodDarkMat);
        jamb.position.set(dx, 0.74, 0);
        jamb.castShadow = true;
        doorGroup.add(jamb);
      }
      const lintel = new T.Mesh(new T.BoxGeometry(0.66, 0.07, 0.1), materials.woodDarkMat);
      lintel.position.set(0, 1.48, 0);
      doorGroup.add(lintel);

      // Study-room door slab slightly ajar + glass window pane
      const doorSlab = new T.Mesh(new T.BoxGeometry(0.48, 1.4, 0.048), materials.woodMat);
      doorSlab.position.set(-0.02, 0.72, 0.02);
      doorSlab.rotation.y = 0.18;
      doorSlab.castShadow = true;
      doorGroup.add(doorSlab);

      const doorGlass = new T.Mesh(new T.BoxGeometry(0.26, 0.58, 0.054), materials.glassMat);
      doorGlass.position.set(-0.02, 0.98, 0.02);
      doorGlass.rotation.y = 0.18;
      doorGroup.add(doorGlass);

      // Brass lock escutcheon plate & jammed broken key blade tip in the lock
      const lockPlate = new T.Mesh(new T.BoxGeometry(0.045, 0.14, 0.06), materials.brassMat);
      lockPlate.position.set(0.16, 0.74, 0.06);
      doorGroup.add(lockPlate);

      const stuckBlade = new T.Mesh(new T.BoxGeometry(0.018, 0.012, 0.055), materials.brassMat);
      stuckBlade.position.set(0.16, 0.71, 0.095);
      doorGroup.add(stuckBlade);

      // Broken Key Display Pedestal / Threshold Stool right beside the door lock so the broken 2-piece key is super clear
      const keyPedestal = new T.Mesh(new T.BoxGeometry(0.32, 0.42, 0.28), materials.woodDarkMat);
      keyPedestal.position.set(0.18, 0.21, 0.28);
      keyPedestal.castShadow = keyPedestal.receiveShadow = true;
      doorGroup.add(keyPedestal);

      const keyMatPad = new T.Mesh(new T.BoxGeometry(0.26, 0.016, 0.22), materials.linenMat);
      keyMatPad.position.set(0.18, 0.428, 0.28);
      doorGroup.add(keyMatPad);

      // Snapped two-piece brass key: Key bow + ring on left, jagged snapped key bit on right
      const keyRing = new T.Mesh(new T.TorusGeometry(0.042, 0.008, 10, 20), materials.brassMat);
      keyRing.rotation.x = Math.PI / 2;
      keyRing.position.set(0.12, 0.442, 0.27);
      doorGroup.add(keyRing);

      const keyTag = new T.Mesh(
        new T.BoxGeometry(0.055, 0.012, 0.032),
        new T.MeshStandardMaterial({ color: '#c84b5b', roughness: 0.45 })
      );
      keyTag.position.set(0.065, 0.442, 0.29);
      keyTag.rotation.y = -0.35;
      doorGroup.add(keyTag);

      const brokenShaftHalf1 = new T.Mesh(new T.BoxGeometry(0.065, 0.012, 0.022), materials.brassMat);
      brokenShaftHalf1.position.set(0.18, 0.442, 0.26);
      brokenShaftHalf1.rotation.y = 0.22;
      doorGroup.add(brokenShaftHalf1);

      const brokenBladeGroup = new T.Group();
      brokenBladeGroup.position.set(0.245, 0.442, 0.305);
      brokenBladeGroup.rotation.y = -0.48;
      doorGroup.add(brokenBladeGroup);
      const brokenShaftHalf2 = new T.Mesh(new T.BoxGeometry(0.064, 0.012, 0.02), materials.brassMat);
      brokenBladeGroup.add(brokenShaftHalf2);
      // Key bit teeth along the snapped blade
      for (const [tx, tz] of [[-0.014, 0.016], [0.004, 0.012], [0.02, 0.018]]) {
        const tooth = new T.Mesh(new T.BoxGeometry(0.012, 0.012, 0.018), materials.brassMat);
        tooth.position.set(tx, 0, tz);
        brokenBladeGroup.add(tooth);
      }

      const roomLight = new T.PointLight('#ffd298', 1.6, 4.2, 1.8);
      roomLight.position.set(0.1, 1.25, 0.25);
      g.add(roomLight);
      break;
    }

    case 'it-movie-night':
    case 'unfinished-arch': {
      // MEMORY 10 — IT Movie Night (November 13–14, 2026):
      // Cozy miniature night/cinema scene representing two people watching IT from two different places while texting:
      // 1) Left space: TV on media console + cushion + smartphone
      // 2) Right space: Open laptop on low desk + cushion + smartphone
      // 3) Connected across the gap by a glowing arc of text-message motes + atmospheric night lighting
      pad.scale.set(1.52, 1, 1.32);

      // Subtle stone divider pebbles down the center separating the two home viewing spaces
      for (let s = -2; s <= 2; s++) {
        const divStone = new T.Mesh(new T.DodecahedronGeometry(0.085, 1), materials.stoneMat);
        divStone.position.set(0, 0.065, s * 0.22);
        divStone.scale.set(1.1, 0.55, 1.3);
        g.add(divStone);
      }

      // Tiny sculpted multi-fold origami paper boat motif sitting between the two spaces
      const boatGroup = new T.Group();
      boatGroup.position.set(0, 0.1, 0.36);
      boatGroup.rotation.y = 0.25;
      g.add(boatGroup);
      const boatMat = new T.MeshStandardMaterial({
        color: '#f2c14e',
        emissive: '#d99b26',
        emissiveIntensity: 0.25,
        roughness: 0.55,
        side: T.DoubleSide
      });
      const boatShape = new T.Shape();
      boatShape.moveTo(-0.08, 0.032);
      boatShape.lineTo(0.08, 0.032);
      boatShape.lineTo(0.052, 0);
      boatShape.lineTo(-0.052, 0);
      boatShape.closePath();
      const hull = new T.Mesh(
        new T.ExtrudeGeometry(boatShape, { depth: 0.052, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.003, bevelSegments: 1 }),
        boatMat
      );
      hull.position.set(0, 0, -0.026);
      boatGroup.add(hull);
      const sail = new T.Mesh(new T.ConeGeometry(0.044, 0.068, 3), boatMat);
      sail.position.y = 0.056;
      sail.scale.set(1.2, 1, 0.45);
      boatGroup.add(sail);

      // --- LEFT SPACE (Hirushi's Home Corner: Television + Media Cabinet + Cushion + Phone) ---
      const leftSpace = new T.Group();
      leftSpace.position.set(-0.68, 0.04, 0);
      leftSpace.rotation.y = 0.22;
      g.add(leftSpace);

      const leftRug = new T.Mesh(
        new T.CylinderGeometry(0.54, 0.54, 0.016, 20),
        new T.MeshStandardMaterial({ color: '#63536e', roughness: 0.9 })
      );
      leftRug.position.y = 0.01;
      leftSpace.add(leftRug);

      // Low TV console cabinet
      const tvStand = new T.Mesh(new T.BoxGeometry(0.68, 0.32, 0.26), materials.woodDarkMat);
      tvStand.position.set(0, 0.18, -0.22);
      tvStand.castShadow = tvStand.receiveShadow = true;
      leftSpace.add(tvStand);

      // Television screen showing the custom rainy midnight paper-boat scene
      const tvFrame = new T.Mesh(new T.BoxGeometry(0.64, 0.4, 0.035), materials.darkMetalMat);
      tvFrame.position.set(0, 0.58, -0.22);
      tvFrame.castShadow = true;
      leftSpace.add(tvFrame);

      const movieMat = new T.MeshStandardMaterial({
        map: textures.movieScreenTex,
        emissiveMap: textures.movieScreenTex,
        emissive: new T.Color('#ffbfa0'),
        emissiveIntensity: 0.95,
        roughness: 0.25
      });
      const tvScreen = new T.Mesh(new T.PlaneGeometry(0.59, 0.35), movieMat);
      tvScreen.position.set(0, 0.58, -0.198);
      leftSpace.add(tvScreen);

      const leftCushion = new T.Mesh(
        new T.CylinderGeometry(0.22, 0.24, 0.09, 16),
        new T.MeshStandardMaterial({ color: '#c87e99', roughness: 0.85 })
      );
      leftCushion.position.set(-0.04, 0.055, 0.24);
      leftCushion.castShadow = true;
      leftSpace.add(leftCushion);

      // Hirushi's glowing smartphone beside her cushion
      const leftPhone = new T.Mesh(new T.BoxGeometry(0.08, 0.015, 0.15), materials.darkMetalMat);
      leftPhone.position.set(0.22, 0.03, 0.22);
      leftPhone.rotation.y = -0.35;
      leftSpace.add(leftPhone);
      const leftPhoneScr = new T.Mesh(
        new T.PlaneGeometry(0.068, 0.13),
        new T.MeshStandardMaterial({
          map: textures.phoneLockTex,
          emissiveMap: textures.phoneLockTex,
          emissive: new T.Color('#ffdcb0'),
          emissiveIntensity: 1.1
        })
      );
      leftPhoneScr.rotation.x = -Math.PI / 2;
      leftPhoneScr.rotation.z = -0.35;
      leftPhoneScr.position.set(0.22, 0.039, 0.22);
      leftSpace.add(leftPhoneScr);

      // --- RIGHT SPACE (Menaka's Home Corner: Open Laptop on Low Desk + Cushion + Phone) ---
      const rightSpace = new T.Group();
      rightSpace.position.set(0.68, 0.04, 0);
      rightSpace.rotation.y = -0.22;
      g.add(rightSpace);

      const rightRug = new T.Mesh(
        new T.CylinderGeometry(0.54, 0.54, 0.016, 20),
        new T.MeshStandardMaterial({ color: '#4d5d75', roughness: 0.9 })
      );
      rightRug.position.y = 0.01;
      rightSpace.add(rightRug);

      const lowDesk = new T.Mesh(new T.BoxGeometry(0.58, 0.28, 0.32), materials.woodMat);
      lowDesk.position.set(0, 0.16, -0.18);
      lowDesk.castShadow = lowDesk.receiveShadow = true;
      rightSpace.add(lowDesk);

      // Open laptop watching the exact same midnight movie
      const lapBase = new T.Mesh(new T.BoxGeometry(0.34, 0.018, 0.24), materials.darkMetalMat);
      lapBase.position.set(0, 0.31, -0.16);
      rightSpace.add(lapBase);
      const lapLid = new T.Mesh(new T.BoxGeometry(0.34, 0.23, 0.016), materials.darkMetalMat);
      lapLid.position.set(0, 0.425, -0.27);
      lapLid.rotation.x = -0.18;
      lapLid.castShadow = true;
      rightSpace.add(lapLid);
      const lapScreen = new T.Mesh(new T.PlaneGeometry(0.31, 0.195), movieMat);
      lapScreen.position.set(0, 0.425, -0.258);
      lapScreen.rotation.x = -0.18;
      rightSpace.add(lapScreen);

      const rightCushion = new T.Mesh(
        new T.CylinderGeometry(0.22, 0.24, 0.09, 16),
        new T.MeshStandardMaterial({ color: '#6e789c', roughness: 0.85 })
      );
      rightCushion.position.set(0.04, 0.055, 0.24);
      rightCushion.castShadow = true;
      rightSpace.add(rightCushion);

      // Menaka's glowing smartphone beside his cushion
      const rightPhone = new T.Mesh(new T.BoxGeometry(0.08, 0.015, 0.15), materials.darkMetalMat);
      rightPhone.position.set(-0.22, 0.03, 0.22);
      rightPhone.rotation.y = 0.35;
      rightSpace.add(rightPhone);
      const rightPhoneScr = new T.Mesh(
        new T.PlaneGeometry(0.068, 0.13),
        new T.MeshStandardMaterial({
          map: textures.phoneLockTex,
          emissiveMap: textures.phoneLockTex,
          emissive: new T.Color('#ffdcb0'),
          emissiveIntensity: 1.1
        })
      );
      rightPhoneScr.rotation.x = -Math.PI / 2;
      rightPhoneScr.rotation.z = 0.35;
      rightPhoneScr.position.set(-0.22, 0.039, 0.22);
      rightSpace.add(rightPhoneScr);

      // --- VISUAL CONNECTION MOTIF: Glowing message motes arcing between the two phones ---
      const moteGroup = new T.Group();
      g.add(moteGroup);
      const motes = [];
      const numMotes = 7;
      for (let i = 0; i < numMotes; i++) {
        const u = i / (numMotes - 1);
        const mx = T.MathUtils.lerp(-0.46, 0.46, u);
        const my = 0.16 + Math.sin(u * Math.PI) * 0.42;
        const mz = 0.22 + Math.sin(u * Math.PI) * 0.08;
        const mote = new T.Mesh(
          new T.SphereGeometry(0.024, 10, 8),
          new T.MeshStandardMaterial({
            color: '#ffebd2',
            emissive: '#ffbe78',
            emissiveIntensity: 1.8,
            roughness: 0.2
          })
        );
        mote.position.set(mx, my, mz);
        moteGroup.add(mote);
        motes.push({ mesh: mote, baseY: my, phase: u * Math.PI * 2 });
      }

      // Subtle atmospheric horror-night lighting (warm crimson-amber + midnight cool glow)
      const nightGlowLeft = new T.PointLight('#ff8f70', 1.6, 4.2, 1.8);
      nightGlowLeft.position.set(-0.65, 0.72, 0.1);
      g.add(nightGlowLeft);

      const nightGlowRight = new T.PointLight('#9ab8ff', 1.3, 4.2, 1.8);
      nightGlowRight.position.set(0.65, 0.68, 0.1);
      g.add(nightGlowRight);

      animated.movieNight = { moteGroup, motes, nightGlowLeft, nightGlowRight };
      break;
    }
  }

  // Ground flower & stone accent around each landmark pad
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + rng() * 0.8;
    const r = 0.92 + rng() * 0.2;
    const pebble = new T.Mesh(new T.DodecahedronGeometry(0.14 + rng() * 0.08, 1), materials.stoneMat);
    pebble.position.set(Math.cos(a) * r, 0.04, Math.sin(a) * r);
    pebble.scale.set(1.2, 0.55, 1.1);
    g.add(pebble);
  }

  batchStaticGroup(
    g,
    [
      animated.cupcake?.flame,
      animated.firstTextPhone?.screen,
      animated.firstTextPhone?.ring,
      animated.movieNight?.moteGroup
    ].filter(Boolean)
  );

  return { group: g, animated };
}

export function buildShySpirit(scene, lib, x = 2.2, z = -12.0) {
  const { textures, materials } = lib;
  const baseY = getTerrainHeight(x, z);
  const ghost = new T.Group();
  ghost.position.set(x, baseY + 0.82, z);
  scene.add(ghost);

  // Sculpted fluted cloth silhouette (matching 01-world-entry & 03-garden-walk!)
  const profile = [
    new T.Vector2(0.0, 0.56),
    new T.Vector2(0.18, 0.52),
    new T.Vector2(0.28, 0.36),
    new T.Vector2(0.3, 0.14),
    new T.Vector2(0.35, -0.14),
    new T.Vector2(0.42, -0.34),
    new T.Vector2(0.45, -0.44)
  ];
  const geo = new T.LatheGeometry(profile, 28);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const px = pos.getX(i);
    const py = pos.getY(i);
    const pz = pos.getZ(i);
    if (py < 0.15) {
      const ang = Math.atan2(pz, px);
      const flare = (0.15 - py) / 0.6;
      const wave = Math.sin(ang * 7) * 0.055 * flare;
      const hem = Math.cos(ang * 7) * 0.04 * flare;
      pos.setXYZ(i, px * (1 + wave), py + hem, pz * (1 + wave));
    }
  }
  geo.computeVertexNormals();

  const spiritMat = new T.MeshStandardMaterial({
    color: '#f7f3eb',
    emissive: '#9db4cc',
    emissiveIntensity: 0.24,
    roughness: 0.52
  });
  const body = new T.Mesh(geo, spiritMat);
  body.castShadow = true;
  ghost.add(body);

  // Expressive dark eyes + subtle blush cheeks
  const eyeMat = new T.MeshStandardMaterial({ color: '#242934', roughness: 0.25 });
  const blushMat = new T.MeshBasicMaterial({ color: '#eb9eb5', transparent: true, opacity: 0.6 });
  const ghostEyes = [];
  for (const ex of [-0.1, 0.1]) {
    const eye = new T.Mesh(new T.SphereGeometry(0.042, 10, 8), eyeMat);
    eye.scale.set(0.85, 1.2, 0.65);
    eye.position.set(ex, 0.28, 0.27);
    ghost.add(eye);
    ghostEyes.push(eye);

    const cheek = new T.Mesh(new T.CircleGeometry(0.036, 10), blushMat);
    cheek.position.set(ex * 1.55, 0.21, 0.265);
    ghost.add(cheek);
  }

  // Warm soft ground light & contact shadow beneath the hovering spirit
  const spiritShadow = new T.Mesh(new T.PlaneGeometry(0.95, 0.95), materials.contactShadowMat);
  spiritShadow.rotation.x = -Math.PI / 2;
  spiritShadow.position.set(x, baseY + 0.02, z);
  scene.add(spiritShadow);

  const spiritHalo = new T.Sprite(
    new T.SpriteMaterial({
      map: textures.glowTex,
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
      blending: T.AdditiveBlending
    })
  );
  spiritHalo.scale.set(1.35, 1.35, 1.35);
  ghost.add(spiritHalo);

  return { ghost, ghostEyes, baseY };
}

export function buildBlossomShrine(scene, lib, x = 0, z = -30.0) {
  const { textures, materials } = lib;
  const y = getTerrainHeight(x, z);
  const shrine = new T.Group();
  shrine.position.set(x, y, z);
  scene.add(shrine);

  // Carved tiered stone lotus pedestal
  const base = new T.Mesh(new T.CylinderGeometry(1.15, 1.32, 0.22, 10), materials.stoneDarkMat);
  base.position.y = 0.11;
  base.castShadow = base.receiveShadow = true;
  shrine.add(base);

  const basin = new T.Mesh(new T.CylinderGeometry(0.75, 0.55, 0.32, 12), materials.stoneMat);
  basin.position.y = 0.38;
  basin.castShadow = basin.receiveShadow = true;
  shrine.add(basin);

  const bloom = new T.Group();
  bloom.position.y = 0.62;
  shrine.add(bloom);

  const bloomPetals = [];
  const petalMat = new T.MeshStandardMaterial({
    color: PALETTE.blossomPale,
    emissive: '#6e3d52',
    emissiveIntensity: 0.18,
    roughness: 0.58
  });
  for (let i = 0; i < 8; i++) {
    const holder = new T.Group();
    holder.rotation.y = (i / 8) * Math.PI * 2;
    bloom.add(holder);
    const p = new T.Mesh(new T.SphereGeometry(0.42, 14, 10), petalMat);
    p.scale.set(0.56, 1.25, 0.26);
    p.position.set(0, 0.32, 0.24);
    p.rotation.x = -0.32;
    p.castShadow = true;
    holder.add(p);
    bloomPetals.push(p);
  }

  const coreOrb = new T.Mesh(
    new T.SphereGeometry(0.18, 16, 12),
    new T.MeshStandardMaterial({
      color: PALETTE.warmIvory,
      emissive: PALETTE.amberCore,
      emissiveIntensity: 1.4,
      roughness: 0.25
    })
  );
  coreOrb.position.y = 0.32;
  bloom.add(coreOrb);

  const halo = new T.Sprite(
    new T.SpriteMaterial({
      map: textures.glowTex,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: T.AdditiveBlending
    })
  );
  halo.position.y = 0.32;
  halo.scale.set(1.75, 1.75, 1.75);
  bloom.add(halo);

  const shrineLight = new T.PointLight(PALETTE.lanternGlow, 3.8, 9.0, 1.8);
  shrineLight.position.set(0, 0.95, 0);
  shrine.add(shrineLight);

  addContactShadow(shrine, materials.contactShadowMat, 1.5, 0.018);

  return { bloomPetals, coreOrb };
}

export function buildPlayerOrb(scene, lib) {
  const { textures, materials } = lib;
  const player = new T.Group();
  player.position.set(0, getTerrainHeight(0, 21.5), 21.5);
  scene.add(player);

  const body = new T.Mesh(
    new T.SphereGeometry(0.19, 18, 14),
    new T.MeshStandardMaterial({
      color: PALETTE.warmIvory,
      emissive: PALETTE.amberCore,
      emissiveIntensity: 0.72,
      roughness: 0.32
    })
  );
  body.scale.set(1, 1.18, 1);
  body.position.y = 0.55;
  body.castShadow = true;
  player.add(body);

  // Delicate sculpted fairy wings
  const wingShape = new T.Shape();
  wingShape.moveTo(0, 0);
  wingShape.bezierCurveTo(0.18, 0.16, 0.36, 0.12, 0.34, -0.04);
  wingShape.bezierCurveTo(0.32, -0.18, 0.12, -0.22, 0, -0.06);
  const wingGeo = new T.ShapeGeometry(wingShape, 10);
  wingGeo.rotateX(-Math.PI / 2);

  const wingMat = new T.MeshStandardMaterial({
    color: PALETTE.blossomPale,
    emissive: PALETTE.blossomMid,
    emissiveIntensity: 0.25,
    transparent: true,
    opacity: 0.78,
    roughness: 0.3,
    side: T.DoubleSide
  });
  const wings = [];
  for (const side of [-1, 1]) {
    const w = new T.Mesh(wingGeo, wingMat);
    w.position.set(side * 0.12, 0.62, -0.02);
    if (side < 0) w.scale.x = -1;
    player.add(w);
    wings.push(w);
  }

  addContactShadow(player, materials.contactShadowMat, 0.38, 0.02);

  const aura = new T.Sprite(
    new T.SpriteMaterial({
      map: textures.glowTex,
      transparent: true,
      opacity: 0.42,
      depthWrite: false,
      blending: T.AdditiveBlending
    })
  );
  aura.position.y = 0.55;
  aura.scale.set(1.05, 1.05, 1.05);
  player.add(aura);

  return { player, body, wings, aura };
}
