import { CleanerPrismaService } from "@app/cleaner";
import { CreateJobCommand } from "@app/cleaner/domain/command";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CleanerJobRepository } from "../../infrastructure/repository/cleaner.job.repository";
import { CleanerOutboxRepository } from "../../infrastructure/repository/cleaner.outbox.repository";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import { CleanerEvents } from "@app/common";

@CommandHandler(CreateJobCommand)
export class CreateJobHandler implements ICommandHandler<CreateJobCommand> {
  constructor(
    private readonly prismaService: CleanerPrismaService,
    private readonly cleanerJobRepository: CleanerJobRepository,
    private readonly cleanerOutboxRepository: CleanerOutboxRepository
  ) {}
  async execute(command: CreateJobCommand): Promise<void> {
    const { customerId, ...rest } = command.payload;
    await this.prismaService.prisma.$transaction(async (tx) => {
      const newJob = await this.cleanerJobRepository.createJob(rest, tx);
      await this.cleanerOutboxRepository.createEvent(
        {
          aggregateId: newJob.orderId,
          aggregateType: KafkaTopics.Events.CLEANER,
          payload: {
            type: CleanerEvents.CLEANER_INVITED,
            payload: { ...newJob, customerId },
          },
        },
        tx
      );
    });
  }
}
