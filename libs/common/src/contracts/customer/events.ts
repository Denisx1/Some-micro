import { ServiceEvent } from "@app/common/cqrs/base.event";
import { IProfileCreatedContract } from "../user";

export class CostomerCreatedEvent
  implements ServiceEvent<IProfileCreatedContract>
{
  constructor(public readonly payload: IProfileCreatedContract) {}
}
