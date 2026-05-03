import { RedisService } from "@app/common/infrastructure/redis/redis.resvice";
import { RedisError } from "@app/common/system";
import { Injectable } from "@nestjs/common";

@Injectable()
export class OrderCasheService {
  constructor(private readonly redisService: RedisService) {}
  async setOrderData(orderId: number, customerId: number): Promise<void> {
    try {
      await this.redisService.hSet(
        `order:${orderId}:context`,
        {
          customerId,
        },
        86400
      ); // 24 години TTL
    } catch (error) {
      throw new RedisError("Failed to set order data in cache");
    }
  }
}
