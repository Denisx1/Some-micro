import { Injectable, OnModuleInit } from '@nestjs/common';
import { RoleRepository } from '../infrastructure/repository/repository';
import { PrismaService, RoleClient } from '@app/common/infrastructure';
import { CreateRole, RoleName } from '@app/common/domain';
import { ConfigService } from '@nestjs/config';
import { RoleCacheService } from '../infrastructure/cashe/role.cashe.service';
import {
  concatMap,
  defaultIfEmpty,
  from,
  lastValueFrom,
  mergeMap,
  tap,
} from 'rxjs';

@Injectable()
export class RoleStartup implements OnModuleInit {
  constructor(
    private readonly roleRepository: RoleRepository,
    private readonly configService: ConfigService,
    private readonly roleCasheService: RoleCacheService,
    private readonly prismaService: PrismaService<RoleClient>,
  ) {}

  async onModuleInit(): Promise<void> {
    const init$ = from(this.roleCasheService.dellAllRoles()).pipe(
      // Переходим к массиву ролей
      mergeMap(() => from(this.getDefaultRolesConfig())),

      concatMap((role) => from(this.syncRole(role))),
      mergeMap((createdRole) =>
        this.roleCasheService.setRoleToRedis(createdRole),
      ),
    );
    await lastValueFrom(init$.pipe(defaultIfEmpty(null)));
  }
  private async syncRole(role: CreateRole): Promise<any> {
    // Обязательно return, чтобы результат (role) вышел из метода
    return await this.prismaService.prisma.$transaction(async (tx) => {
      // Если findUniqRole возвращает Observable — превращаем в Promise для Prisma
      const existingRole = await this.roleRepository.getByField(
        { name: role.name },
        tx,
      );

      if (existingRole) return existingRole;

      // То же самое для создания
      return await this.roleRepository.create(role, tx);
    });
  }

  private getDefaultRolesConfig(): CreateRole[] {
    return [
      {
        name: this.configService.get('ADMIN_ROLE_NAME') || RoleName.ADMIN,
        description:
          this.configService.get('ADMIN_DESCRIPTION') || 'Administrator',
        permissions: this.configService.get('ADMIN_PERMISSIONS') || 'ALL',
      },
      {
        name: this.configService.get('CLEANER_ROLE_NAME') || RoleName.CLEANER,
        description: this.configService.get('CLEANER_DESCRIPTION') || 'Staff',
        permissions:
          this.configService.get('CLEANER_PERMISSIONS') || 'VIEW_TASKS',
      },
      {
        name: this.configService.get('CUSTOMER_ROLE_NAME') || RoleName.CUSTOMER,
        description: this.configService.get('CUSTOMER_DESCRIPTION') || 'Client',
        permissions:
          this.configService.get('CUSTOMER_PERMISSIONS') || 'CREATE_ORDER',
      },
    ];
  }
}
