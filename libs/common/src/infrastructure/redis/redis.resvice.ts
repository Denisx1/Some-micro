import { Inject, Injectable } from '@nestjs/common';
import { RedisClientType } from 'redis';

@Injectable()
export class RedisService {
  constructor(
    @Inject('REDIS_CLIENT') private readonly redis: RedisClientType,
  ) {}
  async incr(key: string): Promise<number> {
    return await this.redis.incr(key);
  }

  /**
   * Установка времени жизни ключа (TTL).
   * @param seconds время в секундах
   */
  async expire(key: string, seconds: number): Promise<boolean> {
    return await this.redis.expire(key, seconds);
  }

  /**
   * Полезный метод: получить значение счетчика
   */
  async getIncr(key: string): Promise<string | null> {
    return await this.redis.get(key);
  }
  async lPush<T>(key: string, value: T): Promise<number> {
    // Превращаем объект в строку, иначе Redis выдаст ошибку [object Object]
    const stringValue = JSON.stringify(value);
    // Возвращает новую длину списка
    return await this.redis.lPush(key, stringValue);
  }
  async popAll<T>(key: string): Promise<T[]> {
    // 1. Забираем все элементы списка (от первого до последнего)
    const results = await this.redis.lRange(key, 0, -1);

    if (results.length > 0) {
      // 2. Если что-то было — удаляем ключ
      await this.redis.del(key);
    }

    return results.map((item) => JSON.parse(item));
  }

  // Добавим метод для вычитки списка (понадобится при подключении юзера)
  async lRange<T>(key: string, start: number, stop: number): Promise<T[]> {
    const results = await this.redis.lRange(key, start, stop);
    return results.map((item) => JSON.parse(item));
  }

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
  async delAll(keyWord: string) {
    const iterator = this.redis.scanIterator({
      MATCH: keyWord,
      COUNT: 100, // Забираем по 100 ключей за итерацию
    });
    for await (const key of iterator) {
      await this.redis.del(key);
    }
  }
  async mget<T extends any[]>(
    keys: string[],
  ): Promise<{ [K in keyof T]: T[K] | null }> {
    const results = await this.redis.mGet(keys);

    return results.map((item) => {
      if (item === null) return null;

      // Умный парсинг
      if (item.startsWith('{') || item.startsWith('[')) {
        try {
          return JSON.parse(item);
        } catch {
          return item;
        }
      }
      return item;
    }) as { [K in keyof T]: T[K] | null };
    // Мы гарантируем, что типы в массиве соответствуют запрошенным T
  }

  async saveHashObject<T extends Record<string, any>>(
    key: string,
    data: T,
    ttl: number,
  ): Promise<void> {
    const pipeline = this.redis.multi();

    // Преобразуем объект в плоскую структуру для Redis Hash
    for (const [field, value] of Object.entries(data)) {
      const val =
        typeof value === 'object' ? JSON.stringify(value) : String(value);
      pipeline.hSet(key, field, val);
    }

    pipeline.expire(key, ttl);
    await pipeline.exec();
  }

  /**
   * Получает весь объект из Redis Hash
   */
  async getHashObject<T>(key: string): Promise<T | null> {
    const data = await this.redis.hGetAll(key);
    if (!data || Object.keys(data).length === 0) {
      return null;
    }

    const result = {} as any;
    for (const [field, value] of Object.entries(data)) {
      try {
        // Если это JSON (объект кандидата), парсим его
        result[field] = JSON.parse(value);
      } catch {
        // Если простая строка (токен), оставляем как есть
        result[field] = value;
      }
    }
    return result as T;
  }
}

// private getCustomer(message: ChatData): Observable<Customer> {
//   const { cleanerId, customerId, roomId, orderId } = message;

//   // 1. Пробуем отправить в живой стрим
//   const isDelivered = this.streamService.sendToUser(customerId, {
//     type: 'CHAT_CREATED',
//     data: { cleanerId, roomId, orderId }
//   });

//   // 2. Создаем Observable для работы с Redis (выполнится, если не доставлено)
//   const saveToRedis$ = !isDelivered
//     ? from(this.saveEventToRedis(customerId, message))
//     : of(null);

//   // 3. Объединяем: сначала сохраняем в Redis (если надо), потом тянем юзера из БД
//   return saveToRedis$.pipe(
//     switchMap(() => from(this.customerRepository.getCustomer(customerId))),
//     map((customer: Customer) => {
//       if (!customer) throw new NotFoundError('Customer');
//       return customer;
//     })
//   );
// }

// // Вспомогательный метод для записи в Redis
// private async saveEventToRedis(userId: number, data: any): Promise<void> {
//   const key = `mailbox:customer:${userId}`;
//   const payload = JSON.stringify({
//     type: 'CHAT_CREATED',
//     data,
//     timestamp: Date.now()
//   });

//   await this.redisClient.lpush(key, payload);
//   await this.redisClient.expire(key, 86400); // Храним 24 часа
//   console.log(`[Redis] Событие сохранено для оффлайн кастомера: ${userId}`);
// }
