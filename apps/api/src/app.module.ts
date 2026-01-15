import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from './health.controller';
import { PrismaModule } from './prisma/prisma.module';
import { StoresModule } from './stores/stores.module';
import { ProductsModule } from './products/products.module';
import { BotsModule } from './bots/bots.module';
import { WebhooksModule } from './webhooks/webhooks.module';
import { InboxModule } from './inbox/inbox.module';
import { QueueModule } from './queue/queue.module';
import { PaymentsModule } from './payments/payments.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    QueueModule,
    StoresModule,
    ProductsModule,
    BotsModule,
    PaymentsModule,
    WebhooksModule,
    InboxModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
