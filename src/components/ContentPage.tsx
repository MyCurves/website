import Link from "next/link";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import type { SitePage } from "@/lib/site-pages";

interface ContentPageProps {
  page: SitePage;
  children?: React.ReactNode;
}

export default function ContentPage({ page, children }: ContentPageProps) {
  return (
    <>
      <Header />
      <main className="pt-[129px] min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{page.title}</span>
          </nav>

          <h1 className="text-4xl font-heading font-bold mb-4">{page.title}</h1>

          {page.description && (
            <p className="text-lg text-gray-600 mb-8">{page.description}</p>
          )}

          {children ?? (
            <div className="prose prose-gray max-w-none whitespace-pre-line text-gray-700 leading-relaxed">
              {page.body}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
