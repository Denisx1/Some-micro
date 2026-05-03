import {
  CreateScheduleCommand,
  UpdateProfileCommand,
  UpdateScheduleCommand,
} from "@app/cleaner/domain/command";
import {
  GetCleanerQuery,
  GetJobQuery,
  GetScheduleQuery,
} from "@app/cleaner/domain/query";
import { GetJob } from "@app/cleaner/domain/types";
import { CleanerJob } from "@app/cleaner/infrastructure/prisma/generated";
import { ActionResponse } from "@app/common";
import {
  CleanerProfile,
  GetterOthers,
  GetterProfileRequest,
  SaveDayScheduleRequest,
  ScheduleDay,
  UpdateProfileRequest,
  UpdateSlotRequest,
} from "@app/common/contracts/cleaner/cleaner.grpc.types";
import { Controller } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { GrpcMethod } from "@nestjs/microservices";
import { from, map, Observable, switchMap } from "rxjs";
// implements CleanerServiceController
@Controller()
export class CleanerGrpcController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}
  @GrpcMethod("CleanerService", "GetProfile")
  async getProfile(request: GetterProfileRequest): Promise<CleanerProfile> {
    return await this.queryBus.execute(new GetCleanerQuery(request));
  }
  @GrpcMethod("CleanerService", "UpdateProfile")
  async updateProfile(request: UpdateProfileRequest): Promise<ActionResponse> {
    const updatedId = await this.commandBus.execute(
      new UpdateProfileCommand(request)
    );
    return { success: true, id: updatedId };
  }
  @GrpcMethod("CleanerService", "SaveDaySchedule")
  async saveDaySchedule(
    request: SaveDayScheduleRequest
  ): Promise<ActionResponse> {
    const scheduleId = await this.commandBus.execute(
      new CreateScheduleCommand(request)
    );
    return { success: true, id: scheduleId };
  }
  @GrpcMethod("CleanerService", "UpdateSlot")
  async updateSlot(request: UpdateSlotRequest): Promise<ActionResponse> {
    const slotId = await this.commandBus.execute(
      new UpdateScheduleCommand(request)
    );
    return { success: true, id: slotId };
  }
  @GrpcMethod("CleanerService", "GetJobs")
  getJobs(request: GetJob): Observable<CleanerJob> {
    return from(
      this.queryBus.execute<GetJobQuery, Observable<CleanerJob>>(
        new GetJobQuery(request)
      )
    ).pipe(switchMap((internalStream$) => internalStream$));
  }
  @GrpcMethod("CleanerService", "GetSchedule")
  getSchedule(request: GetterOthers): Observable<ScheduleDay> {
    return from(
      this.queryBus.execute<GetScheduleQuery, Observable<ScheduleDay>>(
        new GetScheduleQuery(request)
      )
    ).pipe(switchMap((internalStream$) => internalStream$));
  }
}

//   @GrpcMethod('CleanerService', 'UpdateCleanerProfile')
//   updateCleanerProfile(request: UpdateProfile): Observable<CleanerProfile> {
//     return this.commandProfileFacade.updateProfile(request);
//   }

//   // @GrpcMethod('CleanerService', 'GetReviews')
//   // getReviews(request: GetRewievs): Observable<CleanerServiceResponse> {}

//   @GrpcMethod('CleanerService', 'AcceptJob')
//   acceptJob(request: UpdateJob): Observable<void> {
//     return this.jobFacade.acceptJob(request);
//   }

//   @GrpcMethod('CleanerService', 'DeclineJob')
//   declineJob(request: UpdateJob): Observable<void> {
//     return this.jobFacade.declineJob(request);
//   }

//   @GrpcMethod('CleanerService', 'UpdateSlot')
//   updateSlot(request: UpdateScheduleSlot): Observable<CleanerScheduleSlot> {
//     return this.scheduleFacade.updateSlot(request);
//   }
// }
