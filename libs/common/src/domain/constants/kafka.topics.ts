export const CANDIDATE_SAVED = 'candidate.saved';
export const USER_COMPLETELY_LOGIN = 'user.completely.login';
export const USER_FORGOT_PASSWORD = 'user.forgot.password';
export const USER_LOGOUT_ONE = 'user.logout.one';
export const USER_LOGOUT_ALL = 'user.logout.all';
export const USER_PASSWORD_CHANGED = 'user.password.changed';
export const USER_COMPLETELY_CREATED = 'user.completely.created';
export const CLEANER_COMPLETELY_CREATED = 'clraner.completely.created';
export const CUSTOMER_COMPLETELY_CREATED = 'customer.completely.created';
export const ORDER_CREATED = 'order.created';
export const CLEANER_ASSIGNED = 'cleaner.assigned';
export const CLEANER_DECLINED = 'cleaner.declined';
export const INFRASRTUCTURE_ERROR = 'infrastructure.error';
export const APPLICATION_ERROR = 'application.error';
export const CLEAERS_INVITED = 'cleaners.invited';
export const CLEANERS_NOT_FOUND = 'cleaners.not.found';
export const USER_CREATED = 'user.created';

export const USER_EVENT = 'user.events';
export const CLEANER_EVENTS = 'cleaner.events';
export const CUSTOMER_EVENTS = 'customer.events';
export const ROLE_EVENTS = 'role.events';
export const AUTH_EVENTS = 'auth.events';
export const ORDER_EVENTS = 'order.events';
export const REGISTRATION_EVENTS = 'registration.events';

export enum UserActions {
  LOGOUT = 'user.logout',
  LOGIN = 'user.login',
  LOGOUT_ALL = 'user.logout.all',
  PASSWORD_CHANGED = 'user.password.changed',
  CREATED = 'user.created',
}
export enum OrderActions {
  CREATE = 'order.create',
}

export enum ProjectionActions {
  ORDER_CREATE = 'order.created',
}

export enum CleanerActions {
  INVITED = 'cleaner.invited',
  NOT_FOUND = 'cleaners.not.found',
  ASSIGNED = 'cleaner.assigned',
}
export enum CustomerAction {
  CUSTOMER_CREATE = 'customer.create',
}
