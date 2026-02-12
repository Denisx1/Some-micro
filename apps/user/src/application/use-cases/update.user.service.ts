import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { KafkaTopics, UpdateUser, UserActions } from '@app/common/domain';
import { from } from 'rxjs';
import { ParseError } from '@app/common/system';

@Injectable()
export class UpdateUserService {
  constructor(private readonly userRepository: UserRepository) {}
  public execute(topic: string, message: UpdateUser) {
    const updatePayload = this.getPayloadByTopic(message, topic);
    if (!updatePayload) {
      throw new ParseError();
    }
    return from(this.userRepository.updateUser(message.id, updatePayload));
  }
  private getPayloadByTopic(message: UpdateUser, topic: string) {
    const base = { updatedAt: new Date() };
    switch (topic) {
      case KafkaTopics.USER_LOGINED:
        return { ...base, isActive: true };

      case KafkaTopics.USER_LOGOUT:
        return { ...base, isActive: false };

      case KafkaTopics.USER_LOGOUT_ALL:
        return { ...base, isActive: false, tokenVersion: +1 };

      case KafkaTopics.USER_UPDATE_PASSWORD:
        return {
          ...base,
          isActive: false,
          password: message.password,
          tokenVersion: +1,
        };

      default:
        return null;
    }
  }
}
