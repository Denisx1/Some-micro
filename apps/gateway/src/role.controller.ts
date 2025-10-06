import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import {
  RoleServiceClient,
  RoleServiceController,
} from '@app/common/types/role';

import { Role } from '@app/common/types/role';
import { CreateRole } from '@app/common/types/role';
import { firstValueFrom, Observable } from 'rxjs';

@Controller('role')
export class GetawayRoleController implements RoleServiceClient {
  private roleService: RoleServiceController;
  constructor(@Inject('ROLE_SERVICE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.roleService =
      this.client.getService<RoleServiceController>('RoleService');
  }
  @Post('/create')
  async createRole(@Body() request: CreateRole): Promise<Role> {
    const newRole: Role = await firstValueFrom(
      this.roleService.createRole(request),
    );
    return newRole;
  }
  @Get('/default')
  async getDefaultRole(): Promise<Role> {
    const defaultRole: Observable<Role> = this.roleService.getDefaultRole({});
    return await firstValueFrom(defaultRole);
  }
}
