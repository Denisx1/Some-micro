import { Injectable } from '@nestjs/common';
import { RegistrationCasheService } from 'apps/registration/src/infrastructure/cashe/registration.cashe';
import { catchError, from, map, Observable, switchMap, throwError } from 'rxjs';
import {
  GrpcClientsService,
  HashService,
  TokenService,
} from '@app/common/infrastructure';
import { RegKafkaProduser } from '../../infrastructure/kafka/reg.kafka.provider';
import {
  ActionTokenType,
  BaseCandidate,
  KafkaTopics,
} from '@app/common/domain';
import { AlreadyExistError } from '@app/common/system';

@Injectable()
export class InitRegistrationService {
  constructor(
    private readonly registartionCache: RegistrationCasheService,
    private readonly regKafkaProduser: RegKafkaProduser,
    private readonly hashService: HashService,
    private readonly tokenService: TokenService,
    private readonly grpcClientsService: GrpcClientsService,
  ) {}

  execute(newCandidate: BaseCandidate): Observable<void> {
    return this.checkExistSession(newCandidate.userName).pipe(
      switchMap(() =>
        this.grpcClientsService.user.checkUserUniqueness({
          userName: newCandidate.userName,
          email: newCandidate.email,
        }),
      ),
      catchError(() => throwError(() => new AlreadyExistError('user'))),
      switchMap(() =>
        from(this.hashService.hash(newCandidate.password)).pipe(
          map((hashedPassword) => ({ hashedPassword })),
        ),
      ),
      switchMap(({ hashedPassword }) => {
        const actionToken = this.tokenService.generateActionToken({
          userName: newCandidate.userName,
          email: newCandidate.email,
          role: newCandidate.role,
          actionType: ActionTokenType.REGISTRATION,
        });
        return from(
          this.registartionCache.saveSession(newCandidate.userName, {
            candidate: { ...newCandidate, password: hashedPassword },
            token: actionToken,
          }),
        ).pipe(map(() => ({ actionToken })));
      }),
      switchMap(({ actionToken }) => {
        return this.regKafkaProduser.kafkaEmint(
          KafkaTopics.CLEANERS_NOT_FOUND,
          {
            userName: newCandidate.userName,
            email: newCandidate.email,
            role: newCandidate.role,
            actionToken,
          },
        );
      }),
      map(() => undefined),
    );
  }

  private checkExistSession(userName: string): Observable<void> {
    return from(this.registartionCache.getSession(userName)).pipe(
      map((session) => {
        if (session) throw new AlreadyExistError(userName);
      }),
    );
  }
}
