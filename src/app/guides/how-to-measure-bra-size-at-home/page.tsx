import Link from 'next/link';
import { BookFittingButton } from '@/components/BookFittingButton';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import {
  buildArticleSchema,
  buildHowToSchema,
  createPageMetadata,
} from '@/lib/seo';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export const metadata = createPageMetadata({
  title: 'How to Measure Your Bra Size at Home',
  description:
    'Learn how to measure band and bust size at home before visiting MyCurves Nairobi for a free professional fitting at Sarit or Yaya Centre.',
  path: '/guides/how-to-measure-bra-size-at-home',
  type: 'article',
});

export default function MeasureBraSizeGuidePage() {
  const guidePath = '/guides/how-to-measure-bra-size-at-home';
  const title = 'How to measure your bra size at home';
  const description =
    'Most women wear the wrong bra size. Home measuring is a helpful first step — then visit MyCurves for a free fitting in Nairobi.';

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd
        data={[
          buildArticleSchema({ title, description, path: guidePath }),
          buildHowToSchema(),
        ]}
      />
      <Header />
      <main className="flex-1 pt-[129px]">
        <article className="max-w-3xl mx-auto px-6 py-16 prose prose-lg max-w-none">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            {description} Studies suggest a large share of women wear a band too large and a cup too small. In Kenya&apos;s climate, a well-fitted bra also helps with comfort, posture, and confidence under everyday clothes.
          </p>

          <h2 className="text-2xl font-heading font-bold text-[#E6007E] mt-10 mb-4">
            What you need
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li>A soft fabric measuring tape</li>
            <li>A mirror and good lighting</li>
            <li>A lightly lined bra or no bra — avoid heavy padding</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-[#E6007E] mt-10 mb-4">
            Step 1 — Measure your band
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Wrap the tape snugly around your ribcage directly under your bust. Keep it level all the way around. Breathe normally. Note the centimetres or inches, round to the nearest whole number, and if the band size is odd, round up to the next even number. The band provides most of your support — it should feel firm, not tight enough to hurt.
          </p>

          <h2 className="text-2xl font-heading font-bold text-[#E6007E] mt-10 mb-4">
            Step 2 — Measure your bust
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Measure around the fullest part of your bust, usually across the nipple line. Keep the tape level and not compressing breast tissue. Stand straight with arms relaxed. This measurement helps estimate cup volume relative to your band.
          </p>

          <h2 className="text-2xl font-heading font-bold text-[#E6007E] mt-10 mb-4">
            Step 3 — Find your cup size
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Subtract your band measurement from your bust measurement. Each inch (or roughly 2.5 cm) of difference typically equals one cup size — for example, 1&quot; = A, 2&quot; = B, 3&quot; = C. Brand grading varies, especially in fuller cups, so treat this as a starting point rather than a final size.
          </p>

          <h2 className="text-2xl font-heading font-bold text-[#E6007E] mt-10 mb-4">
            Why a professional fitting still matters
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Home numbers do not account for breast shape, wire width, or how a style sits on your body. At MyCurves, our fitters work with Curvy Kate, Panache, and other fuller-bust brands daily. Fittings are free at Sarit Centre (Westlands) and Yaya Centre (Kilimani) — no purchase required.
          </p>

          <div className="not-prose mt-12 flex flex-col sm:flex-row gap-4">
            <BookFittingButton className="text-center">
              Book a free fitting
            </BookFittingButton>
            <a
              href={buildWhatsAppUrl(
                "Hi MyCurves! I measured at home and would like help confirming my bra size."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center px-6 py-3 border-2 border-[#25D366] text-[#25D366] rounded-lg font-heading hover:bg-[#25D366] hover:text-white transition-colors"
            >
              Ask on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-block text-center px-6 py-3 border border-gray-300 rounded-lg font-heading hover:border-[#E6007E] hover:text-[#E6007E] transition-colors"
            >
              Store locations
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
