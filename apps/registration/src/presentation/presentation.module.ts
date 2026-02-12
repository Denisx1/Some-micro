import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller';
import { ApplicationModule } from '../application/application.module';

@Module({
  imports: [ApplicationModule],
  controllers: [RegistrationController],
  providers: [],
  exports: [],
})
export class PresentationModule {}
