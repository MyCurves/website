import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import ProductDetail from "@/components/ProductDetail";
import {
  buildBreadcrumbSchema,
  buildProductSchema,
  createPageMetadata,
} from "@/lib/seo";
import {
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/products";

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {};
  }

  return createPageMetadata({
    title: product.title,
    description: product.description,
    path: `/products/${product.slug}`,
    image: product.images[0],
  });
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const categoryLabel =
    product.category === "sports-bras" ? "Sports Bras" : "Bras";
  const categoryPath =
    product.category === "sports-bras"
      ? "/bras?category=sports-bras"
      : "/bras";

  return (
    <>
      <JsonLd
        data={[
          buildProductSchema(product),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: categoryLabel, path: categoryPath },
            { name: product.title, path: `/products/${product.slug}` },
          ]),
        ]}
      />
      <ProductDetail
        product={product}
        relatedProducts={getRelatedProducts(product)}
      />
    </>
  );
}
