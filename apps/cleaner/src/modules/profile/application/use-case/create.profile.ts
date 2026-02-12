import { Injectable } from '@nestjs/common';
import { ProfileRepository } from '../../infrastructure/repository/profile.repository';
import { CreateCleanerProfile } from '@app/common/domain/types/grpc.services.types/cleaner';
import { from, Observable } from 'rxjs';

@Injectable()
export class CreateProfileService {
  constructor(private readonly profileRepository: ProfileRepository) {}

  execute(message: CreateCleanerProfile): Observable<void> {
    return from(this.profileRepository.createProfile(message.userId));
  }
}
