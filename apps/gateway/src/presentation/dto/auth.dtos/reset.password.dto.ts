import { Transform } from 'class-transformer';
import { IsString, Matches, MinLength } from 'class-validator';

export class RessetPasswordDto {
  @IsString()
  actionToken: string;
  @Transform(({ value }) => value?.toLowerCase())
  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Password must not be less than 6 characters' })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/, {
    message: 'Password must be with at least one letter and one number',
  })
  password: string;
}
