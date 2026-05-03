export class GetOrderHistoryQuery {
  constructor(public readonly orderId: number) {}
}
export class GetOrderByIdQuery {
  constructor(public readonly orderId: number) {}
}
