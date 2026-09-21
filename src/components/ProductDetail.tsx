'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import { PriceDisplay } from '@/components/PriceDisplay';
import { WhatsAppIcon } from '@/components/icons';
import { useCart } from '@/hooks/useCart';
import { getProductImageAlt } from '@/lib/seo';
import {
  buildProductOrderMessage,
  buildWhatsAppUrl,
} from '@/lib/whatsapp';
import type { Product } from '@/types/product';

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetail({
  product,
  relatedProducts,
}: ProductDetailProps) {
  const { addItem } = useCart();
  const displayImages =
    product.images.length > 0
      ? product.images
      : ['/images/categories/Bras-1.jpg'];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedBand, setSelectedBand] = useState('');
  const [selectedCup, setSelectedCup] = useState('');
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [addedMessage, setAddedMessage] = useState('');

  const selectedColorName = product.colors[selectedColor]?.name;
  const selectedSize =
    selectedBand && selectedCup ? `${selectedBand}${selectedCup}` : undefined;
  const hasSizes =
    product.bandSizes.length > 0 && product.cupSizes.length > 0;

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const getPageUrl = () =>
    typeof window !== 'undefined' ? window.location.href : '';

  const handleWhatsAppOrder = () => {
    const message = buildProductOrderMessage({
      title: product.title,
      brand: product.brand,
      price: product.price,
      salePrice: product.salePrice,
      priceNote: product.priceNote,
      quantity,
      size: selectedSize,
      color: selectedColorName,
      pageUrl: getPageUrl(),
    });
    window.open(buildWhatsAppUrl(message), '_blank');
  };

  const handleAddToInquiryList = () => {
    addItem({
      slug: product.slug,
      title: product.title,
      brand: product.brand,
      price: product.price,
      salePrice: product.salePrice,
      priceNote: product.priceNote,
      quantity,
      size: selectedSize,
      color: selectedColorName,
    });
    setAddedMessage('Added to your inquiry list. View cart to order on WhatsApp.');
    window.setTimeout(() => setAddedMessage(''), 3000);
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
                  alt={getProductImageAlt(product, selectedImage)}
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
                        alt={`${getProductImageAlt(product, index)} — view ${index + 1}`}
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
              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                  {product.brand}
                </p>
                <h1 className="text-3xl lg:text-4xl font-heading font-bold">
                  {product.title}
                </h1>
              </div>

              <PriceDisplay
                price={product.price}
                salePrice={product.salePrice}
                size="lg"
              />
              {product.priceNote ? (
                <p className="text-sm font-medium text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-3">
                  {product.priceNote}
                </p>
              ) : product.price ? (
                <p className="text-sm text-gray-500">
                  Message us on WhatsApp to confirm your size.
                </p>
              ) : (
                <p className="text-sm text-gray-500">
                  Price on request — ask on WhatsApp for current pricing and size
                  availability.
                </p>
              )}

              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              {product.colors.length > 0 && (
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Colour: {product.colors[selectedColor]?.name}
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

              {hasSizes ? (
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
              ) : (
                <p className="text-sm text-gray-600 bg-pink-50 border border-pink-100 rounded-lg p-4">
                  Sizes are confirmed in-store or on WhatsApp. Message us with your
                  usual band and cup size and we&apos;ll check stock for you.
                </p>
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
                onClick={handleWhatsAppOrder}
                className="w-full py-4 bg-[#25D366] text-white font-medium rounded-lg hover:bg-[#1ebe57] transition text-lg flex items-center justify-center gap-3"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Order on WhatsApp
              </button>

              <button
                type="button"
                onClick={handleAddToInquiryList}
                className="w-full py-4 bg-[#E6007E] text-white font-medium rounded-lg hover:bg-[#c50069] transition text-lg"
              >
                Add to inquiry list
              </button>

              {addedMessage && (
                <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg p-3">
                  {addedMessage}{' '}
                  <Link href="/cart" className="underline font-medium">
                    View cart
                  </Link>
                </p>
              )}

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
                {['description', 'size-guide', 'shipping'].map((tab) => (
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
                    Visit us for a professional fitting or message us on WhatsApp.
                  </p>
                  <Link href="/find-your-size" className="text-[#E6007E] hover:underline">
                    Use our size calculator
                  </Link>
                </div>
              )}

              {activeTab === 'shipping' && (
                <div>
                  <h3 className="text-xl font-heading font-bold mb-4">
                    Orders & Collection
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Order via WhatsApp — we confirm price and size before you pay</li>
                    <li>Collect from Sarit Centre (Westlands) or Yaya Centre (Kilimani)</li>
                    <li>Professional fitting available in-store by appointment</li>
                  </ul>
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
                        alt={getProductImageAlt(relatedProduct)}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <h3 className="font-medium text-sm mb-1 group-hover:text-[#E6007E] transition line-clamp-2">
                      {relatedProduct.title}
                    </h3>
                    <PriceDisplay
                      price={relatedProduct.price}
                      salePrice={relatedProduct.salePrice}
                      size="sm"
                    />
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
