import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  AccessGuard,
  OwnerOrAdminGuard,
} from 'apps/gateway/src/application/guards';
import { GrpcClientsService } from '@app/common/infrastructure';
import { Observable } from 'rxjs';
import { PublicUser } from '@app/common/domain';
import { TransformInterceptor } from 'apps/gateway/src/application/interfceptors/tansform.interceptor';

@Controller('user')
@UseInterceptors(TransformInterceptor)
export class GetawayUserController {
  constructor(private readonly grpcClientsService: GrpcClientsService) {}

  @UseGuards(AccessGuard, OwnerOrAdminGuard)
  @Get(':id')
  getPublicUser(@Param('id', ParseIntPipe) id: number): Observable<PublicUser> {
    return this.grpcClientsService.user.getUserPublic({ id });
  }
}
