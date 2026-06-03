import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface CategoryPage {
  slug: string;
  title: string;
  description: string;
  body: string;
}

const CATEGORIES_DIR = path.join(process.cwd(), "content", "categories");

const defaults: Record<string, CategoryPage> = {
  bras: {
    slug: "bras",
    title: "Bras",
    description:
      "Discover our collection of comfortable, supportive bras in sizes 32A to 48H",
    body: "",
  },
  panties: {
    slug: "panties",
    title: "Panties",
    description: "Comfortable panties in all sizes and styles",
    body: "",
  },
  shapewear: {
    slug: "shapewear",
    title: "Shapewear",
    description: "Smooth, shape, and support your curves",
    body: "",
  },
  "on-sale": {
    slug: "on-sale",
    title: "On Sale",
    description: "Don't miss out on these amazing deals",
    body: "",
  },
};

export function getCategoryPage(slug: string): CategoryPage {
  const filePath = path.join(CATEGORIES_DIR, `${slug}.md`);

  if (fs.existsSync(filePath)) {
    const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
    return {
      slug: String(data.slug ?? slug),
      title: String(data.title ?? slug),
      description: String(data.description ?? ""),
      body: content.trim(),
    };
  }

  return defaults[slug] ?? {
    slug,
    title: slug,
    description: "",
    body: "",
  };
}
