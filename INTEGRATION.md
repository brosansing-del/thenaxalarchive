# Add the extracted document pages

Copy `components/DoctrinePage.astro` to:

`src/components/DoctrinePage.astro`

Copy the three folders under `pages/background/ideology/` to:

`src/pages/background/ideology/`

The resulting routes are:

- `/background/ideology/mlm/`
- `/background/ideology/party-programme/`
- `/background/ideology/party-constitution/`

Add links to these pages under a “Foundational documents” section on the main Ideology page.

Build checks:

```powershell
npm.cmd run build
Test-Path .\dist\background\ideology\mlm\index.html
Test-Path .\dist\background\ideology\party-programme\index.html
Test-Path .\dist\background\ideology\party-constitution\index.html
```
