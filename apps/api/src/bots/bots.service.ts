import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EncryptionService } from '../common/encryption.service';

@Injectable()
export class BotsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly encryption: EncryptionService
  ) {}

  list() {
    return this.prisma.bot.findMany();
  }

  async create(data: { name: string; type: 'TELEGRAM' | 'WHATSAPP'; token: string; storeId: string }) {
    const tokenEncrypted = this.encryption.encrypt(data.token);
    return this.prisma.bot.create({
      data: {
        name: data.name,
        type: data.type,
        storeId: data.storeId,
        tokenEncrypted
      }
    });
  }

  getById(id: string) {
    return this.prisma.bot.findUnique({ where: { id } });
  }
}
