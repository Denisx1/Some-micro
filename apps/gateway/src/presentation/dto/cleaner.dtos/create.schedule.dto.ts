import { ArrayNotEmpty, IsArray, ValidateNested } from 'class-validator';

import { CreateSlotDTO } from './create.slot.dto';
import { Type } from 'class-transformer';

export class CreateScheduleDTO {
  dayOfWeek: number;
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateSlotDTO)
  slots: CreateSlotDTO[];
}
