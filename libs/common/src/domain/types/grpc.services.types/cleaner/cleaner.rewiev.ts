export interface CleanerReview {
  id: number;
  cleanerProfileId: number;
  customerId: number;
  rating: number;
  comment?: string;
  createdAt: Date;
}

export type GetRewievs = Pick<CleanerReview, 'cleanerProfileId'>;
