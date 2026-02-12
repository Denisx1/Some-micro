import { Injectable } from '@nestjs/common';
import {
  ForgotPasswordData,
  LoginData,
  LogoutData,
  RefreshData,
  SetPasswordType,
  TokenPair,
} from '@app/common/domain';
import {
  ForgotPasswordService,
  LoginService,
  LogoutAllService,
  LogoutService,
  RefreshService,
  ResetPasswordService,
} from './use-cases';
import { Observable } from 'rxjs';

@Injectable()
export class AuthFacade {
  constructor(
    private readonly loginService: LoginService,
    private readonly refreshService: RefreshService,
    private readonly forgotPasswordService: ForgotPasswordService,
    private readonly resetPasswordService: ResetPasswordService,
    private readonly logoutService: LogoutService,
    private readonly logoutAllService: LogoutAllService,
  ) {}

  login(loginData: LoginData): Observable<TokenPair> {
    return this.loginService.execute(loginData);
  }
  refresh(request: RefreshData): Observable<TokenPair> {
    return this.refreshService.execute(request);
  }
  forgotPassword(userData: ForgotPasswordData): Observable<void> {
    return this.forgotPasswordService.execute(userData);
  }
  resetPassword(actionData: SetPasswordType): Observable<void> {
    return this.resetPasswordService.execute(actionData);
  }
  logout(logoutData: LogoutData): Observable<void> {
    return this.logoutService.execute(logoutData);
  }
  logoutAll(logoutData: LogoutData): Observable<void> {
    return this.logoutAllService.execute(logoutData);
  }
}
