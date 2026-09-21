import { Suspense } from 'react';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import ProductListing from '@/components/ProductListing';
import { getCategoryPage } from '@/lib/categories';
import { getOnSaleProducts, toListingProducts } from '@/lib/products';

export default function OnSalePage() {
  const category = getCategoryPage('on-sale');
  const products = toListingProducts(getOnSaleProducts());

  return (
    <>
      <Header />
      <main className="pt-[129px]">
        <Suspense fallback={<div className="max-w-7xl mx-auto px-6 py-16 text-gray-600">Loading products...</div>}>
          <ProductListing
            title={category.title}
            description={category.description}
            products={products}
          />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
