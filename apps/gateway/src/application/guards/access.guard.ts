import { AuthMetadata, TokenPairData, TokenType } from '@app/common/domain';
import { RedisService, TokenService } from '@app/common/infrastructure';
import { UnauthenticatedError } from '@app/common/system';

import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(
    private readonly tokenService: TokenService,
    private readonly redisService: RedisService,
    @Inject(Reflector) private readonly reflector: Reflector,
  ) {}
  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const tokenType =
      this.reflector.get<string>('tokenType', ctx.getHandler()) ??
      TokenType.ACCESS_TOKEN;
    const req = ctx.switchToHttp().getRequest();
    const token = req.headers.authorization;
    req.authedUser = await this.checkData(token, tokenType);
    return true;
  }
  private async checkData(
    token: string,
    tokenType: string,
  ): Promise<AuthMetadata> {
    const parsedData = this.parseToken(token, tokenType);
    const data = await this.redisService.getHashObject<AuthMetadata>(
      `loginMetadata:userId:${parsedData.userId}`,
    );
    if (!data) throw new UnauthenticatedError('Session not found in cache');
    const fieldsToVerify: (keyof AuthMetadata)[] = [
      'profileId',
      'deviceName',
      'userId',
      'roleName',
      'tokenVersion',
    ];
    const isValid = fieldsToVerify.every((key) => parsedData[key] == data[key]);
    if (!isValid) throw new UnauthenticatedError();
    return data;
  }

  private parseToken(token: string, tokenType: string): TokenPairData {
    const result = this.tokenService.parseToken(token, tokenType);

    if (!result.success) {
      throw new UnauthenticatedError();
    }

    const { userId, roleName, tokenVersion, deviceName, profileId } =
      result.payload;

    return { userId, roleName, tokenVersion, deviceName, profileId };
  }
}
