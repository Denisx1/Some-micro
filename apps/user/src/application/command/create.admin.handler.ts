import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import { ConfigService } from "@nestjs/config";
import { UserRoleCashService } from "../../infrastructure/cashe/role.cashe";
import { RoleName } from "@app/common/contracts/user/enum";
import { CreateAdminCommand } from "@app/user/domain/commnad";

@CommandHandler(CreateAdminCommand)
export class CreateAdminHandler implements ICommandHandler<CreateAdminCommand> {
  private readonly adminEmail: string;
  private readonly adminUserName: string;
  private readonly adminPassword: string;
  constructor(
    private readonly userRepo: UserRepository,
    private readonly configService: ConfigService,
    private readonly roleCasheService: UserRoleCashService
  ) {
    this.adminEmail = this.configService.get<string>("INITIAL_ADMIN_EMAIL");
    this.adminUserName = this.configService.get<string>(
      "INITIAL_ADMIN_USERNAME"
    );
    this.adminPassword = this.configService.get<string>(
      "INITIAL_ADMIN_PASSWORD"
    );
  }
  async execute(command: CreateAdminCommand): Promise<void> {
    const admin = await this.userRepo.findByCriteria({
      userName: this.adminUserName,
    });
    if (admin) {
      console.log("[CreateAdminHandler] Admin already exists skip creation.");
      return;
    }
    const role = await this.roleCasheService.getRole(RoleName.ADMIN);
    await this.userRepo.createUser({
      email: this.adminEmail,
      userName: this.adminUserName,
      password: this.adminPassword,
      roleId: role.id,
    });
    return;
  }
}
