import { RedisService } from '@app/common/infrastructure';
import { Injectable } from '@nestjs/common';
import { InfrastructureError } from '@app/common/system';
import { Role } from '@app/common/infrastructure/prisma/generated/role';

@Injectable()
export class RoleCasheService {
  constructor(private readonly redisService: RedisService) {}

  async getRole(roleName: string): Promise<Partial<Role> | null> {
    try {
      const raw = await this.redisService.get(`role:${roleName}`);
      if (!raw) return null;
      return raw;
    } catch (error) {
      throw new InfrastructureError('Redis');
    }
  }
}
