// import { Injectable } from '@nestjs/common';
// import { ReviewRepository } from '../../infrastructure/respository/review.repository';
// import { CleanerReview } from '@app/common/domain/types/grpc.services.types/cleaner';

// @Injectable()
// export class GetReviewsService {
//   constructor(private readonly reviewRepository: ReviewRepository) {}

//   async execute(profileId: number): Promise<CleanerReview[]> {
//     return await this.getReviews(profileId);
//   }
//   private async getReviews(profileId: number): Promise<CleanerReview[]> {
//     const reviews = await this.reviewRepository.getReviews(profileId);
//     if (reviews.length === 0) return [];
//     return reviews;
//   }
// }
