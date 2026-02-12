import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { status } from '@grpc/grpc-js';
import { FastifyReply } from 'fastify';

@Catch() // Ловим всё, так как gRPC ошибка может прийти как простой Object
export class GatewayExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const reply = ctx.getResponse<FastifyReply>();

    // gRPC ошибка обычно лежит в поле 'code' и 'details'
    // Если exception.getError() не работает, берем напрямую из объекта
    const grpcCode =
      exception.code ?? exception.getError?.().code ?? status.INTERNAL;
    const rawMessage =
      exception.details ?? exception.message ?? 'Unknown Error';
    // Маппинг gRPC -> HTTP
    const grpcToHttpMap: Record<number, number> = {
      [status.INVALID_ARGUMENT]: HttpStatus.BAD_REQUEST,
      [status.NOT_FOUND]: HttpStatus.NOT_FOUND,
      [status.ALREADY_EXISTS]: HttpStatus.CONFLICT,
      [status.PERMISSION_DENIED]: HttpStatus.FORBIDDEN,
      [status.UNAUTHENTICATED]: HttpStatus.UNAUTHORIZED,
      [status.INTERNAL]: HttpStatus.INTERNAL_SERVER_ERROR,
    };

    const code = grpcToHttpMap[grpcCode] || HttpStatus.INTERNAL_SERVER_ERROR;

    // Очистка сообщения (убираем "5 NOT_FOUND: ")
    const cleanMessage = rawMessage.includes(':')
      ? rawMessage.split(':').pop().trim()
      : rawMessage;

    return reply.status(code).send({
      status: false,
      code,
      message: cleanMessage,
    });
  }

  // Вспомогательный метод, чтобы вместо "5" написать "NOT_FOUND"

  private mapGrpcCodeToHttp(code: number): number {
    switch (code) {
      case 3:
        return HttpStatus.BAD_REQUEST;
      case 5:
        return HttpStatus.NOT_FOUND;
      case 7:
        return HttpStatus.FORBIDDEN;
      case 16:
        return HttpStatus.UNAUTHORIZED;
      case 14:
        return HttpStatus.SERVICE_UNAVAILABLE;
      default:
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }
  }
}
