import { Module } from '@nestjs/common';
import { CleanerJobRepository } from './repository/job.repository';
import { CreateJobService } from './application/use.case/create.job';
import { JobFacade } from './application/job.facade';
import { GetJobsService } from './application/use.case/get.job';
import { AcceptJobService } from './application/use.case/accept.job';
import { DeclineJobService } from './application/use.case/decline.job';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  controllers: [],
  providers: [
    CleanerJobRepository,
    JobFacade,
    CreateJobService,
    GetJobsService,
    AcceptJobService,
    DeclineJobService,
  ],
  exports: [JobFacade],
})
export class JobModule {}
