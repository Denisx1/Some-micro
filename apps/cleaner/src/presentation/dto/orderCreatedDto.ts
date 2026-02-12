import { MatchOrderData } from '@app/common/domain/types/grpc.services.types/order';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class OrderCreatedDto implements MatchOrderData {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsInt()
  zipCode: number;

  @IsInt()
  dayOfWeek: number;

  @IsString()
  fromTime: string;

  @IsString()
  toTime: string;
}
