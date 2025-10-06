import { GrpcException } from '@app/common/types/exception';

import { Catch } from '@nestjs/common';
import { BaseRpcExceptionFilter, RpcException } from '@nestjs/microservices';
import { GrpcExceptionDetails } from '../../../../libs/common/src/types/exception';
import { ROLE_SERVICE } from '@app/common/types/role';
import { Observable, throwError } from 'rxjs';

@Catch(RpcException)
export class RoleExceptionFilter extends BaseRpcExceptionFilter<RpcException> {
  catch(exception: RpcException): Observable<GrpcException<string>> {
    const error: GrpcException<GrpcExceptionDetails> =
      exception.getError() as GrpcException<GrpcExceptionDetails>;
    const localError: GrpcException<string> = {
      code: error.code,
      details: JSON.stringify({
        status: 'error',
        ...error.details,
        serviceName: ROLE_SERVICE,
        timestamp: new Date().toISOString(),
      }),
    };
    return throwError(() => localError);
  }
}
