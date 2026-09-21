'use client';

import Link from 'next/link';
import { WhatsAppIcon } from '@/components/icons';
import { useCart } from '@/hooks/useCart';
import { formatProductPrice, hasProductPrice } from '@/lib/format-price';
import { buildCartOrderMessage, buildWhatsAppUrl } from '@/lib/whatsapp';

export function CartWhatsAppHelper() {
  const { items, removeItem, updateQuantity, clearCart, itemCount } = useCart();

  const pageUrl =
    typeof window !== 'undefined' ? window.location.origin : 'https://lovingmycurves.com';

  const whatsAppHref = buildWhatsAppUrl(buildCartOrderMessage(items, pageUrl));

  if (itemCount === 0) {
    return (
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Add products to your inquiry list, then send everything to our team on
          WhatsApp. We&apos;ll confirm sizes, availability, and pricing before you
          visit or collect from Sarit Centre or Yaya Centre.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/bras"
            className="px-6 py-3 bg-primary text-white rounded-lg font-heading hover:bg-primary/90 transition-colors"
          >
            Browse Products
          </Link>
          <a
            href={buildWhatsAppUrl("Hi MyCurves! I'd like help choosing lingerie and confirming sizes.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-500 text-green-600 rounded-lg font-heading hover:bg-green-500 hover:text-white transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-gray-700 leading-relaxed">
        Review your inquiry list below, then send it to us on WhatsApp. Our team
        will confirm sizes, stock, and pricing — no online checkout required.
      </p>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={`${item.slug}-${item.size ?? ''}-${item.color ?? ''}-${index}`}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border rounded-lg p-4 bg-white"
          >
            <div>
              <h3 className="font-heading font-semibold text-gray-900">
                {item.title}
              </h3>
              {item.brand && (
                <p className="text-sm text-gray-500">{item.brand}</p>
              )}
              {hasProductPrice(item.price, item.salePrice) && (
                <p className="text-sm font-medium text-[#E6007E]">
                  {formatProductPrice(item.price, item.salePrice)}
                </p>
              )}
              {item.priceNote && (
                <p className="text-sm text-amber-800">{item.priceNote}</p>
              )}
              {item.color && (
                <p className="text-sm text-gray-600">Colour: {item.color}</p>
              )}
              {item.size && (
                <p className="text-sm text-gray-600">Size: {item.size}</p>
              )}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => updateQuantity(index, item.quantity - 1)}
                className="w-8 h-8 border rounded hover:bg-gray-50"
              >
                -
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                type="button"
                onClick={() => updateQuantity(index, item.quantity + 1)}
                className="w-8 h-8 border rounded hover:bg-gray-50"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="text-sm text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href={whatsAppHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg font-heading hover:bg-[#1ebe57] transition-colors"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Order via WhatsApp
        </a>
        <button
          type="button"
          onClick={clearCart}
          className="px-6 py-3 border border-gray-300 rounded-lg font-heading hover:border-primary hover:text-primary transition-colors"
        >
          Clear list
        </button>
        <Link
          href="/bras"
          className="px-6 py-3 border border-gray-300 rounded-lg font-heading hover:border-primary hover:text-primary transition-colors"
        >
          Add more products
        </Link>
      </div>

      <p className="text-sm text-gray-500">
        Yaya Centre: +254 703 844 227 · Sarit Centre: +254 746 844 227
      </p>
    </div>
  );
}
