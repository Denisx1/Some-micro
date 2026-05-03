import { AuthOutboxRepository } from "./auth.outbox.repository";
import { AuthRepository } from "./auth.repository";

export const authRepository = [AuthRepository, AuthOutboxRepository];
