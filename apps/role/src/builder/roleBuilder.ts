import { CreateRole, Role } from '@app/common/types/role';

export class RoleBuilder {
  private role: Partial<Role>;
  constructor(dto?: Partial<Role>) {
    if (dto) {
      this.role = dto;
    }
  }
  setDefaultRole(): Role {
    return {
      id: this.role.id!,
      name: this.role.name!,
      description: this.role.description!,
      permissions: this.role.permissions!,
      createdAt: this.role.createdAt!,
      updatedAt: this.role.updatedAt!,
    };
  }
  buildCreateRole(): CreateRole {
    return {
      name: this.role.name!,
      description: this.role.description!,
      permissions: this.role.permissions!,
    };
  }
}
