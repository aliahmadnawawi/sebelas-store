import { Controller, Get, Query } from '@nestjs/common';

const THREADS = [
  {
    id: 't1',
    customer: 'Nadine R.',
    channel: 'Telegram',
    store: 'demo-store',
    preview: 'Can you ship the Weekend Capsule today?',
    status: 'New'
  },
  {
    id: 't2',
    customer: 'Rafi A.',
    channel: 'WhatsApp',
    store: 'sebelas-style',
    preview: 'Need the invoice for payment confirmation.',
    status: 'Pending'
  },
  {
    id: 't3',
    customer: 'Citra M.',
    channel: 'Email',
    store: 'collective-market',
    preview: 'Do you have bulk pricing for 50 units?',
    status: 'VIP'
  }
];

const MESSAGES = [
  {
    id: 'm1',
    from: 'Nadine R.',
    time: '09:42',
    text: 'Can you ship the Weekend Capsule today?'
  },
  {
    id: 'm2',
    from: 'Sebelas Agent',
    time: '09:43',
    text: 'Yes, we can dispatch in 2 hours with Tripay checkout.'
  },
  {
    id: 'm3',
    from: 'Nadine R.',
    time: '09:44',
    text: 'Great, share the payment link please.'
  }
];

@Controller('inbox')
export class InboxController {
  @Get('threads')
  listThreads() {
    return THREADS;
  }

  @Get('messages')
  listMessages(@Query('threadId') threadId?: string) {
    return { threadId: threadId || 't1', messages: MESSAGES };
  }
}
