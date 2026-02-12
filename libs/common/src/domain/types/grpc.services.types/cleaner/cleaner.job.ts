import { CleanerJob } from '@app/common/infrastructure/prisma/generated/cleaner';
export type GetJob = Pick<CleanerJob, 'cleanerProfileId'>;
export type CreateJobType = Pick<CleanerJob, 'orderId' | 'cleanerProfileId'>;
export type JobTransport = Pick<CleanerJob, 'cleanerProfileId' | 'orderId'>;
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
