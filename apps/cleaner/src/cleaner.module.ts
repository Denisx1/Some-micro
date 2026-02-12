import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { PresentationModule } from './presentation/presentation.module';
import { KafkaConsumerInterceptor } from '@app/common/system/interceptor/kafka.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/apps/cleaner/.env`,
    }),
    InfrastructureModule,
    PresentationModule,
  ],
})
export class CleanerMainModule {}
