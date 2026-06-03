#!/usr/bin/env node

/**
 * Validates internal href="/..." links in src/ against known app routes.
 * Run: node scripts/check-links.mjs
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "src");

const STATIC_ROUTES = new Set([
  "/",
  "/about",
  "/our-story",
  "/contact",
  "/find-your-size",
  "/bras",
  "/panties",
  "/shapewear",
  "/on-sale",
  "/videos",
  "/testimonials",
  "/help",
  "/returns",
  "/deliveries",
  "/cart",
]);

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, files);
    else if (/\.(tsx|ts|jsx|js|md)$/.test(entry)) files.push(full);
  }
  return files;
}

function productSlugs() {
  const dir = join(ROOT, "content", "products");
  try {
    return readdirSync(dir)
      .filter((f) => f.endsWith(".md"))
      .map((f) => `/products/${f.replace(/\.md$/, "")}`);
  } catch {
    return [];
  }
}

function sitePageSlugs() {
  const dir = join(ROOT, "content", "pages");
  try {
    return readdirSync(dir)
      .filter((f) => f.endsWith(".md"))
      .map((f) => `/${f.replace(/\.md$/, "")}`);
  } catch {
    return [];
  }
}

const validRoutes = new Set([
  ...STATIC_ROUTES,
  ...productSlugs(),
  ...sitePageSlugs(),
]);

const hrefPattern = /href=["'](\/(?!\/)[^"'#?]*)/g;
const broken = [];

for (const file of walk(SRC)) {
  const content = readFileSync(file, "utf8");
  let match;
  while ((match = hrefPattern.exec(content)) !== null) {
    const route = match[1].replace(/\/$/, "") || "/";
    if (!validRoutes.has(route)) {
      broken.push({ file: file.replace(ROOT + "\\", "").replace(ROOT + "/", ""), route });
    }
  }
}

if (broken.length) {
  console.error("Broken internal links found:\n");
  for (const item of broken) {
    console.error(`  ${item.route}  →  ${item.file}`);
  }
  process.exit(1);
}

console.log(`✓ All ${validRoutes.size} routes checked — no broken internal links.`);
