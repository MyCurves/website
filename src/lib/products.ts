import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type {
  Product,
  ProductCategory,
  ProductColor,
  ProductListingItem,
} from "@/types/product";

const PRODUCTS_DIR = path.join(process.cwd(), "content", "products");

function parseListField(value: unknown, key?: string): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (typeof item === "string") return item;
      if (typeof item === "object" && item !== null && key && key in item) {
        return String((item as Record<string, unknown>)[key]);
      }
      return "";
    })
    .filter(Boolean);
}

function parseNumberListField(value: unknown, key?: string): number[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (typeof item === "number") return item;
      if (typeof item === "object" && item !== null && key && key in item) {
        return Number((item as Record<string, unknown>)[key]);
      }
      return Number(item);
    })
    .filter((n) => !Number.isNaN(n));
}

function parseColors(value: unknown): ProductColor[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item): item is ProductColor => {
      return (
        typeof item === "object" &&
        item !== null &&
        "name" in item &&
        "hex" in item
      );
    })
    .map((item) => ({
      name: String(item.name),
      hex: String(item.hex),
    }));
}

function parseProduct(slug: string, raw: string): Product {
  const { data, content } = matter(raw);

  const images = parseListField(data.images, "image");
  if (images.length === 0 && data.image) {
    images.push(String(data.image));
  }

  const price =
    data.price !== undefined && data.price !== null && data.price !== ""
      ? Number(data.price)
      : undefined;
  const salePrice =
    data.salePrice !== undefined && data.salePrice !== null && data.salePrice !== ""
      ? Number(data.salePrice)
      : undefined;

  const title = String(data.title ?? slug);
  const brand = String(
    data.brand ?? title.split(" ")[0] ?? "MyCurves"
  );

  return {
    slug: String(data.slug ?? slug),
    title,
    brand,
    category: String(data.category ?? "bras") as ProductCategory,
    price: price !== undefined && !Number.isNaN(price) ? price : undefined,
    salePrice:
      salePrice !== undefined && !Number.isNaN(salePrice) ? salePrice : undefined,
    priceNote:
      data.priceNote !== undefined && data.priceNote !== null
        ? String(data.priceNote)
        : undefined,
    featured: Boolean(data.featured),
    description: String(data.description ?? ""),
    body: content.trim(),
    images,
    features: parseListField(data.features, "feature"),
    colors: parseColors(data.colors),
    bandSizes: parseNumberListField(data.bandSizes, "size"),
    cupSizes: parseListField(data.cupSizes, "cup"),
  };
}

function readProductFiles(): Product[] {
  if (!fs.existsSync(PRODUCTS_DIR)) {
    return [];
  }

  return fs
    .readdirSync(PRODUCTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(PRODUCTS_DIR, file), "utf8");
      return parseProduct(slug, raw);
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getAllProducts(): Product[] {
  return readProductFiles();
}

export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find((product) => product.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return getAllProducts().filter((product) => product.category === category);
}

export function getFeaturedProducts(limit = 3): Product[] {
  return getAllProducts()
    .filter((product) => product.featured)
    .slice(0, limit);
}

export function getOnSaleProducts(): Product[] {
  return getAllProducts().filter(
    (product) =>
      product.salePrice !== undefined &&
      product.salePrice !== null &&
      product.salePrice > 0
  );
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return getAllProducts()
    .filter(
      (item) => item.category === product.category && item.slug !== product.slug
    )
    .slice(0, limit);
}

export function toListingProduct(product: Product): ProductListingItem {
  return {
    id: product.slug,
    title: product.title,
    brand: product.brand,
    price: product.price,
    salePrice: product.salePrice,
    image: product.images[0] ?? "/images/categories/Bras-1.jpg",
    slug: product.slug,
    category: product.category,
    colors: product.colors.map((color) => color.name),
    description: product.description,
    features: product.features,
  };
}

export function searchProducts(query: string, products: Product[]): Product[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return products;

  return products.filter((product) => {
    const haystack = [
      product.title,
      product.brand,
      product.description,
      product.body,
      product.category,
      ...product.features,
      ...product.colors.map((color) => color.name),
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalized);
  });
}

export function getUniqueBrands(products: Product[]): string[] {
  return [...new Set(products.map((product) => product.brand))].sort();
}

export function toListingProducts(products: Product[]): ProductListingItem[] {
  return products.map(toListingProduct);
}
