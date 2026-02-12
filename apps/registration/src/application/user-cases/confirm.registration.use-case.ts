import { Injectable } from '@nestjs/common';
import { RegistrationCasheService } from '../../infrastructure/cashe/registration.cashe';
import {
  ActionTokenPayload,
  ActionTokenType,
  BaseCandidate,
  KafkaTopics,
  UserActions,
} from '@app/common/domain';
import { from, map, Observable, of, switchMap, tap } from 'rxjs';
import { TokenService } from '@app/common/infrastructure';

import { RegKafkaProduser } from '../../infrastructure/kafka/reg.kafka.provider';
import { NotFoundError, ParseError } from '@app/common/system';

@Injectable()
export class ConfirmRegistrationService {
  constructor(
    private readonly registrationCasheService: RegistrationCasheService,
    private readonly regKafkaProduser: RegKafkaProduser,
    private readonly tokenService: TokenService,
  ) {}
  execute(actionToken: string): Observable<void> {
    return this.parseActionToken(actionToken).pipe(
      map(({ userName }) => {
        return userName;
      }),
      switchMap((userName) => this.getSession(userName)),
      switchMap((candidate) => {
        return this.regKafkaProduser
          .kafkaEmint(KafkaTopics.USER_CREATE, candidate)
          .pipe(
            tap(() =>
              this.registrationCasheService.deleteSession(candidate.userName),
            ),
          );
      }),
      map(() => undefined),
    );
  }

  private parseActionToken(token: string): Observable<ActionTokenPayload> {
    // Используем defer или of, чтобы обернуть синхронную логику в поток
    return of(this.tokenService.parseActionToken(token)).pipe(
      map((parsedData) => {
        if (
          !parsedData &&
          parsedData.actionType !== ActionTokenType.REGISTRATION
        )
          throw new ParseError();

        return parsedData;
      }),
    );
  }

  private getSession(userName: string): Observable<BaseCandidate> {
    return from(this.registrationCasheService.getSession(userName)).pipe(
      map((session) => {
        if (!session) throw new NotFoundError('Session');
        return session.candidate;
      }),
    );
  }
}
