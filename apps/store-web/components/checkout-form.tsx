"use client";

import { useState } from 'react';
import { useCart } from './cart-context';

const paymentOptions = [
  { id: 'tripay', label: 'Tripay', description: 'Auto-confirmed within minutes.' },
  { id: 'pakasir', label: 'Pakasir', description: 'Manual review for cashiers.' },
  { id: 'saweria', label: 'Saweria', description: 'Webhook-ready confirmation.' }
];

export function CheckoutForm() {
  const [provider, setProvider] = useState('tripay');
  const { items, totalLabel } = useCart();
  const itemCount = items.reduce((count, item) => count + item.qty, 0);

  return (
    <form className="rounded-[28px] border border-white/40 bg-white/85 p-6 shadow-xl shadow-black/10">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-xl">Checkout details</h3>
        <span className="rounded-full bg-midnight px-3 py-1 text-xs font-semibold text-white">Secure</span>
      </div>

      <div className="mt-5 space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-slate-500">Order summary</span>
            <span className="font-semibold text-midnight">{totalLabel}</span>
          </div>
          <p className="mt-1 text-xs text-slate-500">{itemCount} items in cart</p>
        </div>

        <label className="block text-xs uppercase tracking-[0.3em] text-slate-500">Customer</label>
        <div className="grid gap-3 sm:grid-cols-2">
          <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Full name" />
          <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Phone" />
        </div>
        <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Email address" />

        <label className="block text-xs uppercase tracking-[0.3em] text-slate-500">Shipping</label>
        <textarea
          rows={3}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
          placeholder="Street address, city, province"
        />

        <label className="block text-xs uppercase tracking-[0.3em] text-slate-500">Payment provider</label>
        <div className="space-y-3">
          {paymentOptions.map((option) => (
            <label
              key={option.id}
              className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4"
            >
              <input
                type="radio"
                name="payment"
                value={option.id}
                checked={provider === option.id}
                onChange={() => setProvider(option.id)}
                className="mt-1"
              />
              <div>
                <p className="text-sm font-semibold text-midnight">{option.label}</p>
                <p className="text-xs text-slate-500">{option.description}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={itemCount === 0}
        className="mt-6 w-full rounded-full bg-midnight px-5 py-3 text-sm font-semibold text-white disabled:opacity-50"
      >
        Place order {itemCount > 0 ? `(${totalLabel})` : ''}
      </button>
      <p className="mt-3 text-xs text-slate-500">Bot confirmation will be sent to your inbox.</p>
    </form>
  );
}
