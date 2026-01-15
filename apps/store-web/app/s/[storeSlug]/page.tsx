import { BottomNav } from '../../../components/bottom-nav';
import { CartPanel } from '../../../components/cart-panel';
import { CartProductGrid } from '../../../components/cart-product-grid';
import { CartProvider } from '../../../components/cart-context';
import { CheckoutForm } from '../../../components/checkout-form';

const products = [
  {
    name: 'Starter Bundle',
    description: 'Curated essentials with instant checkout.',
    priceLabel: 'Rp 129k',
    priceValue: 129000
  },
  {
    name: 'Premium Pack',
    description: 'Limited edition drops with VIP shipping.',
    priceLabel: 'Rp 349k',
    priceValue: 349000,
    highlight: true
  },
  {
    name: 'Gift Set',
    description: 'Ready to ship packaging for every occasion.',
    priceLabel: 'Rp 199k',
    priceValue: 199000
  }
];

export default function StorefrontPage({ params }: { params: { storeSlug: string } }) {
  return (
    <main className="relative px-6 pb-24 pt-10">
      <BottomNav />
      <div className="mx-auto max-w-6xl space-y-12">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">{params.storeSlug}</p>
          <h1 className="font-display text-4xl sm:text-5xl">Welcome to {params.storeSlug} store</h1>
          <p className="text-lg text-slate-600">
            Powered by Sebelas Store. Checkout with Tripay, Pakasir, or Saweria.
          </p>
        </header>

        <CartProvider>
          <section className="grid gap-6 md:grid-cols-1">
            <CartProductGrid products={products} />
          </section>

          <section className="rounded-[32px] border border-white/40 bg-white/80 p-8 shadow-lg shadow-black/10">
            <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <h2 className="font-display text-2xl">Need a custom order?</h2>
                <p className="text-slate-600">
                  Chat instantly via Telegram or WhatsApp. Our bot will confirm payment and notify you automatically.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="rounded-full bg-midnight px-4 py-2 text-sm font-semibold text-white">
                    Telegram chat
                  </button>
                  <button className="rounded-full border border-midnight/20 px-4 py-2 text-sm font-semibold">
                    WhatsApp chat
                  </button>
                </div>
              </div>
              <div className="rounded-2xl border border-dashed border-slate-300 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Payment status</p>
                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl bg-midnight px-4 py-3 text-white">
                    <p className="text-sm font-semibold">Tripay</p>
                    <p className="text-xs text-white/70">Callback ready for auto-confirmation</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 px-4 py-3">
                    <p className="text-sm font-semibold">Pakasir</p>
                    <p className="text-xs text-slate-500">Manual setup</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 px-4 py-3">
                    <p className="text-sm font-semibold">Saweria</p>
                    <p className="text-xs text-slate-500">Webhook configured</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="cart" className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Cart + checkout</p>
              <h2 className="font-display text-3xl">Checkout in three taps.</h2>
              <p className="text-slate-600">
                Mobile-ready checkout with bot follow-ups and instant payment verification.
              </p>
              <div className="rounded-2xl border border-white/40 bg-white/70 p-5 text-sm">
                <p className="font-semibold text-midnight">Preferred payment</p>
                <p className="mt-2 text-xs text-slate-500">
                  Tripay and Saweria callbacks are auto-confirmed into your inbox.
                </p>
              </div>
            </div>
            <CartPanel />
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Delivery details</p>
              <h2 className="font-display text-3xl">Collect shipping in seconds.</h2>
              <p className="text-slate-600">
                WhatsApp and Telegram updates will share the same order data automatically.
              </p>
              <div className="rounded-2xl border border-white/40 bg-white/70 p-5 text-sm">
                <p className="font-semibold text-midnight">Saved profiles</p>
                <p className="mt-2 text-xs text-slate-500">
                  Returning customers checkout with fewer steps.
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
