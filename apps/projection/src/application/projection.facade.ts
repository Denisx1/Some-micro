import { Injectable } from '@nestjs/common';
import { CreateProjectionService } from './use.case/create.projection';
import { InviteProjectionService } from './use.case/invite.projection';
import {
  AssignProjection,
  DeclineProjection,
  InviteProjection,
  UpdateOrderProjection,
  UpdateProjection,
} from '@app/common/domain/types/projection';
import { AssignProjectionService, DeclineProjectionService } from './use.case';
import { NotFoundProjectionService } from './use.case/not.found.projection';

@Injectable()
export class ProjectionFacade {
  constructor(
    private readonly createProjectionService: CreateProjectionService,
    private readonly declineProjectionService: DeclineProjectionService,
    private readonly inviteProjectionService: InviteProjectionService,
    private readonly assignProjectionService: AssignProjectionService,
    private readonly notFoundProjectionService: NotFoundProjectionService,
  ) {}
  async createProjection(orderId: number): Promise<void> {
    return await this.createProjectionService.execute(orderId);
  }
  async inviteProjection(payload: InviteProjection): Promise<void> {
    return await this.inviteProjectionService.execute(payload);
  }
  async assignProjection(payload: AssignProjection): Promise<void> {
    return await this.assignProjectionService.execute(payload);
  }
  async declineProjection(payload: DeclineProjection): Promise<void> {
    return await this.declineProjectionService.execute(payload);
  }
  async notFoundProjection(payload: UpdateProjection): Promise<void> {
    return await this.notFoundProjectionService.execute(payload);
  }
}
