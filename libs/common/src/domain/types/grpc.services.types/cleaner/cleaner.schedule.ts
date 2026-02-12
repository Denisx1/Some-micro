import { CleanerScheduleSlot, CreationFullSlot } from '../cleaner';

export interface CleanerScheduleDay {
  id?: number;
  cleanerProfileId: number;
  dayOfWeek: number;
  createdAt?: Date;
}

export type GetSchedule = Pick<CleanerScheduleDay, 'cleanerProfileId'>;
export type CreationSchedule = {
  cleanerProfileId: number;
  dayOfWeek: number; // 0..6
  slots: CreationFullSlot[];
};
export type CreationDay = Omit<CreationSchedule, 'slots'>;
export type ScheduleList = { schedule: CleanerScheduleDay[] };
export type CleanerFullSchedule = CleanerScheduleDay & {
  slots: CleanerScheduleSlot[];
};
