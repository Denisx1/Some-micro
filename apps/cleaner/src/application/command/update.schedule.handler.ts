import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ScheduleRespoitory } from "../../infrastructure/repository/cleaner.schedule.repository";
import { UpdateScheduleCommand } from "@app/cleaner/domain/command";

@CommandHandler(UpdateScheduleCommand)
export class UpdatedScheduleHandler
  implements ICommandHandler<UpdateScheduleCommand>
{
  constructor(private readonly scheduleRespoitory: ScheduleRespoitory) {}
  async execute(command: UpdateScheduleCommand): Promise<number> {
    const updatedSlot = await this.scheduleRespoitory.updateSlot(
      command.payload
    );
    return updatedSlot.id;
  }
}
