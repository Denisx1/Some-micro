// import { CleanerAcceptedHandler } from "./cleaner.accepted.handler";
// import { CleanerNotFoundHandler } from "./cleaners.not.found.handler";
// import { CreateChatHandler } from "./create.chat.handler";
import { CreateInvitationsHandler } from "./create.invitation.handler";
import { CreateOrderHandler } from "./create.order.handler";
// import { DeclineCleanerHandler } from "./decline.cleaner.handler";
import { InviteCleanerHandler } from "./invite.cleaner.handler";
import { NotifyInvitationsHandler } from "./notify.invitation.handler";
// import { NotifyChatCreatedHandler } from "./noyify.users.handler";
import { SearchCleanersHandler } from "./search.cleaners.hendler";
import { SelectCleanerHandler } from "./select.cleaner.handler";

export const OrderHandlers = [
  // CleanerAcceptedHandler,
  // CleanerNotFoundHandler,
  // CreateChatHandler,
  CreateInvitationsHandler,
  CreateOrderHandler,
  // DeclineCleanerHandler,
  // InviteCleanerHandler,
  NotifyInvitationsHandler,
  InviteCleanerHandler,
  // NotifyChatCreatedHandler,
  SearchCleanersHandler,
  SelectCleanerHandler,
];
