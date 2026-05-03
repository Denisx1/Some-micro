import { Module } from "@nestjs/common";
import { StreamService } from "@app/common/system/stream/stream.manager.service";
import { RedisModule } from "@app/common/infrastructure/redis/redis.module";
import { NotificationRedis } from "./notification.cashe";
import { CqrsModule } from "@nestjs/cqrs";

@Module({
  imports: [RedisModule, CqrsModule],
  providers: [StreamService, NotificationRedis],
  exports: [StreamService, NotificationRedis, CqrsModule],
})
export class InfrastructureModule {}
