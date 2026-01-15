import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StoresService {
  constructor(private readonly prisma: PrismaService) {}

  list() {
    return this.prisma.store.findMany({ include: { products: true } });
  }

  create(data: { name: string; slug: string; ownerId?: string }) {
    return this.prisma.store.create({
      data: {
        name: data.name,
        slug: data.slug,
        ownerId: data.ownerId || undefined
      }
    });
  }

  getById(id: string) {
    return this.prisma.store.findUnique({ where: { id }, include: { products: true } });
  }
}
