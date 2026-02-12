import { Injectable } from '@nestjs/common';
import {
  ActionTokenType,
  ForgotPasswordData,
  KafkaTopics,
  PublicUser,
  USER_FORGOT_PASSWORD,
} from '@app/common/domain';
import { AuthCacheService } from '../../infrastructure/cashe/auth.cache.service';
import { GrpcClientsService, TokenService } from '@app/common/infrastructure';
import { catchError, concatMap, from, map, Observable, throwError } from 'rxjs';
import { AuthOutboxRepository } from '../../infrastructure/repositories/auth.outbox.repository';
import { UnauthenticatedError } from '@app/common/system';

@Injectable()
export class ForgotPasswordService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly grpcClientsService: GrpcClientsService,
    private readonly authCasheService: AuthCacheService,
    private readonly authOutboxRepository: AuthOutboxRepository,
  ) {}
  execute(request: ForgotPasswordData): Observable<void> {
    return this.grpcClientsService.user.getUserPublic(request).pipe(
      map((user: PublicUser) => {
        const actionToken = this.tokenService.generateActionToken({
          userName: user.userName,
          actionType: ActionTokenType.FORGOT_PASSWORD,
          id: user.id,
        });
        return { user, actionToken };
      }),
      catchError(() => throwError(() => new UnauthenticatedError())),
      concatMap((ctx) => {
        return from(
          this.authCasheService.setActionToken(
            ActionTokenType.FORGOT_PASSWORD,
            ctx.user.id,
            ctx.actionToken,
          ),
        ).pipe(map(() => ctx));
      }),
      concatMap((ctx) => {
        return from(
          this.authOutboxRepository.createEvent({
            topic: KafkaTopics.NOTIFY_CHANGE_PASS,
            payload: {
              userName: ctx.user.userName,
              email: ctx.user.email,
              actionToken: ctx.actionToken,
            },
          }),
        ).pipe(map(() => undefined));
      }),
    );
  }
}
