import { Catch, ExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { GrpcException } from '@app/common/types/exception';
import { Observable, throwError } from 'rxjs';

@Catch()
export class CommonRpcExceptionFilter implements ExceptionFilter {
  constructor(private readonly serviceName: string) {}
  catch(exception: GrpcException<string>): Observable<GrpcException<string>> {
    if (exception instanceof RpcException) {
      const rpcError: GrpcException<string> =
        exception.getError() as GrpcException<string>;
      const parsedDetails = JSON.parse(rpcError.details);
      const details = [parsedDetails].map((err) => {
        return {
          field: err.field,
          message: err.message,
        };
      });
      return throwError(() => ({
        code: rpcError.code,
        details: JSON.stringify({
          details,
          serviceName: this.serviceName,
          timestamp: new Date().toISOString(),
          context: parsedDetails.context,
          status: 'error',
        }),
      })); // let Nest handle it with RpcException filter
    }
    const details = [JSON.parse(exception.details)].map((err) => {
      return {
        field: err.field,
        message: err.message,
      };
    });
    return throwError(() => ({
      code: exception.code,
      details: JSON.stringify({
        details,
        serviceName: this.serviceName,
        timestamp: new Date().toISOString(),
        status: 'error',
      }),
    }));
  }
}
