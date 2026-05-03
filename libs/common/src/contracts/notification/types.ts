export interface EmailStrategyPayload {
  to: string;
  template: string;
  locals: Record<string, any>;
}
