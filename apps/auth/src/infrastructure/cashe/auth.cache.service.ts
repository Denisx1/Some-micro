// import { RedisService } from "@app/common/infrastructure";
// import { Injectable } from "@nestjs/common";
// import { InfrastructureError } from "@app/common/system";

import { IAuthMetadata } from "@app/auth/domain/types1";
import { ActionTokenType } from "@app/common";
import { RedisService } from "@app/common/infrastructure/redis/redis.resvice";
import { InfrastructureError } from "@app/common/system/error/base.error";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthCacheService {
  constructor(private readonly redisService: RedisService) {}
  async setLoginMetadata(payload: IAuthMetadata): Promise<void> {
    try {
      await this.redisService.saveHashObject<IAuthMetadata>(
        `loginMetadata:userId:${payload.userId}`,
        payload,
        300
      );
    } catch (error) {
      console.log(error);
    }
  }
  async delMetadata(userId: number): Promise<void> {
    try {
      await this.redisService.del(`loginMetadata:userId:${userId}`);
    } catch (error) {
      console.log(error);
    }
  }
  async getActionToken(userId: number): Promise<string | null> {
    try {
      const actionType = ActionTokenType.FORGOT_PASSWORD;
      return await this.redisService.get<string>(`${actionType}:${userId}`);
    } catch (error) {
      console.log(error);
    }
  }
  async setActionToken(userId: number, actionToken: string): Promise<void> {
    try {
      const actionType = ActionTokenType.FORGOT_PASSWORD;
      await this.redisService.set(`${actionType}:${userId}`, actionToken);
    } catch (error) {
      console.log(error);
    }
  }
}

//   async getCandidate(userName: string): Promise<BaseCandidate | null> {
//     try {
//       return await this.redisService.get<BaseCandidate>(
//         `user:candidate:${userName}`
//       );
//     } catch (error) {
//       throw new InfrastructureError("Redis");
//     }
//   }
//   async setAccessToken(userId: number, accessToken: string): Promise<void> {
//     try {
//       await this.redisService.set<string>(
//         `accessToken:userId:${userId}`,
//         accessToken,
//         300
//       );
//     } catch (error) {
//       throw new InfrastructureError("Redis");
//     }
//   }

//   async getLoginMetadata(userId: number): Promise<AuthMetadata | null> {
//     try {
//       return (
//         (await this.redisService.getHashObject<AuthMetadata>(
//           `loginMetadata:userId:${userId}`
//         )) ?? null
//       );
//     } catch (error) {
//       throw new InfrastructureError("Redis");
//     }
//   }
//   async delFromRedis(actionType: string, userId: number): Promise<void> {
//     try {
//       await this.redisService.del(`${actionType}:${userId}`);
//     } catch (error) {
//       throw new InfrastructureError("Redis");
//     }
//   }
// }
