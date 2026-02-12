import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { LoginUserDto } from '../../dto/auth.dtos/login.dto';
import { ForgotPasswordData, TokenPair, TokenType } from '@app/common/domain';
import { DeviceName, TokenT } from 'apps/gateway/src/application/decorators';
import { AccessGuard } from 'apps/gateway/src/application/guards';
import { ICustomRequest } from '@app/common/domain/types/gateway';

import { RessetPasswordDto } from '../../dto';
import { catchError, Observable, throwError } from 'rxjs';
import { TransformInterceptor } from 'apps/gateway/src/application/interfceptors/tansform.interceptor';
import { ResponseMessage } from 'apps/gateway/src/application/decorators/response.decorator';
import { GrpcClientsService } from '@app/common/infrastructure';
import { RpcException } from '@nestjs/microservices';

@Controller('auth')
@UseInterceptors(TransformInterceptor)
export class AuthGatewayController {
  constructor(private readonly grpcClientsService: GrpcClientsService) {}

  @Post('login')
  login(
    @Body() payload: LoginUserDto,
    @DeviceName() deviceName: string,
  ): Observable<TokenPair> {
    return this.grpcClientsService.auth
      .login({ ...payload, deviceName })
      .pipe(catchError((err) => throwError(() => err)));
  }

  @UseGuards(AccessGuard)
  @Post('logout')
  @ResponseMessage('You Are Logged Out Successfully')
  logout(
    @Req() req: ICustomRequest,
    @DeviceName() deviceName: string,
  ): Observable<void> {
    return this.grpcClientsService.auth.logout({
      userId: req.authedUser.userId,
      deviceName,
    });
  }

  @Post('refresh')
  @UseGuards(AccessGuard)
  @TokenT(TokenType.REFRESH_TOKEN)
  @ResponseMessage('Tokens Refreshed Successfully')
  refresh(@Req() req: ICustomRequest): Observable<TokenPair> {
    console.log(req.authedUser);
    return this.grpcClientsService.auth.refresh(req.authedUser);
  }

  @Post('forgot-password')
  @ResponseMessage('Recovery instructions have been sent to your email')
  forgotPassword(@Body() payload: ForgotPasswordData): Observable<void> {
    return this.grpcClientsService.auth.forgotPassword(payload);
  }

  @Post('reset-password')
  @ResponseMessage('Password has been successfully reset')
  resetPassword(@Body() payload: RessetPasswordDto): Observable<void> {
    return this.grpcClientsService.auth.resetPassword(payload);
  }
}
