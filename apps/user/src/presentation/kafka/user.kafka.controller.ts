// import { BaseCandidate, KafkaTopics, UpdateUser } from '@app/common/domain';
// import { Controller } from '@nestjs/common';
// import {
//   Ctx,
//   EventPattern,
//   KafkaContext,
//   Payload,
// } from '@nestjs/microservices';

import { AuthEventMap } from "@app/common/contracts/auth/constants";
import { CleanerEventMap } from "@app/common/contracts/cleaner/constants";
import { CustomerEventMap } from "@app/common/contracts/customer/constants";
import { UserEventMap } from "@app/common/contracts/user/constants";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import { KafkaDto } from "@app/common/infrastructure/kafka/types";
import { Controller } from "@nestjs/common";
import { EventBus } from "@nestjs/cqrs";
import { EventPattern, Payload } from "@nestjs/microservices";

// import { Observable } from 'rxjs';

// @Controller()
// export class UserKafkaController {
//   constructor(private readonly userFacade: UserFacade) {}

//   @EventPattern(KafkaTopics.USER_CREATE)
//   createUser(@Payload() message: BaseCandidate): Observable<void> {
//     return this.userFacade.createUser(message);
//   }

//   @EventPattern([
//     KafkaTopics.USER_LOGINED,
//     KafkaTopics.USER_LOGOUT,
//     KafkaTopics.USER_LOGOUT_ALL,
//     KafkaTopics.USER_UPDATE_PASSWORD,
//   ])
//   updateUser(
//     @Payload() message: UpdateUser,
//     @Ctx() context: KafkaContext,
//   ): Observable<void> {
//     const topic = context.getTopic();
//     return this.userFacade.updateUser(topic, message);
//   }
// }
@Controller()
export class UserKafkaController {
  constructor(private readonly eventBus: EventBus) {}
  @EventPattern(KafkaTopics.Events.USER)
  async userHandler(@Payload() event: KafkaDto) {
    const UserEventClass = UserEventMap[event.type];
    await this.eventBus.publish(new UserEventClass(event.payload));
  }
  @EventPattern(KafkaTopics.Events.AUTH)
  async authHandler(@Payload() event: KafkaDto) {
    const AuthEventClass = AuthEventMap[event.type];
    await this.eventBus.publish(new AuthEventClass(event.payload));
  }
  @EventPattern(KafkaTopics.Events.CUSTOMER)
  async customerHandler(@Payload() event: KafkaDto) {
    const CustomerEventClass = CustomerEventMap[event.type];
    await this.eventBus.publish(new CustomerEventClass(event.payload));
  }
  @EventPattern(KafkaTopics.Events.CLEANER)
  async cleanerHandler(@Payload() event: KafkaDto) {
    const CleanerEventClass = CleanerEventMap[event.type];
    await this.eventBus.publish(new CleanerEventClass(event.payload));
  }
}
