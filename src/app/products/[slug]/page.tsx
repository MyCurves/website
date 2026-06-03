import { notFound } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';
import {
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
} from '@/lib/products';

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
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

  return (
    <ProductDetail
      product={product}
      relatedProducts={getRelatedProducts(product)}
    />
  );
}
