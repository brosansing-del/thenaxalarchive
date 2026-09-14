THE NAXAL ARCHIVE - ARTICLE PATCH

1. Extract this ZIP.
2. Copy the 'src' folder into the root of your local thenaxalarchive project.
3. Allow Windows to merge folders and replace the listed files.
4. This patch does NOT include astro.config.mjs, so your GitHub Pages username/base settings are preserved.
5. Run:
   npm.cmd run dev
6. Test:
   /thenaxalarchive/articles/ locally use /articles/ on localhost
   Click both article cards from the homepage.
7. Publish:
   git add -A
   git commit -m "Add rehabilitation and development articles"
   git push

Files added:
- src/content.config.ts
- src/content/articles/from-insurgency-to-integration.md
- src/content/articles/from-conflict-to-connectivity.md
- src/pages/articles/index.astro
- src/pages/articles/[id].astro

Files updated:
- src/pages/index.astro
- src/layouts/BaseLayout.astro
- src/components/Header.astro
- src/components/Footer.astro
- src/styles/global.css
