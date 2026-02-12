import { NestFactory } from '@nestjs/core';
import { GetawayModule } from './getaway.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { readFileSync } from 'fs';
import { ConfigService } from '@nestjs/config';
import { GatewayExceptionFilter } from '@app/common/system/exceptions/gateway.excaption';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(GetawayModule);
  const configService = appContext.get(ConfigService);

  const fastifyAdapter = new FastifyAdapter({
    http2: true,
    https: {
      key: readFileSync(`${process.cwd()}/apps/gateway/cert/server.key`),
      cert: readFileSync(`${process.cwd()}/apps/gateway/cert/server.crt`),
      allowHTTP1: true,
    },
  });
  const app = await NestFactory.create<NestFastifyApplication>(
    GetawayModule,
    fastifyAdapter,
  );
  app.useGlobalFilters(new GatewayExceptionFilter());
  const PORT = configService.get<number>('PORT') || 3000;
  await app.listen(PORT, '0.0.0.0');
  console.log(`Gateway running at https://localhost:${PORT}`);
}
bootstrap();
