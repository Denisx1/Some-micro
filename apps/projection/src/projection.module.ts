import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { PresentationModule } from './presentation/presentation.module';
import { ApplicationModule } from './application/application.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/apps/projection/.env`,
    }),
    InfrastructureModule,
    PresentationModule,
    ApplicationModule,
  ],
  providers: [],
  exports: [],
})
export class ProjectionModule {}
