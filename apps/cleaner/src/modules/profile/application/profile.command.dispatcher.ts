import { Injectable } from '@nestjs/common';
import { CleanerCommand } from '@app/common/domain/types/grpc.services.types/order';
import { GetAvailableCleanersService } from './use-case/get.available.cleaners';
import { Observable } from 'rxjs';
import { SagaCommands } from '@app/common/domain';
import { CreateProfileService } from './use-case/create.profile';

@Injectable()
export class ProfileCommandDispatcherFacade {
  constructor(
    private readonly getAvailableCleanersService: GetAvailableCleanersService,
    private readonly createProfileService: CreateProfileService,
  ) {}
  dispatch(message: CleanerCommand): Observable<void> {
    switch (message.type) {
      case SagaCommands.INVITE_CLEANERS:
        return this.getAvailableCleanersService.execute(message.payload);
      case SagaCommands.CREATE_CLEANER:
        return this.createProfileService.execute(message.payload);
    }
  }
}
