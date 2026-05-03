import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UserOutboxRepository } from "../../infrastructure/repositories/user.outbox.repository";
import { CandidateCasheService } from "../../infrastructure/cashe/candidate.cashe.service";
import { UserPrismaService } from "@app/user";
import { CreateUserCommand } from "@app/user/domain/commnad";
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import { UserRoleRepository } from "../../infrastructure/repositories/user.role.repository";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import {
  NotificationSubType,
  NotificationTransport,
} from "@app/common/contracts/notification/enum";
import { RegistrationStep, UserEvent } from "@app/common/contracts/user/enum";
import { UserRoleCashService } from "../../infrastructure/cashe/role.cashe";

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    private readonly userOutboxRepository: UserOutboxRepository,
    private readonly candidateCashe: CandidateCasheService,
    private readonly userPrisma: UserPrismaService,
    private readonly userRepository: UserRepository
  ) {}
  async execute(command: CreateUserCommand) {
    const session = await this.candidateCashe.getSession(
      command.payload.candidateId
    );
    await this.candidateCashe.updateSession(command.payload.candidateId, {
      registrationStatus: {
        step: RegistrationStep.CREATING_USER,
        progress: 20,
        message: "Waiting for email confirmation",
      },
    });
    await this.userPrisma.prisma.$transaction(async (tx) => {
      const newUser = await this.userRepository.createUser(
        { ...session.candidate, isEmailVerified: true },
        tx
      );

      await this.userOutboxRepository.createEvent({
        aggregateId: command.payload.candidateId,
        aggregateType: KafkaTopics.Events.USER,
        payload: {
          type: UserEvent.USER_CREATED,
          payload: {
            userId: newUser.id,
            role: command.payload.role,
            candidateId: command.payload.candidateId,
          },
        },
      });
      await this.userOutboxRepository.createEvent(
        {
          aggregateId: command.payload.candidateId,
          aggregateType: KafkaTopics.Commands.NOTIFICATION,
          payload: {
            type: NotificationTransport.GRPC,
            subType: NotificationSubType.REGISTRATION_PROCESS,
            payload: {
              targetId: [command.payload.candidateId],
              step: RegistrationStep.CREATING_USER,
              progress: 20,
              message: "Creating user",
            },
          },
        },
        tx
      );
    });
  }
}
