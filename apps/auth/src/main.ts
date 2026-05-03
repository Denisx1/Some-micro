import { NestFactory } from "@nestjs/core";
import { AuthModule } from "./auth.module";
import { ConfigService } from "@nestjs/config";
import { GrpcConfig } from "@app/common/infrastructure/grpc/grpc.config";
import { KafkaConfig } from "@app/common/infrastructure/kafka/kafka.factory";

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const config = app.get(ConfigService);
  app.connectMicroservice(GrpcConfig.getServiceOptions(config));
  app.connectMicroservice(KafkaConfig.getConsumerConfig(config));
  await app.startAllMicroservices();
  await app.init();
  console.log(
    "Auth service is running on port",
    config.get<number>("AUTH_SERVICE_URL")
  );
}
bootstrap();
