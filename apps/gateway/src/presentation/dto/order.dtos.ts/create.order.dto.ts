import { DayOfWeek } from '@app/common/domain';
import { IsEnum, IsInt, Matches, Min } from 'class-validator';

export class CreateOrderDTO {
  @IsInt()
  @Min(1)
  zipCode: number;
  @IsEnum(DayOfWeek, {
    message: `Invalid permission it must be one of ${Object.values(
      DayOfWeek,
    ).join(', ')}`,
  })
  city: string;
  dayOfWeek: number;
  @Matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/, {
    message: 'fromTime must be in HH:MM format (00:00–23:59)',
  })
  fromTime: string;
  @Matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/, {
    message: 'toTime must be in HH:MM format (00:00–23:59)',
  })
  toTime: string;
  clarifications: string;
}
