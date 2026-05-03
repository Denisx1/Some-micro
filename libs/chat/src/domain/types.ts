export interface ChatData {
  roomId: string;
  orderId: number;
  cleanerId: number;
  customerId: number;
}
export interface SendMessage {
  roomId: string;
  senderId: number;
  text: string;
}
