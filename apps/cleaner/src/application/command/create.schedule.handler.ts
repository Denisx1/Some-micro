import { CreateScheduleCommand } from "@app/cleaner/domain/command";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ScheduleRespoitory } from "../../infrastructure/repository/cleaner.schedule.repository";
import { CleanerPrismaService } from "@app/cleaner";
import { AlreadyExistError } from "@app/common";

@CommandHandler(CreateScheduleCommand)
export class CreateScheduleHandler
  implements ICommandHandler<CreateScheduleCommand>
{
  constructor(
    private readonly scheduleRepository: ScheduleRespoitory,
    private readonly prismeService: CleanerPrismaService
  ) {}
  async execute(command: CreateScheduleCommand): Promise<number> {
    return await this.prismeService.prisma.$transaction(async (tx) => {
      const exist = await this.scheduleRepository.getScheduleByDay(
        command.payload.dayOfWeek,
        command.payload.cleanerProfileId,
        tx
      );
      if (exist) throw new AlreadyExistError("Schedule");
      const schedule = await this.scheduleRepository.createFullDay(
        command.payload,
        tx
      );
      return schedule.id;
    });
  }
}
