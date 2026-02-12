import { Injectable } from '@nestjs/common';
import { OrderProjectionRepository } from '../../infrastructure/repository/projection.repository';
import { UpdateProjection } from '@app/common/domain/types/projection';

@Injectable()
export class NotFoundProjectionService {
  constructor(
    private readonly orderProjectionRepository: OrderProjectionRepository,
  ) {}
  async execute(payload: UpdateProjection): Promise<void> {
    return await this.orderProjectionRepository.notFoundCleaners(payload);
  }
}
