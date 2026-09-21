import Link from 'next/link';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Fitting Guides',
  description:
    'Practical bra fitting guides from MyCurves Nairobi — measure at home, understand sizing, and know when to visit for a free professional fitting.',
  path: '/guides',
});

const guides = [
  {
    slug: 'how-to-measure-bra-size-at-home',
    title: 'How to measure your bra size at home',
    description:
      'A simple three-step tape measure method before your visit to Sarit or Yaya — and why a professional fitting still matters.',
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[129px]">
        <section className="bg-gradient-to-r from-pink-50 to-pink-100 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Fitting Guides
            </h1>
            <p className="text-lg text-gray-700">
              Expert advice from the MyCurves team — written for women shopping for bras in Nairobi.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="block border rounded-lg p-6 bg-white shadow-sm hover:shadow-md hover:border-[#E6007E] transition-all"
              >
                <h2 className="text-xl font-heading font-bold text-gray-900 mb-2">
                  {guide.title}
                </h2>
                <p className="text-gray-600">{guide.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
