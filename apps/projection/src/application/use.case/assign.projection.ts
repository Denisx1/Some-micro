import { Injectable } from '@nestjs/common';
import { OrderProjectionRepository } from '../../infrastructure/repository/projection.repository';
import { AssignProjection } from '@app/common/domain/types/projection';

@Injectable()
export class AssignProjectionService {
  constructor(
    private readonly orderProjectionRepository: OrderProjectionRepository,
  ) {}
  async execute(payload: AssignProjection): Promise<void> {
    return await this.orderProjectionRepository.assignCleaner(payload);
  }
}
