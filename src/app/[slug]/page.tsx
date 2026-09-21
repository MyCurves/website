import { notFound } from "next/navigation";
import ContentPage from "@/components/ContentPage";
import { CartWhatsAppHelper } from "@/components/CartWhatsAppHelper";
import { getAllSitePages, getSitePage } from "@/lib/site-pages";

export function generateStaticParams() {
  return getAllSitePages().map((page) => ({ slug: page.slug }));
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
