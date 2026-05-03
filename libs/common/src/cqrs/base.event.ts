export abstract class ServiceEvent<T = unknown> {
  constructor(public readonly payload: T) {}
}
