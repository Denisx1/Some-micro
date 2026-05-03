import { ConfirmRegistrationCommand } from "@app/auth/domain/command";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { TokenService } from "../../infrastructure/token/token.service";
import { AuthEvent, ExpiredError } from "@app/common";
import { AuthOutboxRepository } from "../../infrastructure/repositories/auth.outbox.repository";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import { ActionTokenPayload } from "@app/auth/domain/types1";

@CommandHandler(ConfirmRegistrationCommand)
export class ConfirmRegistrationHandler
  implements ICommandHandler<ConfirmRegistrationCommand>
{
  constructor(
    private readonly tokenService: TokenService,
    private readonly authOutboxRepository: AuthOutboxRepository
  ) {}
  async execute(command: ConfirmRegistrationCommand): Promise<number> {
    const parsedToken = this.parseToken(command.payload.actionToken);
    if (!parsedToken) throw new ExpiredError("Session Expired");
    await this.authOutboxRepository.createEvent({
      aggregateId: parsedToken.candidateId,
      aggregateType: KafkaTopics.Events.AUTH,
      payload: {
        type: AuthEvent.CANDIDATE_VERIFIED,
        payload: {
          email: parsedToken.email,
          role: parsedToken.role,
          candidateId: parsedToken.candidateId,
        },
      },
    });
    return parsedToken.candidateId;
  }
  private parseToken(token: string): ActionTokenPayload {
    const parsedData = this.tokenService.parseActionToken(token);
    if (!parsedData && !parsedData.actionType)
      throw new ExpiredError("Session Expired");
    return parsedData;
  }
}
