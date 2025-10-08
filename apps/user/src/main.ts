import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { AppValidationPipe } from '@app/common';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(UserModule);

  const configService = appContext.get(ConfigService);
  const app = await NestFactory.createMicroservice(UserModule, {
    transport: Transport.GRPC,
    options: {
      package: 'user',
      url: configService.get<string>('USER_SERVICE_URL'),
      protoPath:
        process.cwd() + configService.get<string>('USER_SERVICE_PROTO_PATH'),
    },
  });

  await app.listen();

}
bootstrap();
