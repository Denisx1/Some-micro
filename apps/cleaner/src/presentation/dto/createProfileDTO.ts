import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateProfileDto {
  @IsNumber({}, { message: 'userId must be a number' })
  @IsNotEmpty({ message: 'Email is required' })
  userId: number;
}


