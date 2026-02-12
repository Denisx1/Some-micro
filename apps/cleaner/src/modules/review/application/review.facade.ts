import { Injectable } from '@nestjs/common';
import { GetReviewsService } from './use.case.ts/get.review';
import { CleanerReview } from '@app/common/domain/types/grpc.services.types/cleaner';

@Injectable()
export class ReviewFacade {
  constructor(private readonly getReviewsService: GetReviewsService) {}

  async getReviews(profileId: number): Promise<CleanerReview[]> {
    return await this.getReviewsService.execute(profileId);
  }
}
