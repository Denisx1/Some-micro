import { Inject, Injectable } from '@nestjs/common';
import {
  CandidateBuilder,
  CreateUser,
  RoleServiceController,
  UserBuilder,
  VerifyUserResponce,
} from '@app/common';
import { UserRepository } from '../user.repository';
import { PasswordService } from '@app/common';
import { ROLE_SERVICE } from '@app/common';
import { ClientGrpc, ClientKafka, RpcException } from '@nestjs/microservices';
import { status as GrpcStatus } from '@grpc/grpc-js';
import { CandidateDto } from '@app/common';
import { RedisService } from 'libs/redis/src/redis.resvice';

@Injectable()
export class CandidateUserService {
  private roleService: RoleServiceController;
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordService: PasswordService,
    private readonly redisService: RedisService,

    @Inject(ROLE_SERVICE)
    private readonly client: ClientGrpc,
    @Inject('KAFKA_PRODUCER')
    private readonly kafkaProducer: ClientKafka,
  ) {}

  async onModuleInit() {
    this.roleService =
      this.client.getService<RoleServiceController>('RoleService');

    await this.kafkaProducer.connect();
  }

  async verifyUser(newUser: CreateUser): Promise<VerifyUserResponce> {
    await this.getOutOfRedis(newUser);
    await this.checkExistUser(newUser);

    const safeUser = await this.hashPassword(newUser);
    await this.setIntoRedis(safeUser);

    const safeCandidate = new CandidateBuilder(newUser).buildSafeCandidate();
    this.kafkaProducer.emit('user.candidate.created', safeCandidate);

    return {
      success: true,
      nextStep: 'verifyEmail',
      message: 'Check your email to confirm registration',
    };
    // const role = await firstValueFrom(this.roleService.getDefaultRole({}));
    // const hashedPassword = await this.passwordService.hashPassword(
    //   newUser.passwordHash,
    // );
    // const userToCreate = new UserBuilder()
    //   .setDefaultRole(role.id)
    //   .setHashedPassword(hashedPassword)
    //   .buildCreateUser();

    // const createdUser = await this.userRepository.createUser(userToCreate);

    // return new UserBuilder(createdUser).buildSafeUser();
  }
  private async checkExistUser(candidate: CreateUser): Promise<void> {
    const existUser = await this.userRepository.findFirstUser(
      candidate.email,
      candidate.userName,
    );
    if (!existUser) return;

    const conflictField: string =
      candidate.email === existUser.email
        ? existUser.email
        : existUser.userName;

    const conflictValue = existUser[conflictField];

    throw new RpcException({
      code: GrpcStatus.ALREADY_EXISTS,
      details: {
        field: conflictField,
        message: `User with ${conflictValue} already exists`,
        context: 'CandidateUserService.checkExistUser',
      },
    });
  }
  private async hashPassword(candidate: CandidateDto): Promise<CandidateDto> {
    const hashedPassword: string = await this.passwordService.hashPassword(
      candidate.password,
    );
    return { ...candidate, password: hashedPassword };
  }
  private async setIntoRedis(candidate: CandidateDto): Promise<void> {
    await this.redisService.set<CandidateDto>(
      `user:candidate:${candidate.userName}`,
      candidate,
      3600,
    );
  }
  private async getOutOfRedis(candidate: CandidateDto): Promise<CandidateDto> {
    const candidateFromRedis = await this.redisService.get<CandidateDto>(
      `user:candidate:${candidate.userName}`,
    );
    if (candidateFromRedis) {
      throw new RpcException({
        code: GrpcStatus.NOT_FOUND,
        details: JSON.stringify({
          field: 'User',
          message: 'User already exists',
          context: 'CandidateUserService.getOutOfRedis',
        }),
      });
    }
    return candidateFromRedis;
  }
}
