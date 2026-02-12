import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';

import { ConfigModule } from '@nestjs/config';

import { NotificationController } from './notification.controller';
import { EmailStrategy } from './strategy/email.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/apps/notification/.env`,
    }),
  ],
  controllers: [NotificationController],
  providers: [NotificationService, EmailStrategy],
})
export class NotificationModule {}
