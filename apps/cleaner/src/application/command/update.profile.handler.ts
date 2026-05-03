import { UpdateProfileCommand } from "@app/cleaner/domain/command";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ProfileRepository } from "../../infrastructure/repository/cleaner.profile.repository";
import { CleanerProfile } from "@app/common/contracts/cleaner/cleaner.grpc.types";
import { NotFoundError } from "@app/common";

@CommandHandler(UpdateProfileCommand)
export class UpdateCleanerProfileHandler
  implements ICommandHandler<UpdateProfileCommand>
{
  constructor(private readonly cleanerRepository: ProfileRepository) {}
  async execute(command: UpdateProfileCommand): Promise<number> {
    const profile = await this.cleanerRepository.updateProfile(command.payload);
    if (!profile) throw new NotFoundError("Cleaner Profile");
    return profile.id;
  }
}
