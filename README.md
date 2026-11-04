# The Girl House — strona www

Site: https://www.thegirlhouse-pruszcz.pl · Hosting: Netlify (project `thegirlhouse-pruszcz`, deploy on push to `main`).

## Status
- **Stage 3 (04.11.2026):** full PL version in style B "Wieczór". Not indexed yet (`noindex` meta + `X-Robots-Tag` in `netlify.toml`).
- Placeholders waiting for owner input: photos (hero nails, gallery, team), reviews, NIP, hygiene facts (sterilisation, materials), Booksy link check.

## Updating prices
Prices live in `index.html` (section `#cennik`) and the "od … zł" values in `#uslugi`. Update both, plus the "Aktualne na" date. After stage 4 also `/en/index.html`.

## Structure
- Static HTML/CSS, no build step. Netlify: build command empty, publish directory `.`.
- `netlify.toml` — security headers, asset caching.
- Brand: set N4 (neon `#FF6EC7`, grafit `#2B2A28`, krem `#F3ECE4`).

## Rules
- Every push to `main` = one production deploy (Netlify free plan: 15 credits per deploy, 300/month). Batch changes into one push.
- No external scripts, trackers, CDN fonts or iframes (zero cookies).
- Go-live: remove `noindex` from HTML **and** `X-Robots-Tag` from `netlify.toml`.
