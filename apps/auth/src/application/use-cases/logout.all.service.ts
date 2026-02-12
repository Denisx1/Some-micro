import { Injectable } from '@nestjs/common';
import { AuthCacheService } from '../../infrastructure/cashe/auth.cache.service';
import { AuthRepository } from '../../infrastructure/repositories/auth.repository';
import {
  AuthPayload,
  KafkaTopics,
  LogoutData,
  USER_LOGOUT_ALL,
} from '@app/common/domain';
import { forkJoin, from, map, mergeMap, Observable } from 'rxjs';
import { AuthOutboxRepository } from '../../infrastructure/repositories/auth.outbox.repository';
import { NotFoundError } from '@app/common/system';

@Injectable()
export class LogoutAllService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly authCasheService: AuthCacheService,
    private readonly authOutboxRepository: AuthOutboxRepository,
  ) {}
  execute(logoutData: LogoutData): Observable<void> {
    const { userId } = logoutData;
    return this.logined(logoutData).pipe(
      mergeMap(() => {
        return forkJoin([
          from(this.authCasheService.delMetadata(userId)),
          from(this.authRepository.deleteAll(userId)),
        ]);
      }),
      mergeMap(() =>
        from(
          this.authOutboxRepository.createEvent({
            topic: KafkaTopics.USER_LOGOUT_ALL,
            payload: {
              id: userId,
            },
          }),
        ),
      ),
      map(() => undefined),
    );
  }

  private logined(logoutData: LogoutData): Observable<AuthPayload> {
    const { userId, deviceName } = logoutData;
    return from(
      this.authRepository.findByUserAndDevice(userId, deviceName),
    ).pipe(
      map((logined: AuthPayload) => {
        if (!logined) throw new NotFoundError(deviceName);
        return logined;
      }),
    );
  }
}
