import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller()
export class ProductsController {
  constructor(private readonly products: ProductsService) {}

  @Get('stores/:storeId/products')
  list(@Param('storeId') storeId: string) {
    return this.products.listByStore(storeId);
  }

  @Post('stores/:storeId/products')
  create(
    @Param('storeId') storeId: string,
    @Body() body: { name: string; price: number; description?: string }
  ) {
    return this.products.create(storeId, body);
  }

  @Get('products/:id')
  get(@Param('id') id: string) {
    return this.products.getById(id);
  }
}
