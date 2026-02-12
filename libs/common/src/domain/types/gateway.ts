import { TokenPairData } from './grpc.services.types';

export interface ICustomRequest extends Request {
  authedUser: TokenPairData;
}
