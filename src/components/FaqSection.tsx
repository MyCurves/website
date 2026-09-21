import type { FaqItem } from "@/lib/seo";

interface FaqSectionProps {
  title?: string;
  faqs: FaqItem[];
  className?: string;
}

export function FaqSection({
  title = "Frequently Asked Questions",
  faqs,
  className = "",
}: FaqSectionProps) {
  return (
    <section className={`py-16 px-6 bg-white ${className}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#E6007E] text-center mb-10">
          {title}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border border-gray-200 rounded-lg bg-gray-50 open:bg-white open:shadow-sm"
            >
              <summary className="cursor-pointer list-none px-6 py-4 font-heading font-semibold text-gray-900 flex items-center justify-between gap-4">
                <span>{faq.question}</span>
                <span className="text-[#E6007E] group-open:rotate-45 transition-transform text-xl">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
