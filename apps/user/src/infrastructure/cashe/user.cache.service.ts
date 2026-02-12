import { RedisService } from '@app/common/infrastructure';
import { Injectable } from '@nestjs/common';
import { RedisError } from '@app/common/system';
import { BaseCandidate } from '@app/common/domain';

@Injectable()
export class UserCasheService {
  constructor(private readonly redisService: RedisService) {}

  async getCandidateFromRedis(userName: string): Promise<BaseCandidate | null> {
    try {
      const candidateFromRedis = await this.redisService.get<BaseCandidate>(
        `user:candidate:${userName}`,
      );
      return candidateFromRedis;
    } catch (error) {
      throw new RedisError('Redis');
    }
  }
  async setCanddateIntoRedis(candidate: BaseCandidate): Promise<void> {
    try {
      await this.redisService.set<BaseCandidate>(
        `user:candidate:${candidate.userName}`,
        candidate,
        3600,
      );
    } catch (error) {
      throw new RedisError('Redis');
    }
  }
  async delCandidateFromRedis(userName: string): Promise<void> {
    try {
      await this.redisService.del(`user:candidate:${userName}`);
    } catch (error) {
      throw new RedisError('Redis');
    }
  }
}
