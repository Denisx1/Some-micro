import { RpcException } from '@nestjs/microservices';

// База для бизнес-ошибок (DLT)
export abstract class DomainError extends RpcException {
  constructor(public readonly errorDetails: { code: number; message: string }) {
    super(errorDetails);
  }
}

// База для инфраструктурных ошибок (Retry)
export abstract class InfrastructureError extends RpcException {
  constructor(public readonly errorDetails: { code: number; message: string }) {
    super(errorDetails);
  }
}
