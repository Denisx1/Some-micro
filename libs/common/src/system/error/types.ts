export interface IServiceError {
  code: number;
  message: string;
  details?: ErrorDetails;
}
export interface ErrorDetails {
  service?: string;
  domain?: string;
  context?: string;
}
