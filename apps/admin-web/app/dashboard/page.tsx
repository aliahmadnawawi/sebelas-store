import Link from 'next/link';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

const stores = [
  { name: 'Demo Store', slug: 'demo-store', inbox: 24, orders: 12 },
  { name: 'Sebelas Style', slug: 'sebelas-style', inbox: 8, orders: 5 },
  { name: 'Collective Market', slug: 'collective-market', inbox: 14, orders: 9 }
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Omnichannel HQ</p>
            <h1 className="font-heading text-4xl">Sebelas Command Center</h1>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Connect bot</Button>
            <Button>New store</Button>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <Card className="bg-white/80">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Live inbox momentum</CardTitle>
              <Badge>Realtime</Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-ink text-white p-5">
                  <p className="text-sm text-white/60">Active chats</p>
                  <p className="text-3xl font-heading">46</p>
                  <p className="text-xs text-white/60">Across Telegram + WhatsApp</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-sm text-slate-500">Pending payments</p>
                  <p className="text-3xl font-heading">17</p>
                  <p className="text-xs text-slate-400">Tripay + Saweria</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-sm text-slate-500">Queues</p>
                  <p className="text-3xl font-heading">3</p>
                  <p className="text-xs text-slate-400">Webhook backlog</p>
                </div>
              </div>
              <div className="rounded-2xl border border-dashed border-slate-300 p-6">
                <p className="text-sm text-slate-500">Integrations</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Badge variant="outline">Telegram bots</Badge>
                  <Badge variant="outline">WhatsApp Cloud API</Badge>
                  <Badge variant="outline">Email channels</Badge>
                  <Badge variant="outline">Tripay</Badge>
                  <Badge variant="outline">Pakasir</Badge>
                  <Badge variant="outline">Saweria</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80">
            <CardHeader>
              <CardTitle>Queue health</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-2xl bg-slate-900 text-white p-4">
                <p className="text-xs text-white/50">BullMQ</p>
                <p className="text-lg font-heading">0 failed</p>
                <p className="text-xs text-white/50">Peak 200 jobs/min</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm text-slate-500">WebSocket connections</p>
                <p className="text-2xl font-heading">124</p>
              </div>
              <Button variant="outline" className="w-full">Open inbox</Button>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <Card className="bg-white/80">
            <CardHeader>
              <CardTitle>Inbox</CardTitle>
              <p className="text-xs text-slate-500">Telegram + WhatsApp</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-500">Respond to customers in realtime.</p>
              <Link href="/dashboard/inbox" className="inline-flex">
                <Button variant="outline" className="w-full">Open inbox</Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="bg-white/80">
            <CardHeader>
              <CardTitle>Bots</CardTitle>
              <p className="text-xs text-slate-500">Unlimited channels</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-500">Connect Telegram and WhatsApp bots.</p>
              <Link href="/dashboard/bots" className="inline-flex">
                <Button variant="outline" className="w-full">Manage bots</Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="bg-white/80">
            <CardHeader>
              <CardTitle>Payments</CardTitle>
              <p className="text-xs text-slate-500">Tripay + Pakasir</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-500">Set up providers and callbacks.</p>
              <Link href="/dashboard/payments" className="inline-flex">
                <Button variant="outline" className="w-full">Configure</Button>
              </Link>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4">
          <h2 className="font-heading text-2xl">Stores at a glance</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {stores.map((store) => (
              <Card key={store.slug} className="bg-white/80">
                <CardHeader>
                  <CardTitle>{store.name}</CardTitle>
                  <p className="text-xs text-slate-500">{store.slug}.sebelasindonesia.app</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Inbox</span>
                    <span className="text-sm font-semibold">{store.inbox} chats</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Orders</span>
                    <span className="text-sm font-semibold">{store.orders} today</span>
                  </div>
                  <Button variant="outline" className="w-full">Open store</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
