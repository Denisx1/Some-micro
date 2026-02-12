import {
  Order,
  OrderOutbox,
} from '@app/common/infrastructure/prisma/generated/order';
import { Observable } from 'rxjs';
import { SagaCommands, SagaEvents } from '../../enums';
import { OutboxArray } from '../outbox.event';
import { ChatData } from './chat';

export type MatchOrderData = Omit<
  Order,
  'cleanerId' | 'status' | 'customerId' | 'clarifications'
>;

export type MatchSlotData = Omit<MatchOrderData, 'zipCode' | 'city'>;
export type OrderTransport = Omit<
  Order,
  'cleanerId' | 'clarifications' | 'status'
>;

export type CreateOrder = Omit<Order, 'id' | 'cleanerId' | 'status'>;
export type GetOrderById = Pick<Order, 'id'>;

export type UpdateOrderType = Partial<Order>;
export type UpdateOrder = Pick<Order, 'id'>;

export interface OrderServiceController {
  createOrder: (request: CreateOrder) => Observable<void>;
  getOrderById: (request: GetOrderById) => Observable<Order>;
  getOrderHistory: (request: GetOrderById) => Observable<OutboxArray>;
}

export type OrderEvent =
  | {
      type: SagaEvents.ORDER_CREATED;
      payload: MatchOrderData;
    }
  | {
      type: SagaEvents.CLEANER_BOUND_TO_ORDER;
      payload: { orderId: number; cleanerId: number; customerId: number };
    };

export type ChatCommand = {
  type: SagaCommands.CREATE_CHAT;
  payload: { orderId: number; cleanerId: number; customerId: number };
  comment: string;
};
export type ChatEvent = {
  type: SagaEvents.CHAT_CREATED;
  payload: {
    roomId: number;
    orderId: number;
    cleanerId: number;
    customerId: number;
  };
};
export type OrdertCommand =
  | {
      type: SagaCommands.CLEANER_NOT_FOUND;
      payload: { orderId: number };
    }
  | { type: SagaCommands.INVITED_CLEANERS; payload: { orderId: number } }
  | {
      type: SagaCommands.CLEANER_ACCEPTED;
      payload: { cleanerId: number; orderId: number };
    };
export type CustomerCommand =
  | {
      type: SagaCommands.CREATE_CUSTOMER;
      payload: { userId: number };
    }
  | {
      type: SagaCommands.MATCH_USERS;
      payload: ChatData;
    };
export type CleanerCommand =
  | {
      type: SagaCommands.INVITE_CLEANERS;
      payload: MatchOrderData;
    }
  | {
      type: SagaCommands.CREATE_CLEANER;
      payload: { userId: number };
    }
  | {
      type: SagaCommands.MATCH_USERS;
      payload: {
        roomId: number;
        orderId: number;
        cleanerId: number;
        customerId: number;
      };
    };
export type CleanerEvent =
  | {
      type: SagaEvents.CLEANER_NOT_FOUND;
      payload: { orderId: number };
      comment: string;
    }
  | {
      type: SagaEvents.CLEANERS_INVITED;
      payload: { orderId: number; cleanerIds: number[] };
      comment: string;
    }
  | {
      type: SagaEvents.CLEANER_ACCEPTED;
      payload: {
        cleanerId: number;
        orderId: number;
      };
      comment: string;
    }
  | {
      type: SagaEvents.ALL_CLEANERS_DECLINED;
      payload: {
        cleanerId: number;
        orderId: number;
      };
      comment: string;
    }
  | {
      type: SagaEvents.CLEANER_DECLINED;
      payload: {
        cleanerId: number;
        orderId: number;
      };
      comment: string;
    };

// export type CleanerMessage =
//   | {
//       type: SagaCommands.ASSIGN_CLEANER;
//       payload: MatchOrderData;
//     }
//   | {
//       type: SagaEvents.CLEANER_ASSIGNED;
//       payload: { orderId: number; cleanerId: number };
//     }
//   | {
//       type: SagaEvents.CLEANER_NOT_FOUND_EV; // Для компенсации (отката)
//       payload: { orderId: number };
//     };
