import { Injectable } from '@nestjs/common';
import { ProfileRepository } from '../../infrastructure/repository/profile.repository';
import { UpdateProfile } from '@app/common/domain/types/grpc.services.types/cleaner';
import { from, map, Observable } from 'rxjs';
import { CleanerProfile } from '@app/common/infrastructure/prisma/generated/cleaner';
import { NotFoundError } from '@app/common/system';
@Injectable()
export class UpdateProfileService {
  constructor(private readonly profileRepository: ProfileRepository) {}

  execute(payload: UpdateProfile): Observable<CleanerProfile> {
    return this.updateCleanerProfile(payload);
  }
  private updateCleanerProfile(
    payload: UpdateProfile,
  ): Observable<CleanerProfile> {
    return from(this.profileRepository.updateProfile(payload)).pipe(
      map((profile: CleanerProfile) => {
        if (!profile) throw new NotFoundError('cleaner.profile');
        return profile;
      }),
    );
  }
}
