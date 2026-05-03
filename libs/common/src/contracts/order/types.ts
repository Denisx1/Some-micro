export interface CleanerSelectedPayload {
  orderId: number;
  cleanerProfileId: number;
  customerId: number;
}
export interface CleanerBoundedToOrderPayload {
  orderId: number;
  cleanerId: number;
  customerId: number;
}
export interface IOrderCreate {
  id: number;
  customerId: number;
  zipCode: number;
  city: string;
  dayOfWeek: number;
  fromTime: string;
  toTime: string;
}
export type MatchOrderTransport = {
  orderId: number;
  customerId: number;
  zipCode: number;
  city: string;
  dayOfWeek: number;
  fromTime: string;
  toTime: string;
};

export interface ISelectCleaner {
  cleanerProfileId: number;
  orderId: number;
  customerId: number;
}
export interface ISelectCleaner {
  cleanerProfileId: number;
  orderId: number;
  customerId: number;
}
