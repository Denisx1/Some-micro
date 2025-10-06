export interface GrpcException<T> {
  code: number;
  details: T;
}

export interface GrpcExceptionDetails {
  field?: string;
  context?: string;
  status?: 'error';
  message?: string;
  serviceName?: string;
  timestamp?: string;
  [key: string]: any;
}
