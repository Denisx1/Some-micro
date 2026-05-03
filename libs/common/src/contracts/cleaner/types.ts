export interface ICleanerJob {
  id: number;
  cleanerProfileId: number;
  orderId: number;
  status: string;
  paymentStatus: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}
export interface ICleanerProfile {
  id: number;
  userId: number;
  firstName: string;
  lastName: string;
  rating: number;
  city: string;
  zipCode: number;
  experianceYears: number;
  busy: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export interface ICleanersReservedContract {
  orderId: number;
  candidates: ICleanerProfile[];
  customerId: number;
}
export interface CleanerNotFoundPayload {
  orderId: number;
}

export interface CleanerInvitedPayload extends ICleanerJob {
  customerId: number;
}
