#!/usr/bin/env node

/**
 * Seeds content/products/*.md from extracted sample catalog data.
 * Run: node scripts/seed-products.mjs
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "content", "products");

const defaultBands = [32, 34, 36, 38, 40, 42, 44, 46, 48];
const defaultCups = ["A", "B", "C", "D", "DD", "E", "F", "FF", "G", "GG", "H"];
const defaultColors = [
  { name: "Black", hex: "#000000" },
  { name: "Nude", hex: "#E8B89B" },
];

function md(product) {
  const lines = ["---"];
  lines.push(`title: ${JSON.stringify(product.title)}`);
  lines.push(`slug: ${JSON.stringify(product.slug)}`);
  lines.push(`category: ${JSON.stringify(product.category)}`);
  lines.push(`price: ${product.price}`);
  if (product.salePrice) lines.push(`salePrice: ${product.salePrice}`);
  lines.push(`featured: ${product.featured ?? false}`);
  lines.push(`description: ${JSON.stringify(product.description)}`);

  if (product.images?.length) {
    lines.push("images:");
    for (const image of product.images) {
      lines.push(`  - ${JSON.stringify(image)}`);
    }
  }

  const features = product.features ?? [];
  if (features.length) {
    lines.push("features:");
    for (const feature of features) {
      lines.push(`  - ${JSON.stringify(feature)}`);
    }
  }

  const colors = product.colors ?? defaultColors;
  if (colors.length) {
    lines.push("colors:");
    for (const color of colors) {
      lines.push(`  - name: ${JSON.stringify(color.name)}`);
      lines.push(`    hex: ${JSON.stringify(color.hex)}`);
    }
  }

  const bandSizes = product.bandSizes ?? defaultBands;
  if (bandSizes.length) {
    lines.push("bandSizes:");
    for (const size of bandSizes) {
      lines.push(`  - ${size}`);
    }
  }

  const cupSizes = product.cupSizes ?? defaultCups;
  if (cupSizes.length) {
    lines.push("cupSizes:");
    for (const cup of cupSizes) {
      lines.push(`  - ${JSON.stringify(cup)}`);
    }
  }

  lines.push("---", "", product.body ?? product.description);
  return lines.join("\n");
}

const products = [
  {
    slug: "spotlight-bra",
    title: "Curvy Kate Spotlight Full Cup Side Support Bra Black",
    category: "bras",
    price: 6500,
    salePrice: 4500,
    featured: true,
    description:
      "Full coverage support bra designed for ultimate comfort and style.",
    images: ["/images/categories/Bras-1.jpg"],
    features: [
      "Underwire support for excellent lift",
      "Full cup coverage for maximum support",
      "Available in sizes 32-48 (Band) and A-H (Cup)",
      "Beautiful lace detailing",
      "Adjustable straps for custom fit",
    ],
    body: `The Curvy Kate Spotlight Full Cup Bra is expertly crafted to provide maximum support and comfort for fuller busts. Featuring a beautiful floral lace design, this bra combines fashion with function.`,
  },
  {
    slug: "everyday-comfort-bra",
    title: "Everyday Comfort Wireless Bra",
    category: "bras",
    price: 4500,
    description: "Wire-free comfort bra perfect for everyday wear with seamless design.",
    images: ["/images/categories/Bras-1.jpg"],
    features: [
      "Wire-free design for all-day comfort",
      "Seamless construction",
      "Soft, breathable fabric",
    ],
    body: `Experience ultimate comfort with our Everyday Comfort Wireless Bra. Designed without underwire, this bra provides gentle support while maintaining a natural shape.`,
  },
  {
    slug: "lace-plunge-bra",
    title: "Elegant Lace Plunge Bra",
    category: "bras",
    price: 5800,
    description: "Beautiful plunge bra with delicate lace detailing for a romantic look.",
    images: ["/images/categories/Bras-1.jpg"],
    features: ["Deep plunge neckline", "Delicate lace detailing", "Underwire support"],
    body: `This stunning Elegant Lace Plunge Bra combines beauty and support. The deep plunge neckline is perfect for low-cut tops and dresses.`,
  },
  {
    slug: "sports-support-bra",
    title: "Curvy Kate Everymove Wired Multiway Sports Bra Black",
    category: "sports-bras",
    price: 8500,
    salePrice: 6000,
    featured: true,
    description: "Maximum support sports bra designed for high-impact activities.",
    images: ["/images/categories/Sportswear-1.jpg"],
    features: [
      "High-impact support",
      "Moisture-wicking fabric",
      "Multiway strap options",
    ],
    body: `Get the support you need during your most intense workouts with our High Impact Sports Bra.`,
  },
  {
    slug: "luxe-strapless-bra",
    title: "Curvy Kate Luxe Black Strapless Bra",
    category: "bras",
    price: 7300,
    salePrice: 5200,
    featured: true,
    description: "Strapless bra with exceptional support and a smooth silhouette.",
    images: ["/images/categories/lovelace-black-1.jpg"],
    features: ["Strapless design", "Non-slip band", "Smooth under clothing"],
    body: `Freedom never looked this good. Our best-selling strapless bra is designed for a flawless look without the straps.`,
  },
  {
    slug: "curvy-kate-full-cup",
    title: "Curvy Kate Full Cup Bra",
    category: "bras",
    price: 6500,
    description: "Supportive full cup bra with side support panels.",
    images: ["/images/categories/Bras-1.jpg"],
  },
  {
    slug: "elomi-matilda-plunge",
    title: "Elomi Matilda Plunge Bra",
    category: "bras",
    price: 7200,
    salePrice: 5000,
    description: "Plunge bra with embroidered tulle and side support.",
    images: ["/images/categories/Bras-1.jpg"],
  },
  {
    slug: "panache-envy-balconette",
    title: "Panache Envy Balconette Bra",
    category: "bras",
    price: 6800,
    description: "Balconette bra with stretch lace top cup.",
    images: ["/images/categories/Bras-1.jpg"],
  },
  {
    slug: "freya-deco-moulded-plunge",
    title: "Freya Deco Moulded Plunge Bra",
    category: "bras",
    price: 6200,
    description: "Smooth moulded plunge bra for a seamless look.",
    images: ["/images/categories/Bras-1.jpg"],
  },
  {
    slug: "goddess-keira-banded",
    title: "Goddess Keira Banded Underwire Bra",
    category: "bras",
    price: 7500,
    description: "Banded underwire bra with three-section cup.",
    images: ["/images/categories/Bras-1.jpg"],
  },
  {
    slug: "sculptresse-chi-chi",
    title: "Sculptresse Chi Chi Bra",
    category: "bras",
    price: 6900,
    description: "Full cup bra with side support and lace detail.",
    images: ["/images/categories/Bras-1.jpg"],
  },
  {
    slug: "parfait-charlotte-padded",
    title: "Parfait Charlotte Padded Bra",
    category: "bras",
    price: 5800,
    description: "Padded balconette bra with smooth finish.",
    images: ["/images/categories/Bras-1.jpg"],
  },
  {
    slug: "fantasie-fusion-full-cup",
    title: "Fantasie Fusion Full Cup Side Support Bra",
    category: "bras",
    price: 7100,
    description: "Side support full cup bra for fuller busts.",
    images: ["/images/categories/Bras-1.jpg"],
  },
  {
    slug: "curvy-couture-strapless",
    title: "Curvy Couture Strapless Sensation Multi-Way Bra",
    category: "bras",
    price: 6400,
    description: "Multi-way strapless bra with convertible straps.",
    images: ["/images/categories/Bras-1.jpg"],
  },
  {
    slug: "curvy-kate-smoothie-brazilian",
    title: "Curvy Kate Smoothie Soul Brazilian Brief",
    category: "panties",
    price: 2800,
    salePrice: 1900,
    description: "Soft, breathable cotton brief with a flattering cut.",
    images: ["/images/categories/lovelace-black-1.jpg"],
    bandSizes: [],
    cupSizes: [],
    colors: [{ name: "Black", hex: "#000000" }],
    features: ["Soft cotton blend", "Brazilian cut", "Comfortable everyday wear"],
    body: `Comfort that feels like a hug. Soft, breathable, and oh-so-cute cotton panties for everyday wear.`,
  },
  {
    slug: "elomi-lydia-brief",
    title: "Elomi Lydia Brief",
    category: "panties",
    price: 2500,
    description: "Full brief with stretch lace panels.",
    images: ["/images/categories/lovelace-black-1.jpg"],
    bandSizes: [],
    cupSizes: [],
  },
  {
    slug: "panache-tango-classic",
    title: "Panache Tango Classic Brief",
    category: "panties",
    price: 2600,
    salePrice: 1800,
    description: "Classic brief matching the Tango bra collection.",
    images: ["/images/categories/lovelace-black-1.jpg"],
    bandSizes: [],
    cupSizes: [],
  },
  {
    slug: "fantasie-alex-thong",
    title: "Fantasie Alex Thong",
    category: "panties",
    price: 2200,
    description: "Smooth thong with lace waist detail.",
    images: ["/images/categories/lovelace-black-1.jpg"],
    bandSizes: [],
    cupSizes: [],
  },
  {
    slug: "goddess-kayla-brief",
    title: "Goddess Kayla Brief",
    category: "panties",
    price: 2900,
    description: "Full coverage brief with cotton gusset.",
    images: ["/images/categories/lovelace-black-1.jpg"],
    bandSizes: [],
    cupSizes: [],
  },
  {
    slug: "parfait-jeanie-hipster",
    title: "Parfait Jeanie Hipster",
    category: "panties",
    price: 2400,
    description: "Hipster brief with smooth microfiber fabric.",
    images: ["/images/categories/lovelace-black-1.jpg"],
    bandSizes: [],
    cupSizes: [],
  },
  {
    slug: "spanx-higher-power",
    title: "Spanx Higher Power High-Waisted Shaper",
    category: "shapewear",
    price: 8500,
    salePrice: 6000,
    description: "High-waisted shaper for smooth lines under clothing.",
    images: ["/images/categories/Shapewear-1-scaled.jpg"],
    bandSizes: [],
    cupSizes: [],
    features: ["High-waisted design", "Tummy control", "Smooth silhouette"],
  },
  {
    slug: "maidenform-flexees-torsette",
    title: "Maidenform Flexees Torsette Thigh Slimmer",
    category: "shapewear",
    price: 6800,
    description: "Thigh slimmer with targeted compression zones.",
    images: ["/images/categories/Shapewear-1-scaled.jpg"],
    bandSizes: [],
    cupSizes: [],
  },
  {
    slug: "squeem-perfect-waist",
    title: "Squeem Perfect Waist Firm Compression Cincher",
    category: "shapewear",
    price: 9200,
    salePrice: 6500,
    description: "Firm compression cincher for waist definition.",
    images: ["/images/categories/Shapewear-1-scaled.jpg"],
    bandSizes: [],
    cupSizes: [],
  },
  {
    slug: "miraclesuit-back-magic",
    title: "Miraclesuit Back Magic Shaping Bodybriefer",
    category: "shapewear",
    price: 10500,
    description: "Full body shaper with back smoothing panels.",
    images: ["/images/categories/Shapewear-1-scaled.jpg"],
    bandSizes: [],
    cupSizes: [],
  },
  {
    slug: "tc-fine-tummy-tux",
    title: "TC Fine Intimates Even More Tummy Tux High Waist Brief",
    category: "shapewear",
    price: 7200,
    description: "High waist brief with extra tummy control.",
    images: ["/images/categories/Shapewear-1-scaled.jpg"],
    bandSizes: [],
    cupSizes: [],
  },
  {
    slug: "yummie-rachel-cotton",
    title: "Yummie Rachel Cotton Control Shaping Thong",
    category: "shapewear",
    price: 5800,
    description: "Cotton control thong with light shaping.",
    images: ["/images/categories/Shapewear-1-scaled.jpg"],
    bandSizes: [],
    cupSizes: [],
  },
];

mkdirSync(OUT, { recursive: true });

for (const product of products) {
  writeFileSync(join(OUT, `${product.slug}.md`), md(product), "utf8");
  console.log(`  ✓ content/products/${product.slug}.md`);
}

console.log(`\nSeeded ${products.length} products.`);
