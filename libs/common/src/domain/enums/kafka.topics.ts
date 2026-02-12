export enum KafkaTopics {
  CUSTOMER_CREATE = 'cusomer.create',

  CLEANER_CREATE = 'cleaner.create',
  CLEANER_ACCEPTED = 'cleaner.accepted',
  CLEANER_DECLINE = 'cleaner.decline',

  CLEANES_INVITED = 'cleaners.invited',
  CLEANERS_NOT_FOUND = 'cleaners.not.found',

  USER_CREATE = 'user.create',
  USER_LOGINED = 'user.logined',
  USER_LOGOUT = 'user.logout',
  USER_LOGOUT_ALL = 'user.logout.all',
  USER_UPDATE_PASSWORD = 'user.update.password',

  ORDER_CREATED = 'order.created',

  NOTIFY_INIT_REG = 'notify.init.reg',
  NOTIFY_CHANGE_PASS = 'notify.change.pass',
}

export enum KafkaTopic {
  // Топики-события (Слушает только Сага)
  ORDER_EVENTS = 'order.events',
  CLEANER_EVENTS = 'cleaner.events',

  // Топики-команды (Слушает конкретный сервис)
  CLEANER_COMMANDS = 'cleaner.commands',
  NOTIFY_COMMANDS = 'notify.commands',
}

export enum SagaCommands {
  INVITE_CLEANERS = 'INVITE_CLEANERS_CMD', // Приказ найти клинера
  CLEANER_NOT_FOUND = 'CLEANER_NOT_FOUND',
  INVITED_CLEANERS = 'INVITED_CLEANERS_CMD',
  CLEANER_ACCEPTED = 'CLEANER_ACCEPTED',
  CREATE_CLEANER = 'CREATE_CLEANER_CMD',
  CREATE_CUSTOMER = 'CREATE_CUSTOMER_CMD',
  CREATE_CHAT = 'CREATE_CHAT',
  MATCH_USERS='MATCH_USERS'
}

export enum SagaEvents {
  ORDER_CREATED = 'ORDER_CREATED_EV',
  CLEANER_BOUND_TO_ORDER = 'CLEANER_BOUND_TO_ORDER_EV',
  USER_CREATED = 'USER_CREATED_EV',
  CLEANER_ASSIGNED = 'CLEANER_ASSIGNED_EV', // Клинер подтвердил
  CLEANER_REJECTED = 'CLEANER_REJECTED_EV', // Никто не взял заказ
  CLEANER_NOT_FOUND = 'CLEANER_NOT_FOUND_EV',
  CLEANERS_INVITED = 'CLEANERS_INVITED',
  CLEANER_ACCEPTED = 'CLEANER_ACCEPTED',
  CLEANER_DECLINED = 'CLEANER_DECLINED',
  ALL_CLEANERS_DECLINED = 'ALL_CLEANERS_DECLINED',
  CHAT_CREATED = 'CHAT_CREATED',
}

export namespace KafkaTopics {
  // Топики для КОМАНД (приказы от Саги к сервисам)
  export enum Commands {
    ORDER = 'order.command',
    CLEANER = 'cleaner.command',
    CUSTOMER = 'customer.command',
    NOTIFY = 'notify.command',
    PAYMENT = 'payment.command',
    CHAT = 'chat.command',
    MATCH_USERS = 'match.users'
  }

  // Топики для СОБЫТИЙ (отчеты от сервисов к Саге)
  export enum Events {
    ORDER = 'order.event',
    CLEANER = 'cleaner.event',
    PAYMENT = 'payment.event',
    USER = 'user.event',
    CHAT = 'chat.event',
  }
}
