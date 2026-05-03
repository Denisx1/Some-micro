import { GetJobsQuery } from "./get.jobs.handler";
import { GetProfileHandler } from "./get.profile.handler";
import { GetScheduleHandler } from "./get.schedule.handler";

export const cleanerQuery = [
  GetProfileHandler,
  GetJobsQuery,
  GetScheduleHandler,
];
