import { Body, Controller, Param, Post } from '@nestjs/common';
import { QueueService } from '../queue/queue.service';

@Controller('webhooks')
export class WebhooksController {
  constructor(private readonly queue: QueueService) {}

  @Post('telegram/:botId')
  async telegram(@Param('botId') botId: string, @Body() payload: Record<string, unknown>) {
    await this.queue.enqueue('telegram.inbound', { botId, payload });
    return { received: true };
  }

  @Post('whatsapp/:botId')
  async whatsapp(@Param('botId') botId: string, @Body() payload: Record<string, unknown>) {
    await this.queue.enqueue('whatsapp.inbound', { botId, payload });
    return { received: true };
  }

  @Post('payments/:provider/:storeId')
  async payments(
    @Param('provider') provider: string,
    @Param('storeId') storeId: string,
    @Body() payload: Record<string, unknown>
  ) {
    await this.queue.enqueue('payments.callback', { provider, storeId, payload });
    return { received: true, autoConfirmed: true };
  }
}
