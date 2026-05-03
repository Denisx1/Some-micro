import { ICreateRoom } from "../../../common/src/contracts/chat/types";

export class CreateChatCommand {
  constructor(public readonly payload: ICreateRoom) {}
}
