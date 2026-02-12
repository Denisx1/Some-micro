import { NestFactory } from '@nestjs/core';
import { RegistrationModule } from './registration.module';
import { GRPC_NON_PRISMA_SERVICES } from '@app/common/domain';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(RegistrationModule);
  const configService = app.get(ConfigService);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: GRPC_NON_PRISMA_SERVICES.REGISTRATION.toLocaleLowerCase(),
      url: configService.get<string>('REGISTRATION_SERVICE_URL'),
      protoPath:
        process.cwd() +
        configService.get<string>('REGISTRATION_SERVICE_PROTO_PATH'),
    },
  });

  await app.startAllMicroservices();
  console.log(
    `✅ registration-service на gRPC: ${configService.get<string>(
      'REGISTRATION_SERVICE_URL',
    )}`,
  );
}
bootstrap();
