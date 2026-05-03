
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderInvitation
 * 
 */
export type OrderInvitation = $Result.DefaultSelection<Prisma.$OrderInvitationPayload>
/**
 * Model OrderOutbox
 * 
 */
export type OrderOutbox = $Result.DefaultSelection<Prisma.$OrderOutboxPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CustomerDecision: {
  PENDING: 'PENDING',
  SELECTED: 'SELECTED',
  NOT_SELECTED: 'NOT_SELECTED'
};

export type CustomerDecision = (typeof CustomerDecision)[keyof typeof CustomerDecision]


export const CleanerStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  HIDE: 'HIDE'
};

export type CleanerStatus = (typeof CleanerStatus)[keyof typeof CleanerStatus]


export const InvitationStatus: {
  FOUND: 'FOUND',
  INVITED: 'INVITED',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  EXPIRED: 'EXPIRED',
  HIDE: 'HIDE'
};

export type InvitationStatus = (typeof InvitationStatus)[keyof typeof InvitationStatus]


export const OutboxOrderStatus: {
  NEW: 'NEW',
  SENT: 'SENT',
  ERROR: 'ERROR'
};

export type OutboxOrderStatus = (typeof OutboxOrderStatus)[keyof typeof OutboxOrderStatus]


export const OrderStatus: {
  INVITED: 'INVITED',
  DONE: 'DONE',
  EXPIRED: 'EXPIRED',
  IN_PROGRESS: 'IN_PROGRESS',
  WAITING_FRO_CLEANER: 'WAITING_FRO_CLEANER',
  PENDING: 'PENDING'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type CustomerDecision = $Enums.CustomerDecision

export const CustomerDecision: typeof $Enums.CustomerDecision

export type CleanerStatus = $Enums.CleanerStatus

export const CleanerStatus: typeof $Enums.CleanerStatus

export type InvitationStatus = $Enums.InvitationStatus

export const InvitationStatus: typeof $Enums.InvitationStatus

export type OutboxOrderStatus = $Enums.OutboxOrderStatus

export const OutboxOrderStatus: typeof $Enums.OutboxOrderStatus

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Orders
 * const orders = await prisma.order.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Orders
   * const orders = await prisma.order.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderInvitation`: Exposes CRUD operations for the **OrderInvitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderInvitations
    * const orderInvitations = await prisma.orderInvitation.findMany()
    * ```
    */
  get orderInvitation(): Prisma.OrderInvitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderOutbox`: Exposes CRUD operations for the **OrderOutbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderOutboxes
    * const orderOutboxes = await prisma.orderOutbox.findMany()
    * ```
    */
  get orderOutbox(): Prisma.OrderOutboxDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.0
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Order: 'Order',
    OrderInvitation: 'OrderInvitation',
    OrderOutbox: 'OrderOutbox'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "order" | "orderInvitation" | "orderOutbox"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderInvitation: {
        payload: Prisma.$OrderInvitationPayload<ExtArgs>
        fields: Prisma.OrderInvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderInvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderInvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderInvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderInvitationPayload>
          }
          findFirst: {
            args: Prisma.OrderInvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderInvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderInvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderInvitationPayload>
          }
          findMany: {
            args: Prisma.OrderInvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderInvitationPayload>[]
          }
          create: {
            args: Prisma.OrderInvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderInvitationPayload>
          }
          createMany: {
            args: Prisma.OrderInvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderInvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderInvitationPayload>[]
          }
          delete: {
            args: Prisma.OrderInvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderInvitationPayload>
          }
          update: {
            args: Prisma.OrderInvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderInvitationPayload>
          }
          deleteMany: {
            args: Prisma.OrderInvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderInvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderInvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderInvitationPayload>[]
          }
          upsert: {
            args: Prisma.OrderInvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderInvitationPayload>
          }
          aggregate: {
            args: Prisma.OrderInvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderInvitation>
          }
          groupBy: {
            args: Prisma.OrderInvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderInvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderInvitationCountArgs<ExtArgs>
            result: $Utils.Optional<OrderInvitationCountAggregateOutputType> | number
          }
        }
      }
      OrderOutbox: {
        payload: Prisma.$OrderOutboxPayload<ExtArgs>
        fields: Prisma.OrderOutboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderOutboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderOutboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderOutboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderOutboxPayload>
          }
          findFirst: {
            args: Prisma.OrderOutboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderOutboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderOutboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderOutboxPayload>
          }
          findMany: {
            args: Prisma.OrderOutboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderOutboxPayload>[]
          }
          create: {
            args: Prisma.OrderOutboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderOutboxPayload>
          }
          createMany: {
            args: Prisma.OrderOutboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderOutboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderOutboxPayload>[]
          }
          delete: {
            args: Prisma.OrderOutboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderOutboxPayload>
          }
          update: {
            args: Prisma.OrderOutboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderOutboxPayload>
          }
          deleteMany: {
            args: Prisma.OrderOutboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderOutboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderOutboxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderOutboxPayload>[]
          }
          upsert: {
            args: Prisma.OrderOutboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderOutboxPayload>
          }
          aggregate: {
            args: Prisma.OrderOutboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderOutbox>
          }
          groupBy: {
            args: Prisma.OrderOutboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderOutboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderOutboxCountArgs<ExtArgs>
            result: $Utils.Optional<OrderOutboxCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    order?: OrderOmit
    orderInvitation?: OrderInvitationOmit
    orderOutbox?: OrderOutboxOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
    zipCode: number | null
    dayOfWeek: number | null
    cleanerId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    customerId: number | null
    zipCode: number | null
    dayOfWeek: number | null
    cleanerId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    customerId: number | null
    zipCode: number | null
    city: string | null
    dayOfWeek: number | null
    fromTime: string | null
    toTime: string | null
    status: $Enums.OrderStatus | null
    cleanerId: number | null
    clarifications: string | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    customerId: number | null
    zipCode: number | null
    city: string | null
    dayOfWeek: number | null
    fromTime: string | null
    toTime: string | null
    status: $Enums.OrderStatus | null
    cleanerId: number | null
    clarifications: string | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    customerId: number
    zipCode: number
    city: number
    dayOfWeek: number
    fromTime: number
    toTime: number
    status: number
    cleanerId: number
    clarifications: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    customerId?: true
    zipCode?: true
    dayOfWeek?: true
    cleanerId?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    customerId?: true
    zipCode?: true
    dayOfWeek?: true
    cleanerId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    customerId?: true
    zipCode?: true
    city?: true
    dayOfWeek?: true
    fromTime?: true
    toTime?: true
    status?: true
    cleanerId?: true
    clarifications?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    customerId?: true
    zipCode?: true
    city?: true
    dayOfWeek?: true
    fromTime?: true
    toTime?: true
    status?: true
    cleanerId?: true
    clarifications?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    customerId?: true
    zipCode?: true
    city?: true
    dayOfWeek?: true
    fromTime?: true
    toTime?: true
    status?: true
    cleanerId?: true
    clarifications?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    customerId: number
    zipCode: number
    city: string
    dayOfWeek: number
    fromTime: string
    toTime: string
    status: $Enums.OrderStatus | null
    cleanerId: number | null
    clarifications: string | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    zipCode?: boolean
    city?: boolean
    dayOfWeek?: boolean
    fromTime?: boolean
    toTime?: boolean
    status?: boolean
    cleanerId?: boolean
    clarifications?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    zipCode?: boolean
    city?: boolean
    dayOfWeek?: boolean
    fromTime?: boolean
    toTime?: boolean
    status?: boolean
    cleanerId?: boolean
    clarifications?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    zipCode?: boolean
    city?: boolean
    dayOfWeek?: boolean
    fromTime?: boolean
    toTime?: boolean
    status?: boolean
    cleanerId?: boolean
    clarifications?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    customerId?: boolean
    zipCode?: boolean
    city?: boolean
    dayOfWeek?: boolean
    fromTime?: boolean
    toTime?: boolean
    status?: boolean
    cleanerId?: boolean
    clarifications?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "zipCode" | "city" | "dayOfWeek" | "fromTime" | "toTime" | "status" | "cleanerId" | "clarifications", ExtArgs["result"]["order"]>

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customerId: number
      zipCode: number
      city: string
      dayOfWeek: number
      fromTime: string
      toTime: string
      status: $Enums.OrderStatus | null
      cleanerId: number | null
      clarifications: string | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly customerId: FieldRef<"Order", 'Int'>
    readonly zipCode: FieldRef<"Order", 'Int'>
    readonly city: FieldRef<"Order", 'String'>
    readonly dayOfWeek: FieldRef<"Order", 'Int'>
    readonly fromTime: FieldRef<"Order", 'String'>
    readonly toTime: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly cleanerId: FieldRef<"Order", 'Int'>
    readonly clarifications: FieldRef<"Order", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
  }


  /**
   * Model OrderInvitation
   */

  export type AggregateOrderInvitation = {
    _count: OrderInvitationCountAggregateOutputType | null
    _avg: OrderInvitationAvgAggregateOutputType | null
    _sum: OrderInvitationSumAggregateOutputType | null
    _min: OrderInvitationMinAggregateOutputType | null
    _max: OrderInvitationMaxAggregateOutputType | null
  }

  export type OrderInvitationAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    cleanerProfileId: number | null
    rating: number | null
  }

  export type OrderInvitationSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    cleanerProfileId: number | null
    rating: number | null
  }

  export type OrderInvitationMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    cleanerProfileId: number | null
    cleanerName: string | null
    customer_decision: $Enums.CustomerDecision | null
    cleaner_status: $Enums.CleanerStatus | null
    rating: number | null
    status: $Enums.InvitationStatus | null
    createdAt: Date | null
  }

  export type OrderInvitationMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    cleanerProfileId: number | null
    cleanerName: string | null
    customer_decision: $Enums.CustomerDecision | null
    cleaner_status: $Enums.CleanerStatus | null
    rating: number | null
    status: $Enums.InvitationStatus | null
    createdAt: Date | null
  }

  export type OrderInvitationCountAggregateOutputType = {
    id: number
    orderId: number
    cleanerProfileId: number
    cleanerName: number
    customer_decision: number
    cleaner_status: number
    rating: number
    status: number
    createdAt: number
    _all: number
  }


  export type OrderInvitationAvgAggregateInputType = {
    id?: true
    orderId?: true
    cleanerProfileId?: true
    rating?: true
  }

  export type OrderInvitationSumAggregateInputType = {
    id?: true
    orderId?: true
    cleanerProfileId?: true
    rating?: true
  }

  export type OrderInvitationMinAggregateInputType = {
    id?: true
    orderId?: true
    cleanerProfileId?: true
    cleanerName?: true
    customer_decision?: true
    cleaner_status?: true
    rating?: true
    status?: true
    createdAt?: true
  }

  export type OrderInvitationMaxAggregateInputType = {
    id?: true
    orderId?: true
    cleanerProfileId?: true
    cleanerName?: true
    customer_decision?: true
    cleaner_status?: true
    rating?: true
    status?: true
    createdAt?: true
  }

  export type OrderInvitationCountAggregateInputType = {
    id?: true
    orderId?: true
    cleanerProfileId?: true
    cleanerName?: true
    customer_decision?: true
    cleaner_status?: true
    rating?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type OrderInvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderInvitation to aggregate.
     */
    where?: OrderInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderInvitations to fetch.
     */
    orderBy?: OrderInvitationOrderByWithRelationInput | OrderInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderInvitations
    **/
    _count?: true | OrderInvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderInvitationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderInvitationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderInvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderInvitationMaxAggregateInputType
  }

  export type GetOrderInvitationAggregateType<T extends OrderInvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderInvitation[P]>
      : GetScalarType<T[P], AggregateOrderInvitation[P]>
  }




  export type OrderInvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderInvitationWhereInput
    orderBy?: OrderInvitationOrderByWithAggregationInput | OrderInvitationOrderByWithAggregationInput[]
    by: OrderInvitationScalarFieldEnum[] | OrderInvitationScalarFieldEnum
    having?: OrderInvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderInvitationCountAggregateInputType | true
    _avg?: OrderInvitationAvgAggregateInputType
    _sum?: OrderInvitationSumAggregateInputType
    _min?: OrderInvitationMinAggregateInputType
    _max?: OrderInvitationMaxAggregateInputType
  }

  export type OrderInvitationGroupByOutputType = {
    id: number
    orderId: number
    cleanerProfileId: number
    cleanerName: string
    customer_decision: $Enums.CustomerDecision
    cleaner_status: $Enums.CleanerStatus
    rating: number
    status: $Enums.InvitationStatus
    createdAt: Date
    _count: OrderInvitationCountAggregateOutputType | null
    _avg: OrderInvitationAvgAggregateOutputType | null
    _sum: OrderInvitationSumAggregateOutputType | null
    _min: OrderInvitationMinAggregateOutputType | null
    _max: OrderInvitationMaxAggregateOutputType | null
  }

  type GetOrderInvitationGroupByPayload<T extends OrderInvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderInvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderInvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderInvitationGroupByOutputType[P]>
            : GetScalarType<T[P], OrderInvitationGroupByOutputType[P]>
        }
      >
    >


  export type OrderInvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    cleanerProfileId?: boolean
    cleanerName?: boolean
    customer_decision?: boolean
    cleaner_status?: boolean
    rating?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["orderInvitation"]>

  export type OrderInvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    cleanerProfileId?: boolean
    cleanerName?: boolean
    customer_decision?: boolean
    cleaner_status?: boolean
    rating?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["orderInvitation"]>

  export type OrderInvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    cleanerProfileId?: boolean
    cleanerName?: boolean
    customer_decision?: boolean
    cleaner_status?: boolean
    rating?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["orderInvitation"]>

  export type OrderInvitationSelectScalar = {
    id?: boolean
    orderId?: boolean
    cleanerProfileId?: boolean
    cleanerName?: boolean
    customer_decision?: boolean
    cleaner_status?: boolean
    rating?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type OrderInvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "cleanerProfileId" | "cleanerName" | "customer_decision" | "cleaner_status" | "rating" | "status" | "createdAt", ExtArgs["result"]["orderInvitation"]>

  export type $OrderInvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderInvitation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      cleanerProfileId: number
      cleanerName: string
      customer_decision: $Enums.CustomerDecision
      cleaner_status: $Enums.CleanerStatus
      rating: number
      status: $Enums.InvitationStatus
      createdAt: Date
    }, ExtArgs["result"]["orderInvitation"]>
    composites: {}
  }

  type OrderInvitationGetPayload<S extends boolean | null | undefined | OrderInvitationDefaultArgs> = $Result.GetResult<Prisma.$OrderInvitationPayload, S>

  type OrderInvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderInvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderInvitationCountAggregateInputType | true
    }

  export interface OrderInvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderInvitation'], meta: { name: 'OrderInvitation' } }
    /**
     * Find zero or one OrderInvitation that matches the filter.
     * @param {OrderInvitationFindUniqueArgs} args - Arguments to find a OrderInvitation
     * @example
     * // Get one OrderInvitation
     * const orderInvitation = await prisma.orderInvitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderInvitationFindUniqueArgs>(args: SelectSubset<T, OrderInvitationFindUniqueArgs<ExtArgs>>): Prisma__OrderInvitationClient<$Result.GetResult<Prisma.$OrderInvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderInvitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderInvitationFindUniqueOrThrowArgs} args - Arguments to find a OrderInvitation
     * @example
     * // Get one OrderInvitation
     * const orderInvitation = await prisma.orderInvitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderInvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderInvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderInvitationClient<$Result.GetResult<Prisma.$OrderInvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderInvitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderInvitationFindFirstArgs} args - Arguments to find a OrderInvitation
     * @example
     * // Get one OrderInvitation
     * const orderInvitation = await prisma.orderInvitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderInvitationFindFirstArgs>(args?: SelectSubset<T, OrderInvitationFindFirstArgs<ExtArgs>>): Prisma__OrderInvitationClient<$Result.GetResult<Prisma.$OrderInvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderInvitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderInvitationFindFirstOrThrowArgs} args - Arguments to find a OrderInvitation
     * @example
     * // Get one OrderInvitation
     * const orderInvitation = await prisma.orderInvitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderInvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderInvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderInvitationClient<$Result.GetResult<Prisma.$OrderInvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderInvitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderInvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderInvitations
     * const orderInvitations = await prisma.orderInvitation.findMany()
     * 
     * // Get first 10 OrderInvitations
     * const orderInvitations = await prisma.orderInvitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderInvitationWithIdOnly = await prisma.orderInvitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderInvitationFindManyArgs>(args?: SelectSubset<T, OrderInvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderInvitation.
     * @param {OrderInvitationCreateArgs} args - Arguments to create a OrderInvitation.
     * @example
     * // Create one OrderInvitation
     * const OrderInvitation = await prisma.orderInvitation.create({
     *   data: {
     *     // ... data to create a OrderInvitation
     *   }
     * })
     * 
     */
    create<T extends OrderInvitationCreateArgs>(args: SelectSubset<T, OrderInvitationCreateArgs<ExtArgs>>): Prisma__OrderInvitationClient<$Result.GetResult<Prisma.$OrderInvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderInvitations.
     * @param {OrderInvitationCreateManyArgs} args - Arguments to create many OrderInvitations.
     * @example
     * // Create many OrderInvitations
     * const orderInvitation = await prisma.orderInvitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderInvitationCreateManyArgs>(args?: SelectSubset<T, OrderInvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderInvitations and returns the data saved in the database.
     * @param {OrderInvitationCreateManyAndReturnArgs} args - Arguments to create many OrderInvitations.
     * @example
     * // Create many OrderInvitations
     * const orderInvitation = await prisma.orderInvitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderInvitations and only return the `id`
     * const orderInvitationWithIdOnly = await prisma.orderInvitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderInvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderInvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderInvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderInvitation.
     * @param {OrderInvitationDeleteArgs} args - Arguments to delete one OrderInvitation.
     * @example
     * // Delete one OrderInvitation
     * const OrderInvitation = await prisma.orderInvitation.delete({
     *   where: {
     *     // ... filter to delete one OrderInvitation
     *   }
     * })
     * 
     */
    delete<T extends OrderInvitationDeleteArgs>(args: SelectSubset<T, OrderInvitationDeleteArgs<ExtArgs>>): Prisma__OrderInvitationClient<$Result.GetResult<Prisma.$OrderInvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderInvitation.
     * @param {OrderInvitationUpdateArgs} args - Arguments to update one OrderInvitation.
     * @example
     * // Update one OrderInvitation
     * const orderInvitation = await prisma.orderInvitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderInvitationUpdateArgs>(args: SelectSubset<T, OrderInvitationUpdateArgs<ExtArgs>>): Prisma__OrderInvitationClient<$Result.GetResult<Prisma.$OrderInvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderInvitations.
     * @param {OrderInvitationDeleteManyArgs} args - Arguments to filter OrderInvitations to delete.
     * @example
     * // Delete a few OrderInvitations
     * const { count } = await prisma.orderInvitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderInvitationDeleteManyArgs>(args?: SelectSubset<T, OrderInvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderInvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderInvitations
     * const orderInvitation = await prisma.orderInvitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderInvitationUpdateManyArgs>(args: SelectSubset<T, OrderInvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderInvitations and returns the data updated in the database.
     * @param {OrderInvitationUpdateManyAndReturnArgs} args - Arguments to update many OrderInvitations.
     * @example
     * // Update many OrderInvitations
     * const orderInvitation = await prisma.orderInvitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderInvitations and only return the `id`
     * const orderInvitationWithIdOnly = await prisma.orderInvitation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderInvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderInvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderInvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderInvitation.
     * @param {OrderInvitationUpsertArgs} args - Arguments to update or create a OrderInvitation.
     * @example
     * // Update or create a OrderInvitation
     * const orderInvitation = await prisma.orderInvitation.upsert({
     *   create: {
     *     // ... data to create a OrderInvitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderInvitation we want to update
     *   }
     * })
     */
    upsert<T extends OrderInvitationUpsertArgs>(args: SelectSubset<T, OrderInvitationUpsertArgs<ExtArgs>>): Prisma__OrderInvitationClient<$Result.GetResult<Prisma.$OrderInvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderInvitationCountArgs} args - Arguments to filter OrderInvitations to count.
     * @example
     * // Count the number of OrderInvitations
     * const count = await prisma.orderInvitation.count({
     *   where: {
     *     // ... the filter for the OrderInvitations we want to count
     *   }
     * })
    **/
    count<T extends OrderInvitationCountArgs>(
      args?: Subset<T, OrderInvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderInvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderInvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderInvitationAggregateArgs>(args: Subset<T, OrderInvitationAggregateArgs>): Prisma.PrismaPromise<GetOrderInvitationAggregateType<T>>

    /**
     * Group by OrderInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderInvitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderInvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderInvitationGroupByArgs['orderBy'] }
        : { orderBy?: OrderInvitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderInvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderInvitation model
   */
  readonly fields: OrderInvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderInvitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderInvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderInvitation model
   */
  interface OrderInvitationFieldRefs {
    readonly id: FieldRef<"OrderInvitation", 'Int'>
    readonly orderId: FieldRef<"OrderInvitation", 'Int'>
    readonly cleanerProfileId: FieldRef<"OrderInvitation", 'Int'>
    readonly cleanerName: FieldRef<"OrderInvitation", 'String'>
    readonly customer_decision: FieldRef<"OrderInvitation", 'CustomerDecision'>
    readonly cleaner_status: FieldRef<"OrderInvitation", 'CleanerStatus'>
    readonly rating: FieldRef<"OrderInvitation", 'Float'>
    readonly status: FieldRef<"OrderInvitation", 'InvitationStatus'>
    readonly createdAt: FieldRef<"OrderInvitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderInvitation findUnique
   */
  export type OrderInvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderInvitation
     */
    select?: OrderInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderInvitation
     */
    omit?: OrderInvitationOmit<ExtArgs> | null
    /**
     * Filter, which OrderInvitation to fetch.
     */
    where: OrderInvitationWhereUniqueInput
  }

  /**
   * OrderInvitation findUniqueOrThrow
   */
  export type OrderInvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderInvitation
     */
    select?: OrderInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderInvitation
     */
    omit?: OrderInvitationOmit<ExtArgs> | null
    /**
     * Filter, which OrderInvitation to fetch.
     */
    where: OrderInvitationWhereUniqueInput
  }

  /**
   * OrderInvitation findFirst
   */
  export type OrderInvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderInvitation
     */
    select?: OrderInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderInvitation
     */
    omit?: OrderInvitationOmit<ExtArgs> | null
    /**
     * Filter, which OrderInvitation to fetch.
     */
    where?: OrderInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderInvitations to fetch.
     */
    orderBy?: OrderInvitationOrderByWithRelationInput | OrderInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderInvitations.
     */
    cursor?: OrderInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderInvitations.
     */
    distinct?: OrderInvitationScalarFieldEnum | OrderInvitationScalarFieldEnum[]
  }

  /**
   * OrderInvitation findFirstOrThrow
   */
  export type OrderInvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderInvitation
     */
    select?: OrderInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderInvitation
     */
    omit?: OrderInvitationOmit<ExtArgs> | null
    /**
     * Filter, which OrderInvitation to fetch.
     */
    where?: OrderInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderInvitations to fetch.
     */
    orderBy?: OrderInvitationOrderByWithRelationInput | OrderInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderInvitations.
     */
    cursor?: OrderInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderInvitations.
     */
    distinct?: OrderInvitationScalarFieldEnum | OrderInvitationScalarFieldEnum[]
  }

  /**
   * OrderInvitation findMany
   */
  export type OrderInvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderInvitation
     */
    select?: OrderInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderInvitation
     */
    omit?: OrderInvitationOmit<ExtArgs> | null
    /**
     * Filter, which OrderInvitations to fetch.
     */
    where?: OrderInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderInvitations to fetch.
     */
    orderBy?: OrderInvitationOrderByWithRelationInput | OrderInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderInvitations.
     */
    cursor?: OrderInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderInvitations.
     */
    skip?: number
    distinct?: OrderInvitationScalarFieldEnum | OrderInvitationScalarFieldEnum[]
  }

  /**
   * OrderInvitation create
   */
  export type OrderInvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderInvitation
     */
    select?: OrderInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderInvitation
     */
    omit?: OrderInvitationOmit<ExtArgs> | null
    /**
     * The data needed to create a OrderInvitation.
     */
    data: XOR<OrderInvitationCreateInput, OrderInvitationUncheckedCreateInput>
  }

  /**
   * OrderInvitation createMany
   */
  export type OrderInvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderInvitations.
     */
    data: OrderInvitationCreateManyInput | OrderInvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderInvitation createManyAndReturn
   */
  export type OrderInvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderInvitation
     */
    select?: OrderInvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderInvitation
     */
    omit?: OrderInvitationOmit<ExtArgs> | null
    /**
     * The data used to create many OrderInvitations.
     */
    data: OrderInvitationCreateManyInput | OrderInvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderInvitation update
   */
  export type OrderInvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderInvitation
     */
    select?: OrderInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderInvitation
     */
    omit?: OrderInvitationOmit<ExtArgs> | null
    /**
     * The data needed to update a OrderInvitation.
     */
    data: XOR<OrderInvitationUpdateInput, OrderInvitationUncheckedUpdateInput>
    /**
     * Choose, which OrderInvitation to update.
     */
    where: OrderInvitationWhereUniqueInput
  }

  /**
   * OrderInvitation updateMany
   */
  export type OrderInvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderInvitations.
     */
    data: XOR<OrderInvitationUpdateManyMutationInput, OrderInvitationUncheckedUpdateManyInput>
    /**
     * Filter which OrderInvitations to update
     */
    where?: OrderInvitationWhereInput
    /**
     * Limit how many OrderInvitations to update.
     */
    limit?: number
  }

  /**
   * OrderInvitation updateManyAndReturn
   */
  export type OrderInvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderInvitation
     */
    select?: OrderInvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderInvitation
     */
    omit?: OrderInvitationOmit<ExtArgs> | null
    /**
     * The data used to update OrderInvitations.
     */
    data: XOR<OrderInvitationUpdateManyMutationInput, OrderInvitationUncheckedUpdateManyInput>
    /**
     * Filter which OrderInvitations to update
     */
    where?: OrderInvitationWhereInput
    /**
     * Limit how many OrderInvitations to update.
     */
    limit?: number
  }

  /**
   * OrderInvitation upsert
   */
  export type OrderInvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderInvitation
     */
    select?: OrderInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderInvitation
     */
    omit?: OrderInvitationOmit<ExtArgs> | null
    /**
     * The filter to search for the OrderInvitation to update in case it exists.
     */
    where: OrderInvitationWhereUniqueInput
    /**
     * In case the OrderInvitation found by the `where` argument doesn't exist, create a new OrderInvitation with this data.
     */
    create: XOR<OrderInvitationCreateInput, OrderInvitationUncheckedCreateInput>
    /**
     * In case the OrderInvitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderInvitationUpdateInput, OrderInvitationUncheckedUpdateInput>
  }

  /**
   * OrderInvitation delete
   */
  export type OrderInvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderInvitation
     */
    select?: OrderInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderInvitation
     */
    omit?: OrderInvitationOmit<ExtArgs> | null
    /**
     * Filter which OrderInvitation to delete.
     */
    where: OrderInvitationWhereUniqueInput
  }

  /**
   * OrderInvitation deleteMany
   */
  export type OrderInvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderInvitations to delete
     */
    where?: OrderInvitationWhereInput
    /**
     * Limit how many OrderInvitations to delete.
     */
    limit?: number
  }

  /**
   * OrderInvitation without action
   */
  export type OrderInvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderInvitation
     */
    select?: OrderInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderInvitation
     */
    omit?: OrderInvitationOmit<ExtArgs> | null
  }


  /**
   * Model OrderOutbox
   */

  export type AggregateOrderOutbox = {
    _count: OrderOutboxCountAggregateOutputType | null
    _avg: OrderOutboxAvgAggregateOutputType | null
    _sum: OrderOutboxSumAggregateOutputType | null
    _min: OrderOutboxMinAggregateOutputType | null
    _max: OrderOutboxMaxAggregateOutputType | null
  }

  export type OrderOutboxAvgAggregateOutputType = {
    aggregateId: number | null
  }

  export type OrderOutboxSumAggregateOutputType = {
    aggregateId: number | null
  }

  export type OrderOutboxMinAggregateOutputType = {
    id: string | null
    aggregateType: string | null
    aggregateId: number | null
    createdAt: Date | null
  }

  export type OrderOutboxMaxAggregateOutputType = {
    id: string | null
    aggregateType: string | null
    aggregateId: number | null
    createdAt: Date | null
  }

  export type OrderOutboxCountAggregateOutputType = {
    id: number
    aggregateType: number
    aggregateId: number
    payload: number
    createdAt: number
    _all: number
  }


  export type OrderOutboxAvgAggregateInputType = {
    aggregateId?: true
  }

  export type OrderOutboxSumAggregateInputType = {
    aggregateId?: true
  }

  export type OrderOutboxMinAggregateInputType = {
    id?: true
    aggregateType?: true
    aggregateId?: true
    createdAt?: true
  }

  export type OrderOutboxMaxAggregateInputType = {
    id?: true
    aggregateType?: true
    aggregateId?: true
    createdAt?: true
  }

  export type OrderOutboxCountAggregateInputType = {
    id?: true
    aggregateType?: true
    aggregateId?: true
    payload?: true
    createdAt?: true
    _all?: true
  }

  export type OrderOutboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderOutbox to aggregate.
     */
    where?: OrderOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderOutboxes to fetch.
     */
    orderBy?: OrderOutboxOrderByWithRelationInput | OrderOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderOutboxes
    **/
    _count?: true | OrderOutboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderOutboxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderOutboxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderOutboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderOutboxMaxAggregateInputType
  }

  export type GetOrderOutboxAggregateType<T extends OrderOutboxAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderOutbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderOutbox[P]>
      : GetScalarType<T[P], AggregateOrderOutbox[P]>
  }




  export type OrderOutboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderOutboxWhereInput
    orderBy?: OrderOutboxOrderByWithAggregationInput | OrderOutboxOrderByWithAggregationInput[]
    by: OrderOutboxScalarFieldEnum[] | OrderOutboxScalarFieldEnum
    having?: OrderOutboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderOutboxCountAggregateInputType | true
    _avg?: OrderOutboxAvgAggregateInputType
    _sum?: OrderOutboxSumAggregateInputType
    _min?: OrderOutboxMinAggregateInputType
    _max?: OrderOutboxMaxAggregateInputType
  }

  export type OrderOutboxGroupByOutputType = {
    id: string
    aggregateType: string
    aggregateId: number
    payload: JsonValue
    createdAt: Date
    _count: OrderOutboxCountAggregateOutputType | null
    _avg: OrderOutboxAvgAggregateOutputType | null
    _sum: OrderOutboxSumAggregateOutputType | null
    _min: OrderOutboxMinAggregateOutputType | null
    _max: OrderOutboxMaxAggregateOutputType | null
  }

  type GetOrderOutboxGroupByPayload<T extends OrderOutboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderOutboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderOutboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderOutboxGroupByOutputType[P]>
            : GetScalarType<T[P], OrderOutboxGroupByOutputType[P]>
        }
      >
    >


  export type OrderOutboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aggregateType?: boolean
    aggregateId?: boolean
    payload?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["orderOutbox"]>

  export type OrderOutboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aggregateType?: boolean
    aggregateId?: boolean
    payload?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["orderOutbox"]>

  export type OrderOutboxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aggregateType?: boolean
    aggregateId?: boolean
    payload?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["orderOutbox"]>

  export type OrderOutboxSelectScalar = {
    id?: boolean
    aggregateType?: boolean
    aggregateId?: boolean
    payload?: boolean
    createdAt?: boolean
  }

  export type OrderOutboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aggregateType" | "aggregateId" | "payload" | "createdAt", ExtArgs["result"]["orderOutbox"]>

  export type $OrderOutboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderOutbox"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      aggregateType: string
      aggregateId: number
      payload: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["orderOutbox"]>
    composites: {}
  }

  type OrderOutboxGetPayload<S extends boolean | null | undefined | OrderOutboxDefaultArgs> = $Result.GetResult<Prisma.$OrderOutboxPayload, S>

  type OrderOutboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderOutboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderOutboxCountAggregateInputType | true
    }

  export interface OrderOutboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderOutbox'], meta: { name: 'OrderOutbox' } }
    /**
     * Find zero or one OrderOutbox that matches the filter.
     * @param {OrderOutboxFindUniqueArgs} args - Arguments to find a OrderOutbox
     * @example
     * // Get one OrderOutbox
     * const orderOutbox = await prisma.orderOutbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderOutboxFindUniqueArgs>(args: SelectSubset<T, OrderOutboxFindUniqueArgs<ExtArgs>>): Prisma__OrderOutboxClient<$Result.GetResult<Prisma.$OrderOutboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderOutbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderOutboxFindUniqueOrThrowArgs} args - Arguments to find a OrderOutbox
     * @example
     * // Get one OrderOutbox
     * const orderOutbox = await prisma.orderOutbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderOutboxFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderOutboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderOutboxClient<$Result.GetResult<Prisma.$OrderOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderOutbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderOutboxFindFirstArgs} args - Arguments to find a OrderOutbox
     * @example
     * // Get one OrderOutbox
     * const orderOutbox = await prisma.orderOutbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderOutboxFindFirstArgs>(args?: SelectSubset<T, OrderOutboxFindFirstArgs<ExtArgs>>): Prisma__OrderOutboxClient<$Result.GetResult<Prisma.$OrderOutboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderOutbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderOutboxFindFirstOrThrowArgs} args - Arguments to find a OrderOutbox
     * @example
     * // Get one OrderOutbox
     * const orderOutbox = await prisma.orderOutbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderOutboxFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderOutboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderOutboxClient<$Result.GetResult<Prisma.$OrderOutboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderOutboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderOutboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderOutboxes
     * const orderOutboxes = await prisma.orderOutbox.findMany()
     * 
     * // Get first 10 OrderOutboxes
     * const orderOutboxes = await prisma.orderOutbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderOutboxWithIdOnly = await prisma.orderOutbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderOutboxFindManyArgs>(args?: SelectSubset<T, OrderOutboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderOutbox.
     * @param {OrderOutboxCreateArgs} args - Arguments to create a OrderOutbox.
     * @example
     * // Create one OrderOutbox
     * const OrderOutbox = await prisma.orderOutbox.create({
     *   data: {
     *     // ... data to create a OrderOutbox
     *   }
     * })
     * 
     */
    create<T extends OrderOutboxCreateArgs>(args: SelectSubset<T, OrderOutboxCreateArgs<ExtArgs>>): Prisma__OrderOutboxClient<$Result.GetResult<Prisma.$OrderOutboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderOutboxes.
     * @param {OrderOutboxCreateManyArgs} args - Arguments to create many OrderOutboxes.
     * @example
     * // Create many OrderOutboxes
     * const orderOutbox = await prisma.orderOutbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderOutboxCreateManyArgs>(args?: SelectSubset<T, OrderOutboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderOutboxes and returns the data saved in the database.
     * @param {OrderOutboxCreateManyAndReturnArgs} args - Arguments to create many OrderOutboxes.
     * @example
     * // Create many OrderOutboxes
     * const orderOutbox = await prisma.orderOutbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderOutboxes and only return the `id`
     * const orderOutboxWithIdOnly = await prisma.orderOutbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderOutboxCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderOutboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderOutboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderOutbox.
     * @param {OrderOutboxDeleteArgs} args - Arguments to delete one OrderOutbox.
     * @example
     * // Delete one OrderOutbox
     * const OrderOutbox = await prisma.orderOutbox.delete({
     *   where: {
     *     // ... filter to delete one OrderOutbox
     *   }
     * })
     * 
     */
    delete<T extends OrderOutboxDeleteArgs>(args: SelectSubset<T, OrderOutboxDeleteArgs<ExtArgs>>): Prisma__OrderOutboxClient<$Result.GetResult<Prisma.$OrderOutboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderOutbox.
     * @param {OrderOutboxUpdateArgs} args - Arguments to update one OrderOutbox.
     * @example
     * // Update one OrderOutbox
     * const orderOutbox = await prisma.orderOutbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderOutboxUpdateArgs>(args: SelectSubset<T, OrderOutboxUpdateArgs<ExtArgs>>): Prisma__OrderOutboxClient<$Result.GetResult<Prisma.$OrderOutboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderOutboxes.
     * @param {OrderOutboxDeleteManyArgs} args - Arguments to filter OrderOutboxes to delete.
     * @example
     * // Delete a few OrderOutboxes
     * const { count } = await prisma.orderOutbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderOutboxDeleteManyArgs>(args?: SelectSubset<T, OrderOutboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderOutboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderOutboxes
     * const orderOutbox = await prisma.orderOutbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderOutboxUpdateManyArgs>(args: SelectSubset<T, OrderOutboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderOutboxes and returns the data updated in the database.
     * @param {OrderOutboxUpdateManyAndReturnArgs} args - Arguments to update many OrderOutboxes.
     * @example
     * // Update many OrderOutboxes
     * const orderOutbox = await prisma.orderOutbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderOutboxes and only return the `id`
     * const orderOutboxWithIdOnly = await prisma.orderOutbox.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderOutboxUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderOutboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderOutboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderOutbox.
     * @param {OrderOutboxUpsertArgs} args - Arguments to update or create a OrderOutbox.
     * @example
     * // Update or create a OrderOutbox
     * const orderOutbox = await prisma.orderOutbox.upsert({
     *   create: {
     *     // ... data to create a OrderOutbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderOutbox we want to update
     *   }
     * })
     */
    upsert<T extends OrderOutboxUpsertArgs>(args: SelectSubset<T, OrderOutboxUpsertArgs<ExtArgs>>): Prisma__OrderOutboxClient<$Result.GetResult<Prisma.$OrderOutboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderOutboxCountArgs} args - Arguments to filter OrderOutboxes to count.
     * @example
     * // Count the number of OrderOutboxes
     * const count = await prisma.orderOutbox.count({
     *   where: {
     *     // ... the filter for the OrderOutboxes we want to count
     *   }
     * })
    **/
    count<T extends OrderOutboxCountArgs>(
      args?: Subset<T, OrderOutboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderOutboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderOutboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderOutboxAggregateArgs>(args: Subset<T, OrderOutboxAggregateArgs>): Prisma.PrismaPromise<GetOrderOutboxAggregateType<T>>

    /**
     * Group by OrderOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderOutboxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderOutboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderOutboxGroupByArgs['orderBy'] }
        : { orderBy?: OrderOutboxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderOutboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderOutboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderOutbox model
   */
  readonly fields: OrderOutboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderOutbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderOutboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderOutbox model
   */
  interface OrderOutboxFieldRefs {
    readonly id: FieldRef<"OrderOutbox", 'String'>
    readonly aggregateType: FieldRef<"OrderOutbox", 'String'>
    readonly aggregateId: FieldRef<"OrderOutbox", 'Int'>
    readonly payload: FieldRef<"OrderOutbox", 'Json'>
    readonly createdAt: FieldRef<"OrderOutbox", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderOutbox findUnique
   */
  export type OrderOutboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOutbox
     */
    select?: OrderOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOutbox
     */
    omit?: OrderOutboxOmit<ExtArgs> | null
    /**
     * Filter, which OrderOutbox to fetch.
     */
    where: OrderOutboxWhereUniqueInput
  }

  /**
   * OrderOutbox findUniqueOrThrow
   */
  export type OrderOutboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOutbox
     */
    select?: OrderOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOutbox
     */
    omit?: OrderOutboxOmit<ExtArgs> | null
    /**
     * Filter, which OrderOutbox to fetch.
     */
    where: OrderOutboxWhereUniqueInput
  }

  /**
   * OrderOutbox findFirst
   */
  export type OrderOutboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOutbox
     */
    select?: OrderOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOutbox
     */
    omit?: OrderOutboxOmit<ExtArgs> | null
    /**
     * Filter, which OrderOutbox to fetch.
     */
    where?: OrderOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderOutboxes to fetch.
     */
    orderBy?: OrderOutboxOrderByWithRelationInput | OrderOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderOutboxes.
     */
    cursor?: OrderOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderOutboxes.
     */
    distinct?: OrderOutboxScalarFieldEnum | OrderOutboxScalarFieldEnum[]
  }

  /**
   * OrderOutbox findFirstOrThrow
   */
  export type OrderOutboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOutbox
     */
    select?: OrderOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOutbox
     */
    omit?: OrderOutboxOmit<ExtArgs> | null
    /**
     * Filter, which OrderOutbox to fetch.
     */
    where?: OrderOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderOutboxes to fetch.
     */
    orderBy?: OrderOutboxOrderByWithRelationInput | OrderOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderOutboxes.
     */
    cursor?: OrderOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderOutboxes.
     */
    distinct?: OrderOutboxScalarFieldEnum | OrderOutboxScalarFieldEnum[]
  }

  /**
   * OrderOutbox findMany
   */
  export type OrderOutboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOutbox
     */
    select?: OrderOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOutbox
     */
    omit?: OrderOutboxOmit<ExtArgs> | null
    /**
     * Filter, which OrderOutboxes to fetch.
     */
    where?: OrderOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderOutboxes to fetch.
     */
    orderBy?: OrderOutboxOrderByWithRelationInput | OrderOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderOutboxes.
     */
    cursor?: OrderOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderOutboxes.
     */
    skip?: number
    distinct?: OrderOutboxScalarFieldEnum | OrderOutboxScalarFieldEnum[]
  }

  /**
   * OrderOutbox create
   */
  export type OrderOutboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOutbox
     */
    select?: OrderOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOutbox
     */
    omit?: OrderOutboxOmit<ExtArgs> | null
    /**
     * The data needed to create a OrderOutbox.
     */
    data: XOR<OrderOutboxCreateInput, OrderOutboxUncheckedCreateInput>
  }

  /**
   * OrderOutbox createMany
   */
  export type OrderOutboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderOutboxes.
     */
    data: OrderOutboxCreateManyInput | OrderOutboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderOutbox createManyAndReturn
   */
  export type OrderOutboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOutbox
     */
    select?: OrderOutboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOutbox
     */
    omit?: OrderOutboxOmit<ExtArgs> | null
    /**
     * The data used to create many OrderOutboxes.
     */
    data: OrderOutboxCreateManyInput | OrderOutboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderOutbox update
   */
  export type OrderOutboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOutbox
     */
    select?: OrderOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOutbox
     */
    omit?: OrderOutboxOmit<ExtArgs> | null
    /**
     * The data needed to update a OrderOutbox.
     */
    data: XOR<OrderOutboxUpdateInput, OrderOutboxUncheckedUpdateInput>
    /**
     * Choose, which OrderOutbox to update.
     */
    where: OrderOutboxWhereUniqueInput
  }

  /**
   * OrderOutbox updateMany
   */
  export type OrderOutboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderOutboxes.
     */
    data: XOR<OrderOutboxUpdateManyMutationInput, OrderOutboxUncheckedUpdateManyInput>
    /**
     * Filter which OrderOutboxes to update
     */
    where?: OrderOutboxWhereInput
    /**
     * Limit how many OrderOutboxes to update.
     */
    limit?: number
  }

  /**
   * OrderOutbox updateManyAndReturn
   */
  export type OrderOutboxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOutbox
     */
    select?: OrderOutboxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOutbox
     */
    omit?: OrderOutboxOmit<ExtArgs> | null
    /**
     * The data used to update OrderOutboxes.
     */
    data: XOR<OrderOutboxUpdateManyMutationInput, OrderOutboxUncheckedUpdateManyInput>
    /**
     * Filter which OrderOutboxes to update
     */
    where?: OrderOutboxWhereInput
    /**
     * Limit how many OrderOutboxes to update.
     */
    limit?: number
  }

  /**
   * OrderOutbox upsert
   */
  export type OrderOutboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOutbox
     */
    select?: OrderOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOutbox
     */
    omit?: OrderOutboxOmit<ExtArgs> | null
    /**
     * The filter to search for the OrderOutbox to update in case it exists.
     */
    where: OrderOutboxWhereUniqueInput
    /**
     * In case the OrderOutbox found by the `where` argument doesn't exist, create a new OrderOutbox with this data.
     */
    create: XOR<OrderOutboxCreateInput, OrderOutboxUncheckedCreateInput>
    /**
     * In case the OrderOutbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderOutboxUpdateInput, OrderOutboxUncheckedUpdateInput>
  }

  /**
   * OrderOutbox delete
   */
  export type OrderOutboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOutbox
     */
    select?: OrderOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOutbox
     */
    omit?: OrderOutboxOmit<ExtArgs> | null
    /**
     * Filter which OrderOutbox to delete.
     */
    where: OrderOutboxWhereUniqueInput
  }

  /**
   * OrderOutbox deleteMany
   */
  export type OrderOutboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderOutboxes to delete
     */
    where?: OrderOutboxWhereInput
    /**
     * Limit how many OrderOutboxes to delete.
     */
    limit?: number
  }

  /**
   * OrderOutbox without action
   */
  export type OrderOutboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOutbox
     */
    select?: OrderOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOutbox
     */
    omit?: OrderOutboxOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrderScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    zipCode: 'zipCode',
    city: 'city',
    dayOfWeek: 'dayOfWeek',
    fromTime: 'fromTime',
    toTime: 'toTime',
    status: 'status',
    cleanerId: 'cleanerId',
    clarifications: 'clarifications'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderInvitationScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    cleanerProfileId: 'cleanerProfileId',
    cleanerName: 'cleanerName',
    customer_decision: 'customer_decision',
    cleaner_status: 'cleaner_status',
    rating: 'rating',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type OrderInvitationScalarFieldEnum = (typeof OrderInvitationScalarFieldEnum)[keyof typeof OrderInvitationScalarFieldEnum]


  export const OrderOutboxScalarFieldEnum: {
    id: 'id',
    aggregateType: 'aggregateType',
    aggregateId: 'aggregateId',
    payload: 'payload',
    createdAt: 'createdAt'
  };

  export type OrderOutboxScalarFieldEnum = (typeof OrderOutboxScalarFieldEnum)[keyof typeof OrderOutboxScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'CustomerDecision'
   */
  export type EnumCustomerDecisionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CustomerDecision'>
    


  /**
   * Reference to a field of type 'CustomerDecision[]'
   */
  export type ListEnumCustomerDecisionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CustomerDecision[]'>
    


  /**
   * Reference to a field of type 'CleanerStatus'
   */
  export type EnumCleanerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CleanerStatus'>
    


  /**
   * Reference to a field of type 'CleanerStatus[]'
   */
  export type ListEnumCleanerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CleanerStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'InvitationStatus'
   */
  export type EnumInvitationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvitationStatus'>
    


  /**
   * Reference to a field of type 'InvitationStatus[]'
   */
  export type ListEnumInvitationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvitationStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    customerId?: IntFilter<"Order"> | number
    zipCode?: IntFilter<"Order"> | number
    city?: StringFilter<"Order"> | string
    dayOfWeek?: IntFilter<"Order"> | number
    fromTime?: StringFilter<"Order"> | string
    toTime?: StringFilter<"Order"> | string
    status?: EnumOrderStatusNullableFilter<"Order"> | $Enums.OrderStatus | null
    cleanerId?: IntNullableFilter<"Order"> | number | null
    clarifications?: StringNullableFilter<"Order"> | string | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    zipCode?: SortOrder
    city?: SortOrder
    dayOfWeek?: SortOrder
    fromTime?: SortOrder
    toTime?: SortOrder
    status?: SortOrderInput | SortOrder
    cleanerId?: SortOrderInput | SortOrder
    clarifications?: SortOrderInput | SortOrder
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    customerId?: IntFilter<"Order"> | number
    zipCode?: IntFilter<"Order"> | number
    city?: StringFilter<"Order"> | string
    dayOfWeek?: IntFilter<"Order"> | number
    fromTime?: StringFilter<"Order"> | string
    toTime?: StringFilter<"Order"> | string
    status?: EnumOrderStatusNullableFilter<"Order"> | $Enums.OrderStatus | null
    cleanerId?: IntNullableFilter<"Order"> | number | null
    clarifications?: StringNullableFilter<"Order"> | string | null
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    zipCode?: SortOrder
    city?: SortOrder
    dayOfWeek?: SortOrder
    fromTime?: SortOrder
    toTime?: SortOrder
    status?: SortOrderInput | SortOrder
    cleanerId?: SortOrderInput | SortOrder
    clarifications?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    customerId?: IntWithAggregatesFilter<"Order"> | number
    zipCode?: IntWithAggregatesFilter<"Order"> | number
    city?: StringWithAggregatesFilter<"Order"> | string
    dayOfWeek?: IntWithAggregatesFilter<"Order"> | number
    fromTime?: StringWithAggregatesFilter<"Order"> | string
    toTime?: StringWithAggregatesFilter<"Order"> | string
    status?: EnumOrderStatusNullableWithAggregatesFilter<"Order"> | $Enums.OrderStatus | null
    cleanerId?: IntNullableWithAggregatesFilter<"Order"> | number | null
    clarifications?: StringNullableWithAggregatesFilter<"Order"> | string | null
  }

  export type OrderInvitationWhereInput = {
    AND?: OrderInvitationWhereInput | OrderInvitationWhereInput[]
    OR?: OrderInvitationWhereInput[]
    NOT?: OrderInvitationWhereInput | OrderInvitationWhereInput[]
    id?: IntFilter<"OrderInvitation"> | number
    orderId?: IntFilter<"OrderInvitation"> | number
    cleanerProfileId?: IntFilter<"OrderInvitation"> | number
    cleanerName?: StringFilter<"OrderInvitation"> | string
    customer_decision?: EnumCustomerDecisionFilter<"OrderInvitation"> | $Enums.CustomerDecision
    cleaner_status?: EnumCleanerStatusFilter<"OrderInvitation"> | $Enums.CleanerStatus
    rating?: FloatFilter<"OrderInvitation"> | number
    status?: EnumInvitationStatusFilter<"OrderInvitation"> | $Enums.InvitationStatus
    createdAt?: DateTimeFilter<"OrderInvitation"> | Date | string
  }

  export type OrderInvitationOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    cleanerProfileId?: SortOrder
    cleanerName?: SortOrder
    customer_decision?: SortOrder
    cleaner_status?: SortOrder
    rating?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderInvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    orderId_cleanerProfileId?: OrderInvitationOrderIdCleanerProfileIdCompoundUniqueInput
    AND?: OrderInvitationWhereInput | OrderInvitationWhereInput[]
    OR?: OrderInvitationWhereInput[]
    NOT?: OrderInvitationWhereInput | OrderInvitationWhereInput[]
    orderId?: IntFilter<"OrderInvitation"> | number
    cleanerProfileId?: IntFilter<"OrderInvitation"> | number
    cleanerName?: StringFilter<"OrderInvitation"> | string
    customer_decision?: EnumCustomerDecisionFilter<"OrderInvitation"> | $Enums.CustomerDecision
    cleaner_status?: EnumCleanerStatusFilter<"OrderInvitation"> | $Enums.CleanerStatus
    rating?: FloatFilter<"OrderInvitation"> | number
    status?: EnumInvitationStatusFilter<"OrderInvitation"> | $Enums.InvitationStatus
    createdAt?: DateTimeFilter<"OrderInvitation"> | Date | string
  }, "id" | "orderId_cleanerProfileId">

  export type OrderInvitationOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    cleanerProfileId?: SortOrder
    cleanerName?: SortOrder
    customer_decision?: SortOrder
    cleaner_status?: SortOrder
    rating?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: OrderInvitationCountOrderByAggregateInput
    _avg?: OrderInvitationAvgOrderByAggregateInput
    _max?: OrderInvitationMaxOrderByAggregateInput
    _min?: OrderInvitationMinOrderByAggregateInput
    _sum?: OrderInvitationSumOrderByAggregateInput
  }

  export type OrderInvitationScalarWhereWithAggregatesInput = {
    AND?: OrderInvitationScalarWhereWithAggregatesInput | OrderInvitationScalarWhereWithAggregatesInput[]
    OR?: OrderInvitationScalarWhereWithAggregatesInput[]
    NOT?: OrderInvitationScalarWhereWithAggregatesInput | OrderInvitationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderInvitation"> | number
    orderId?: IntWithAggregatesFilter<"OrderInvitation"> | number
    cleanerProfileId?: IntWithAggregatesFilter<"OrderInvitation"> | number
    cleanerName?: StringWithAggregatesFilter<"OrderInvitation"> | string
    customer_decision?: EnumCustomerDecisionWithAggregatesFilter<"OrderInvitation"> | $Enums.CustomerDecision
    cleaner_status?: EnumCleanerStatusWithAggregatesFilter<"OrderInvitation"> | $Enums.CleanerStatus
    rating?: FloatWithAggregatesFilter<"OrderInvitation"> | number
    status?: EnumInvitationStatusWithAggregatesFilter<"OrderInvitation"> | $Enums.InvitationStatus
    createdAt?: DateTimeWithAggregatesFilter<"OrderInvitation"> | Date | string
  }

  export type OrderOutboxWhereInput = {
    AND?: OrderOutboxWhereInput | OrderOutboxWhereInput[]
    OR?: OrderOutboxWhereInput[]
    NOT?: OrderOutboxWhereInput | OrderOutboxWhereInput[]
    id?: StringFilter<"OrderOutbox"> | string
    aggregateType?: StringFilter<"OrderOutbox"> | string
    aggregateId?: IntFilter<"OrderOutbox"> | number
    payload?: JsonFilter<"OrderOutbox">
    createdAt?: DateTimeFilter<"OrderOutbox"> | Date | string
  }

  export type OrderOutboxOrderByWithRelationInput = {
    id?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderOutboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderOutboxWhereInput | OrderOutboxWhereInput[]
    OR?: OrderOutboxWhereInput[]
    NOT?: OrderOutboxWhereInput | OrderOutboxWhereInput[]
    aggregateType?: StringFilter<"OrderOutbox"> | string
    aggregateId?: IntFilter<"OrderOutbox"> | number
    payload?: JsonFilter<"OrderOutbox">
    createdAt?: DateTimeFilter<"OrderOutbox"> | Date | string
  }, "id">

  export type OrderOutboxOrderByWithAggregationInput = {
    id?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
    _count?: OrderOutboxCountOrderByAggregateInput
    _avg?: OrderOutboxAvgOrderByAggregateInput
    _max?: OrderOutboxMaxOrderByAggregateInput
    _min?: OrderOutboxMinOrderByAggregateInput
    _sum?: OrderOutboxSumOrderByAggregateInput
  }

  export type OrderOutboxScalarWhereWithAggregatesInput = {
    AND?: OrderOutboxScalarWhereWithAggregatesInput | OrderOutboxScalarWhereWithAggregatesInput[]
    OR?: OrderOutboxScalarWhereWithAggregatesInput[]
    NOT?: OrderOutboxScalarWhereWithAggregatesInput | OrderOutboxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderOutbox"> | string
    aggregateType?: StringWithAggregatesFilter<"OrderOutbox"> | string
    aggregateId?: IntWithAggregatesFilter<"OrderOutbox"> | number
    payload?: JsonWithAggregatesFilter<"OrderOutbox">
    createdAt?: DateTimeWithAggregatesFilter<"OrderOutbox"> | Date | string
  }

  export type OrderCreateInput = {
    customerId: number
    zipCode: number
    city: string
    dayOfWeek: number
    fromTime: string
    toTime: string
    status?: $Enums.OrderStatus | null
    cleanerId?: number | null
    clarifications?: string | null
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    customerId: number
    zipCode: number
    city: string
    dayOfWeek: number
    fromTime: string
    toTime: string
    status?: $Enums.OrderStatus | null
    cleanerId?: number | null
    clarifications?: string | null
  }

  export type OrderUpdateInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    zipCode?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    fromTime?: StringFieldUpdateOperationsInput | string
    toTime?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus | null
    cleanerId?: NullableIntFieldUpdateOperationsInput | number | null
    clarifications?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    zipCode?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    fromTime?: StringFieldUpdateOperationsInput | string
    toTime?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus | null
    cleanerId?: NullableIntFieldUpdateOperationsInput | number | null
    clarifications?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderCreateManyInput = {
    id?: number
    customerId: number
    zipCode: number
    city: string
    dayOfWeek: number
    fromTime: string
    toTime: string
    status?: $Enums.OrderStatus | null
    cleanerId?: number | null
    clarifications?: string | null
  }

  export type OrderUpdateManyMutationInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    zipCode?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    fromTime?: StringFieldUpdateOperationsInput | string
    toTime?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus | null
    cleanerId?: NullableIntFieldUpdateOperationsInput | number | null
    clarifications?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    zipCode?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    fromTime?: StringFieldUpdateOperationsInput | string
    toTime?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus | null
    cleanerId?: NullableIntFieldUpdateOperationsInput | number | null
    clarifications?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderInvitationCreateInput = {
    orderId: number
    cleanerProfileId: number
    cleanerName: string
    customer_decision?: $Enums.CustomerDecision
    cleaner_status?: $Enums.CleanerStatus
    rating: number
    status?: $Enums.InvitationStatus
    createdAt?: Date | string
  }

  export type OrderInvitationUncheckedCreateInput = {
    id?: number
    orderId: number
    cleanerProfileId: number
    cleanerName: string
    customer_decision?: $Enums.CustomerDecision
    cleaner_status?: $Enums.CleanerStatus
    rating: number
    status?: $Enums.InvitationStatus
    createdAt?: Date | string
  }

  export type OrderInvitationUpdateInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    cleanerProfileId?: IntFieldUpdateOperationsInput | number
    cleanerName?: StringFieldUpdateOperationsInput | string
    customer_decision?: EnumCustomerDecisionFieldUpdateOperationsInput | $Enums.CustomerDecision
    cleaner_status?: EnumCleanerStatusFieldUpdateOperationsInput | $Enums.CleanerStatus
    rating?: FloatFieldUpdateOperationsInput | number
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderInvitationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    cleanerProfileId?: IntFieldUpdateOperationsInput | number
    cleanerName?: StringFieldUpdateOperationsInput | string
    customer_decision?: EnumCustomerDecisionFieldUpdateOperationsInput | $Enums.CustomerDecision
    cleaner_status?: EnumCleanerStatusFieldUpdateOperationsInput | $Enums.CleanerStatus
    rating?: FloatFieldUpdateOperationsInput | number
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderInvitationCreateManyInput = {
    id?: number
    orderId: number
    cleanerProfileId: number
    cleanerName: string
    customer_decision?: $Enums.CustomerDecision
    cleaner_status?: $Enums.CleanerStatus
    rating: number
    status?: $Enums.InvitationStatus
    createdAt?: Date | string
  }

  export type OrderInvitationUpdateManyMutationInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    cleanerProfileId?: IntFieldUpdateOperationsInput | number
    cleanerName?: StringFieldUpdateOperationsInput | string
    customer_decision?: EnumCustomerDecisionFieldUpdateOperationsInput | $Enums.CustomerDecision
    cleaner_status?: EnumCleanerStatusFieldUpdateOperationsInput | $Enums.CleanerStatus
    rating?: FloatFieldUpdateOperationsInput | number
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderInvitationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    cleanerProfileId?: IntFieldUpdateOperationsInput | number
    cleanerName?: StringFieldUpdateOperationsInput | string
    customer_decision?: EnumCustomerDecisionFieldUpdateOperationsInput | $Enums.CustomerDecision
    cleaner_status?: EnumCleanerStatusFieldUpdateOperationsInput | $Enums.CleanerStatus
    rating?: FloatFieldUpdateOperationsInput | number
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderOutboxCreateInput = {
    id?: string
    aggregateType: string
    aggregateId: number
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type OrderOutboxUncheckedCreateInput = {
    id?: string
    aggregateType: string
    aggregateId: number
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type OrderOutboxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aggregateType?: StringFieldUpdateOperationsInput | string
    aggregateId?: IntFieldUpdateOperationsInput | number
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderOutboxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aggregateType?: StringFieldUpdateOperationsInput | string
    aggregateId?: IntFieldUpdateOperationsInput | number
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderOutboxCreateManyInput = {
    id?: string
    aggregateType: string
    aggregateId: number
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type OrderOutboxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    aggregateType?: StringFieldUpdateOperationsInput | string
    aggregateId?: IntFieldUpdateOperationsInput | number
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderOutboxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    aggregateType?: StringFieldUpdateOperationsInput | string
    aggregateId?: IntFieldUpdateOperationsInput | number
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumOrderStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOrderStatusNullableFilter<$PrismaModel> | $Enums.OrderStatus | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    zipCode?: SortOrder
    city?: SortOrder
    dayOfWeek?: SortOrder
    fromTime?: SortOrder
    toTime?: SortOrder
    status?: SortOrder
    cleanerId?: SortOrder
    clarifications?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    zipCode?: SortOrder
    dayOfWeek?: SortOrder
    cleanerId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    zipCode?: SortOrder
    city?: SortOrder
    dayOfWeek?: SortOrder
    fromTime?: SortOrder
    toTime?: SortOrder
    status?: SortOrder
    cleanerId?: SortOrder
    clarifications?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    zipCode?: SortOrder
    city?: SortOrder
    dayOfWeek?: SortOrder
    fromTime?: SortOrder
    toTime?: SortOrder
    status?: SortOrder
    cleanerId?: SortOrder
    clarifications?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    zipCode?: SortOrder
    dayOfWeek?: SortOrder
    cleanerId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumOrderStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOrderStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumCustomerDecisionFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerDecision | EnumCustomerDecisionFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerDecision[] | ListEnumCustomerDecisionFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerDecision[] | ListEnumCustomerDecisionFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerDecisionFilter<$PrismaModel> | $Enums.CustomerDecision
  }

  export type EnumCleanerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CleanerStatus | EnumCleanerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CleanerStatus[] | ListEnumCleanerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CleanerStatus[] | ListEnumCleanerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCleanerStatusFilter<$PrismaModel> | $Enums.CleanerStatus
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumInvitationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusFilter<$PrismaModel> | $Enums.InvitationStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrderInvitationOrderIdCleanerProfileIdCompoundUniqueInput = {
    orderId: number
    cleanerProfileId: number
  }

  export type OrderInvitationCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    cleanerProfileId?: SortOrder
    cleanerName?: SortOrder
    customer_decision?: SortOrder
    cleaner_status?: SortOrder
    rating?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderInvitationAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    cleanerProfileId?: SortOrder
    rating?: SortOrder
  }

  export type OrderInvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    cleanerProfileId?: SortOrder
    cleanerName?: SortOrder
    customer_decision?: SortOrder
    cleaner_status?: SortOrder
    rating?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderInvitationMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    cleanerProfileId?: SortOrder
    cleanerName?: SortOrder
    customer_decision?: SortOrder
    cleaner_status?: SortOrder
    rating?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderInvitationSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    cleanerProfileId?: SortOrder
    rating?: SortOrder
  }

  export type EnumCustomerDecisionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerDecision | EnumCustomerDecisionFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerDecision[] | ListEnumCustomerDecisionFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerDecision[] | ListEnumCustomerDecisionFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerDecisionWithAggregatesFilter<$PrismaModel> | $Enums.CustomerDecision
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCustomerDecisionFilter<$PrismaModel>
    _max?: NestedEnumCustomerDecisionFilter<$PrismaModel>
  }

  export type EnumCleanerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CleanerStatus | EnumCleanerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CleanerStatus[] | ListEnumCleanerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CleanerStatus[] | ListEnumCleanerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCleanerStatusWithAggregatesFilter<$PrismaModel> | $Enums.CleanerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCleanerStatusFilter<$PrismaModel>
    _max?: NestedEnumCleanerStatusFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumInvitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvitationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvitationStatusFilter<$PrismaModel>
    _max?: NestedEnumInvitationStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type OrderOutboxCountOrderByAggregateInput = {
    id?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderOutboxAvgOrderByAggregateInput = {
    aggregateId?: SortOrder
  }

  export type OrderOutboxMaxOrderByAggregateInput = {
    id?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderOutboxMinOrderByAggregateInput = {
    id?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderOutboxSumOrderByAggregateInput = {
    aggregateId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableEnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumCustomerDecisionFieldUpdateOperationsInput = {
    set?: $Enums.CustomerDecision
  }

  export type EnumCleanerStatusFieldUpdateOperationsInput = {
    set?: $Enums.CleanerStatus
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumInvitationStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvitationStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumOrderStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOrderStatusNullableFilter<$PrismaModel> | $Enums.OrderStatus | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOrderStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumCustomerDecisionFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerDecision | EnumCustomerDecisionFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerDecision[] | ListEnumCustomerDecisionFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerDecision[] | ListEnumCustomerDecisionFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerDecisionFilter<$PrismaModel> | $Enums.CustomerDecision
  }

  export type NestedEnumCleanerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CleanerStatus | EnumCleanerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CleanerStatus[] | ListEnumCleanerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CleanerStatus[] | ListEnumCleanerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCleanerStatusFilter<$PrismaModel> | $Enums.CleanerStatus
  }

  export type NestedEnumInvitationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusFilter<$PrismaModel> | $Enums.InvitationStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumCustomerDecisionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerDecision | EnumCustomerDecisionFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerDecision[] | ListEnumCustomerDecisionFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerDecision[] | ListEnumCustomerDecisionFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerDecisionWithAggregatesFilter<$PrismaModel> | $Enums.CustomerDecision
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCustomerDecisionFilter<$PrismaModel>
    _max?: NestedEnumCustomerDecisionFilter<$PrismaModel>
  }

  export type NestedEnumCleanerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CleanerStatus | EnumCleanerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CleanerStatus[] | ListEnumCleanerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CleanerStatus[] | ListEnumCleanerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCleanerStatusWithAggregatesFilter<$PrismaModel> | $Enums.CleanerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCleanerStatusFilter<$PrismaModel>
    _max?: NestedEnumCleanerStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvitationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvitationStatusFilter<$PrismaModel>
    _max?: NestedEnumInvitationStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}