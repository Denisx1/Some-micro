import { CleanerProfile } from '@app/common/infrastructure/prisma/generated/cleaner';

export type CleanerCandidate = Pick<CleanerProfile, 'id' | 'userId'>;

export interface UpdateProfile {
  id: number;
  firstName?: string;
  lastName?: string;
  zipCode?: number;
  city?: string;
}
export type GetProfile = Pick<CleanerProfile, 'userId'>;
export type CreateCleanerProfile = Pick<CleanerProfile, 'userId'>;
