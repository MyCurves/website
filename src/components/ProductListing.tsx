'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react';

interface ProductListingProps {
  title: string;
  description?: string;
  products: Array<{
    id: string;
    title: string;
    price: number;
    salePrice?: number;
    image: string;
    slug: string;
    category?: string;
  }>;
}

export default function ProductListing({ title, description, products }: ProductListingProps) {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Pagination calculations
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);
  const showingStart = startIndex + 1;
  const showingEnd = Math.min(endIndex, products.length);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900">{title}</span>
          </nav>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-heading uppercase text-gray-900 mb-3">
            {title}
          </h1>
          {description && (
            <p className="text-gray-600 max-w-3xl">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-1/4">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="lg:hidden w-full bg-white border rounded-lg px-4 py-3 flex items-center justify-between mb-4 hover:bg-gray-50 transition-colors"
            >
              <span className="flex items-center gap-2 font-heading">
                <Filter className="w-5 h-5" />
                Filters
              </span>
              <ChevronRight 
                className={`w-5 h-5 transition-transform ${isMobileFilterOpen ? 'rotate-90' : ''}`}
              />
            </button>

            {/* Filters Container */}
            <div className={`space-y-6 ${isMobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
              {/* Filter by Price */}
              <div className="bg-white border rounded-lg p-6 lg:sticky lg:top-4">
                <h3 className="font-heading text-lg mb-4 text-gray-900">Filter by Price</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <span className="text-gray-500">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <button className="w-full bg-primary text-white px-4 py-2 rounded font-heading hover:bg-primary/90 transition-colors text-sm">
                    Apply
                  </button>
                </div>
              </div>

              {/* Filter by Size */}
              <div className="bg-white border rounded-lg p-6">
                <h3 className="font-heading text-lg mb-4 text-gray-900">Filter by Size</h3>
                <div className="space-y-2">
                  {['32A', '32B', '34A', '34B', '34C', '36A', '36B', '36C', '36D', '38B', '38C', '38D'].map((size) => (
                    <label key={size} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <span className="text-sm text-gray-700">{size}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter by Brand */}
              <div className="bg-white border rounded-lg p-6">
                <h3 className="font-heading text-lg mb-4 text-gray-900">Filter by Brand</h3>
                <div className="space-y-2">
                  {['Curvy Kate', 'Elomi', 'Freya', 'Panache', 'Sculptresse', 'Goddess'].map((brand) => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <span className="text-sm text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="lg:w-3/4">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-600">
                Showing {showingStart}-{showingEnd} of {products.length} products
              </p>
              <select className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  <Link href={`/products/${product.slug}`}>
                    {/* Image Container */}
                    <div className="aspect-square overflow-hidden rounded-t-lg relative">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      
                      {/* Quick View Button - Shows on Hover */}
                      <button className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-white text-gray-900 px-6 py-2 rounded-full font-heading text-sm hover:bg-primary hover:text-white transition-colors">
                          Quick View
                        </span>
                      </button>
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      {/* Category Badge */}
                      {product.category && (
                        <span className="text-xs text-gray-500 uppercase tracking-wide">
                          {product.category}
                        </span>
                      )}
                      
                      {/* Title */}
                      <h3 className="text-base font-heading line-clamp-2 mt-2 text-gray-900 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>

                      {/* Price */}
                      <div className="mt-2">
                        {product.salePrice ? (
                          <div className="flex items-baseline gap-2">
                            <p className="text-lg font-bold text-primary">
                              KSh {product.salePrice.toLocaleString()}
                            </p>
                            <p className="text-sm text-gray-400 line-through">
                              KSh {product.price.toLocaleString()}
                            </p>
                          </div>
                        ) : (
                          <p className="text-lg font-bold text-primary">
                            KSh {product.price.toLocaleString()}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border rounded-lg p-4">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2 px-4 py-2 border rounded font-heading hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded font-heading transition-colors ${
                        currentPage === page
                          ? 'bg-primary text-white'
                          : 'border hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2 px-4 py-2 border rounded font-heading hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
