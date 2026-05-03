import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import { UserOutboxRepository } from "../../infrastructure/repositories/user.outbox.repository";
import { AlreadyExistError } from "@app/common";
import { HashService } from "@app/common/infrastructure/hash/hash.service";
import { CandidateCasheService } from "../../infrastructure/cashe/candidate.cashe.service";
import { UserPrismaService } from "@app/user";
import { CandidateRepository } from "../../infrastructure/repositories/candidate.repository";
import { UserRoleRepository } from "../../infrastructure/repositories/user.role.repository";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import { RegistrationStep, UserEvent } from "@app/common/contracts/user/enum";
import { ActionTokenType } from "@app/common/contracts/auth/enum";
import { CreateCandidateCommand } from "@app/user/domain/commnad";
import { UserRoleCashService } from "../../infrastructure/cashe/role.cashe";

@CommandHandler(CreateCandidateCommand)
export class CreateCandidateHandler
  implements ICommandHandler<CreateCandidateCommand>
{
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userOutboxRepository: UserOutboxRepository,
    private readonly hahsService: HashService,
    private readonly candidateCashe: CandidateCasheService,
    private readonly userPrisma: UserPrismaService,
    private readonly candidateRepository: CandidateRepository,
    private readonly userCashe: UserRoleCashService
  ) {}
  async execute(payload: CreateCandidateCommand): Promise<number> {
    const { userName, email, role, password } = payload.candidate;
    const existSess = await this.candidateCashe.getSession(userName);
    if (existSess) throw new AlreadyExistError("Reg session");
    const existCandidate = await this.candidateRepository.getCandidate(
      userName
    );
    if (existCandidate) throw new AlreadyExistError("Candidate");

    const hashedPassword = await this.hahsService.hash(password);
    const roleData = await this.userCashe.getRole(role);
    return await this.userPrisma.prisma.$transaction(async (tx) => {
      const existUsr = await this.userRepository.findByCriteria({
        userName,
        email,
      });
      if (existUsr) throw new AlreadyExistError("User");

      const newCandidate = await this.candidateRepository.createCandidate(
        {
          userName,
          email,
          roleId: roleData.id,
          password: hashedPassword,
        },
        tx
      );
      await this.candidateCashe.saveSession(newCandidate.id, {
        candidate: {
          userName,
          email,
          roleId: roleData.id,
          password: hashedPassword,
        },
        registrationStatus: {
          step: RegistrationStep.AWAITING_CONFIRMATION,
          progress: 10,
          message: "Waiting for email confirmation",
        },
      });

      await this.userOutboxRepository.createEvent(
        {
          aggregateId: newCandidate.id,
          aggregateType: KafkaTopics.Events.USER,
          payload: {
            type: UserEvent.REGISTRATION_STARTED,
            payload: {
              candidateId: newCandidate.id,
              email,
              role,
              actionType: ActionTokenType.REGISTRATION,
            },
          },
        },
        tx
      );
      return newCandidate.id;
    });
  }
}
