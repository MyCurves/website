import { Suspense } from 'react';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import ProductListing from '@/components/ProductListing';
import { JsonLd } from '@/components/JsonLd';
import { getCategoryPage } from '@/lib/categories';
import { buildBreadcrumbSchema, createPageMetadata } from '@/lib/seo';
import { getOnSaleProducts, toListingProducts } from '@/lib/products';

export const metadata = createPageMetadata({
  title: 'On Sale',
  description:
    'Special offers on bras and lingerie at MyCurves Nairobi. Visit Sarit Centre or Yaya Centre while stocks last, or ask on WhatsApp.',
  path: '/on-sale',
});

export default function OnSalePage() {
  const category = getCategoryPage('on-sale');
  const products = toListingProducts(getOnSaleProducts());

  const seoIntro =
    category.body ||
    'Sale items at MyCurves change with stock at our Sarit and Yaya boutiques. WhatsApp us for current offers or visit in store during opening hours.';

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'On Sale', path: '/on-sale' },
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
