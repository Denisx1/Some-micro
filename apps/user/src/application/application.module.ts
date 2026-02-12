import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { CheckUserUniqueness } from './use-cases/check-user-uniqueness';
import { CreateUserService } from './use-cases/create.user.user-case';
import { GetUserForAuthService } from './use-cases/get.user.for.auth';
import { GetUserPublicService } from './use-cases/get.user.public';
import { UpdateUserService } from './use-cases/update.user.service';
import { UserFacade } from './user.facade';

@Module({
  imports: [InfrastructureModule],
  controllers: [],
  providers: [
    UserFacade,
    CheckUserUniqueness,
    CreateUserService,
    GetUserForAuthService,
    GetUserPublicService,
    UpdateUserService,
  ],
  exports: [UserFacade],
})
export class ApplicationModule {}
