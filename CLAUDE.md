# cv.riera.co.uk — CLAUDE.md

## Purpose

Static CV and professional profile landing page for Marc Riera, deployed via GitHub Pages at **cv.riera.co.uk**. 
One of twelve sites in the Riera portfolio network (`riera.co.uk`, `cxo.riera.co.uk`, `sme.riera.co.uk`, etc).

## How to Run / Test Locally

```bash
# Serve the static site on localhost:8000
python -m http.server 8000
# Visit http://localhost:8000
```

No build step, no dependencies. Just HTML + CSS + vanilla JS.

## Layout & Structure

```
cv.riera.co.uk/
├── index.html          # Main CV/profile page (13.2 KB)
├── styles.css          # Shared portfolio design tokens (21.9 KB, 869 lines)
├── chrome.js           # Portfolio switcher + footer nav (shared across 11 sites)
├── deploy.sh           # GitHub Pages deployment helper
├── CNAME               # Custom domain pinning
└── README.md           # User-facing deployment docs
```

### Key Files

- **index.html**: Marc's profile + experience, 20+ years infrastructure/platform engineering. 
  Includes nav (Fit, Experience, Credentials, Contact), switcher for portfolio index (Cmd+K), 
  and footer links to other sites.
  
- **styles.css**: Portfolio design system (oklch tokens: paper, ink, accent). Shared across all 
  Riera sites. Do not edit carelessly — changes affect the entire network.
  
- **chrome.js**: Shared navigation component. Reads `data-site="cv"` on `<html>` to highlight 
  the current site in the switcher and footer. SITES array maps all 11 portfolio domains.
  
- **deploy.sh**: Helper script for first-time GitHub Pages setup. Creates directories, downloads 
  images, runs git push. Not needed for ongoing edits (just commit + push).

## Conventions

- **Edit → Commit → Push to main** activates GitHub Pages auto-rebuild (5–10 min).
- **No build step**. All content is served as-is.
- **Shared chrome.js**: Changes here sync across all portfolio sites. Test locally before pushing.
- **CNAME**: Pins domain to `cv.riera.co.uk`. Do not edit unless migrating domains.
- **Styling**: Use existing oklch tokens (`--paper`, `--ink`, `--ink-2`). Avoid inline styles.

## Gotchas

1. **Chrome.js is shared**: The SITES array in chrome.js is duplicated across all 11 portfolio repos. 
   If you add/remove/rename a portfolio site, you must update SITES in every repo's chrome.js 
   (or it will be stale in some views). Consider a symlink or shared file approach in future.

2. **GitHub Pages cache**: Changes may take 5–10 minutes to appear. Hard-refresh browser or wait.

3. **DNS propagation**: If you ever change the CNAME or DNS records, allow up to 24 hours for 
   propagation before troubleshooting.

4. **Do not commit `/assets`**: The deploy.sh script creates it, but it's gitignored. 
   User-uploaded files (PDFs, images) go there but won't auto-sync.

5. **index.html metadata**: Open Graph and canonical tags point to `https://cv.riera.co.uk/`. 
   If you rename or move the site, update these.

## Recent History

```
11bf0ea chore(family): sync twelve-site portfolio directory
0c98d8b Update brand mark to MR
9413941 update style
183a248 Create cv.riera.co.uk site
```

The site was created as the founding CV repo in the portfolio network. Recent commits sync 
design changes across all related sites.

## Dependencies

None. Pure HTML/CSS/vanilla JS. No npm, no build tools, no external APIs (fonts loaded from 
Google Fonts via `<link>`).
