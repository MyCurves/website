import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function OurStory() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 mt-[129px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              From a Personal Challenge to Empowering Women Across Kenya
            </p>
          </div>
        </section>

        {/* Founder Story Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Placeholder */}
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">👤</span>
                    </div>
                    <p className="text-gray-600 text-sm">Founder Photo</p>
                    <p className="text-gray-500 text-xs mt-1">Wendy Karira</p>
                  </div>
                </div>
              </div>

              {/* Story Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#E6007E] mb-6">
                  It Started with a Need
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Like many women, founder Wendy Karira struggled to find the perfect bra that was both 
                    comfortable and supportive. Shopping for lingerie was often frustrating, with limited 
                    size ranges and a lack of knowledgeable fitting services.
                  </p>
                  <p>
                    After years of wearing ill-fitting bras and understanding the impact it had on her 
                    confidence and comfort, Wendy decided to make a change. She realized that if she was 
                    facing this challenge, countless other women in Kenya were too.
                  </p>
                  <p>
                    This personal experience sparked the vision for Loving My Curves – a boutique dedicated 
                    to helping every woman find her perfect fit, regardless of her size or shape.
                  </p>
                </div>

                {/* Quote Callout */}
                <div className="mt-8 bg-pink-50 border-l-4 border-[#E6007E] rounded-r-lg p-6">
                  <blockquote className="text-lg md:text-xl font-heading text-gray-900 italic">
                    "My biggest problem became my goldmine"
                  </blockquote>
                  <p className="text-sm text-gray-600 mt-2">— Wendy Karira, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-pink-50 to-pink-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#E6007E] mb-6">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We set out to create a space where every woman, regardless of her size, could find 
              beautiful, comfortable, and supportive lingerie. We believe that the right foundation 
              garment can transform not just your outfit, but your confidence.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#E6007E] text-center mb-12">
              Our Journey
            </h2>

            <div className="space-y-8">
              {/* Timeline Item 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 md:w-32">
                  <div className="bg-[#E6007E] text-white text-xl md:text-2xl font-heading font-bold rounded-lg px-4 py-2 text-center">
                    2018
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                    The Beginning
                  </h3>
                  <p className="text-gray-700">
                    Loving My Curves was founded with a mission to revolutionize the lingerie 
                    shopping experience in Kenya.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 md:w-32">
                  <div className="bg-[#E6007E] text-white text-xl md:text-2xl font-heading font-bold rounded-lg px-4 py-2 text-center">
                    2019
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                    First Location
                  </h3>
                  <p className="text-gray-700">
                    Opened our flagship store at Sarit Centre, offering expert fittings and 
                    premium lingerie brands.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 md:w-32">
                  <div className="bg-[#E6007E] text-white text-xl md:text-2xl font-heading font-bold rounded-lg px-4 py-2 text-center">
                    2021
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                    Expanding Our Reach
                  </h3>
                  <p className="text-gray-700">
                    Launched our second store at Yaya Centre to serve more women across Nairobi.
                  </p>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 md:w-32">
                  <div className="bg-[#E6007E] text-white text-xl md:text-2xl font-heading font-bold rounded-lg px-4 py-2 text-center">
                    Today
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                    Growing Strong
                  </h3>
                  <p className="text-gray-700">
                    Proudly serving thousands of women with 15+ premium brands and a team of 
                    certified fitting experts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-pink-100 to-pink-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#E6007E] text-center mb-12">
              Our Impact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Stat 1 */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-5xl md:text-6xl font-heading font-bold text-[#E6007E] mb-4">
                  10,000+
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                  Women Fitted
                </h3>
                <p className="text-gray-600">
                  Helping women find their perfect fit and boosting confidence
                </p>
              </div>

              {/* Stat 2 */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-5xl md:text-6xl font-heading font-bold text-[#E6007E] mb-4">
                  2
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                  Store Locations
                </h3>
                <p className="text-gray-600">
                  Conveniently located at Sarit Centre and Yaya Centre
                </p>
              </div>

              {/* Stat 3 */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-5xl md:text-6xl font-heading font-bold text-[#E6007E] mb-4">
                  15+
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                  Premium Brands
                </h3>
                <p className="text-gray-600">
                  Curated selection of the world's finest lingerie brands
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#E6007E] text-center mb-12">
              What We Stand For
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Value 1 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">💕</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  Body Positivity
                </h3>
                <p className="text-gray-700">
                  Celebrating every body type and empowering women to love their curves
                </p>
              </div>

              {/* Value 2 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">⭐</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  Expert Service
                </h3>
                <p className="text-gray-700">
                  Certified fitting specialists dedicated to finding your perfect fit
                </p>
              </div>

              {/* Value 3 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">✨</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  Quality Products
                </h3>
                <p className="text-gray-700">
                  Only the finest materials and craftsmanship from trusted global brands
                </p>
              </div>

              {/* Value 4 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🤝</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  Community
                </h3>
                <p className="text-gray-700">
                  Building a supportive community of women who uplift each other
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-pink-50 to-pink-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#E6007E] mb-6">
              Experience the Difference
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Visit us today and discover why thousands of women trust Loving My Curves 
              for their lingerie needs
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/find-your-size"
                className="inline-block px-8 py-4 bg-[#E6007E] text-white text-lg font-heading font-bold rounded-lg hover:bg-[#c50069] transition-colors shadow-lg"
              >
                Visit Our Stores
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-[#E6007E] text-lg font-heading font-bold rounded-lg hover:bg-gray-50 transition-colors shadow-lg border-2 border-[#E6007E]"
              >
                Contact Us
              </Link>
            </div>

            {/* Store Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-heading font-bold text-gray-900 text-xl mb-3">
                  Sarit Centre
                </h3>
                <p className="text-gray-700 mb-2">Mon-Sat: 10:00 am – 7:00 pm</p>
                <p className="text-gray-700 mb-3">Sun: 10:00 am – 6:00 pm</p>
                <a 
                  href="tel:+254746844227" 
                  className="text-[#E6007E] hover:underline font-semibold text-lg"
                >
                  +254 746 844 227
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-heading font-bold text-gray-900 text-xl mb-3">
                  Yaya Centre
                </h3>
                <p className="text-gray-700 mb-2">Mon-Sat: 10:00 am – 7:00 pm</p>
                <p className="text-gray-700 mb-3">Sun: 10:00 am – 6:00 pm</p>
                <a 
                  href="tel:+254703844227" 
                  className="text-[#E6007E] hover:underline font-semibold text-lg"
                >
                  +254 703 844 227
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
