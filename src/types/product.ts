export type ProductCategory = "bras" | "panties" | "shapewear" | "sports-bras";

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  slug: string;
  title: string;
  category: ProductCategory;
  price: number;
  salePrice?: number;
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
  price: number;
  salePrice?: number;
  image: string;
  slug: string;
  category?: string;
}
