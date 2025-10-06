import { GenerateActionTokenResponse, SafeCandidate } from '@app/common';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { TokenService } from './token.service';
import { RedisService } from 'libs/redis/src/redis.resvice';

@Injectable()
export class AuthService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly redisService: RedisService,
  ) {}

  async generateActionToken(
    candidate: SafeCandidate & { actionType: string },
  ): Promise<GenerateActionTokenResponse> {
    const actionToken = await this.tokenService.generateActionToken(candidate);
    await this.addTokenToCache(actionToken, candidate.actionType);
    return { token: actionToken };
  }

  private async addTokenToCache(token: string, actionType: string) {
    await this.redisService.set(`${actionType}`, token);
  }
}
