import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';

const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/v1';

interface Provider {
  id: string;
  provider: string;
  storeId: string;
  enabled: boolean;
}

async function getProviders(): Promise<Provider[]> {
  const res = await fetch(`${apiBase}/payments/providers`, { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function PaymentsPage() {
  const providers = await getProviders();

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Payments</p>
            <h1 className="font-heading text-3xl">Provider setup</h1>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Generate keys</Button>
            <Button>Add provider</Button>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Card className="bg-white/80">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Active providers</CardTitle>
              <Badge>Encrypted keys</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              {providers.map((provider) => (
                <div key={provider.id} className="rounded-2xl border border-slate-200 bg-white/70 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-ink">{provider.provider}</p>
                    <Badge variant={provider.enabled ? 'soft' : 'outline'}>
                      {provider.enabled ? 'Connected' : 'Pending'}
                    </Badge>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">
                    Callback: /webhooks/payments/{provider.provider.toLowerCase()}/{provider.storeId}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <Button variant="outline" size="sm">Edit keys</Button>
                    <Button size="sm">Test webhook</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/80">
            <CardHeader>
              <CardTitle>Checkout flow</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-ink">Auto confirmation</p>
                <p className="text-xs text-slate-500">Enable payment callbacks to confirm orders instantly.</p>
                <Button variant="outline" className="mt-4 w-full">Enable callbacks</Button>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-ink">Encrypted secrets</p>
                <p className="text-xs text-slate-500">Keys are stored with AES-256-GCM encryption.</p>
                <Button className="mt-4 w-full">Rotate secrets</Button>
              </div>
              <div className="rounded-2xl border border-dashed border-slate-300 p-4 text-xs text-slate-500">
                Payment UI setup only. Use API to process live transactions.
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
