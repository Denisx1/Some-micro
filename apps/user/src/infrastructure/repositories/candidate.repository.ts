import { DatabaseError } from "@app/common/system";
import { Candidate, Prisma, UserPrismaService } from "@app/user";
import { ICreateCandidate } from "@app/user/domain/other.types";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CandidateRepository {
  constructor(private readonly prismaService: UserPrismaService) {}
  async createCandidate(
    candidate: ICreateCandidate,
    tx?: Prisma.TransactionClient
  ): Promise<Candidate> {
    try {
      const client = tx.candidate ?? this.prismaService.prisma.candidate;
      return await client.create({ data: candidate });
    } catch (error) {
      throw new DatabaseError("Candidate");
    }
  }
  async updateCandidate(
    candidateId: number,
    data: Prisma.CandidateUpdateInput,
    tx?: Prisma.TransactionClient
  ): Promise<Candidate> {
    try {
      const client = tx.candidate ?? this.prismaService.prisma.candidate;
      return (
        (await client.update({ where: { id: candidateId }, data })) ?? null
      );
    } catch (error) {
      console.log(error);
      throw new DatabaseError("Candidate");
    }
  }
  async deleteCandidate(
    candidateId: number,
    tx?: Prisma.TransactionClient
  ): Promise<void> {
    try {
      const client = tx.candidate ?? this.prismaService.prisma.candidate;
      await client.delete({ where: { id: candidateId } });
    } catch (error) {
      console.log(error);
      throw new DatabaseError("Candidate");
    }
  }
  async getCandidate(userName: string): Promise<Candidate | null> {
    try {
      return (
        (await this.prismaService.prisma.candidate.findFirst({
          where: { userName },
        })) ?? null
      );
    } catch (error) {
      throw new DatabaseError("Candidate");
    }
  }
}
