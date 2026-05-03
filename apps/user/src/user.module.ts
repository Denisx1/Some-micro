import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { StartUpModule } from './startup/startup.module';
import { ApplicationModule } from './application/application.module';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/apps/user/.env`,
    }),
    InfrastructureModule,
    PresentationModule,
    ApplicationModule,
    StartUpModule,
  ],
  exports:[ConfigModule]
})
export class UserModule {}
