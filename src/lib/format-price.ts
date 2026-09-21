export function hasProductPrice(price?: number | null, salePrice?: number | null): boolean {
  const effective = salePrice ?? price;
  return effective !== undefined && effective !== null && effective > 0;
}

export function formatProductPrice(
  price?: number | null,
  salePrice?: number | null
): string {
  if (!hasProductPrice(price, salePrice)) {
    return "Price on request";
  }

  const effective = salePrice ?? price ?? 0;
  return `KSh ${effective.toLocaleString()}`;
}

export function formatPriceDetail(
  price?: number | null,
  salePrice?: number | null
): { display: string; original?: string; onRequest: boolean } {
  if (!hasProductPrice(price, salePrice)) {
    return { display: "Price on request", onRequest: true };
  }

  const effective = salePrice ?? price ?? 0;
  const display = `KSh ${effective.toLocaleString()}`;

  if (salePrice && price && salePrice < price) {
    return {
      display,
      original: `KSh ${price.toLocaleString()}`,
      onRequest: false,
    };
  }

  return { display, onRequest: false };
}
