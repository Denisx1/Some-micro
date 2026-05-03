import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';

import { EmailStrategy } from './application/strategy/email.strategy';
import { ApplicationModule } from './application/application.module';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/apps/notification/.env`,
    }),
    ApplicationModule,
    PresentationModule,
  ],

  providers: [],
})
export class NotificationModule {}
