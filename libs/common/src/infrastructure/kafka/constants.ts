export namespace KafkaTopics {
  // Топики для КОМАНД (приказы от Саги к сервисам)
  export enum Commands {
    ORDER = "order.command",
    CLEANER = "cleaner.command",
    CUSTOMER = "customer.command",
    NOTIFICATION = "notification.command",
    PAYMENT = "payment.command",
    CHAT = "chat.command",
    MATCH_USERS = "match.users",
    AUTH = 'auth.command'
  }

  // Топики для СОБЫТИЙ (отчеты от сервисов к Саге)
  export enum Events {
    NOTIFICATION = "notification.event",
    ORDER = "order.event",
    CLEANER = "cleaner.event",
    CUSTOMER = 'customer.event',
    PAYMENT = "payment.event",
    USER = "user.event",
    CHAT = "chat.event",
    AUTH = 'auth.event'
  }
}
