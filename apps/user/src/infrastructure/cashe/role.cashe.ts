import { RedisService } from '@app/common/infrastructure';
import { Role } from '@app/common/infrastructure/prisma/generated/role';
import { RedisError } from '@app/common/system';

import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRoleCashService {
  constructor(private readonly redisService: RedisService) {}

  async getRole(roleName: string): Promise<Partial<Role> | null> {
    try {
      const raw = await this.redisService.get(`role:${roleName}`);
      return raw ?? null;
    } catch (error) {
      throw new RedisError('getRole');
    }
  }
  async setRoleToRedis(role: Role): Promise<void> {
    try {
      await this.redisService.set<Partial<Role>>(`role:${role.name}`, {
        id: role.id,
        name: role.name,
      });
    } catch (error) {
      throw new RedisError('setRoleToRedis');
    }
  }
}
