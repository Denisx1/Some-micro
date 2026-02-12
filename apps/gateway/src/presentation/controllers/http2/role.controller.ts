import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { RoleName } from '@app/common/domain';
import { CreateRole } from '@app/common/domain';
import { Observable } from 'rxjs';
import { GrpcClientsService } from '@app/common/infrastructure';
import { Roles } from 'apps/gateway/src/application/decorators';
import { AccessGuard } from 'apps/gateway/src/application/guards';
import { Role } from '@app/common/infrastructure/prisma/generated/role';
import { TransformInterceptor } from 'apps/gateway/src/application/interfceptors/tansform.interceptor';

@Controller('role')
@UseInterceptors(TransformInterceptor)
export class GetawayRoleController {
  constructor(private readonly grpcClientsService: GrpcClientsService) {}

  @Post('/create')
  @UseGuards(AccessGuard)
  @Roles(RoleName.ADMIN)
  createRole(@Body() request: CreateRole): Observable<Role> {
    return this.grpcClientsService.role.createRole(request);
  }
}
