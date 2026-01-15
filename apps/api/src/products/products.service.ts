import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  listByStore(storeId: string) {
    return this.prisma.product.findMany({ where: { storeId } });
  }

  create(storeId: string, data: { name: string; price: number; description?: string }) {
    return this.prisma.product.create({
      data: {
        storeId,
        name: data.name,
        price: data.price,
        description: data.description || ''
      }
    });
  }

  getById(id: string) {
    return this.prisma.product.findUnique({ where: { id } });
  }
}
