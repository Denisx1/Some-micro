import { ServiceEvent } from "@app/common/cqrs/base.event";
import { CleanerChatRoomPayload } from "./types";

export class CreatedChatEvent extends ServiceEvent<CleanerChatRoomPayload> {
  constructor(public readonly payload: CleanerChatRoomPayload) {
    super(payload);
  }
}
