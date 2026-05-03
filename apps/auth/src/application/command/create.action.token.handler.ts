import { CreateActionTokenCommand } from "@app/auth/domain/command";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { TokenService } from "../../infrastructure/token/token.service";
import { AuthOutboxRepository } from "../../infrastructure/repositories/auth.outbox.repository";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import { AuthEvent } from "@app/common";

@CommandHandler(CreateActionTokenCommand)
export class CreateActionTokenHandler
  implements ICommandHandler<CreateActionTokenCommand>
{
  constructor(
    private readonly tokenService: TokenService,
    private readonly authOutboxRepository: AuthOutboxRepository
  ) {}
  async execute(command: CreateActionTokenCommand) {
    const actionToken = this.tokenService.generateActionToken(command.payload);
    await this.authOutboxRepository.createEvent({
      aggregateId: command.payload.candidateId,
      aggregateType: KafkaTopics.Events.AUTH,
      payload: {
        type: AuthEvent.ACTION_TOKEN_CREATED,
        payload: {
          candidateId: command.payload.candidateId,
          email: command.payload.email,
          actionToken,
        },
      },
    });
  }
}
