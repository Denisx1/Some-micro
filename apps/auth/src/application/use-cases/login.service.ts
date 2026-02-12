import { Injectable } from '@nestjs/common';
import { AuthRepository } from '../../infrastructure/repositories/auth.repository';
import {
  KafkaTopics,
  LoginData,
  PrivateUser,
  RoleName,
  TokenPair,
  UserActions,
} from '@app/common/domain';
import { AuthCacheService } from '../../infrastructure/cashe/auth.cache.service';
import { AuthOutboxRepository } from '../../infrastructure/repositories/auth.outbox.repository';
import {
  AuthClient,
  GrpcClientsService,
  HashService,
  PrismaService,
  TokenService,
} from '@app/common/infrastructure';
import {
  catchError,
  concatMap,
  from,
  map,
  mergeMap,
  Observable,
  of,
  tap,
  throwError,
} from 'rxjs';
import { CleanerProfile } from '@app/common/infrastructure/prisma/generated/cleaner';
import { Customer } from '@app/common/infrastructure/prisma/generated/customer';
import { NotFoundError, UnauthenticatedError } from '@app/common/system';

@Injectable()
export class LoginService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly authOutboxRepository: AuthOutboxRepository,
    private readonly prismaService: PrismaService<AuthClient>,
    private readonly authCacheService: AuthCacheService,
    private readonly hashService: HashService,
    private readonly tokenService: TokenService,
    private readonly grpcClientsService: GrpcClientsService,
  ) {}

  execute(credentials: LoginData): Observable<TokenPair> {
    return this.grpcClientsService.user
      .getUserForAuth({
        userName: credentials.userName,
        email: credentials.email,
      })
      .pipe(
        catchError(() => throwError(() => new UnauthenticatedError())),
        mergeMap((user: PrivateUser) =>
          this.handleProfile(user).pipe(
            map((profileId) => ({ user, profileId })),
          ),
        ),
        mergeMap(({ user, profileId }) => {
          return from(
            this.hashService.compareHash(credentials.password, user.password),
          ).pipe(
            map((match) => {
              if (!match) throw new UnauthenticatedError();
              return { user, profileId };
            }),
          );
        }),
        map((ctx) => ({
          ...ctx,
          tokens: this.tokenService.generateTokenPair({
            userId: ctx.user.id,
            roleName: ctx.user.roleName,
            tokenVersion: ctx.user.tokenVersion,
            profileId: ctx.profileId,
            deviceName: credentials.deviceName,
          }),
        })),
        concatMap((ctx) => {
          return from(
            this.handlePersistence(
              ctx.user.id,
              ctx.tokens.refreshToken,
              credentials.deviceName,
            ),
          ).pipe(map(() => ctx));
        }),
        concatMap((ctx) => {
          return from(
            this.authCacheService.setLoginMetadata({
              userId: ctx.user.id,
              roleName: ctx.user.roleName,
              tokenVersion: ctx.user.tokenVersion,
              profileId: ctx.profileId,
              deviceName: credentials.deviceName,
            }),
          ).pipe(map(() => ctx.tokens));
        }),
      );
  }
  private handleProfile(user: PrivateUser): Observable<number> {
    switch (user.roleName) {
      case RoleName.CLEANER:
        return this.grpcClientsService.cleaner
          .getProfile({ userId: user.id })
          .pipe(
            catchError(() => throwError(() => new UnauthenticatedError())),
            map((cleaner: CleanerProfile) => cleaner.id),
          );

      case RoleName.CUSTOMER:
        return this.grpcClientsService.customer
          .getCustomer({ userId: user.id })
          .pipe(
            catchError(() => throwError(() => new UnauthenticatedError())),
            map((customer: Customer) => customer.id),
          );

      case RoleName.ADMIN:
        return of(0);

      default:
        return throwError(() => new NotFoundError(user.roleName));
    }
  }

  private async handlePersistence(
    userId: number,
    hashedRefresh: string,
    deviceName: string,
  ): Promise<void> {
    await this.prismaService.prisma.$transaction(async (tx) => {
      const existingAuth = await this.authRepository.findByUserAndDevice(
        userId,
        deviceName,
        tx,
      );
      let currentAuthedId: number;
      if (existingAuth) {
        await this.authRepository.updateRefresh(
          existingAuth.id,
          hashedRefresh,
          tx,
        );
        currentAuthedId = existingAuth.id;
      } else {
        const newAuth = await this.authRepository.createAuth(
          {
            deviceId: '1',
            deviceName,
            refreshHash: hashedRefresh,
            userId,
          },
          tx,
        );
        currentAuthedId = newAuth.id;
      }
      await this.authOutboxRepository.createEvent(
        {
          topic: KafkaTopics.USER_LOGINED,
          payload: { id: userId },
        },
        tx,
      );
    });
  }
}
