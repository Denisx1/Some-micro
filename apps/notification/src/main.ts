import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NotificationModule } from './notification.module';

async function bootstrap() {
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
  console.log('Notification service is running');
}
bootstrap();
