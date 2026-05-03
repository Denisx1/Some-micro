import { Observable } from "rxjs";
import { CleanerJob, CleanerProfile } from "../infrastructure/prisma/generated";

export type GetJob = Pick<CleanerJob, "cleanerProfileId">;
export type CreateJobType = Pick<CleanerJob, "orderId" | "cleanerProfileId">;
export type JobTransport = Pick<CleanerJob, "cleanerProfileId" | "orderId">;
export interface JobsArray {
  items: CleanerJob[];
}
export interface CleanerIds {
  ids: number[];
}
export interface UpdateJob {
  clanerProfileId?: number;
  jobId?: number;
}

export type CleanerCandidate = Pick<CleanerProfile, "id" | "userId">;

export interface UpdateProfile {
  id: number;
  firstName?: string;
  lastName?: string;
  zipCode?: number;
  city?: string;
}
export type GetProfile = Partial<Pick<CleanerProfile, "userId" | "id">>;
export type CreateCleanerProfile = Pick<CleanerProfile, "userId">;

export interface CleanerReview {
  id: number;
  cleanerProfileId: number;
  customerId: number;
  rating: number;
  comment?: string;
  createdAt: Date;
}

export type GetRewievs = Pick<CleanerReview, "cleanerProfileId">;

export interface CleanerScheduleDay {
  id?: number;
  cleanerProfileId: number;
  dayOfWeek: number;
  createdAt?: Date;
}

export type GetSchedule = Pick<CleanerScheduleDay, "cleanerProfileId">;
export type CreationSchedule = {
  cleanerProfileId: number;
  dayOfWeek: number; // 0..6
  slots: CreationFullSlot[];
};
export type CreationDay = Omit<CreationSchedule, "slots">;
export type ScheduleList = { schedule: CleanerScheduleDay[] };
export type CleanerFullSchedule = CleanerScheduleDay & {
  slots: CleanerScheduleSlot[];
};

export type GetManyCleaners = Pick<CleanerProfile, "zipCode" | "city">;

export interface CleanerServiceController {
  updateCleanerProfile: (request: UpdateProfile) => Observable<CleanerProfile>;

  saveDaySchedule: (
    request: CreationSchedule
  ) => Observable<CleanerScheduleDay>;

  getProfile: (request: GetProfile) => Observable<CleanerProfile>;

  // getJobs: (request: GetJob) => Observable<JobsArray>;

  // getReviews: (request: GetRewievs) => Observable<CleanerServiceResponse>;

  getSchedule: (request: GetSchedule) => Observable<ScheduleList>;

  acceptJob: (request: UpdateJob) => Observable<void>;

  declineJob: (request: UpdateJob) => Observable<void>;

  updateSlot: (request: UpdateScheduleSlot) => Observable<CleanerScheduleSlot>;
}
export interface CleanerScheduleSlot {
  id?: number;
  scheduleDayId: number;
  startTime: string;
  endTime: string;
  isAvailable?: boolean;
  createdAt?: Date;
}
export type UpdateScheduleSlot = Omit<
  Partial<CleanerScheduleSlot>,
  "createdAt"
>;
export type CreateSlots = {
  dayId: number;
  slots: CreationFullSlot[];
};

export type CreationFullSlot = {
  startTime: string;
  endTime: string;
  isAvailable?: boolean; // optional
};
