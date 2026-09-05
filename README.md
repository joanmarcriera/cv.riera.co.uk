# cv.riera.co.uk

Static CV-oriented landing page for [cv.riera.co.uk](https://cv.riera.co.uk/).

## Usage

To run the site locally for testing:

```bash
python -m http.server 8000
# Then visit http://localhost:8000
```

No build step or dependencies required — this is a pure static HTML/CSS/JavaScript site.

## Public Site Network

- `cv.riera.co.uk`: CV and operator profile layer
- `riera.co.uk`: commercial front door for the paid Automation Audit
- `cxo.riera.co.uk`: strategy and executive layer
- `sme.riera.co.uk`: practical SME systems and demo layer

The live automation stack and app URLs remain on `joanmarcriera.es` and its subdomains. This repo should not repoint those links away from that live stack domain.

## Deployment

- GitHub Pages serves the repository root.
- `index.html` is the published landing page.
- `styles.css` contains the site styling.
- `CNAME` pins the custom domain to `cv.riera.co.uk`.

## Updating

Edit the root static files, commit to `main`, and push to publish the landing page update.
