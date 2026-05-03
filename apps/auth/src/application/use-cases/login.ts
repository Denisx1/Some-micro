import { AuthPrismaService, LoginType } from "@app/auth";
import { Injectable } from "@nestjs/common";
import { AuthRepository } from "../../infrastructure/repositories/auth.repository";
import { ILoginMetadata } from "@app/auth/domain/types1";
import { AuthEvent, AuthSubType } from "@app/common";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import { AuthOutboxRepository } from "../../infrastructure/repositories/auth.outbox.repository";

@Injectable()
export class LoginUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly prismaService: AuthPrismaService,
    private readonly authOutboxRepository: AuthOutboxRepository
  ) {}

  async execute(payload: ILoginMetadata): Promise<void> {
    const isRegistration = payload.eventType === LoginType.REGISTRATION_FLOW;
    const event = isRegistration
      ? {
          aggregateId: payload.candidateId,
          aggregateType: KafkaTopics.Events.AUTH,
          payload: {
            type: AuthEvent.TOKEN_PAIR_CREATED,
            payload: {
              candidateId: payload.candidateId,
              userId: payload.userId,
              ...payload.tokens,
            },
          },
        }
      : {
          aggregateId: payload.userId,
          aggregateType: KafkaTopics.Events.AUTH,
          payload: {
            type: AuthEvent.USER_LOGINED,

            payload: { userId: payload.userId, subType: AuthSubType.LOGINED },
          },
        };
    await this.prismaService.prisma.$transaction(async (tx) => {
      await this.authRepository.createAuth(
        {
          userId: payload.userId,
          refreshToken: payload.tokens.refreshToken,
        },
        tx
      );
      await this.authOutboxRepository.createEvent(event, tx);
    });
  }
}
