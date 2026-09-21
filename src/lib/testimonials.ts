export interface Testimonial {
  quote: string;
  author: string;
  /** Display-only star rating (not used in structured data). */
  stars: 4 | 5;
  location?: "Sarit" | "Yaya";
}

/** Curated on-brand testimonials — edit here or migrate to CMS later. */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I had been wearing the wrong size for years. The fitting at Sarit was thorough and patient — I finally understand my band and cup size.",
    author: "Wanjiku M.",
    stars: 5,
    location: "Sarit",
  },
  {
    quote:
      "They really know Panache and Curvy Kate. I found a balconette that actually lifts without digging in. Worth the visit.",
    author: "Grace K.",
    stars: 5,
    location: "Yaya",
  },
  {
    quote:
      "Free fitting with no pressure to buy. I came to check my size and left with so much more confidence about what suits my shape.",
    author: "Verified customer",
    stars: 5,
    location: "Sarit",
  },
  {
    quote:
      "The team helped me find a sports bra for running that stays put. I did not know high-impact sizing could feel this comfortable.",
    author: "Faith N.",
    stars: 5,
    location: "Yaya",
  },
  {
    quote:
      "Warm, welcoming boutique. Extended sizes and premium brands in one place — it feels built for fuller busts, not an afterthought.",
    author: "Anne W.",
    stars: 5,
    location: "Sarit",
  },
  {
    quote:
      "Walked into Yaya sceptical and walked out with a bra that changed my posture. The fitter explained every detail.",
    author: "Verified customer",
    stars: 5,
    location: "Yaya",
  },
  {
    quote:
      "Quick WhatsApp reply before my visit, then a proper fitting in store. Helpful for busy weeks when you want to plan ahead.",
    author: "Lucy A.",
    stars: 4,
    location: "Sarit",
  },
];
