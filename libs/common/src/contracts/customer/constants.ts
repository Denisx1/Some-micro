import { CustomerEvent } from "./enum";
import { CostomerCreatedEvent } from "./events";

export const CustomerEventMap = {
  [CustomerEvent.PROFILE_CREATED]: CostomerCreatedEvent,
};

