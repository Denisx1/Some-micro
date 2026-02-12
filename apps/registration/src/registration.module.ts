import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InitRegistrationService } from './application/user-cases/init.registration.use-case';
import { RegistrationFacade } from './application/registration.facade';
import { RegistrationController } from './presentation/registration.controller';
import { ConfirmRegistrationService } from './application/user-cases/confirm.registration.use-case';
import { InfrastructureModule } from './infrastructure/infarstructure.module';
import { ApplicationModule } from './application/application.module';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/apps/registration/.env`,
    }),
    InfrastructureModule,
    ApplicationModule,
    PresentationModule,
  ],
  controllers: [],
  providers: [
    ConfirmRegistrationService,
    RegistrationFacade,
    InitRegistrationService,
  ],
})
export class RegistrationModule {}
