import { Global, Module } from '@nestjs/common';
import { createClient } from 'redis';
import { RedisService } from './redis.resvice';

@Global()
@Module({
  providers: [
    RedisService,
    {
      provide: 'REDIS_CLIENT',
      useFactory: async () => {
        const client = createClient({
          url: 'redis://:secretpass@redis_container:6379', // auth + адрес контейнера
        });

        client.on('error', (err) => console.error('Redis error', err));
        await client.connect();

        return client;
      },
    },
  ],
  exports: [RedisService],
})
export class RedisModule {}
