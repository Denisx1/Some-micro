import { RedisService } from '@app/common/infrastructure';
import { Injectable } from '@nestjs/common';
import { RedisError } from '@app/common/system';
import { Role } from '@app/common/infrastructure/prisma/generated/role';

@Injectable()
export class RoleCacheService {
  constructor(private readonly redisService: RedisService) {}

  async getRoleFromRedis(roleId: number): Promise<Role | null> {
    try {
      return (await this.redisService.get<Role>(`role:${roleId}`)) ?? null;
    } catch (error) {
      throw new RedisError('Redis');
    }
  }

  async setRoleToRedis(role: Role): Promise<void> {
    try {
      await this.redisService.set<Partial<Role>>(`role:${role.name}`, {
        id: role.id,
        name: role.name,
      });
    } catch (error) {
      throw new RedisError('Redis');
    }
  }
  async deleteRoleFromRedis(roleId: string): Promise<void> {
    try {
      await this.redisService.del(`roleId:${roleId}`);
    } catch (error) {
      throw new RedisError('Redis');
    }
  }
  async dellAllRoles(): Promise<void> {
    try {
      await this.redisService.delAll('role*');
    } catch (error) {
      throw new RedisError('Redis');
    }
  }
}
