import { NestFactory } from "@nestjs/core";
import { CustomerModule } from "./customer.module";
import { ConfigService } from "@nestjs/config";
import { GrpcConfig } from "@app/common/infrastructure/grpc/grpc.config";
import { KafkaConfig } from "@app/common/infrastructure/kafka/kafka.factory";

async function bootstrap() {
  const app = await NestFactory.create(CustomerModule);
  const config = app.get(ConfigService);

  app.connectMicroservice(GrpcConfig.getServiceOptions(config));
  app.connectMicroservice(KafkaConfig.getConsumerConfig(config));
  app.enableShutdownHooks();

  await app.startAllMicroservices();
  await app.init();
  console.log(
    `${config
      .get<string>("SERVICE_NAME")
      .toLowerCase()}-service started: ${config.get<string>(
      "CUSTOMER_SERVICE_URL"
    )}`
  );
}
bootstrap();


