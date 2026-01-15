import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StoresService } from './stores.service';

@Controller('stores')
export class StoresController {
  constructor(private readonly stores: StoresService) {}

  @Get()
  list() {
    return this.stores.list();
  }

  @Post()
  create(@Body() body: { name: string; slug: string; ownerId?: string }) {
    return this.stores.create(body);
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.stores.getById(id);
  }
}
