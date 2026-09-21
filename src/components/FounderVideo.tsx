import Link from "next/link";
import { InstagramEmbed } from "@/components/InstagramEmbed";
import { INSTAGRAM_FOUNDER_VIDEO_URL } from "@/lib/press";

interface FounderVideoProps {
  variant?: "full" | "teaser";
}

export function FounderVideo({ variant = "full" }: FounderVideoProps) {
  if (variant === "teaser") {
    return (
      <section className="py-10 px-4 sm:px-6 bg-gradient-to-r from-pink-50 to-white border-y border-pink-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-2">
            Meet Wendy, founder of MyCurves
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            Hear how Wendy built Nairobi&apos;s destination for expert bra fitting
            and fuller-bust lingerie.
          </p>
          <Link
            href="/our-story#meet-wendy"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#E6007E] px-6 py-3 text-sm font-heading font-semibold text-white hover:bg-[#c50069] transition-colors"
          >
            Watch the founder video
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      id="meet-wendy"
      className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-pink-50 to-white scroll-mt-36"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-3">
            Meet Wendy, founder of MyCurves
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Watch Wendy share the story behind Loving My Curves — building
            inclusive lingerie retail and professional fittings in Nairobi.
          </p>
        </div>

        <InstagramEmbed
          url={INSTAGRAM_FOUNDER_VIDEO_URL}
          title="Wendy Karira, founder of MyCurves — Instagram video"
        />
      </div>
    </section>
  );
}
