import { Injectable } from '@nestjs/common';
import { from, Observable, of } from 'rxjs';
import { Customer } from '@app/common/infrastructure/prisma/generated/customer';
import { ChatData } from '@app/common/domain/types/grpc.services.types/chat';
import { RedisService } from '@app/common/infrastructure';
import { StreamService } from '@app/common/system/stream/stream.manager.service';

@Injectable()
export class HandleCustomerChat {
  constructor(
    private readonly redisService: RedisService,
    private readonly streamService: StreamService,
  ) {}
  execute(message: ChatData): Observable<Customer> {
    return this.getCustomer(message);
  }
  private getCustomer(message: ChatData): Observable<Customer> {
    const { cleanerId, customerId, roomId, orderId } = message;
    const redisKey = `mailbox:customer:${customerId}`;
    const isDelivered = this.streamService.sendToUser(customerId, {
      type: 'CHAT_CREATED',
      data: { cleanerId, roomId, orderId, customerId },
    });
    !isDelivered ? from(this.redisService.lPush(redisKey, message)) : of(null);
    return;
  }
}
