"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export interface CartItem {
  name: string;
  priceValue: number;
  priceLabel: string;
  qty: number;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'qty'>) => void;
  decrementItem: (name: string) => void;
  removeItem: (name: string) => void;
  clearCart: () => void;
  totalValue: number;
  totalLabel: string;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = 'sebelas_cart';

function formatRupiah(value: number) {
  return `Rp ${value.toLocaleString('id-ID')}`;
}

export function CartProvider({
  initialItems,
  children
}: {
  initialItems?: CartItem[];
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>(initialItems || []);

  useEffect(() => {
    if (initialItems?.length) return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch {
      // Ignore corrupted storage.
    }
  }, [initialItems]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore storage failures.
    }
  }, [items]);

  const addItem = (item: Omit<CartItem, 'qty'>) => {
    setItems((current) => {
      const existing = current.find((entry) => entry.name === item.name);
      if (existing) {
        return current.map((entry) =>
          entry.name === item.name ? { ...entry, qty: entry.qty + 1 } : entry
        );
      }
      return [...current, { ...item, qty: 1 }];
    });
  };

  const decrementItem = (name: string) => {
    setItems((current) => {
      const existing = current.find((entry) => entry.name === name);
      if (!existing) return current;
      if (existing.qty <= 1) {
        return current.filter((entry) => entry.name !== name);
      }
      return current.map((entry) =>
        entry.name === name ? { ...entry, qty: entry.qty - 1 } : entry
      );
    });
  };

  const removeItem = (name: string) => {
    setItems((current) => current.filter((entry) => entry.name !== name));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalValue = useMemo(
    () => items.reduce((sum, item) => sum + item.priceValue * item.qty, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      addItem,
      decrementItem,
      removeItem,
      clearCart,
      totalValue,
      totalLabel: formatRupiah(totalValue)
    }),
    [items, totalValue]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within CartProvider');
  }
  return ctx;
}
