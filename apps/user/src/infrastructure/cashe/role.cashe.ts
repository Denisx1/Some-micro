import { RedisService } from "@app/common/infrastructure/redis/redis.resvice";
import { RedisError } from "@app/common/system";
import { Role } from "@app/user/infrastructure/prisma/generated";

import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRoleCashService {
  constructor(private readonly redisService: RedisService) {}

  async getRole(roleName: string): Promise<Partial<Role> | null> {
    try {
      const raw = await this.redisService.get(`role:${roleName}`);
      return raw ?? null;
    } catch (error) {
      throw new RedisError("getRole");
    }
  }
  async setRoleToRedis(role: Role): Promise<void> {
    try {
      await this.redisService.set<Partial<Role>>(`role:${role.name}`, {
        id: role.id,
        name: role.name,
      });
    } catch (error) {
      throw new RedisError("setRoleToRedis");
    }
  }
  async getRoleFromRedis(roleId: number): Promise<Role | null> {
    try {
      return (await this.redisService.get<Role>(`role:${roleId}`)) ?? null;
    } catch (error) {
      throw new RedisError("Redis");
    }
  }

  // async setRoleToRedis(role: Role): Promise<void> {
  //   try {
  //     await this.redisService.set<Partial<Role>>(`role:${role.name}`, {
  //       id: role.id,
  //       name: role.name,
  //     });
  //   } catch (error) {
  //     throw new RedisError("Redis");
  //   }
  // }
  async deleteRoleFromRedis(roleId: string): Promise<void> {
    try {
      await this.redisService.del(`roleId:${roleId}`);
    } catch (error) {
      throw new RedisError("Redis");
    }
  }
  async dellAllRoles(): Promise<void> {
    try {
      await this.redisService.delAll("role*");
    } catch (error) {
      throw new RedisError("Redis");
    }
  }
}
