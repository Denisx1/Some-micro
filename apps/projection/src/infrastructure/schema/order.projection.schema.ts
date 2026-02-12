import { OrderStatus } from '@app/common/infrastructure/prisma/generated/order';
import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
export type OrderProjectionDocument = HydratedDocument<OrderProjection>;
// Это не отдельная коллекция, а просто описание структуры (Nested Object)
class CleanerInfo {
  @Prop()
  cleanerId: string;

  @Prop()
  firstName: string;

  @Prop()
  rating: number;
}

@Schema({ timestamps: true, collection: 'order_projections' })
export class OrderProjection extends Document {
  @Prop({ unique: true, index: true })
  orderId: number;

  @Prop({ type: String, default: OrderStatus.PENDING })
  status: string;

  // Указываем класс в массиве
  @Prop({ type: [CleanerInfo], default: [] })
  candidates?: CleanerInfo[];

  // Указываем класс как тип объекта
  @Prop({ type: CleanerInfo, default: null })
  finalCleaner?: CleanerInfo | null;
}

export const OrderProjectionSchema =
  SchemaFactory.createForClass(OrderProjection);
