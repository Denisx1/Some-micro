import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

import { ProjectionFacade } from './projection.facade';
import {
  AssignProjectionService,
  CreateProjectionService,
  DeclineProjectionService,
  InviteProjectionService,
} from './use.case';
import { NotFoundProjectionService } from './use.case/not.found.projection';

@Module({
  imports: [InfrastructureModule],
  providers: [
    CreateProjectionService,
    ProjectionFacade,
    InviteProjectionService,
    AssignProjectionService,
    DeclineProjectionService,
    NotFoundProjectionService,
  ],
  exports: [ProjectionFacade],
})
export class ApplicationModule {}
