import { Header } from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import MissionStatement from "@/components/MissionStatement";
import CategoryCards from "@/components/CategoryCards";
import FeaturedProducts from "@/components/FeaturedProducts";
import { PressSection } from "@/components/PressSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { HOME_FAQS } from "@/lib/faqs";
import { buildFaqPageSchema, createPageMetadata } from "@/lib/seo";
import { getFeaturedProducts, toListingProducts } from "@/lib/products";

export const metadata = createPageMetadata({
  title: "Plus-Size Bras & Lingerie in Nairobi",
  description:
    "Shop Curvy Kate and Panache at MyCurves — free bra fittings at Sarit Centre and Yaya Centre, Nairobi. Order on WhatsApp.",
  path: "/",
});

export default function Home() {
  const featuredProducts = toListingProducts(getFeaturedProducts());

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={buildFaqPageSchema(HOME_FAQS)} />
      <Header />

      <main className="flex-1">
        <HeroSlider />
        <MissionStatement />
        <PressSection variant="strip" />
        <CategoryCards />
        <FeaturedProducts products={featuredProducts} />
        <TestimonialsSection />
        <FaqSection faqs={HOME_FAQS} className="bg-gray-50" />
      </main>

      <Footer />
    </div>
  );
}
