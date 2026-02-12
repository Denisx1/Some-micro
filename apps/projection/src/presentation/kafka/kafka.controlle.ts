import { KafkaTopics } from '@app/common/domain';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProjectionFacade } from '../../application/projection.facade';
import {
  AssignProjection,
  DeclineProjection,
  InviteProjection,
  UpdateProjection,
} from '@app/common/domain/types/projection';
import { MatchOrderData } from '@app/common/domain/types/grpc.services.types/order';

@Controller()
export class ProjectionKafkaController {
  constructor(private readonly projectionFacade: ProjectionFacade) {}

  @MessagePattern(KafkaTopics.ORDER_CREATED)
  async projectionHandler(@Payload() message: MatchOrderData): Promise<void> {
    return await this.projectionFacade.createProjection(message.id);
  }
  @MessagePattern(KafkaTopics.CLEANERS_NOT_FOUND)
  async nFoundHandler(@Payload() message: UpdateProjection): Promise<void> {
    return await this.projectionFacade.notFoundProjection(message);
  }

  @MessagePattern(KafkaTopics.CLEANES_INVITED)
  async projectionInvitedHandler(
    @Payload() message: InviteProjection,
  ): Promise<void> {
    return await this.projectionFacade.inviteProjection(message);
  }

  @MessagePattern(KafkaTopics.CLEANER_ACCEPTED)
  async handleAssignCleaner(
    @Payload() message: AssignProjection,
  ): Promise<void> {
    return await this.projectionFacade.assignProjection(message);
  }

  @MessagePattern(KafkaTopics.CLEANER_DECLINE)
  async HandleDeclineCleaner(
    @Payload() message: DeclineProjection,
  ): Promise<void> {
    return await this.projectionFacade.declineProjection(message);
  }
}
