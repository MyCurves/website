import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import ProductListing from '@/components/ProductListing';
import { getCategoryPage } from '@/lib/categories';
import {
  getProductsByCategory,
  toListingProducts,
} from '@/lib/products';

export default function ShapewearPage() {
  const category = getCategoryPage('shapewear');
  const products = toListingProducts(getProductsByCategory('shapewear'));

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
