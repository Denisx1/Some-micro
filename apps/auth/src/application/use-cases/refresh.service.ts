import { Injectable } from '@nestjs/common';
import {
  AuthPayload,
  PublicUser,
  RefreshData,
  TokenPair,
} from '@app/common/domain';
import { AuthRepository } from '../../infrastructure/repositories/auth.repository';
import { AuthCacheService } from '../../infrastructure/cashe/auth.cache.service';
import {
  catchError,
  from,
  map,
  mergeMap,
  Observable,
  tap,
  throwError,
} from 'rxjs';
import { GrpcClientsService, TokenService } from '@app/common/infrastructure';
import { ParseError, UnauthenticatedError } from '@app/common/system';

@Injectable()
export class RefreshService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly authCasheService: AuthCacheService,
    private readonly grpcClientsService: GrpcClientsService,
    private readonly tokenService: TokenService,
  ) {}

  execute(refreshData: RefreshData): Observable<TokenPair> {
    return this.findAuthedUser(refreshData).pipe(
      mergeMap((authedUser: AuthPayload) => {
        return this.grpcClientsService.user
          .getUserPublic({ id: authedUser.userId })
          .pipe(
            catchError(() => throwError(() => new UnauthenticatedError())),
            map((existUser: PublicUser) => {
              this.validateTokenVersion(
                refreshData.tokenVersion,
                existUser.tokenVersion,
              );
              const tokens = this.tokenService.generateTokenPair({
                userId: existUser.id,
                roleName: existUser.roleName,
                tokenVersion: existUser.tokenVersion,
                profileId: refreshData.profileId,
                deviceName: refreshData.deviceName,
              });
              return { existUser, tokens };
            }),
            mergeMap(({ existUser, tokens }) => {
              tap((existuser) => console.log(existuser));
              return from(
                this.authCasheService.setLoginMetadata({
                  userId: existUser.id,
                  roleName: existUser.roleName,
                  tokenVersion: existUser.tokenVersion,
                  profileId: refreshData.profileId,
                  deviceName: refreshData.deviceName,
                }),
              ).pipe(map(() => tokens));
            }),
          );
      }),
    );
  }

  private validateTokenVersion(inside: number, outside: number): void {
    if (inside !== outside) {
      throw new ParseError();
    }
  }

  private findAuthedUser(refreshData: RefreshData): Observable<AuthPayload> {
    const { userId, deviceName } = refreshData;
    if (!deviceName) {
      throw new ParseError(deviceName);
    }
    return from(
      this.authRepository.findByUserAndDevice(userId, deviceName),
    ).pipe(
      map((authed: AuthPayload) => {
        if (!authed) throw new UnauthenticatedError();
        return authed;
      }),
    );
  }
}
