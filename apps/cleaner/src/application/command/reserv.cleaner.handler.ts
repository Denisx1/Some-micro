import { ReservCleanerCommand } from "@app/cleaner/domain/command";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ProfileRepository } from "../../infrastructure/repository/cleaner.profile.repository";
import { CleanerOutboxRepository } from "../../infrastructure/repository/cleaner.outbox.repository";
import { CleanerPrismaService } from "@app/cleaner/infrastructure/prisma/prisma.cleaner.service";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import { CleanerEvents } from "@app/common";

@CommandHandler(ReservCleanerCommand)
export class ReservCleanerHandler
  implements ICommandHandler<ReservCleanerCommand>
{
  constructor(
    private readonly profileRepo: ProfileRepository,
    private readonly cleanerOutboxRepository: CleanerOutboxRepository,
    private readonly prismaService: CleanerPrismaService
  ) {}
  async execute(command: ReservCleanerCommand) {
    const { orderId, customerId } = command.payload;
    await this.prismaService.prisma.$transaction(async (tx) => {
      const candidates = await this.profileRepo.getAvaulableCleaners(
        command.payload,
        tx
      );
      console.log(candidates);
      if (candidates.length === 0) {
        await this.cleanerOutboxRepository.createEvent(
          {
            aggregateId: orderId,
            aggregateType: KafkaTopics.Events.CLEANER,
            payload: {
              type: CleanerEvents.CLEANER_NOT_FOUND,
              payload: { orderId },
              comment: `Cleaners not found`,
            },
          },
          tx
        );
      } else {
        await this.cleanerOutboxRepository.createEvent(
          {
            aggregateId: orderId,
            aggregateType: KafkaTopics.Events.CLEANER,
            payload: {
              type: CleanerEvents.CLEANERS_RESERVED,
              payload: {
                candidates: candidates.map((c) => ({
                  ...c,
                })),
                orderId: orderId,
                customerId: command.payload.customerId,
              },
              comment: `Cleaners not found`,
            },
          },
          tx
        );
      }
    });
  }
}
