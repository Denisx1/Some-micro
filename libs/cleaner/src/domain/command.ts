import { ICreateProfileContract } from "@app/common";
import {
  CleanerSelectedPayload,
  MatchOrderTransport,
} from "@app/common/contracts/order";
import { UpdateProfile } from "./types";
import {
  SaveDayScheduleRequest,
  UpdateProfileRequest,
  UpdateSlotRequest,
} from "@app/common/contracts/cleaner/cleaner.grpc.types";

export class CreateCleanerCommand {
  constructor(public readonly payload: ICreateProfileContract) {}
}
// export class SearchCleanersCommand {
//   constructor(public readonly payload: MatchOrderTransport) {}
// }
export class CreateJobCommand {
  constructor(public readonly payload: CleanerSelectedPayload) {}
}

export class UpdateProfileCommand {
  constructor(public readonly payload: UpdateProfileRequest) {}
}
export class ReservCleanerCommand {
  constructor(public readonly payload: MatchOrderTransport) {}
}
export class CreateScheduleCommand {
  constructor(public readonly payload: SaveDayScheduleRequest) {}
}
export class UpdateScheduleCommand {
  constructor(public readonly payload: UpdateSlotRequest) {}
}
