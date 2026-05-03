import { NestFactory } from "@nestjs/core";
import { UserModule } from "./user.module";
import { ConfigService } from "@nestjs/config";

import { KafkaConfig } from "@app/common/infrastructure/kafka/kafka.factory";
import { GrpcConfig } from "@app/common/infrastructure/grpc/grpc.config";
import { MicroserviceOptions } from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  const config = app.get(ConfigService);

  app.connectMicroservice(GrpcConfig.getServiceOptions(config));
  app.connectMicroservice(KafkaConfig.getConsumerConfig(config));

  app.enableShutdownHooks();
  await app.startAllMicroservices();
  await app.init();
  console.log("🚀 UserService started successfuly");
}

bootstrap();
