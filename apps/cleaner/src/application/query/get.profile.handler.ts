import { GetCleanerQuery } from "@app/cleaner/domain/query";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { ProfileRepository } from "../../infrastructure/repository/cleaner.profile.repository";
import { NotFoundError } from "@app/common";
import { CleanerProfile } from "@app/common/contracts/cleaner/cleaner.grpc.types";

@QueryHandler(GetCleanerQuery)
export class GetProfileHandler implements IQueryHandler<GetCleanerQuery> {
  constructor(private readonly profileRepository: ProfileRepository) {}
  async execute(query: GetCleanerQuery): Promise<CleanerProfile> {
    const cleaner = await this.profileRepository.findOneProfile(query.payload);
    if (!cleaner) throw new NotFoundError("Cleaner");
    return cleaner;
  }
}
