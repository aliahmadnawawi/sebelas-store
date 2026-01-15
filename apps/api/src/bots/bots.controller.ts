import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BotsService } from './bots.service';

@Controller('bots')
export class BotsController {
  constructor(private readonly bots: BotsService) {}

  @Get()
  list() {
    return this.bots.list();
  }

  @Post()
  create(
    @Body() body: { name: string; type: 'TELEGRAM' | 'WHATSAPP'; token: string; storeId: string }
  ) {
    return this.bots.create(body);
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.bots.getById(id);
  }
}
