import { Controller, UseFilters, UseInterceptors } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  AuthServiceController,
  ForgotPasswordData,
  LoginData,
  LogoutData,
  RefreshData,
  SetPasswordType,
  TokenPair,
} from '@app/common/domain';
import { Observable } from 'rxjs';
import { AuthFacade } from '../../application/auth.facade';

@Controller()
export class AuthController implements AuthServiceController {
  constructor(private readonly authFacade: AuthFacade) {}

  @GrpcMethod('AuthService', 'Login')
  login(request: LoginData): Observable<TokenPair> {
    return this.authFacade.login(request);
  }
  @GrpcMethod('AuthService', 'Refresh')
  refresh(request: RefreshData): Observable<TokenPair> {
    return this.authFacade.refresh(request);
  }
  @GrpcMethod('AuthService', 'ForgotPassword')
  forgotPassword(request: ForgotPasswordData): Observable<void> {
    return this.authFacade.forgotPassword(request);
  }
  @GrpcMethod('AuthService', 'ResetPassword')
  resetPassword(request: SetPasswordType): Observable<void> {
    return this.authFacade.resetPassword(request);
  }
  @GrpcMethod('AuthService', 'Logout')
  logout(request: LogoutData): Observable<void> {
    return this.authFacade.logout(request);
  }
  @GrpcMethod('AuthService', 'LogoutAll')
  logoutAll(request: LogoutData): Observable<void> {
    return this.authFacade.logoutAll(request);
  }
}
