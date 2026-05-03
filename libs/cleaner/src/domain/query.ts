import {
  GetterOthers,
  GetterProfileRequest,
} from "@app/common/contracts/cleaner/cleaner.grpc.types";
import { GetJob } from "./types";

export class GetCleanerQuery {
  constructor(public readonly payload: GetterProfileRequest) {}
}
export class GetJobQuery {
  constructor(public readonly payload: GetJob) {}
}
export class GetScheduleQuery {
  constructor(public readonly payload: GetterOthers) {}
}
