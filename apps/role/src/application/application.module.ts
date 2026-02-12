import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { CreateRoleService } from './use-cases/create.role.service';
import { GetRoleByIdService } from './use-cases/get.by.id.service';
import { RoleFacade } from './role.facade';
import { GetRoleByNameService } from './use-cases/get.role.by.name';

@Module({
  imports: [InfrastructureModule],
  controllers: [],
  providers: [
    CreateRoleService,
    GetRoleByIdService,
    RoleFacade,
    GetRoleByNameService,
  ],
  exports: [RoleFacade],
})
export class ApplicationModule {}
