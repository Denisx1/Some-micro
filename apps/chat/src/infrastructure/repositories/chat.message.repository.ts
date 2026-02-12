import { ChatClient, PrismaService } from '@app/common/infrastructure';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatMessageRepository {
  constructor(private readonly prismaService: PrismaService<ChatClient>) {}
  
}
