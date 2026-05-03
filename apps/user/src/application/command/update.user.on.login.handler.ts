import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import { UpdateUserCommand } from "@app/user/domain/commnad";
import { AuthSubType } from "@app/common";

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(command: UpdateUserCommand): Promise<void> {
    console.log(command);
    switch (command.payload.subType) {
      case AuthSubType.LOGINED:
        await this.userRepository.updateUser(command.payload.userId, {
          isActive: true,
        });
        break;
      case AuthSubType.LOGOUTED:
        await this.userRepository.updateUser(command.payload.userId, {
          isActive: false,
          tokenVersion: { increment: 1 },
        });
        break;
      case AuthSubType.PASSWORD_APPROWED:
        await this.userRepository.updateUser(command.payload.userId, {
          password: command.payload.password,
          tokenVersion: { increment: 1 },
        });
    }
  }
}
