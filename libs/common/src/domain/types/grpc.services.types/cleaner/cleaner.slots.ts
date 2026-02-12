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
  'createdAt'
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

