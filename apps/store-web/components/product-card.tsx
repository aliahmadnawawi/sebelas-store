import { cn } from '../lib/utils';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  highlight?: boolean;
  buttonLabel?: string;
  onAdd?: () => void;
}

export function ProductCard({
  name,
  description,
  price,
  highlight,
  buttonLabel = 'Add to cart',
  onAdd
}: ProductCardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-white/20 bg-white/80 p-6 shadow-lg shadow-black/5 backdrop-blur',
        highlight && 'bg-gradient-to-br from-white via-white to-aqua/20'
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-display text-xl text-midnight">{name}</h3>
        <span className="rounded-full bg-midnight px-3 py-1 text-xs font-semibold text-white">
          {price}
        </span>
      </div>
      <p className="mt-3 text-sm text-slate-600">{description}</p>
      <button
        type="button"
        onClick={onAdd}
        className="mt-5 w-full rounded-full border border-midnight/20 px-4 py-2 text-sm font-semibold text-midnight transition hover:bg-midnight hover:text-white"
      >
        {buttonLabel}
      </button>
    </div>
  );
}
