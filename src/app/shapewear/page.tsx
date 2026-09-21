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
  title: 'Shapewear',
  description:
    'Smoothing shapewear for curves at MyCurves Nairobi. Visit Sarit Centre or Yaya Centre for fit advice, or enquire on WhatsApp.',
  path: '/shapewear',
});

export default function ShapewearPage() {
  const category = getCategoryPage('shapewear');
  const products = toListingProducts(getProductsByCategory('shapewear'));

  const seoIntro =
    category.body ||
    'Shapewear at MyCurves is selected for comfort and confidence under everyday outfits. Message us on WhatsApp or visit our Westlands or Kilimani boutiques to check current styles.';

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Shapewear', path: '/shapewear' },
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
