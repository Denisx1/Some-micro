import { CleanerJobRepository } from "./cleaner.job.repository";
import { CleanerOutboxRepository } from "./cleaner.outbox.repository";
import { ProfileRepository } from "./cleaner.profile.repository";
import { ReviewRepository } from "./cleaner.rewiev.repository";
import { ScheduleRespoitory } from "./cleaner.schedule.repository";

export const cleaterRepo = [
  CleanerJobRepository,
  CleanerOutboxRepository,
  ProfileRepository,
  ReviewRepository,
  ScheduleRespoitory,
];
