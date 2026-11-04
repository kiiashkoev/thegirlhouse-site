# The Girl House — strona www

Site: https://www.thegirlhouse-pruszcz.pl · Hosting: Netlify (project `thegirlhouse-pruszcz`, deploy on push to `main`).

## Status
- **Placeholder** ("Nowa strona już wkrótce") — not indexed (`noindex` meta + `X-Robots-Tag` in `netlify.toml`).

## Structure
- Static HTML/CSS, no build step. Netlify: build command empty, publish directory `.`.
- `netlify.toml` — security headers, asset caching.
- Brand: set N4 (neon `#FF6EC7`, grafit `#2B2A28`, krem `#F3ECE4`).

## Rules
- Every push to `main` = one production deploy (Netlify free plan: 15 credits per deploy, 300/month). Batch changes into one push.
- No external scripts, trackers, CDN fonts or iframes (zero cookies).
- Go-live: remove `noindex` from HTML **and** `X-Robots-Tag` from `netlify.toml`.
