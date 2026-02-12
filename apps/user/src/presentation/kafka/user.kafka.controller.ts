import { BaseCandidate, KafkaTopics, UpdateUser } from '@app/common/domain';
import { Controller } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  KafkaContext,
  Payload,
} from '@nestjs/microservices';
import { UserFacade } from '../../application/user.facade';
import { Observable } from 'rxjs';

@Controller()
export class UserKafkaController {
  constructor(private readonly userFacade: UserFacade) {}

  @EventPattern(KafkaTopics.USER_CREATE)
  createUser(@Payload() message: BaseCandidate): Observable<void> {
    return this.userFacade.createUser(message);
  }

  @EventPattern([
    KafkaTopics.USER_LOGINED,
    KafkaTopics.USER_LOGOUT,
    KafkaTopics.USER_LOGOUT_ALL,
    KafkaTopics.USER_UPDATE_PASSWORD,
  ])
  updateUser(
    @Payload() message: UpdateUser,
    @Ctx() context: KafkaContext,
  ): Observable<void> {
    const topic = context.getTopic();
    return this.userFacade.updateUser(topic, message);
  }
}
