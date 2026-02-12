import { RedisService } from '@app/common/infrastructure';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [RedisService],
})
export class ApplicationModule {}
