import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class UpdateSlotDto {
  id:number
  scheduleDayId:number
  @IsOptional()
  @Transform(({ value }) => value?.toLowerCase())
  startTime?: string;
  @IsOptional()
  @Transform(({ value }) => value?.toLowerCase())
  endTime?: string;
  @IsOptional()
  isAvailable?: boolean;
}
