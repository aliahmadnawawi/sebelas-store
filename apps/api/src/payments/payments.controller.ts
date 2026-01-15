import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly payments: PaymentsService) {}

  @Get('providers')
  list(@Query('storeId') storeId?: string) {
    return this.payments.list(storeId);
  }

  @Post('providers')
  create(@Body() body: { storeId: string; provider: string; apiKey?: string }) {
    return this.payments.create(body);
  }
}
