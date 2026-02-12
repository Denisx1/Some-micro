import { Injectable } from '@nestjs/common';
import { OrderProjectionRepository } from '../../infrastructure/repository/projection.repository';

@Injectable()
export class CreateProjectionService {
  constructor(
    private readonly orderProjectionRepository: OrderProjectionRepository,
  ) {}
  async execute(orderId: number): Promise<void> {
    await this.orderProjectionRepository.create(orderId);
    return;
  }
}
