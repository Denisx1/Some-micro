import { Observable } from 'rxjs';

export const AUTH_SERVICE = 'AUTH_SERVICE';

export interface GenerateActionTokenRequest {
  userName: string;
  email: string;
  actionType: string;
}
export interface GenerateActionTokenResponse {
  token: string;
}

export interface AuthServiceClient {
  getActionToken: (request: GenerateActionTokenRequest) => Promise<string>;
}
export interface AuthServiceController {
  generateActionToken: (
    request: GenerateActionTokenRequest,
  ) => Observable<GenerateActionTokenResponse>;
}
