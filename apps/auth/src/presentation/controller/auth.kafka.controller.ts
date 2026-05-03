import { CommandMap } from "@app/auth/domain/constant";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import { KafkaDto } from "@app/common/infrastructure/kafka/types";
import { Controller } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { EventPattern, Payload } from "@nestjs/microservices";

@Controller()
export class AuthKafkaController {
  constructor(private readonly commandBus: CommandBus) {}
  @EventPattern(KafkaTopics.Commands.AUTH)
  async authHandler(@Payload() event: KafkaDto) {
    const CommandClass = CommandMap[event.type];
    await this.commandBus.execute(new CommandClass(event.payload));
  }
}
