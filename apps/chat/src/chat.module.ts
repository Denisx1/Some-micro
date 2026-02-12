import { Module } from '@nestjs/common';
import { PresentationModule } from './presentation/presentation.module';
import { ApplicationModule } from './application/application.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/apps/chat/.env`,
    }),
    PresentationModule,
    ApplicationModule,
    InfrastructureModule,
  ],
  providers: [],
  exports: [],
})
export class ChatMainModule {}
