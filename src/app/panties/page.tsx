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
  title: 'Panties',
  description:
    'Comfortable plus-size panties and briefs at MyCurves Nairobi. Visit Sarit Centre or Yaya Centre, or ask on WhatsApp about stock.',
  path: '/panties',
});

export default function PantiesPage() {
  const category = getCategoryPage('panties');
  const products = toListingProducts(getProductsByCategory('panties'));

  const seoIntro =
    category.body ||
    'MyCurves stocks coordinating briefs and panties to match our bra collections. Ask on WhatsApp or visit Sarit or Yaya to see current styles and sizes in store.';

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Panties', path: '/panties' },
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
