import { CreateProfileCommand } from "@app/user/domain/commnad";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UserOutboxRepository } from "../../infrastructure/repositories/user.outbox.repository";
import { CandidateCasheService } from "../../infrastructure/cashe/candidate.cashe.service";
import { UserPrismaService } from "@app/user";
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import { RegistrationStep, RoleName } from "@app/common/contracts/user/enum";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import { CustomerCommand } from "@app/common/contracts/customer/enum";
import { CleanerCommands } from "@app/common";
import {
  NotificationSubType,
  NotificationTransport,
} from "@app/common/contracts/notification/enum";

@CommandHandler(CreateProfileCommand)
export class CreateProfileHandler
  implements ICommandHandler<CreateProfileCommand>
{
  constructor(
    private readonly userOutboxRepository: UserOutboxRepository,
    private readonly candidateCashe: CandidateCasheService,
    private readonly userPrisma: UserPrismaService
  ) {}
  async execute(command: CreateProfileCommand) {
    await this.candidateCashe.updateSession(command.payload.candidateId, {
      registrationStatus: {
        step: RegistrationStep.CREATING_PROFILE,
        progress: 30,
        message: `Creating you ${command.payload.role} profile`,
      },
    });
    const event =
      command.payload.role === RoleName.CLEANER
        ? {
            aggregateId: command.payload.candidateId,
            aggregateType: KafkaTopics.Commands.CLEANER,
            payload: {
              type: CleanerCommands.CREATE_CLEANER,
              payload: {
                userId: command.payload.userId,
                candidateId: command.payload.candidateId,
              },
            },
          }
        : {
            aggregateId: command.payload.candidateId,
            aggregateType: KafkaTopics.Commands.CUSTOMER,
            payload: {
              type: CustomerCommand.CREATE_CUSTOMER,
              payload: {
                userId: command.payload.userId,
                candidateId: command.payload.candidateId,
              },
            },
          };
    await this.userPrisma.prisma.$transaction(async (tx) => {
      await this.userOutboxRepository.createEvent(event, tx);
      await this.userOutboxRepository.createEvent(
        {
          aggregateId: command.payload.candidateId,
          aggregateType: KafkaTopics.Commands.NOTIFICATION,
          payload: {
            type: NotificationTransport.GRPC,
            subType: NotificationSubType.REGISTRATION_PROCESS,
            payload: {
              targetId: [command.payload.candidateId],
              step: RegistrationStep.CREATING_PROFILE,
              progress: 30,
              message: `Creating you ${command.payload.role} profile`,
            },
          },
        },
        tx
      );
    });
  }
}
