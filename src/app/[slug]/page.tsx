import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPage from "@/components/ContentPage";
import { CartWhatsAppHelper } from "@/components/CartWhatsAppHelper";
import { createPageMetadata } from "@/lib/seo";
import { getAllSitePages, getSitePage } from "@/lib/site-pages";

export function generateStaticParams() {
  return getAllSitePages().map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getSitePage(slug);

  if (!page) {
    return {};
  }

  return createPageMetadata({
    title: page.title,
    description: page.description || page.title,
    path: `/${page.slug}`,
  });
}

export default async function SitePageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getSitePage(slug);

  if (!page) {
    notFound();
  }

  if (page.slug === "cart") {
    return (
      <ContentPage page={page}>
        <CartWhatsAppHelper />
      </ContentPage>
    );
  }

  return <ContentPage page={page} />;
}
