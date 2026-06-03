import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
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
  title: "Loving My Curves - All your bra needs including plus size bras",
  description: "We are a community that seeks to make women of all shapes and sizes love their bodies by knowing and wearing the right size of Bras and Underwear.",
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
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
