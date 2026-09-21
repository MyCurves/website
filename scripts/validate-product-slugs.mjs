import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PRODUCTS_DIR = path.join(process.cwd(), "content", "products");

if (!fs.existsSync(PRODUCTS_DIR)) {
  console.error("Missing content/products directory");
  process.exit(1);
}

const files = fs.readdirSync(PRODUCTS_DIR).filter((file) => file.endsWith(".md"));
const slugs = new Set();
const errors = [];

for (const file of files) {
  const fileSlug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(PRODUCTS_DIR, file), "utf8");
  const { data } = matter(raw);
  const slug = String(data.slug ?? fileSlug);

  if (!slug) {
    errors.push(`${file}: missing slug`);
    continue;
  }

  if (slugs.has(slug)) {
    errors.push(`Duplicate slug "${slug}"`);
  }
  slugs.add(slug);

  if (slug !== fileSlug) {
    errors.push(
      `${file}: frontmatter slug "${slug}" does not match filename "${fileSlug}"`
    );
  }

  const href = `/products/${slug}`;
  if (!/^\/products\/[a-z0-9-]+$/.test(href)) {
    errors.push(`${file}: invalid product href "${href}"`);
  }
}

if (errors.length > 0) {
  console.error("Product slug validation failed:\n" + errors.map((e) => `  - ${e}`).join("\n"));
  process.exit(1);
}

console.log(`Validated ${slugs.size} product slugs → /products/[slug]`);
for (const slug of [...slugs].sort()) {
  console.log(`  /products/${slug}`);
}
