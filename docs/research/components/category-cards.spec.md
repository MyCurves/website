# Category Cards Component Specification

## Overview
- **Target file:** `src/components/CategoryCards.tsx`
- **Interaction model:** Hover effects on cards

## Layout
4-column grid on desktop → 2-column tablet → 1-column mobile

## Cards

### Card 1: Know Your Size (CTA Card)
- Background: Pink (#E6007E)
- Icon: Measuring tape or similar (can use text)
- Text: "Know Your Size"
- Subtext: "Find Your Perfect Fit"
- Link: /find-your-size

### Card 2: Bras
- Image: `/images/categories/Bras-1.jpg`
- Overlay text: "Bras"
- Link: /bras

### Card 3: Sportswear
- Image: `/images/categories/Sportswear-1.jpg`
- Overlay text: "Sportswear"
- Link: /sportswear (or sports-bras)

### Card 4: Shapewear
- Image: `/images/categories/Shapewear-1-scaled.jpg`
- Overlay text: "Shapewear"
- Link: /shapewear

## Card Styling
- Aspect ratio: 4:3 or similar
- Border radius: 8px
- Box shadow: subtle
- Hover: Scale transform (1.05), increased shadow
- Transition: 0.3s ease

## Text Overlay (for image cards)
- Font: Montserrat, 24px, bold
- Color: White
- Background: Semi-transparent dark overlay
- Position: Center or bottom-center

## Responsive
- Desktop: 4 columns, gap 24px
- Tablet: 2 columns, gap 20px
- Mobile: 1 column, gap 16px
