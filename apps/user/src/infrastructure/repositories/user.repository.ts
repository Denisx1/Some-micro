import { Injectable } from "@nestjs/common";
import { DatabaseError } from "@app/common/system";
import { UserPrismaService } from "libs/user/src/infrastructure/prisma/prisma.user.service";
import { Prisma, User } from "libs/user/src/infrastructure/prisma/generated";
import { ICreateUser, IGetUser } from "@app/user/domain/other.types";

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: UserPrismaService) {}

  async findByCriteria(request: IGetUser): Promise<User | null> {
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
      console.log(error);
      throw new DatabaseError("UserRepository.createEvent");
    }
  }

  async updateUser(
    id: number,
    newUser: Prisma.UserUpdateInput,
    tx?: Prisma.TransactionClient
  ): Promise<User | null> {
    try {
      const client = tx ? tx.user : this.prismaService.prisma.user;
      console.log(newUser);
      return (
        (await client.update({
          where: { id },
          data: newUser,
        })) ?? null
      );
    } catch (error) {
      console.log(error);
      throw new DatabaseError("UserRepository.updateUser");
    }
  }

  async createUser(
    createUser: ICreateUser,
    tx?: Prisma.TransactionClient
  ): Promise<User> {
    try {
      const client = tx ?? this.prismaService.prisma;
      const newUser = await client.user.create({
        data: createUser,
      });

      return newUser;
    } catch (error) {
      throw new DatabaseError("UserRepository.updateUser");
    }
  }
}
