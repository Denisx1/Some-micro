import { TokenType } from '@app/common/domain';
import { SetMetadata } from '@nestjs/common';

export const TokenT = (type: string = TokenType.ACCESS_TOKEN) =>
  SetMetadata('tokenType', type);
