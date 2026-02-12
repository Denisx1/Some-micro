import { Observable } from 'rxjs';
import { Role } from '@app/common/infrastructure/prisma/generated/role';

export interface Empty {}
export interface GetRoleFields {
  id?: number;
  name?: string;
}
export interface IdDetails {
  low: number;
  high: number;
  unsigned: boolean;
}
export type RoleById = Pick<Role, 'id'>;
export type RoleByName = Pick<Role, 'name'>;

export interface CreateRole {
  name: string;
  description: string;
  permissions: string;
}
export type UpdateRole = Partial<Role>;
export interface RoleServiceController {
  getRoleByName: (request: GetRoleFields) => Observable<Role>;
  createRole: (request: CreateRole) => Observable<Role>;
  getRoleById: (request: GetRoleFields) => Observable<Role>;
}
export const ROLE_SERVICE = 'ROLE_SERVICE';
