'use client';

import { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
  CloseIcon,
  ChevronDownIcon,
} from '@/components/icons';
import { useCart } from '@/hooks/useCart';

export function Header() {
  const router = useRouter();
  const { itemCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBrasDropdownOpen, setIsBrasDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const brasMenuItems = [
    { name: 'All Bras', href: '/bras' },
    { name: 'Sports Bras', href: '/bras?category=sports-bras' },
    { name: 'Curvy Kate', href: '/bras?search=curvy+kate' },
    { name: 'Panache', href: '/bras?search=panache' },
  ];

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'BRAS', href: '/bras', hasDropdown: true },
    { name: 'PANTIES', href: '/panties' },
    { name: 'SHAPEWEAR', href: '/shapewear' },
    { name: 'ON SALE', href: '/on-sale' },
  ];

  const socialLinks = {
    facebook: 'https://www.facebook.com/lovingmycurves',
    instagram: 'https://www.instagram.com/lovingmycurves',
    pinterest: 'https://www.pinterest.com/lovingmycurves',
  };

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;

    router.push(`/bras?search=${encodeURIComponent(query)}`);
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
    setSearchQuery('');
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      <div className="bg-[#EEEEEE] h-[35px] px-4 md:px-8 flex items-center justify-between text-[12px] text-gray-600">
        <div className="hidden md:block">
          <span>Sarit Centre: +254 746 844 227</span>
          <span className="mx-2">|</span>
          <span>Yaya Centre: +254 703 844 227</span>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <div className="flex items-center gap-3">
            <Link href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#E6007E] transition-colors">
              <FacebookIcon className="w-4 h-4" />
            </Link>
            <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#E6007E] transition-colors">
              <InstagramIcon className="w-4 h-4" />
            </Link>
            <Link href={socialLinks.pinterest} target="_blank" rel="noopener noreferrer" className="hover:text-[#E6007E] transition-colors">
              <PinterestIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-2 text-[12px]">
            <Link href="/our-story" className="hover:text-[#E6007E] transition-colors">Our Story</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-[#E6007E] transition-colors">Contact</Link>
            <span>|</span>
            <Link href="/videos" className="hover:text-[#E6007E] transition-colors">Videos</Link>
          </div>
        </div>
      </div>

      <nav
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="h-[94px] px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/categories/My-Curves-Logo-2-Rivers-Mall.png"
              alt="Loving My Curves"
              width={180}
              height={60}
              className="h-[60px] w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            <ul className="flex items-center gap-8 font-heading font-medium">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <>
                      <button
                        type="button"
                        className="flex items-center gap-1 hover:text-[#E6007E] transition-colors"
                        onMouseEnter={() => setIsBrasDropdownOpen(true)}
                        onMouseLeave={() => setIsBrasDropdownOpen(false)}
                      >
                        {item.name}
                        <ChevronDownIcon className="w-4 h-4" />
                      </button>

                      {isBrasDropdownOpen && (
                        <div
                          className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50"
                          onMouseEnter={() => setIsBrasDropdownOpen(true)}
                          onMouseLeave={() => setIsBrasDropdownOpen(false)}
                        >
                          {brasMenuItems.map((brasItem) => (
                            <Link
                              key={brasItem.name}
                              href={brasItem.href}
                              className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#E6007E] transition-colors"
                            >
                              {brasItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="hover:text-[#E6007E] transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsSearchOpen((open) => !open)}
              className="hover:text-[#E6007E] transition-colors"
              aria-label="Search products"
            >
              <SearchIcon className="w-5 h-5" />
            </button>

            <Link
              href="/find-your-size"
              className="hidden md:inline-block px-4 py-2 bg-[#E6007E] text-white text-sm font-medium rounded hover:bg-[#c50069] transition-colors"
            >
              Find Your Size
            </Link>

            <Link
              href="/cart"
              className="relative hover:text-[#E6007E] transition-colors"
              aria-label="Inquiry list"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] rounded-full bg-[#E6007E] text-white text-[10px] font-bold flex items-center justify-center px-1">
                  {itemCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              className="md:hidden hover:text-[#E6007E] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="border-t bg-white px-4 md:px-8 py-4">
            <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto flex gap-3">
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search bras, brands, colours..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E6007E]/30"
                autoFocus
              />
              <button
                type="submit"
                className="px-5 py-2 bg-[#E6007E] text-white rounded-lg font-heading hover:bg-[#c50069] transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        )}

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <form onSubmit={handleSearchSubmit} className="flex gap-2">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search products..."
                  className="flex-1 border rounded-lg px-3 py-2 text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#E6007E] text-white rounded-lg text-sm"
                >
                  Go
                </button>
              </form>

              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        type="button"
                        className="w-full flex items-center justify-between py-2 font-heading font-medium hover:text-[#E6007E] transition-colors"
                        onClick={() => setIsBrasDropdownOpen(!isBrasDropdownOpen)}
                      >
                        {item.name}
                        <ChevronDownIcon
                          className={`w-4 h-4 transition-transform ${
                            isBrasDropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isBrasDropdownOpen && (
                        <div className="pl-4 space-y-2 mt-2">
                          {brasMenuItems.map((brasItem) => (
                            <Link
                              key={brasItem.name}
                              href={brasItem.href}
                              className="block py-2 text-sm hover:text-[#E6007E] transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {brasItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 font-heading font-medium hover:text-[#E6007E] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <Link
                href="/find-your-size"
                className="block w-full text-center px-4 py-2 bg-[#E6007E] text-white text-sm font-medium rounded hover:bg-[#c50069] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Find Your Size
              </Link>

              <div className="pt-4 border-t space-y-2 text-xs text-gray-600">
                <div>Sarit Centre: +254 746 844 227</div>
                <div>Yaya Centre: +254 703 844 227</div>
                <div className="flex gap-3 pt-2">
                  <Link href="/our-story" className="hover:text-[#E6007E]">Our Story</Link>
                  <span>|</span>
                  <Link href="/contact" className="hover:text-[#E6007E]">Contact</Link>
                  <span>|</span>
                  <Link href="/videos" className="hover:text-[#E6007E]">Videos</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
