import { RedisService } from '@app/common/infrastructure';
import { Injectable } from '@nestjs/common';
import { InfrastructureError } from '@app/common/system';
import { AuthMetadata, BaseCandidate } from '@app/common/domain';

@Injectable()
export class AuthCacheService {
  constructor(private readonly redisService: RedisService) {}

  async getActionToken(
    actionType: string,
    userId: number,
  ): Promise<string | null> {
    try {
      return await this.redisService.get<string>(`${actionType}:${userId}`);
    } catch (error) {
      throw new InfrastructureError('Redis');
    }
  }
  async setActionToken(
    actionType: string,
    userId: number,
    actionToken: string,
  ): Promise<void> {
    try {
      await this.redisService.set(`${actionType}:${userId}`, actionToken);
    } catch (error) {
      throw new InfrastructureError('Redis');
    }
  }
  async getCandidate(userName: string): Promise<BaseCandidate | null> {
    try {
      return await this.redisService.get<BaseCandidate>(
        `user:candidate:${userName}`,
      );
    } catch (error) {
      throw new InfrastructureError('Redis');
    }
  }
  async setAccessToken(userId: number, accessToken: string): Promise<void> {
    try {
      await this.redisService.set<string>(
        `accessToken:userId:${userId}`,
        accessToken,
        300,
      );
    } catch (error) {
      throw new InfrastructureError('Redis');
    }
  }
  async setLoginMetadata(payload: AuthMetadata): Promise<void> {
    try {
      await this.redisService.saveHashObject<AuthMetadata>(
        `loginMetadata:userId:${payload.userId}`,
        payload,
        300,
      );
    } catch (error) {
      throw new InfrastructureError('Redis');
    }
  }
  async delMetadata(userId: number): Promise<void> {
    try {
      await this.redisService.del(`loginMetadata:userId:${userId}`);
    } catch (error) {
      throw new InfrastructureError('Redis');
    }
  }
  async getLoginMetadata(userId: number): Promise<AuthMetadata | null> {
    try {
      return (
        (await this.redisService.getHashObject<AuthMetadata>(
          `loginMetadata:userId:${userId}`,
        )) ?? null
      );
    } catch (error) {
      throw new InfrastructureError('Redis');
    }
  }
  async delFromRedis(actionType: string, userId: number): Promise<void> {
    try {
      await this.redisService.del(`${actionType}:${userId}`);
    } catch (error) {
      throw new InfrastructureError('Redis');
    }
  }
}
