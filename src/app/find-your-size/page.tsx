import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

export default function FindYourSize() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 mt-[129px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-50 to-pink-100 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Find Your Perfect Fit
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              Get a FREE bra fitting at our stores
            </p>
          </div>
        </section>

        {/* Measuring Guide Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#E6007E] text-center mb-12">
              How to Measure Your Bra Size
            </h2>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-[#E6007E]">1</span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-gray-900">
                  Measure Your Band Size
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Wrap a soft measuring tape snugly around your ribcage, directly under your bust. 
                  Make sure the tape is level and parallel to the floor. Round to the nearest whole number. 
                  If it&apos;s an odd number, round up to the next even number.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-[#E6007E]">2</span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-gray-900">
                  Measure Your Bust
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Measure around the fullest part of your bust. Keep the tape level and make sure 
                  it&apos;s not too tight or too loose. Stand up straight and breathe normally. 
                  Round to the nearest whole number.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-[#E6007E]">3</span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-gray-900">
                  Calculate Your Cup Size
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Subtract your band measurement from your bust measurement. The difference determines 
                  your cup size. For example: 1 inch = A cup, 2 inches = B cup, 3 inches = C cup, 
                  and so on.
                </p>
              </div>
            </div>

            {/* Size Chart Table */}
            <div className="bg-pink-50 rounded-lg p-8">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6 text-center">
                Bra Size Chart
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm md:text-base">
                  <thead>
                    <tr className="bg-[#E6007E] text-white">
                      <th className="px-4 py-3 text-left font-semibold">Band Size</th>
                      <th className="px-4 py-3 text-center font-semibold">A</th>
                      <th className="px-4 py-3 text-center font-semibold">B</th>
                      <th className="px-4 py-3 text-center font-semibold">C</th>
                      <th className="px-4 py-3 text-center font-semibold">D</th>
                      <th className="px-4 py-3 text-center font-semibold">E</th>
                      <th className="px-4 py-3 text-center font-semibold">F</th>
                      <th className="px-4 py-3 text-center font-semibold">G</th>
                      <th className="px-4 py-3 text-center font-semibold">H</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[32, 34, 36, 38, 40, 42, 44, 46, 48].map((bandSize, index) => (
                      <tr key={bandSize} className={index % 2 === 0 ? 'bg-white' : 'bg-pink-100'}>
                        <td className="px-4 py-3 font-semibold text-gray-900">{bandSize}</td>
                        <td className="px-4 py-3 text-center text-gray-700">{bandSize}A</td>
                        <td className="px-4 py-3 text-center text-gray-700">{bandSize}B</td>
                        <td className="px-4 py-3 text-center text-gray-700">{bandSize}C</td>
                        <td className="px-4 py-3 text-center text-gray-700">{bandSize}D</td>
                        <td className="px-4 py-3 text-center text-gray-700">{bandSize}E</td>
                        <td className="px-4 py-3 text-center text-gray-700">{bandSize}F</td>
                        <td className="px-4 py-3 text-center text-gray-700">{bandSize}G</td>
                        <td className="px-4 py-3 text-center text-gray-700">{bandSize}H</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-pink-100 to-pink-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#E6007E] mb-6">
              Get a FREE Professional Fitting
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Visit us at Sarit Centre or Yaya Centre for a complimentary bra fitting
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md px-6 py-4 min-w-[280px]">
                <h3 className="font-heading font-bold text-gray-900 mb-2">Sarit Centre</h3>
                <a 
                  href="tel:+254746844227" 
                  className="text-[#E6007E] hover:underline font-semibold"
                >
                  +254 746 844 227
                </a>
              </div>
              
              <div className="bg-white rounded-lg shadow-md px-6 py-4 min-w-[280px]">
                <h3 className="font-heading font-bold text-gray-900 mb-2">Yaya Centre</h3>
                <a 
                  href="tel:+254703844227" 
                  className="text-[#E6007E] hover:underline font-semibold"
                >
                  +254 703 844 227
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/254746844227"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#E6007E] text-white text-lg font-heading font-bold rounded-lg hover:bg-[#c50069] transition-colors shadow-lg"
            >
              Book Your Fitting
            </a>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#E6007E] text-center mb-12">
              Bra Fitting Tips
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Signs of Wrong Size */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
                  Signs of Wrong Size
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#E6007E] mr-2">•</span>
                    <span>Band rides up your back</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E6007E] mr-2">•</span>
                    <span>Straps dig into shoulders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E6007E] mr-2">•</span>
                    <span>Cups gap or overflow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E6007E] mr-2">•</span>
                    <span>Center gore doesn&apos;t lie flat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E6007E] mr-2">•</span>
                    <span>Underwire pokes or digs in</span>
                  </li>
                </ul>
              </div>

              {/* How Often to Get Fitted */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
                  How Often to Get Fitted
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#E6007E] mr-2">•</span>
                    <span>Every 6-12 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E6007E] mr-2">•</span>
                    <span>After weight changes (5+ lbs)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E6007E] mr-2">•</span>
                    <span>After pregnancy or breastfeeding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E6007E] mr-2">•</span>
                    <span>When bras feel uncomfortable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E6007E] mr-2">•</span>
                    <span>If you notice body changes</span>
                  </li>
                </ul>
              </div>

              {/* When to Replace Bras */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
                  When to Replace Bras
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#E6007E] mr-2">•</span>
                    <span>Every 6-9 months with regular wear</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E6007E] mr-2">•</span>
                    <span>Band has stretched out</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E6007E] mr-2">•</span>
                    <span>Elastic has lost its stretch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E6007E] mr-2">•</span>
                    <span>Underwire is poking through</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E6007E] mr-2">•</span>
                    <span>Visible wear and tear</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Additional Tip Box */}
            <div className="mt-12 bg-pink-50 border-l-4 border-[#E6007E] rounded-r-lg p-6">
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                Pro Tip
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Always try bras on the loosest hook. As the band stretches with wear, you can tighten 
                to the middle and tightest hooks to extend the life of your bra. When you&apos;re using the 
                tightest hook regularly, it&apos;s time for a new bra!
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
