import { Module } from '@nestjs/common';
import { InboxController } from './inbox.controller';
import { InboxGateway } from './inbox.gateway';

@Module({
  controllers: [InboxController],
  providers: [InboxGateway]
})
export class InboxModule {}
