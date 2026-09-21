import type { Metadata } from "next";
import type { Product } from "@/types/product";
import { hasProductPrice } from "@/lib/format-price";
import { SOCIAL_LINKS } from "@/lib/social";

/** Confirmed Google Maps listing for MyCurves Bra Shop — Sarit Centre. */
export const SARIT_GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/MyCurves+Bra+Shop/@-1.2611605,36.8019777,17z/data=!3m1!4b1!4m6!3m5!1s0x182f17fc87f3e3bd:0xd313f2f983642f4!8m2!3d-1.2611605!4d36.8019777!16s%2Fg%2F11d_28yx1b";

export const SITE = {
  name: "MyCurves",
  legalName: "Loving My Curves",
  tagline: "Plus-size lingerie & expert bra fitting in Nairobi",
  description:
    "MyCurves (Loving My Curves) offers plus-size bras, sports bras, and lingerie with free professional fittings at Sarit Centre and Yaya Centre, Nairobi. Order on WhatsApp.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lovingmycurves.com",
  email: "hello@lovingmycurves.com",
  locale: "en-KE",
  phones: {
    sarit: "+254746844227",
    yaya: "+254703844227",
  },
  defaultOgImage: "/images/categories/Bras-1.jpg",
  googleBusinessProfileUrls: {
    sarit: SARIT_GOOGLE_MAPS_URL,
    // No separate Yaya GBP yet — create/claim when a listing is available.
    yaya: undefined as string | undefined,
  },
} as const;

export const STORE_LOCATIONS = {
  sarit: {
    id: "sarit-centre",
    name: "MyCurves Bra Shop",
    formattedAddress: "Sarit Centre, Karuna Rd, Nairobi, Kenya",
    streetAddress: "Sarit Centre, Karuna Rd",
    addressLocality: "Nairobi",
    addressRegion: "Nairobi",
    addressCountry: "KE",
    phone: SITE.phones.sarit,
    geo: {
      latitude: -1.2611605,
      longitude: 36.8019777,
    },
    openingHours: [
      { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:00", closes: "19:00" },
      { dayOfWeek: ["Sunday"], opens: "10:00", closes: "18:00" },
    ],
  },
  yaya: {
    id: "yaya-centre",
    name: "MyCurves — Yaya Centre",
    streetAddress: "Yaya Centre",
    addressLocality: "Kilimani",
    addressRegion: "Nairobi",
    addressCountry: "KE",
    phone: SITE.phones.yaya,
    openingHours: [
      { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:00", closes: "19:00" },
      { dayOfWeek: ["Sunday"], opens: "10:00", closes: "18:00" },
    ],
  },
} as const;

export interface FaqItem {
  question: string;
  answer: string;
}

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}

export function buildPageTitle(title: string): string {
  if (title.includes("MyCurves") || title.includes("Loving My Curves")) {
    return title;
  }
  return `${title} — MyCurves Kenya | Loving My Curves`;
}

export function createPageMetadata({
  title,
  description,
  path,
  image = SITE.defaultOgImage,
  type = "website",
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const ogImage = image.startsWith("http") ? image : absoluteUrl(image);
  const pageTitle = buildPageTitle(title);

  return {
    title: pageTitle,
    description,
    alternates: { canonical },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: pageTitle,
      description,
      url: canonical,
      siteName: SITE.name,
      locale: SITE.locale,
      type,
      images: [{ url: ogImage, alt: `${SITE.name} — ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [ogImage],
    },
  };
}

export function getProductImageAlt(product: Product, index = 0): string {
  const color = product.colors[index]?.name ?? product.colors[0]?.name;
  const parts = [product.brand, product.title];
  if (color && !product.title.toLowerCase().includes(color.toLowerCase())) {
    parts.push(color);
  }
  return parts.join(" ").replace(/\s+/g, " ").trim();
}

export function productAvailability(product: Product): string {
  if (product.priceNote?.toLowerCase().includes("limited sizes")) {
    return "https://schema.org/LimitedAvailability";
  }
  return "https://schema.org/InStock";
}

export function buildOrganizationSchema() {
  const sameAs = [
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.facebook,
    SITE.googleBusinessProfileUrls.sarit,
  ].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ClothingStore"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: SITE.legalName,
    url: SITE.url,
    logo: absoluteUrl("/images/categories/My-Curves-Logo-2-Rivers-Mall.png"),
    description: SITE.description,
    email: SITE.email,
    telephone: [SITE.phones.sarit, SITE.phones.yaya],
    areaServed: { "@type": "City", name: "Nairobi" },
    sameAs,
    founder: { "@id": `${SITE.url}/our-story#wendy-karira` },
  };
}

export function buildLocalBusinessSchema(location: keyof typeof STORE_LOCATIONS) {
  const store = STORE_LOCATIONS[location];
  const gbpUrl =
    location === "sarit"
      ? SITE.googleBusinessProfileUrls.sarit
      : SITE.googleBusinessProfileUrls.yaya;
  const geo =
    "geo" in store && store.geo
      ? {
          "@type": "GeoCoordinates",
          latitude: store.geo.latitude,
          longitude: store.geo.longitude,
        }
      : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "@id": `${SITE.url}/#${store.id}`,
    name: store.name,
    parentOrganization: { "@id": `${SITE.url}/#organization` },
    url: SITE.url,
    telephone: store.phone,
    email: SITE.email,
    image: absoluteUrl(SITE.defaultOgImage),
    address: {
      "@type": "PostalAddress",
      streetAddress: store.streetAddress,
      addressLocality: store.addressLocality,
      addressRegion: store.addressRegion,
      addressCountry: store.addressCountry,
    },
    openingHoursSpecification: store.openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    ...(geo ? { geo } : {}),
    ...(gbpUrl ? { sameAs: [gbpUrl], hasMap: gbpUrl } : {}),
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildProductSchema(product: Product) {
  const price = product.salePrice ?? product.price;
  const offers =
    hasProductPrice(product.price, product.salePrice) && price
      ? {
          "@type": "Offer",
          priceCurrency: "KES",
          price: String(price),
          availability: productAvailability(product),
          url: absoluteUrl(`/products/${product.slug}`),
          seller: { "@id": `${SITE.url}/#organization` },
        }
      : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    brand: { "@type": "Brand", name: product.brand },
    image: product.images.map((image) => absoluteUrl(image)),
    sku: product.slug,
    url: absoluteUrl(`/products/${product.slug}`),
    ...(offers ? { offers } : {}),
  };
}

export function buildFaqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/our-story#wendy-karira`,
    name: "Wendy Karira Waweru",
    jobTitle: "Founder",
    worksFor: { "@id": `${SITE.url}/#organization` },
    image: absoluteUrl("/images/about/wendy-karira.jpg"),
    description:
      "Founder of MyCurves (Loving My Curves), Nairobi's destination for plus-size lingerie and professional bra fittings.",
    url: absoluteUrl("/our-story"),
  };
}

export function buildHowToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to measure your bra size at home",
    description:
      "A three-step guide to measuring band and bust size before visiting MyCurves for a professional fitting in Nairobi.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Measure your band size",
        text:
          "Wrap a soft tape snugly around your ribcage directly under your bust, level and parallel to the floor. Round to the nearest whole number; if odd, round up to the next even number.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Measure your bust",
        text:
          "Measure around the fullest part of your bust with the tape level, standing straight and breathing normally. Round to the nearest whole number.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Calculate your cup size",
        text:
          "Subtract your band measurement from your bust measurement. Each inch of difference maps to a cup size (for example, 1 inch = A, 2 inches = B, 3 inches = C).",
      },
    ],
  };
}

export function buildArticleSchema({
  title,
  description,
  path,
  datePublished = "2026-09-21",
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/categories/My-Curves-Logo-2-Rivers-Mall.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(path),
    image: absoluteUrl(SITE.defaultOgImage),
  };
}
