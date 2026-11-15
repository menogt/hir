import * as T from 'three';
import { PALETTE, addContactShadow, createRng, batchStaticGroup } from './materials.js';
import { getTerrainHeight } from './terrain.js';

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

function createPhotoFrame(lib, w = 0.46, h = 0.36) {
  const { textures, materials } = lib;
  const g = new T.Group();
  const frame = new T.Mesh(new T.BoxGeometry(w, h, 0.04), materials.woodMat);
  frame.castShadow = true;
  g.add(frame);

  const art = new T.Mesh(
    new T.PlaneGeometry(w - 0.07, h - 0.07),
    new T.MeshStandardMaterial({
      map: textures.photoArtTex,
      roughness: 0.45
    })
  );
  art.position.z = 0.022;
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
    case 'welcome-sign': {
      // Handcrafted timber signboard with shingled mini-roof & hanging mini lantern
      for (const sx of [-0.42, 0.42]) {
        const post = new T.Mesh(new T.BoxGeometry(0.09, 1.28, 0.09), materials.woodDarkMat);
        post.position.set(sx, 0.64, 0);
        post.castShadow = true;
        g.add(post);
      }
      const board = new T.Mesh(new T.BoxGeometry(0.92, 0.5, 0.06), materials.woodMat);
      board.position.set(0, 0.92, 0);
      board.castShadow = true;
      g.add(board);

      const plaque = new T.Mesh(
        new T.PlaneGeometry(0.8, 0.4),
        new T.MeshStandardMaterial({ map: textures.welcomeSignTex, roughness: 0.7 })
      );
      plaque.position.set(0, 0.92, 0.032);
      g.add(plaque);

      const roof = new T.Mesh(new T.BoxGeometry(1.18, 0.06, 0.36), materials.roofTileMat);
      roof.position.set(0, 1.32, 0);
      roof.rotation.x = 0.08;
      roof.castShadow = true;
      g.add(roof);

      const miniLamp = createMiniTableLantern(lib);
      miniLamp.position.set(0.56, 0.98, 0.14);
      g.add(miniLamp);
      break;
    }

    case 'photo-stand': {
      // Sculpted timber garden easel displaying the framed group photograph + bud vase
      g.rotation.y = 0.25;
      const easel = new T.Group();
      g.add(easel);
      for (const sx of [-0.26, 0.26]) {
        const leg = new T.Mesh(new T.BoxGeometry(0.055, 1.38, 0.055), materials.woodDarkMat);
        leg.position.set(sx, 0.68, 0.08);
        leg.rotation.x = -0.14;
        leg.rotation.z = sx > 0 ? 0.1 : -0.1;
        leg.castShadow = true;
        easel.add(leg);
      }
      const backLeg = new T.Mesh(new T.BoxGeometry(0.05, 1.32, 0.05), materials.woodDarkMat);
      backLeg.position.set(0, 0.64, -0.22);
      backLeg.rotation.x = 0.36;
      backLeg.castShadow = true;
      easel.add(backLeg);

      const shelf = new T.Mesh(new T.BoxGeometry(0.76, 0.05, 0.18), materials.woodMat);
      shelf.position.set(0, 0.8, 0.08);
      shelf.castShadow = true;
      easel.add(shelf);

      const frame = createPhotoFrame(lib, 0.66, 0.5);
      frame.position.set(0, 1.08, 0.08);
      frame.rotation.x = -0.15;
      easel.add(frame);

      const vase = createVaseWithFlowers(lib, 0.62);
      vase.position.set(-0.34, 0.05, 0.34);
      g.add(vase);
      break;
    }

    case 'cupcake-table': {
      // Hero close-up diorama inspired by 02-pond-memory-detail & 04-cupcake-memory-landmark
      g.rotation.y = -0.24;
      // Rustic planked low timber table
      const tableH = 0.66;
      for (let p = -1; p <= 1; p++) {
        const plank = new T.Mesh(new T.BoxGeometry(1.18, 0.055, 0.22), materials.woodMat);
        plank.position.set(0, tableH, p * 0.23);
        plank.castShadow = plank.receiveShadow = true;
        g.add(plank);
      }
      for (const lx of [-0.46, 0.46]) {
        for (const lz of [-0.26, 0.26]) {
          const leg = new T.Mesh(new T.BoxGeometry(0.085, tableH - 0.02, 0.085), materials.woodDarkMat);
          leg.position.set(lx, (tableH - 0.02) * 0.5, lz);
          leg.castShadow = true;
          g.add(leg);
        }
      }

      // Draped woven linen runner hanging gracefully over table edges
      const runnerTop = new T.Mesh(new T.BoxGeometry(0.54, 0.012, 0.72), materials.linenMat);
      runnerTop.position.set(0.06, tableH + 0.032, 0);
      runnerTop.receiveShadow = true;
      g.add(runnerTop);

      const runnerDrop = new T.Mesh(new T.BoxGeometry(0.54, 0.26, 0.012), materials.linenMat);
      runnerDrop.position.set(0.06, tableH - 0.1, 0.36);
      runnerDrop.rotation.x = 0.06;
      g.add(runnerDrop);

      // Detailed cupcake on ceramic plate
      const cupcake = createCupcakeGroup(lib, 1.05);
      cupcake.group.position.set(0.05, tableH + 0.038, 0.08);
      g.add(cupcake.group);

      // Small wooden photo frame angled beside cupcake
      const frame = createPhotoFrame(lib, 0.36, 0.28);
      frame.position.set(-0.24, tableH + 0.18, -0.14);
      frame.rotation.y = 0.32;
      frame.rotation.x = -0.14;
      g.add(frame);

      // Ceramic vase with wildflowers
      const vase = createVaseWithFlowers(lib, 0.82);
      vase.position.set(-0.44, tableH + 0.032, 0.12);
      g.add(vase);

      // Stacked bound journals + twine tie
      const b1 = new T.Mesh(
        new T.BoxGeometry(0.24, 0.038, 0.17),
        new T.MeshStandardMaterial({ color: '#7d635a', roughness: 0.85 })
      );
      b1.position.set(0.36, tableH + 0.052, 0.14);
      b1.rotation.y = -0.22;
      g.add(b1);
      const b2 = new T.Mesh(
        new T.BoxGeometry(0.22, 0.034, 0.16),
        new T.MeshStandardMaterial({ color: '#9c7d72', roughness: 0.85 })
      );
      b2.position.set(0.36, tableH + 0.088, 0.14);
      b2.rotation.y = -0.12;
      g.add(b2);

      // Mini warm wooden lantern on the table corner + subtle local PointLight
      const miniLantern = createMiniTableLantern(lib);
      miniLantern.position.set(0.38, tableH + 0.032, -0.16);
      g.add(miniLantern);

      const tableGlow = new T.PointLight('#ffbe70', 1.15, 3.8, 1.8);
      tableGlow.position.set(0.36, tableH + 0.28, -0.12);
      g.add(tableGlow);

      animated.cupcake = cupcake;
      break;
    }

    case 'two-seats': {
      // Two handcrafted slatted garden chairs angled together + mossy side stool with 2 teacups
      for (const side of [-1, 1]) {
        const chair = new T.Group();
        chair.position.set(side * 0.44, 0.04, 0.04);
        chair.rotation.y = side < 0 ? 0.38 : -0.38;
        g.add(chair);

        for (const lx of [-0.18, 0.18]) {
          for (const lz of [-0.16, 0.16]) {
            const leg = new T.Mesh(new T.BoxGeometry(0.045, 0.44, 0.045), materials.woodDarkMat);
            leg.position.set(lx, 0.22, lz);
            leg.castShadow = true;
            chair.add(leg);
          }
        }
        for (let s = -1; s <= 1; s++) {
          const slat = new T.Mesh(new T.BoxGeometry(0.44, 0.035, 0.11), materials.woodMat);
          slat.position.set(0, 0.44, s * 0.125);
          slat.castShadow = true;
          chair.add(slat);
        }
        // Backrest posts & slats
        for (const bx of [-0.18, 0.18]) {
          const post = new T.Mesh(new T.BoxGeometry(0.045, 0.46, 0.045), materials.woodDarkMat);
          post.position.set(bx, 0.66, -0.18);
          post.rotation.x = -0.12;
          chair.add(post);
        }
        for (const by of [0.64, 0.8]) {
          const rail = new T.Mesh(new T.BoxGeometry(0.44, 0.08, 0.032), materials.woodMat);
          rail.position.set(0, by, -0.19);
          rail.rotation.x = -0.12;
          chair.add(rail);
        }
      }
      // Low stone tea stool between chairs with 2 cups
      const stool = new T.Mesh(new T.CylinderGeometry(0.18, 0.22, 0.36, 9), materials.stoneMat);
      stool.position.set(0, 0.22, -0.08);
      stool.castShadow = true;
      g.add(stool);
      for (const cx of [-0.07, 0.07]) {
        const cup = new T.Mesh(new T.CylinderGeometry(0.038, 0.028, 0.06, 10), materials.ceramicMat);
        cup.position.set(cx, 0.43, -0.08);
        g.add(cup);
      }
      break;
    }

    case 'lecture-desk': {
      // Classic wooden lecture desk & chair, open lined notebook, realistic blister card & glass tumbler
      const deskTop = new T.Mesh(new T.BoxGeometry(0.88, 0.05, 0.56), materials.woodMat);
      deskTop.position.set(0, 0.72, 0);
      deskTop.castShadow = deskTop.receiveShadow = true;
      g.add(deskTop);
      for (const lx of [-0.36, 0.36]) {
        for (const lz of [-0.21, 0.21]) {
          const leg = new T.Mesh(new T.CylinderGeometry(0.024, 0.022, 0.68, 8), materials.darkMetalMat);
          leg.position.set(lx, 0.36, lz);
          leg.castShadow = true;
          g.add(leg);
        }
      }
      // Open lined notebook
      const nbLeft = new T.Mesh(new T.BoxGeometry(0.18, 0.015, 0.24), materials.ceramicMat);
      nbLeft.position.set(-0.22, 0.755, 0.02);
      nbLeft.rotation.z = 0.04;
      g.add(nbLeft);
      const nbRight = new T.Mesh(new T.BoxGeometry(0.18, 0.015, 0.24), materials.ceramicMat);
      nbRight.position.set(-0.04, 0.755, 0.02);
      nbRight.rotation.z = -0.04;
      g.add(nbRight);
      const pen = new T.Mesh(new T.CylinderGeometry(0.007, 0.005, 0.16, 6), materials.brassMat);
      pen.rotation.set(0, 0.4, Math.PI / 2);
      pen.position.set(0.02, 0.77, 0.12);
      g.add(pen);

      // Metallic paracetamol blister pack + pill domes
      const blister = new T.Mesh(
        new T.BoxGeometry(0.15, 0.01, 0.09),
        new T.MeshStandardMaterial({ color: '#d7e2e8', metalness: 0.65, roughness: 0.32 })
      );
      blister.position.set(0.22, 0.752, 0.08);
      blister.rotation.y = 0.22;
      g.add(blister);
      for (const px of [-0.035, 0, 0.035]) {
        for (const pz of [-0.018, 0.018]) {
          const pill = new T.Mesh(new T.CapsuleGeometry(0.011, 0.014, 4, 8), materials.ceramicMat);
          pill.rotation.z = Math.PI / 2;
          pill.position.set(0.22 + px, 0.762, 0.08 + pz);
          g.add(pill);
        }
      }
      // Glass water tumbler
      const glass = new T.Mesh(new T.CylinderGeometry(0.048, 0.038, 0.14, 14), materials.glassMat);
      glass.position.set(0.25, 0.82, -0.12);
      g.add(glass);
      break;
    }

    case 'study-desk': {
      // Library study table, open laptop with web-project UI screen, stacked books, lamp & broken key charm
      const top = new T.Mesh(new T.BoxGeometry(0.96, 0.055, 0.62), materials.woodMat);
      top.position.set(0, 0.72, 0);
      top.castShadow = top.receiveShadow = true;
      g.add(top);
      for (const lx of [-0.4, 0.4]) {
        const leg = new T.Mesh(new T.BoxGeometry(0.07, 0.68, 0.48), materials.woodDarkMat);
        leg.position.set(lx, 0.36, 0);
        leg.castShadow = true;
        g.add(leg);
      }

      // Open laptop
      const base = new T.Mesh(new T.BoxGeometry(0.36, 0.018, 0.24), materials.darkMetalMat);
      base.position.set(-0.1, 0.758, 0.06);
      g.add(base);
      const lid = new T.Mesh(new T.BoxGeometry(0.36, 0.24, 0.016), materials.darkMetalMat);
      lid.position.set(-0.1, 0.87, -0.055);
      lid.rotation.x = -0.22;
      g.add(lid);
      const screen = new T.Mesh(
        new T.PlaneGeometry(0.33, 0.2),
        new T.MeshStandardMaterial({
          color: '#ffdcb0',
          emissive: '#f5b878',
          emissiveIntensity: 0.95,
          roughness: 0.3
        })
      );
      screen.position.set(-0.1, 0.87, -0.045);
      screen.rotation.x = -0.22;
      g.add(screen);

      // Stacked hardcover textbooks
      const bookCols = ['#4d617d', '#b8768f', '#6b7e64'];
      bookCols.forEach((col, i) => {
        const bk = new T.Mesh(
          new T.BoxGeometry(0.24 - i * 0.015, 0.042, 0.17),
          new T.MeshStandardMaterial({ color: col, roughness: 0.78 })
        );
        bk.position.set(0.26, 0.77 + i * 0.043, -0.08);
        bk.rotation.y = (i - 1) * 0.14;
        g.add(bk);
      });

      // Two-piece broken brass key & charm ring
      const ring = new T.Mesh(new T.TorusGeometry(0.032, 0.006, 8, 16), materials.brassMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.set(0.22, 0.755, 0.16);
      g.add(ring);
      const keyShaft = new T.Mesh(new T.BoxGeometry(0.055, 0.008, 0.014), materials.brassMat);
      keyShaft.position.set(0.28, 0.755, 0.17);
      keyShaft.rotation.y = 0.35;
      g.add(keyShaft);
      break;
    }

    case 'ringing-phone': {
      // Timber garden pedestal & vintage/styled cradle telephone with glowing brass bell pulse
      const post = new T.Mesh(new T.BoxGeometry(0.32, 0.74, 0.32), materials.woodDarkMat);
      post.position.y = 0.38;
      post.castShadow = post.receiveShadow = true;
      g.add(post);
      const cap = new T.Mesh(new T.BoxGeometry(0.46, 0.05, 0.46), materials.woodMat);
      cap.position.y = 0.76;
      cap.castShadow = true;
      g.add(cap);

      const phoneGroup = new T.Group();
      phoneGroup.position.set(0, 0.79, 0);
      g.add(phoneGroup);
      const body = new T.Mesh(
        new T.BoxGeometry(0.26, 0.11, 0.2),
        new T.MeshStandardMaterial({ color: '#455770', roughness: 0.42, metalness: 0.25 })
      );
      body.position.y = 0.055;
      body.castShadow = true;
      phoneGroup.add(body);
      const dial = new T.Mesh(new T.CylinderGeometry(0.055, 0.055, 0.02, 16), materials.brassMat);
      dial.position.set(0, 0.095, 0.055);
      dial.rotation.x = 0.65;
      phoneGroup.add(dial);
      const handset = new T.Mesh(new T.CapsuleGeometry(0.028, 0.22, 6, 10), materials.ceramicMat);
      handset.rotation.z = Math.PI / 2;
      handset.position.set(0, 0.15, -0.02);
      phoneGroup.add(handset);

      const pulseRing = new T.Mesh(
        new T.RingGeometry(0.26, 0.3, 36),
        new T.MeshBasicMaterial({
          color: PALETTE.lanternGlow,
          transparent: true,
          opacity: 0.65,
          side: T.DoubleSide
        })
      );
      pulseRing.position.set(0, 0.96, 0);
      pulseRing.rotation.x = -Math.PI / 2;
      g.add(pulseRing);

      animated.phone = { group: phoneGroup, ring: pulseRing };
      break;
    }

    case 'iced-coffee-bench': {
      // Slatted garden bench with armrests, translucent layered iced coffee cup & folded scarf
      const bench = new T.Group();
      g.add(bench);
      for (const lx of [-0.52, 0.52]) {
        const frame = new T.Mesh(new T.BoxGeometry(0.07, 0.44, 0.44), materials.woodDarkMat);
        frame.position.set(lx, 0.24, 0);
        frame.castShadow = true;
        bench.add(frame);
        const arm = new T.Mesh(new T.BoxGeometry(0.07, 0.05, 0.46), materials.woodMat);
        arm.position.set(lx, 0.58, 0);
        bench.add(arm);
        const armPost = new T.Mesh(new T.BoxGeometry(0.05, 0.18, 0.05), materials.woodDarkMat);
        armPost.position.set(lx, 0.5, 0.17);
        bench.add(armPost);
      }
      for (let s = 0; s < 3; s++) {
        const seatSlat = new T.Mesh(new T.BoxGeometry(1.18, 0.045, 0.12), materials.woodMat);
        seatSlat.position.set(0, 0.46, -0.14 + s * 0.14);
        seatSlat.castShadow = seatSlat.receiveShadow = true;
        bench.add(seatSlat);
      }
      for (let b = 0; b < 2; b++) {
        const backSlat = new T.Mesh(new T.BoxGeometry(1.18, 0.11, 0.04), materials.woodMat);
        backSlat.position.set(0, 0.66 + b * 0.15, -0.21);
        backSlat.rotation.x = -0.1;
        backSlat.castShadow = true;
        bench.add(backSlat);
      }

      // Layered iced coffee cup with cream swirl, dome lid & straw
      const coffee = new T.Mesh(
        new T.CylinderGeometry(0.068, 0.05, 0.16, 16),
        new T.MeshStandardMaterial({ color: '#8f5e42', roughness: 0.25 })
      );
      coffee.position.set(0.24, 0.565, 0.04);
      g.add(coffee);
      const cream = new T.Mesh(
        new T.CylinderGeometry(0.07, 0.066, 0.045, 16),
        new T.MeshStandardMaterial({ color: '#ead8c5', roughness: 0.35 })
      );
      cream.position.set(0.24, 0.625, 0.04);
      g.add(cream);
      const dome = new T.Mesh(new T.SphereGeometry(0.071, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.5), materials.glassMat);
      dome.position.set(0.24, 0.645, 0.04);
      g.add(dome);
      const straw = new T.Mesh(
        new T.CylinderGeometry(0.008, 0.008, 0.16, 6),
        new T.MeshStandardMaterial({ color: PALETTE.blossomMid, roughness: 0.4 })
      );
      straw.position.set(0.26, 0.72, 0.04);
      straw.rotation.z = -0.22;
      g.add(straw);

      // Folded linen scarf beside cup
      const scarf = new T.Mesh(new T.BoxGeometry(0.28, 0.04, 0.22), materials.linenMat);
      scarf.position.set(-0.22, 0.505, 0.03);
      scarf.rotation.y = 0.18;
      g.add(scarf);
      break;
    }

    case 'mini-cinema': {
      // Cozy backyard outdoor cinema frame, custom origami boat midnight screen, fairy bulbs, cushions & popcorn
      g.rotation.y = -0.28;
      for (const sx of [-0.62, 0.62]) {
        const post = new T.Mesh(new T.BoxGeometry(0.08, 1.38, 0.08), materials.woodDarkMat);
        post.position.set(sx, 0.68, -0.22);
        post.castShadow = true;
        g.add(post);
      }
      const frame = new T.Mesh(new T.BoxGeometry(1.32, 0.84, 0.06), materials.woodMat);
      frame.position.set(0, 0.94, -0.22);
      frame.castShadow = true;
      g.add(frame);

      const cinemaScreen = new T.Mesh(
        new T.PlaneGeometry(1.18, 0.72),
        new T.MeshStandardMaterial({
          map: textures.cinemaArtTex,
          emissiveMap: textures.cinemaArtTex,
          emissive: new T.Color('#ffd0a0'),
          emissiveIntensity: 0.85,
          roughness: 0.35
        })
      );
      cinemaScreen.position.set(0, 0.94, -0.185);
      g.add(cinemaScreen);

      // Tiny fairy bulbs strung across top beam
      for (let i = -3; i <= 3; i++) {
        const bulb = new T.Mesh(new T.SphereGeometry(0.022, 8, 6), materials.shojiMat);
        bulb.position.set(i * 0.18, 1.38 - Math.cos(i * 0.4) * 0.03, -0.17);
        g.add(bulb);
      }

      // Two tufted floor cushions + popcorn bucket
      for (const [cx, col] of [[-0.32, '#7c7699'], [0.32, '#c87e99']]) {
        const cushion = new T.Mesh(
          new T.CylinderGeometry(0.24, 0.26, 0.1, 16),
          new T.MeshStandardMaterial({ color: col, roughness: 0.88 })
        );
        cushion.position.set(cx, 0.09, 0.34);
        cushion.castShadow = cushion.receiveShadow = true;
        g.add(cushion);
      }
      const bucket = new T.Mesh(new T.CylinderGeometry(0.09, 0.065, 0.15, 12), materials.ceramicMat);
      bucket.position.set(0, 0.12, 0.38);
      g.add(bucket);
      for (let p = 0; p < 5; p++) {
        const puff = new T.Mesh(
          new T.SphereGeometry(0.032, 7, 6),
          new T.MeshStandardMaterial({ color: '#f7e4b6', roughness: 0.7 })
        );
        puff.position.set((p - 2) * 0.022, 0.2 + (p % 2) * 0.018, 0.38 + ((p % 3) - 1) * 0.02);
        g.add(puff);
      }

      const screenGlow = new T.PointLight('#ffca88', 2.2, 4.8, 1.8);
      screenGlow.position.set(0, 0.9, 0.15);
      g.add(screenGlow);

      animated.cinemaScreen = cinemaScreen;
      break;
    }

    case 'unfinished-arch': {
      // Sculptural timber & stone open-horizon archway with climbing blossoms & suspended empty frame
      for (const sx of [-1.25, 1.25]) {
        const plinth = new T.Mesh(new T.BoxGeometry(0.42, 0.28, 0.42), materials.stoneMat);
        plinth.position.set(sx, 0.14, 0);
        plinth.castShadow = plinth.receiveShadow = true;
        g.add(plinth);

        const pillar = new T.Mesh(new T.CylinderGeometry(0.11, 0.14, 2.55, 10), materials.woodDarkMat);
        pillar.position.set(sx, 1.52, 0);
        pillar.castShadow = true;
        g.add(pillar);

        // Angled knee brace
        const brace = new T.Mesh(new T.BoxGeometry(0.08, 0.65, 0.08), materials.woodMat);
        brace.position.set(sx - Math.sign(sx) * 0.22, 2.42, 0);
        brace.rotation.z = Math.sign(sx) * 0.65;
        g.add(brace);

        // Climbing blossom vine accents up each pillar
        for (let k = 0; k < 5; k++) {
          const fl = new T.Mesh(
            new T.SphereGeometry(0.08 + (k % 2) * 0.03, 7, 6),
            new T.MeshStandardMaterial({ color: k % 2 ? PALETTE.blossomMid : PALETTE.blossomPale, roughness: 0.75 })
          );
          fl.position.set(sx + Math.sin(k * 1.9) * 0.13, 0.6 + k * 0.42, Math.cos(k * 1.7) * 0.13);
          g.add(fl);
        }
      }

      // Unfinished split top beams framing the open twilight sky
      for (const sx of [-1, 1]) {
        const beam = new T.Mesh(new T.BoxGeometry(1.05, 0.14, 0.18), materials.woodMat);
        beam.position.set(sx * 0.92, 2.72, 0);
        beam.rotation.z = -sx * 0.09;
        beam.castShadow = true;
        g.add(beam);
      }

      // Gently swaying suspended wooden/brass empty picture frame
      const futureFrame = new T.Group();
      futureFrame.position.set(0, 1.55, 0);
      g.add(futureFrame);
      for (const [fx, fy, fw, fh] of [
        [0, 0.28, 0.66, 0.055],
        [0, -0.28, 0.66, 0.055],
        [-0.31, 0, 0.055, 0.58],
        [0.31, 0, 0.055, 0.58]
      ]) {
        const bar = new T.Mesh(
          new T.BoxGeometry(fw, fh, 0.05),
          new T.MeshStandardMaterial({
            color: '#f2dec0',
            emissive: '#f5c27a',
            emissiveIntensity: 0.85,
            roughness: 0.4
          })
        );
        bar.position.set(fx, fy, 0);
        futureFrame.add(bar);
      }
      const frameHalo = new T.Sprite(
        new T.SpriteMaterial({
          map: textures.glowTex,
          transparent: true,
          opacity: 0.48,
          depthWrite: false,
          blending: T.AdditiveBlending
        })
      );
      frameHalo.scale.set(1.6, 1.6, 1.6);
      futureFrame.add(frameHalo);

      animated.futureFrame = futureFrame;
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
      animated.phone?.group,
      animated.phone?.ring,
      animated.futureFrame
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
