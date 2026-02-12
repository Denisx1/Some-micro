import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateSlotDTO {
  @IsString()
  startTime: string;

  @IsString()
  endTime: string;

  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;
}
