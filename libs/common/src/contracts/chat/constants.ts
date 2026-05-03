import { ChatEvents } from "./enum";
import { CreatedChatEvent } from "./event";

export const ChatEventMap = {
  [ChatEvents.CHAT_CREATED]: CreatedChatEvent,
};
