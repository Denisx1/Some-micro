import { IsNotEmpty, IsObject, IsOptional, IsString } from "class-validator";

export class KafkaDto<T = any> {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsOptional()
  subType: string;

  @IsObject()
  payload: T;
}
