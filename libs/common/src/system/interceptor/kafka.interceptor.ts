import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable, of, tap, timer } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { DomainError } from "../error/base.error";
import { KafkaContext } from "@nestjs/microservices";
import { RecordMetadata } from "kafkajs";
@Injectable()
export class KafkaConsumerInterceptor implements NestInterceptor {
  constructor() {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const kafkaCtx = context.switchToRpc().getContext<KafkaContext>();
    const topic = kafkaCtx.getTopic();
    const originalMessage = kafkaCtx.getMessage();
    return next.handle().pipe(
      retry({
        count: 3,
        delay: (err, retryCount) => {
          if (err instanceof DomainError) {
            throw err;
          }
          const delayTime = Math.pow(1, retryCount - 1) * 1000;
          console.warn(
            `[RETRY] Попытка ${retryCount}/3. Ждем ${delayTime}ms...`
          );
          return timer(delayTime);
        },
      })
      // catchError((err) => {
      //   return this.handleNonRetryable(topic, originalMessage, err);
      // })
    );
  }
  // handleNonRetryable(
  //   topic: string,
  //   message: any,
  //   err: DomainError
  // ): Observable<RecordMetadata[]> {
  //   console.log(`[DLT] Ошибка домена в ${topic}. Сбрасываем в DLT.`);
  //   return this.client
  //     .emit2(`${topic}.dlt`, +message.key, {
  //       value: message.value,
  //       errors: { name: err.name, message: err.message },
  //       timestamp: Date.now(),
  //     })
  //     .pipe(
  //       tap(() => console.log(`[DLT] Ошибка записана в ${topic}.DLT`)),
  //       catchError((dltErr) => {
  //         console.error(
  //           "[DLT-FATAL] Ошибка при самой отправке в DLT:",
  //           dltErr.message
  //         );
  //         return of(null);
  //       })
  //     );
  // }
}
