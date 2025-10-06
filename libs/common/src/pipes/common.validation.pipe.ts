import { ValidationError, ValidationPipe } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { status as GrpcStatus } from '@grpc/grpc-js';

export class AppValidationPipe extends ValidationPipe {
  constructor(serviceName: string) {
    super({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const details = errors.map((err) => ({
          field: err.property,
          message: err.constraints
            ? Object.values(err.constraints)
            : 'Invalid value',
        }));
        return new RpcException({
          code: GrpcStatus.INVALID_ARGUMENT,
          details: JSON.stringify({
            details,
            serviceName,
            context: 'AppValidationPipe',
            status: 'error',
          }),
        });
      },
    });
  }
}
