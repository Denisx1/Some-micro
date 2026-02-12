import { NestFactory } from '@nestjs/core';
import { ChatMainModule } from './chat.module';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';
import { GRPC_PRISMA_SERVICES } from '@app/common/domain';
import { KafkaConfig } from '@app/common/infrastructure/kafka/kafka.factory';

async function bootstrap() {
  // ЧИСТЫЙ МИКРОСЕРВИС — БЕЗ HTTP
  const app = await NestFactory.create(ChatMainModule);
  const config = app.get(ConfigService);

  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      package: GRPC_PRISMA_SERVICES.CHAT.toLowerCase(),
      url: config.get('CHAT_SERVICE_URL'),
      protoPath: process.cwd() + config.get<string>('CHAT_SERVICE_PROTO_PATH'),
    },
  });
  app.connectMicroservice(
    KafkaConfig.getConsumerConfig(GRPC_PRISMA_SERVICES.CHAT, 'chat-group'),
  );

  app.enableShutdownHooks();

  await app.startAllMicroservices();

  await app.init();

  console.log('🚀 UserService (gRPC + Kafka + Scheduler) успешно запущен');
}

bootstrap();
