import { Button } from '../../components/ui/button';

export default function AuthPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-5xl grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Sebelas Store</p>
          <h1 className="font-heading text-4xl leading-tight sm:text-5xl">
            Control every store, bot, and channel in one cinematic cockpit.
          </h1>
          <p className="text-slate-600 text-lg">
            Centralize Telegram, WhatsApp, and email conversations with live order and payment intelligence.
          </p>
          <div className="flex gap-4">
            <Button>Sign in</Button>
            <Button variant="outline">Request access</Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 text-sm text-slate-500">
            <div className="rounded-xl border border-slate-200 bg-white/70 p-4">Unlimited stores</div>
            <div className="rounded-xl border border-slate-200 bg-white/70 p-4">Multi-bot routing</div>
            <div className="rounded-xl border border-slate-200 bg-white/70 p-4">Realtime inbox</div>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-slate-200/40">
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">Admin access</span>
              <span className="rounded-full bg-lime px-3 py-1 text-xs font-semibold text-ink">Secure</span>
            </div>
            <div className="space-y-3">
              <input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Email" />
              <input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Password" type="password" />
            </div>
            <Button className="w-full">Enter dashboard</Button>
            <p className="text-xs text-slate-400">
              Demo only. Connect to the API for live authentication.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
