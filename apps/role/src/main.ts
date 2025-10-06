import { NestFactory } from '@nestjs/core';
import { RoleModule } from './role.module';
import { ConfigService } from '@nestjs/config';
import { RpcException, Transport } from '@nestjs/microservices';
import { ValidationError, ValidationPipe } from '@nestjs/common';
import { status as GrpcStatus } from '@grpc/grpc-js';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(RoleModule);
  const configService = appContext.get(ConfigService);

  const app = await NestFactory.createMicroservice(RoleModule, {
    transport: Transport.GRPC,
    options: {
      package: 'role',
      url: configService.get<string>('ROLE_SERVICE_URL'),
      protoPath:
        process.cwd() + configService.get<string>('ROLE_SERVICE_PROTO_PATH'),
    },
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors) => {
        // errors — массив ValidationError из class-validator
        const first: ValidationError = errors[0];
        return new RpcException({
          code: GrpcStatus.INVALID_ARGUMENT,
          message: first.constraints
            ? Object.values(first.constraints)[0]
            : undefined,
          details: {
            field: first.property,
            context: 'ValidationPipe',
            serviceName: 'ROLE_SERVICE',
          },
        });
      },
    }),
  );
  await app.listen();
  console.log(
    `Role service running at ${configService.get<string>('ROLE_SERVICE_URL')}`,
  );
}
bootstrap();
