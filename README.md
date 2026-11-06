# The Girl House — strona www

Site: https://www.thegirlhouse-pruszcz.pl · Hosting: Netlify (project `thegirlhouse-pruszcz`, deploy on push to `main`).

## Status
- **Stage 5 (06.11.2026):** PL + EN versions in style B "Wieczór", QA done (Lighthouse mobile: performance 95–100, accessibility 100, best practices 100; SEO 69 only because of `noindex`).
- Not indexed yet (`noindex` meta + `X-Robots-Tag` in `netlify.toml`). Go-live = remove both.
- Placeholders waiting for owner input: photos (hero nails, gallery, team), reviews, NIP, hygiene facts (sterilisation, materials).

## Updating prices
Prices live in `index.html` (section `#cennik`) and the "od … zł" values in `#uslugi`. Update both, plus the "Aktualne na" date. Also `/en/index.html` (English name + Polish Booksy name per row).

## Structure
- Static HTML/CSS, no build step. Netlify: build command empty, publish directory `.`.
- `netlify.toml` — security headers, asset caching.
- Brand: set N4 (neon `#FF6EC7`, grafit `#2B2A28`, krem `#F3ECE4`).

## Rules
- Every push to `main` = one production deploy (Netlify free plan: 15 credits per deploy, 300/month). Batch changes into one push.
- No external scripts, trackers, CDN fonts or iframes (zero cookies).
- Go-live: remove `noindex` from HTML **and** `X-Robots-Tag` from `netlify.toml`.
