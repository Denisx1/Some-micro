// import { ChatSaga } from "./chat.service.saga";
// import { CleanerSaga } from "./cleaner.service.saga";
import { CleanerSaga } from "./cleaner.service.saga";
import { OrderSaga } from "./order.saga";

export const Sagas = [OrderSaga, CleanerSaga];
