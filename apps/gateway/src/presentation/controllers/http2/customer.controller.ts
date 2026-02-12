import { ActionPayload, RoleName } from '@app/common/domain';

import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';

import { RegistrationDTO } from '../../dto/registration.dtos/registration.dto';
import { Observable } from 'rxjs';
import { ResponseMessage } from 'apps/gateway/src/application/decorators/response.decorator';
import { TransformInterceptor } from 'apps/gateway/src/application/interfceptors/tansform.interceptor';
import { GrpcClientsService } from '@app/common/infrastructure';

@Controller('customer')
@UseInterceptors(TransformInterceptor)
export class CustomerController {
  constructor(private readonly grpcClientsService: GrpcClientsService) {}

  @Post('creation/init')
  @ResponseMessage(
    'Registration initiated. Please check your email for confirmation',
  )
  initRegCustomer(@Body() dto: RegistrationDTO): Observable<void> {
    return this.grpcClientsService.registration.initRegistration({
      ...dto,
      role: RoleName.CUSTOMER,
    });
  }

  @Post('creation/confirm')
  @ResponseMessage('Registration successfully confirmed')
  confirmRegCustomer(@Body() data: ActionPayload): Observable<void> {
    return this.grpcClientsService.registration.confirmRegistration(data);
  }
}
