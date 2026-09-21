import { formatProductPrice, hasProductPrice } from "@/lib/format-price";

export const WHATSAPP_SARIT = "254746844227";
export const WHATSAPP_YAYA = "254703844227";

export function buildWhatsAppUrl(message: string, phone = WHATSAPP_SARIT): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function buildGeneralWhatsAppMessage(): string {
  return "Hi MyCurves! I'd like help with finding the right fit and products.";
}

export function buildFittingBookingMessage(): string {
  return [
    "Hi MyCurves! I'd like to book a free bra fitting.",
    "",
    "Preferred store: Sarit / Yaya",
    "Preferred day/time: ",
  ].join("\n");
}

export function buildFittingBookingWhatsAppUrl(phone = WHATSAPP_SARIT): string {
  return buildWhatsAppUrl(buildFittingBookingMessage(), phone);
}

interface ProductOrderParams {
  title: string;
  brand?: string;
  price?: number | null;
  salePrice?: number | null;
  priceNote?: string;
  quantity?: number;
  size?: string;
  color?: string;
  pageUrl?: string;
}

export function buildProductOrderMessage({
  title,
  brand,
  price,
  salePrice,
  priceNote,
  quantity = 1,
  size,
  color,
  pageUrl,
}: ProductOrderParams): string {
  const lines = [
    "Hi MyCurves! I'd like to order:",
    "",
    `Product: ${title}`,
  ];

  if (brand) lines.push(`Brand: ${brand}`);
  if (color) lines.push(`Colour: ${color}`);
  if (size) lines.push(`Size: ${size}`);
  lines.push(`Quantity: ${quantity}`);

  if (hasProductPrice(price, salePrice)) {
    lines.push(`Price: ${formatProductPrice(price, salePrice)}`);
  }

  if (priceNote) {
    lines.push(`Note: ${priceNote}`);
  }

  if (pageUrl) lines.push(`Link: ${pageUrl}`);

  if (hasProductPrice(price, salePrice)) {
    lines.push("", "Please let me know availability and sizes. Thank you!");
  } else {
    lines.push("", "Please let me know availability, price, and sizes. Thank you!");
  }

  return lines.join("\n");
}

interface CartItem {
  title: string;
  brand?: string;
  price?: number | null;
  salePrice?: number | null;
  priceNote?: string;
  quantity: number;
  size?: string;
  color?: string;
  slug: string;
}

export function buildCartOrderMessage(items: CartItem[], pageUrl?: string): string {
  const lines = ["Hi MyCurves! I'd like to order the following items:", ""];

  items.forEach((item, index) => {
    lines.push(`${index + 1}. ${item.title}`);
    if (item.brand) lines.push(`   Brand: ${item.brand}`);
    if (item.color) lines.push(`   Colour: ${item.color}`);
    if (item.size) lines.push(`   Size: ${item.size}`);
    lines.push(`   Qty: ${item.quantity}`);
    if (hasProductPrice(item.price, item.salePrice)) {
      lines.push(`   Price: ${formatProductPrice(item.price, item.salePrice)}`);
    }
    if (item.priceNote) {
      lines.push(`   Note: ${item.priceNote}`);
    }
    lines.push(
      `   Link: ${pageUrl ? `${pageUrl.replace(/\/cart$/, "")}/products/${item.slug}` : item.slug}`
    );
    lines.push("");
  });

  const allHavePrices = items.every((item) =>
    hasProductPrice(item.price, item.salePrice)
  );

  lines.push(
    allHavePrices
      ? "Please confirm availability and sizes. Thank you!"
      : "Please confirm availability, prices, and sizes. Thank you!"
  );
  return lines.join("\n");
}
