import Link from 'next/link';
import Image from 'next/image';

// Ruler icon for the "Know Your Size" card
function RulerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h2M9 11h2M9 15h2" />
    </svg>
  );
}

export default function CategoryCards() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Know Your Size Card - CTA */}
          <Link 
            href="/find-your-size"
            className="group relative aspect-[4/3] rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden bg-primary flex flex-col items-center justify-center text-center p-8"
          >
            <RulerIcon className="w-16 h-16 text-white mb-4" />
            <h3 className="text-2xl font-bold text-white font-heading">
              Know Your Size
            </h3>
            <p className="text-white/90 mt-2 font-heading">
              Find Your Perfect Fit
            </p>
          </Link>

          {/* Bras Card */}
          <Link 
            href="/bras"
            className="group relative aspect-[4/3] rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <Image
              src="/images/categories/Bras-1.jpg"
              alt="Bras"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 z-[1]" />
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white font-heading">
                Bras
              </h3>
            </div>
          </Link>

          {/* Sportswear Card */}
          <Link 
            href="/bras"
            className="group relative aspect-[4/3] rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <Image
              src="/images/categories/Sportswear-1.jpg"
              alt="Sportswear"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 z-[1]" />
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white font-heading">
                Sportswear
              </h3>
            </div>
          </Link>

          {/* Shapewear Card */}
          <Link 
            href="/shapewear"
            className="group relative aspect-[4/3] rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <Image
              src="/images/categories/Shapewear-1-scaled.jpg"
              alt="Shapewear"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 z-[1]" />
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white font-heading">
                Shapewear
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
