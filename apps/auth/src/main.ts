import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(AuthModule);

  const configService = appContext.get(ConfigService);
  const app = await NestFactory.createMicroservice(AuthModule, {
    transport: Transport.GRPC,
    options: {
      package: 'auth',
      url: configService.get<string>('AUTH_SERVICE_URL'),
      protoPath:
        process.cwd() + configService.get<string>('AUTH_SERVICE_PROTO_PATH'),
    },
  });
  await app.listen();
  console.log(
    'Auth service is running on port',
    configService.get<number>('AUTH_SERVICE_URL'),
  );
}
bootstrap();
