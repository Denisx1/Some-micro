import { Controller, UseInterceptors, UsePipes } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { KafkaConsumerInterceptor } from "@app/common/system/interceptor/kafka.interceptor";

import { GlobalValidationPipe } from "@app/common/system";

import { KafkaDto } from "@app/common/infrastructure/kafka/types";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import { CommandBus } from "@nestjs/cqrs";
import { CleanerCommandMap } from "@app/cleaner/domain/constants";

@Controller()
export class CleanerCommandController {
  constructor(private readonly commandBus: CommandBus) {}

  @EventPattern(KafkaTopics.Commands.CLEANER)
  async handleCleaner(@Payload() command: KafkaDto) {
    console.log(command);
    const CommandClass = CleanerCommandMap[command.type];
    await this.commandBus.execute(new CommandClass(command.payload));
  }
}
