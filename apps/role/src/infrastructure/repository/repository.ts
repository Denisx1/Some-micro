import { Injectable } from '@nestjs/common';
import {
  CreateRole,
  GetRoleFields,
} from '@app/common/domain/types/grpc.services.types/role';
import { PrismaService, RoleClient } from '@app/common/infrastructure';
import { DatabaseError } from '@app/common/system';
import { Prisma, Role } from '@app/common/infrastructure/prisma/generated/role';

@Injectable()
export class RoleRepository {
  constructor(private readonly prismaService: PrismaService<RoleClient>) {}
  async findMany(): Promise<Role[]> {
    try {
      return await this.prismaService.prisma.role.findMany();
    } catch (error) {
      throw new DatabaseError('Role.findMany');
    }
  }
  async getByField(
    payload: GetRoleFields,
    tx?: Prisma.TransactionClient,
  ): Promise<Role | null> {
    try {
      const client = tx ?? this.prismaService.prisma;
      return (
        (await client.role.findFirst({
          where: payload,
        })) ?? null
      );
    } catch (error) {
      throw new DatabaseError('Role.getByField');
    }
  }
  async create(role: CreateRole, tx?: Prisma.TransactionClient): Promise<Role> {
    try {
      const client = tx ?? this.prismaService.prisma;
      return await client.role.create({ data: role });
    } catch (error) {
      throw new DatabaseError('Role.create');
    }
  }
}
