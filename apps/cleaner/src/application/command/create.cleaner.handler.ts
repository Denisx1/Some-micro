import { CreateCleanerCommand } from "@app/cleaner/domain/command";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ProfileRepository } from "../../infrastructure/repository/cleaner.profile.repository";
import { CleanerOutboxRepository } from "../../infrastructure/repository/cleaner.outbox.repository";
import { CleanerPrismaService } from "@app/cleaner/infrastructure/prisma/prisma.cleaner.service";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import { CleanerEvents } from "@app/common";

@CommandHandler(CreateCleanerCommand)
export class CreateCleanerHandler
  implements ICommandHandler<CreateCleanerCommand>
{
  constructor(
    private readonly cleanerRepository: ProfileRepository,
    private readonly cleanerOutboxRepository: CleanerOutboxRepository,
    private readonly prismaService: CleanerPrismaService
  ) {}
  async execute(command: CreateCleanerCommand): Promise<void> {
    await this.prismaService.prisma.$transaction(async (tx) => {
      const { userId, candidateId } = command.payload;
      const cleaner = await this.cleanerRepository.createProfile(userId, tx);
      await this.cleanerOutboxRepository.createEvent({
        aggregateId: command.payload.candidateId,
        aggregateType: KafkaTopics.Events.CLEANER,
        payload: {
          type: CleanerEvents.PROFILE_CREATED,
          payload: {
            profileId: cleaner.id,
            ...command.payload,
          },
        },
      });
    });
  }
}
