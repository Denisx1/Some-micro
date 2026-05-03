import { Controller, UseInterceptors } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { KafkaDto } from "@app/common/infrastructure/kafka/types";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import { CommandBus } from "@nestjs/cqrs";
import { NotificationCommandMap } from "libs/notification/domain/constant";
import { GrpcClientInterceptor } from "@app/common/system/interceptor/common.interceptor";

@Controller()
@UseInterceptors(GrpcClientInterceptor)
export class NotificationKafkaController {
  constructor(private readonly commandBus: CommandBus) {}

  @MessagePattern(KafkaTopics.Commands.NOTIFICATION)
  async handleGrpcStreams(@Payload() message: KafkaDto) {
    const CommandClass = NotificationCommandMap[message.type];
    console.log(message);
    await this.commandBus.execute(
      new CommandClass(message.subType, message.payload)
    );
  }
}
