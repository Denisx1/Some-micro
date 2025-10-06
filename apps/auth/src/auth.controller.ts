import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  AuthServiceController,
  GenerateActionTokenRequest,
  GenerateActionTokenResponse,
} from '@app/common/types/auth';

import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { SafeCandidate } from '@app/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController implements AuthServiceController {
  constructor(private readonly authService: AuthService) {}

  @GrpcMethod('AuthService', 'generateActionToken')
  generateActionToken(
    payload: GenerateActionTokenRequest,
  ): Observable<GenerateActionTokenResponse> {
    return from(this.authService.generateActionToken(payload));
  }
}
