import { Module } from '@nestjs/common';
import { ApplicationModule } from '../application/aplication.module';
import { AuthController } from './controller/auth.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [AuthController],
})
export class PresentationModule {}
