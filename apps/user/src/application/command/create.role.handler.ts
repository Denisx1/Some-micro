import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UserRoleRepository } from "../../infrastructure/repositories/user.role.repository";
import { UserRoleCashService } from "../../infrastructure/cashe/role.cashe";
import { ConfigService } from "@nestjs/config";
import { RoleName } from "@app/common/contracts/user/enum";
import { CreateRole } from "@app/user/domain/other.types";
import { CreateRoleCommand } from "@app/user/domain/commnad";

@CommandHandler(CreateRoleCommand)
export class CreateRoleHandler implements ICommandHandler<CreateRoleCommand> {
  constructor(
    private readonly configService: ConfigService,
    private readonly userRoleRepo: UserRoleRepository,
    private readonly roleCasheService: UserRoleCashService
  ) {}
  async execute(): Promise<void> {
    const defaultRoles = this.getDefaultRolesConfig();
    for (const role of defaultRoles) {
      const existingRole = await this.userRoleRepo.getRoleByName(role.name);
      if (!existingRole) {
        const createdRole = await this.userRoleRepo.createRole(role);
        await this.roleCasheService.setRoleToRedis(createdRole);
      }
    }
    const allRoles = await this.userRoleRepo.getAllRoles();
    await this.roleCasheService.dellAllRoles();
    allRoles.forEach(async (role) => {
      await this.roleCasheService.setRoleToRedis(role);
    });
  }

  private getDefaultRolesConfig(): CreateRole[] {
    return [
      {
        name: this.configService.get("ADMIN_ROLE_NAME") || RoleName.ADMIN,
        description:
          this.configService.get("ADMIN_DESCRIPTION") || "Administrator",
        permissions: this.configService.get("ADMIN_PERMISSIONS") || "ALL",
      },
      {
        name: this.configService.get("CLEANER_ROLE_NAME") || RoleName.CLEANER,
        description: this.configService.get("CLEANER_DESCRIPTION") || "Staff",
        permissions:
          this.configService.get("CLEANER_PERMISSIONS") || "VIEW_TASKS",
      },
      {
        name: this.configService.get("CUSTOMER_ROLE_NAME") || RoleName.CUSTOMER,
        description: this.configService.get("CUSTOMER_DESCRIPTION") || "Client",
        permissions:
          this.configService.get("CUSTOMER_PERMISSIONS") || "CREATE_ORDER",
      },
    ];
  }
}
