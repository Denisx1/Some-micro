import { Injectable } from '@nestjs/common';
import { AuthCacheService } from '../../infrastructure/cashe/auth.cache.service';
import { AuthRepository } from '../../infrastructure/repositories/auth.repository';
import {
  AuthPayload,
  KafkaTopics,
  LogoutData,
  USER_LOGOUT_ONE,
  UserActions,
} from '@app/common/domain';
import { forkJoin, from, map, mergeMap, Observable } from 'rxjs';
import { AuthOutboxRepository } from '../../infrastructure/repositories/auth.outbox.repository';
import { UnauthenticatedError } from '@app/common/system';

@Injectable()
export class LogoutService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly authCasheService: AuthCacheService,
    private readonly authOutboxRepository: AuthOutboxRepository,
  ) {}
  public execute(logoutData: LogoutData): Observable<void> {
    return this.logined(logoutData).pipe(
      mergeMap((authed: AuthPayload) => {
        return forkJoin([
          from(this.authCasheService.delMetadata(authed.userId)),
          from(this.authRepository.deleteOne(authed.id, logoutData.deviceName)),
        ]);
      }),
      mergeMap(() =>
        from(
          this.authOutboxRepository.createEvent({
            topic: KafkaTopics.USER_LOGOUT,
            payload: {
              id: logoutData.userId,
            },
          }),
        ),
      ),
      map(() => undefined),
    );
  }

  private logined(logoutData: LogoutData): Observable<AuthPayload> {
    return from(
      this.authRepository.findByUserAndDevice(
        logoutData.userId,
        logoutData.deviceName,
      ),
    ).pipe(
      map((logined: AuthPayload) => {
        if (!logined) throw new UnauthenticatedError();
        return logined;
      }),
    );
  }
}
