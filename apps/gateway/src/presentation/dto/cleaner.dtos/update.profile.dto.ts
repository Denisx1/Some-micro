import { Transform } from 'class-transformer';
import { Length } from 'class-validator';
export class UpdateProfileDTO {
  
  @Length(3, 15, {
    message: 'Username must not be less than 3 characters',
  })
  @Transform(({ value }) => value?.toLowerCase())
  firstName?: string;
  @Length(3, 15, {
    message: 'Username must not be less than 3 characters',
  })
  @Transform(({ value }) => value?.toLowerCase())
  lastName?: string;
  zipCode?: number;
  city?: string;
}
