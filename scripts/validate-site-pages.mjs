import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PAGES_DIR = path.join(process.cwd(), "content", "pages");

const REQUIRED_SLUGS = [
  "returns",
  "deliveries",
  "help",
  "testimonials",
  "videos",
  "cart",
];

if (!fs.existsSync(PAGES_DIR)) {
  console.error("Missing content/pages directory");
  process.exit(1);
}

const files = fs.readdirSync(PAGES_DIR).filter((file) => file.endsWith(".md"));
const slugs = new Set();
const errors = [];

for (const file of files) {
  const fileSlug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(PAGES_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const slug = String(data.slug ?? fileSlug);

  if (slugs.has(slug)) {
    errors.push(`Duplicate slug "${slug}"`);
  }
  slugs.add(slug);

  if (slug !== fileSlug) {
    errors.push(
      `${file}: frontmatter slug "${slug}" does not match filename "${fileSlug}"`
    );
  }

  if (slug !== "cart" && !content.trim()) {
    errors.push(`${file}: missing page body content`);
  }
}

for (const slug of REQUIRED_SLUGS) {
  if (!slugs.has(slug)) {
    errors.push(`Missing required CMS page: ${slug}.md`);
  }
}

if (errors.length > 0) {
  console.error("Site page validation failed:\n" + errors.map((e) => `  - ${e}`).join("\n"));
  process.exit(1);
}

console.log(`Validated ${slugs.size} CMS pages → /[slug]`);
for (const slug of [...slugs].sort()) {
  console.log(`  /${slug}`);
}
