import { IsOptional } from 'class-validator';

export class LoginUserDto {
  @IsOptional()
  email?: string;
  @IsOptional()
  userName?: string;
  password: string;
}