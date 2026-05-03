import {
  AttachTokenAndNotifyCommand,
  CreateAdminCommand,
} from "@app/user/domain/commnad";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UserOutboxRepository } from "../../infrastructure/repositories/user.outbox.repository";
import { CandidateCasheService } from "../../infrastructure/cashe/candidate.cashe.service";
import { UserPrismaService } from "@app/user";
import { CandidateRepository } from "../../infrastructure/repositories/candidate.repository";
import { NotFoundError } from "@app/common";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import {
  NotificationSubType,
  NotificationTransport,
} from "@app/common/contracts/notification/enum";

@CommandHandler(AttachTokenAndNotifyCommand)
export class AttachTokenHandler implements ICommandHandler<CreateAdminCommand> {
  constructor(
    private readonly userOutboxRepository: UserOutboxRepository,
    private readonly candidateCashe: CandidateCasheService,
    private readonly userPrisma: UserPrismaService,
    private readonly candidateRepository: CandidateRepository
  ) {}
  async execute(command: AttachTokenAndNotifyCommand) {
    const { candidateId, actionToken } = command.payload;
    const session = await this.candidateCashe.getSession(candidateId);
    if (!session) throw new NotFoundError("Candidate");
    await this.candidateCashe.updateSession(candidateId, { actionToken });
    await this.userPrisma.prisma.$transaction(async (tx) => {
      const newCandidate = await this.candidateRepository.updateCandidate(
        candidateId,
        { actionToken },
        tx
      );
      if (!newCandidate) throw new NotFoundError("Candidate");
      await this.userOutboxRepository.createEvent(
        {
          aggregateId: newCandidate.id,
          aggregateType: KafkaTopics.Commands.NOTIFICATION,
          payload: {
            type: NotificationTransport.EMAIL,
            subType: NotificationSubType.INIT_REGISTRATION,
            payload: {
              userName: newCandidate.userName,
              email: newCandidate.email,
              actionToken,
            },
          },
        },
        tx
      );
    });
  }
}
