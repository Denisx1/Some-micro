import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { ScheduleRespoitory } from "../../infrastructure/repository/cleaner.schedule.repository";
import { GetScheduleQuery } from "@app/cleaner";
import { ScheduleDay } from "@app/common/contracts/cleaner/cleaner.grpc.types";
import { NotFoundError } from "@app/common";
import { from, map, Observable } from "rxjs";

@QueryHandler(GetScheduleQuery)
export class GetScheduleHandler implements IQueryHandler<GetScheduleQuery> {
  constructor(private readonly scheduleRespoitory: ScheduleRespoitory) {}
  async execute(query: GetScheduleQuery): Promise<Observable<ScheduleDay>> {
    return from(
      this.scheduleRespoitory.getScheduleStream(query.payload.cleanerProfileId)
    ).pipe(
      map((jobs) => {
        if (!jobs) throw new NotFoundError("Jobs");
        return jobs;
      })
    );
  }
}
