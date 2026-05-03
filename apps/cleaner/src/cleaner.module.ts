import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { PresentationModule } from './presentation/presentation.module';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/apps/cleaner/.env`,
    }),
    InfrastructureModule,
    PresentationModule,
    ApplicationModule,
  ],
  providers: [],
})
export class CleanerMainModule {}
