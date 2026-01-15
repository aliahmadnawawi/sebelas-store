import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EncryptionService } from '../common/encryption.service';

@Injectable()
export class PaymentsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly encryption: EncryptionService
  ) {}

  list(storeId?: string) {
    return this.prisma.paymentProvider.findMany({
      where: storeId ? { storeId } : undefined
    });
  }

  async create(data: { storeId: string; provider: string; apiKey?: string }) {
    const apiKeyEncrypted = data.apiKey ? this.encryption.encrypt(data.apiKey) : undefined;
    return this.prisma.paymentProvider.create({
      data: {
        storeId: data.storeId,
        provider: data.provider,
        apiKeyEncrypted
      }
    });
  }
}
