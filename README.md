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

## Tech Stack

Next.js 16 (App Router) · React 19 · TypeScript · shadcn/ui · Tailwind v4 · Pages CMS
