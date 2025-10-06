import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { NotificationModule } from './notification.module';

async function bootstrap() {
  const appContext =
    await NestFactory.createApplicationContext(NotificationModule);

  const configService = appContext.get(ConfigService);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    NotificationModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['kafka:9092'],
          clientId: 'NOTIFICATION_SERVICE',
        },
        consumer: {
          groupId: 'notification-group',
        },
      },
    },
  );
  await app.listen();
  console.log(
    `Notification service running at ${configService.get<string>('NOTIFICATION_SERVICE_URL')}`,
  );
}
bootstrap();
