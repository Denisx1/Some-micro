export const fail = (
  message: string,
  code: number,
  context: string,
): ServiceResponse<ErrorDetail> => ({
  success: false,
  message,
  error: { code, context },
});
export interface ErrorDetail {
  code: number;

  context: string;
}

export const success = <T>(message?: string, data?: T): ServiceResponse<T> => ({
  success: true,
  message,
  data,
});
export interface ServiceResponse<T = void> {
  success: boolean;
  message?: string;
  data?: T;
  error?: ErrorDetail;
}
