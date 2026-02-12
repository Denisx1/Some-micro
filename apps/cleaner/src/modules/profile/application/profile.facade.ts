import { Injectable } from '@nestjs/common';
import { CreateProfileService } from './use-case/create.profile';
import {
  CreateCleanerProfile,
  GetProfile,
  ServiceStreamResponce,
  UpdateProfile,
} from '@app/common/domain/types/grpc.services.types/cleaner';
import { GetOneProfileService } from './use-case/get.one.profile';
import { UpdateProfileService } from './use-case/update.profile';
import { MatchOrderData } from '@app/common/domain/types/grpc.services.types/order';
import { GetAvailableCleanersService } from './use-case/get.available.cleaners';
import { Observable } from 'rxjs';
import {
  CleanerJob,
  CleanerProfile,
} from '@app/common/infrastructure/prisma/generated/cleaner';
import { CleaneNotificationService } from './use-case/notification.service';

@Injectable()
export class ProfileFacade {
  constructor(
    private readonly createProfileService: CreateProfileService,
    private readonly getOneProfileService: GetOneProfileService,
    private readonly updateProfileService: UpdateProfileService,
    private readonly getAvailableCleanersService: GetAvailableCleanersService,
    private readonly cleaneNotificationService: CleaneNotificationService,
  ) {}
  createProfile(message: CreateCleanerProfile): Observable<void> {
    return this.createProfileService.execute(message);
  }
  getOneProfile(payload: GetProfile): Observable<CleanerProfile> {
    return this.getOneProfileService.execute(payload);
  }
  updateProfile(payload: UpdateProfile): Observable<CleanerProfile> {
    return this.updateProfileService.execute(payload);
  }
  getStreamData(cleanerId: number): Observable<ServiceStreamResponce> {
    return this.cleaneNotificationService.getCleanerStream(cleanerId);
  }
}
