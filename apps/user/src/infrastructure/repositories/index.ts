import { CandidateRepository } from "./candidate.repository";
import { UserOutboxRepository } from "./user.outbox.repository";
import { UserRepository } from "./user.repository";
import { UserRoleRepository } from "./user.role.repository";

export const userRepositories = [
  CandidateRepository,
  UserOutboxRepository,
  UserRepository,
  UserRoleRepository,
];
