import { AuthSaga } from "./auth.saga";
import { ProfileSaga } from "./profile.saga";
import { UserSaga } from "./user.saga";

export const Sagas = [AuthSaga, UserSaga, ProfileSaga];
