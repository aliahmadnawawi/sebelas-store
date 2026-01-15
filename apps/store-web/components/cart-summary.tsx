interface CartSummaryProps {
  items: Array<{ name: string; qty: number; price: string }>;
  total: string;
  onDecrement?: (name: string) => void;
  onRemove?: (name: string) => void;
}

export function CartSummary({ items, total, onDecrement, onRemove }: CartSummaryProps) {
  return (
    <div className="rounded-[28px] border border-white/40 bg-white/85 p-6 shadow-xl shadow-black/10">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-xl">Cart preview</h3>
        <span className="rounded-full bg-aqua/30 px-3 py-1 text-xs font-semibold text-midnight">Ready</span>
      </div>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div key={item.name} className="flex items-center justify-between text-sm">
            <div>
              <p className="font-semibold text-midnight">{item.name}</p>
              <p className="text-xs text-slate-500">Qty {item.qty}</p>
            </div>
            <div className="flex items-center gap-3">
              {(onDecrement || onRemove) && (
                <div className="flex items-center gap-2">
                  {onDecrement && (
                    <button
                      type="button"
                      onClick={() => onDecrement(item.name)}
                      className="rounded-full border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-600"
                    >
                      -
                    </button>
                  )}
                  {onRemove && (
                    <button
                      type="button"
                      onClick={() => onRemove(item.name)}
                      className="rounded-full border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-600"
                    >
                      Remove
                    </button>
                  )}
                </div>
              )}
              <span className="font-semibold text-midnight">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
        <span className="text-sm text-slate-500">Estimated total</span>
        <span className="text-lg font-semibold text-midnight">{total}</span>
      </div>
      <button className="mt-5 w-full rounded-full bg-midnight px-5 py-3 text-sm font-semibold text-white">
        Continue to checkout
      </button>
      <p className="mt-3 text-xs text-slate-500">Payments auto-confirm via Tripay, Pakasir, or Saweria.</p>
    </div>
  );
}
