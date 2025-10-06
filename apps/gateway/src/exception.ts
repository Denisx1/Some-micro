import {
  ArgumentsHost,
  Catch,
  HttpStatus,
  ExceptionFilter,
} from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { status as GrpcStatus } from '@grpc/grpc-js';
import { GrpcException } from '@app/common/types/exception';

@Catch()
export class ExceptionFilterGateway implements ExceptionFilter {
  catch(exception: GrpcException<string>, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();

    const { serviceName, status, context, details, timestamp } = JSON.parse(
      exception.details,
    );

    const mainError = {
      code: this.mapGrpcToHttp(exception.code),
      status,
      serviceName,
      context,
      details,
      timestamp,
    };

    const httpStatus = this.mapGrpcToHttp(exception.code);
    response.status(httpStatus).send(mainError);
  }

  private mapGrpcToHttp(grpcCode: number): number {
    const code = grpcCode as GrpcStatus; // привели к enum
    switch (code) {
      case GrpcStatus.INVALID_ARGUMENT:
        return HttpStatus.BAD_REQUEST;
      case GrpcStatus.NOT_FOUND:
        return HttpStatus.NOT_FOUND;
      case GrpcStatus.ALREADY_EXISTS:
        return HttpStatus.CONFLICT;
      case GrpcStatus.PERMISSION_DENIED:
        return HttpStatus.FORBIDDEN;
      case GrpcStatus.UNAUTHENTICATED:
        return HttpStatus.UNAUTHORIZED;
      case GrpcStatus.INTERNAL:
        return HttpStatus.INTERNAL_SERVER_ERROR;
      default:
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }
  }
}
