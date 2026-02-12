import { RoleName } from '@app/common/domain';
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class OwnerOrAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const authedUser = req.authedUser;

    if (!authedUser) {
      throw new ForbiddenException('User not authenticated');
    }

    const targetUserId = Number(req.params.id);
    const isOwner = authedUser.id === targetUserId;
    const isAdmin = authedUser.roleName === RoleName.ADMIN;

    if (!isOwner && !isAdmin) {
      throw new ForbiddenException(
        'Only owner or admin can access this resource',
      );
    }

    return true;
  }
}
