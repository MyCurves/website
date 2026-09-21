import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import {
  SITE,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  createPageMetadata,
} from "@/lib/seo";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Plus-Size Bras & Lingerie in Nairobi",
    description: SITE.description,
    path: "/",
  }),
  metadataBase: new URL(SITE.url),
  icons: {
    icon: [
      { url: "/seo/cropped-fav-curve-32x32.png", sizes: "32x32" },
      { url: "/seo/cropped-fav-curve-192x192.png", sizes: "192x192" },
    ],
    apple: "/seo/cropped-fav-curve-180x180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <JsonLd
          data={[
            buildOrganizationSchema(),
            buildLocalBusinessSchema("sarit"),
            buildLocalBusinessSchema("yaya"),
          ]}
        />
        <GoogleAnalytics />
        {children}
        <WhatsAppFab />
      </body>
    </html>
  );
}
