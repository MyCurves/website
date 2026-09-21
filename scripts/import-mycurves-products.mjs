#!/usr/bin/env node

/**
 * Import MyCurves product pack into content/products + public/uploads/products.
 * Usage: node scripts/import-mycurves-products.mjs <path-to-zip-or-extracted-dir>
 */

import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PRODUCTS_DIR = join(ROOT, "content", "products");
const UPLOADS_DIR = join(ROOT, "public", "uploads", "products");

const COLOR_HEX = {
  black: "#000000",
  navy: "#1B2A4A",
  lipstick: "#C41E3A",
  "sienna rose": "#C67B5C",
  leopard: "#4A3728",
};

const FOLDER_CONFIG = [
  {
    folder: "Curvy Kate Boost Me UP",
    slug: "curvy-kate-boost-me-up",
    category: "bras",
    color: "Black",
    featured: true,
    price: 5900,
    priceNote: "Limited sizes available — please contact the branches.",
  },
  {
    folder: "Curvy Kate Spotlight",
    slug: "curvy-kate-spotlight",
    category: "bras",
    color: "Black",
    featured: true,
    price: 6500,
  },
  {
    folder: "Curvy Kate Zen",
    slug: "curvy-kate-zen",
    category: "bras",
    color: "Black",
    featured: false,
    price: 4900,
  },
  {
    folder: "CurvyKate Sports Bra",
    slug: "curvy-kate-everymove-sports-bra",
    category: "sports-bras",
    color: "Black",
    featured: true,
    price: 8500,
  },
  {
    folder: "Panache 365 Black",
    slug: "panache-365-black",
    category: "bras",
    color: "Black",
    featured: false,
    price: 7700,
    priceNote: "Limited sizes available — please contact the branches.",
  },
  {
    folder: "Panache 365 Lipstick",
    slug: "panache-365-lipstick",
    category: "bras",
    color: "Lipstick",
    featured: false,
    price: 7700,
    priceNote: "Limited sizes available — please contact the branches.",
  },
  {
    folder: "Panache Black Activate Sports Bra",
    slug: "panache-activate-sports-bra",
    category: "sports-bras",
    color: "Black",
    featured: false,
    price: 7900,
  },
  {
    folder: "Panache Estel Navy",
    slug: "panache-estel-navy",
    category: "bras",
    color: "Navy",
    featured: false,
    price: 8900,
    priceNote: "Matching brief: KSh 4,500",
  },
  {
    folder: "Panache Nina",
    slug: "panache-nina",
    category: "bras",
    color: "Black Leopard",
    featured: false,
    price: 6900,
  },
  {
    folder: "Panache Sophia Plunge Bra",
    slug: "panache-sophia-plunge",
    category: "bras",
    color: "Sienna Rose",
    featured: true,
    price: 8700,
    priceNote: "Matching brief: KSh 4,300",
  },
];

function slugifyFilename(name) {
  return name
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseDescription(text) {
  const lines = text.split(/\r?\n/).map((line) => line.trim());
  let brand = "";
  let productName = "";
  const contentLines = [];

  for (const line of lines) {
    const brandMatch = line.match(/^Brand:\s*(.+)$/i);
    if (brandMatch) {
      brand = brandMatch[1].trim();
      continue;
    }

    const productMatch = line.match(/^(?:Product(?: Name)?|Name of product):\s*(.+)$/i);
    if (productMatch) {
      productName = productMatch[1].trim();
      continue;
    }

    if (!line) continue;
    if (/^https?:\/\//.test(line)) continue;
    if (/^(Product Details|Description)$/i.test(line)) continue;
    if (/^Main:/i.test(line) || /^Style Number:/i.test(line)) continue;

    contentLines.push(line.replace(/^[-•]\s*/, "").trim());
  }

  const paragraphs = [];
  const bullets = [];

  for (const line of contentLines) {
    const isFeatureLine =
      line.startsWith("•") ||
      line.startsWith("-") ||
      (/^[A-Z][A-Z\s]{2,}:/.test(line) && line.length < 140) ||
      (paragraphs.length > 0 &&
        line.length < 160 &&
        !line.endsWith(".") &&
        bullets.length > 0);

    if (paragraphs.length === 0 && line.length > 40) {
      paragraphs.push(line);
      continue;
    }

    if (
      paragraphs.length > 0 &&
      (isFeatureLine ||
        (line.length < 160 && !line.endsWith(".") && bullets.length > 0) ||
        (line.length < 120 && !line.endsWith(".")))
    ) {
      bullets.push(line);
    } else if (line.length > 40) {
      paragraphs.push(line);
    } else {
      bullets.push(line);
    }
  }

  const shortDescription = paragraphs[0] ?? bullets[0] ?? productName;
  const body = paragraphs.slice(0, 2).join("\n\n");

  return { brand, productName, shortDescription, body, bullets };
}

function toFrontmatter(product) {
  const lines = ["---"];
  lines.push(`title: ${JSON.stringify(product.title)}`);
  lines.push(`slug: ${JSON.stringify(product.slug)}`);
  lines.push(`brand: ${JSON.stringify(product.brand)}`);
  lines.push(`category: ${JSON.stringify(product.category)}`);
  lines.push(`featured: ${product.featured}`);
  if (product.price !== undefined) {
    lines.push(`price: ${product.price}`);
  }
  if (product.salePrice !== undefined) {
    lines.push(`salePrice: ${product.salePrice}`);
  }
  if (product.priceNote) {
    lines.push(`priceNote: ${JSON.stringify(product.priceNote)}`);
  }
  lines.push(`description: ${JSON.stringify(product.description)}`);

  if (product.images.length) {
    lines.push("images:");
    for (const image of product.images) {
      lines.push(`  - ${JSON.stringify(image)}`);
    }
  }

  if (product.features.length) {
    lines.push("features:");
    for (const feature of product.features) {
      lines.push(`  - ${JSON.stringify(feature)}`);
    }
  }

  if (product.colors.length) {
    lines.push("colors:");
    for (const color of product.colors) {
      lines.push(`  - name: ${JSON.stringify(color.name)}`);
      lines.push(`    hex: ${JSON.stringify(color.hex)}`);
    }
  }

  lines.push("---", "", product.body || product.description);
  return lines.join("\n");
}

function resolveSourceDir(inputPath) {
  if (!inputPath) {
    throw new Error("Provide path to zip or extracted directory");
  }

  if (inputPath.endsWith(".zip")) {
    const tmp = join(ROOT, ".tmp-product-import");
    rmSync(tmp, { recursive: true, force: true });
    mkdirSync(tmp, { recursive: true });
    execSync(`unzip -q "${inputPath}" -d "${tmp}"`);
    const extracted = join(tmp, "extracted");
    return existsSync(extracted) ? extracted : tmp;
  }

  return inputPath;
}

function main() {
  const inputPath = process.argv[2];
  const sourceDir = resolveSourceDir(inputPath);

  rmSync(PRODUCTS_DIR, { recursive: true, force: true });
  mkdirSync(PRODUCTS_DIR, { recursive: true });
  mkdirSync(UPLOADS_DIR, { recursive: true });

  for (const file of readdirSync(UPLOADS_DIR)) {
    if (file !== ".gitkeep") {
      rmSync(join(UPLOADS_DIR, file));
    }
  }

  for (const config of FOLDER_CONFIG) {
    const folderPath = join(sourceDir, config.folder);
    if (!existsSync(folderPath)) {
      throw new Error(`Missing product folder: ${config.folder}`);
    }

    const descriptionPath = join(folderPath, "Description.txt");
    const descriptionText = readFileSync(descriptionPath, "utf8");
    const parsed = parseDescription(descriptionText);

    const brand = parsed.brand || config.folder.split(" ")[0];
    const productName = parsed.productName || config.folder;
    let title = `${brand} ${productName}`.replace(/\s+/g, " ").trim();
    if (
      config.color &&
      !title.toLowerCase().includes(config.color.toLowerCase())
    ) {
      title = `${title} ${config.color}`;
    }

    const imageFiles = readdirSync(folderPath)
      .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
      .sort();

    const images = [];
    for (const imageFile of imageFiles) {
      const destName = `${config.slug}-${slugifyFilename(imageFile)}${extname(imageFile).toLowerCase()}`;
      cpSync(join(folderPath, imageFile), join(UPLOADS_DIR, destName));
      images.push(`/uploads/products/${destName}`);
    }

    const colorKey = config.color.toLowerCase();
    const hex =
      COLOR_HEX[colorKey] ??
      COLOR_HEX[colorKey.replace(/\s+leopard$/, "")] ??
      "#888888";

    const product = {
      title,
      slug: config.slug,
      brand,
      category: config.category,
      featured: config.featured,
      price: config.price,
      salePrice: config.salePrice,
      priceNote: config.priceNote,
      description: parsed.shortDescription,
      body: parsed.body,
      features: parsed.bullets.slice(0, 12),
      images,
      colors: [{ name: config.color, hex }],
    };

    writeFileSync(
      join(PRODUCTS_DIR, `${config.slug}.md`),
      toFrontmatter(product),
      "utf8"
    );

    console.log(`✓ ${config.slug}`);
  }

  console.log(`\nImported ${FOLDER_CONFIG.length} products.`);
}

main();
