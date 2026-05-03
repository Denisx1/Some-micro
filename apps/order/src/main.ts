import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { OrderModule } from "./order.module";
import { GrpcConfig } from "@app/common/infrastructure/grpc/grpc.config";
import { KafkaConfig } from "@app/common/infrastructure/kafka/kafka.factory";
async function bootstrap() {
  // ЧИСТЫЙ МИКРОСЕРВИС — БЕЗ HTTP
  const app = await NestFactory.create(OrderModule);
  const config = app.get(ConfigService);
  app.connectMicroservice(GrpcConfig.getServiceOptions(config));
  app.connectMicroservice(KafkaConfig.getConsumerConfig(config));
  app.enableShutdownHooks();
  await app.startAllMicroservices();
  await app.init();
  console.log("🚀 OrderService запущен (gRPC, без HTTP)");
}

bootstrap();
