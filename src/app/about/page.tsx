import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Loving My Curves',
  description:
    'Learn about MyCurves - empowering women through perfect fit. Professional bra fittings and quality lingerie for all shapes and sizes in Kenya.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-[129px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-4">
              About MyCurves
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-light">
              Empowering Women Through Perfect Fit
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              We are a community that seeks to make women of all shapes and sizes
              love their bodies and embrace their curves by knowing and wearing the
              right size of Bras and Underwear.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-4">
                Loving My Curves was founded with a simple yet powerful vision: to
                serve the plus-size market in Kenya with dignity, expertise, and
                quality. We recognized that finding the perfect fit shouldn&apos;t be a
                challenge, but rather a celebration of every woman&apos;s unique beauty.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                What started as a passion for helping women feel confident has grown
                into a trusted destination for professional bra fittings and premium
                lingerie. Today, we proudly serve our community from two convenient
                locations at <strong>Sarit Centre</strong> and{' '}
                <strong>Yaya Centre</strong>, bringing expertise, care, and an
                extensive selection of sizes to women across Nairobi.
              </p>
              <p className="text-lg leading-relaxed">
                Our journey is built on the belief that every woman deserves to feel
                beautiful, comfortable, and empowered in her own skin. That&apos;s why we
                don&apos;t just sell lingerie—we create experiences that transform how
                women see themselves.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {/* Inclusivity */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E6007E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  Inclusivity
                </h3>
                <p className="text-gray-700">
                  All shapes and sizes are welcome here. We celebrate diversity and
                  ensure every woman finds her perfect fit, from petite to plus-size.
                </p>
              </div>

              {/* Expertise */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E6007E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  Expertise
                </h3>
                <p className="text-gray-700">
                  Our professional bra fitting specialists are trained to help you
                  discover your true size and find styles that enhance your natural
                  beauty.
                </p>
              </div>

              {/* Quality */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E6007E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  Quality
                </h3>
                <p className="text-gray-700">
                  We stock only premium brands including Curvy Kate, Panache, Freya,
                  and more—ensuring comfort, durability, and beautiful designs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-12 text-center">
              Visit Our Stores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sarit Centre Location */}
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  Sarit Centre
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#E6007E] mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>Sarit Centre Shopping Mall, Nairobi</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#E6007E] mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a
                        href="tel:+254746844227"
                        className="hover:text-[#E6007E] transition-colors"
                      >
                        +254 746 844 227
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#E6007E] mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold">Opening Hours</p>
                      <p>Mon-Sat: 10:00 am – 7:00 pm</p>
                      <p>Sun: 10:00 am – 6:00 pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Yaya Centre Location */}
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  Yaya Centre
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#E6007E] mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>Yaya Centre Shopping Mall, Nairobi</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#E6007E] mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a
                        href="tel:+254703844227"
                        className="hover:text-[#E6007E] transition-colors"
                      >
                        +254 703 844 227
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#E6007E] mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold">Opening Hours</p>
                      <p>Mon-Sat: 10:00 am – 7:00 pm</p>
                      <p>Sun: 10:00 am – 6:00 pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#E6007E] to-[#c50069] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Visit Us Today
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-95">
              Experience the difference of a professional bra fitting and discover
              how the perfect fit can transform your confidence.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-[#E6007E] hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/254746844227"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-50"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}
