import Link from "next/link";
import { InstagramIcon } from "@/components/icons";
import {
  BIKOZULU_PULL_QUOTE,
  INSTAGRAM_FOUNDER_STORY_URL,
  INSTAGRAM_MORE_POSTS,
  INSTAGRAM_PROFILE_URL,
  PRESS_COVERAGE,
} from "@/lib/press";

interface PressSectionProps {
  variant?: "strip" | "full";
}

function OutletWordmark({ outlet }: { outlet: string }) {
  const styles: Record<string, string> = {
    Bikozulu: "font-serif tracking-tight",
    "Nairobi Wire": "font-heading uppercase tracking-widest text-sm",
    "Riverwood Communications": "font-heading text-sm tracking-wide",
  };

  return (
    <span
      className={`text-gray-800 font-semibold ${styles[outlet] ?? "font-heading"}`}
    >
      {outlet}
    </span>
  );
}

export function PressSection({ variant = "strip" }: PressSectionProps) {
  if (variant === "strip") {
    return (
      <section className="py-12 px-6 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-500 mb-8">
            As seen in
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 md:gap-12">
            {PRESS_COVERAGE.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-center hover:opacity-80 transition-opacity"
              >
                <OutletWordmark outlet={item.outlet} />
                <span className="block text-xs text-gray-500 mt-1 group-hover:text-[#E6007E] transition-colors">
                  Read article
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-3">
            In the Press
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            MyCurves and founder Wendy Karira Waweru have been featured in Kenyan
            media for building inclusive lingerie retail and professional fitting
            in Nairobi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PRESS_COVERAGE.map((item) => (
            <article
              key={item.url}
              className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <OutletWordmark outlet={item.outlet} />
              <time className="text-xs text-gray-500 mt-2 block">{item.date}</time>
              <h3 className="font-heading font-bold text-gray-900 mt-3 mb-2 leading-snug">
                {item.headline}
              </h3>
              {item.summary && (
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {item.summary}
                </p>
              )}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-semibold text-[#E6007E] hover:underline"
              >
                Read on {item.outlet} →
              </a>
            </article>
          ))}
        </div>

        <blockquote className="bg-white border-l-4 border-[#E6007E] rounded-r-lg p-6 mb-12 max-w-3xl mx-auto">
          <p className="text-lg italic text-gray-800">
            &ldquo;{BIKOZULU_PULL_QUOTE}&rdquo;
          </p>
          <footer className="text-sm text-gray-500 mt-2">
            — Wendy Karira, in{" "}
            <a
              href={PRESS_COVERAGE[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E6007E] hover:underline"
            >
              Bikozulu, &ldquo;Confidence In A Cup&rdquo;
            </a>{" "}
            (2018)
          </footer>
        </blockquote>

        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center max-w-2xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center">
              <InstagramIcon className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
            Wendy&apos;s story on Instagram
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            In her July 2026 reflection, Wendy shares how the MyCurves dream began in
            2017 — and links back to Bikozulu&apos;s &ldquo;Confidence In A Cup&rdquo;
            feature.
          </p>
          <Link
            href={INSTAGRAM_FOUNDER_STORY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E6007E] text-white font-heading font-semibold rounded-lg hover:bg-[#c50069] transition-colors"
          >
            <InstagramIcon className="w-5 h-5" />
            Read Wendy&apos;s story on Instagram
          </Link>
          <p className="text-gray-500 text-xs mt-4">
            Follow{" "}
            <a
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E6007E] hover:underline"
            >
              @mycurveskenya
            </a>{" "}
            for fitting tips and new arrivals.
          </p>
        </div>

        {INSTAGRAM_MORE_POSTS.length > 0 && (
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <h4 className="text-sm font-heading font-semibold text-gray-700 uppercase tracking-wide mb-4">
              More from Instagram
            </h4>
            <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              {INSTAGRAM_MORE_POSTS.map((post) => (
                <li key={post.url}>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#E6007E] hover:underline"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    {post.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
