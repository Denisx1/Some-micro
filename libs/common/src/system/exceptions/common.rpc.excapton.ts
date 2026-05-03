import { Catch, RpcExceptionFilter } from "@nestjs/common";

import { Observable, throwError } from "rxjs";

import { RpcException } from "@nestjs/microservices";

import { DomainError, InfrastructureError } from "../error/base.error";
import { IServiceError } from "../error/types";

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
