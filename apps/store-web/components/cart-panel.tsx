"use client";

import { CartSummary } from './cart-summary';
import { useCart } from './cart-context';

export function CartPanel() {
  const { items, totalLabel, decrementItem, removeItem, clearCart } = useCart();

  const summaryItems = items.map((item) => ({
    name: item.name,
    qty: item.qty,
    price: item.priceLabel
  }));

  return (
    <div className="space-y-3">
      <CartSummary
        items={summaryItems}
        total={totalLabel}
        onDecrement={decrementItem}
        onRemove={removeItem}
      />
      {items.length > 0 && (
        <button
          type="button"
          onClick={clearCart}
          className="w-full rounded-full border border-midnight/20 px-5 py-2 text-sm font-semibold text-midnight"
        >
          Clear cart
        </button>
      )}
    </div>
  );
}
