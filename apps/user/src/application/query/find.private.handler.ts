import { FindPrivateUserQuery } from "@app/user/domain/query";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import { NotFoundError } from "@app/common";
import { UserRoleRepository } from "../../infrastructure/repositories/user.role.repository";
import { UserBuilder } from "@app/user/application/mappers/user.mapper";
import { IPrivateUser } from "@app/user/domain/other.types";

@QueryHandler(FindPrivateUserQuery)
export class FindPrivateUserHandler
  implements IQueryHandler<FindPrivateUserQuery>
{
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userRoleRepository: UserRoleRepository
  ) {}
  async execute(query: FindPrivateUserQuery): Promise<IPrivateUser> {
    const user = await this.userRepository.findByCriteria(query.payload);
    if (!user) throw new NotFoundError("User");
    const role = await this.userRoleRepository.getRoleById(user.roleId);
    return new UserBuilder(user).BuildForPrivate(role.name);
  }
}
