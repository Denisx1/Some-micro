import { Injectable, OnModuleInit } from '@nestjs/common';
import { UserRepository } from '../infrastructure/repositories/user.repository';
import { ConfigService } from '@nestjs/config';
import { RoleName } from '@app/common/domain';
import { GrpcClientsService, HashService } from '@app/common/infrastructure';
import { UserRoleCashService } from '../infrastructure/cashe/role.cashe';
import {
  defaultIfEmpty,
  first,
  from,
  lastValueFrom,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { NotFoundError } from '@app/common/system';

@Injectable()
export class AdminStartup implements OnModuleInit {
  private readonly adminEmail: string;
  private readonly adminUserName: string;
  private readonly adminPassword: string;
  constructor(
    private readonly userRepo: UserRepository,
    private readonly configService: ConfigService,
    private readonly roleCasheService: UserRoleCashService,
    private readonly hashService: HashService,
    private readonly grpcClientsService: GrpcClientsService,
  ) {
    this.adminEmail = this.configService.get<string>('INITIAL_ADMIN_EMAIL');
    this.adminUserName = this.configService.get<string>(
      'INITIAL_ADMIN_USERNAME',
    );
    this.adminPassword = this.configService.get<string>(
      'INITIAL_ADMIN_PASSWORD',
    );
  }

  async onModuleInit(): Promise<void> {
    if (!this.adminEmail || !this.adminUserName || !this.adminPassword) {
      console.log('[AdminStartup] Skipped: ENV missing');
      return;
    }
    const setup$ = from(this.checkAdminExists(this.adminUserName)).pipe(
      switchMap((existingAdmin) => {
        if (existingAdmin) {
          console.log('[AdminStartup] Admin already exists skip role check.');
          return of(null);
        }
        return from(this.getAdminRoleId()).pipe(
          switchMap((casheRoleId) => {
            if (casheRoleId) return of(casheRoleId);

            return this.grpcClientsService.role
              .getRoleByName({ name: RoleName.ADMIN })
              .pipe(
                tap((role) => {
                  from(this.roleCasheService.setRoleToRedis(role))
                    .pipe(first())
                    .subscribe();
                }),
                map((role) => role.id),
              );
          }),
          switchMap((roleId) => {
            if (!roleId) return of(null); // На всякий случай

            // 1. Сначала хешируем пароль
            return from(this.hashPassword(this.adminPassword)).pipe(
              // 2. Затем создаем запись в БД
              switchMap((hashedPassword) =>
                from(this.createAdmin(roleId, hashedPassword)),
              ),
              tap(() =>
                console.log(
                  '[AdminStartup] Default admin created successfully.',
                ),
              ),
            );
          }),
        );
      }),
    );
    await lastValueFrom(setup$.pipe(defaultIfEmpty(null)));
  }

  private async createAdmin(
    roleId: number,
    hashedPassword: string,
  ): Promise<void> {
    await this.userRepo.createUser({
      userName: this.adminUserName,
      email: this.adminEmail,
      password: hashedPassword,
      roleId,
    });
    return;
  }
  private async hashPassword(password: string): Promise<string> {
    return await this.hashService.hash(password);
  }
  private async getAdminRoleId(): Promise<number> {
    const role = await this.roleCasheService.getRole(RoleName.ADMIN);
    if (!role) throw new NotFoundError(RoleName.ADMIN);
    return role.id;
  }

  private async checkAdminExists(userName: string): Promise<boolean> {
    const admin = await this.userRepo.findByCriteria({ userName });
    if (!admin) return;
    return !!admin;
  }
}
