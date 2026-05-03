import { ChatEventMap } from "@app/common/contracts/chat/constants";
import { CleanerEventMap } from "@app/common/contracts/cleaner/constants";
import { OrderEventMap } from "@app/common/contracts/order";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import { KafkaDto } from "@app/common/infrastructure/kafka/types";
import { Controller } from "@nestjs/common";
import { EventBus } from "@nestjs/cqrs";
import { EventPattern, Payload } from "@nestjs/microservices";

@Controller()
export class OrderCommandController {
  constructor(private readonly eventBus: EventBus) {}
  @EventPattern(KafkaTopics.Events.ORDER)
  async orderHandler(@Payload() event: KafkaDto) {
    console.log(event);
    const EventClass = OrderEventMap[event.type];
    await this.eventBus.publish(new EventClass(event.payload));
  }
  @EventPattern(KafkaTopics.Events.CLEANER)
  async cleanerHandler(@Payload() event: KafkaDto) {
    console.log(event);
    const EventClass = CleanerEventMap[event.type];
    await this.eventBus.publish(new EventClass(event.payload));
  }
  @EventPattern([KafkaTopics.Events.CHAT])
  async chatHandler(@Payload() event: KafkaDto) {
    const EventClass = ChatEventMap[event.type];
    await this.eventBus.publish(new EventClass(event.payload));
  }
}
