import { RessetPasswordCommand } from "@app/auth/domain/command";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { TokenService } from "../../infrastructure/token/token.service";
import { AuthCacheService } from "../../infrastructure/cashe/auth.cache.service";
import { AuthEvent, AuthSubType, NotFoundError } from "@app/common";
import { HashService } from "@app/common/infrastructure/hash/hash.service";
import { AuthOutboxRepository } from "../../infrastructure/repositories/auth.outbox.repository";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";

@CommandHandler(RessetPasswordCommand)
export class RessetPasswordHandler
  implements ICommandHandler<RessetPasswordCommand>
{
  constructor(
    private readonly tokenService: TokenService,
    private readonly authCacheService: AuthCacheService,
    private readonly hahsService: HashService,
    private readonly authOutboxRepository: AuthOutboxRepository
  ) {}
  async execute(command: RessetPasswordCommand): Promise<number> {
    const { password, actionToken } = command.payload;
    const parsed = this.tokenService.parseActionToken(actionToken);
    const session = await this.authCacheService.getActionToken(parsed.id);
    if (!session) throw new NotFoundError("Session");
    const hashPassword = await this.hahsService.hash(password);
    await this.authOutboxRepository.createEvent({
      aggregateId: parsed.id,
      aggregateType: KafkaTopics.Events.AUTH,
      payload: {
        type: AuthEvent.PASSWORD_APPROWED,
        payload: {
          subType: AuthSubType.PASSWORD_APPROWED,
          userId: parsed.id,
          password: hashPassword,
        },
      },
    });
    return parsed.id;
  }
}
