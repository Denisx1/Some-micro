import { Injectable } from '@nestjs/common';
import { genSalt, hash, compare } from 'bcrypt';
import { status as GrpcStatus } from '@grpc/grpc-js';

@Injectable()
export class HashService {
  constructor() {}
  // hash(newPassword: string): string {
  //   const salt = randomBytes(8).toString('hex');
  //   const key = scryptSync(newPassword, salt, 32).toString('base64');
  //   return `${salt}:${key}`;
  // }
  // compare(passoword: string, hashedPassword: string): boolean {
  //   const [salt, key] = hashedPassword.split(':');
  //   const derived = scryptSync(passoword, salt, 32);
  //   const stored = Buffer.from(key, 'hex');
  //   return stored.length === derived.length && timingSafeEqual(stored, derived);
  // }
  async hash(password: string): Promise<string> {
    const salt = await genSalt(8);
    return await hash(password, salt);
  }
  async compareHash(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await compare(password, hashedPassword);
  }
}
