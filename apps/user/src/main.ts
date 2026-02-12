import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { GRPC_PRISMA_SERVICES } from '@app/common/domain';
import { KafkaConfig } from '@app/common/infrastructure/kafka/kafka.factory';

async function bootstrap() {
  // ЧИСТЫЙ МИКРОСЕРВИС — БЕЗ HTTP
  const app = await NestFactory.create(UserModule);
  const config = app.get(ConfigService);

  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      package: GRPC_PRISMA_SERVICES.USER.toLowerCase(),
      url: config.get('USER_SERVICE_URL'),
      protoPath: process.cwd() + config.get<string>('USER_SERVICE_PROTO_PATH'),
    },
  });
  app.connectMicroservice(
    KafkaConfig.getConsumerConfig(GRPC_PRISMA_SERVICES.USER, 'user-group'),
  );

  app.enableShutdownHooks();

  await app.startAllMicroservices();

  await app.init();

  console.log('🚀 UserService (gRPC + Kafka + Scheduler) успешно запущен');
}

bootstrap();
