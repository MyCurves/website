# Product Detail Page Guide

## Overview
The dynamic product detail page is located at `src/app/products/[slug]/page.tsx` and provides a comprehensive product viewing experience.

## Features Implemented

### 1. Product Gallery (Left Column)
- **Main Image**: Large product image with hover zoom effect
- **Thumbnail Gallery**: 4 images displayed below the main image
- **Image Selection**: Click thumbnails to switch main image
- **Lightbox**: Click main image to view full-screen

### 2. Product Info (Right Column)
- **Product Title**: H1 heading using Montserrat font
- **Price**: Large, pink (brand color #E6007E) in KSh
- **Short Description**: Product overview
- **Color Selector**: Color swatches with visual selection
- **Size Selectors**:
  - Band size dropdown (32-48)
  - Cup size dropdown (A-H)
- **Quantity Selector**: +/- buttons for quantity control
- **Add to Cart Button**: Large pink button
- **WhatsApp Button**: Direct messaging with pre-filled text
- **Size Guide Link**: Links to size finder
- **Product Features**: Bulleted list of key features

### 3. Tabs Section (Full Width)
- **Description**: Full product details
- **Size Guide**: Sizing chart with measurements
- **Shipping & Returns**: Delivery and return policies
- **Reviews**: Placeholder for future review system

### 4. Related Products
- **"You May Also Like"**: Shows 4 products from same category
- **Grid Layout**: 2 columns on mobile, 4 on desktop
- **Clickable Cards**: Navigate to other product pages

## URL Structure

Products are accessed via slug-based URLs:
- `/products/spotlight-bra`
- `/products/everyday-comfort-bra`
- `/products/lace-plunge-bra`
- `/products/sports-support-bra`

## Mock Products

Currently, 4 sample products are included:

1. **Curvy Kate Spotlight Full Cup Bra** (spotlight-bra) - KSh 6,500
2. **Everyday Comfort Wireless Bra** (everyday-comfort-bra) - KSh 4,500
3. **Elegant Lace Plunge Bra** (lace-plunge-bra) - KSh 5,800
4. **High Impact Sports Bra** (sports-support-bra) - KSh 5,200

## Styling

- **Brand Color**: #E6007E (pink)
- **Fonts**: 
  - Headings: Montserrat
  - Body: Open Sans
- **Responsive**: Mobile-first design that stacks on small screens
- **Images**: Square aspect ratio with object-cover

## Adding New Products

To add a new product, extend the `products` object:

```typescript
'your-product-slug': {
  id: '5',
  title: 'Your Product Name',
  price: 5000,
  images: [
    '/images/products/product-1.jpg',
    '/images/products/product-2.jpg',
  ],
  description: 'Short description',
  fullDescription: 'Full product description',
  features: [
    'Feature 1',
    'Feature 2',
  ],
  sizes: {
    bands: [32, 34, 36, 38, 40],
    cups: ['A', 'B', 'C', 'D', 'DD'],
  },
  colors: [
    { name: 'Black', hex: '#000000' },
    { name: 'White', hex: '#FFFFFF' },
  ],
  category: 'bras',
}
```

## Future Enhancements

When connecting to an API/database:

1. Replace the `products` object with an API call
2. Add `generateStaticParams()` for static generation
3. Implement real cart functionality
4. Add user reviews system
5. Connect to inventory for size availability
6. Add product recommendations algorithm

## Example API Integration

```typescript
// Future implementation
async function getProduct(slug: string) {
  const res = await fetch(`https://api.example.com/products/${slug}`);
  return res.json();
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);
  // ... rest of component
}
```

## Testing

To test the page:
1. Start the dev server: `npm run dev`
2. Navigate to: `http://localhost:3000/products/spotlight-bra`
3. Test all interactive features:
   - Image gallery and lightbox
   - Size selectors
   - Quantity controls
   - Add to cart
   - WhatsApp integration
   - Tab navigation
   - Related products links
