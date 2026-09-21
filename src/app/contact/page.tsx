import Link from 'next/link';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import { FaqSection } from '@/components/FaqSection';
import { JsonLd } from '@/components/JsonLd';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '@/components/icons';
import { CONTACT_FAQS } from '@/lib/faqs';
import { SOCIAL_LINKS } from '@/lib/social';
import {
  SARIT_GOOGLE_MAPS_URL,
  STORE_LOCATIONS,
  buildFaqPageSchema,
  createPageMetadata,
} from '@/lib/seo';
import { BookFittingButton } from '@/components/BookFittingButton';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export const metadata = createPageMetadata({
  title: 'Contact MyCurves Nairobi',
  description:
    'Contact MyCurves at Sarit Centre (Westlands) or Yaya Centre (Kilimani). Phone, WhatsApp, email hello@lovingmycurves.com. Mon–Sat 10–7, Sun 10–6.',
  path: '/contact',
});

const stores = [
  {
    name: 'Sarit Centre',
    subtitle: STORE_LOCATIONS.sarit.name,
    address: STORE_LOCATIONS.sarit.formattedAddress,
    phone: '+254 746 844 227',
    phoneHref: 'tel:+254746844227',
    whatsapp: '254746844227',
    mapsUrl: SARIT_GOOGLE_MAPS_URL,
  },
  {
    name: 'Yaya Centre',
    subtitle: STORE_LOCATIONS.yaya.name,
    address: `${STORE_LOCATIONS.yaya.streetAddress}, ${STORE_LOCATIONS.yaya.addressLocality}, Kenya`,
    phone: '+254 703 844 227',
    phoneHref: 'tel:+254703844227',
    whatsapp: '254703844227',
    mapsUrl: undefined,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={buildFaqPageSchema(CONTACT_FAQS)} />
      <Header />

      <main className="flex-1 pt-[129px] pb-28 md:pb-0">
        <section className="bg-gradient-to-br from-pink-50 to-white py-12 sm:py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Visit or Message Us
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Two Nairobi boutiques, expert fittings, and WhatsApp support for sizes and orders.
            </p>
            <BookFittingButton className="text-lg px-8 py-4" />
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
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-1">
                    {store.name}
                  </h2>
                  {store.subtitle && (
                    <p className="text-sm text-gray-500 mb-4">{store.subtitle}</p>
                  )}
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
                      {store.mapsUrl && (
                        <a
                          href={store.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-gray-300 text-gray-800 font-semibold py-3 px-5 rounded-lg hover:border-[#E6007E] hover:text-[#E6007E] transition-colors"
                        >
                          Open in Google Maps
                        </a>
                      )}
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
              Stay connected for fitting tips, new arrivals, and store updates on{' '}
              <Link href={SOCIAL_LINKS.instagram} className="text-[#E6007E] hover:underline">
                Instagram
              </Link>{' '}
              and{' '}
              <Link href={SOCIAL_LINKS.facebook} className="text-[#E6007E] hover:underline">
                Facebook
              </Link>
              .
            </p>
            <div className="flex justify-center items-center gap-6">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="group" aria-label="Follow us on Facebook">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all group-hover:scale-110">
                  <FacebookIcon className="w-8 h-8 text-gray-600 group-hover:text-[#E6007E] transition-colors" />
                </div>
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="group" aria-label="Follow us on Instagram">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all group-hover:scale-110">
                  <InstagramIcon className="w-8 h-8 text-gray-600 group-hover:text-[#E6007E] transition-colors" />
                </div>
              </a>
            </div>
          </div>
        </section>

        <TestimonialsSection variant="compact" limit={3} className="bg-gray-50" />
        <FaqSection faqs={CONTACT_FAQS} />
      </main>

      <Footer />
    </div>
  );
}
