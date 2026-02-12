import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }
    const req = context.switchToHttp().getRequest();
    const user = req.authedUser;
    if (!user) {
      throw new ForbiddenException('User not found in request');
    }
    if (!requiredRoles.includes(user.roleName)) {
      throw new ForbiddenException(
        `Role "${user.roleName}" does not have access`,
      );
    }
    return true;
  }
}
