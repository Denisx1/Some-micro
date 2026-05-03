import { Controller, UseInterceptors } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { GrpcMethod } from "@nestjs/microservices";
import {
  ActionResponse,
  ConfirmRegistrationRequest,
  ForgotPasswordRequest,
  LoginRequest,
  RefreshTokensRequest,
  ResetPasswordRequest,
  TokenResponse,
} from "@app/common";
import {
  ConfirmRegistrationCommand,
  ForgotPasswordCommand,
  LoginComand,
  LogoutCommand,
  RefreshCommand,
  RessetPasswordCommand,
} from "@app/auth/domain/command";
import { GrpcClientInterceptor } from "@app/common/system/interceptor/common.interceptor";

@Controller()
@UseInterceptors(GrpcClientInterceptor)
export class AuthController {
  constructor(private readonly commandBus: CommandBus) {}

  @GrpcMethod("AuthService", "ConfirmRegistration")
  async confirmRegistration(
    request: ConfirmRegistrationRequest
  ): Promise<ActionResponse> {
    const verifiedCandidate = await this.commandBus.execute(
      new ConfirmRegistrationCommand(request)
    );
    return { success: true, id: verifiedCandidate };
  }
  @GrpcMethod("AuthService", "Login")
  async login(request: LoginRequest): Promise<TokenResponse> {
    return await this.commandBus.execute(new LoginComand(request));
  }

  @GrpcMethod("AuthService", "logout")
  async logout(request: RefreshTokensRequest): Promise<ActionResponse> {
    const logouted = await this.commandBus.execute(new LogoutCommand(request));
    return { success: true, id: logouted };
  }

  @GrpcMethod("AuthService", "RefreshTokens")
  async refresh(request: RefreshTokensRequest): Promise<TokenResponse> {
    return await this.commandBus.execute(new RefreshCommand(request));
  }

  @GrpcMethod("AuthService", "ForgotPassword")
  async forgotPassword(
    request: ForgotPasswordRequest
  ): Promise<ActionResponse> {
    const forgotPassword = await this.commandBus.execute(
      new ForgotPasswordCommand(request)
    );
    return { success: true, id: forgotPassword };
  }
  @GrpcMethod("AuthService", "ResetPassword")
  async resetPassword(request: ResetPasswordRequest): Promise<ActionResponse> {
    const resetPassword = await this.commandBus.execute(
      new RessetPasswordCommand(request)
    );
    return { success: true, id: resetPassword };
  }
  // @GrpcMethod("AuthService", "LogoutAll")
  // logoutAll(request: LogoutData): Observable<void> {
  //   return this.authFacade.logoutAll(request);
  // }
}
