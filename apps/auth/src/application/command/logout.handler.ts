import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AuthCacheService } from "../../infrastructure/cashe/auth.cache.service";
import { LogoutCommand } from "@app/auth/domain/command";
import { AuthRepository } from "../../infrastructure/repositories/auth.repository";
import { AuthPrismaService } from "@app/auth";
import { AuthOutboxRepository } from "../../infrastructure/repositories/auth.outbox.repository";
import { AuthEvent, AuthSubType, UnauthenticatedError } from "@app/common";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";

@CommandHandler(LogoutCommand)
export class LogoutHandler implements ICommandHandler<LogoutCommand> {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly prismaService: AuthPrismaService,
    private readonly authOutboxRepository: AuthOutboxRepository,
    private readonly authCacheService: AuthCacheService
  ) {}
  async execute(command: LogoutCommand): Promise<number> {
    const { userId } = command.payload;
    await this.prismaService.prisma.$transaction(async (tx) => {
      const logined = await this.authRepository.getByUserId(userId, tx);
      if (!logined) throw new UnauthenticatedError("Not Logined");
      await this.authRepository.deleteOne(logined.id, tx);
      await this.authOutboxRepository.createEvent(
        {
          aggregateId: userId,
          aggregateType: KafkaTopics.Events.AUTH,
          payload: {
            type: AuthEvent.USER_LOGOUTED,
            payload: { userId, subType: AuthSubType.LOGOUTED },
          },
        },
        tx
      );
    });
    await this.authCacheService.delMetadata(userId);
    return userId;
  }
}
