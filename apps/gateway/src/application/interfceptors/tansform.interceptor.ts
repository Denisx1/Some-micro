import { ServiceResponse, success } from '@app/common/system';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, ServiceResponse<T>>
{
  constructor(private readonly reflector: Reflector) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ServiceResponse<T>> {
    const message = this.reflector.get<string>(
      'response_message',
      context.getHandler(),
    );

    // Если микросервис вернул {}, мы можем либо оставить его в data,
    // либо, если там только технические поля, превратить в null.
    return next.handle().pipe(
      map((data) => {
        // Вызываем твою функцию success
        // Даже если data пришла как {} или null из микросервиса, она обернется правильно
        return success(message, data);
      }),
    );
  }
}
