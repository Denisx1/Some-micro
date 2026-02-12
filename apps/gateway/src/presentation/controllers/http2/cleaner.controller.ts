import { ActionPayload, RoleName } from '@app/common/domain';
import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Roles } from 'apps/gateway/src/application/decorators';
import { RegistrationDTO } from '../../dto/registration.dtos/registration.dto';
import { CreateScheduleDTO, UpdateProfileDTO } from '../../dto/cleaner.dtos';
import { AccessGuard } from 'apps/gateway/src/application/guards';
import { ICustomRequest } from '@app/common/domain/types/gateway';
import { UpdateSlotDto } from '../../dto/cleaner.dtos/update.slot.dto';
import { Observable } from 'rxjs';
import { TransformInterceptor } from 'apps/gateway/src/application/interfceptors/tansform.interceptor';
import { ResponseMessage } from 'apps/gateway/src/application/decorators/response.decorator';

import {
  CleanerJob,
  CleanerProfile,
  CleanerScheduleDay,
  CleanerScheduleSlot,
} from '@app/common/infrastructure/prisma/generated/cleaner';
import {
  JobsArray,
  ScheduleList,
} from '@app/common/domain/types/grpc.services.types/cleaner';
import { GrpcClientsService } from '@app/common/infrastructure';

@Controller('cleaner')
@UseInterceptors(TransformInterceptor)
export class CleanerController {
  constructor(private readonly grpcClientsService: GrpcClientsService) {}

  // -----------------------
  // REGISTRATION
  // -----------------------
  @Post('creation/init')
  @ResponseMessage(
    'Registration initiated. Please check your email for confirmation',
  )
  initRegistration(@Body() dto: RegistrationDTO): Observable<void> {
    return this.grpcClientsService.registration.initRegistration({
      ...dto,
      role: RoleName.CLEANER,
    });
  }

  @Post('creation/confirm')
  @ResponseMessage('Registration successfully confirmed')
  confirmRegistration(@Body() payload: ActionPayload): Observable<void> {
    return this.grpcClientsService.registration.confirmRegistration(payload);
  }

  // -----------------------
  // PROFILE
  // -----------------------
  @UseGuards(AccessGuard)
  @Get('profile')
  getProfile(@Req() req: ICustomRequest): Observable<CleanerProfile> {
    return this.grpcClientsService.cleaner.getProfile({
      userId: req.authedUser.userId,
    });
  }

  @UseGuards(AccessGuard)
  @Patch('profile')
  updateProfile(
    @Req() req: ICustomRequest,
    @Body() dto: UpdateProfileDTO,
  ): Observable<CleanerProfile> {
    return this.grpcClientsService.cleaner.updateCleanerProfile({
      ...dto,
      id: req.authedUser.profileId,
    });
  }

  // -----------------------
  // SCHEDULE
  // -----------------------
  @UseGuards(AccessGuard)
  @Get('schedule')
  getSchedule(@Req() req: ICustomRequest): Observable<ScheduleList> {
    return this.grpcClientsService.cleaner.getSchedule({
      cleanerProfileId: req.authedUser.profileId,
    });
  }

  @UseGuards(AccessGuard)
  @Post('schedule')
  createSchedule(
    @Req() req: ICustomRequest,
    @Body() dto: CreateScheduleDTO,
  ): Observable<CleanerScheduleDay> {
    return this.grpcClientsService.cleaner.saveDaySchedule({
      cleanerProfileId: req.authedUser.profileId,
      ...dto,
    });
  }

  @UseGuards(AccessGuard)
  @Patch('schedule/slot')
  updateSlot(@Body() dto: UpdateSlotDto): Observable<CleanerScheduleSlot> {
    return this.grpcClientsService.cleaner.updateSlot(dto);
  }

  // -----------------------
  // JOBS
  // -----------------------
  @UseGuards(AccessGuard)
  @Roles(RoleName.CLEANER)
  @Get('jobs')
  getJobs(@Req() req: ICustomRequest): Observable<JobsArray> {
    return this.grpcClientsService.cleaner.getJobs({
      cleanerProfileId: req.authedUser.profileId,
    });
  }

  @UseGuards(AccessGuard)
  @Post('jobs/accept')
  acceptJob(
    @Req() req: ICustomRequest,
    @Body() dto: { jobId: number },
  ): Observable<CleanerJob> {
    return this.grpcClientsService.cleaner.acceptJob({
      clanerProfileId: req.authedUser.profileId,
      ...dto,
    });
  }

  @UseGuards(AccessGuard)
  @Post('jobs/decline')
  @ResponseMessage('Job declined successfully')
  declineJob(
    @Req() req: ICustomRequest,
    @Body() dto: { jobId: number },
  ): Observable<void> {
    return this.grpcClientsService.cleaner.declineJob({
      clanerProfileId: req.authedUser.profileId,
      ...dto,
    });
  }
}
