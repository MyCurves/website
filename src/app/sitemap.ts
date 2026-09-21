import type { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/products";
import { getAllSitePages } from "@/lib/site-pages";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/our-story",
    "/contact",
    "/find-your-size",
    "/bras",
    "/panties",
    "/shapewear",
    "/on-sale",
    "/guides",
    "/guides/how-to-measure-bra-size-at-home",
  ];

  const productRoutes = getAllProducts().map((product) => ({
    url: absoluteUrl(`/products/${product.slug}`),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const contentPages = getAllSitePages()
    .filter((page) => !["cart"].includes(page.slug))
    .map((page) => ({
      url: absoluteUrl(`/${page.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));

  const corePages = staticRoutes.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: (path === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  return [...corePages, ...productRoutes, ...contentPages];
}
