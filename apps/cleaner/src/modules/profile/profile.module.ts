import { Module } from '@nestjs/common';
import { ProfileRepository } from './infrastructure/repository/profile.repository';
import { ProfileFacade } from './application/profile.facade';
import { CreateProfileService } from './application/use-case/create.profile';
import { GetOneProfileService } from './application/use-case/get.one.profile';
import { UpdateProfileService } from './application/use-case/update.profile';
import { GetAvailableCleanersService } from './application/use-case/get.available.cleaners';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';
import { JobModule } from '../job';
import { ProfileCommandDispatcherFacade } from './application/profile.command.dispatcher';
import { CleaneNotificationService } from './application/use-case/notification.service';

@Module({
  imports: [InfrastructureModule, JobModule],
  controllers: [],
  providers: [
    ProfileRepository,
    ProfileFacade,
    CreateProfileService,
    GetOneProfileService,
    UpdateProfileService,
    GetAvailableCleanersService,
    ProfileCommandDispatcherFacade,
    CleaneNotificationService,
  ],
  exports: [ProfileFacade, ProfileCommandDispatcherFacade],
})
export class ProfileModule {}
