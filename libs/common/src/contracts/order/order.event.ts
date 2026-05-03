import { ServiceEvent } from "../../cqrs/base.event";
import {
  CleanerBoundedToOrderPayload,
  CleanerSelectedPayload,
  MatchOrderTransport,
} from "./types";

export class CreatedOrderEvent extends ServiceEvent<MatchOrderTransport> {
  constructor(payload: MatchOrderTransport) {
    super(payload);
  }
}
export class CleanerSelectedEvent extends ServiceEvent<CleanerSelectedPayload> {
  constructor(payload: CleanerSelectedPayload) {
    super(payload);
  }
}
export class CleanerBoundedToOrderEvent extends ServiceEvent<CleanerBoundedToOrderPayload> {
  constructor(payload: CleanerBoundedToOrderPayload) {
    super(payload);
  }
}
