'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight, Filter, Search, X } from 'lucide-react';
import { PriceDisplay } from '@/components/PriceDisplay';
import { hasProductPrice } from '@/lib/format-price';
import type { ProductCategory, ProductListingItem } from '@/types/product';

interface ProductListingProps {
  title: string;
  description?: string;
  seoIntro?: string;
  products: ProductListingItem[];
  defaultCategory?: ProductCategory;
}

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name';

export default function ProductListing({
  title,
  description,
  seoIntro,
  products,
  defaultCategory,
}: ProductListingProps) {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('search') ?? '';
  const initialCategory =
    (searchParams.get('category') as ProductCategory | null) ?? defaultCategory;

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory ?? 'all'
  );
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const productsPerPage = 9;

  useEffect(() => {
    const search = searchParams.get('search') ?? '';
    const category =
      (searchParams.get('category') as ProductCategory | null) ??
      defaultCategory ??
      'all';

    setSearchQuery(search);
    setSelectedCategory(category);
    setCurrentPage(1);
  }, [searchParams, defaultCategory]);

  const brands = useMemo(
    () => [...new Set(products.map((product) => product.brand))].sort(),
    [products]
  );

  const colors = useMemo(
    () =>
      [...new Set(products.flatMap((product) => product.colors))].sort(),
    [products]
  );

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    let result = products.filter((product) => {
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      if (
        selectedBrands.length > 0 &&
        !selectedBrands.includes(product.brand)
      ) {
        return false;
      }

      if (
        selectedColors.length > 0 &&
        !product.colors.some((color) => selectedColors.includes(color))
      ) {
        return false;
      }

      const effectivePrice = product.salePrice ?? product.price;
      if (minPrice && hasProductPrice(product.price, product.salePrice)) {
        if ((effectivePrice ?? 0) < Number(minPrice)) return false;
      }
      if (maxPrice && hasProductPrice(product.price, product.salePrice)) {
        if ((effectivePrice ?? 0) > Number(maxPrice)) return false;
      }

      if (!query) return true;

      const haystack = [
        product.title,
        product.brand,
        product.description,
        product.category,
        ...product.features,
        ...product.colors,
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(query);
    });

    result = [...result].sort((a, b) => {
      if (sortBy === 'name') {
        return a.title.localeCompare(b.title);
      }

      const aPrice = a.salePrice ?? a.price;
      const bPrice = b.salePrice ?? b.price;

      if (sortBy === 'price-asc') {
        if (!hasProductPrice(a.price, a.salePrice)) return 1;
        if (!hasProductPrice(b.price, b.salePrice)) return -1;
        return (aPrice ?? 0) - (bPrice ?? 0);
      }

      if (sortBy === 'price-desc') {
        if (!hasProductPrice(a.price, a.salePrice)) return 1;
        if (!hasProductPrice(b.price, b.salePrice)) return -1;
        return (bPrice ?? 0) - (aPrice ?? 0);
      }

      if (sortBy === 'featured') {
        if (a.featured === b.featured) return 0;
        return a.featured ? -1 : 1;
      }

      return 0;
    });

    return result;
  }, [
    products,
    searchQuery,
    selectedBrands,
    selectedColors,
    selectedCategory,
    minPrice,
    maxPrice,
    sortBy,
  ]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);
  const showingStart = filteredProducts.length === 0 ? 0 : startIndex + 1;
  const showingEnd = Math.min(endIndex, filteredProducts.length);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((item) => item !== brand) : [...prev, brand]
    );
    setCurrentPage(1);
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((item) => item !== color) : [...prev, color]
    );
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedBrands([]);
    setSelectedColors([]);
    setSelectedCategory(defaultCategory ?? 'all');
    setMinPrice('');
    setMaxPrice('');
    setSortBy('featured');
    setCurrentPage(1);
  };

  const hasActiveFilters =
    searchQuery ||
    selectedBrands.length > 0 ||
    selectedColors.length > 0 ||
    selectedCategory !== (defaultCategory ?? 'all') ||
    minPrice ||
    maxPrice;

  return (
    <div className="min-h-screen bg-gray-50">
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

      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-heading uppercase text-gray-900 mb-3">
            {title}
          </h1>
          {description && (
            <p className="text-gray-600 max-w-3xl">{description}</p>
          )}
          {seoIntro && (
            <p className="text-gray-600 max-w-3xl mt-4 leading-relaxed">{seoIntro}</p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4">
            <button
              type="button"
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

            <div
              className={`space-y-6 ${isMobileFilterOpen ? 'block' : 'hidden lg:block'}`}
            >
              <div className="bg-white border rounded-lg p-6 lg:sticky lg:top-36 space-y-6">
                <div>
                  <label
                    htmlFor="product-search"
                    className="block font-heading text-lg mb-3 text-gray-900"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      id="product-search"
                      type="search"
                      value={searchQuery}
                      onChange={(event) => {
                        setSearchQuery(event.target.value);
                        setCurrentPage(1);
                      }}
                      placeholder="Search products..."
                      className="w-full border rounded px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-lg mb-4 text-gray-900">
                    Category
                  </h3>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All' },
                      { value: 'bras', label: 'Bras' },
                      { value: 'sports-bras', label: 'Sports Bras' },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                      >
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === option.value}
                          onChange={() => {
                            setSelectedCategory(option.value);
                            setCurrentPage(1);
                          }}
                          className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                        />
                        <span className="text-sm text-gray-700">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {brands.length > 0 && (
                  <div>
                    <h3 className="font-heading text-lg mb-4 text-gray-900">
                      Brand
                    </h3>
                    <div className="space-y-2">
                      {brands.map((brand) => (
                        <label
                          key={brand}
                          className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => toggleBrand(brand)}
                            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                          />
                          <span className="text-sm text-gray-700">{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {colors.length > 0 && (
                  <div>
                    <h3 className="font-heading text-lg mb-4 text-gray-900">
                      Colour
                    </h3>
                    <div className="space-y-2">
                      {colors.map((color) => (
                        <label
                          key={color}
                          className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={selectedColors.includes(color)}
                            onChange={() => toggleColor(color)}
                            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                          />
                          <span className="text-sm text-gray-700">{color}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="font-heading text-lg mb-4 text-gray-900">
                    Price (KSh)
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        placeholder="Min"
                        value={minPrice}
                        onChange={(event) => {
                          setMinPrice(event.target.value);
                          setCurrentPage(1);
                        }}
                        className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                      <span className="text-gray-500">-</span>
                      <input
                        type="number"
                        placeholder="Max"
                        value={maxPrice}
                        onChange={(event) => {
                          setMaxPrice(event.target.value);
                          setCurrentPage(1);
                        }}
                        className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      Products without listed prices are shown as &quot;Price on
                      request&quot;.
                    </p>
                  </div>
                </div>

                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded px-4 py-2 text-sm font-heading hover:border-primary hover:text-primary transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Clear filters
                  </button>
                )}
              </div>
            </div>
          </aside>

          <main className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6 gap-4">
              <p className="text-sm text-gray-600">
                Showing {showingStart}-{showingEnd} of {filteredProducts.length}{' '}
                products
              </p>
              <select
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value as SortOption)
                }
                className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="name">Name: A to Z</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

            {currentProducts.length === 0 ? (
              <div className="bg-white border rounded-lg p-12 text-center">
                <p className="text-gray-600 mb-4">
                  No products match your filters.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-primary font-heading hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {currentProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                  >
                    <Link href={`/products/${product.slug}`}>
                      <div className="aspect-square overflow-hidden rounded-t-lg relative">
                        <Image
                          src={product.image}
                          alt={`${product.brand} ${product.title}`}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <div className="p-4">
                        <span className="text-xs text-gray-500 uppercase tracking-wide">
                          {product.brand}
                        </span>
                        <h3 className="text-base font-heading line-clamp-2 mt-2 text-gray-900 group-hover:text-primary transition-colors">
                          {product.title}
                        </h3>
                        <div className="mt-2">
                          <PriceDisplay
                            price={product.price}
                            salePrice={product.salePrice}
                            size="sm"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border rounded-lg p-4">
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2 px-4 py-2 border rounded font-heading hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                    (page) => (
                      <button
                        key={page}
                        type="button"
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 rounded font-heading transition-colors ${
                          currentPage === page
                            ? 'bg-primary text-white'
                            : 'border hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2 px-4 py-2 border rounded font-heading hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
