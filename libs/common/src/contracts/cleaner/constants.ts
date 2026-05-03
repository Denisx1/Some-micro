import {
  CleanerAcceptedEvent,
  CleanerInvitedEvent,
  CleanerNotFoundEvent,
  CleanerProfileCreatedEvent,
  CleanerReservedEvent,
} from "./cleaner.event";
import { CleanerEvents } from "./enum";

export const CleanerEventMap = {
  [CleanerEvents.PROFILE_CREATED]: CleanerProfileCreatedEvent,
  [CleanerEvents.CLEANERS_RESERVED]: CleanerReservedEvent,
  [CleanerEvents.CLEANER_NOT_FOUND]: CleanerNotFoundEvent,
  [CleanerEvents.CLEANER_INVITED]: CleanerInvitedEvent,
  [CleanerEvents.CLEANER_ACCEPTED]: CleanerAcceptedEvent,
  [CleanerEvents.CLEANER_DECLINED]: CleanerInvitedEvent,
};
