import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { KafkaDto } from "@app/common/infrastructure/kafka/types";
import { CommandBus } from "@nestjs/cqrs";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import { CustomerCommandMap } from "@app/customer/domain/constants";

@Controller()
export class CutomerKafkaController {
  constructor(private readonly commandBus: CommandBus) {}

  @EventPattern(KafkaTopics.Commands.CUSTOMER)
  async createCustomer(@Payload() event: KafkaDto) {
    console.log(event)
    const CommandClass = CustomerCommandMap[event.type];
    await this.commandBus.execute(new CommandClass(event.payload));
  }
}
