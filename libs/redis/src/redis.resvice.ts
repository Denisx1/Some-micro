import { Inject, Injectable } from '@nestjs/common';
import { RedisClientType } from 'redis';

@Injectable()
export class RedisService {
  constructor(
    @Inject('REDIS_CLIENT') private readonly redis: RedisClientType,
  ) {}

  async set<T>(key: string, value: T, ttlSeconds?: number) {
    if (ttlSeconds) {
      await this.redis.set(key, JSON.stringify(value), { EX: ttlSeconds });
    } else {
      await this.redis.set(key, JSON.stringify(value));
    }
  }

  async get<T>(key: string): Promise<T | null> {
    const value = await this.redis.get(key);
    return value ? JSON.parse(value) : null;
  }

  async del(key: string) {
    return this.redis.del(key);
  }
}
