import { OrderEvents } from "./enum";
import {
  CleanerBoundedToOrderEvent,
  CleanerSelectedEvent,
  CreatedOrderEvent,
} from "./order.event";

export const OrderEventMap = {
  [OrderEvents.ORDER_CREATED]: CreatedOrderEvent,
  [OrderEvents.CLEANER_SELECTED]: CleanerSelectedEvent,
  [OrderEvents.CLEANER_BOUND_TO_ORDER]: CleanerBoundedToOrderEvent,
};
