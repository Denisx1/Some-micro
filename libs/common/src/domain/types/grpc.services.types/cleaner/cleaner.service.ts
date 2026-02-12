import { Observable } from 'rxjs';
import { GetProfile, UpdateProfile } from './cleaner.profile';
import {
  CreationSchedule,
  GetSchedule,
  ScheduleList,
} from './cleaner.schedule';
import { GetJob, JobsArray, UpdateJob } from './cleaner.job';
import { UpdateScheduleSlot } from './cleaner.slots';
import {
  CleanerJob,
  CleanerProfile,
  CleanerScheduleDay,
  CleanerScheduleSlot,
} from '@app/common/infrastructure/prisma/generated/cleaner';
import { ChatData } from '../chat';

export type GetManyCleaners = Pick<CleanerProfile, 'zipCode' | 'city'>;

export interface CleanerServiceController {
  subscribeNotifications: (data: {
    profileId: number;
  }) => Observable<ServiceStreamResponce>;
  updateCleanerProfile: (request: UpdateProfile) => Observable<CleanerProfile>;

  saveDaySchedule: (
    request: CreationSchedule,
  ) => Observable<CleanerScheduleDay>;

  getProfile: (request: GetProfile) => Observable<CleanerProfile>;

  // getJobs: (request: GetJob) => Observable<JobsArray>;

  // getReviews: (request: GetRewievs) => Observable<CleanerServiceResponse>;

  getSchedule: (request: GetSchedule) => Observable<ScheduleList>;

  acceptJob: (request: UpdateJob) => Observable<CleanerJob>;

  declineJob: (request: UpdateJob) => Observable<void>;

  updateSlot: (request: UpdateScheduleSlot) => Observable<CleanerScheduleSlot>;
}
export interface ServiceStreamResponce {
  type: string;
  jobData?: CleanerJob;
  chatData?: ChatData;
  summaryDara?: number;
}
