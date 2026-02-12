import { NestFactory } from '@nestjs/core';
import { RoleModule } from './role.module';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { GRPC_PRISMA_SERVICES } from '@app/common/domain';
import { InternalRpcExceptionsFilter } from '@app/common/system';

async function bootstrap() {
  const app = await NestFactory.create(RoleModule);

  const config = app.get(ConfigService);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: GRPC_PRISMA_SERVICES.ROLE.toLowerCase(),
      url: config.get('ROLE_SERVICE_URL'),
      protoPath: process.cwd() + config.get<string>('ROLE_SERVICE_PROTO_PATH'),
    },
  });
  app.enableShutdownHooks();

  await app.startAllMicroservices();
  await app.init();
  console.log(
    `Role service running at ${config.get<string>('ROLE_SERVICE_URL')}`,
  );
}
bootstrap();
