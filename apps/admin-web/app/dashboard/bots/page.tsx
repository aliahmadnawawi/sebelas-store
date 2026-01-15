import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';

const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/v1';

interface Bot {
  id: string;
  name: string;
  type: 'TELEGRAM' | 'WHATSAPP';
  storeId: string;
}

async function getBots(): Promise<Bot[]> {
  const res = await fetch(`${apiBase}/bots`, { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function BotsPage() {
  const bots = await getBots();

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Automation</p>
            <h1 className="font-heading text-3xl">Bots + adapters</h1>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Import provider</Button>
            <Button>New bot</Button>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Card className="bg-white/80">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Connected bots</CardTitle>
              <Badge>Unlimited</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              {bots.map((bot) => (
                <div key={bot.id} className="rounded-2xl border border-slate-200 bg-white/70 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-ink">{bot.name}</p>
                      <p className="text-xs text-slate-500">{bot.storeId}</p>
                    </div>
                    <Badge variant="outline">{bot.type}</Badge>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                    <span>Webhook configured</span>
                    <button className="text-xs font-semibold text-ink">Manage</button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/80">
            <CardHeader>
              <CardTitle>WhatsApp providers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-ink">Meta Cloud API</p>
                <p className="text-xs text-slate-500">Native integration with webhook verification.</p>
                <Button variant="outline" className="mt-4 w-full">Configure</Button>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-ink">Third-party adapter</p>
                <p className="text-xs text-slate-500">Bring your own provider with custom payload mapping.</p>
                <Button className="mt-4 w-full">Add adapter</Button>
              </div>
              <div className="rounded-2xl border border-dashed border-slate-300 p-4 text-xs text-slate-500">
                Adapter SDK ready for on-premise WhatsApp partners.
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
