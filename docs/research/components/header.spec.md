# Header Component Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Interaction model:** Sticky on scroll

## Structure

### Top Bar (Contact Banner)
- Background: Light gray (#EEE)
- Height: ~35px
- Left: Contact info text "Sarit Centre: +254 746 844 227 Yaya Centre: +254 703 844 227"
- Right: Social icons (Facebook, Instagram, Pinterest) + links (Our Story, Contact, Videos)

### Main Navigation
- Height: 94px
- Background: White (transparent on hero)
- Logo: Left side
- Nav items: HOME, BRAS (dropdown), PANTIES, SHAPEWEAR, ON SALE
- Right side: Search icon, "Find Your Size" button (pink), Cart icon

## Navigation Structure
- Home: /
- Bras: /bras/ (with submenu)
  - Balconnet Bras
  - Full Cup Bras
  - Padded Bras
  - Strapless Bras
  - Plunge Bras
  - Sports Bras
  - Baby Dolls
  - Scantilly
  - Bra Accessories
- Panties: /panties/
- Shapewear: /shapewear/
- On Sale: /on-sale/

## Sticky Behavior
- Initial: Transparent background over hero
- Scrolled: White background, box shadow

## Responsive
- Desktop: Full horizontal nav
- Mobile: Hamburger menu, stacked navigation
