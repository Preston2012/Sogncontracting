# Sogn Contracting

Production website for **Sogn Contracting LLC**, a licensed general contractor in Bandon, Oregon. Built and maintained by [Preston Winters](https://winterscode.com) at Winters Code.

**Live:** [sogncontracting.com](https://www.sogncontracting.com)

<p align="center">
  <img src="docs/screenshots/sogn-mobile-hero.jpg" alt="sogncontracting.com mobile home page screenshot" width="320" />
</p>

[![Lighthouse mobile: 95/100/100/100](https://img.shields.io/badge/Lighthouse_mobile-95%2F100%2F100%2F100-brightgreen)](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fsogncontracting.com)
[![Built with Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## What this is

A static-rendered Next.js 14 site for a Bandon-Oregon construction company. Built to:

- Show 30+ years of work without slowing anyone down
- Pass Lighthouse 95+ on real Coos County phones (slow LTE, older Androids)
- Stay maintainable by one person, forever
- Cost nothing to run beyond the domain

No CMS. No tracking. No paid SaaS dependencies. Photos in `public/projects/`, copy in `config/site.ts`, deploys to Cloudflare Pages.

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14 (App Router, static export) | Prerendered HTML, no server costs |
| Styling | CSS modules + global tokens | No Tailwind, no runtime CSS-in-JS, zero JS for styling |
| Images | Next `<Image>` with `unoptimized` + manual `srcset` | Build-time WebP variants, no image proxy needed |
| Forms | Static `<form>` POST to a Cloudflare Worker | No third-party form service |
| Hosting | Cloudflare Pages | Free tier covers this site forever |
| Analytics | None | Owner doesn't need them |
| CSP | Per-page SHA-256 hash via `scripts/csp-postprocess.mjs` | Strict CSP, no `unsafe-inline`, passes Lighthouse Best-Practices |

## Live performance

Lighthouse, real device, mobile profile:

| Metric | Score |
|---|---|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

Tested via [PageSpeed Insights](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fsogncontracting.com).

## Project structure

```
app/                  # Next 14 App Router pages
  page.tsx            # Home
  services/           # /services
  gallery/            # /gallery (filtered project grid)
  api/contact/        # form submit handler
components/           # React components, one CSS module each
config/
  site.ts             # Single source of truth: name, contact, credentials, meta
  projects.ts         # Gallery project data (before/after pairs, descriptions)
public/projects/      # WebP photos at 4 widths (400/800/1200/1600)
scripts/
  csp-postprocess.mjs # Per-page CSP hash injection on build
```

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build + deploy

```bash
npm run build        # produces .next/ with CSP-processed HTML
npm run start        # serve the build locally
```

Cloudflare Pages picks up `npm run build` automatically on push to `main`. Build command: `npm run build`. Output directory: `.next`.

## Maintenance

This site is built so one person can update it in 5 minutes:

- **New project photos:** drop WebPs in `public/projects/<slug>/`, add the entry to `config/projects.ts`, push.
- **Phone, address, credentials change:** edit `config/site.ts`, push.
- **Content edits:** edit the relevant component (`components/AboutSection.tsx`, `components/Hero.tsx`).

All changes deploy automatically via Cloudflare Pages on push to main.

## Credit

Built by Preston Winters at [Winters Code](https://winterscode.com), Bandon Oregon. Custom websites and apps for Oregon coast businesses.

For business questions about the site or Sogn Contracting's work: [sogncontracting.com](https://www.sogncontracting.com).

For questions about the code or how it was built: [preston@winterscode.com](mailto:preston@winterscode.com).

## License

MIT. See [LICENSE](LICENSE).

The code is open source. The Sogn Contracting brand, logo, project photography, and business copy are property of Sogn Contracting LLC and not covered by this license.
