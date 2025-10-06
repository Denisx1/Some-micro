import { Injectable } from '@nestjs/common';
import { genSalt, hash } from 'bcrypt';
@Injectable()
export class PasswordService {
  constructor() {}

  async hashPassword(password: string): Promise<string> {
    const salt: string = await genSalt(10);
    return hash(password, salt);
  }
}
