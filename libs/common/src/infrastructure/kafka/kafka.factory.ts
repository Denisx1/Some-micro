import { ConfigService } from '@nestjs/config';
import { ClientOptions, KafkaOptions, Transport } from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';

export class KafkaConfig {
  static getConsumerConfig(
    clientId: string,
    groupId: string,
    config?: ConfigService,
  ): KafkaOptions {
    return {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['kafka:9092'],
          clientId,
        },
        consumer: {
          groupId: groupId,
          heartbeatInterval: 2000,
          sessionTimeout: 30000,
        },
      },
    };
  }
  static getProduserConfig(clientId: string): ClientOptions {
    return {
      transport: Transport.KAFKA,
      options: {
        client: { clientId, brokers: ['kafka:9092'] },
        producer: {
          createPartitioner: Partitioners.DefaultPartitioner,
          transactionalId: `${clientId}-transaction-id`,
        },
        send: {
          acks: 1, // Ждем только лидера
          timeout: 30000,
        },
        producerOnlyMode: true,
      },
    };
  }
}
