import { Observable } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Empty {}
export interface IdDetails {
  low: number;
  high: number;
  unsigned: boolean;
}
export interface Role {
  id: number;
  name: string;
  description: string;
  permissions: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface CreateRole {
  name: string;
  description: string;
  permissions: string;
}
export type UpdateRole = Partial<Role>;
export interface HealthCheckRequest {
  service: number;
}
export interface HealthCheckResponse {
  status: number;
}
export interface RoleServiceClient {
  getDefaultRole: (request: Empty) => Promise<Role>;
  createRole: (request: CreateRole) => Promise<Role>;
}
export interface RoleServiceController {
  getDefaultRole: (request: Empty) => Observable<Role>;
  createRole: (request: CreateRole) => Observable<Role>;
  health?: (request: HealthCheckRequest) => Observable<HealthCheckResponse>;
}
export const ROLE_SERVICE = 'ROLE_SERVICE';
