import { NotifyRegistrationSuccessCommand } from "@app/user/domain/commnad";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UserOutboxRepository } from "../../infrastructure/repositories/user.outbox.repository";
import { CandidateCasheService } from "../../infrastructure/cashe/candidate.cashe.service";
import { UserPrismaService } from "@app/user";
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import { CandidateRepository } from "../../infrastructure/repositories/candidate.repository";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import {
  NotificationSubType,
  NotificationTransport,
} from "@app/common/contracts/notification/enum";
import { RegistrationStep } from "@app/common/contracts/user/enum";

@CommandHandler(NotifyRegistrationSuccessCommand)
export class NotifyRegistrationSuccessHandler
  implements ICommandHandler<NotifyRegistrationSuccessCommand>
{
  constructor(
    private readonly userOutboxRepository: UserOutboxRepository,
    private readonly candidateCashe: CandidateCasheService,
    private readonly userPrisma: UserPrismaService,
    private readonly userRepository: UserRepository,
    private readonly candidateRepository: CandidateRepository
  ) {}
  async execute(command: NotifyRegistrationSuccessCommand) {
    const { candidateId, userId, ...rest } = command.payload;
    await this.userPrisma.prisma.$transaction(async (tx) => {
      await this.userRepository.updateUser(userId, { isActive: true }, tx);
      await this.userOutboxRepository.createEvent(
        {
          aggregateId: candidateId,
          aggregateType: KafkaTopics.Commands.NOTIFICATION,
          payload: {
            type: NotificationTransport.GRPC,
            subType: NotificationSubType.REGISTRATION_PROCESS,
            payload: {
              targetId: [candidateId],
              payload: rest,
              step: RegistrationStep.REGISTRATION_SUCCESS,
              progress: 50,
              message: `Registration success`,
            },
          },
        },
        tx
      );
      await this.candidateRepository.deleteCandidate(candidateId, tx);
    });
    await this.candidateCashe.deleteSession(candidateId);
  }
}
