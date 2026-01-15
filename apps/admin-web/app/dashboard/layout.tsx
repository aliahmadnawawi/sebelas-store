import Link from 'next/link';

const nav = [
  { label: 'Overview', href: '/dashboard' },
  { label: 'Inbox', href: '/dashboard/inbox' },
  { label: 'Bots', href: '/dashboard/bots' },
  { label: 'Payments', href: '/dashboard/payments' }
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Sebelas Admin</p>
            <p className="font-heading text-lg">Control Room</p>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-ink">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/auth"
            className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
          >
            Sign out
          </Link>
        </div>
      </header>
      {children}
    </div>
  );
}
