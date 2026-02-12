import { Module } from '@nestjs/common';
import { AuthController } from './presentation/controller/auth.controller';
import { ConfigModule } from '@nestjs/config';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ApplicationModule } from './application/aplication.module';
import { PresentationModule } from './presentation/presentstion.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/apps/auth/.env`,
    }),

    ApplicationModule,
    PresentationModule,
    InfrastructureModule,
  ],
  controllers: [AuthController],
  providers: [],
})
export class AuthModule {}
