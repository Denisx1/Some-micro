import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ApplicationModule } from './application/application.module';
import { StartUpModule } from './startup/startup.module';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/apps/role/.env`,
    }),
    InfrastructureModule,
    PresentationModule,
    ApplicationModule,
    StartUpModule,
  ],
})
export class RoleModule {}
