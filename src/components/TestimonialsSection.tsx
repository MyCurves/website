import { Star } from "lucide-react";
import { TESTIMONIALS, type Testimonial } from "@/lib/testimonials";

interface TestimonialsSectionProps {
  variant?: "full" | "compact";
  limit?: number;
  className?: string;
}

function StarRating({ stars }: { stars: Testimonial["stars"] }) {
  return (
    <div className="flex gap-0.5" aria-label={`${stars} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < stars
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm h-full flex flex-col">
      <StarRating stars={testimonial.stars} />
      <blockquote className="mt-4 text-gray-700 leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <footer className="mt-4 pt-4 border-t border-gray-100">
        <p className="font-heading font-semibold text-gray-900 text-sm">
          {testimonial.author}
        </p>
        {testimonial.location && (
          <p className="text-xs text-gray-500 mt-0.5">
            {testimonial.location} Centre
          </p>
        )}
      </footer>
    </article>
  );
}

export function TestimonialsSection({
  variant = "full",
  limit,
  className = "",
}: TestimonialsSectionProps) {
  const items = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;

  if (variant === "compact") {
    return (
      <section className={`py-12 px-6 bg-white ${className}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 text-center mb-8">
            What customers say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((testimonial) => (
              <TestimonialCard key={testimonial.quote} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 px-6 bg-gradient-to-b from-pink-50 to-white ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-3">
            Loved by Nairobi women
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real feedback on our free fittings, expert advice, and fuller-bust
            brands at Sarit and Yaya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((testimonial) => (
            <TestimonialCard key={testimonial.quote} testimonial={testimonial} />
          ))}
        </div>

        <p className="text-center text-xs text-gray-500 mt-8">
          Curated customer highlights. Individual experiences may vary.
        </p>
      </div>
    </section>
  );
}
