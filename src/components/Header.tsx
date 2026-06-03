'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBrasDropdownOpen, setIsBrasDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const brasMenuItems = [
    { name: 'Balconnet Bras', href: '/bras' },
    { name: 'Full Cup Bras', href: '/bras' },
    { name: 'Padded Bras', href: '/bras' },
    { name: 'Strapless Bras', href: '/bras' },
    { name: 'Plunge Bras', href: '/bras' },
    { name: 'Sports Bras', href: '/bras' },
    { name: 'Baby Dolls', href: '/bras' },
    { name: 'Scantilly', href: '/bras' },
    { name: 'Bra Accessories', href: '/bras' },
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

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Contact Banner */}
      <div className="bg-[#EEEEEE] h-[35px] px-4 md:px-8 flex items-center justify-between text-[12px] text-gray-600">
        <div className="hidden md:block">
          <span>Sarit Centre: +254 746 844 227</span>
          <span className="mx-2">|</span>
          <span>Yaya Centre: +254 703 844 227</span>
        </div>
        
        <div className="flex items-center gap-4 ml-auto">
          {/* Social Icons */}
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
          
          {/* Text Links */}
          <div className="hidden md:flex items-center gap-2 text-[12px]">
            <Link href="/our-story" className="hover:text-[#E6007E] transition-colors">Our Story</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-[#E6007E] transition-colors">Contact</Link>
            <span>|</span>
            <Link href="/videos" className="hover:text-[#E6007E] transition-colors">Videos</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="h-[94px] px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            <ul className="flex items-center gap-8 font-heading font-medium">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="flex items-center gap-1 hover:text-[#E6007E] transition-colors"
                        onMouseEnter={() => setIsBrasDropdownOpen(true)}
                        onMouseLeave={() => setIsBrasDropdownOpen(false)}
                      >
                        {item.name}
                        <ChevronDownIcon className="w-4 h-4" />
                      </button>
                      
                      {/* Dropdown Menu */}
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

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <button className="hover:text-[#E6007E] transition-colors" aria-label="Search">
              <SearchIcon className="w-5 h-5" />
            </button>

            {/* Find Your Size Button - Hidden on mobile */}
            <Link
              href="/find-your-size"
              className="hidden md:inline-block px-4 py-2 bg-[#E6007E] text-white text-sm font-medium rounded hover:bg-[#c50069] transition-colors"
            >
              Find Your Size
            </Link>

            {/* Cart Icon */}
            <Link href="/cart" className="hover:text-[#E6007E] transition-colors" aria-label="Shopping Cart">
              <ShoppingCartIcon className="w-5 h-5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
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
              
              {/* Mobile Contact Info */}
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
