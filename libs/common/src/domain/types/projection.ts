import { ProjectionActions } from '../constants';
import { BusPayload } from './outbox.event';

export interface UpdateOrderProjection {
  orderId: number;
  cleanerIds: number[];
  cleanerId: number;
}
export type UpdateProjection = Pick<UpdateOrderProjection, 'orderId'>;
export type InviteProjection = Omit<UpdateOrderProjection, 'cleanerId'>;
export type AssignProjection = Omit<UpdateOrderProjection, 'cleanerIds'>;
export type DeclineProjection = Omit<UpdateOrderProjection, 'cleanerIds'>;
