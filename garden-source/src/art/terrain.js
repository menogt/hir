import * as T from 'three';
import { PALETTE, createRng, batchStaticGroup } from './materials.js';

export function pathX(z) {
  const taper = T.MathUtils.smoothstep(z, -40.0, -32.0);
  return Math.sin(z * 0.13) * 1.75 * taper;
}

export function pondDistance(x, z) {
  const dx = (x + 10.6) / 6.0;
  const dz = (z + 2.2) / 8.0;
  const ang = Math.atan2(dz, dx);
  const organic = 1 + Math.sin(ang * 2 + 0.6) * 0.11 + Math.cos(ang * 3 - 0.4) * 0.07;
  return (Math.hypot(dx, dz) / organic) * 6.0;
}

export function getTerrainHeight(x, z) {
  const dPond = pondDistance(x, z);
  // Smooth depressed pond basin (shore at ~5.5, deep bed at 0..4)
  if (dPond < 6.4) {
    const t = T.MathUtils.smoothstep(dPond, 1.2, 6.2);
    return -0.82 * (1 - t);
  }

  const distToPath = Math.abs(x - pathX(z));
  const distToPavilion = Math.hypot(x + 4.2, z + 14.2);
  const distToShrine = Math.hypot(x, z + 41.0);
  const pathFlat = z >= -42.5 ? T.MathUtils.smoothstep(distToPath, 1.9, 6.8) : 1;
  const pavFlat = T.MathUtils.smoothstep(distToPavilion, 3.6, 7.2);
  const shrineFlat = T.MathUtils.smoothstep(distToShrine, 3.2, 6.8);

  // Rolling garden mounds & distant hillside enclosure
  const gentle =
    Math.sin(x * 0.12 + 0.4) * Math.cos(z * 0.1) * 0.55 +
    Math.sin((x - z) * 0.065) * 0.35;

  const edgeX = Math.max(0, Math.abs(x) - 15.5);
  const edgeBack = Math.max(0, -46.5 - z);
  const perimeterRise = Math.min(2.6, edgeX * edgeX * 0.0055 + edgeBack * edgeBack * 0.0045);

  return Math.max(-0.04, gentle * pathFlat * pavFlat * shrineFlat + perimeterRise);
}

function createFlagstoneGeometry(rng, radius = 0.65) {
  const shape = new T.Shape();
  const sides = 6 + Math.floor(rng() * 3);
  for (let i = 0; i < sides; i++) {
    const a = (i / sides) * Math.PI * 2;
    const r = radius * (0.76 + rng() * 0.36);
    const px = Math.cos(a) * r;
    const py = Math.sin(a) * r * (0.78 + rng() * 0.32);
    if (i === 0) shape.moveTo(px, py);
    else shape.lineTo(px, py);
  }
  shape.closePath();

  const geo = new T.ExtrudeGeometry(shape, {
    depth: 0.09,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.035,
    bevelSegments: 2,
    curveSegments: 1
  });
  geo.rotateX(-Math.PI / 2);
  // Normalize UVs smoothly across top face
  const pos = geo.attributes.position;
  const uv = geo.attributes.uv;
  for (let i = 0; i < pos.count; i++) {
    uv.setXY(i, pos.getX(i) * 0.7 + 0.5, pos.getZ(i) * 0.7 + 0.5);
  }
  geo.computeVertexNormals();
  return geo;
}

function createBoulderGeometry(rng, detail = 2) {
  const geo = new T.IcosahedronGeometry(1, detail);
  const pos = geo.attributes.position;
  const v = new T.Vector3();
  const off1 = rng() * 10;
  const off2 = rng() * 10;
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const n =
      Math.sin(v.x * 2.6 + off1) * Math.cos(v.y * 2.3 + off2) * 0.16 +
      Math.sin(v.z * 3.8 - off1) * 0.09;
    v.multiplyScalar(1 + n);
    // Flatten underside slightly so boulders seat cleanly into soil
    if (v.y < -0.25) v.y = -0.25 + (v.y + 0.25) * 0.35;
    // Slight weathered shelf on top
    if (v.y > 0.55) v.y = 0.55 + (v.y - 0.55) * 0.55;
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  return geo;
}

function buildBladeGeometry({
  baseW = 0.048,
  height = 0.48,
  bend = 0.15,
  yaw = 0,
  lean = 0.05,
  ox = 0,
  oz = 0,
  segs = 3,
  colBase,
  colMid,
  colTip
}) {
  const positions = [];
  const colors = [];
  const indices = [];
  const cosY = Math.cos(yaw);
  const sinY = Math.sin(yaw);
  const cMid = colMid || colBase.clone().lerp(colTip, 0.52);
  const tmpC = new T.Color();

  // 3 vertices per cross-section row (left edge, recessed center spine, right edge)
  // creating a genuine V-creased 3D blade that catches highlights along its fold
  for (let s = 0; s <= segs; s++) {
    const t = s / segs;
    const w = baseW * (1 - Math.pow(t, 1.2) * 0.94);
    const y = t * height;
    const fwd = lean * t + bend * t * t;
    const vRidge = w * 0.28 * (1 - t * 0.7);
    if (t < 0.5) tmpC.lerpColors(colBase, cMid, t * 2);
    else tmpC.lerpColors(cMid, colTip, (t - 0.5) * 2);

    const rowPts = [
      [-w, fwd + vRidge],
      [0, fwd - vRidge * 0.65],
      [w, fwd + vRidge]
    ];
    for (const [lx, lz] of rowPts) {
      const wx = ox + lx * cosY - lz * sinY;
      const wz = oz + lx * sinY + lz * cosY;
      positions.push(wx, y, wz);
      colors.push(tmpC.r, tmpC.g, tmpC.b);
    }
    if (s < segs) {
      const r0 = s * 3;
      const r1 = (s + 1) * 3;
      indices.push(r0, r0 + 1, r1, r0 + 1, r1 + 1, r1);
      indices.push(r0 + 1, r0 + 2, r1 + 1, r0 + 2, r1 + 2, r1 + 1);
    }
  }
  const g = new T.BufferGeometry();
  g.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  g.setAttribute('color', new T.Float32BufferAttribute(colors, 3));
  g.setIndex(indices);
  g.computeVertexNormals();
  return g;
}

function makeColoredGeo(geo, col) {
  const nonIdx = geo.index ? geo.toNonIndexed() : geo;
  if (nonIdx !== geo) geo.dispose();
  if (!nonIdx.attributes.normal) nonIdx.computeVertexNormals();
  const count = nonIdx.attributes.position.count;
  const cols = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    cols[i * 3] = col.r;
    cols[i * 3 + 1] = col.g;
    cols[i * 3 + 2] = col.b;
  }
  nonIdx.setAttribute('color', new T.BufferAttribute(cols, 3));
  return nonIdx;
}

/**
 * Builds a 5-vertex, 4-triangle cupped 3D flower petal (base -> flared belly -> notched/soft outer tip)
 * anchored at `(cx, cy, cz)` and pointing outward along angle `ang`.
 */
function appendCuppedPetal(petalPos, petalCols, petalIdx, cx, cy, cz, ang, len, width, cupH, pitchUp, cInner, cOuter) {
  const baseV = petalPos.length / 3;
  const cA = Math.cos(ang);
  const sA = Math.sin(ang);
  const pt = (r, wOff, dy) => [
    cx + cA * r - sA * wOff,
    cy + dy,
    cz + sA * r + cA * wOff
  ];

  // 0: base center, 1: inner left, 2: inner right, 3: outer left tip, 4: outer right tip, 5: center tip notch
  const pts = [
    pt(0.004, 0, 0),
    pt(len * 0.48, -width * 0.42, len * pitchUp * 0.45 + cupH * 0.15),
    pt(len * 0.48, width * 0.42, len * pitchUp * 0.45 + cupH * 0.15),
    pt(len, -width * 0.34, len * pitchUp + cupH),
    pt(len, width * 0.34, len * pitchUp + cupH),
    pt(len * 0.92, 0, len * pitchUp + cupH * 0.6)
  ];
  const cols = [
    cInner,
    cInner.clone().lerp(cOuter, 0.45),
    cInner.clone().lerp(cOuter, 0.45),
    cOuter,
    cOuter,
    cOuter
  ];
  for (let i = 0; i < pts.length; i++) {
    petalPos.push(pts[i][0], pts[i][1], pts[i][2]);
    petalCols.push(cols[i].r, cols[i].g, cols[i].b);
  }
  petalIdx.push(
    baseV, baseV + 1, baseV + 2,
    baseV + 1, baseV + 3, baseV + 5,
    baseV + 1, baseV + 5, baseV + 2,
    baseV + 2, baseV + 5, baseV + 4
  );
}

function mergeColorGeometries(geos) {
  const totalVerts = geos.reduce((acc, g) => acc + g.attributes.position.count, 0);
  const pos = new Float32Array(totalVerts * 3);
  const norm = new Float32Array(totalVerts * 3);
  const col = new Float32Array(totalVerts * 3);
  const indices = [];
  let vOffset = 0;
  for (const g of geos) {
    const p = g.attributes.position;
    if (!g.attributes.normal) g.computeVertexNormals();
    const n = g.attributes.normal;
    const c = g.attributes.color;
    pos.set(p.array, vOffset * 3);
    norm.set(n.array, vOffset * 3);
    if (c) col.set(c.array, vOffset * 3);
    const idx = g.index;
    if (idx) {
      for (let i = 0; i < idx.count; i++) indices.push(idx.getX(i) + vOffset);
    } else {
      for (let i = 0; i < p.count; i++) indices.push(i + vOffset);
    }
    vOffset += p.count;
    g.dispose();
  }
  const merged = new T.BufferGeometry();
  merged.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
  merged.setAttribute('normal', new T.Float32BufferAttribute(norm, 3));
  merged.setAttribute('color', new T.Float32BufferAttribute(col, 3));
  merged.setIndex(indices);
  return merged;
}

function create3DGrassTuftGeometry(rng) {
  const parts = [];
  const cBase = new T.Color('#2a3e26');
  const cMid = new T.Color('#5f8a4e');
  const cTip = new T.Color('#9ec476');
  for (let i = 0; i < 15; i++) {
    const yaw = (i / 15) * Math.PI * 2 + (rng() - 0.5) * 0.42;
    const isInner = i % 3 === 0;
    const rad = isInner ? rng() * 0.06 : 0.06 + rng() * 0.16;
    parts.push(
      buildBladeGeometry({
        baseW: 0.032 + rng() * 0.016,
        height: (isInner ? 0.44 : 0.3) + rng() * 0.24,
        bend: 0.1 + rng() * 0.16,
        yaw,
        lean: 0.04 + rng() * 0.09,
        ox: Math.cos(yaw) * rad,
        oz: Math.sin(yaw) * rad,
        segs: 3,
        colBase: cBase,
        colMid: cMid,
        colTip: cTip
      })
    );
  }
  return mergeColorGeometries(parts);
}

function create3DDianthusTuftGeometry(rng) {
  const parts = [];
  const cLeafBase = new T.Color('#314f40');
  const cLeafMid = new T.Color('#5c876c');
  const cLeafTip = new T.Color('#8eb596');
  const cPetalCenter = new T.Color('#9e2b5e');
  const cPetalOuter = new T.Color('#f9c8de');
  const cGoldenCenter = new T.Color('#ffe082');

  // Rich glaucous basal grass cushion
  for (let i = 0; i < 10; i++) {
    const yaw = (i / 10) * Math.PI * 2 + (rng() - 0.5) * 0.35;
    const rad = 0.025 + rng() * 0.13;
    parts.push(
      buildBladeGeometry({
        baseW: 0.026 + rng() * 0.01,
        height: 0.22 + rng() * 0.16,
        bend: 0.11 + rng() * 0.11,
        yaw,
        lean: 0.05 + rng() * 0.06,
        ox: Math.cos(yaw) * rad,
        oz: Math.sin(yaw) * rad,
        segs: 2,
        colBase: cLeafBase,
        colMid: cLeafMid,
        colTip: cLeafTip
      })
    );
  }

  // Slender flowering stems topped by 5-petal cupped 3D Dianthus blooms + golden center bud
  const stemCount = 6;
  const petalPos = [];
  const petalCols = [];
  const petalIdx = [];

  for (let f = 0; f < stemCount; f++) {
    const ang = (f / stemCount) * Math.PI * 2 + rng() * 0.45;
    const spread = 0.08 + rng() * 0.12;
    const h = 0.32 + rng() * 0.18;
    const fx = Math.cos(ang) * spread;
    const fz = Math.sin(ang) * spread;

    parts.push(
      buildBladeGeometry({
        baseW: 0.011,
        height: h,
        bend: spread * 0.55,
        yaw: ang,
        lean: spread * 0.42,
        ox: fx * 0.25,
        oz: fz * 0.25,
        segs: 2,
        colBase: cLeafBase,
        colMid: cLeafMid,
        colTip: cLeafTip
      })
    );

    const tipZ = spread * 0.97;
    const cosA = Math.cos(ang);
    const sinA = Math.sin(ang);
    const flowerX = fx * 0.25 - tipZ * sinA;
    const flowerZ = fz * 0.25 + tipZ * cosA;
    const flowerY = h + 0.008;

    for (let p = 0; p < 5; p++) {
      const pa = (p / 5) * Math.PI * 2 + f * 0.42;
      appendCuppedPetal(
        petalPos,
        petalCols,
        petalIdx,
        flowerX,
        flowerY,
        flowerZ,
        pa,
        0.056 + (p % 2) * 0.008,
        0.044,
        0.016,
        0.18,
        cPetalCenter,
        cPetalOuter
      );
    }

    const bud = new T.OctahedronGeometry(0.014, 0);
    bud.translate(flowerX, flowerY + 0.01, flowerZ);
    parts.push(makeColoredGeo(bud, cGoldenCenter));
  }

  const fg = new T.BufferGeometry();
  fg.setAttribute('position', new T.Float32BufferAttribute(petalPos, 3));
  fg.setAttribute('color', new T.Float32BufferAttribute(petalCols, 3));
  fg.setIndex(petalIdx);
  fg.computeVertexNormals();
  parts.push(fg);

  return mergeColorGeometries(parts);
}

function create3DWildflowerClusterGeometry(rng) {
  const parts = [];
  const cLeafBase = new T.Color('#314f38');
  const cLeafMid = new T.Color('#527c54');
  const cLeafTip = new T.Color('#7ba672');
  const cBellBase = new T.Color('#8a56d6');
  const cBellTip = new T.Color('#d8b8ff');
  const cBellGold = new T.Color('#ffd978');
  const cJasInner = new T.Color('#f2e7dc');
  const cJasOuter = new T.Color('#fffaf4');
  const cJasHeart = new T.Color('#ffb757');

  for (let i = 0; i < 8; i++) {
    const yaw = (i / 8) * Math.PI * 2 + (rng() - 0.5) * 0.4;
    const rad = 0.03 + rng() * 0.1;
    parts.push(
      buildBladeGeometry({
        baseW: 0.025,
        height: 0.22 + rng() * 0.12,
        bend: 0.12,
        yaw,
        lean: 0.06,
        ox: Math.cos(yaw) * rad,
        oz: Math.sin(yaw) * rad,
        segs: 2,
        colBase: cLeafBase,
        colMid: cLeafMid,
        colTip: cLeafTip
      })
    );
  }

  const petalPos = [];
  const petalCols = [];
  const petalIdx = [];

  // 4 twilight lavender-amethyst bellflowers + 3 star-jasmine cream blossoms
  for (let s = 0; s < 7; s++) {
    const isBell = s < 4;
    const ang = (s / 7) * Math.PI * 2 + rng() * 0.4;
    const spread = 0.07 + rng() * 0.1;
    const h = (isBell ? 0.34 : 0.27) + rng() * 0.14;
    const fx = Math.cos(ang) * spread;
    const fz = Math.sin(ang) * spread;

    parts.push(
      buildBladeGeometry({
        baseW: 0.01,
        height: h,
        bend: spread * 0.55,
        yaw: ang,
        lean: spread * 0.45,
        ox: fx * 0.25,
        oz: fz * 0.25,
        segs: 2,
        colBase: cLeafBase,
        colMid: cLeafMid,
        colTip: cLeafTip
      })
    );

    const tipZ = spread;
    const cosA = Math.cos(ang);
    const sinA = Math.sin(ang);
    const flowerX = fx * 0.25 - tipZ * sinA;
    const flowerZ = fz * 0.25 + tipZ * cosA;
    const flowerY = h + 0.01;

    const nPetals = isBell ? 6 : 5;
    for (let p = 0; p < nPetals; p++) {
      const pa = (p / nPetals) * Math.PI * 2 + s * 0.5;
      appendCuppedPetal(
        petalPos,
        petalCols,
        petalIdx,
        flowerX,
        flowerY,
        flowerZ,
        pa,
        isBell ? 0.06 : 0.05,
        isBell ? 0.038 : 0.03,
        isBell ? 0.026 : 0.012,
        isBell ? 0.34 : 0.12,
        isBell ? cBellBase : cJasInner,
        isBell ? cBellTip : cJasOuter
      );
    }

    const heart = new T.OctahedronGeometry(0.014, 0);
    heart.translate(flowerX, flowerY + 0.012, flowerZ);
    parts.push(makeColoredGeo(heart, isBell ? cBellGold : cJasHeart));
  }

  const fg = new T.BufferGeometry();
  fg.setAttribute('position', new T.Float32BufferAttribute(petalPos, 3));
  fg.setAttribute('color', new T.Float32BufferAttribute(petalCols, 3));
  fg.setIndex(petalIdx);
  fg.computeVertexNormals();
  parts.push(fg);

  return mergeColorGeometries(parts);
}

function create3DShrubBlossomGeometry(rng) {
  const petalPos = [];
  const petalCols = [];
  const petalIdx = [];
  const parts = [];
  const palette = [
    [new T.Color('#d16b9c'), new T.Color('#f7bfd7')],
    [new T.Color('#a470cf'), new T.Color('#e6c9ff')],
    [new T.Color('#e2b6cd'), new T.Color('#fff0f7')]
  ];
  const centerGold = new T.Color('#ffe088');

  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * Math.PI * 2 + rng() * 0.5;
    const elev = 0.25 + rng() * 0.9;
    const r = 0.24 + Math.cos(elev) * 0.2;
    const fx = Math.cos(a) * r;
    const fy = 0.44 + Math.sin(elev) * 0.28;
    const fz = Math.sin(a) * r;
    const [cIn, cOut] = palette[i % palette.length];

    for (let p = 0; p < 4; p++) {
      const pa = (p / 4) * Math.PI * 2 + i * 0.7;
      appendCuppedPetal(
        petalPos,
        petalCols,
        petalIdx,
        fx,
        fy,
        fz,
        pa,
        0.068,
        0.056,
        0.014,
        0.16,
        cIn,
        cOut
      );
    }
    if (i % 2 === 0) {
      const c = new T.OctahedronGeometry(0.013, 0);
      c.translate(fx, fy + 0.01, fz);
      parts.push(makeColoredGeo(c, centerGold));
    }
  }

  const fg = new T.BufferGeometry();
  fg.setAttribute('position', new T.Float32BufferAttribute(petalPos, 3));
  fg.setAttribute('color', new T.Float32BufferAttribute(petalCols, 3));
  fg.setIndex(petalIdx);
  fg.computeVertexNormals();
  parts.push(fg);

  return mergeColorGeometries(parts);
}

function create3DShrubGeometry(rng) {
  const parts = [];
  const cLeafDark = new T.Color('#344d38');
  const cLeafMid = new T.Color('#4f6d4f');
  const cBloomPink = new T.Color('#e29eb8');
  const cBloomLav = new T.Color('#d2b0d4');

  const pushColored = (geo, colA, colB) => {
    const pos = geo.attributes.position;
    const cols = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) {
      const yNorm = T.MathUtils.clamp((pos.getY(i) + 0.2) * 1.4, 0, 1);
      const c = colA.clone().lerp(colB, yNorm);
      cols[i * 3] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;
    }
    geo.setAttribute('color', new T.BufferAttribute(cols, 3));
    const nonIdx = geo.index ? geo.toNonIndexed() : geo;
    if (nonIdx !== geo) geo.dispose();
    parts.push(nonIdx);
  };

  // Overlapping sculpted leafy mounds (low-poly detail 0 -> 20 tris each)
  for (let i = 0; i < 4; i++) {
    const a = (i / 3) * Math.PI * 2 + rng() * 0.4;
    const r = i === 0 ? 0 : 0.22 + rng() * 0.08;
    const rad = i === 0 ? 0.36 : 0.25 + rng() * 0.06;
    const g = new T.IcosahedronGeometry(rad, 0);
    g.scale(1.15, 0.84, 1.1);
    g.translate(Math.cos(a) * r, 0.2 + (i === 0 ? 0.12 : 0), Math.sin(a) * r);
    pushColored(g, cLeafDark, cLeafMid);
  }

  // Sculpted hydrangea blossom clusters nestled on top
  for (let b = 0; b < 3; b++) {
    const a = (b / 3) * Math.PI * 2 + 0.35;
    const r = 0.15 + (b % 2) * 0.09;
    const bGeo = new T.IcosahedronGeometry(0.12 + (b % 2) * 0.025, 0);
    bGeo.translate(Math.cos(a) * r, 0.42 + (b % 2) * 0.06, Math.sin(a) * r);
    pushColored(bGeo, b % 2 === 0 ? cBloomPink : cBloomLav, new T.Color('#f7dce6'));
  }

  return mergeColorGeometries(parts);
}

function createCrossedTuftGeometry(width = 0.85, height = 0.75) {
  const g1 = new T.PlaneGeometry(width, height, 1, 2);
  g1.translate(0, height * 0.5, 0);
  const g2 = g1.clone();
  g2.rotateY(Math.PI / 3);
  const g3 = g1.clone();
  g3.rotateY(-Math.PI / 3);
  return mergeSimple([g1, g2, g3]);
}

function mergeSimple(geos) {
  const totalVerts = geos.reduce((acc, g) => acc + g.attributes.position.count, 0);
  const pos = new Float32Array(totalVerts * 3);
  const norm = new Float32Array(totalVerts * 3);
  const uv = new Float32Array(totalVerts * 2);
  const indices = [];
  let vOffset = 0;
  for (const g of geos) {
    const p = g.attributes.position;
    const n = g.attributes.normal;
    const u = g.attributes.uv;
    pos.set(p.array, vOffset * 3);
    norm.set(n.array, vOffset * 3);
    uv.set(u.array, vOffset * 2);
    const idx = g.index;
    if (idx) {
      for (let i = 0; i < idx.count; i++) indices.push(idx.getX(i) + vOffset);
    } else {
      for (let i = 0; i < p.count; i++) indices.push(i + vOffset);
    }
    vOffset += p.count;
  }
  const merged = new T.BufferGeometry();
  merged.setAttribute('position', new T.BufferAttribute(pos, 3));
  merged.setAttribute('normal', new T.BufferAttribute(norm, 3));
  merged.setAttribute('uv', new T.BufferAttribute(uv, 2));
  merged.setIndex(indices);
  return merged;
}

export function buildTerrainAndFoliage(scene, lib, landmarkCoords = []) {
  const rng = createRng(1047);
  const { textures, materials } = lib;
  const dummy = new T.Object3D();

  // 1. Sculpted terrain mesh with soil/grass vertex blend + AO darkening
  const terrainGeo = new T.PlaneGeometry(140, 140, 136, 136);
  terrainGeo.rotateX(-Math.PI / 2);
  const pos = terrainGeo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const soilMix = new Float32Array(pos.count);
  const cGrass = new T.Color('#829674');
  const cMoss = new T.Color('#6a825c');
  const cSoil = new T.Color('#66564a');
  const cShore = new T.Color('#5a5449');
  const tmpColor = new T.Color();

  for (let i = 0; i < pos.count; i++) {
    const vx = pos.getX(i);
    const vz = pos.getZ(i);
    const y = getTerrainHeight(vx, vz);
    pos.setY(i, y);

    const dPath = Math.abs(vx - pathX(vz));
    const dPond = pondDistance(vx, vz);
    const pathFactor = vz >= -41.5 ? 1 - T.MathUtils.smoothstep(dPath, 0.85, 2.3) : 0;
    const shoreFactor = 1 - T.MathUtils.smoothstep(dPond, 5.2, 6.9);
    const pavFactor = 1 - T.MathUtils.smoothstep(Math.hypot(vx + 4.2, vz + 14.2), 2.5, 4.4);
    const shrineFactor = 1 - T.MathUtils.smoothstep(Math.hypot(vx, vz + 41.0), 2.3, 3.9);
    const sMix = Math.min(1, Math.max(pathFactor * 0.92, shoreFactor, pavFactor * 0.75, shrineFactor * 0.85));
    soilMix[i] = sMix;

    const patchNoise = Math.sin(vx * 0.25) * Math.cos(vz * 0.22) * 0.5 + 0.5;
    tmpColor.lerpColors(cMoss, cGrass, patchNoise);
    if (sMix > 0.01) {
      const soilCol = dPond < 6.4 ? cShore : cSoil;
      tmpColor.lerp(soilCol, sMix);
    }
    colors[i * 3] = tmpColor.r;
    colors[i * 3 + 1] = tmpColor.g;
    colors[i * 3 + 2] = tmpColor.b;
  }
  terrainGeo.setAttribute('color', new T.BufferAttribute(colors, 3));
  terrainGeo.setAttribute('aSoilMix', new T.BufferAttribute(soilMix, 1));
  terrainGeo.computeVertexNormals();

  const terrainMat = new T.MeshStandardMaterial({
    map: textures.grassTex,
    normalMap: textures.terrainNormal,
    normalScale: new T.Vector2(0.9, 0.9),
    vertexColors: true,
    roughness: 0.94,
    metalness: 0.02
  });
  terrainMat.onBeforeCompile = (shader) => {
    shader.uniforms.uSoilTex = { value: textures.soilTex };
    shader.vertexShader =
      `attribute float aSoilMix;\nvarying float vSoilMix;\n` +
      shader.vertexShader.replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>\nvSoilMix = aSoilMix;`
      );
    shader.fragmentShader =
      `uniform sampler2D uSoilTex;\nvarying float vSoilMix;\n` +
      shader.fragmentShader.replace(
        '#include <map_fragment>',
        `#ifdef USE_MAP
          vec4 grassSample = texture2D( map, vMapUv );
          vec4 soilSample = texture2D( uSoilTex, vMapUv );
          diffuseColor *= mix( grassSample, soilSample, clamp(vSoilMix, 0.0, 1.0) );
        #endif`
      );
  };

  const terrainMesh = new T.Mesh(terrainGeo, terrainMat);
  terrainMesh.receiveShadow = true;
  scene.add(terrainMesh);

  // 2. Winding uneven handcrafted flagstones + border pebbles
  const stoneVariations = Array.from({ length: 6 }, () => createFlagstoneGeometry(rng, 0.62));
  const stonesGroup = new T.Group();
  scene.add(stonesGroup);

  const stoneRecords = [];
  for (let z = 23.2; z > -38.8; z -= 1.02) {
    const cx = pathX(z);
    // 2 staggered main flagstones across path width + occasional center bridge stone
    const offsets = Math.floor(z * 10) % 2 === 0 ? [-0.62, 0.58] : [-0.75, 0.02, 0.72];
    for (const ox of offsets) {
      const sx = cx + ox + (rng() - 0.5) * 0.22;
      const sz = z + (rng() - 0.5) * 0.24;
      const sy = getTerrainHeight(sx, sz);
      if (sy < -0.02) continue;
      const geo = stoneVariations[Math.floor(rng() * stoneVariations.length)];
      const m = new T.Mesh(geo, rng() > 0.38 ? materials.stoneMat : materials.stoneDarkMat);
      m.position.set(sx, sy - 0.025, sz);
      m.rotation.set((rng() - 0.5) * 0.05, rng() * Math.PI * 2, (rng() - 0.5) * 0.05);
      const sc = 0.76 + rng() * 0.34;
      m.scale.set(sc * (0.9 + rng() * 0.25), 0.9 + rng() * 0.35, sc * (0.85 + rng() * 0.3));
      m.castShadow = true;
      m.receiveShadow = true;
      stonesGroup.add(m);
      stoneRecords.push({ x: sx, z: sz });
    }
  }
  // Circular sanctuary flagstone ring encircling the Hero Blossom Shrine at the end of the path (0, -41.0)
  for (let k = 0; k < 10; k++) {
    const a = (k / 10) * Math.PI * 2;
    const sx = Math.cos(a) * 2.55;
    const sz = -41.0 + Math.sin(a) * 2.55;
    const sy = getTerrainHeight(sx, sz);
    const geo = stoneVariations[k % stoneVariations.length];
    const m = new T.Mesh(geo, k % 2 === 0 ? materials.stoneMat : materials.stoneDarkMat);
    m.position.set(sx, sy - 0.024, sz);
    m.rotation.y = a + 0.3;
    m.scale.set(0.92, 1.0, 0.88);
    m.castShadow = true;
    m.receiveShadow = true;
    stonesGroup.add(m);
  }
  batchStaticGroup(stonesGroup);

  // 3. Sculpted weathered boulders (shoreline, tree roots, path accents)
  const boulderGeos = Array.from({ length: 4 }, () => createBoulderGeometry(rng, 2));
  const boulderBuckets = boulderGeos.map(() => []);

  const nearLandmark = (x, z, minD = 2.0) =>
    landmarkCoords.some((c) => Math.hypot(x - c.x, z - c.z) < minD);

  // Pond shoreline boulders (natural varied groupings, leaving entry vista open)
  for (let i = 0; i < 42; i++) {
    const a = (i / 42) * Math.PI * 2 + (rng() - 0.5) * 0.1;
    const rad = 5.45 + (rng() - 0.5) * 0.75;
    const rx = -10.6 + Math.cos(a) * rad * (1 + Math.sin(a * 2 + 0.6) * 0.11);
    const rz = -2.2 + Math.sin(a) * rad * 1.32 * (1 + Math.cos(a * 3 - 0.4) * 0.07);
    if (Math.abs(rx - pathX(rz)) < 2.2) continue;
    if (nearLandmark(rx, rz, 1.8)) continue;
    const ry = getTerrainHeight(rx, rz);
    const sx = 0.45 + rng() * 0.78;
    const sy = 0.32 + rng() * 0.48;
    const sz = 0.45 + rng() * 0.82;
    boulderBuckets[i % 4].push({
      x: rx,
      y: ry + sy * 0.2,
      z: rz,
      rx: (rng() - 0.5) * 0.25,
      ry: rng() * Math.PI * 2,
      rz: (rng() - 0.5) * 0.25,
      sx,
      sy,
      sz
    });
  }

  // Garden border & foreground framing boulders
  for (let i = 0; i < 60; i++) {
    const z = 22.5 - rng() * 67;
    const side = i % 2 === 0 ? -1 : 1;
    const x = pathX(z) + side * (2.6 + rng() * 11.5);
    if (pondDistance(x, z) < 6.4) continue;
    if (Math.hypot(x + 4.2, z + 14.2) < 3.9) continue;
    if (Math.hypot(x, z + 41.0) < 3.2) continue;
    if (nearLandmark(x, z, 1.9)) continue;
    const y = getTerrainHeight(x, z);
    const sx = 0.4 + rng() * 0.95;
    const sy = 0.28 + rng() * 0.55;
    const sz = 0.4 + rng() * 0.95;
    boulderBuckets[i % 4].push({
      x,
      y: y + sy * 0.18,
      z,
      rx: (rng() - 0.5) * 0.3,
      ry: rng() * Math.PI * 2,
      rz: (rng() - 0.5) * 0.3,
      sx,
      sy,
      sz
    });
  }

  boulderBuckets.forEach((list, idx) => {
    if (!list.length) return;
    const im = new T.InstancedMesh(boulderGeos[idx], materials.stoneMat, list.length);
    im.castShadow = true;
    im.receiveShadow = true;
    list.forEach((b, i) => {
      dummy.position.set(b.x, b.y, b.z);
      dummy.rotation.set(b.rx, b.ry, b.rz);
      dummy.scale.set(b.sx, b.sy, b.sz);
      dummy.updateMatrix();
      im.setMatrixAt(i, dummy.matrix);
      const shade = 0.78 + rng() * 0.28;
      im.setColorAt(i, new T.Color(shade, shade * 0.99, shade * 0.97));
    });
    scene.add(im);
  });

  // 4. Sculpted V-Creased 3D Grass, Cupped 3D Dianthus & Botanical Wildflower Clusters
  const grassPositions = [];
  const dianthusPositions = [];
  const wildflowerPositions = [];
  for (let i = 0; i < 1250; i++) {
    const z = 24 - rng() * 69;
    const side = rng() > 0.5 ? 1 : -1;
    const borderBias = rng() < 0.66 ? 1.44 + rng() * 2.45 : 3.2 + rng() * 11.5;
    const x = pathX(z) + side * borderBias;
    if (pondDistance(x, z) < 5.3) continue;
    if (Math.hypot(x + 4.2, z + 14.2) < 3.4) continue;
    if (Math.hypot(x, z + 41.0) < 2.65) continue;
    if (nearLandmark(x, z, 1.15)) continue;
    const y = getTerrainHeight(x, z);
    const entry = {
      x,
      y: y - 0.025,
      z,
      s: 0.76 + rng() * 0.62,
      rot: rng() * Math.PI * 2,
      tint: 0.84 + rng() * 0.28
    };
    if (borderBias < 3.5 && i % 4 === 0) dianthusPositions.push(entry);
    else grassPositions.push(entry);
  }
  // Pathside & shrine-ringed Twilight Bellflower + Star-Jasmine clusters
  for (let i = 0; i < 240; i++) {
    const z = 23.0 - rng() * 66;
    const side = rng() > 0.5 ? 1 : -1;
    const dist = 1.44 + rng() * 2.35;
    const x = pathX(z) + side * dist;
    if (pondDistance(x, z) < 5.35) continue;
    if (Math.hypot(x + 4.2, z + 14.2) < 3.4) continue;
    if (Math.hypot(x, z + 41.0) < 2.65) continue;
    if (nearLandmark(x, z, 1.2)) continue;
    wildflowerPositions.push({
      x,
      y: getTerrainHeight(x, z) - 0.02,
      z,
      s: 0.85 + rng() * 0.58,
      rot: rng() * Math.PI * 2,
      tint: 0.88 + rng() * 0.22
    });
  }
  // Extra ring of lush grass, pink Dianthus & wildflower clusters right around pond shore + Blossom Shrine plaza
  for (let i = 0; i < 260; i++) {
    const a = rng() * Math.PI * 2;
    const isShrineRing = i >= 195;
    let x, z;
    if (isShrineRing) {
      const r = 2.85 + rng() * 2.9;
      x = Math.cos(a) * r;
      z = -41.0 + Math.sin(a) * r;
    } else {
      const rad = 5.42 + rng() * 1.38;
      x = -10.6 + Math.cos(a) * rad * (1 + Math.sin(a * 2 + 0.6) * 0.11);
      z = -2.2 + Math.sin(a) * rad * 1.32 * (1 + Math.cos(a * 3 - 0.4) * 0.07);
      if (Math.abs(x - pathX(z)) < 1.35) continue;
    }
    const y = getTerrainHeight(x, z);
    const entry = {
      x,
      y: y - 0.028,
      z,
      s: 0.82 + rng() * 0.62,
      rot: rng() * Math.PI * 2,
      tint: 0.86 + rng() * 0.24
    };
    if (i % 4 === 0) wildflowerPositions.push(entry);
    else if (i % 3 === 0) dianthusPositions.push(entry);
    else grassPositions.push(entry);
  }

  const grassGeo = create3DGrassTuftGeometry(rng);
  const grassInst = new T.InstancedMesh(grassGeo, materials.foliage3DMat, grassPositions.length);
  grassInst.receiveShadow = false;
  grassPositions.forEach((g, i) => {
    dummy.position.set(g.x, g.y, g.z);
    dummy.rotation.set(0, g.rot, 0);
    dummy.scale.set(g.s, g.s * (0.88 + rng() * 0.34), g.s);
    dummy.updateMatrix();
    grassInst.setMatrixAt(i, dummy.matrix);
    grassInst.setColorAt(i, new T.Color(g.tint, g.tint * 1.03, g.tint * 0.94));
  });
  scene.add(grassInst);

  const dianthusGeo = create3DDianthusTuftGeometry(rng);
  const dianthusInst = new T.InstancedMesh(dianthusGeo, materials.foliage3DMat, dianthusPositions.length);
  dianthusInst.receiveShadow = false;
  dianthusPositions.forEach((g, i) => {
    dummy.position.set(g.x, g.y, g.z);
    dummy.rotation.set(0, g.rot, 0);
    dummy.scale.set(g.s * 1.08, g.s * (0.92 + rng() * 0.28), g.s * 1.08);
    dummy.updateMatrix();
    dianthusInst.setMatrixAt(i, dummy.matrix);
    dianthusInst.setColorAt(i, new T.Color(g.tint, g.tint * 0.98, g.tint));
  });
  scene.add(dianthusInst);

  const wildflowerGeo = create3DWildflowerClusterGeometry(rng);
  const wildflowerInst = new T.InstancedMesh(wildflowerGeo, materials.foliage3DMat, wildflowerPositions.length);
  wildflowerInst.receiveShadow = false;
  wildflowerPositions.forEach((g, i) => {
    dummy.position.set(g.x, g.y, g.z);
    dummy.rotation.set(0, g.rot, 0);
    dummy.scale.set(g.s * 1.06, g.s * (0.94 + rng() * 0.28), g.s * 1.06);
    dummy.updateMatrix();
    wildflowerInst.setMatrixAt(i, dummy.matrix);
    wildflowerInst.setColorAt(i, new T.Color(g.tint, g.tint * 0.97, g.tint * 1.04));
  });
  scene.add(wildflowerInst);

  // 5. Hydrangea & garden foliage shrubs + 3D flower domes along foreground, path bends, pond & shrine
  const shrubPositions = [];
  for (let i = 0; i < 230; i++) {
    const z = 23.5 - rng() * 68;
    const side = rng() > 0.5 ? 1 : -1;
    const x = pathX(z) + side * (2.25 + rng() * 9.5);
    if (pondDistance(x, z) < 5.7) continue;
    if (Math.hypot(x + 4.2, z + 14.2) < 3.8) continue;
    if (Math.hypot(x, z + 41.0) < 3.4) continue;
    if (nearLandmark(x, z, 1.55)) continue;
    const y = getTerrainHeight(x, z);
    shrubPositions.push({
      x,
      y: y - 0.04,
      z,
      s: 0.8 + rng() * 0.85,
      rot: rng() * Math.PI * 2
    });
  }
  const shrubGeo = createCrossedTuftGeometry(1.18, 0.94);
  const shrubInst = new T.InstancedMesh(shrubGeo, materials.shrubCardMat, shrubPositions.length);
  shrubInst.castShadow = true;
  shrubInst.receiveShadow = true;
  shrubPositions.forEach((s, i) => {
    dummy.position.set(s.x, s.y, s.z);
    dummy.rotation.set(0, s.rot, 0);
    dummy.scale.set(s.s, s.s * (0.85 + rng() * 0.25), s.s);
    dummy.updateMatrix();
    shrubInst.setMatrixAt(i, dummy.matrix);
    const shade = 0.84 + rng() * 0.24;
    shrubInst.setColorAt(i, new T.Color(shade, shade * 0.97, shade));
  });
  scene.add(shrubInst);

  const shrubBloomGeo = create3DShrubBlossomGeometry(rng);
  const shrubBloomInst = new T.InstancedMesh(shrubBloomGeo, materials.foliage3DMat, shrubPositions.length);
  shrubBloomInst.receiveShadow = false;
  shrubPositions.forEach((s, i) => {
    dummy.position.set(s.x, s.y, s.z);
    dummy.rotation.set(0, s.rot + 0.6, 0);
    dummy.scale.set(s.s, s.s * 0.96, s.s);
    dummy.updateMatrix();
    shrubBloomInst.setMatrixAt(i, dummy.matrix);
    shrubBloomInst.setColorAt(i, new T.Color(0.95 + rng() * 0.12, 0.92 + rng() * 0.12, 0.98 + rng() * 0.1));
  });
  scene.add(shrubBloomInst);

  // 6. Fallen cherry blossom petal carpet tucked between path stones & tree bases
  const petalCarpetCount = 540;
  const petalGeo = new T.PlaneGeometry(0.13, 0.13);
  petalGeo.rotateX(-Math.PI / 2);
  const petalCarpet = new T.InstancedMesh(petalGeo, materials.cherryPetalMat, petalCarpetCount);
  for (let i = 0; i < petalCarpetCount; i++) {
    const z = 23.5 - rng() * 68;
    const x = pathX(z) + (rng() - 0.5) * 5.2;
    const y = getTerrainHeight(x, z);
    if (y < -0.02) {
      dummy.scale.setScalar(0.001);
    } else {
      dummy.position.set(x, y + 0.032 + rng() * 0.015, z);
      dummy.rotation.set((rng() - 0.5) * 0.2, rng() * Math.PI * 2, (rng() - 0.5) * 0.2);
      dummy.scale.set(0.75 + rng() * 0.85, 1, 0.75 + rng() * 0.85);
    }
    dummy.updateMatrix();
    petalCarpet.setMatrixAt(i, dummy.matrix);
    const col = new T.Color().lerpColors(
      new T.Color(PALETTE.blossomDeep),
      new T.Color(PALETTE.blossomPale),
      rng()
    );
    petalCarpet.setColorAt(i, col);
  }
  scene.add(petalCarpet);

  // 7. Rustic wooden post-and-rail fences (foreground left entry & distant pond ridge)
  function buildFenceRun(points) {
    const group = new T.Group();
    const postGeo = new T.CylinderGeometry(0.055, 0.068, 0.92, 7);
    const railGeo = new T.CylinderGeometry(0.035, 0.038, 1, 6);
    for (let i = 0; i < points.length; i++) {
      const [px, pz] = points[i];
      const py = getTerrainHeight(px, pz);
      const post = new T.Mesh(postGeo, materials.woodDarkMat);
      post.position.set(px, py + 0.42, pz);
      post.rotation.z = (rng() - 0.5) * 0.05;
      post.castShadow = true;
      post.receiveShadow = true;
      group.add(post);

      if (i < points.length - 1) {
        const [nx, nz] = points[i + 1];
        const ny = getTerrainHeight(nx, nz);
        const a = new T.Vector3(px, py, pz);
        const b = new T.Vector3(nx, ny, nz);
        const delta = b.clone().sub(a);
        const len = delta.length();
        for (const h of [0.38, 0.68]) {
          const rail = new T.Mesh(railGeo, materials.woodMat);
          rail.scale.set(1, len, 1);
          rail.position.copy(a).add(b).multiplyScalar(0.5);
          rail.position.y += h;
          rail.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), delta.clone().normalize());
          rail.castShadow = true;
          group.add(rail);
        }
      }
    }
    batchStaticGroup(group);
    scene.add(group);
  }

  // Entry foreground left fence (visible in 01-world-entry style framing)
  buildFenceRun([
    [-5.6, 22.8],
    [-4.3, 21.6],
    [-3.1, 20.2],
    [-2.5, 18.8]
  ]);
  // Right garden border fence
  buildFenceRun([
    [5.8, 22.4],
    [5.2, 20.6],
    [4.9, 18.8]
  ]);
  // Distant pastoral fence behind pond
  buildFenceRun([
    [-16.5, -14.5],
    [-14.2, -16.0],
    [-11.8, -17.3],
    [-9.5, -18.2]
  ]);

  // 8. Layered hazy twilight mountain silhouettes ringing the horizon
  const ridgeColors = ['#696987', '#555d78', '#434f69'];
  for (let layer = 0; layer < 3; layer++) {
    const dist = 56 + layer * 18;
    const segs = 72;
    const ridgeShape = new T.Shape();
    const span = 180;
    ridgeShape.moveTo(-span, -6);
    for (let i = 0; i <= segs; i++) {
      const t = i / segs;
      const x = -span + t * span * 2;
      const h =
        (6.5 + layer * 4.2) +
        Math.sin(t * Math.PI * (5 + layer * 2) + layer * 1.7) * (3.8 + layer * 1.4) +
        Math.cos(t * Math.PI * (11 + layer * 3)) * 1.9;
      ridgeShape.lineTo(x, Math.max(1.5, h));
    }
    ridgeShape.lineTo(span, -6);
    ridgeShape.closePath();

    const rGeo = new T.ShapeGeometry(ridgeShape);
    const rMat = new T.MeshBasicMaterial({
      color: ridgeColors[layer],
      fog: true,
      side: T.DoubleSide
    });
    const rMesh = new T.Mesh(rGeo, rMat);
    rMesh.position.set(0, -1.5, -dist);
    scene.add(rMesh);

    // Side horizon ridges so looking left/right never hits flat void
    const sideL = rMesh.clone();
    sideL.rotation.y = Math.PI * 0.48;
    sideL.position.set(-dist * 0.92, -1.5, -6);
    scene.add(sideL);

    const sideR = rMesh.clone();
    sideR.rotation.y = -Math.PI * 0.48;
    sideR.position.set(dist * 0.92, -1.5, -6);
    scene.add(sideR);
  }

  return { grassInst, dianthusInst, wildflowerInst, shrubInst, shrubBloomInst };
}
