import { Injectable } from '@nestjs/common';
import { RoleRepository } from './repository';
import { CreateRoleDto } from './dto/createRoleDto';
import { Role } from '@app/common/types/role';
import { status as GrpcStatus } from '@grpc/grpc-js';
import { RoleBuilder } from './builder/roleBuilder';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class RoleService {
  constructor(private readonly roleRepository: RoleRepository) {}

  async createRole(role: CreateRoleDto): Promise<Role> {
    const existingRole = await this.roleRepository.findUniqRole(role.name);

    if (existingRole) {
      throw new RpcException({
        code: GrpcStatus.ALREADY_EXISTS,
        details: {
          field: 'name',
          message: `Role with name ${role.name} already exists`,
          context: 'RoleService.createRole',
        },
      });
    }
    const roleBuilder = new RoleBuilder(role).buildCreateRole();
    const newRole = await this.roleRepository.createRole(roleBuilder);

    return newRole;
  }

  async getDefaultRole(): Promise<Role> {
    const defaultRole = await this.roleRepository.getDefaultRole();
    if (!defaultRole) {
      throw new RpcException({
        code: GrpcStatus.NOT_FOUND,
        details: {
          message: 'Default role not found',
          field: 'Default role',
          context: 'RoleService.getDefaultRole',
        },
      });
    }
    const defaultRoleId = new RoleBuilder(defaultRole).setDefaultRole();
    return defaultRoleId;
  }
}
