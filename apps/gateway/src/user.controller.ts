import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';

import { firstValueFrom } from 'rxjs';
import {
  User,
  UserServiceClient,
  UserServiceController,
  VerifyUserResponce,
} from '@app/common/types/user';
import { CandidateDto } from '@app/common';

@Controller('user')
export class GetawayUserController implements UserServiceClient {
  public userService: UserServiceController;
  constructor(@Inject('USER_SERVICE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.userService =
      this.client.getService<UserServiceController>('UserService');
  }
  
  @Get('/get/one/:_id')
  async getUser(@Param('_id', ParseIntPipe) id: number): Promise<User> {
    return await firstValueFrom(this.userService.getUser({ id }));
  }
  @Post('/create')
  async verifyUser(@Body() request: CandidateDto): Promise<VerifyUserResponce> {
    return await firstValueFrom(this.userService.verifyUser(request));
  }
}
