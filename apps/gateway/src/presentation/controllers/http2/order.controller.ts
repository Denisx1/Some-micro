import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateOrderDTO } from '../../dto';
import { AccessGuard } from 'apps/gateway/src/application/guards';
import { ICustomRequest } from '@app/common/domain/types/gateway';
import { Roles } from 'apps/gateway/src/application/decorators';
import { RoleName } from '@app/common/domain';
import { Observable } from 'rxjs';
import { ResponseMessage } from 'apps/gateway/src/application/decorators/response.decorator';
import { TransformInterceptor } from 'apps/gateway/src/application/interfceptors/tansform.interceptor';
import { GrpcClientsService } from '@app/common/infrastructure';

@Controller('order')
@UseInterceptors(TransformInterceptor)
export class OrderGatewayController {
  constructor(private readonly grpcClientsService: GrpcClientsService) {}

  @UseGuards(AccessGuard)
  @Roles(RoleName.CUSTOMER)
  @Post('create')
  @ResponseMessage('Order successfully created')
  createOrder(
    @Req() req: ICustomRequest,
    @Body() payload: CreateOrderDTO,
  ): Observable<void> {
    return this.grpcClientsService.order.createOrder({
      customerId: req.authedUser.profileId,
      ...payload,
    });
  }
}
