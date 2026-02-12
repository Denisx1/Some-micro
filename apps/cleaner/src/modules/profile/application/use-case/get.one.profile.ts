import { GetProfile } from '@app/common/domain/types/grpc.services.types/cleaner';
import { ProfileRepository } from '../../infrastructure/repository/profile.repository';
import { Injectable } from '@nestjs/common';
import { from, map, Observable, tap } from 'rxjs';
import { CleanerProfile } from '@app/common/infrastructure/prisma/generated/cleaner';
import { NotFoundError } from '@app/common/system';

@Injectable()
export class GetOneProfileService {
  constructor(private readonly profileRepo: ProfileRepository) {}
  execute(payload: GetProfile): Observable<CleanerProfile> {
    return this.getOneProfile(payload);
  }

  getOneProfile(payload: GetProfile): Observable<CleanerProfile> {
    return from(this.profileRepo.findOneProfile(payload)).pipe(
      map((profile: CleanerProfile) => {
        if (!profile) throw new NotFoundError('Cleaner.profile');
        return profile;
      }),
    );
  }
}
