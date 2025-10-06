import { Injectable } from '@nestjs/common';
import { CreateRole, Role } from '@app/common/types/role';
import { PrismaService } from 'apps/role/src/prisma.service';

@Injectable()
export class RoleRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createRole(role: CreateRole): Promise<Role> {
    const newRole = await this.prismaService.role.create({ data: role });
    return newRole;
  }
  async findUniqRole(roleName: string): Promise<Role | null> {
    return await this.prismaService.role.findUnique({
      where: { name: roleName },
    });
  }
  async getRoleById(id: number): Promise<Role | null> {
    return await this.prismaService.role.findUnique({ where: { id } });
  }
  async getDefaultRole(): Promise<Role | null> {
    const defaultRole = await this.prismaService.role.findFirst({
      where: { name: 'USER' },
    });
    return defaultRole;
  }
}
