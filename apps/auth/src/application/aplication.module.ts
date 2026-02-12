import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { AuthFacade } from './auth.facade';
import {
  ForgotPasswordService,
  LoginService,
  LogoutAllService,
  LogoutService,
  RefreshService,
  ResetPasswordService,
} from './use-cases';

@Module({
  imports: [InfrastructureModule],
  controllers: [],
  providers: [
    AuthFacade,
    ForgotPasswordService,
    LoginService,
    LogoutAllService,
    LogoutService,
    RefreshService,
    ResetPasswordService,
  ],
  exports: [AuthFacade],
})
export class ApplicationModule {}
