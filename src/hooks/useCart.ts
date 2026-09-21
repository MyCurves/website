'use client';

import { useCallback, useEffect, useState } from 'react';

export interface CartItem {
  slug: string;
  title: string;
  brand?: string;
  price?: number | null;
  salePrice?: number | null;
  priceNote?: string;
  quantity: number;
  size?: string;
  color?: string;
}

const CART_STORAGE_KEY = 'mycurves-cart';

function readCart(): CartItem[] {
  if (typeof window === 'undefined') return [];

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeCart(items: CartItem[]) {
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent('mycurves-cart-updated'));
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(() => readCart());

  useEffect(() => {
    const handleUpdate = () => setItems(readCart());
    window.addEventListener('mycurves-cart-updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('mycurves-cart-updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const addItem = useCallback((item: CartItem) => {
    const current = readCart();
    const existingIndex = current.findIndex(
      (entry) =>
        entry.slug === item.slug &&
        entry.size === item.size &&
        entry.color === item.color
    );

    if (existingIndex >= 0) {
      current[existingIndex].quantity += item.quantity;
    } else {
      current.push(item);
    }

    writeCart(current);
    setItems(current);
  }, []);

  const removeItem = useCallback((index: number) => {
    const current = readCart();
    current.splice(index, 1);
    writeCart(current);
    setItems(current);
  }, []);

  const updateQuantity = useCallback((index: number, quantity: number) => {
    const current = readCart();
    if (quantity < 1) {
      current.splice(index, 1);
    } else {
      current[index].quantity = quantity;
    }
    writeCart(current);
    setItems(current);
  }, []);

  const clearCart = useCallback(() => {
    writeCart([]);
    setItems([]);
  }, []);

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
  };
}
