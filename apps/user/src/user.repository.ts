import { Injectable } from '@nestjs/common';
import { CreateUserType, SafeUser, User } from '@app/common';
import { PrismaService } from './services/prisma.service';
import { UserBuilder } from '@app/common';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getUserById(id: number): Promise<User | null> {
    const userFromDb = await this.prismaService.user.findUnique({
      where: { id },
    });
    return userFromDb;
  }

  async findFirstUser(email: string, userName: string): Promise<User | null> {
    const userFromDb = await this.prismaService.user.findFirst({
      where: { OR: [{ email }, { userName }] },
    });
    return userFromDb;
  }

  async createUser(user: CreateUserType): Promise<User> {
    const newUser = await this.prismaService.user.create({ data: user });
    return newUser;
  }
}
