import { Injectable } from '@nestjs/common';
import { InitRegistrationService } from './user-cases/init.registration.use-case';
import { BaseCandidate } from '@app/common/domain';

import { ConfirmRegistrationService } from './user-cases/confirm.registration.use-case';
import { Observable } from 'rxjs';

@Injectable()
export class RegistrationFacade {
  constructor(
    private readonly initRegistrationService: InitRegistrationService,
    private readonly confirmRegistrationService: ConfirmRegistrationService,
  ) {}

  initRegistration(request: BaseCandidate): Observable<void> {
    return this.initRegistrationService.execute(request);
  }
  confirmRegistration(actionToken: string) {
    return this.confirmRegistrationService.execute(actionToken);
  }
}
