import { notFound } from "next/navigation";
import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import { getAllSitePages, getSitePage } from "@/lib/site-pages";

export function generateStaticParams() {
  return getAllSitePages().map((page) => ({ slug: page.slug }));
}

export default function SitePageRoute({
  params,
}: {
  params: { slug: string };
}) {
  const page = getSitePage(params.slug);

  if (!page) {
    notFound();
  }

  if (page.slug === "cart") {
    return (
      <ContentPage page={page}>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>{page.body}</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary text-white rounded-lg font-heading hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/254746844227"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-green-500 text-green-600 rounded-lg font-heading hover:bg-green-500 hover:text-white transition-colors"
            >
              Order via WhatsApp
            </a>
            <Link
              href="/bras"
              className="px-6 py-3 border border-gray-300 rounded-lg font-heading hover:border-primary hover:text-primary transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </ContentPage>
    );
  }

  return <ContentPage page={page} />;
}
