import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infarstructure.module';
import { InitRegistrationService } from './user-cases/init.registration.use-case';
import { ConfirmRegistrationService } from './user-cases/confirm.registration.use-case';
import { RegistrationFacade } from './registration.facade';

@Module({
  imports: [InfrastructureModule],
  controllers: [],
  providers: [
    InitRegistrationService,
    ConfirmRegistrationService,
    RegistrationFacade,
  ],
  exports: [RegistrationFacade],
})
export class ApplicationModule {}
