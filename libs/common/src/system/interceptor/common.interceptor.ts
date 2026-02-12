import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, throwError, timer } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ServiceUnavailableError } from '@app/common/system'; // Твоя ошибка
import { status } from '@grpc/grpc-js';

@Injectable()
export class GrpcClientInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      retry({
        count: 3, // Пробуем 3 раза
        delay: (error, retryCount) => {
          const serviceName =
            error.message.split('dns:')[1]?.split(':')[0] || 'unknown-service';
          if (
            error.code === status.UNAVAILABLE ||
            error.code === status.DEADLINE_EXCEEDED
          ) {
            console.warn(
              `[Retry ${retryCount}] Сервис ${serviceName} упал, пробую еще раз через ${retryCount * 2000}мс...`,
            );
            return timer(retryCount * 2000); // Экспоненциальная задержка: 2с, 4с, 6с
          }
          return throwError(() => error);
        },
      }),
      catchError((err) => {
        // Если код 14 (сервис недоступен) или 4 (таймаут)
        const serviceName =
          err.message.split('dns:')[1]?.split(':')[0] || 'unknown-service';

        if (
          err.code === status.UNAVAILABLE ||
          err.code === status.DEADLINE_EXCEEDED
        ) {
          // Превращаем системную ошибку gRPC в твою красивую ошибку
          return throwError(() => new ServiceUnavailableError(serviceName));
        }
        // Все остальные ошибки (404, Already Exists) пробрасываем как есть
        return throwError(() => err);
      }),
    );
  }
}
