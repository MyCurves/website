import Link from 'next/link';
import { FacebookIcon, InstagramIcon, PinterestIcon } from '@/components/icons';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - Useful Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-white">
              Useful Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/find-your-size"
                  className="text-sm hover:text-primary transition"
                >
                  Find My Size
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-primary transition"
                >
                  About MyCurves
                </Link>
              </li>
              <li>
                <Link
                  href="/our-story"
                  className="text-sm hover:text-primary transition"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-sm hover:text-primary transition"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Customer Service */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-white">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help"
                  className="text-sm hover:text-primary transition"
                >
                  Help &amp; FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-primary transition"
                >
                  Contacts
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-sm hover:text-primary transition"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/deliveries"
                  className="text-sm hover:text-primary transition"
                >
                  Deliveries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Opening Hours */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-white">
              Opening Hours
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-white mb-1">Sarit Centre</p>
                <p className="text-sm">Mon-Sat: 10:00 am – 7:00 pm</p>
                <p className="text-sm">Sun: 10:00 am – 6:00 pm</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Yaya Centre</p>
                <p className="text-sm">Mon-Sat: 10:00 am – 7:00 pm</p>
                <p className="text-sm">Sun: 10:00 am – 6:00 pm</p>
              </div>
            </div>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-white">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-white mb-1">Sarit Centre</p>
                <p className="text-sm">Phone: +254 746 844 227</p>
                <p className="text-sm">
                  Email:{' '}
                  <a
                    href="mailto:hello@lovingmycurves.com"
                    className="hover:text-primary transition"
                  >
                    hello@lovingmycurves.com
                  </a>
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Yaya Centre</p>
                <p className="text-sm">Phone: +254 703 844 227</p>
                <p className="text-sm">
                  Email:{' '}
                  <a
                    href="mailto:hello@lovingmycurves.com"
                    className="hover:text-primary transition"
                  >
                    hello@lovingmycurves.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center">
            <h3 className="text-lg font-heading font-bold mb-2 text-white">
              Our Social Media
            </h3>
            <p className="text-sm mb-4">Connect with us on social media</p>
            <div className="flex justify-center items-center space-x-6">
              <a
                href="https://www.facebook.com/lovingmycurves"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/lovingmycurves"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a
                href="https://www.pinterest.com/lovingmycurves"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition"
                aria-label="Pinterest"
              >
                <PinterestIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto py-6 px-6">
          <p className="text-center text-sm">
            © 2026 Loving My Curves. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
