'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import { WhatsAppIcon } from '@/components/icons';
import type { Product } from '@/types/product';

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetail({
  product,
  relatedProducts,
}: ProductDetailProps) {
  const displayImages =
    product.images.length > 0
      ? product.images
      : ['/images/categories/Bras-1.jpg'];
  const displayPrice = product.salePrice ?? product.price;

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedBand, setSelectedBand] = useState('');
  const [selectedCup, setSelectedCup] = useState('');
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    if (product.bandSizes.length && (!selectedBand || !selectedCup)) {
      alert('Please select both band and cup size');
      return;
    }
    alert(
      `Added to cart: ${product.title} - Qty: ${quantity}${
        selectedBand && selectedCup ? ` - Size ${selectedBand}${selectedCup}` : ''
      }`
    );
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in the ${product.title} (KSh ${displayPrice.toLocaleString()}). Can you tell me more?`
    );
    window.open(`https://wa.me/254746844227?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-[129px]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div
                className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden cursor-zoom-in group"
                onClick={() => setIsLightboxOpen(true)}
              >
                <Image
                  src={displayImages[selectedImage]}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {displayImages.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {displayImages.map((image, index) => (
                    <button
                      key={image + index}
                      type="button"
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square relative bg-gray-100 rounded-lg overflow-hidden border-2 transition ${
                        selectedImage === index
                          ? 'border-[#E6007E]'
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.title} - View ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 25vw, 12vw"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl lg:text-4xl font-heading font-bold">
                {product.title}
              </h1>

              <div className="flex items-baseline gap-3">
                <div className="text-4xl font-bold text-[#E6007E]">
                  KSh {displayPrice.toLocaleString()}
                </div>
                {product.salePrice && (
                  <div className="text-xl text-gray-400 line-through">
                    KSh {product.price.toLocaleString()}
                  </div>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              {product.colors.length > 0 && (
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Color: {product.colors[selectedColor]?.name}
                  </label>
                  <div className="flex gap-3">
                    {product.colors.map((color, index) => (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => setSelectedColor(index)}
                        className={`w-10 h-10 rounded-full border-2 transition ${
                          selectedColor === index
                            ? 'border-[#E6007E] shadow-lg'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              )}

              {product.bandSizes.length > 0 && product.cupSizes.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="band-size" className="block text-sm font-medium mb-2">
                      Band Size
                    </label>
                    <select
                      id="band-size"
                      value={selectedBand}
                      onChange={(e) => setSelectedBand(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6007E]"
                    >
                      <option value="">Select</option>
                      {product.bandSizes.map((band) => (
                        <option key={band} value={band}>
                          {band}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="cup-size" className="block text-sm font-medium mb-2">
                      Cup Size
                    </label>
                    <select
                      id="cup-size"
                      value={selectedCup}
                      onChange={(e) => setSelectedCup(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6007E]"
                    >
                      <option value="">Select</option>
                      {product.cupSizes.map((cup) => (
                        <option key={cup} value={cup}>
                          {cup}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              <Link
                href="/find-your-size"
                className="text-[#E6007E] text-sm hover:underline inline-block"
              >
                Need help finding your size?
              </Link>

              <div>
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full py-4 bg-[#E6007E] text-white font-medium rounded-lg hover:bg-[#c50069] transition text-lg"
              >
                Add to Cart
              </button>

              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="w-full py-4 border-2 border-[#25D366] text-[#25D366] font-medium rounded-lg hover:bg-[#25D366] hover:text-white transition text-lg flex items-center justify-center gap-3"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Ask about this product
              </button>

              {product.features.length > 0 && (
                <div className="pt-6 border-t">
                  <h3 className="font-heading font-bold mb-3">Product Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-[#E6007E] mt-1">•</span>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="mt-16">
            <div className="border-b border-gray-200">
              <div className="flex gap-8">
                {['description', 'size-guide', 'shipping', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 font-medium capitalize transition ${
                      activeTab === tab
                        ? 'text-[#E6007E] border-b-2 border-[#E6007E]'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            <div className="py-8">
              {activeTab === 'description' && (
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {product.body || product.description}
                  </p>
                </div>
              )}

              {activeTab === 'size-guide' && (
                <div>
                  <h3 className="text-xl font-heading font-bold mb-4">Size Guide</h3>
                  <p className="mb-6 text-gray-600">
                    Finding your perfect fit is essential for comfort and support.
                  </p>
                  <Link href="/find-your-size" className="text-[#E6007E] hover:underline">
                    Use our size calculator
                  </Link>
                </div>
              )}

              {activeTab === 'shipping' && (
                <div>
                  <h3 className="text-xl font-heading font-bold mb-4">Shipping & Returns</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Free delivery within Nairobi for orders over KSh 5,000</li>
                    <li>Standard delivery: 2-5 business days</li>
                    <li>30-day return policy on unworn items with tags attached</li>
                  </ul>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-xl font-heading font-bold mb-4">Customer Reviews</h3>
                  <p className="text-gray-600">Reviews coming soon!</p>
                </div>
              )}
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-heading font-bold mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.slug}
                    href={`/products/${relatedProduct.slug}`}
                    className="group"
                  >
                    <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden mb-3">
                      <Image
                        src={relatedProduct.images[0] ?? '/images/categories/Bras-1.jpg'}
                        alt={relatedProduct.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <h3 className="font-medium text-sm mb-1 group-hover:text-[#E6007E] transition line-clamp-2">
                      {relatedProduct.title}
                    </h3>
                    <p className="text-[#E6007E] font-bold">
                      KSh {(relatedProduct.salePrice ?? relatedProduct.price).toLocaleString()}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
          >
            ×
          </button>
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={displayImages[selectedImage]}
              alt={product.title}
              width={1200}
              height={1200}
              className="object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
