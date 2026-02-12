import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { CustomerModule } from './customer.module';
import { ConfigService } from '@nestjs/config';
import { GRPC_PRISMA_SERVICES } from '@app/common/domain';
import { InternalRpcExceptionsFilter } from '@app/common/system';

async function bootstrap() {
  const app = await NestFactory.create(CustomerModule);
  const configService = app.get(ConfigService);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: GRPC_PRISMA_SERVICES.CUSTOMER.toLocaleLowerCase(),
      url: configService.get<string>('CUSTOMER_SERVICE_URL'),
      protoPath:
        process.cwd() +
        configService.get<string>('CUSTOMER_SERVICE_PROTO_PATH'),
    },
  });
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['kafka:9092'],
        clientId: 'CUSTOMER_SERVICE',
      },
      consumer: {
        groupId: 'customer-group',
        // Чтобы не было ворнингов при резком перезапуске на Маке
        sessionTimeout: 8000,
        heartbeatInterval: 2500,
      },
    },
  });
  app.enableShutdownHooks();

  app.useGlobalFilters(new InternalRpcExceptionsFilter());
  await app.startAllMicroservices();
  console.log(
    `✅ Customer-service запущен на gRPC: ${configService.get<string>(
      'CUSTOMER_SERVICE_URL',
    )}`,
  );
}
bootstrap();
