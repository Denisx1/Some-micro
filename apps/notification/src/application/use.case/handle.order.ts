// import { Injectable } from "@nestjs/common";
// import {
//   OrderNotifyPayload,
//   OrderNotifyPayload2,
//   UserRegistrationNotifyPayload,
//   UserRegistrationNotifyPayload2,
// } from "@app/common";
// import { GrpcStrategy } from "../strategy/grpc.strategy";
// import { RegistrationStep } from "@app/common/contracts/user/enum";
// import { StreamService } from "@app/common/system/stream/stream.manager.service";
// import { IGrpcHandler } from "libs/notification/domain/type";
// import {
//   OrderStream,
//   ServiceResponse,
// } from "@app/common/contracts/notification/notification.grpc.types";

// @Injectable()
// export class HandleOrderGrpcNotification
//   implements IGrpcHandler<OrderNotifyPayload>
// {
//   constructor(
//     private readonly grpcStrategy: GrpcStrategy,
//     private readonly streamService: StreamService
//   ) {}
//   async handle(targetId: number, payload: OrderStream) {
//     await this.grpcStrategy.send(targetId, rest);
//   }
// }
