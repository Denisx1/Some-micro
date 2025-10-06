import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user.repository';
import { SafeUser } from '@app/common/types/user';
import { status as GrpcStatus } from '@grpc/grpc-js';
import { RpcException } from '@nestjs/microservices';
import { UserBuilder } from '@app/common';

@Injectable()
export class GetUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUserById(id: number): Promise<SafeUser> {
    const user = await this.userRepository.getUserById(id);
    if (!user) {
      throw new RpcException({
        code: GrpcStatus.NOT_FOUND,
        details: {
          message: 'User not found',
          field: 'User',
          context: 'GetUserService',
        },
      });
    }

    return new UserBuilder(user).buildSafeUser();
  }
}
