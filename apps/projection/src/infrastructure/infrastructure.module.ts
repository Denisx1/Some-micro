import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  OrderProjection,
  OrderProjectionSchema,
} from './schema/order.projection.schema';
import { OrderProjectionRepository } from './repository/projection.repository';
@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'), // Берем из твоего .env
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      { name: OrderProjection.name, schema: OrderProjectionSchema },
    ]),
  ],
  providers: [OrderProjectionRepository],
  exports: [OrderProjectionRepository],
})
export class InfrastructureModule {}
