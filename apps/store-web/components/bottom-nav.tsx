import Link from 'next/link';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Catalog', href: '/#catalog' },
  { label: 'Chat', href: '/#chat' },
  { label: 'Cart', href: '/#cart' }
];

export function BottomNav() {
  return (
    <nav className="fixed inset-x-4 bottom-4 z-50 rounded-full border border-white/30 bg-midnight/90 px-6 py-3 text-white shadow-xl shadow-black/30 backdrop-blur lg:hidden">
      <div className="flex items-center justify-between text-xs font-semibold">
        {items.map((item) => (
          <Link key={item.label} href={item.href} className="uppercase tracking-[0.2em]">
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
