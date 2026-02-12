import { Controller } from '@nestjs/common';
import { NotificationService } from './notification.service';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { SafeCandidate } from '@app/common/domain';
import {
  CANDIDATE_SAVED,
  USER_FORGOT_PASSWORD,
} from '@app/common/domain/constants/kafka.topics';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @MessagePattern(CANDIDATE_SAVED)
  handleUserCandidateCreated(
    @Payload() candidate: SafeCandidate,
    @Ctx() context: KafkaContext,
  ) {
    const topic = context.getTopic();
    this.notificationService.sendNotification(candidate, topic);
  }
  @MessagePattern(USER_FORGOT_PASSWORD)
  handleUserForgotPassword(
    @Payload() userData: SafeCandidate,
    @Ctx() context: KafkaContext,
  ) {
    const topic = context.getTopic();
    this.notificationService.sendNotification(userData, topic);
  }
}
