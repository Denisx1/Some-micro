import { Injectable } from '@nestjs/common';
import { CreateJobService } from './use.case/create.job';
import {
  CreateJobType,
  GetJob,
  JobsArray,
  UpdateJob,
} from '@app/common/domain/types/grpc.services.types/cleaner';
import { GetJobsService } from './use.case/get.job';
import { AcceptJobService } from './use.case/accept.job';
import { DeclineJobService } from './use.case/decline.job';
import {
  CleanerJob,
  JobStatus,
  Prisma,
} from '@app/common/infrastructure/prisma/generated/cleaner';
import { Observable, tap } from 'rxjs';

@Injectable()
export class JobFacade {
  constructor(
    private readonly createJobService: CreateJobService,
    private readonly getJobService: GetJobsService,
    private readonly acceptJobService: AcceptJobService,
    private readonly declineJobService: DeclineJobService,
  ) {}

  createJob(payload: CreateJobType[]): Observable<void> {
    return this.createJobService.execute(payload);
  }
  getJobs(payload: GetJob, status?: JobStatus): Observable<CleanerJob> {
    return this.getJobService.execute(payload, status);
  }
  acceptJob(payload: UpdateJob): Observable<CleanerJob> {
    return this.acceptJobService.execute(payload);
  }
  declineJob(payload: UpdateJob): Observable<void> {
    return this.declineJobService.execute(payload);
  }
}
