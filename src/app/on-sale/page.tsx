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
        <ProductListing
          title={category.title}
          description={category.description}
          products={products}
        />
      </main>
      <Footer />
    </>
  );
}
