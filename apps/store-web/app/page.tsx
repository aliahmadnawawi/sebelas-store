import Link from 'next/link';
import { BottomNav } from '../components/bottom-nav';
import { CartPanel } from '../components/cart-panel';
import { CartProductGrid } from '../components/cart-product-grid';
import { CartProvider } from '../components/cart-context';
import { CheckoutForm } from '../components/checkout-form';

const products = [
  {
    name: 'Weekend Capsule',
    description: 'A polished set of essentials curated by Sebelas designers.',
    priceLabel: 'Rp 289k',
    priceValue: 289000,
    highlight: true
  },
  {
    name: 'Studio Lamp',
    description: 'Warm lighting with adjustable tones for night shopping.',
    priceLabel: 'Rp 499k',
    priceValue: 499000
  },
  {
    name: 'Travel Pack',
    description: 'Ready-to-ship bundle with fast checkout.',
    priceLabel: 'Rp 149k',
    priceValue: 149000
  }
];

export default function HomePage() {
  return (
    <main className="relative px-6 pb-24 pt-10">
      <BottomNav />
      <div className="mx-auto max-w-6xl space-y-16">
        <header className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Sebelas Store</p>
            <h1 className="font-display text-4xl leading-tight sm:text-6xl">
              One platform, infinite storefronts.
            </h1>
            <p className="text-lg text-slate-600">
              Launch branded stores, chat in realtime, and route every order to your favorite payment partner.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/s/demo-store"
                className="rounded-full bg-midnight px-6 py-3 text-sm font-semibold text-white"
              >
                Explore demo store
              </Link>
              <Link
                href="#catalog"
                className="rounded-full border border-midnight/20 px-6 py-3 text-sm font-semibold text-midnight"
              >
                Browse catalog
              </Link>
            </div>
          </div>
          <div className="rounded-[32px] border border-white/40 bg-white/80 p-6 shadow-2xl shadow-black/10">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-500">Live store pulse</p>
                <span className="rounded-full bg-aqua/30 px-3 py-1 text-xs font-semibold text-midnight">Realtime</span>
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl bg-midnight px-4 py-3 text-white">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Chats</p>
                  <p className="text-2xl font-display">128 active</p>
                </div>
                <div className="rounded-2xl border border-slate-200 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Payments</p>
                  <p className="text-2xl font-display text-midnight">Tripay ready</p>
                </div>
                <div className="rounded-2xl border border-slate-200 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Bots</p>
                  <p className="text-2xl font-display text-midnight">Unlimited</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <CartProvider>
          <section id="catalog" className="space-y-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-3xl">Featured drops</h2>
                <p className="text-slate-600">Fresh products published across every store slug.</p>
              </div>
              <button className="rounded-full border border-midnight/20 px-5 py-2 text-sm font-semibold">
                View all
              </button>
            </div>
            <CartProductGrid products={products} />
          </section>

          <section
            id="chat"
            className="rounded-[32px] border border-white/40 bg-white/80 p-8 shadow-xl shadow-black/10"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] items-center">
              <div className="space-y-4">
                <h3 className="font-display text-2xl">Omnichannel inbox baked in</h3>
                <p className="text-slate-600">
                  Telegram, WhatsApp, and email stay synchronized with your orders. Agents reply instantly from the admin cockpit.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-midnight px-4 py-1 text-xs font-semibold text-white">Telegram</span>
                  <span className="rounded-full bg-white px-4 py-1 text-xs font-semibold text-midnight">WhatsApp</span>
                  <span className="rounded-full bg-white px-4 py-1 text-xs font-semibold text-midnight">Email</span>
                </div>
              </div>
              <div className="rounded-2xl border border-dashed border-slate-300 bg-sand/60 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Live transcript</p>
                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl bg-white p-4">
                    <p className="text-sm font-semibold">Customer</p>
                    <p className="text-sm text-slate-600">Do you have the weekend capsule in navy?</p>
                  </div>
                  <div className="rounded-2xl bg-midnight p-4 text-white">
                    <p className="text-sm font-semibold">Sebelas Agent</p>
                    <p className="text-sm text-white/70">Yes, shipping today with Tripay checkout.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="cart" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Checkout</p>
              <h3 className="font-display text-3xl">Smart checkout, instant confirmation.</h3>
              <p className="text-slate-600">
                Cart, payment, and bot-confirmations all sync to the omnichannel inbox. Customers get verified faster.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/40 bg-white/70 p-4 text-sm">
                  <p className="font-semibold text-midnight">Step 1</p>
                  <p className="text-xs text-slate-500">Add items</p>
                </div>
                <div className="rounded-2xl border border-white/40 bg-white/70 p-4 text-sm">
                  <p className="font-semibold text-midnight">Step 2</p>
                  <p className="text-xs text-slate-500">Choose provider</p>
                </div>
                <div className="rounded-2xl border border-white/40 bg-white/70 p-4 text-sm">
                  <p className="font-semibold text-midnight">Step 3</p>
                  <p className="text-xs text-slate-500">Auto-confirm</p>
                </div>
              </div>
            </div>
            <CartPanel />
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Shipping</p>
              <h3 className="font-display text-3xl">Collect details once, reuse everywhere.</h3>
              <p className="text-slate-600">
                Save customer info so your WhatsApp and Telegram flows stay consistent.
              </p>
              <div className="rounded-2xl border border-white/40 bg-white/70 p-5 text-sm">
                <p className="font-semibold text-midnight">Instant invoice</p>
                <p className="mt-2 text-xs text-slate-500">
                  Auto-send payment links via your configured bot channels.
                </p>
              </div>
            </div>
            <CheckoutForm />
          </section>
        </CartProvider>
      </div>
    </main>
  );
}
