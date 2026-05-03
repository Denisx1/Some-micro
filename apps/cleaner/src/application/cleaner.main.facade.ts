// import { Injectable } from '@nestjs/common';
// import { CleanerCommand } from '@app/common/domain/types/grpc.services.types/order';
// import { Observable } from 'rxjs';
// import { CommandProfileFacade } from './modules/profile/application/command.profile.facade';
// import { QueryProfileFacade } from './modules/profile/application/query.profile.facade';
// import { JobFacade } from './modules/job/application/job.facade';
// import { Commands } from '@app/common/domain/order/enum';

// @Injectable()
// export class CleanerMainFacade {
//   constructor(
//     private readonly commandProfileFacade: CommandProfileFacade,
//     private readonly queryProfileFacade: QueryProfileFacade,
//     private readonly jobFacade: JobFacade,
//   ) {}
//   dispatch(message: CleanerCommand): Observable<void> {
//     switch (message.type) {
//       case Commands.CleanerCommands.SEARCHING_CLEANERS:
//         return this.queryProfileFacade.getCandidates(message.payload);
//       // case SagaCommands.CREATE_CLEANER:
//       //   return this.commandProfileFacade.createProfile(message.payload);
//       case Commands.CleanerCommands.INVITE_CLEANER:
//         const { customerId, ...job } = message.payload;
//         return this.jobFacade.createJob(job, customerId);
//     }
//   }
// }
