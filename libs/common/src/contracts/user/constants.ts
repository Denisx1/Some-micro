import { UserEvent } from "./enum";
import { UserCreatedEvent, UserRegistrationStartedEvent } from "./user.events";

export const UserEventMap = {
  [UserEvent.REGISTRATION_STARTED]: UserRegistrationStartedEvent,
  [UserEvent.USER_CREATED]: UserCreatedEvent,
};
