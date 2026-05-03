import { NestFactory } from "@nestjs/core";
import { NotificationModule } from "./notification.module";
import { KafkaConfig } from "@app/common/infrastructure/kafka/kafka.factory";
import { ConfigService } from "@nestjs/config";
import { GrpcConfig } from "@app/common/infrastructure/grpc/grpc.config";

async function bootstrap() {
  const app = await NestFactory.create(NotificationModule);
  const config = app.get(ConfigService);

  app.connectMicroservice(GrpcConfig.getServiceOptions(config));
  app.connectMicroservice(KafkaConfig.getConsumerConfig(config));
  await app.startAllMicroservices();

  await app.init();

  console.log("Notification service is running");
}
bootstrap();
