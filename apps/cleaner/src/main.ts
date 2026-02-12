import { NestFactory } from '@nestjs/core';
import { CleanerMainModule } from './cleaner.module';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { GRPC_PRISMA_SERVICES } from '@app/common/domain';
import { KafkaConfig } from '@app/common/infrastructure/kafka/kafka.factory';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(CleanerMainModule);
  const config = app.get(ConfigService);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: GRPC_PRISMA_SERVICES.CLEANER.toLowerCase(),
      url: config.get<string>('CLEANER_SERVICE_URL'),
      protoPath:
        process.cwd() + config.get<string>('CLEANER_SERVICE_PROTO_PATH'),
    },
  });
  app.connectMicroservice(
    KafkaConfig.getConsumerConfig(
      GRPC_PRISMA_SERVICES.CLEANER,
      'cleaner-group',
    ),
  );

  app.enableShutdownHooks();
  await app.startAllMicroservices();
  await app.init();
  console.log(
    `Cleaner service running at ${config.get<string>('CLEANER_SERVICE_URL')}`,
  );
}
bootstrap();
