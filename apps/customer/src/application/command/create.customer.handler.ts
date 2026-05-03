import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CustomerRepository } from "../../infrastructure/repository/customer.repository";
import { CustomerOutboxRepository } from "../../infrastructure/repository/customer.outbox.repository";
import { CustomerPrismaService } from "@app/customer/infrastructure/prisma/prisma.customer.service";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import { CustomerEvent } from "@app/common/contracts/customer/enum";
import { CreateCustomerCommand } from "@app/customer/domain/command";

@CommandHandler(CreateCustomerCommand)
export class CreateCustomerProfileHandler
  implements ICommandHandler<CreateCustomerCommand>
{
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly customerOutboxRepository: CustomerOutboxRepository,
    private readonly prismaService: CustomerPrismaService
  ) {}
  async execute(command: CreateCustomerCommand) {
    await this.prismaService.prisma.$transaction(async (tx) => {
      const customerProfile = await this.customerRepository.createCustomer(
        command.payload.userId,
        tx
      );
      await this.customerOutboxRepository.createEvent(
        {
          aggregateId: command.payload.candidateId,
          aggregateType: KafkaTopics.Events.CUSTOMER,
          payload: {
            type: CustomerEvent.PROFILE_CREATED,
            payload: {
              profileId: customerProfile.id,
              ...command.payload,
            },
          },
        },
        tx
      );
    });
  }
}
