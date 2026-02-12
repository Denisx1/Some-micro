import { RolePermissions } from '@app/common/domain';
import { IsEnum, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  description: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsEnum(RolePermissions, {
    message: `Invalid permission it must be one of ${Object.values(
      RolePermissions,
    ).join(', ')}`,
  })
  permissions: RolePermissions;
}
