import {
  CleanerInvitedPayload,
  ICleanerJob,
  ICleanersReservedContract,
} from "@app/common";
import {
  CleanerSelectedPayload,
  MatchOrderTransport,
} from "@app/common/contracts/order";
import {
  CreateNewOrderRequest,
  InviteCleanerRequest,
} from "@app/common/contracts/order/order.grpc.types";

export class SearchCleanerCommand {
  constructor(public readonly payload: MatchOrderTransport) {}
}
export class CreateInvitationsCommand {
  constructor(public readonly payload: ICleanersReservedContract) {}
}
export class AcceptOrderCommand {
  constructor(public readonly payload: ICleanerJob) {}
}
export class DeclineCleanerCommand {
  constructor(public readonly payload: ICleanerJob) {}
}
export class CleanerNotFoundCommand {
  constructor(public readonly orderId: number) {}
}
export class CreateOrderCommand {
  constructor(public readonly payload: CreateNewOrderRequest) {}
}
export class SelectCleanerCommand {
  constructor(public readonly payload: InviteCleanerRequest) {}
}
export class NotifyInvitationsCommand {
  constructor(public readonly payload: CleanerInvitedPayload) {}
}
// export class NotifyAboutChatCommad{
//     constructor(public readonly payload: )
// }
export class InviteCleanerCommand {
  constructor(public readonly payload: CleanerSelectedPayload) {}
}
