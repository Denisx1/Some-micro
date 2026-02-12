import { Module } from '@nestjs/common';
import { ApplicationModule } from '../application/application.module';
import { RoleController } from './controller/grpc/role.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [RoleController],
  providers: [],
})
export class PresentationModule {}
