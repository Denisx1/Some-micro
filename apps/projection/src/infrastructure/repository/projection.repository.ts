import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  OrderProjection,
  OrderProjectionDocument,
} from '../schema/order.projection.schema';
import { Model } from 'mongoose';
import { GRPC_MONGO_SERVICES } from '@app/common/domain';
import {
  AssignProjection,
  DeclineProjection,
  InviteProjection,
  UpdateProjection,
} from '@app/common/domain/types/projection';
import { OrderStatus } from '@app/common/infrastructure/prisma/generated/order';
import { InfrastructureError } from '@app/common/system';

@Injectable()
export class OrderProjectionRepository {
  constructor(
    @InjectModel(OrderProjection.name)
    private readonly model: Model<OrderProjectionDocument>,
  ) {}
  async create(orderId: number): Promise<void> {
    try {
      await this.model.create({ orderId });
    } catch (error) {
      throw new InfrastructureError('mongo');
    }
  }
  async inviteProjection(payload: InviteProjection): Promise<void> {
    try {
      if (payload.cleanerIds) {
        await this.model.updateOne(
          { orderId: payload.orderId },
          {
            $push: {
              candidates: { $each: payload.cleanerIds }, // Пушим каждый элемент из массива
            },
            status: OrderStatus.INVITED,
          },
        );
      }

      return;
    } catch (error) {
      throw new InfrastructureError('mongo');
    }
  }
  async declineCleaner(payload: DeclineProjection): Promise<void> {
    try {
      await this.model.updateOne(
        { orderId: payload.orderId },
        {
          $pull: { candidates: payload.cleanerId },
        },
      );
    } catch (error) {
      throw new InfrastructureError('mongo');
    }
  }
  async assignCleaner(payload: AssignProjection): Promise<void> {
    try {
      await this.model.updateOne(
        { orderId: payload.orderId },
        {
          $set: {
            finalCleaner: payload.cleanerId,
            candidates: [],
            status: OrderStatus.IN_PROGRESS,
          },
        },
      );
      return;
    } catch (error) {
      throw new InfrastructureError('mongo');
    }
  }
  async notFoundCleaners(payload: UpdateProjection): Promise<void> {
    try {
      await this.model.updateOne(
        { orderId: payload.orderId },
        {
          status: OrderStatus.WAITING_FRO_CLEANER,
        },
      );
      return;
    } catch (error) {
      throw new InfrastructureError('mongo');
    }
  }
}
