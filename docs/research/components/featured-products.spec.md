# Featured Products Component Specification

## Overview
- **Target file:** `src/components/FeaturedProducts.tsx`
- **Interaction model:** Product card hover effects

## Section Header
- Heading: "EMBRACE YOUR CURVES"
- Font: Montserrat, uppercase, centered
- Size: 32-36px
- Color: Dark gray/black
- Margin bottom: 40px

## Product Cards Layout
3-column grid on desktop → 2-column tablet → 1-column mobile

## Sample Products (from extraction)
Products displayed with:
- Product image (hover zoom effect)
- Product title
- Price in KSh (Kenyan Shilling format: "KSh 6,500.00")
- Link to product page

Example products:
1. Curvy Kate Spotlight Full Cup Side Support Bra Black - KSh 6,500.00
2. Curvy Kate Everymove Wired Multiway Sports Bra Black - KSh 8,500.00
3. Curvy Kate Luxe Black Strapless Bra - KSh 7,300.00

## Product Card Styling
- Background: White
- Border: 1px solid light gray
- Border radius: 8px
- Padding: 16px
- Shadow: subtle, increases on hover
- Image: aspect-ratio square or 3:4
- Title: 16px, Montserrat, 2-line clamp
- Price: 18px, bold, pink color (#E6007E)
- Hover: Scale image 1.1, increase shadow

## CTA Button
- "View All Products" button below grid
- Style: Pink background, white text, rounded
- Center aligned

## Responsive
- Desktop: 3 columns, gap-8
- Tablet: 2 columns, gap-6  
- Mobile: 1 column, gap-4

## Notes
- Products will be dynamic (props-based)
- For now, use placeholder/sample data
- Image optimization with Next.js Image
