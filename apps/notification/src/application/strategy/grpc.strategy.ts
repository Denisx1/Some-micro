import { ServiceResponse } from "@app/common/contracts/notification/notification.grpc.types";
import { StreamService } from "@app/common/system/stream/stream.manager.service";
import { Injectable } from "@nestjs/common";
import { GrpcStrategyPayload } from "libs/notification/domain/type";
@Injectable()
export class GrpcStrategy {
  constructor(private readonly streamService: StreamService) {}
  async send(
    targetId: number[],
    event: ServiceResponse
  ): Promise<{ offlineUserIds: number[] }> {
    console.log(event);
    const offlineUserIds: number[] = [];
    targetId.forEach((userId) => {
      const userStream$ = this.streamService.getStream(userId);
      if (userStream$) {
        userStream$.next(event);
        console.log(`[Notification] Stream delivered to UserID: ${userId}`);
      } else {
        offlineUserIds.push(userId);
        console.log(`[Notification] User ${userId} is offline`);
      }
    });

    return { offlineUserIds };
  }
}
