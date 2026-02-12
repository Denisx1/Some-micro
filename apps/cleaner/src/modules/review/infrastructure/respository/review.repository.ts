import { CleanerReview } from '@app/common/domain/types/grpc.services.types/cleaner';
import { CleanerClient, PrismaService } from '@app/common/infrastructure';
import { DatabaseError } from '@app/common/system';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewRepository {
  constructor(private readonly prisma: PrismaService<CleanerClient>) {}
  async getReviews(profileId: number): Promise<CleanerReview[]> {
    try {
      const reviews = await this.prisma.prisma.cleanerReview.findMany({
        where: { cleanerProfileId: profileId },
      });
      return reviews ?? [];
    } catch (error) {
      throw new DatabaseError('rewiev db');
    }
  }
}
