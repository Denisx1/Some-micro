import { Injectable } from '@nestjs/common';
import { CreateUserType, GetUserQuery } from '@app/common/domain';
import { PrismaService, UserClient } from '@app/common/infrastructure';
import { DatabaseError } from '@app/common/system';
import { Prisma, User } from '@app/common/infrastructure/prisma/generated/user';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService<UserClient>) {}

  async findByCriteria(request: GetUserQuery): Promise<User | null> {
    try {
      const { email, userName, id } = request;
      return (
        (await this.prismaService.prisma.user.findFirst({
          where: {
            OR: [{ email }, { userName }, { id }],
          },
        })) ?? null
      );
    } catch (error) {
      throw new DatabaseError('UserRepository.createEvent');
    }
  }

  async updateUser(id: number, newUser: Partial<User>): Promise<void> {
    try {
      await this.prismaService.prisma.user.update({
        where: { id },
        data: newUser,
      });
    } catch (error) {
      throw new DatabaseError('UserRepository.updateUser');
    }
  }

  async createUser(
    createUser: CreateUserType,
    tx?: Prisma.TransactionClient,
  ): Promise<User> {
    try {
      const client = tx ?? this.prismaService.prisma;
      const newUser = await client.user.create({
        data: createUser,
      });

      return newUser;
    } catch (error) {
      throw new DatabaseError('UserRepository.updateUser');
    }
  }
}
