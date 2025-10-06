import { Controller } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { MessagePattern } from '@nestjs/microservices';
import { SafeCandidate } from '@app/common';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @MessagePattern('user.candidate.created')
  handleUserCandidateCreated(candidate: SafeCandidate) {
    this.notificationService.sendNotification(candidate);
  }
}
