import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface SitePage {
  slug: string;
  title: string;
  description: string;
  body: string;
}

const PAGES_DIR = path.join(process.cwd(), "content", "pages");

export function getAllSitePages(): SitePage[] {
  if (!fs.existsSync(PAGES_DIR)) {
    return [];
  }

  return fs
    .readdirSync(PAGES_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { data, content } = matter(
        fs.readFileSync(path.join(PAGES_DIR, file), "utf8")
      );

      return {
        slug: String(data.slug ?? slug),
        title: String(data.title ?? slug),
        description: String(data.description ?? ""),
        body: content.trim(),
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getSitePage(slug: string): SitePage | undefined {
  return getAllSitePages().find((page) => page.slug === slug);
}
