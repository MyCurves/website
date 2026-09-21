# Loving My Curves (MyCurves)

Next.js website for [Loving My Curves](https://lovingmycurves.com) — Wendy Karira Waweru's plus-size lingerie boutiques in Nairobi (Sarit Centre + Yaya Centre).

Built with Next.js 16, TypeScript, Tailwind CSS v4, and [Pages CMS](https://pagescms.org/) for product content management.

## Commands

```bash
npm install
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint
npm run typecheck
npm run check    # lint + typecheck + build
```

## Content

- **Products:** `content/products/*.md` — editable in Pages CMS (`images` + `features` fields)
- **Product images:** `public/uploads/products/`
- **Import script:** `node scripts/import-mycurves-products.mjs <zip-or-folder>`

## Orders

Online checkout is not enabled. Customers order via WhatsApp (+254 746 844 227 Sarit, +254 703 844 227 Yaya).

## Google Business Profile

- **Sarit Centre:** [MyCurves Bra Shop on Google Maps](https://www.google.com/maps/place/MyCurves+Bra+Shop/@-1.2611605,36.8019777,17z/data=!3m1!4b1!4m6!3m5!1s0x182f17fc87f3e3bd:0xd313f2f983642f4!8m2!3d-1.2611605!4d36.8019777!16s%2Fg%2F11d_28yx1b) — wired in `src/lib/seo.ts` (`SARIT_GOOGLE_MAPS_URL`).
- **Yaya Centre:** No separate GBP listing yet — NAP/hours remain on-site only until a Yaya profile is created or claimed.

## Tech Stack

Next.js 16 (App Router) · React 19 · TypeScript · shadcn/ui · Tailwind v4 · Pages CMS
