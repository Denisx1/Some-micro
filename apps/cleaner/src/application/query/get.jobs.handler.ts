import { GetJobQuery } from "@app/cleaner/domain/query";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { CleanerJobRepository } from "../../infrastructure/repository/cleaner.job.repository";
import { from, map, Observable, tap } from "rxjs";
import { CleanerJob } from "@app/cleaner/infrastructure/prisma/generated";
import { NotFoundError } from "@app/common";

@QueryHandler(GetJobQuery)
export class GetJobsQuery implements IQueryHandler<GetJobQuery> {
  constructor(private readonly cleanerJobRepository: CleanerJobRepository) {}
  async execute(query: GetJobQuery): Promise<Observable<CleanerJob>> {
    return from(
      this.cleanerJobRepository.getJobsStream(query.payload.cleanerProfileId)
    ).pipe(
      map((jobs) => {
        if (!jobs) throw new NotFoundError("Jobs");
        return jobs;
      })
    );
  }
}
