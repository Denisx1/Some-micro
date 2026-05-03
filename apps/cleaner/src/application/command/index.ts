import { CreateCleanerHandler } from "./create.cleaner.handler";
import { CreateJobHandler } from "./create.job.handler";
import { CreateScheduleHandler } from "./create.schedule.handler";
import { ReservCleanerHandler } from "./reserv.cleaner.handler";
import { UpdateCleanerProfileHandler } from "./update.profile.handler";
import { UpdatedScheduleHandler } from "./update.schedule.handler";

export const cleanerHandler = [
  CreateCleanerHandler,
  UpdateCleanerProfileHandler,
  CreateScheduleHandler,
  UpdatedScheduleHandler,
  ReservCleanerHandler,
  CreateJobHandler,
];
