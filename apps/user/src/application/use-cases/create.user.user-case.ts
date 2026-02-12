import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import {
  BaseCandidate,
  CreateUserType,
  KafkaTopics,
  RoleName,
  SagaCommands,
  UserBuilder,
} from '@app/common/domain';

import {
  GrpcClientsService,
  PrismaService,
  UserClient,
} from '@app/common/infrastructure';
import { UserOutboxRepository } from '../../infrastructure/repositories/user.outbox.repository';
import { catchError, map, Observable, switchMap, tap, throwError } from 'rxjs';
import { NotFoundError } from '@app/common/system';

@Injectable()
export class CreateUserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userOutboxRepository: UserOutboxRepository,
    private readonly prismaService: PrismaService<UserClient>,
    private readonly grpcClientsService: GrpcClientsService,
  ) {}
  public execute(newUser: BaseCandidate): Observable<void> {
    return this.grpcClientsService.role
      .getRoleByName({ name: newUser.role })
      .pipe(
        tap((role) => console.log(role)),
        catchError((err) => throwError(() => new NotFoundError(err))),
        map(({ id }) => new UserBuilder(newUser).setRole(id).buildCreateUser()),
        switchMap((approvedUser) => {
          return this.createUser(approvedUser, newUser.role);
        }),
      );
  }

  private async createUser(
    createUser: CreateUserType,
    roleName: string,
  ): Promise<void> {
    return await this.prismaService.prisma.$transaction(async (tx) => {
      const newUser = await this.userRepository.createUser(createUser, tx);
      const event =
        roleName === RoleName.CLEANER
          ? {
              aggregateId: newUser.id,
              aggregateType: KafkaTopics.Commands.CLEANER,
              payload: {
                type: SagaCommands.CREATE_CLEANER,
                payload: { userId: newUser.id },
                comment: `usser.created`,
              },
            }
          : {
              aggregateId: newUser.id,
              aggregateType: KafkaTopics.Commands.CUSTOMER,
              payload: {
                type: SagaCommands.CREATE_CUSTOMER,
                payload: { userId: newUser.id },
                comment: `user.created`,
              },
            };
      await this.userOutboxRepository.createEvent(event);
      return;
    });
  }
}
