import { FindPrivateUserHandler } from "./find.private.handler";
import { FindPublicUserHandler } from "./find.public.handler";

export const queryHandler = [FindPrivateUserHandler, FindPublicUserHandler];
