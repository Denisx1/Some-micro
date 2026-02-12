import { Injectable } from '@nestjs/common';
import { OrderProjectionRepository } from '../../infrastructure/repository/projection.repository';
import { DeclineProjection } from '@app/common/domain/types/projection';

@Injectable()
export class DeclineProjectionService {
  constructor(
    private readonly orderProjectionRepository: OrderProjectionRepository,
  ) {}
  async execute(payload: DeclineProjection): Promise<void> {
    return await this.orderProjectionRepository.declineCleaner(payload);
  }
}
