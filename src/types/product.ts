export type ProductCategory = "bras" | "panties" | "shapewear" | "sports-bras";

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  slug: string;
  title: string;
  brand: string;
  category: ProductCategory;
  price?: number | null;
  salePrice?: number | null;
  priceNote?: string;
  featured: boolean;
  description: string;
  body: string;
  images: string[];
  features: string[];
  colors: ProductColor[];
  bandSizes: number[];
  cupSizes: string[];
}

export interface ProductListingItem {
  id: string;
  title: string;
  brand: string;
  price?: number | null;
  salePrice?: number | null;
  image: string;
  slug: string;
  category: ProductCategory;
  featured: boolean;
  colors: string[];
  description: string;
  features: string[];
}
