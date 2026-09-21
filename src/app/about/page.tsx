import Image from 'next/image';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'About MyCurves',
  description:
    'MyCurves empowers women through perfect fit — professional bra fittings and premium plus-size lingerie at Sarit Centre and Yaya Centre, Nairobi.',
  path: '/about',
});

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

        {/* Founder Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about/wendy-karira.jpg"
                alt="Wendy Karira, Founder of MyCurves"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Meet Wendy Karira
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Wendy Karira Waweru founded MyCurves after her own search for
                comfortable, supportive plus-size lingerie in Kenya. What began as
                a personal challenge became a mission to help women across Nairobi
                find their perfect fit with dignity and expert care.
              </p>
              <p className="text-gray-600">
                Photo: Wendy Karira, Founder of MyCurves — press image.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-20 bg-white">
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
    </div>
  );
}
