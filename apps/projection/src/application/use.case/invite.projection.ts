import { Injectable } from '@nestjs/common';
import { OrderProjectionRepository } from '../../infrastructure/repository/projection.repository';
import { InviteProjection } from '@app/common/domain/types/projection';

@Injectable()
export class InviteProjectionService {
  constructor(
    private readonly orderProjectionRepository: OrderProjectionRepository,
  ) {}
  async execute(payload: InviteProjection): Promise<void> {
    return await this.orderProjectionRepository.inviteProjection(payload);
  }
}
