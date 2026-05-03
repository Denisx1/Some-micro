export interface CleanerChatRoomPayload {
  roomId: string; // ID комнаты в чат-сервисе
  customerId: number; // Кто платит
  cleanerId: number; // Кто убирает
  orderId: number; // Контекст сделки
}
export interface ICreateRoom {
  orderId: number;
  customerId: number;
  cleanerId: number;
}

// export interface OrderChatConnectionPayload {
//   orderId: number;
//   roomId: string;
//   customer: ICustomerProfile;
//   cleaner: ICleanerProfile;
//   customerUser: IPublicUser;
//   cleanerUser: IPublicUser;
// }
