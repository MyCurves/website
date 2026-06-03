# Pages CMS Setup

This site uses [Pages CMS](https://pagescms.org) for content management. Content lives in Git as markdown files — no Decap/Netlify CMS admin bundle required.

## Connect the repository

1. Push this repo to GitHub (`MyCurves/website`)
2. Go to [app.pagescms.org](https://app.pagescms.org)
3. Sign in with GitHub and authorize Pages CMS for the repository
4. Pages CMS reads configuration from `.pages.yml` at the repo root

## Editable collections

| Collection | Path | Purpose |
|------------|------|---------|
| **Products** | `content/products/*.md` | E-commerce catalog (price, images, sizes, descriptions) |
| **Category Pages** | `content/categories/*.md` | Bras, Panties, Shapewear, On Sale headings & copy |
| **Info Pages** | `content/pages/*.md` | Help, Returns, Deliveries, Testimonials, Videos, Cart |

## Media uploads

Product images upload to `public/uploads/products/` and are referenced in content as `/uploads/products/filename.jpg`.

Existing migrated assets remain in `public/images/`.

## Local workflow

```bash
# Reseed sample products (optional)
npm run seed:products

# Verify internal links
npm run check:links

# Production build
npm run build
```

## Deployment

Netlify rebuilds automatically when Pages CMS commits to GitHub. No CMS credentials are stored in the static site.
