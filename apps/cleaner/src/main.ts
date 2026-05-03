import { NestFactory } from "@nestjs/core";
import { CleanerMainModule } from "./cleaner.module";
import { ConfigService } from "@nestjs/config";
import { KafkaConfig } from "@app/common/infrastructure/kafka/kafka.factory";
import { GrpcConfig } from "@app/common/infrastructure/grpc/grpc.config";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(CleanerMainModule);
  const config = app.get(ConfigService);
  app.connectMicroservice(GrpcConfig.getServiceOptions(config));
  app.connectMicroservice(KafkaConfig.getConsumerConfig(config));

  app.enableShutdownHooks();
  await app.startAllMicroservices();
  await app.init();
  console.log(
    `Cleaner service running at ${config.get<string>("CLEANER_SERVICE_URL")}`
  );
}
bootstrap();
