import { NestFactory } from '@nestjs/core';
import { ProjectionModule } from './projection.module';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';
import { GRPC_MONGO_SERVICES } from '@app/common/domain';

async function bootstrap() {
  // ЧИСТЫЙ МИКРОСЕРВИС — БЕЗ HTTP
  const app = await NestFactory.create(ProjectionModule);
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['kafka:9092'],
        clientId: 'PROJECTION_SERVICE',
      },
      consumer: {
        groupId: 'projection',
      },
    },
  });
  await app.startAllMicroservices();
  await app.listen('1111');
  console.log('🚀 Projection service запущен (gRPC, без HTTP)');
}
bootstrap();
