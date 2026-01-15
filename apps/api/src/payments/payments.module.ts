import { Module } from '@nestjs/common';
import { EncryptionService } from '../common/encryption.service';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService, EncryptionService]
})
export class PaymentsModule {}
