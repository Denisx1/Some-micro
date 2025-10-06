import { Module, Inject } from '@nestjs/common';
import { NotificationService } from './notification.service';

import { ClientsModule } from '@nestjs/microservices';
import { AUTH_SERVICE } from '@app/common/types/auth';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';
import { NotificationController } from './notification.controller';
import { EmailStrategy } from './strategy/email.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/apps/notification/.env`,
    }),
    ClientsModule.registerAsync([
      {
        name: AUTH_SERVICE,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          name: AUTH_SERVICE,
          transport: Transport.GRPC,
          options: {
            url: configService.get<string>('AUTH_SERVICE_URL'),
            package: 'auth',
            protoPath:
              process.cwd() +
              configService.get<string>('AUTH_SERVICE_PROTO_PATH'),
          },
        }),
      },
      {
        name: 'KAFKA_CONSUMER',
        useFactory: () => ({
          transport: Transport.KAFKA,
          options: {
            client: {
              clientId: 'NOTIFICATION_SERVICE',
              brokers: ['kafka:9092'],
            },
            consumer: {
              groupId: 'notification-group',
              connectionTimeout: 3000, // default 1000
              requestTimeout: 3000,
            },
          },
        }),
      },
    ]),
  ],
  controllers: [NotificationController],
  providers: [NotificationService, EmailStrategy],
})
export class NotificationModule {}
