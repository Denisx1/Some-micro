import { CandidateCashType } from "@app/common";
import { RedisService } from "@app/common/infrastructure/redis/redis.resvice";
import { InfrastructureError } from "@app/common/system/error/base.error";
import { Injectable } from "@nestjs/common";

@Injectable()
export class NotificationRedis {
  private readonly PREFIX = "reg_session:";
  constructor(private readonly redisService: RedisService) {}
  async getSession(
    parametr: number | string
  ): Promise<CandidateCashType | null> {
    return (
      this.redisService.getHashObject<CandidateCashType>(
        `${this.PREFIX}${[parametr]}`
      ) ?? null
    );
  }
  async getLoginMetadata(userId: number) {
    try {
      return (
        (await this.redisService.getHashObject(
          `loginMetadata:userId:${userId}`
        )) ?? null
      );
    } catch (error) {
      console.log(error);
    }
  }
}
