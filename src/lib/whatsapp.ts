export const WHATSAPP_SARIT = "254746844227";
export const WHATSAPP_YAYA = "254703844227";

export function buildWhatsAppUrl(message: string, phone = WHATSAPP_SARIT): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function buildGeneralWhatsAppMessage(): string {
  return "Hi MyCurves! I'd like help with finding the right fit and products.";
}

interface ProductOrderParams {
  title: string;
  brand?: string;
  quantity?: number;
  size?: string;
  color?: string;
  pageUrl?: string;
}

export function buildProductOrderMessage({
  title,
  brand,
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
  if (pageUrl) lines.push(`Link: ${pageUrl}`);

  lines.push("", "Please let me know availability, price, and sizes. Thank you!");
  return lines.join("\n");
}

interface CartItem {
  title: string;
  brand?: string;
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
    lines.push(`   Link: ${pageUrl ? `${pageUrl.replace(/\/cart$/, "")}/products/${item.slug}` : item.slug}`);
    lines.push("");
  });

  lines.push("Please confirm availability, prices, and sizes. Thank you!");
  return lines.join("\n");
}
