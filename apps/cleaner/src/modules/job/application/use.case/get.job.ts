import { Injectable } from '@nestjs/common';
import { CleanerJobRepository } from '../../repository/job.repository';
import { GetJob } from '@app/common/domain/types/grpc.services.types/cleaner';
import { from, Observable } from 'rxjs';
import {
  CleanerJob,
  JobStatus,
} from '@app/common/infrastructure/prisma/generated/cleaner';

@Injectable()
export class GetJobsService {
  constructor(private readonly jobRepo: CleanerJobRepository) {}
  execute(payload: GetJob, status?: JobStatus): Observable<CleanerJob> {
    return this.getJobs(payload.cleanerProfileId, status);
  }
  private getJobs(
    cleanerProfileId: number,
    status?: JobStatus,
  ): Observable<CleanerJob> {
    return from(this.jobRepo.getJobsStream(cleanerProfileId, status));
  }
}
