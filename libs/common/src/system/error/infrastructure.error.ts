import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';
import { InfrastructureError } from './base.error';

// export class InfrastructureError extends RpcException {
//   constructor(infarstructure: string) {
//     super({
//       code: status.UNAVAILABLE,
//       message: `${infarstructure} unavailable`,
//     });
//   }
// }

export class ServiceUnavailableError extends InfrastructureError {
  constructor(entity: string = 'Service') {
    super({
      code: status.UNAVAILABLE,
      message: `${entity} is currently unavailable`,
    });
  }
}

export class DatabaseError extends InfrastructureError {
  constructor(entity: string = 'Database') {
    super({
      code: status.INTERNAL, // Обычно 13 (Internal)
      message: `${entity} connection error or timeout`,
    });
  }
}

export class RedisError extends InfrastructureError {
  constructor(operation: string = 'cache access') {
    super({
      code: status.INTERNAL,
      message: `Redis error during ${operation}`,
    });
  }
}
