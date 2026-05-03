import { CompleteRegistrationCommand } from "@app/auth/domain/command";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AuthOutboxRepository } from "../../infrastructure/repositories/auth.outbox.repository";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import { AuthEvent } from "@app/common";
import { LoginUseCase } from "../use-cases/login";
import { TokenService } from "../../infrastructure/token/token.service";
import { LoginType } from "@app/auth";
import { AuthCacheService } from "../../infrastructure/cashe/auth.cache.service";

@CommandHandler(CompleteRegistrationCommand)
export class CompleteRegistrationHandler
  implements ICommandHandler<CompleteRegistrationCommand>
{
  constructor(
    private readonly loginUseCase: LoginUseCase,
    private readonly tokenService: TokenService,
    private readonly authCacheService: AuthCacheService
  ) {}
  async execute(command: CompleteRegistrationCommand): Promise<void> {
    const { candidateId, ...rest } = command.payload;
    const tokens = this.tokenService.generateTokenPair(rest);
    await this.loginUseCase.execute({
      candidateId,
      eventType: LoginType.REGISTRATION_FLOW,
      tokens,
      userId: rest.userId,
    });
    await this.authCacheService.setLoginMetadata(rest);
  }
}
