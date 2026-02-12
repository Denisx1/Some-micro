import { BaseCandidate, CandidateCashType } from '@app/common/domain';
import { RedisService } from '@app/common/infrastructure';
import { RedisError } from '@app/common/system';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RegistrationCasheService {
  private readonly PREFIX = 'reg_session:';
  constructor(private readonly redisService: RedisService) {}

  async saveSession(
    userName: string,
    session: CandidateCashType,
  ): Promise<void> {
    try {
      await this.redisService.saveHashObject(
        `${this.PREFIX}${userName}`,
        session,
        3600,
      );
    } catch (error) {
      throw new RedisError('Redis');
    }
  }

  async getSession(userName: string): Promise<CandidateCashType | null> {
    return (
      this.redisService.getHashObject<CandidateCashType>(
        `${this.PREFIX}${userName}`,
      ) ?? null
    );
  }

  async deleteSession(userName: string): Promise<void> {
    await this.redisService.del(`${this.PREFIX}${userName}`);
  }

  async setCandidateIntoRedis(candidate: BaseCandidate): Promise<void> {
    try {
      await this.redisService.set<BaseCandidate>(
        `registration:candidate:${candidate.userName}`,
        candidate,
        1800,
      );
    } catch (error) {
       throw new RedisError('Redis');
    }
  }
  async delCandidateFromRedis(userName: string): Promise<void> {
    try {
      await this.redisService.del(`registration:candidate:${userName}`);
    } catch (error) {
       throw new RedisError('Redis');
    }
  }

  async getValuest(userName: string): Promise<CandidateCashType> {
    try {
      const keys = [
        `registration:candidate:${userName}`,
        `registration:action-token:${userName}`,
      ];
      const [candidate, token] =
        await this.redisService.mget<[BaseCandidate, string]>(keys);
      if (!candidate || !token) return null;

      return { candidate, token };
    } catch (error) {
       throw new RedisError('Redis');
    }
  }
}
