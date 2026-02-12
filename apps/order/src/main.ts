import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { GRPC_PRISMA_SERVICES } from '@app/common/domain';
import { OrderModule } from './order.module';
import { Partitioners } from 'kafkajs';
import { InternalRpcExceptionsFilter } from '@app/common/system';

async function bootstrap() {
  // ЧИСТЫЙ МИКРОСЕРВИС — БЕЗ HTTP
  const app = await NestFactory.create(OrderModule);
  const config = app.get(ConfigService);
  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      package: GRPC_PRISMA_SERVICES.ORDER.toLowerCase(),
      url: config.get('ORDER_SERVICE_URL'),
      protoPath: process.cwd() + config.get<string>('ORDER_SERVICE_PROTO_PATH'),
    },
  });
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['kafka:9092'],
        clientId: 'ORDER_SERVICE',
      },
      consumer: {
        groupId: 'order-group',

        sessionTimeout: 8000,
        heartbeatInterval: 2500,
      },
    },
  });
  app.enableShutdownHooks();

  app.useGlobalFilters(new InternalRpcExceptionsFilter());
  await app.startAllMicroservices();
  await app.init();
  console.log('🚀 OrderService запущен (gRPC, без HTTP)');
}

bootstrap();
