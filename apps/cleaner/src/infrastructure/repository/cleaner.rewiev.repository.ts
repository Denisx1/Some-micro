import { CleanerReview } from "@app/cleaner/domain/types";
import { CleanerPrismaService } from "@app/cleaner/infrastructure/prisma/prisma.cleaner.service";
import { DatabaseError } from "@app/common/system";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ReviewRepository {
  constructor(private readonly prisma: CleanerPrismaService) {}
  async getReviews(profileId: number): Promise<CleanerReview[]> {
    try {
      const reviews = await this.prisma.prisma.cleanerReview.findMany({
        where: { cleanerProfileId: profileId },
      });
      return reviews ?? [];
    } catch (error) {
      throw new DatabaseError("rewiev db");
    }
  }
}
