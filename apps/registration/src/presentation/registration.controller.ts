import {
  ActionPayload,
  BaseCandidate,
  RegistrationServiceController,
} from '@app/common/domain';
import { InternalRpcExceptionsFilter } from '@app/common/system';

import { Controller, UseFilters } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { RegistrationFacade } from 'apps/registration/src/application/registration.facade';
import { Observable } from 'rxjs';

@Controller()
@UseFilters(InternalRpcExceptionsFilter)
export class RegistrationController implements RegistrationServiceController {
  constructor(private readonly registrationFacade: RegistrationFacade) {}
  @GrpcMethod('RegistrationService', 'InitRegistration')
  initRegistration(request: BaseCandidate): Observable<void> {
    return this.registrationFacade.initRegistration(request);
  }
  @GrpcMethod('RegistrationService', 'ConfirmRegistration')
  confirmRegistration(request: ActionPayload): Observable<void> {
    return this.registrationFacade.confirmRegistration(request.actionToken);
  }
}
