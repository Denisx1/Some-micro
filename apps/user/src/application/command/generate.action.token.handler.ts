import { GenerateActionTokenCommand } from "@app/user/domain/commnad";
import { CommandHandler } from "@nestjs/cqrs";
import { UserOutboxRepository } from "../../infrastructure/repositories/user.outbox.repository";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import { AuthCommand } from "@app/common/contracts/auth/enum";

@CommandHandler(GenerateActionTokenCommand)
export class GenerateActionTokenHandler {
  constructor(private readonly userOutboxRepo: UserOutboxRepository) {}
  async execute(command: GenerateActionTokenCommand) {
    await this.userOutboxRepo.createEvent({
      aggregateId: command.payload.candidateId,
      aggregateType: KafkaTopics.Commands.AUTH,
      payload: {
        type: AuthCommand.CREATE_ACTION_TOKEN,
        payload: command.payload,
      },
    });
  }
}
