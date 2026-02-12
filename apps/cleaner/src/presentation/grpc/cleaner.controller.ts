import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { filter, finalize, map, merge, Observable, Subject, tap } from 'rxjs';
import {
  CleanerServiceController,
  CreationSchedule,
  GetJob,
  GetProfile,
  GetSchedule,
  JobsArray,
  ScheduleList,
  ServiceStreamResponce,
  UpdateJob,
  UpdateProfile,
  UpdateScheduleSlot,
} from '@app/common/domain/types/grpc.services.types/cleaner';

import { InternalRpcExceptionsFilter } from '@app/common/system';
import { ProfileFacade } from '../../modules/profile/application/profile.facade';
import { ScheduleFacade } from '../../modules/schedule/application/schedule.facade';
import { JobFacade } from '../../modules/job/application/job.facade';
import {
  CleanerJob,
  CleanerProfile,
  CleanerScheduleDay,
  CleanerScheduleSlot,
} from '@app/common/infrastructure/prisma/generated/cleaner';
import { OrderStatus } from '@app/common/infrastructure/prisma/generated/order';
import { StreamService } from '@app/common/system/stream/stream.manager.service';

@Controller()
export class CleanerGrpcController implements CleanerServiceController {
  constructor(
    private readonly profileFacade: ProfileFacade,
    private readonly scheduleFacade: ScheduleFacade,
    private readonly jobFacade: JobFacade,
    private readonly streamService: StreamService,
  ) {}

  @GrpcMethod('CleanerService', 'UpdateCleanerProfile')
  updateCleanerProfile(request: UpdateProfile): Observable<CleanerProfile> {
    return this.profileFacade.updateProfile(request);
  }

  @GrpcMethod('CleanerService', 'SaveDaySchedule')
  saveDaySchedule(request: CreationSchedule): Observable<CleanerScheduleDay> {
    return this.scheduleFacade.createSchedule(request);
  }

  @GrpcMethod('CleanerService', 'GetProfile')
  getProfile(request: GetProfile): Observable<CleanerProfile> {
    return this.profileFacade.getOneProfile(request);
  }

  @GrpcMethod('CleanerService', 'SubscribeNotifications')
  subscribeNotifications(data: {
    profileId: number;
  }): Observable<ServiceStreamResponce> {
    return this.profileFacade.getStreamData(data.profileId);
  }
  // @GrpcMethod('CleanerService', 'GetReviews')
  // getReviews(request: GetRewievs): Observable<CleanerServiceResponse> {}

  @GrpcMethod('CleanerService', 'AcceptJob')
  acceptJob(request: UpdateJob): Observable<CleanerJob> {
    return this.jobFacade.acceptJob(request);
  }

  @GrpcMethod('CleanerService', 'DeclineJob')
  declineJob(request: UpdateJob): Observable<void> {
    return this.jobFacade.declineJob(request);
  }

  @GrpcMethod('CleanerService', 'GetSchedule')
  getSchedule(request: GetSchedule): Observable<ScheduleList> {
    return this.scheduleFacade.getFullSchedule(request);
  }

  @GrpcMethod('CleanerService', 'UpdateSlot')
  updateSlot(request: UpdateScheduleSlot): Observable<CleanerScheduleSlot> {
    return this.scheduleFacade.updateSlot(request);
  }
}
