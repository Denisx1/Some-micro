import { CompleteRegistrationCommand } from "@app/user/domain/commnad";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UserOutboxRepository } from "../../infrastructure/repositories/user.outbox.repository";
import { CandidateCasheService } from "../../infrastructure/cashe/candidate.cashe.service";
import { UserPrismaService } from "@app/user";
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import { RegistrationStep } from "@app/common/contracts/user/enum";
import { UserRoleRepository } from "../../infrastructure/repositories/user.role.repository";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import { AuthCommand } from "@app/common";
import {
  NotificationSubType,
  NotificationTransport,
} from "@app/common/contracts/notification/enum";
@CommandHandler(CompleteRegistrationCommand)
export class CompleteRegistrationhandler
  implements ICommandHandler<CompleteRegistrationCommand>
{
  constructor(
    private readonly userOutboxRepository: UserOutboxRepository,
    private readonly candidateCashe: CandidateCasheService,
    private readonly userPrisma: UserPrismaService,
    private readonly userRepository: UserRepository,
    private readonly userRoleRepository: UserRoleRepository
  ) {}
  async execute(command: CompleteRegistrationCommand) {
    await this.userPrisma.prisma.$transaction(async (tx) => {
      const updatedUser = await this.userRepository.updateUser(
        command.payload.userId,
        { isActive: true },
        tx
      );
      const role = await this.userRoleRepository.getRoleById(
        updatedUser.roleId,
        tx
      );
      await this.userOutboxRepository.createEvent(
        {
          aggregateId: command.payload.candidateId,
          aggregateType: KafkaTopics.Commands.AUTH,
          payload: {
            type: AuthCommand.CREATE_TOKEN_PAIR,
            payload: {
              ...command.payload,
              role: role.name,
              tokenVersion: updatedUser.tokenVersion,
            },
          },
        },
        tx
      );
      await this.userOutboxRepository.createEvent(
        {
          aggregateId: command.payload.candidateId,
          aggregateType: KafkaTopics.Commands.NOTIFICATION,
          payload: {
            type: NotificationTransport.GRPC,
            subType: NotificationSubType.REGISTRATION_PROCESS,
            payload: {
              targetId: [command.payload.candidateId],
              step: RegistrationStep.LOGIN_USER,
              progress: 40,
              message: `Logining user`,
            },
          },
        },
        tx
      );
    });
    await this.candidateCashe.updateSession(command.payload.candidateId, {
      registrationStatus: {
        step: RegistrationStep.LOGIN_USER,
        progress: 40,
        message: `Logining user`,
      },
    });
  }
}
