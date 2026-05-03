import { ServiceEvent } from "../../cqrs/base.event";
import { IProfileCreatedContract } from "../user";
import {
  CleanerInvitedPayload,
  CleanerNotFoundPayload,
  ICleanerJob,
  ICleanersReservedContract,
} from "./types";

export class CleanerReservedEvent extends ServiceEvent<ICleanersReservedContract> {
  constructor(payload: ICleanersReservedContract) {
    super(payload);
  }
}
export class CleanerNotFoundEvent extends ServiceEvent<CleanerNotFoundPayload> {
  constructor(payload: CleanerNotFoundPayload) {
    super(payload);
  }
}
export class CleanerInvitedEvent extends ServiceEvent<CleanerInvitedPayload> {
  constructor(payload: CleanerInvitedPayload) {
    super(payload);
  }
}
export class CleanerAcceptedEvent extends ServiceEvent<ICleanerJob> {
  constructor(payload: ICleanerJob) {
    super(payload);
  }
}
export class CleanerRejectedEvent extends ServiceEvent<ICleanerJob> {
  constructor(payload: ICleanerJob) {
    super(payload);
  }
}
export class CleanerProfileCreatedEvent extends ServiceEvent<IProfileCreatedContract> {
  constructor(payload: IProfileCreatedContract) {
    super(payload);
  }
}
