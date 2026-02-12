import { Injectable } from '@nestjs/common';
import { AuthCacheService } from '../../infrastructure/cashe/auth.cache.service';
import {
  ActionTokenPayload,
  ActionTokenType,
  KafkaTopics,
  SetPassordData,
} from '@app/common/domain';
import { AuthRepository } from '../../infrastructure/repositories/auth.repository';
import { HashService } from '@app/common/infrastructure/hash';
import { TokenService } from '@app/common/infrastructure';
import { from, map, mergeMap, forkJoin, Observable, of, tap } from 'rxjs';
import { AuthOutboxRepository } from '../../infrastructure/repositories/auth.outbox.repository';
import { NotFoundError } from '@app/common/system';

@Injectable()
export class ResetPasswordService {
  constructor(
    private readonly authCasheService: AuthCacheService,
    private readonly authRepository: AuthRepository,
    private readonly tokenService: TokenService,
    private readonly hashService: HashService,
    private readonly authOutboxRepository: AuthOutboxRepository,
  ) {}
  execute(request: SetPassordData): Observable<void> {
    return of(this.tokenService.parseActionToken(request.actionToken)).pipe(
      mergeMap((tokenData: ActionTokenPayload) =>
        from(
          this.authCasheService.getActionToken(
            tokenData.actionType,
            tokenData.id,
          ),
        ).pipe(
          map(() => tokenData), // Пробрасываем токен дальше
        ),
      ),
      mergeMap((tokenData) =>
        from(this.hashService.hash(request.password)).pipe(
          map((hashedPassword) => ({ tokenData, hashedPassword })),
        ),
      ),
      mergeMap(({ tokenData, hashedPassword }) =>
        from(
          this.authOutboxRepository.createEvent({
            topic: KafkaTopics.USER_UPDATE_PASSWORD,
            payload: {
              id: tokenData.id,
              password: hashedPassword,
            },
          }),
        ).pipe(map(() => tokenData)),
      ),

      mergeMap((tokenData) =>
        forkJoin([
          from(this.authCasheService.delMetadata(tokenData.id)),
          from(
            this.authCasheService.delFromRedis(
              ActionTokenType.FORGOT_PASSWORD,
              tokenData.id,
            ),
          ),
          from(
            this.authCasheService.delFromRedis(
              'accessToken:userId',
              tokenData.id,
            ),
          ),
          from(this.authRepository.deleteAll(tokenData.id)),
        ]),
      ),
      map(() => undefined),
    );
  }
}
