# A Little Place for Hirushi — The Memory Garden (Upgrade Guide)

## Repository & Architecture Overview
- **Repository**: `https://github.com/menogt/hir` (`garden-source/`)
- **Live Site**: `https://hir-wcl5.onrender.com/`
- **Stack**: Three.js (`^0.180.0`) + Vite (`^7.0.0`), zero heavy third-party runtime dependencies.

## Files Modified & Added in `garden-source/`
1. **`memories.js` (NEW)**:
   - Central data-driven definition file containing `ORIGINAL_DISCOVERIES` (the 4 original garden stations) and `MEMORY_TRAIL` (the 10 walkable memory landmarks).
   - Supports adding, editing, reordering, or toggling `isUnlocked` / `isPrivate` without touching `main.js`.
2. **`main.js` (UPGRADED)**:
   - **Phase 1 (Foundation & Lighting)**: Twilight / golden-dusk sky dome (`#52657D` → `#8880A0` → `#D98DA9` → `#F2E5C9`), soft hemisphere fill, directional twilight moonlight/sunlight (`#FFD9A0`) with soft shadows, and exponential atmospheric fog.
   - **Phase 2 (Environment Detail)**: Gently rolling heightmapped terrain (`getTerrainHeight`), fuller multi-branched cherry blossom trees with 3-stop pink hue interpolation (`#D98DA9`, `#F1B3C8`, `#F6D6DD`), irregular stepping stones with flower clusters, wooden/stone lanterns, animated pond ripples, lily pads, reeds, and the shy blinking spirit at Discovery 03.
   - **Phases 3–5 (Memory Trail & Landmarks)**: 10 symbolic 3D environmental landmarks placed along the path (`welcome-sign`, `photo-stand`, `cupcake-table`, `two-seats`, `lecture-desk`, `study-desk`, `ringing-phone`, `iced-coffee-bench`, `mini-cinema`, `unfinished-arch`), smooth velocity movement, discovery chime synthesis, and Web Audio breeze synthesis.
   - **Phase 6 (Performance & Quality Presets)**: Static geometry batching (`mergeGeometries`) + `LOW / MEDIUM / HIGH` quality toggle.
3. **`index.html` & `style.css` (UPGRADED)**:
   - Quiet, translucent bottom card (`#message`) that keeps the 3D garden visible behind it, expanded Garden Map (`M`), Compact Memory Journal (`J`), and photo lightbox viewer.

## Building & Deploying
```bash
cd garden-source
npm install
npm run dev      # local development server
npm run build    # outputs production bundle to dist/ (copy to repository root if deploying from root)
```
