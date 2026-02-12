import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
  MinLength,
} from 'class-validator';

export class RegistrationDTO {
  @IsEmail({}, { message: 'Email is not valid' })
  @IsNotEmpty({ message: 'Email is required' })
  @Transform(({ value }) => value?.toLowerCase())
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @Length(6, 50, {
    message: 'Password must not be less than 6 characters',
  })
  @Transform(({ value }) => value?.toLowerCase())
  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Password must not be less than 6 characters' })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/, {
    message: 'Password must be with at least one letter and one number',
  })
  password: string;

  @IsNotEmpty({ message: 'Username is required' })
  @Length(3, 15, {
    message: 'Username must not be less than 3 characters',
  })
  userName: string;
}
