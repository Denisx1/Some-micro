import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { RecordMetadata } from 'kafkajs';
import { Observable } from 'rxjs';

@Injectable()
export class KafkaService implements OnModuleInit {
  constructor(
    @Inject('KAFKA_CLIENT') private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    await this.kafkaClient.connect();
  }

  emit2<T>(topic: string, key: number, value: T): Observable<RecordMetadata[]> {
    return this.kafkaClient.emit(topic, {
      key: key.toString(),
      value: JSON.stringify(value),
      headers: {
        'x-outbox-id': String(key),
        'x-timestamp': Date.now().toString(),
      },
    });
  }

  emit<T>(topic: string, value: T): Observable<any> {
    // Мы просто возвращаем поток. Мы не знаем, будут его ждать или нет.
    return this.kafkaClient.emit(topic, { value });
  }

  subscribeToResponseOf(topic: string) {
    this.client.subscribeToResponseOf(topic);
  }

  async send(topic: string, key: string, value: any) {
    return this.kafkaClient.emit(topic, { key, value });
  }

  get client() {
    return this.kafkaClient;
  }
}
