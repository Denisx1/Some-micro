import {
  CreateAdminCommand,
  CreateRoleCommand,
} from "@app/user/domain/commnad";
import {
  Injectable,
  OnApplicationBootstrap,
  OnModuleInit,
} from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";

@Injectable()
export class AdminStartup implements OnApplicationBootstrap {
  constructor(private readonly commandBus: CommandBus) {}
  async onApplicationBootstrap(): Promise<void> {
    await this.commandBus.execute(new CreateRoleCommand());
    await this.commandBus.execute(new CreateAdminCommand());
  }
}
