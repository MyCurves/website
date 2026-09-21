'use client';

import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import { FacebookIcon, InstagramIcon, PinterestIcon, WhatsAppIcon } from '@/components/icons';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const stores = [
  {
    name: 'Sarit Centre',
    address: 'Sarit Centre, Westlands, Nairobi',
    phone: '+254 746 844 227',
    phoneHref: 'tel:+254746844227',
    whatsapp: '254746844227',
  },
  {
    name: 'Yaya Centre',
    address: 'Yaya Centre, Kilimani, Nairobi',
    phone: '+254 703 844 227',
    phoneHref: 'tel:+254703844227',
    whatsapp: '254703844227',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-[129px]">
        <section className="bg-gradient-to-br from-pink-50 to-white py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Visit or Message Us
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Two Nairobi boutiques, expert fittings, and WhatsApp support for sizes and orders.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {stores.map((store) => (
                <div
                  key={store.name}
                  className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#E6007E] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-gray-900">{store.name}</h2>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-700">{store.address}</p>

                    <a
                      href={store.phoneHref}
                      className="block text-gray-700 hover:text-[#E6007E] transition-colors font-medium"
                    >
                      {store.phone}
                    </a>

                    <a
                      href="mailto:hello@lovingmycurves.com"
                      className="block text-gray-700 hover:text-[#E6007E] transition-colors"
                    >
                      hello@lovingmycurves.com
                    </a>

                    <div className="pt-4 border-t">
                      <p className="text-gray-700 font-semibold mb-1">Opening Hours</p>
                      <p className="text-gray-600 text-sm">Mon–Sat: 10am – 7pm</p>
                      <p className="text-gray-600 text-sm">Sun: 10am – 6pm</p>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-4">
                      <a
                        href={buildWhatsAppUrl(
                          `Hi MyCurves ${store.name}! I'd like help with products, sizes, or placing an order.`,
                          store.whatsapp
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold py-3 px-5 rounded-lg transition-colors"
                      >
                        <WhatsAppIcon className="w-5 h-5" />
                        WhatsApp
                      </a>
                      <a
                        href={store.phoneHref}
                        className="inline-flex items-center gap-2 border border-[#E6007E] text-[#E6007E] font-semibold py-3 px-5 rounded-lg hover:bg-pink-50 transition-colors"
                      >
                        Call store
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Follow Us
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay connected for fitting tips, new arrivals, and store updates.
            </p>

            <div className="flex justify-center items-center gap-6">
              <a href="https://facebook.com/lovingmycurves" target="_blank" rel="noopener noreferrer" className="group" aria-label="Follow us on Facebook">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all group-hover:scale-110">
                  <FacebookIcon className="w-8 h-8 text-gray-600 group-hover:text-[#E6007E] transition-colors" />
                </div>
              </a>
              <a href="https://instagram.com/lovingmycurves" target="_blank" rel="noopener noreferrer" className="group" aria-label="Follow us on Instagram">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all group-hover:scale-110">
                  <InstagramIcon className="w-8 h-8 text-gray-600 group-hover:text-[#E6007E] transition-colors" />
                </div>
              </a>
              <a href="https://pinterest.com/lovingmycurves" target="_blank" rel="noopener noreferrer" className="group" aria-label="Follow us on Pinterest">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all group-hover:scale-110">
                  <PinterestIcon className="w-8 h-8 text-gray-600 group-hover:text-[#E6007E] transition-colors" />
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
