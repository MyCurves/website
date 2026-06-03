# Hero Slider Component Specification

## Overview
- **Target file:** `src/components/HeroSlider.tsx`
- **Interaction model:** Auto-rotating carousel

## Structure
Full-width image slider with text overlays

## Slides (6 total)
1. `/images/hero/D0308445-1-1.jpg`
2. `/images/hero/D0308277-1-1.jpg`
3. `/images/hero/D0308435.jpg`
4. `/images/hero/D0304503.jpg`
5. `/images/hero/D0304346.jpg`
6. `/images/hero/Homepage-2.jpg`

## Text Overlay
- Heading: "E m b r a c e  y o u r  c u r v e s"
- Subheading: "F A L L  I N  L O V E  W I T H  Y O U R S E L F"
- Font: Montserrat, uppercase, letter-spacing
- Color: White with text shadow
- Position: Center-left to center
- Optional CTA button

## Behavior
- Auto-advance every 5 seconds
- Fade transition between slides
- Navigation dots at bottom
- Pause on hover
- Swipe support on mobile

## Responsive
- Desktop: Full height (600-800px)
- Mobile: Reduced height (400px), text scales down

## Implementation
- Use Embla Carousel or similar lightweight slider
- Lazy load images
- Preload first 2 images
