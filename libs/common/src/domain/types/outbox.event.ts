import { OrderOutbox } from '@app/common/infrastructure/prisma/generated/order';

export type OutboxArray = {
  orderHistory: OrderOutbox[];
};
