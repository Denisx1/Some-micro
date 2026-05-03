import {
  CleanerBoundedToOrderEvent,
  CleanerSelectedEvent,
  CreatedOrderEvent,
} from "@app/common/contracts/order";
import {
  AcceptOrderCommand,
  CleanerNotFoundCommand,
  CreateInvitationsCommand,
} from "./command";

import { ICommand, IEvent } from "@nestjs/cqrs";
import { Type } from "@nestjs/common";
import { OrderCommands, OrderEvents } from "@app/common/contracts/order/enum";

export const OrderInboundEventsMap: Record<string, Type<IEvent>> = {
  [OrderEvents.ORDER_CREATED]: CreatedOrderEvent,
  [OrderEvents.CLEANER_SELECTED]: CleanerSelectedEvent,
  [OrderEvents.CLEANER_BOUND_TO_ORDER]: CleanerBoundedToOrderEvent,
};

export const OrderCommandMap: Record<string, Type<ICommand>> = {
  [OrderCommands.CREATE_INVITATIONS]: CreateInvitationsCommand,
  [OrderCommands.CLEANER_ACCEPTED]: AcceptOrderCommand,
  [OrderCommands.CLEANER_NOT_FOUND]: CleanerNotFoundCommand,
};
