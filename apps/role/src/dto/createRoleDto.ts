/* eslint-disable @typescript-eslint/no-unsafe-call */
import { UpdateRole } from '@app/common/types/role';
import { IsEnum, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { RolePermissions } from '../enum/enums';
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

export class UpdateRoleDto implements UpdateRole {
  name: string;
  description: string;
  permissions: RolePermissions;
}
