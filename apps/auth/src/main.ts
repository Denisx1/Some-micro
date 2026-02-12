import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { GRPC_PRISMA_SERVICES } from '@app/common/domain';
import { InternalRpcExceptionsFilter } from '@app/common/system';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const config = app.get(ConfigService);
  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      package: GRPC_PRISMA_SERVICES.AUTH.toLowerCase(),
      url: config.get('AUTH_SERVICE_URL'),
      protoPath: process.cwd() + config.get<string>('AUTH_SERVICE_PROTO_PATH'),
    },
  });
  app.useGlobalFilters(new InternalRpcExceptionsFilter());
  await app.startAllMicroservices();
  await app.init();
  console.log(
    'Auth service is running on port',
    config.get<number>('AUTH_SERVICE_URL'),
  );
}
bootstrap();
