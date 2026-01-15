import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';

const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/v1';

interface Thread {
  id: string;
  customer: string;
  channel: string;
  store: string;
  preview: string;
  status: string;
}

interface Message {
  id: string;
  from: string;
  time: string;
  text: string;
}

async function getThreads(): Promise<Thread[]> {
  const res = await fetch(`${apiBase}/inbox/threads`, { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

async function getMessages(threadId: string): Promise<Message[]> {
  const res = await fetch(`${apiBase}/inbox/messages?threadId=${threadId}`, { cache: 'no-store' });
  if (!res.ok) return [];
  const data = await res.json();
  return data.messages || [];
}

export default async function InboxPage() {
  const threads = await getThreads();
  const activeThread = threads[0];
  const messages = activeThread ? await getMessages(activeThread.id) : [];

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Omnichannel Inbox</p>
            <h1 className="font-heading text-3xl">Realtime conversations</h1>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Filter</Button>
            <Button>Assign to me</Button>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_1.9fr]">
          <Card className="bg-white/80">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Threads</CardTitle>
              <Badge>{threads.length} live</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              {threads.map((thread) => (
                <button
                  key={thread.id}
                  className="w-full rounded-2xl border border-slate-200 bg-white/70 p-4 text-left transition hover:border-ink"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-ink">{thread.customer}</p>
                    <span className="text-xs text-slate-400">{thread.channel}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{thread.preview}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                    <span>{thread.store}</span>
                    <span className="rounded-full bg-slate-100 px-2 py-1">{thread.status}</span>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/80">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Conversation</CardTitle>
              <Badge variant="outline">{activeThread?.channel || 'Channel'}</Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>{message.from}</span>
                      <span>{message.time}</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-700">{message.text}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <input
                  className="flex-1 rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                  placeholder={`Reply to ${activeThread?.customer || 'customer'}...`}
                />
                <Button>Send</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
