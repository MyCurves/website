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

## Content & site backlog

### Content Mathenge needs to provide

- [ ] **Landscape hero images** — homepage hero carousel needs proper landscape shots (current assets are a stopgap)
- [ ] **Better founder photo** — higher-quality portrait of Wendy for Our Story (`/our-story`)
- [ ] **Panties & shapewear catalog** — real products under `/panties` and `/shapewear` (import via Pages CMS + `scripts/import-mycurves-products.mjs`)

### Site & product (engineering / ops)

- [ ] Claim/create **Yaya Centre Google Business Profile** (Sarit Maps/GBP already linked)
- [ ] Fitting-first **size quiz → WhatsApp** (guided flow after home measuring guide)
- [ ] Stronger **product photography** + UGC “fit moments” for PDPs and social proof
- [ ] **Matching sets / occasion** shopping paths (e.g. bra + brief bundles, sports, date night)
- [ ] **Ask Sarit / Ask Yaya** stock CTAs on PDPs (branch-specific WhatsApp prefills)
- [ ] **WhatsApp Business** automated flows (fitting booking, stock check replies)
- [ ] Dedicated **press page** + **My Body My Victory** school outreach page
- [ ] **Core Web Vitals** pass on production + GA4 events for WhatsApp / fitting clicks
- [ ] **Daily Nation** press URL when article link is available (`src/lib/press.ts` TODO)

### Done or partial (this PR)

- [x] Blank CMS pages fixed (`/returns`, `/help`, `/deliveries`, etc.) — `ContentPage` + async `params`
- [x] Founder **Instagram video embed** on Our Story — `/our-story#meet-wendy` (`FounderVideo` + `InstagramEmbed`)
- [x] Product PDP routing fixed (Next.js 16 `await params`)
- [x] WhatsApp fitting booking CTAs, testimonials, GA4 (`G-JW9F04F4RE`), verified press links

## Tech Stack

Next.js 16 (App Router) · React 19 · TypeScript · shadcn/ui · Tailwind v4 · Pages CMS
