# The Naxal Archive — foundation

This is a clean restart built for a long-term research/data project.

## Architecture
- Astro static frontend
- CSV as the canonical public research format in phase 1
- Build-time schema checks
- Public CSV mirror for downloads and browser visualisations
- Article/content layer separate from data
- GitHub Actions deployment
- Designed to migrate later to SQLite/PostgreSQL + API without changing the public taxonomy

## First setup
1. Install Node.js 20+
2. Run `npm install`
3. Run `npm run validate:data`
4. Run `npm run sync:data`
5. Run `npm run dev`

## Before GitHub Pages deployment
Edit `astro.config.mjs` and replace `https://example.com` with your real domain or GitHub Pages URL.

## Data workflow
1. Add/update CSV rows in `data/`
2. Register every source in `data/sources/source_registry.csv`
3. Use stable record IDs
4. Run `npm run validate:data`
5. Run `npm run sync:data`
6. Commit data + source changes together

## Phase plan
Phase 1: CSV + validation + dashboards + articles.
Phase 2: generated JSON indexes and reusable visual modules.
Phase 3: SQLite/PostgreSQL, admin ingestion, API.
Phase 4: automated source ingestion with human verification before publication.
