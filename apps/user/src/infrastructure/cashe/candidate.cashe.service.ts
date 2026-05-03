import { CandidateCashType } from "@app/common";
import { RedisService } from "@app/common/infrastructure/redis/redis.resvice";
import { RedisError } from "@app/common/system";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CandidateCasheService {
  private readonly PREFIX = "reg_session:";
  constructor(private readonly redisService: RedisService) {}

  async saveSession(
    candidateId: number,
    session: CandidateCashType
  ): Promise<void> {
    try {
      await this.redisService.saveHashObject(
        `${this.PREFIX}${candidateId}`,
        session,
        3600
      );
    } catch (error) {
      throw new RedisError("Redis");
    }
  }
  async getSession(
    parametr: number | string
  ): Promise<CandidateCashType | null> {
    return (
      this.redisService.getHashObject<CandidateCashType>(
        `${this.PREFIX}${[parametr]}`
      ) ?? null
    );
  }
  async updateSession(
    candidateId: number,
    data: Partial<CandidateCashType>
  ): Promise<void> {
    try {
      await this.redisService.updateHashObject(
        `${this.PREFIX}${candidateId}`,
        data
      );
    } catch (error) {
      throw new RedisError("Update Redis");
    }
  }
  async deleteSession(candidateId: number | string): Promise<void> {
    try {
      await this.redisService.del(`${this.PREFIX}${candidateId}`);
    } catch (error) {
      throw new RedisError("Delete Redis");
    }
  }
}
