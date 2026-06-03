import Link from 'next/link';
import Image from 'next/image';
import type { ProductListingItem } from '@/types/product';

interface FeaturedProductsProps {
  products: ProductListingItem[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-heading uppercase text-center mb-10">
          Embrace Your Curves
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link 
              key={product.id}
              href={`/products/${product.slug}`}
              className="group bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                {/* Title */}
                <h3 className="text-base font-heading line-clamp-2 mt-4">
                  {product.title}
                </h3>

                {/* Price */}
                <p className="text-lg font-bold text-primary mt-2">
                  KSh {(product.salePrice ?? product.price).toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Link 
            href="/bras"
            className="bg-primary text-white px-8 py-3 rounded-full font-heading hover:bg-primary/90 transition-colors duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
