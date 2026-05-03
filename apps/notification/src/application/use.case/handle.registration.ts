// import { Injectable } from "@nestjs/common";
// import {
//   UserRegistrationNotifyPayload,
//   UserRegistrationNotifyPayload2,
// } from "@app/common";
// import { GrpcStrategy } from "../strategy/grpc.strategy";
// import { RegistrationStep } from "@app/common/contracts/user/enum";
// import { StreamService } from "@app/common/system/stream/stream.manager.service";
// import { IGrpcHandler } from "libs/notification/domain/type";

// @Injectable()
// export class HandleRegistrationGrpcNotification
//   implements IGrpcHandler<UserRegistrationNotifyPayload>
// {
//   constructor(
//     private readonly grpcStrategy: GrpcStrategy,
//     private readonly streamService: StreamService
//   ) {}
//   async handle(payload: UserRegistrationNotifyPayload) {
//     const { targetId, ...rest } = payload;

//     await this.grpcStrategy.send(
//       targetId,

//       rest
//     );
//     if (
//       rest.step === RegistrationStep.REGISTRATION_SUCCESS ||
//       rest.progress === 100
//     ) {
//       targetId.forEach((id) => {
//         const stream = this.streamService.getStream(id);
//         if (stream) {
//           stream.complete(); // Это "вешает трубку" со стороны сервера
//           console.log(`[Stream] Force closed for user ${id} due to completion`);
//         }
//       });
//     }
//   }
// }
