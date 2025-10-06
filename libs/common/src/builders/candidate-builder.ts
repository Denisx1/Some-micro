import { Injectable } from '@nestjs/common';
import { CreateUser, SafeCandidate, SafeUser } from '../types';

@Injectable()
export class CandidateBuilder {
  constructor(private candidate: CreateUser) {}

  public buildSafeCandidate(): SafeCandidate {
    return {
      email: this.candidate.email,
      userName: this.candidate.userName,
    };
  }
}
