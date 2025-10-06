export const NOTIFICATION_SERVICE = 'NOTIFICATION_SERVICE';

export interface NotificationPayload {
  to: string; // получатель
  template: string; // шаблон уведомления
  locals?: LocalsData; // дополнительные данные
}

export interface LocalsData {
  userName: string;
  url: string;
}
