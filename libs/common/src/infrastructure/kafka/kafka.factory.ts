import { ConfigService } from "@nestjs/config";
import { KafkaOptions, Transport } from "@nestjs/microservices";
export class KafkaConfig {
  static getConsumerConfig(config: ConfigService): KafkaOptions {
    const brockers = config.get<string>("KAFKA_BROKER_URL");
    const clientId = config.get<string>("SERVICE_NAME");
    const groupId = config.get<string>("KAFKA_GROUP");
    console.log(brockers, clientId, groupId)
    return {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: [brockers],
          clientId,
        },
        consumer: {
          groupId,
          heartbeatInterval: 2000,
          sessionTimeout: 30000,
        },
      },
    };
  }
}

// import { DynamicModule, Module } from "@nestjs/common";
// import { ClientsModule, Transport } from "@nestjs/microservices";

// import { KafkaConfig } from "./kafka.factory";
// import { KafkaService } from "./kafka.service";

// @Module({})
// export class KafkaModule {
//   static register(clientId: string): DynamicModule {
//     return {
//       module: KafkaModule,
//       imports: [
//         ClientsModule.registerAsync([
//           {
//             name: "KAFKA_CLIENT",
//             useFactory: () => KafkaConfig.getProduserConfig(clientId),
//           },
//         ]),
//       ],
//       providers: [KafkaService],
//       exports: [KafkaService],
//     };
//   }
// }

// import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
// import { ClientKafka } from '@nestjs/microservices';
// import { RecordMetadata } from 'kafkajs';
// import { Observable } from 'rxjs';

// @Injectable()
// export class KafkaService implements OnModuleInit {
//   constructor(
//     @Inject('KAFKA_CLIENT') private readonly kafkaClient: ClientKafka,
//   ) {}

//   async onModuleInit() {
//     await this.kafkaClient.connect();
//   }

//   emit2<T>(topic: string, key: number, value: T): Observable<RecordMetadata[]> {
//     return this.kafkaClient.emit(topic, {
//       key: key.toString(),
//       value: JSON.stringify(value),
//       headers: {
//         'x-outbox-id': String(key),
//         'x-timestamp': Date.now().toString(),
//       },
//     });
//   }

//   emit<T>(topic: string, value: T): Observable<any> {
//     // Мы просто возвращаем поток. Мы не знаем, будут его ждать или нет.
//     return this.kafkaClient.emit(topic, { value });
//   }

//   subscribeToResponseOf(topic: string) {
//     this.client.subscribeToResponseOf(topic);
//   }

//   async send(topic: string, key: string, value: any) {
//     return this.kafkaClient.emit(topic, { key, value });
//   }

//   get client() {
//     return this.kafkaClient;
//   }
// }
