import { Module } from '@nestjs/common';
import { EncryptionService } from '../common/encryption.service';
import { BotsController } from './bots.controller';
import { BotsService } from './bots.service';

@Module({
  controllers: [BotsController],
  providers: [BotsService, EncryptionService]
})
export class BotsModule {}
