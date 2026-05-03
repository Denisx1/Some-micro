import { DatabaseError } from "@app/common/system";
import { UserPrismaService } from "@app/user/index";
import { Prisma, Role } from "@app/user/infrastructure/prisma/generated";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRoleRepository {
  constructor(private readonly prismaService: UserPrismaService) {}
  async getRoleById(id: number, tx?: Prisma.TransactionClient): Promise<Role> {
    try {
      const client = tx ? tx.role : this.prismaService.prisma.role;
      return (
        (await client.findUnique({
          where: { id },
        })) ?? null
      );
    } catch (error) {
      console.log(error);
      throw new DatabaseError("UserRoleRepository.getRoleById");
    }
  }
  async getRoleByName(
    name: string,
    tx?: Prisma.TransactionClient
  ): Promise<Role | null> {
    try {
      const client = tx ?? this.prismaService.prisma;
      return (
        (await client.role.findUnique({
          where: { name },
        })) ?? null
      );
    } catch (error) {
      throw new DatabaseError("UserRoleRepository.getRoleByName");
    }
  }
  async getAllRoles(): Promise<Role[]> {
    try {
      return await this.prismaService.prisma.role.findMany();
    } catch (error) {
      throw new DatabaseError("UserRoleRepository.getAllRoles");
    }
  }
  async createRole(role: Prisma.RoleCreateInput): Promise<Role> {
    try {
      return await this.prismaService.prisma.role.create({ data: role });
    } catch (error) {
      throw new DatabaseError("UserRoleRepository.createRole");
    }
  }
}
