import { Catch, RpcExceptionFilter } from '@nestjs/common';

import { Observable, throwError } from 'rxjs';

import { RpcException } from '@nestjs/microservices';
import { IServiceError } from '@app/common/domain/types/error';
import { DomainError, InfrastructureError } from '../error/base.error';

@Catch()
export class InternalRpcExceptionsFilter
  implements RpcExceptionFilter<RpcException>
{
  catch(exception: RpcException): Observable<any> {
    const errorData = exception.getError() as IServiceError;
    const rpcError = {
      code: errorData.code,
      message: errorData.message,
    };
    return throwError(() => rpcError);
  }
}
