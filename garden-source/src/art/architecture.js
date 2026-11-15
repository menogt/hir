import * as T from 'three';
import { PALETTE, addContactShadow, createRng, batchStaticGroup } from './materials.js';
import { getTerrainHeight, pathX } from './terrain.js';

export function buildLantern(scene, lib, x, z, { scale = 1, hasLight = false, lightIntensity = 2.6, lightDist = 7.5, yOverride = null } = {}) {
  const { textures, materials } = lib;
  const y = yOverride !== null ? yOverride : getTerrainHeight(x, z);
  const g = new T.Group();
  g.position.set(x, y, z);
  g.scale.setScalar(scale);
  scene.add(g);

  // Mossy stone plinth & stepped collar
  const plinth = new T.Mesh(new T.BoxGeometry(0.68, 0.16, 0.68), materials.stoneMat);
  plinth.position.y = 0.08;
  plinth.castShadow = plinth.receiveShadow = true;
  g.add(plinth);

  const collar = new T.Mesh(new T.BoxGeometry(0.46, 0.08, 0.46), materials.stoneDarkMat);
  collar.position.y = 0.19;
  collar.castShadow = collar.receiveShadow = true;
  g.add(collar);

  // Timber post & lantern shelf
  const post = new T.Mesh(new T.BoxGeometry(0.18, 0.56, 0.18), materials.woodDarkMat);
  post.position.y = 0.51;
  post.castShadow = post.receiveShadow = true;
  g.add(post);

  const shelf = new T.Mesh(new T.BoxGeometry(0.56, 0.07, 0.56), materials.woodMat);
  shelf.position.y = 0.81;
  shelf.castShadow = shelf.receiveShadow = true;
  g.add(shelf);

  // Glowing shoji paper chamber
  const core = new T.Mesh(new T.BoxGeometry(0.38, 0.48, 0.38), materials.shojiMat);
  core.position.y = 1.08;
  g.add(core);

  // 3D wooden corner uprights & delicate shoji lattice crossbars (muntins)
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const bar = new T.Mesh(new T.BoxGeometry(0.045, 0.52, 0.045), materials.woodDarkMat);
      bar.position.set(sx * 0.2, 1.08, sz * 0.2);
      bar.castShadow = true;
      g.add(bar);
    }
  }
  // Horizontal & vertical lattice muntins on all 4 faces
  for (const hy of [0.96, 1.19]) {
    const hRing = new T.Mesh(new T.BoxGeometry(0.42, 0.024, 0.42), materials.woodDarkMat);
    hRing.position.y = hy;
    g.add(hRing);
  }
  for (const dir of [0, Math.PI / 2]) {
    const vMuntin = new T.Mesh(new T.BoxGeometry(0.022, 0.48, 0.41), materials.woodDarkMat);
    vMuntin.position.y = 1.08;
    vMuntin.rotation.y = dir;
    g.add(vMuntin);
  }

  // Overhanging gabled / hipped timber & tile roof + finial
  const eave = new T.Mesh(new T.BoxGeometry(0.66, 0.05, 0.66), materials.woodDarkMat);
  eave.position.y = 1.35;
  eave.castShadow = true;
  g.add(eave);

  const roof = new T.Mesh(new T.ConeGeometry(0.54, 0.28, 4), materials.roofTileMat);
  roof.position.y = 1.51;
  roof.rotation.y = Math.PI / 4;
  roof.castShadow = true;
  g.add(roof);

  const finial = new T.Mesh(new T.SphereGeometry(0.055, 8, 8), materials.woodMat);
  finial.position.y = 1.66;
  g.add(finial);

  addContactShadow(g, materials.contactShadowMat, 0.62, 0.015);

  const halo = new T.Sprite(
    new T.SpriteMaterial({
      map: textures.glowTex,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: T.AdditiveBlending
    })
  );
  halo.position.set(0, 1.08, 0);
  halo.scale.set(1.55, 1.55, 1.55);
  g.add(halo);

  let pointLight = null;
  if (hasLight) {
    pointLight = new T.PointLight(PALETTE.amberCore, lightIntensity, lightDist, 1.8);
    pointLight.position.set(0, 1.12, 0);
    g.add(pointLight);
  }

  return { group: g, light: pointLight, halo };
}

export function buildStoneYukimiLantern(scene, lib, x, z) {
  const { textures, materials } = lib;
  const y = getTerrainHeight(x, z);
  const g = new T.Group();
  g.position.set(x, y, z);
  scene.add(g);

  // Mossy rock base + 3 arched legs + fire chamber + curved stone umbrella roof
  const baseRock = new T.Mesh(new T.DodecahedronGeometry(0.85, 1), materials.stoneDarkMat);
  baseRock.scale.set(1.4, 0.45, 1.3);
  baseRock.position.y = 0.15;
  baseRock.castShadow = baseRock.receiveShadow = true;
  g.add(baseRock);

  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    const leg = new T.Mesh(new T.CylinderGeometry(0.08, 0.13, 0.42, 6), materials.stoneMat);
    leg.position.set(Math.cos(a) * 0.25, 0.52, Math.sin(a) * 0.25);
    leg.rotation.z = -Math.cos(a) * 0.22;
    leg.rotation.x = Math.sin(a) * 0.22;
    leg.castShadow = true;
    g.add(leg);
  }

  const plate = new T.Mesh(new T.CylinderGeometry(0.42, 0.36, 0.1, 6), materials.stoneMat);
  plate.position.y = 0.74;
  plate.castShadow = true;
  g.add(plate);

  const core = new T.Mesh(new T.CylinderGeometry(0.22, 0.22, 0.34, 6), materials.shojiMat);
  core.position.y = 0.96;
  g.add(core);

  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const pillar = new T.Mesh(new T.BoxGeometry(0.055, 0.36, 0.055), materials.stoneDarkMat);
    pillar.position.set(Math.cos(a) * 0.23, 0.96, Math.sin(a) * 0.23);
    g.add(pillar);
  }

  const kasa = new T.Mesh(new T.ConeGeometry(0.68, 0.34, 6), materials.stoneMat);
  kasa.position.y = 1.28;
  kasa.castShadow = true;
  g.add(kasa);

  const jewel = new T.Mesh(new T.SphereGeometry(0.08, 8, 8), materials.stoneDarkMat);
  jewel.position.y = 1.48;
  g.add(jewel);

  const light = new T.PointLight(PALETTE.amberCore, 3.2, 9.0, 1.8);
  light.position.set(0, 0.98, 0);
  g.add(light);

  const halo = new T.Sprite(
    new T.SpriteMaterial({
      map: textures.glowTex,
      transparent: true,
      opacity: 0.52,
      depthWrite: false,
      blending: T.AdditiveBlending
    })
  );
  halo.position.set(0, 0.98, 0);
  halo.scale.set(1.8, 1.8, 1.8);
  g.add(halo);

  return { group: g, light };
}

export function buildGardenPavilion(scene, lib, x = -4.2, z = -14.2) {
  const { textures, materials } = lib;
  const y = getTerrainHeight(x, z);
  const g = new T.Group();
  g.position.set(x, y, z);
  g.rotation.y = 0.24; // Angled slightly toward path & entry vista!
  scene.add(g);

  const W = 3.8;
  const D = 3.6;

  // 1. Raised stone foundation platform & 3 inviting entrance steps
  const base = new T.Mesh(new T.BoxGeometry(W + 0.45, 0.36, D + 0.45), materials.stoneDarkMat);
  base.position.y = 0.18;
  base.castShadow = base.receiveShadow = true;
  g.add(base);

  const deck = new T.Mesh(new T.BoxGeometry(W + 0.15, 0.08, D + 0.15), materials.woodMat);
  deck.position.y = 0.38;
  deck.receiveShadow = true;
  g.add(deck);

  for (let s = 0; s < 3; s++) {
    const step = new T.Mesh(
      new T.BoxGeometry(1.65 - s * 0.12, 0.12, 0.36),
      s % 2 === 0 ? materials.stoneMat : materials.stoneDarkMat
    );
    step.position.set(0, 0.06 + s * 0.11, D * 0.5 + 0.62 - s * 0.26);
    step.castShadow = step.receiveShadow = true;
    g.add(step);
  }

  // 2. 4 Corner timber pillars + stone plinth bases + knee braces
  const postPositions = [
    [-W * 0.44, -D * 0.44],
    [W * 0.44, -D * 0.44],
    [-W * 0.44, D * 0.44],
    [W * 0.44, D * 0.44]
  ];
  for (const [px, pz] of postPositions) {
    const pad = new T.Mesh(new T.CylinderGeometry(0.14, 0.17, 0.1, 8), materials.stoneMat);
    pad.position.set(px, 0.44, pz);
    g.add(pad);

    const col = new T.Mesh(new T.CylinderGeometry(0.1, 0.115, 2.55, 8), materials.woodDarkMat);
    col.position.set(px, 1.72, pz);
    col.castShadow = col.receiveShadow = true;
    g.add(col);
  }

  // Perimeter wooden beams & side railings (open front steps + open pond side)
  for (const bz of [-D * 0.44, D * 0.44]) {
    const beam = new T.Mesh(new T.BoxGeometry(W * 0.96, 0.14, 0.14), materials.woodDarkMat);
    beam.position.set(0, 2.94, bz);
    beam.castShadow = true;
    g.add(beam);
  }
  for (const bx of [-W * 0.44, W * 0.44]) {
    const beam = new T.Mesh(new T.BoxGeometry(0.14, 0.14, D * 0.96), materials.woodDarkMat);
    beam.position.set(bx, 2.94, 0);
    beam.castShadow = true;
    g.add(beam);

    // Lower decorative railings with vertical balusters
    const railTop = new T.Mesh(new T.BoxGeometry(0.08, 0.06, D * 0.88), materials.woodMat);
    railTop.position.set(bx, 1.05, 0);
    g.add(railTop);
    const railBot = new T.Mesh(new T.BoxGeometry(0.08, 0.06, D * 0.88), materials.woodMat);
    railBot.position.set(bx, 0.56, 0);
    g.add(railBot);
    for (let k = -3; k <= 3; k++) {
      const bal = new T.Mesh(new T.BoxGeometry(0.045, 0.48, 0.045), materials.woodDarkMat);
      bal.position.set(bx, 0.8, k * 0.36);
      g.add(bal);
    }
  }
  // Back railing
  const backTop = new T.Mesh(new T.BoxGeometry(W * 0.88, 0.06, 0.08), materials.woodMat);
  backTop.position.set(0, 1.05, -D * 0.44);
  g.add(backTop);
  for (let k = -3; k <= 3; k++) {
    const bal = new T.Mesh(new T.BoxGeometry(0.045, 0.52, 0.045), materials.woodDarkMat);
    bal.position.set(k * 0.38, 0.78, -D * 0.44);
    g.add(bal);
  }

  // 3. Curved Japanese/storybook tiled pagoda roof (two-tier eave + ridge beam)
  const lowerEave = new T.Mesh(new T.ConeGeometry(3.45, 0.95, 4), materials.roofTileMat);
  lowerEave.position.y = 3.45;
  lowerEave.rotation.y = Math.PI / 4;
  lowerEave.scale.set(1.06, 1, 1.02);
  lowerEave.castShadow = lowerEave.receiveShadow = true;
  g.add(lowerEave);

  const upperTier = new T.Mesh(new T.ConeGeometry(2.15, 0.82, 4), materials.roofTileMat);
  upperTier.position.y = 4.02;
  upperTier.rotation.y = Math.PI / 4;
  upperTier.castShadow = true;
  g.add(upperTier);

  const ridgeOrb = new T.Mesh(new T.SphereGeometry(0.12, 10, 10), materials.brassMat);
  ridgeOrb.position.y = 4.46;
  g.add(ridgeOrb);

  // Under-eave timber trim collar
  const eaveTrim = new T.Mesh(new T.BoxGeometry(W + 0.55, 0.08, D + 0.55), materials.woodDarkMat);
  eaveTrim.position.y = 3.01;
  g.add(eaveTrim);

  // 4. Tied sheer cream drapes on front pillars (from 03-garden-walk.png)
  const drapeMat = new T.MeshStandardMaterial({
    color: '#efe1d1',
    roughness: 0.9,
    transparent: true,
    opacity: 0.82,
    side: T.DoubleSide
  });
  for (const sx of [-1, 1]) {
    const thetaStart = sx > 0 ? -0.35 : -Math.PI * 1.05;
    const drape = new T.Mesh(
      new T.CylinderGeometry(0.13, 0.21, 2.28, 12, 1, true, thetaStart, Math.PI * 1.4),
      drapeMat
    );
    drape.position.set(sx * (W * 0.44), 1.68, D * 0.44);
    g.add(drape);
  }

  // 5. Interior tea bench & warm low table
  const benchSeat = new T.Mesh(new T.BoxGeometry(1.65, 0.07, 0.52), materials.woodMat);
  benchSeat.position.set(0, 0.78, -0.75);
  benchSeat.castShadow = true;
  g.add(benchSeat);
  for (const lx of [-0.68, 0.68]) {
    const leg = new T.Mesh(new T.BoxGeometry(0.08, 0.36, 0.44), materials.woodDarkMat);
    leg.position.set(lx, 0.58, -0.75);
    g.add(leg);
  }
  const teaTable = new T.Mesh(new T.BoxGeometry(1.1, 0.06, 0.65), materials.woodMat);
  teaTable.position.set(0, 0.82, 0.15);
  teaTable.castShadow = true;
  g.add(teaTable);
  const teapot = new T.Mesh(new T.SphereGeometry(0.1, 10, 8), materials.ceramicMat);
  teapot.scale.set(1, 0.78, 1);
  teapot.position.set(-0.18, 0.92, 0.15);
  g.add(teapot);

  // 6. 4 Hanging warm shoji lanterns beneath eaves + warm interior PointLight
  const pavilionLights = [];
  const hangSpots = [
    [-W * 0.36, D * 0.42],
    [W * 0.36, D * 0.42],
    [-W * 0.36, -D * 0.38],
    [W * 0.36, -D * 0.38]
  ];
  for (const [hx, hz] of hangSpots) {
    const cord = new T.Mesh(new T.CylinderGeometry(0.012, 0.012, 0.38, 6), materials.darkMetalMat);
    cord.position.set(hx, 2.75, hz);
    g.add(cord);

    const hCore = new T.Mesh(new T.BoxGeometry(0.22, 0.28, 0.22), materials.shojiMat);
    hCore.position.set(hx, 2.48, hz);
    g.add(hCore);

    const hCap = new T.Mesh(new T.ConeGeometry(0.22, 0.12, 4), materials.woodDarkMat);
    hCap.position.set(hx, 2.66, hz);
    hCap.rotation.y = Math.PI / 4;
    g.add(hCap);

    const halo = new T.Sprite(
      new T.SpriteMaterial({
        map: textures.glowTex,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
        blending: T.AdditiveBlending
      })
    );
    halo.position.set(hx, 2.48, hz);
    halo.scale.set(1.25, 1.25, 1.25);
    g.add(halo);
  }

  const warmCenterLight = new T.PointLight('#ffbe70', 7.5, 13.0, 1.6);
  warmCenterLight.position.set(0, 2.35, 0.2);
  g.add(warmCenterLight);
  pavilionLights.push(warmCenterLight);

  addContactShadow(g, materials.contactShadowMat, 3.2, 0.02);
  batchStaticGroup(g);

  return { group: g, lights: pavilionLights, collider: { x, z, r: 2.3 } };
}

export function placeGardenLanterns(scene, lib) {
  const rng = createRng(909);
  const primaryLights = [];
  const secondaryLights = [];
  const lanternBatchRoot = new T.Group();
  scene.add(lanternBatchRoot);

  // Hero gate lantern at discovery-01 (-1.4, 16.0)
  const gate = buildLantern(lanternBatchRoot, lib, -1.4, 16.0, {
    scale: 1.22,
    hasLight: true,
    lightIntensity: 6.5,
    lightDist: 10.5
  });
  primaryLights.push(gate.light);

  // Organic alternating lanterns along path & pond edge
  const spots = [
    [pathX(11.5) + 2.1, 11.5, true],
    [pathX(5.5) - 2.2, 5.5, false],
    [pathX(0.5) + 2.15, 0.5, true],
    [-5.1, 1.4, true], // Pond edge lantern visible from entry & pond!
    [pathX(-6.0) + 2.2, -6.0, false],
    [pathX(-11.5) - 2.35, -11.5, true],
    [pathX(-18.5) + 2.2, -18.5, false],
    [pathX(-24.0) - 2.2, -24.0, true],
    [-2.4, -29.2, false],
    [2.4, -29.2, false]
  ];
  spots.forEach(([lx, lz, realLight], idx) => {
    const l = buildLantern(lanternBatchRoot, lib, lx, lz, {
      scale: 0.86 + rng() * 0.14,
      hasLight: realLight,
      lightIntensity: 3.4,
      lightDist: 8.5
    });
    if (l.light) {
      if (idx % 2 === 0) primaryLights.push(l.light);
      else secondaryLights.push(l.light);
    }
  });

  // Stone Yukimi lantern on far pond shore (-14.6, -7.2)
  const yukimi = buildStoneYukimiLantern(lanternBatchRoot, lib, -14.6, -7.2);
  primaryLights.push(yukimi.light);

  batchStaticGroup(lanternBatchRoot);

  return { gate, primaryLights, secondaryLights };
}
