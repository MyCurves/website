import { Suspense } from 'react';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import ProductListing from '@/components/ProductListing';
import { JsonLd } from '@/components/JsonLd';
import { getCategoryPage } from '@/lib/categories';
import { buildBreadcrumbSchema, createPageMetadata } from '@/lib/seo';
import {
  getProductsByCategory,
  toListingProducts,
} from '@/lib/products';

export const metadata = createPageMetadata({
  title: 'Bras & Sports Bras',
  description:
    'Shop plus-size bras and sports bras from Curvy Kate and Panache at MyCurves Nairobi. Free fittings at Sarit and Yaya. Order on WhatsApp.',
  path: '/bras',
});

export default function BrasPage() {
  const category = getCategoryPage('bras');
  const products = toListingProducts([
    ...getProductsByCategory('bras'),
    ...getProductsByCategory('sports-bras'),
  ]);

  const seoIntro =
    category.body ||
    'Browse balconette, full cup, t-shirt, plunge, and high-impact sports bras in Nairobi. Every style is chosen for fuller bust support — visit Sarit Centre or Yaya Centre for a fitting, or order on WhatsApp.';

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Bras', path: '/bras' },
        ])}
      />
      <Header />
      <main className="pt-[129px]">
        <Suspense fallback={<div className="max-w-7xl mx-auto px-6 py-16 text-gray-600">Loading products...</div>}>
          <ProductListing
            title={category.title}
            description={category.description}
            seoIntro={seoIntro}
            products={products}
          />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
