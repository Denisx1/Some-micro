
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
 * Model CleanerProfile
 * 
 */
export type CleanerProfile = $Result.DefaultSelection<Prisma.$CleanerProfilePayload>
/**
 * Model CleanerScheduleDay
 * 
 */
export type CleanerScheduleDay = $Result.DefaultSelection<Prisma.$CleanerScheduleDayPayload>
/**
 * Model CleanerScheduleSlot
 * 
 */
export type CleanerScheduleSlot = $Result.DefaultSelection<Prisma.$CleanerScheduleSlotPayload>
/**
 * Model CleanerReview
 * 
 */
export type CleanerReview = $Result.DefaultSelection<Prisma.$CleanerReviewPayload>
/**
 * Model CleanerJob
 * 
 */
export type CleanerJob = $Result.DefaultSelection<Prisma.$CleanerJobPayload>
/**
 * Model CleanerOutbox
 * 
 */
export type CleanerOutbox = $Result.DefaultSelection<Prisma.$CleanerOutboxPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OutboxCleanerStatus: {
  NEW: 'NEW',
  SENT: 'SENT',
  ERROR: 'ERROR'
};

export type OutboxCleanerStatus = (typeof OutboxCleanerStatus)[keyof typeof OutboxCleanerStatus]


export const JobStatus: {
  ACCEPTED: 'ACCEPTED',
  INVITED: 'INVITED',
  DECLINED: 'DECLINED',
  EXPIRED: 'EXPIRED'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]

}

export type OutboxCleanerStatus = $Enums.OutboxCleanerStatus

export const OutboxCleanerStatus: typeof $Enums.OutboxCleanerStatus

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CleanerProfiles
 * const cleanerProfiles = await prisma.cleanerProfile.findMany()
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
   * // Fetch zero or more CleanerProfiles
   * const cleanerProfiles = await prisma.cleanerProfile.findMany()
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
   * `prisma.cleanerProfile`: Exposes CRUD operations for the **CleanerProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CleanerProfiles
    * const cleanerProfiles = await prisma.cleanerProfile.findMany()
    * ```
    */
  get cleanerProfile(): Prisma.CleanerProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cleanerScheduleDay`: Exposes CRUD operations for the **CleanerScheduleDay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CleanerScheduleDays
    * const cleanerScheduleDays = await prisma.cleanerScheduleDay.findMany()
    * ```
    */
  get cleanerScheduleDay(): Prisma.CleanerScheduleDayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cleanerScheduleSlot`: Exposes CRUD operations for the **CleanerScheduleSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CleanerScheduleSlots
    * const cleanerScheduleSlots = await prisma.cleanerScheduleSlot.findMany()
    * ```
    */
  get cleanerScheduleSlot(): Prisma.CleanerScheduleSlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cleanerReview`: Exposes CRUD operations for the **CleanerReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CleanerReviews
    * const cleanerReviews = await prisma.cleanerReview.findMany()
    * ```
    */
  get cleanerReview(): Prisma.CleanerReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cleanerJob`: Exposes CRUD operations for the **CleanerJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CleanerJobs
    * const cleanerJobs = await prisma.cleanerJob.findMany()
    * ```
    */
  get cleanerJob(): Prisma.CleanerJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cleanerOutbox`: Exposes CRUD operations for the **CleanerOutbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CleanerOutboxes
    * const cleanerOutboxes = await prisma.cleanerOutbox.findMany()
    * ```
    */
  get cleanerOutbox(): Prisma.CleanerOutboxDelegate<ExtArgs, ClientOptions>;
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
    CleanerProfile: 'CleanerProfile',
    CleanerScheduleDay: 'CleanerScheduleDay',
    CleanerScheduleSlot: 'CleanerScheduleSlot',
    CleanerReview: 'CleanerReview',
    CleanerJob: 'CleanerJob',
    CleanerOutbox: 'CleanerOutbox'
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
      modelProps: "cleanerProfile" | "cleanerScheduleDay" | "cleanerScheduleSlot" | "cleanerReview" | "cleanerJob" | "cleanerOutbox"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CleanerProfile: {
        payload: Prisma.$CleanerProfilePayload<ExtArgs>
        fields: Prisma.CleanerProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CleanerProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CleanerProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerProfilePayload>
          }
          findFirst: {
            args: Prisma.CleanerProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CleanerProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerProfilePayload>
          }
          findMany: {
            args: Prisma.CleanerProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerProfilePayload>[]
          }
          create: {
            args: Prisma.CleanerProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerProfilePayload>
          }
          createMany: {
            args: Prisma.CleanerProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CleanerProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerProfilePayload>[]
          }
          delete: {
            args: Prisma.CleanerProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerProfilePayload>
          }
          update: {
            args: Prisma.CleanerProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerProfilePayload>
          }
          deleteMany: {
            args: Prisma.CleanerProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CleanerProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CleanerProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerProfilePayload>[]
          }
          upsert: {
            args: Prisma.CleanerProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerProfilePayload>
          }
          aggregate: {
            args: Prisma.CleanerProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCleanerProfile>
          }
          groupBy: {
            args: Prisma.CleanerProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CleanerProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CleanerProfileCountArgs<ExtArgs>
            result: $Utils.Optional<CleanerProfileCountAggregateOutputType> | number
          }
        }
      }
      CleanerScheduleDay: {
        payload: Prisma.$CleanerScheduleDayPayload<ExtArgs>
        fields: Prisma.CleanerScheduleDayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CleanerScheduleDayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerScheduleDayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CleanerScheduleDayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerScheduleDayPayload>
          }
          findFirst: {
            args: Prisma.CleanerScheduleDayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerScheduleDayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CleanerScheduleDayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerScheduleDayPayload>
          }
          findMany: {
            args: Prisma.CleanerScheduleDayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerScheduleDayPayload>[]
          }
          create: {
            args: Prisma.CleanerScheduleDayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerScheduleDayPayload>
          }
          createMany: {
            args: Prisma.CleanerScheduleDayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CleanerScheduleDayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerScheduleDayPayload>[]
          }
          delete: {
            args: Prisma.CleanerScheduleDayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerScheduleDayPayload>
          }
          update: {
            args: Prisma.CleanerScheduleDayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerScheduleDayPayload>
          }
          deleteMany: {
            args: Prisma.CleanerScheduleDayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CleanerScheduleDayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CleanerScheduleDayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerScheduleDayPayload>[]
          }
          upsert: {
            args: Prisma.CleanerScheduleDayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerScheduleDayPayload>
          }
          aggregate: {
            args: Prisma.CleanerScheduleDayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCleanerScheduleDay>
          }
          groupBy: {
            args: Prisma.CleanerScheduleDayGroupByArgs<ExtArgs>
            result: $Utils.Optional<CleanerScheduleDayGroupByOutputType>[]
          }
          count: {
            args: Prisma.CleanerScheduleDayCountArgs<ExtArgs>
            result: $Utils.Optional<CleanerScheduleDayCountAggregateOutputType> | number
          }
        }
      }
      CleanerScheduleSlot: {
        payload: Prisma.$CleanerScheduleSlotPayload<ExtArgs>
        fields: Prisma.CleanerScheduleSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CleanerScheduleSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerScheduleSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CleanerScheduleSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerScheduleSlotPayload>
          }
          findFirst: {
            args: Prisma.CleanerScheduleSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerScheduleSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CleanerScheduleSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerScheduleSlotPayload>
          }
          findMany: {
            args: Prisma.CleanerScheduleSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerScheduleSlotPayload>[]
          }
          create: {
            args: Prisma.CleanerScheduleSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerScheduleSlotPayload>
          }
          createMany: {
            args: Prisma.CleanerScheduleSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CleanerScheduleSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerScheduleSlotPayload>[]
          }
          delete: {
            args: Prisma.CleanerScheduleSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerScheduleSlotPayload>
          }
          update: {
            args: Prisma.CleanerScheduleSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerScheduleSlotPayload>
          }
          deleteMany: {
            args: Prisma.CleanerScheduleSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CleanerScheduleSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CleanerScheduleSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerScheduleSlotPayload>[]
          }
          upsert: {
            args: Prisma.CleanerScheduleSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerScheduleSlotPayload>
          }
          aggregate: {
            args: Prisma.CleanerScheduleSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCleanerScheduleSlot>
          }
          groupBy: {
            args: Prisma.CleanerScheduleSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<CleanerScheduleSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.CleanerScheduleSlotCountArgs<ExtArgs>
            result: $Utils.Optional<CleanerScheduleSlotCountAggregateOutputType> | number
          }
        }
      }
      CleanerReview: {
        payload: Prisma.$CleanerReviewPayload<ExtArgs>
        fields: Prisma.CleanerReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CleanerReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CleanerReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerReviewPayload>
          }
          findFirst: {
            args: Prisma.CleanerReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CleanerReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerReviewPayload>
          }
          findMany: {
            args: Prisma.CleanerReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerReviewPayload>[]
          }
          create: {
            args: Prisma.CleanerReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerReviewPayload>
          }
          createMany: {
            args: Prisma.CleanerReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CleanerReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerReviewPayload>[]
          }
          delete: {
            args: Prisma.CleanerReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerReviewPayload>
          }
          update: {
            args: Prisma.CleanerReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerReviewPayload>
          }
          deleteMany: {
            args: Prisma.CleanerReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CleanerReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CleanerReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerReviewPayload>[]
          }
          upsert: {
            args: Prisma.CleanerReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerReviewPayload>
          }
          aggregate: {
            args: Prisma.CleanerReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCleanerReview>
          }
          groupBy: {
            args: Prisma.CleanerReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<CleanerReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.CleanerReviewCountArgs<ExtArgs>
            result: $Utils.Optional<CleanerReviewCountAggregateOutputType> | number
          }
        }
      }
      CleanerJob: {
        payload: Prisma.$CleanerJobPayload<ExtArgs>
        fields: Prisma.CleanerJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CleanerJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CleanerJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerJobPayload>
          }
          findFirst: {
            args: Prisma.CleanerJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CleanerJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerJobPayload>
          }
          findMany: {
            args: Prisma.CleanerJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerJobPayload>[]
          }
          create: {
            args: Prisma.CleanerJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerJobPayload>
          }
          createMany: {
            args: Prisma.CleanerJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CleanerJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerJobPayload>[]
          }
          delete: {
            args: Prisma.CleanerJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerJobPayload>
          }
          update: {
            args: Prisma.CleanerJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerJobPayload>
          }
          deleteMany: {
            args: Prisma.CleanerJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CleanerJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CleanerJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerJobPayload>[]
          }
          upsert: {
            args: Prisma.CleanerJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerJobPayload>
          }
          aggregate: {
            args: Prisma.CleanerJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCleanerJob>
          }
          groupBy: {
            args: Prisma.CleanerJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<CleanerJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.CleanerJobCountArgs<ExtArgs>
            result: $Utils.Optional<CleanerJobCountAggregateOutputType> | number
          }
        }
      }
      CleanerOutbox: {
        payload: Prisma.$CleanerOutboxPayload<ExtArgs>
        fields: Prisma.CleanerOutboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CleanerOutboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerOutboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CleanerOutboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerOutboxPayload>
          }
          findFirst: {
            args: Prisma.CleanerOutboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerOutboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CleanerOutboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerOutboxPayload>
          }
          findMany: {
            args: Prisma.CleanerOutboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerOutboxPayload>[]
          }
          create: {
            args: Prisma.CleanerOutboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerOutboxPayload>
          }
          createMany: {
            args: Prisma.CleanerOutboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CleanerOutboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerOutboxPayload>[]
          }
          delete: {
            args: Prisma.CleanerOutboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerOutboxPayload>
          }
          update: {
            args: Prisma.CleanerOutboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerOutboxPayload>
          }
          deleteMany: {
            args: Prisma.CleanerOutboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CleanerOutboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CleanerOutboxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerOutboxPayload>[]
          }
          upsert: {
            args: Prisma.CleanerOutboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerOutboxPayload>
          }
          aggregate: {
            args: Prisma.CleanerOutboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCleanerOutbox>
          }
          groupBy: {
            args: Prisma.CleanerOutboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<CleanerOutboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.CleanerOutboxCountArgs<ExtArgs>
            result: $Utils.Optional<CleanerOutboxCountAggregateOutputType> | number
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
    cleanerProfile?: CleanerProfileOmit
    cleanerScheduleDay?: CleanerScheduleDayOmit
    cleanerScheduleSlot?: CleanerScheduleSlotOmit
    cleanerReview?: CleanerReviewOmit
    cleanerJob?: CleanerJobOmit
    cleanerOutbox?: CleanerOutboxOmit
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
   * Count Type CleanerProfileCountOutputType
   */

  export type CleanerProfileCountOutputType = {
    schedules: number
    reviews: number
    jobs: number
  }

  export type CleanerProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | CleanerProfileCountOutputTypeCountSchedulesArgs
    reviews?: boolean | CleanerProfileCountOutputTypeCountReviewsArgs
    jobs?: boolean | CleanerProfileCountOutputTypeCountJobsArgs
  }

  // Custom InputTypes
  /**
   * CleanerProfileCountOutputType without action
   */
  export type CleanerProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerProfileCountOutputType
     */
    select?: CleanerProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CleanerProfileCountOutputType without action
   */
  export type CleanerProfileCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CleanerScheduleDayWhereInput
  }

  /**
   * CleanerProfileCountOutputType without action
   */
  export type CleanerProfileCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CleanerReviewWhereInput
  }

  /**
   * CleanerProfileCountOutputType without action
   */
  export type CleanerProfileCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CleanerJobWhereInput
  }


  /**
   * Count Type CleanerScheduleDayCountOutputType
   */

  export type CleanerScheduleDayCountOutputType = {
    slots: number
  }

  export type CleanerScheduleDayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slots?: boolean | CleanerScheduleDayCountOutputTypeCountSlotsArgs
  }

  // Custom InputTypes
  /**
   * CleanerScheduleDayCountOutputType without action
   */
  export type CleanerScheduleDayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleDayCountOutputType
     */
    select?: CleanerScheduleDayCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CleanerScheduleDayCountOutputType without action
   */
  export type CleanerScheduleDayCountOutputTypeCountSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CleanerScheduleSlotWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CleanerProfile
   */

  export type AggregateCleanerProfile = {
    _count: CleanerProfileCountAggregateOutputType | null
    _avg: CleanerProfileAvgAggregateOutputType | null
    _sum: CleanerProfileSumAggregateOutputType | null
    _min: CleanerProfileMinAggregateOutputType | null
    _max: CleanerProfileMaxAggregateOutputType | null
  }

  export type CleanerProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    zipCode: number | null
    experienceYears: number | null
    rating: number | null
  }

  export type CleanerProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
    zipCode: number | null
    experienceYears: number | null
    rating: number | null
  }

  export type CleanerProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    firstName: string | null
    lastName: string | null
    zipCode: number | null
    city: string | null
    experienceYears: number | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
    busy: boolean | null
  }

  export type CleanerProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    firstName: string | null
    lastName: string | null
    zipCode: number | null
    city: string | null
    experienceYears: number | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
    busy: boolean | null
  }

  export type CleanerProfileCountAggregateOutputType = {
    id: number
    userId: number
    firstName: number
    lastName: number
    zipCode: number
    city: number
    experienceYears: number
    rating: number
    createdAt: number
    updatedAt: number
    busy: number
    _all: number
  }


  export type CleanerProfileAvgAggregateInputType = {
    id?: true
    userId?: true
    zipCode?: true
    experienceYears?: true
    rating?: true
  }

  export type CleanerProfileSumAggregateInputType = {
    id?: true
    userId?: true
    zipCode?: true
    experienceYears?: true
    rating?: true
  }

  export type CleanerProfileMinAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    zipCode?: true
    city?: true
    experienceYears?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    busy?: true
  }

  export type CleanerProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    zipCode?: true
    city?: true
    experienceYears?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    busy?: true
  }

  export type CleanerProfileCountAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    zipCode?: true
    city?: true
    experienceYears?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    busy?: true
    _all?: true
  }

  export type CleanerProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CleanerProfile to aggregate.
     */
    where?: CleanerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerProfiles to fetch.
     */
    orderBy?: CleanerProfileOrderByWithRelationInput | CleanerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CleanerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CleanerProfiles
    **/
    _count?: true | CleanerProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CleanerProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CleanerProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CleanerProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CleanerProfileMaxAggregateInputType
  }

  export type GetCleanerProfileAggregateType<T extends CleanerProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateCleanerProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCleanerProfile[P]>
      : GetScalarType<T[P], AggregateCleanerProfile[P]>
  }




  export type CleanerProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CleanerProfileWhereInput
    orderBy?: CleanerProfileOrderByWithAggregationInput | CleanerProfileOrderByWithAggregationInput[]
    by: CleanerProfileScalarFieldEnum[] | CleanerProfileScalarFieldEnum
    having?: CleanerProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CleanerProfileCountAggregateInputType | true
    _avg?: CleanerProfileAvgAggregateInputType
    _sum?: CleanerProfileSumAggregateInputType
    _min?: CleanerProfileMinAggregateInputType
    _max?: CleanerProfileMaxAggregateInputType
  }

  export type CleanerProfileGroupByOutputType = {
    id: number
    userId: number
    firstName: string | null
    lastName: string | null
    zipCode: number | null
    city: string | null
    experienceYears: number | null
    rating: number | null
    createdAt: Date
    updatedAt: Date
    busy: boolean
    _count: CleanerProfileCountAggregateOutputType | null
    _avg: CleanerProfileAvgAggregateOutputType | null
    _sum: CleanerProfileSumAggregateOutputType | null
    _min: CleanerProfileMinAggregateOutputType | null
    _max: CleanerProfileMaxAggregateOutputType | null
  }

  type GetCleanerProfileGroupByPayload<T extends CleanerProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CleanerProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CleanerProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CleanerProfileGroupByOutputType[P]>
            : GetScalarType<T[P], CleanerProfileGroupByOutputType[P]>
        }
      >
    >


  export type CleanerProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    zipCode?: boolean
    city?: boolean
    experienceYears?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    busy?: boolean
    schedules?: boolean | CleanerProfile$schedulesArgs<ExtArgs>
    reviews?: boolean | CleanerProfile$reviewsArgs<ExtArgs>
    jobs?: boolean | CleanerProfile$jobsArgs<ExtArgs>
    _count?: boolean | CleanerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cleanerProfile"]>

  export type CleanerProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    zipCode?: boolean
    city?: boolean
    experienceYears?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    busy?: boolean
  }, ExtArgs["result"]["cleanerProfile"]>

  export type CleanerProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    zipCode?: boolean
    city?: boolean
    experienceYears?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    busy?: boolean
  }, ExtArgs["result"]["cleanerProfile"]>

  export type CleanerProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    zipCode?: boolean
    city?: boolean
    experienceYears?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    busy?: boolean
  }

  export type CleanerProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "firstName" | "lastName" | "zipCode" | "city" | "experienceYears" | "rating" | "createdAt" | "updatedAt" | "busy", ExtArgs["result"]["cleanerProfile"]>
  export type CleanerProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | CleanerProfile$schedulesArgs<ExtArgs>
    reviews?: boolean | CleanerProfile$reviewsArgs<ExtArgs>
    jobs?: boolean | CleanerProfile$jobsArgs<ExtArgs>
    _count?: boolean | CleanerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CleanerProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CleanerProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CleanerProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CleanerProfile"
    objects: {
      schedules: Prisma.$CleanerScheduleDayPayload<ExtArgs>[]
      reviews: Prisma.$CleanerReviewPayload<ExtArgs>[]
      jobs: Prisma.$CleanerJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      firstName: string | null
      lastName: string | null
      zipCode: number | null
      city: string | null
      experienceYears: number | null
      rating: number | null
      createdAt: Date
      updatedAt: Date
      busy: boolean
    }, ExtArgs["result"]["cleanerProfile"]>
    composites: {}
  }

  type CleanerProfileGetPayload<S extends boolean | null | undefined | CleanerProfileDefaultArgs> = $Result.GetResult<Prisma.$CleanerProfilePayload, S>

  type CleanerProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CleanerProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CleanerProfileCountAggregateInputType | true
    }

  export interface CleanerProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CleanerProfile'], meta: { name: 'CleanerProfile' } }
    /**
     * Find zero or one CleanerProfile that matches the filter.
     * @param {CleanerProfileFindUniqueArgs} args - Arguments to find a CleanerProfile
     * @example
     * // Get one CleanerProfile
     * const cleanerProfile = await prisma.cleanerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CleanerProfileFindUniqueArgs>(args: SelectSubset<T, CleanerProfileFindUniqueArgs<ExtArgs>>): Prisma__CleanerProfileClient<$Result.GetResult<Prisma.$CleanerProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CleanerProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CleanerProfileFindUniqueOrThrowArgs} args - Arguments to find a CleanerProfile
     * @example
     * // Get one CleanerProfile
     * const cleanerProfile = await prisma.cleanerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CleanerProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, CleanerProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CleanerProfileClient<$Result.GetResult<Prisma.$CleanerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CleanerProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerProfileFindFirstArgs} args - Arguments to find a CleanerProfile
     * @example
     * // Get one CleanerProfile
     * const cleanerProfile = await prisma.cleanerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CleanerProfileFindFirstArgs>(args?: SelectSubset<T, CleanerProfileFindFirstArgs<ExtArgs>>): Prisma__CleanerProfileClient<$Result.GetResult<Prisma.$CleanerProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CleanerProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerProfileFindFirstOrThrowArgs} args - Arguments to find a CleanerProfile
     * @example
     * // Get one CleanerProfile
     * const cleanerProfile = await prisma.cleanerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CleanerProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, CleanerProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CleanerProfileClient<$Result.GetResult<Prisma.$CleanerProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CleanerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CleanerProfiles
     * const cleanerProfiles = await prisma.cleanerProfile.findMany()
     * 
     * // Get first 10 CleanerProfiles
     * const cleanerProfiles = await prisma.cleanerProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cleanerProfileWithIdOnly = await prisma.cleanerProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CleanerProfileFindManyArgs>(args?: SelectSubset<T, CleanerProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CleanerProfile.
     * @param {CleanerProfileCreateArgs} args - Arguments to create a CleanerProfile.
     * @example
     * // Create one CleanerProfile
     * const CleanerProfile = await prisma.cleanerProfile.create({
     *   data: {
     *     // ... data to create a CleanerProfile
     *   }
     * })
     * 
     */
    create<T extends CleanerProfileCreateArgs>(args: SelectSubset<T, CleanerProfileCreateArgs<ExtArgs>>): Prisma__CleanerProfileClient<$Result.GetResult<Prisma.$CleanerProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CleanerProfiles.
     * @param {CleanerProfileCreateManyArgs} args - Arguments to create many CleanerProfiles.
     * @example
     * // Create many CleanerProfiles
     * const cleanerProfile = await prisma.cleanerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CleanerProfileCreateManyArgs>(args?: SelectSubset<T, CleanerProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CleanerProfiles and returns the data saved in the database.
     * @param {CleanerProfileCreateManyAndReturnArgs} args - Arguments to create many CleanerProfiles.
     * @example
     * // Create many CleanerProfiles
     * const cleanerProfile = await prisma.cleanerProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CleanerProfiles and only return the `id`
     * const cleanerProfileWithIdOnly = await prisma.cleanerProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CleanerProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, CleanerProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CleanerProfile.
     * @param {CleanerProfileDeleteArgs} args - Arguments to delete one CleanerProfile.
     * @example
     * // Delete one CleanerProfile
     * const CleanerProfile = await prisma.cleanerProfile.delete({
     *   where: {
     *     // ... filter to delete one CleanerProfile
     *   }
     * })
     * 
     */
    delete<T extends CleanerProfileDeleteArgs>(args: SelectSubset<T, CleanerProfileDeleteArgs<ExtArgs>>): Prisma__CleanerProfileClient<$Result.GetResult<Prisma.$CleanerProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CleanerProfile.
     * @param {CleanerProfileUpdateArgs} args - Arguments to update one CleanerProfile.
     * @example
     * // Update one CleanerProfile
     * const cleanerProfile = await prisma.cleanerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CleanerProfileUpdateArgs>(args: SelectSubset<T, CleanerProfileUpdateArgs<ExtArgs>>): Prisma__CleanerProfileClient<$Result.GetResult<Prisma.$CleanerProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CleanerProfiles.
     * @param {CleanerProfileDeleteManyArgs} args - Arguments to filter CleanerProfiles to delete.
     * @example
     * // Delete a few CleanerProfiles
     * const { count } = await prisma.cleanerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CleanerProfileDeleteManyArgs>(args?: SelectSubset<T, CleanerProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CleanerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CleanerProfiles
     * const cleanerProfile = await prisma.cleanerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CleanerProfileUpdateManyArgs>(args: SelectSubset<T, CleanerProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CleanerProfiles and returns the data updated in the database.
     * @param {CleanerProfileUpdateManyAndReturnArgs} args - Arguments to update many CleanerProfiles.
     * @example
     * // Update many CleanerProfiles
     * const cleanerProfile = await prisma.cleanerProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CleanerProfiles and only return the `id`
     * const cleanerProfileWithIdOnly = await prisma.cleanerProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends CleanerProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, CleanerProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CleanerProfile.
     * @param {CleanerProfileUpsertArgs} args - Arguments to update or create a CleanerProfile.
     * @example
     * // Update or create a CleanerProfile
     * const cleanerProfile = await prisma.cleanerProfile.upsert({
     *   create: {
     *     // ... data to create a CleanerProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CleanerProfile we want to update
     *   }
     * })
     */
    upsert<T extends CleanerProfileUpsertArgs>(args: SelectSubset<T, CleanerProfileUpsertArgs<ExtArgs>>): Prisma__CleanerProfileClient<$Result.GetResult<Prisma.$CleanerProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CleanerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerProfileCountArgs} args - Arguments to filter CleanerProfiles to count.
     * @example
     * // Count the number of CleanerProfiles
     * const count = await prisma.cleanerProfile.count({
     *   where: {
     *     // ... the filter for the CleanerProfiles we want to count
     *   }
     * })
    **/
    count<T extends CleanerProfileCountArgs>(
      args?: Subset<T, CleanerProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CleanerProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CleanerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CleanerProfileAggregateArgs>(args: Subset<T, CleanerProfileAggregateArgs>): Prisma.PrismaPromise<GetCleanerProfileAggregateType<T>>

    /**
     * Group by CleanerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerProfileGroupByArgs} args - Group by arguments.
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
      T extends CleanerProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CleanerProfileGroupByArgs['orderBy'] }
        : { orderBy?: CleanerProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CleanerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCleanerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CleanerProfile model
   */
  readonly fields: CleanerProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CleanerProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CleanerProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedules<T extends CleanerProfile$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, CleanerProfile$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerScheduleDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends CleanerProfile$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, CleanerProfile$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jobs<T extends CleanerProfile$jobsArgs<ExtArgs> = {}>(args?: Subset<T, CleanerProfile$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CleanerProfile model
   */
  interface CleanerProfileFieldRefs {
    readonly id: FieldRef<"CleanerProfile", 'Int'>
    readonly userId: FieldRef<"CleanerProfile", 'Int'>
    readonly firstName: FieldRef<"CleanerProfile", 'String'>
    readonly lastName: FieldRef<"CleanerProfile", 'String'>
    readonly zipCode: FieldRef<"CleanerProfile", 'Int'>
    readonly city: FieldRef<"CleanerProfile", 'String'>
    readonly experienceYears: FieldRef<"CleanerProfile", 'Int'>
    readonly rating: FieldRef<"CleanerProfile", 'Int'>
    readonly createdAt: FieldRef<"CleanerProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"CleanerProfile", 'DateTime'>
    readonly busy: FieldRef<"CleanerProfile", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * CleanerProfile findUnique
   */
  export type CleanerProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerProfile
     */
    select?: CleanerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerProfile
     */
    omit?: CleanerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerProfileInclude<ExtArgs> | null
    /**
     * Filter, which CleanerProfile to fetch.
     */
    where: CleanerProfileWhereUniqueInput
  }

  /**
   * CleanerProfile findUniqueOrThrow
   */
  export type CleanerProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerProfile
     */
    select?: CleanerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerProfile
     */
    omit?: CleanerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerProfileInclude<ExtArgs> | null
    /**
     * Filter, which CleanerProfile to fetch.
     */
    where: CleanerProfileWhereUniqueInput
  }

  /**
   * CleanerProfile findFirst
   */
  export type CleanerProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerProfile
     */
    select?: CleanerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerProfile
     */
    omit?: CleanerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerProfileInclude<ExtArgs> | null
    /**
     * Filter, which CleanerProfile to fetch.
     */
    where?: CleanerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerProfiles to fetch.
     */
    orderBy?: CleanerProfileOrderByWithRelationInput | CleanerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CleanerProfiles.
     */
    cursor?: CleanerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CleanerProfiles.
     */
    distinct?: CleanerProfileScalarFieldEnum | CleanerProfileScalarFieldEnum[]
  }

  /**
   * CleanerProfile findFirstOrThrow
   */
  export type CleanerProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerProfile
     */
    select?: CleanerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerProfile
     */
    omit?: CleanerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerProfileInclude<ExtArgs> | null
    /**
     * Filter, which CleanerProfile to fetch.
     */
    where?: CleanerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerProfiles to fetch.
     */
    orderBy?: CleanerProfileOrderByWithRelationInput | CleanerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CleanerProfiles.
     */
    cursor?: CleanerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CleanerProfiles.
     */
    distinct?: CleanerProfileScalarFieldEnum | CleanerProfileScalarFieldEnum[]
  }

  /**
   * CleanerProfile findMany
   */
  export type CleanerProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerProfile
     */
    select?: CleanerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerProfile
     */
    omit?: CleanerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerProfileInclude<ExtArgs> | null
    /**
     * Filter, which CleanerProfiles to fetch.
     */
    where?: CleanerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerProfiles to fetch.
     */
    orderBy?: CleanerProfileOrderByWithRelationInput | CleanerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CleanerProfiles.
     */
    cursor?: CleanerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerProfiles.
     */
    skip?: number
    distinct?: CleanerProfileScalarFieldEnum | CleanerProfileScalarFieldEnum[]
  }

  /**
   * CleanerProfile create
   */
  export type CleanerProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerProfile
     */
    select?: CleanerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerProfile
     */
    omit?: CleanerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a CleanerProfile.
     */
    data: XOR<CleanerProfileCreateInput, CleanerProfileUncheckedCreateInput>
  }

  /**
   * CleanerProfile createMany
   */
  export type CleanerProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CleanerProfiles.
     */
    data: CleanerProfileCreateManyInput | CleanerProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CleanerProfile createManyAndReturn
   */
  export type CleanerProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerProfile
     */
    select?: CleanerProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerProfile
     */
    omit?: CleanerProfileOmit<ExtArgs> | null
    /**
     * The data used to create many CleanerProfiles.
     */
    data: CleanerProfileCreateManyInput | CleanerProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CleanerProfile update
   */
  export type CleanerProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerProfile
     */
    select?: CleanerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerProfile
     */
    omit?: CleanerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a CleanerProfile.
     */
    data: XOR<CleanerProfileUpdateInput, CleanerProfileUncheckedUpdateInput>
    /**
     * Choose, which CleanerProfile to update.
     */
    where: CleanerProfileWhereUniqueInput
  }

  /**
   * CleanerProfile updateMany
   */
  export type CleanerProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CleanerProfiles.
     */
    data: XOR<CleanerProfileUpdateManyMutationInput, CleanerProfileUncheckedUpdateManyInput>
    /**
     * Filter which CleanerProfiles to update
     */
    where?: CleanerProfileWhereInput
    /**
     * Limit how many CleanerProfiles to update.
     */
    limit?: number
  }

  /**
   * CleanerProfile updateManyAndReturn
   */
  export type CleanerProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerProfile
     */
    select?: CleanerProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerProfile
     */
    omit?: CleanerProfileOmit<ExtArgs> | null
    /**
     * The data used to update CleanerProfiles.
     */
    data: XOR<CleanerProfileUpdateManyMutationInput, CleanerProfileUncheckedUpdateManyInput>
    /**
     * Filter which CleanerProfiles to update
     */
    where?: CleanerProfileWhereInput
    /**
     * Limit how many CleanerProfiles to update.
     */
    limit?: number
  }

  /**
   * CleanerProfile upsert
   */
  export type CleanerProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerProfile
     */
    select?: CleanerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerProfile
     */
    omit?: CleanerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the CleanerProfile to update in case it exists.
     */
    where: CleanerProfileWhereUniqueInput
    /**
     * In case the CleanerProfile found by the `where` argument doesn't exist, create a new CleanerProfile with this data.
     */
    create: XOR<CleanerProfileCreateInput, CleanerProfileUncheckedCreateInput>
    /**
     * In case the CleanerProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CleanerProfileUpdateInput, CleanerProfileUncheckedUpdateInput>
  }

  /**
   * CleanerProfile delete
   */
  export type CleanerProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerProfile
     */
    select?: CleanerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerProfile
     */
    omit?: CleanerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerProfileInclude<ExtArgs> | null
    /**
     * Filter which CleanerProfile to delete.
     */
    where: CleanerProfileWhereUniqueInput
  }

  /**
   * CleanerProfile deleteMany
   */
  export type CleanerProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CleanerProfiles to delete
     */
    where?: CleanerProfileWhereInput
    /**
     * Limit how many CleanerProfiles to delete.
     */
    limit?: number
  }

  /**
   * CleanerProfile.schedules
   */
  export type CleanerProfile$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleDay
     */
    select?: CleanerScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleDay
     */
    omit?: CleanerScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleDayInclude<ExtArgs> | null
    where?: CleanerScheduleDayWhereInput
    orderBy?: CleanerScheduleDayOrderByWithRelationInput | CleanerScheduleDayOrderByWithRelationInput[]
    cursor?: CleanerScheduleDayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CleanerScheduleDayScalarFieldEnum | CleanerScheduleDayScalarFieldEnum[]
  }

  /**
   * CleanerProfile.reviews
   */
  export type CleanerProfile$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerReview
     */
    select?: CleanerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerReview
     */
    omit?: CleanerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerReviewInclude<ExtArgs> | null
    where?: CleanerReviewWhereInput
    orderBy?: CleanerReviewOrderByWithRelationInput | CleanerReviewOrderByWithRelationInput[]
    cursor?: CleanerReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CleanerReviewScalarFieldEnum | CleanerReviewScalarFieldEnum[]
  }

  /**
   * CleanerProfile.jobs
   */
  export type CleanerProfile$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerJob
     */
    select?: CleanerJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerJob
     */
    omit?: CleanerJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerJobInclude<ExtArgs> | null
    where?: CleanerJobWhereInput
    orderBy?: CleanerJobOrderByWithRelationInput | CleanerJobOrderByWithRelationInput[]
    cursor?: CleanerJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CleanerJobScalarFieldEnum | CleanerJobScalarFieldEnum[]
  }

  /**
   * CleanerProfile without action
   */
  export type CleanerProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerProfile
     */
    select?: CleanerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerProfile
     */
    omit?: CleanerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerProfileInclude<ExtArgs> | null
  }


  /**
   * Model CleanerScheduleDay
   */

  export type AggregateCleanerScheduleDay = {
    _count: CleanerScheduleDayCountAggregateOutputType | null
    _avg: CleanerScheduleDayAvgAggregateOutputType | null
    _sum: CleanerScheduleDaySumAggregateOutputType | null
    _min: CleanerScheduleDayMinAggregateOutputType | null
    _max: CleanerScheduleDayMaxAggregateOutputType | null
  }

  export type CleanerScheduleDayAvgAggregateOutputType = {
    id: number | null
    cleanerProfileId: number | null
    dayOfWeek: number | null
  }

  export type CleanerScheduleDaySumAggregateOutputType = {
    id: number | null
    cleanerProfileId: number | null
    dayOfWeek: number | null
  }

  export type CleanerScheduleDayMinAggregateOutputType = {
    id: number | null
    cleanerProfileId: number | null
    dayOfWeek: number | null
    createdAt: Date | null
  }

  export type CleanerScheduleDayMaxAggregateOutputType = {
    id: number | null
    cleanerProfileId: number | null
    dayOfWeek: number | null
    createdAt: Date | null
  }

  export type CleanerScheduleDayCountAggregateOutputType = {
    id: number
    cleanerProfileId: number
    dayOfWeek: number
    createdAt: number
    _all: number
  }


  export type CleanerScheduleDayAvgAggregateInputType = {
    id?: true
    cleanerProfileId?: true
    dayOfWeek?: true
  }

  export type CleanerScheduleDaySumAggregateInputType = {
    id?: true
    cleanerProfileId?: true
    dayOfWeek?: true
  }

  export type CleanerScheduleDayMinAggregateInputType = {
    id?: true
    cleanerProfileId?: true
    dayOfWeek?: true
    createdAt?: true
  }

  export type CleanerScheduleDayMaxAggregateInputType = {
    id?: true
    cleanerProfileId?: true
    dayOfWeek?: true
    createdAt?: true
  }

  export type CleanerScheduleDayCountAggregateInputType = {
    id?: true
    cleanerProfileId?: true
    dayOfWeek?: true
    createdAt?: true
    _all?: true
  }

  export type CleanerScheduleDayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CleanerScheduleDay to aggregate.
     */
    where?: CleanerScheduleDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerScheduleDays to fetch.
     */
    orderBy?: CleanerScheduleDayOrderByWithRelationInput | CleanerScheduleDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CleanerScheduleDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerScheduleDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerScheduleDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CleanerScheduleDays
    **/
    _count?: true | CleanerScheduleDayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CleanerScheduleDayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CleanerScheduleDaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CleanerScheduleDayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CleanerScheduleDayMaxAggregateInputType
  }

  export type GetCleanerScheduleDayAggregateType<T extends CleanerScheduleDayAggregateArgs> = {
        [P in keyof T & keyof AggregateCleanerScheduleDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCleanerScheduleDay[P]>
      : GetScalarType<T[P], AggregateCleanerScheduleDay[P]>
  }




  export type CleanerScheduleDayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CleanerScheduleDayWhereInput
    orderBy?: CleanerScheduleDayOrderByWithAggregationInput | CleanerScheduleDayOrderByWithAggregationInput[]
    by: CleanerScheduleDayScalarFieldEnum[] | CleanerScheduleDayScalarFieldEnum
    having?: CleanerScheduleDayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CleanerScheduleDayCountAggregateInputType | true
    _avg?: CleanerScheduleDayAvgAggregateInputType
    _sum?: CleanerScheduleDaySumAggregateInputType
    _min?: CleanerScheduleDayMinAggregateInputType
    _max?: CleanerScheduleDayMaxAggregateInputType
  }

  export type CleanerScheduleDayGroupByOutputType = {
    id: number
    cleanerProfileId: number
    dayOfWeek: number
    createdAt: Date | null
    _count: CleanerScheduleDayCountAggregateOutputType | null
    _avg: CleanerScheduleDayAvgAggregateOutputType | null
    _sum: CleanerScheduleDaySumAggregateOutputType | null
    _min: CleanerScheduleDayMinAggregateOutputType | null
    _max: CleanerScheduleDayMaxAggregateOutputType | null
  }

  type GetCleanerScheduleDayGroupByPayload<T extends CleanerScheduleDayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CleanerScheduleDayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CleanerScheduleDayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CleanerScheduleDayGroupByOutputType[P]>
            : GetScalarType<T[P], CleanerScheduleDayGroupByOutputType[P]>
        }
      >
    >


  export type CleanerScheduleDaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cleanerProfileId?: boolean
    dayOfWeek?: boolean
    createdAt?: boolean
    slots?: boolean | CleanerScheduleDay$slotsArgs<ExtArgs>
    cleanerProfile?: boolean | CleanerProfileDefaultArgs<ExtArgs>
    _count?: boolean | CleanerScheduleDayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cleanerScheduleDay"]>

  export type CleanerScheduleDaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cleanerProfileId?: boolean
    dayOfWeek?: boolean
    createdAt?: boolean
    cleanerProfile?: boolean | CleanerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cleanerScheduleDay"]>

  export type CleanerScheduleDaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cleanerProfileId?: boolean
    dayOfWeek?: boolean
    createdAt?: boolean
    cleanerProfile?: boolean | CleanerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cleanerScheduleDay"]>

  export type CleanerScheduleDaySelectScalar = {
    id?: boolean
    cleanerProfileId?: boolean
    dayOfWeek?: boolean
    createdAt?: boolean
  }

  export type CleanerScheduleDayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cleanerProfileId" | "dayOfWeek" | "createdAt", ExtArgs["result"]["cleanerScheduleDay"]>
  export type CleanerScheduleDayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slots?: boolean | CleanerScheduleDay$slotsArgs<ExtArgs>
    cleanerProfile?: boolean | CleanerProfileDefaultArgs<ExtArgs>
    _count?: boolean | CleanerScheduleDayCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CleanerScheduleDayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cleanerProfile?: boolean | CleanerProfileDefaultArgs<ExtArgs>
  }
  export type CleanerScheduleDayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cleanerProfile?: boolean | CleanerProfileDefaultArgs<ExtArgs>
  }

  export type $CleanerScheduleDayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CleanerScheduleDay"
    objects: {
      slots: Prisma.$CleanerScheduleSlotPayload<ExtArgs>[]
      cleanerProfile: Prisma.$CleanerProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cleanerProfileId: number
      dayOfWeek: number
      createdAt: Date | null
    }, ExtArgs["result"]["cleanerScheduleDay"]>
    composites: {}
  }

  type CleanerScheduleDayGetPayload<S extends boolean | null | undefined | CleanerScheduleDayDefaultArgs> = $Result.GetResult<Prisma.$CleanerScheduleDayPayload, S>

  type CleanerScheduleDayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CleanerScheduleDayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CleanerScheduleDayCountAggregateInputType | true
    }

  export interface CleanerScheduleDayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CleanerScheduleDay'], meta: { name: 'CleanerScheduleDay' } }
    /**
     * Find zero or one CleanerScheduleDay that matches the filter.
     * @param {CleanerScheduleDayFindUniqueArgs} args - Arguments to find a CleanerScheduleDay
     * @example
     * // Get one CleanerScheduleDay
     * const cleanerScheduleDay = await prisma.cleanerScheduleDay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CleanerScheduleDayFindUniqueArgs>(args: SelectSubset<T, CleanerScheduleDayFindUniqueArgs<ExtArgs>>): Prisma__CleanerScheduleDayClient<$Result.GetResult<Prisma.$CleanerScheduleDayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CleanerScheduleDay that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CleanerScheduleDayFindUniqueOrThrowArgs} args - Arguments to find a CleanerScheduleDay
     * @example
     * // Get one CleanerScheduleDay
     * const cleanerScheduleDay = await prisma.cleanerScheduleDay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CleanerScheduleDayFindUniqueOrThrowArgs>(args: SelectSubset<T, CleanerScheduleDayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CleanerScheduleDayClient<$Result.GetResult<Prisma.$CleanerScheduleDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CleanerScheduleDay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerScheduleDayFindFirstArgs} args - Arguments to find a CleanerScheduleDay
     * @example
     * // Get one CleanerScheduleDay
     * const cleanerScheduleDay = await prisma.cleanerScheduleDay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CleanerScheduleDayFindFirstArgs>(args?: SelectSubset<T, CleanerScheduleDayFindFirstArgs<ExtArgs>>): Prisma__CleanerScheduleDayClient<$Result.GetResult<Prisma.$CleanerScheduleDayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CleanerScheduleDay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerScheduleDayFindFirstOrThrowArgs} args - Arguments to find a CleanerScheduleDay
     * @example
     * // Get one CleanerScheduleDay
     * const cleanerScheduleDay = await prisma.cleanerScheduleDay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CleanerScheduleDayFindFirstOrThrowArgs>(args?: SelectSubset<T, CleanerScheduleDayFindFirstOrThrowArgs<ExtArgs>>): Prisma__CleanerScheduleDayClient<$Result.GetResult<Prisma.$CleanerScheduleDayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CleanerScheduleDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerScheduleDayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CleanerScheduleDays
     * const cleanerScheduleDays = await prisma.cleanerScheduleDay.findMany()
     * 
     * // Get first 10 CleanerScheduleDays
     * const cleanerScheduleDays = await prisma.cleanerScheduleDay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cleanerScheduleDayWithIdOnly = await prisma.cleanerScheduleDay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CleanerScheduleDayFindManyArgs>(args?: SelectSubset<T, CleanerScheduleDayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerScheduleDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CleanerScheduleDay.
     * @param {CleanerScheduleDayCreateArgs} args - Arguments to create a CleanerScheduleDay.
     * @example
     * // Create one CleanerScheduleDay
     * const CleanerScheduleDay = await prisma.cleanerScheduleDay.create({
     *   data: {
     *     // ... data to create a CleanerScheduleDay
     *   }
     * })
     * 
     */
    create<T extends CleanerScheduleDayCreateArgs>(args: SelectSubset<T, CleanerScheduleDayCreateArgs<ExtArgs>>): Prisma__CleanerScheduleDayClient<$Result.GetResult<Prisma.$CleanerScheduleDayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CleanerScheduleDays.
     * @param {CleanerScheduleDayCreateManyArgs} args - Arguments to create many CleanerScheduleDays.
     * @example
     * // Create many CleanerScheduleDays
     * const cleanerScheduleDay = await prisma.cleanerScheduleDay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CleanerScheduleDayCreateManyArgs>(args?: SelectSubset<T, CleanerScheduleDayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CleanerScheduleDays and returns the data saved in the database.
     * @param {CleanerScheduleDayCreateManyAndReturnArgs} args - Arguments to create many CleanerScheduleDays.
     * @example
     * // Create many CleanerScheduleDays
     * const cleanerScheduleDay = await prisma.cleanerScheduleDay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CleanerScheduleDays and only return the `id`
     * const cleanerScheduleDayWithIdOnly = await prisma.cleanerScheduleDay.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CleanerScheduleDayCreateManyAndReturnArgs>(args?: SelectSubset<T, CleanerScheduleDayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerScheduleDayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CleanerScheduleDay.
     * @param {CleanerScheduleDayDeleteArgs} args - Arguments to delete one CleanerScheduleDay.
     * @example
     * // Delete one CleanerScheduleDay
     * const CleanerScheduleDay = await prisma.cleanerScheduleDay.delete({
     *   where: {
     *     // ... filter to delete one CleanerScheduleDay
     *   }
     * })
     * 
     */
    delete<T extends CleanerScheduleDayDeleteArgs>(args: SelectSubset<T, CleanerScheduleDayDeleteArgs<ExtArgs>>): Prisma__CleanerScheduleDayClient<$Result.GetResult<Prisma.$CleanerScheduleDayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CleanerScheduleDay.
     * @param {CleanerScheduleDayUpdateArgs} args - Arguments to update one CleanerScheduleDay.
     * @example
     * // Update one CleanerScheduleDay
     * const cleanerScheduleDay = await prisma.cleanerScheduleDay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CleanerScheduleDayUpdateArgs>(args: SelectSubset<T, CleanerScheduleDayUpdateArgs<ExtArgs>>): Prisma__CleanerScheduleDayClient<$Result.GetResult<Prisma.$CleanerScheduleDayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CleanerScheduleDays.
     * @param {CleanerScheduleDayDeleteManyArgs} args - Arguments to filter CleanerScheduleDays to delete.
     * @example
     * // Delete a few CleanerScheduleDays
     * const { count } = await prisma.cleanerScheduleDay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CleanerScheduleDayDeleteManyArgs>(args?: SelectSubset<T, CleanerScheduleDayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CleanerScheduleDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerScheduleDayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CleanerScheduleDays
     * const cleanerScheduleDay = await prisma.cleanerScheduleDay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CleanerScheduleDayUpdateManyArgs>(args: SelectSubset<T, CleanerScheduleDayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CleanerScheduleDays and returns the data updated in the database.
     * @param {CleanerScheduleDayUpdateManyAndReturnArgs} args - Arguments to update many CleanerScheduleDays.
     * @example
     * // Update many CleanerScheduleDays
     * const cleanerScheduleDay = await prisma.cleanerScheduleDay.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CleanerScheduleDays and only return the `id`
     * const cleanerScheduleDayWithIdOnly = await prisma.cleanerScheduleDay.updateManyAndReturn({
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
    updateManyAndReturn<T extends CleanerScheduleDayUpdateManyAndReturnArgs>(args: SelectSubset<T, CleanerScheduleDayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerScheduleDayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CleanerScheduleDay.
     * @param {CleanerScheduleDayUpsertArgs} args - Arguments to update or create a CleanerScheduleDay.
     * @example
     * // Update or create a CleanerScheduleDay
     * const cleanerScheduleDay = await prisma.cleanerScheduleDay.upsert({
     *   create: {
     *     // ... data to create a CleanerScheduleDay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CleanerScheduleDay we want to update
     *   }
     * })
     */
    upsert<T extends CleanerScheduleDayUpsertArgs>(args: SelectSubset<T, CleanerScheduleDayUpsertArgs<ExtArgs>>): Prisma__CleanerScheduleDayClient<$Result.GetResult<Prisma.$CleanerScheduleDayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CleanerScheduleDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerScheduleDayCountArgs} args - Arguments to filter CleanerScheduleDays to count.
     * @example
     * // Count the number of CleanerScheduleDays
     * const count = await prisma.cleanerScheduleDay.count({
     *   where: {
     *     // ... the filter for the CleanerScheduleDays we want to count
     *   }
     * })
    **/
    count<T extends CleanerScheduleDayCountArgs>(
      args?: Subset<T, CleanerScheduleDayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CleanerScheduleDayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CleanerScheduleDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerScheduleDayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CleanerScheduleDayAggregateArgs>(args: Subset<T, CleanerScheduleDayAggregateArgs>): Prisma.PrismaPromise<GetCleanerScheduleDayAggregateType<T>>

    /**
     * Group by CleanerScheduleDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerScheduleDayGroupByArgs} args - Group by arguments.
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
      T extends CleanerScheduleDayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CleanerScheduleDayGroupByArgs['orderBy'] }
        : { orderBy?: CleanerScheduleDayGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CleanerScheduleDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCleanerScheduleDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CleanerScheduleDay model
   */
  readonly fields: CleanerScheduleDayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CleanerScheduleDay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CleanerScheduleDayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    slots<T extends CleanerScheduleDay$slotsArgs<ExtArgs> = {}>(args?: Subset<T, CleanerScheduleDay$slotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerScheduleSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cleanerProfile<T extends CleanerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CleanerProfileDefaultArgs<ExtArgs>>): Prisma__CleanerProfileClient<$Result.GetResult<Prisma.$CleanerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CleanerScheduleDay model
   */
  interface CleanerScheduleDayFieldRefs {
    readonly id: FieldRef<"CleanerScheduleDay", 'Int'>
    readonly cleanerProfileId: FieldRef<"CleanerScheduleDay", 'Int'>
    readonly dayOfWeek: FieldRef<"CleanerScheduleDay", 'Int'>
    readonly createdAt: FieldRef<"CleanerScheduleDay", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CleanerScheduleDay findUnique
   */
  export type CleanerScheduleDayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleDay
     */
    select?: CleanerScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleDay
     */
    omit?: CleanerScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleDayInclude<ExtArgs> | null
    /**
     * Filter, which CleanerScheduleDay to fetch.
     */
    where: CleanerScheduleDayWhereUniqueInput
  }

  /**
   * CleanerScheduleDay findUniqueOrThrow
   */
  export type CleanerScheduleDayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleDay
     */
    select?: CleanerScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleDay
     */
    omit?: CleanerScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleDayInclude<ExtArgs> | null
    /**
     * Filter, which CleanerScheduleDay to fetch.
     */
    where: CleanerScheduleDayWhereUniqueInput
  }

  /**
   * CleanerScheduleDay findFirst
   */
  export type CleanerScheduleDayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleDay
     */
    select?: CleanerScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleDay
     */
    omit?: CleanerScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleDayInclude<ExtArgs> | null
    /**
     * Filter, which CleanerScheduleDay to fetch.
     */
    where?: CleanerScheduleDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerScheduleDays to fetch.
     */
    orderBy?: CleanerScheduleDayOrderByWithRelationInput | CleanerScheduleDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CleanerScheduleDays.
     */
    cursor?: CleanerScheduleDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerScheduleDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerScheduleDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CleanerScheduleDays.
     */
    distinct?: CleanerScheduleDayScalarFieldEnum | CleanerScheduleDayScalarFieldEnum[]
  }

  /**
   * CleanerScheduleDay findFirstOrThrow
   */
  export type CleanerScheduleDayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleDay
     */
    select?: CleanerScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleDay
     */
    omit?: CleanerScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleDayInclude<ExtArgs> | null
    /**
     * Filter, which CleanerScheduleDay to fetch.
     */
    where?: CleanerScheduleDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerScheduleDays to fetch.
     */
    orderBy?: CleanerScheduleDayOrderByWithRelationInput | CleanerScheduleDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CleanerScheduleDays.
     */
    cursor?: CleanerScheduleDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerScheduleDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerScheduleDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CleanerScheduleDays.
     */
    distinct?: CleanerScheduleDayScalarFieldEnum | CleanerScheduleDayScalarFieldEnum[]
  }

  /**
   * CleanerScheduleDay findMany
   */
  export type CleanerScheduleDayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleDay
     */
    select?: CleanerScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleDay
     */
    omit?: CleanerScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleDayInclude<ExtArgs> | null
    /**
     * Filter, which CleanerScheduleDays to fetch.
     */
    where?: CleanerScheduleDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerScheduleDays to fetch.
     */
    orderBy?: CleanerScheduleDayOrderByWithRelationInput | CleanerScheduleDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CleanerScheduleDays.
     */
    cursor?: CleanerScheduleDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerScheduleDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerScheduleDays.
     */
    skip?: number
    distinct?: CleanerScheduleDayScalarFieldEnum | CleanerScheduleDayScalarFieldEnum[]
  }

  /**
   * CleanerScheduleDay create
   */
  export type CleanerScheduleDayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleDay
     */
    select?: CleanerScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleDay
     */
    omit?: CleanerScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleDayInclude<ExtArgs> | null
    /**
     * The data needed to create a CleanerScheduleDay.
     */
    data: XOR<CleanerScheduleDayCreateInput, CleanerScheduleDayUncheckedCreateInput>
  }

  /**
   * CleanerScheduleDay createMany
   */
  export type CleanerScheduleDayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CleanerScheduleDays.
     */
    data: CleanerScheduleDayCreateManyInput | CleanerScheduleDayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CleanerScheduleDay createManyAndReturn
   */
  export type CleanerScheduleDayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleDay
     */
    select?: CleanerScheduleDaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleDay
     */
    omit?: CleanerScheduleDayOmit<ExtArgs> | null
    /**
     * The data used to create many CleanerScheduleDays.
     */
    data: CleanerScheduleDayCreateManyInput | CleanerScheduleDayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleDayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CleanerScheduleDay update
   */
  export type CleanerScheduleDayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleDay
     */
    select?: CleanerScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleDay
     */
    omit?: CleanerScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleDayInclude<ExtArgs> | null
    /**
     * The data needed to update a CleanerScheduleDay.
     */
    data: XOR<CleanerScheduleDayUpdateInput, CleanerScheduleDayUncheckedUpdateInput>
    /**
     * Choose, which CleanerScheduleDay to update.
     */
    where: CleanerScheduleDayWhereUniqueInput
  }

  /**
   * CleanerScheduleDay updateMany
   */
  export type CleanerScheduleDayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CleanerScheduleDays.
     */
    data: XOR<CleanerScheduleDayUpdateManyMutationInput, CleanerScheduleDayUncheckedUpdateManyInput>
    /**
     * Filter which CleanerScheduleDays to update
     */
    where?: CleanerScheduleDayWhereInput
    /**
     * Limit how many CleanerScheduleDays to update.
     */
    limit?: number
  }

  /**
   * CleanerScheduleDay updateManyAndReturn
   */
  export type CleanerScheduleDayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleDay
     */
    select?: CleanerScheduleDaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleDay
     */
    omit?: CleanerScheduleDayOmit<ExtArgs> | null
    /**
     * The data used to update CleanerScheduleDays.
     */
    data: XOR<CleanerScheduleDayUpdateManyMutationInput, CleanerScheduleDayUncheckedUpdateManyInput>
    /**
     * Filter which CleanerScheduleDays to update
     */
    where?: CleanerScheduleDayWhereInput
    /**
     * Limit how many CleanerScheduleDays to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleDayIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CleanerScheduleDay upsert
   */
  export type CleanerScheduleDayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleDay
     */
    select?: CleanerScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleDay
     */
    omit?: CleanerScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleDayInclude<ExtArgs> | null
    /**
     * The filter to search for the CleanerScheduleDay to update in case it exists.
     */
    where: CleanerScheduleDayWhereUniqueInput
    /**
     * In case the CleanerScheduleDay found by the `where` argument doesn't exist, create a new CleanerScheduleDay with this data.
     */
    create: XOR<CleanerScheduleDayCreateInput, CleanerScheduleDayUncheckedCreateInput>
    /**
     * In case the CleanerScheduleDay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CleanerScheduleDayUpdateInput, CleanerScheduleDayUncheckedUpdateInput>
  }

  /**
   * CleanerScheduleDay delete
   */
  export type CleanerScheduleDayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleDay
     */
    select?: CleanerScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleDay
     */
    omit?: CleanerScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleDayInclude<ExtArgs> | null
    /**
     * Filter which CleanerScheduleDay to delete.
     */
    where: CleanerScheduleDayWhereUniqueInput
  }

  /**
   * CleanerScheduleDay deleteMany
   */
  export type CleanerScheduleDayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CleanerScheduleDays to delete
     */
    where?: CleanerScheduleDayWhereInput
    /**
     * Limit how many CleanerScheduleDays to delete.
     */
    limit?: number
  }

  /**
   * CleanerScheduleDay.slots
   */
  export type CleanerScheduleDay$slotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleSlot
     */
    select?: CleanerScheduleSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleSlot
     */
    omit?: CleanerScheduleSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleSlotInclude<ExtArgs> | null
    where?: CleanerScheduleSlotWhereInput
    orderBy?: CleanerScheduleSlotOrderByWithRelationInput | CleanerScheduleSlotOrderByWithRelationInput[]
    cursor?: CleanerScheduleSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CleanerScheduleSlotScalarFieldEnum | CleanerScheduleSlotScalarFieldEnum[]
  }

  /**
   * CleanerScheduleDay without action
   */
  export type CleanerScheduleDayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleDay
     */
    select?: CleanerScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleDay
     */
    omit?: CleanerScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleDayInclude<ExtArgs> | null
  }


  /**
   * Model CleanerScheduleSlot
   */

  export type AggregateCleanerScheduleSlot = {
    _count: CleanerScheduleSlotCountAggregateOutputType | null
    _avg: CleanerScheduleSlotAvgAggregateOutputType | null
    _sum: CleanerScheduleSlotSumAggregateOutputType | null
    _min: CleanerScheduleSlotMinAggregateOutputType | null
    _max: CleanerScheduleSlotMaxAggregateOutputType | null
  }

  export type CleanerScheduleSlotAvgAggregateOutputType = {
    id: number | null
    scheduleDayId: number | null
  }

  export type CleanerScheduleSlotSumAggregateOutputType = {
    id: number | null
    scheduleDayId: number | null
  }

  export type CleanerScheduleSlotMinAggregateOutputType = {
    id: number | null
    scheduleDayId: number | null
    startTime: string | null
    endTime: string | null
    isAvailable: boolean | null
    createdAt: Date | null
  }

  export type CleanerScheduleSlotMaxAggregateOutputType = {
    id: number | null
    scheduleDayId: number | null
    startTime: string | null
    endTime: string | null
    isAvailable: boolean | null
    createdAt: Date | null
  }

  export type CleanerScheduleSlotCountAggregateOutputType = {
    id: number
    scheduleDayId: number
    startTime: number
    endTime: number
    isAvailable: number
    createdAt: number
    _all: number
  }


  export type CleanerScheduleSlotAvgAggregateInputType = {
    id?: true
    scheduleDayId?: true
  }

  export type CleanerScheduleSlotSumAggregateInputType = {
    id?: true
    scheduleDayId?: true
  }

  export type CleanerScheduleSlotMinAggregateInputType = {
    id?: true
    scheduleDayId?: true
    startTime?: true
    endTime?: true
    isAvailable?: true
    createdAt?: true
  }

  export type CleanerScheduleSlotMaxAggregateInputType = {
    id?: true
    scheduleDayId?: true
    startTime?: true
    endTime?: true
    isAvailable?: true
    createdAt?: true
  }

  export type CleanerScheduleSlotCountAggregateInputType = {
    id?: true
    scheduleDayId?: true
    startTime?: true
    endTime?: true
    isAvailable?: true
    createdAt?: true
    _all?: true
  }

  export type CleanerScheduleSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CleanerScheduleSlot to aggregate.
     */
    where?: CleanerScheduleSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerScheduleSlots to fetch.
     */
    orderBy?: CleanerScheduleSlotOrderByWithRelationInput | CleanerScheduleSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CleanerScheduleSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerScheduleSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerScheduleSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CleanerScheduleSlots
    **/
    _count?: true | CleanerScheduleSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CleanerScheduleSlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CleanerScheduleSlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CleanerScheduleSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CleanerScheduleSlotMaxAggregateInputType
  }

  export type GetCleanerScheduleSlotAggregateType<T extends CleanerScheduleSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateCleanerScheduleSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCleanerScheduleSlot[P]>
      : GetScalarType<T[P], AggregateCleanerScheduleSlot[P]>
  }




  export type CleanerScheduleSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CleanerScheduleSlotWhereInput
    orderBy?: CleanerScheduleSlotOrderByWithAggregationInput | CleanerScheduleSlotOrderByWithAggregationInput[]
    by: CleanerScheduleSlotScalarFieldEnum[] | CleanerScheduleSlotScalarFieldEnum
    having?: CleanerScheduleSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CleanerScheduleSlotCountAggregateInputType | true
    _avg?: CleanerScheduleSlotAvgAggregateInputType
    _sum?: CleanerScheduleSlotSumAggregateInputType
    _min?: CleanerScheduleSlotMinAggregateInputType
    _max?: CleanerScheduleSlotMaxAggregateInputType
  }

  export type CleanerScheduleSlotGroupByOutputType = {
    id: number
    scheduleDayId: number
    startTime: string | null
    endTime: string | null
    isAvailable: boolean
    createdAt: Date
    _count: CleanerScheduleSlotCountAggregateOutputType | null
    _avg: CleanerScheduleSlotAvgAggregateOutputType | null
    _sum: CleanerScheduleSlotSumAggregateOutputType | null
    _min: CleanerScheduleSlotMinAggregateOutputType | null
    _max: CleanerScheduleSlotMaxAggregateOutputType | null
  }

  type GetCleanerScheduleSlotGroupByPayload<T extends CleanerScheduleSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CleanerScheduleSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CleanerScheduleSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CleanerScheduleSlotGroupByOutputType[P]>
            : GetScalarType<T[P], CleanerScheduleSlotGroupByOutputType[P]>
        }
      >
    >


  export type CleanerScheduleSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduleDayId?: boolean
    startTime?: boolean
    endTime?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    scheduleDay?: boolean | CleanerScheduleDayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cleanerScheduleSlot"]>

  export type CleanerScheduleSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduleDayId?: boolean
    startTime?: boolean
    endTime?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    scheduleDay?: boolean | CleanerScheduleDayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cleanerScheduleSlot"]>

  export type CleanerScheduleSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduleDayId?: boolean
    startTime?: boolean
    endTime?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    scheduleDay?: boolean | CleanerScheduleDayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cleanerScheduleSlot"]>

  export type CleanerScheduleSlotSelectScalar = {
    id?: boolean
    scheduleDayId?: boolean
    startTime?: boolean
    endTime?: boolean
    isAvailable?: boolean
    createdAt?: boolean
  }

  export type CleanerScheduleSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scheduleDayId" | "startTime" | "endTime" | "isAvailable" | "createdAt", ExtArgs["result"]["cleanerScheduleSlot"]>
  export type CleanerScheduleSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduleDay?: boolean | CleanerScheduleDayDefaultArgs<ExtArgs>
  }
  export type CleanerScheduleSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduleDay?: boolean | CleanerScheduleDayDefaultArgs<ExtArgs>
  }
  export type CleanerScheduleSlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduleDay?: boolean | CleanerScheduleDayDefaultArgs<ExtArgs>
  }

  export type $CleanerScheduleSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CleanerScheduleSlot"
    objects: {
      scheduleDay: Prisma.$CleanerScheduleDayPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      scheduleDayId: number
      startTime: string | null
      endTime: string | null
      isAvailable: boolean
      createdAt: Date
    }, ExtArgs["result"]["cleanerScheduleSlot"]>
    composites: {}
  }

  type CleanerScheduleSlotGetPayload<S extends boolean | null | undefined | CleanerScheduleSlotDefaultArgs> = $Result.GetResult<Prisma.$CleanerScheduleSlotPayload, S>

  type CleanerScheduleSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CleanerScheduleSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CleanerScheduleSlotCountAggregateInputType | true
    }

  export interface CleanerScheduleSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CleanerScheduleSlot'], meta: { name: 'CleanerScheduleSlot' } }
    /**
     * Find zero or one CleanerScheduleSlot that matches the filter.
     * @param {CleanerScheduleSlotFindUniqueArgs} args - Arguments to find a CleanerScheduleSlot
     * @example
     * // Get one CleanerScheduleSlot
     * const cleanerScheduleSlot = await prisma.cleanerScheduleSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CleanerScheduleSlotFindUniqueArgs>(args: SelectSubset<T, CleanerScheduleSlotFindUniqueArgs<ExtArgs>>): Prisma__CleanerScheduleSlotClient<$Result.GetResult<Prisma.$CleanerScheduleSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CleanerScheduleSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CleanerScheduleSlotFindUniqueOrThrowArgs} args - Arguments to find a CleanerScheduleSlot
     * @example
     * // Get one CleanerScheduleSlot
     * const cleanerScheduleSlot = await prisma.cleanerScheduleSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CleanerScheduleSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, CleanerScheduleSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CleanerScheduleSlotClient<$Result.GetResult<Prisma.$CleanerScheduleSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CleanerScheduleSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerScheduleSlotFindFirstArgs} args - Arguments to find a CleanerScheduleSlot
     * @example
     * // Get one CleanerScheduleSlot
     * const cleanerScheduleSlot = await prisma.cleanerScheduleSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CleanerScheduleSlotFindFirstArgs>(args?: SelectSubset<T, CleanerScheduleSlotFindFirstArgs<ExtArgs>>): Prisma__CleanerScheduleSlotClient<$Result.GetResult<Prisma.$CleanerScheduleSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CleanerScheduleSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerScheduleSlotFindFirstOrThrowArgs} args - Arguments to find a CleanerScheduleSlot
     * @example
     * // Get one CleanerScheduleSlot
     * const cleanerScheduleSlot = await prisma.cleanerScheduleSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CleanerScheduleSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, CleanerScheduleSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__CleanerScheduleSlotClient<$Result.GetResult<Prisma.$CleanerScheduleSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CleanerScheduleSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerScheduleSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CleanerScheduleSlots
     * const cleanerScheduleSlots = await prisma.cleanerScheduleSlot.findMany()
     * 
     * // Get first 10 CleanerScheduleSlots
     * const cleanerScheduleSlots = await prisma.cleanerScheduleSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cleanerScheduleSlotWithIdOnly = await prisma.cleanerScheduleSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CleanerScheduleSlotFindManyArgs>(args?: SelectSubset<T, CleanerScheduleSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerScheduleSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CleanerScheduleSlot.
     * @param {CleanerScheduleSlotCreateArgs} args - Arguments to create a CleanerScheduleSlot.
     * @example
     * // Create one CleanerScheduleSlot
     * const CleanerScheduleSlot = await prisma.cleanerScheduleSlot.create({
     *   data: {
     *     // ... data to create a CleanerScheduleSlot
     *   }
     * })
     * 
     */
    create<T extends CleanerScheduleSlotCreateArgs>(args: SelectSubset<T, CleanerScheduleSlotCreateArgs<ExtArgs>>): Prisma__CleanerScheduleSlotClient<$Result.GetResult<Prisma.$CleanerScheduleSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CleanerScheduleSlots.
     * @param {CleanerScheduleSlotCreateManyArgs} args - Arguments to create many CleanerScheduleSlots.
     * @example
     * // Create many CleanerScheduleSlots
     * const cleanerScheduleSlot = await prisma.cleanerScheduleSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CleanerScheduleSlotCreateManyArgs>(args?: SelectSubset<T, CleanerScheduleSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CleanerScheduleSlots and returns the data saved in the database.
     * @param {CleanerScheduleSlotCreateManyAndReturnArgs} args - Arguments to create many CleanerScheduleSlots.
     * @example
     * // Create many CleanerScheduleSlots
     * const cleanerScheduleSlot = await prisma.cleanerScheduleSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CleanerScheduleSlots and only return the `id`
     * const cleanerScheduleSlotWithIdOnly = await prisma.cleanerScheduleSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CleanerScheduleSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, CleanerScheduleSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerScheduleSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CleanerScheduleSlot.
     * @param {CleanerScheduleSlotDeleteArgs} args - Arguments to delete one CleanerScheduleSlot.
     * @example
     * // Delete one CleanerScheduleSlot
     * const CleanerScheduleSlot = await prisma.cleanerScheduleSlot.delete({
     *   where: {
     *     // ... filter to delete one CleanerScheduleSlot
     *   }
     * })
     * 
     */
    delete<T extends CleanerScheduleSlotDeleteArgs>(args: SelectSubset<T, CleanerScheduleSlotDeleteArgs<ExtArgs>>): Prisma__CleanerScheduleSlotClient<$Result.GetResult<Prisma.$CleanerScheduleSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CleanerScheduleSlot.
     * @param {CleanerScheduleSlotUpdateArgs} args - Arguments to update one CleanerScheduleSlot.
     * @example
     * // Update one CleanerScheduleSlot
     * const cleanerScheduleSlot = await prisma.cleanerScheduleSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CleanerScheduleSlotUpdateArgs>(args: SelectSubset<T, CleanerScheduleSlotUpdateArgs<ExtArgs>>): Prisma__CleanerScheduleSlotClient<$Result.GetResult<Prisma.$CleanerScheduleSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CleanerScheduleSlots.
     * @param {CleanerScheduleSlotDeleteManyArgs} args - Arguments to filter CleanerScheduleSlots to delete.
     * @example
     * // Delete a few CleanerScheduleSlots
     * const { count } = await prisma.cleanerScheduleSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CleanerScheduleSlotDeleteManyArgs>(args?: SelectSubset<T, CleanerScheduleSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CleanerScheduleSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerScheduleSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CleanerScheduleSlots
     * const cleanerScheduleSlot = await prisma.cleanerScheduleSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CleanerScheduleSlotUpdateManyArgs>(args: SelectSubset<T, CleanerScheduleSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CleanerScheduleSlots and returns the data updated in the database.
     * @param {CleanerScheduleSlotUpdateManyAndReturnArgs} args - Arguments to update many CleanerScheduleSlots.
     * @example
     * // Update many CleanerScheduleSlots
     * const cleanerScheduleSlot = await prisma.cleanerScheduleSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CleanerScheduleSlots and only return the `id`
     * const cleanerScheduleSlotWithIdOnly = await prisma.cleanerScheduleSlot.updateManyAndReturn({
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
    updateManyAndReturn<T extends CleanerScheduleSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, CleanerScheduleSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerScheduleSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CleanerScheduleSlot.
     * @param {CleanerScheduleSlotUpsertArgs} args - Arguments to update or create a CleanerScheduleSlot.
     * @example
     * // Update or create a CleanerScheduleSlot
     * const cleanerScheduleSlot = await prisma.cleanerScheduleSlot.upsert({
     *   create: {
     *     // ... data to create a CleanerScheduleSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CleanerScheduleSlot we want to update
     *   }
     * })
     */
    upsert<T extends CleanerScheduleSlotUpsertArgs>(args: SelectSubset<T, CleanerScheduleSlotUpsertArgs<ExtArgs>>): Prisma__CleanerScheduleSlotClient<$Result.GetResult<Prisma.$CleanerScheduleSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CleanerScheduleSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerScheduleSlotCountArgs} args - Arguments to filter CleanerScheduleSlots to count.
     * @example
     * // Count the number of CleanerScheduleSlots
     * const count = await prisma.cleanerScheduleSlot.count({
     *   where: {
     *     // ... the filter for the CleanerScheduleSlots we want to count
     *   }
     * })
    **/
    count<T extends CleanerScheduleSlotCountArgs>(
      args?: Subset<T, CleanerScheduleSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CleanerScheduleSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CleanerScheduleSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerScheduleSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CleanerScheduleSlotAggregateArgs>(args: Subset<T, CleanerScheduleSlotAggregateArgs>): Prisma.PrismaPromise<GetCleanerScheduleSlotAggregateType<T>>

    /**
     * Group by CleanerScheduleSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerScheduleSlotGroupByArgs} args - Group by arguments.
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
      T extends CleanerScheduleSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CleanerScheduleSlotGroupByArgs['orderBy'] }
        : { orderBy?: CleanerScheduleSlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CleanerScheduleSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCleanerScheduleSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CleanerScheduleSlot model
   */
  readonly fields: CleanerScheduleSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CleanerScheduleSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CleanerScheduleSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scheduleDay<T extends CleanerScheduleDayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CleanerScheduleDayDefaultArgs<ExtArgs>>): Prisma__CleanerScheduleDayClient<$Result.GetResult<Prisma.$CleanerScheduleDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CleanerScheduleSlot model
   */
  interface CleanerScheduleSlotFieldRefs {
    readonly id: FieldRef<"CleanerScheduleSlot", 'Int'>
    readonly scheduleDayId: FieldRef<"CleanerScheduleSlot", 'Int'>
    readonly startTime: FieldRef<"CleanerScheduleSlot", 'String'>
    readonly endTime: FieldRef<"CleanerScheduleSlot", 'String'>
    readonly isAvailable: FieldRef<"CleanerScheduleSlot", 'Boolean'>
    readonly createdAt: FieldRef<"CleanerScheduleSlot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CleanerScheduleSlot findUnique
   */
  export type CleanerScheduleSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleSlot
     */
    select?: CleanerScheduleSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleSlot
     */
    omit?: CleanerScheduleSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleSlotInclude<ExtArgs> | null
    /**
     * Filter, which CleanerScheduleSlot to fetch.
     */
    where: CleanerScheduleSlotWhereUniqueInput
  }

  /**
   * CleanerScheduleSlot findUniqueOrThrow
   */
  export type CleanerScheduleSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleSlot
     */
    select?: CleanerScheduleSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleSlot
     */
    omit?: CleanerScheduleSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleSlotInclude<ExtArgs> | null
    /**
     * Filter, which CleanerScheduleSlot to fetch.
     */
    where: CleanerScheduleSlotWhereUniqueInput
  }

  /**
   * CleanerScheduleSlot findFirst
   */
  export type CleanerScheduleSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleSlot
     */
    select?: CleanerScheduleSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleSlot
     */
    omit?: CleanerScheduleSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleSlotInclude<ExtArgs> | null
    /**
     * Filter, which CleanerScheduleSlot to fetch.
     */
    where?: CleanerScheduleSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerScheduleSlots to fetch.
     */
    orderBy?: CleanerScheduleSlotOrderByWithRelationInput | CleanerScheduleSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CleanerScheduleSlots.
     */
    cursor?: CleanerScheduleSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerScheduleSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerScheduleSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CleanerScheduleSlots.
     */
    distinct?: CleanerScheduleSlotScalarFieldEnum | CleanerScheduleSlotScalarFieldEnum[]
  }

  /**
   * CleanerScheduleSlot findFirstOrThrow
   */
  export type CleanerScheduleSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleSlot
     */
    select?: CleanerScheduleSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleSlot
     */
    omit?: CleanerScheduleSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleSlotInclude<ExtArgs> | null
    /**
     * Filter, which CleanerScheduleSlot to fetch.
     */
    where?: CleanerScheduleSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerScheduleSlots to fetch.
     */
    orderBy?: CleanerScheduleSlotOrderByWithRelationInput | CleanerScheduleSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CleanerScheduleSlots.
     */
    cursor?: CleanerScheduleSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerScheduleSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerScheduleSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CleanerScheduleSlots.
     */
    distinct?: CleanerScheduleSlotScalarFieldEnum | CleanerScheduleSlotScalarFieldEnum[]
  }

  /**
   * CleanerScheduleSlot findMany
   */
  export type CleanerScheduleSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleSlot
     */
    select?: CleanerScheduleSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleSlot
     */
    omit?: CleanerScheduleSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleSlotInclude<ExtArgs> | null
    /**
     * Filter, which CleanerScheduleSlots to fetch.
     */
    where?: CleanerScheduleSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerScheduleSlots to fetch.
     */
    orderBy?: CleanerScheduleSlotOrderByWithRelationInput | CleanerScheduleSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CleanerScheduleSlots.
     */
    cursor?: CleanerScheduleSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerScheduleSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerScheduleSlots.
     */
    skip?: number
    distinct?: CleanerScheduleSlotScalarFieldEnum | CleanerScheduleSlotScalarFieldEnum[]
  }

  /**
   * CleanerScheduleSlot create
   */
  export type CleanerScheduleSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleSlot
     */
    select?: CleanerScheduleSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleSlot
     */
    omit?: CleanerScheduleSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a CleanerScheduleSlot.
     */
    data: XOR<CleanerScheduleSlotCreateInput, CleanerScheduleSlotUncheckedCreateInput>
  }

  /**
   * CleanerScheduleSlot createMany
   */
  export type CleanerScheduleSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CleanerScheduleSlots.
     */
    data: CleanerScheduleSlotCreateManyInput | CleanerScheduleSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CleanerScheduleSlot createManyAndReturn
   */
  export type CleanerScheduleSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleSlot
     */
    select?: CleanerScheduleSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleSlot
     */
    omit?: CleanerScheduleSlotOmit<ExtArgs> | null
    /**
     * The data used to create many CleanerScheduleSlots.
     */
    data: CleanerScheduleSlotCreateManyInput | CleanerScheduleSlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleSlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CleanerScheduleSlot update
   */
  export type CleanerScheduleSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleSlot
     */
    select?: CleanerScheduleSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleSlot
     */
    omit?: CleanerScheduleSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a CleanerScheduleSlot.
     */
    data: XOR<CleanerScheduleSlotUpdateInput, CleanerScheduleSlotUncheckedUpdateInput>
    /**
     * Choose, which CleanerScheduleSlot to update.
     */
    where: CleanerScheduleSlotWhereUniqueInput
  }

  /**
   * CleanerScheduleSlot updateMany
   */
  export type CleanerScheduleSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CleanerScheduleSlots.
     */
    data: XOR<CleanerScheduleSlotUpdateManyMutationInput, CleanerScheduleSlotUncheckedUpdateManyInput>
    /**
     * Filter which CleanerScheduleSlots to update
     */
    where?: CleanerScheduleSlotWhereInput
    /**
     * Limit how many CleanerScheduleSlots to update.
     */
    limit?: number
  }

  /**
   * CleanerScheduleSlot updateManyAndReturn
   */
  export type CleanerScheduleSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleSlot
     */
    select?: CleanerScheduleSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleSlot
     */
    omit?: CleanerScheduleSlotOmit<ExtArgs> | null
    /**
     * The data used to update CleanerScheduleSlots.
     */
    data: XOR<CleanerScheduleSlotUpdateManyMutationInput, CleanerScheduleSlotUncheckedUpdateManyInput>
    /**
     * Filter which CleanerScheduleSlots to update
     */
    where?: CleanerScheduleSlotWhereInput
    /**
     * Limit how many CleanerScheduleSlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleSlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CleanerScheduleSlot upsert
   */
  export type CleanerScheduleSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleSlot
     */
    select?: CleanerScheduleSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleSlot
     */
    omit?: CleanerScheduleSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the CleanerScheduleSlot to update in case it exists.
     */
    where: CleanerScheduleSlotWhereUniqueInput
    /**
     * In case the CleanerScheduleSlot found by the `where` argument doesn't exist, create a new CleanerScheduleSlot with this data.
     */
    create: XOR<CleanerScheduleSlotCreateInput, CleanerScheduleSlotUncheckedCreateInput>
    /**
     * In case the CleanerScheduleSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CleanerScheduleSlotUpdateInput, CleanerScheduleSlotUncheckedUpdateInput>
  }

  /**
   * CleanerScheduleSlot delete
   */
  export type CleanerScheduleSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleSlot
     */
    select?: CleanerScheduleSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleSlot
     */
    omit?: CleanerScheduleSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleSlotInclude<ExtArgs> | null
    /**
     * Filter which CleanerScheduleSlot to delete.
     */
    where: CleanerScheduleSlotWhereUniqueInput
  }

  /**
   * CleanerScheduleSlot deleteMany
   */
  export type CleanerScheduleSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CleanerScheduleSlots to delete
     */
    where?: CleanerScheduleSlotWhereInput
    /**
     * Limit how many CleanerScheduleSlots to delete.
     */
    limit?: number
  }

  /**
   * CleanerScheduleSlot without action
   */
  export type CleanerScheduleSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerScheduleSlot
     */
    select?: CleanerScheduleSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerScheduleSlot
     */
    omit?: CleanerScheduleSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerScheduleSlotInclude<ExtArgs> | null
  }


  /**
   * Model CleanerReview
   */

  export type AggregateCleanerReview = {
    _count: CleanerReviewCountAggregateOutputType | null
    _avg: CleanerReviewAvgAggregateOutputType | null
    _sum: CleanerReviewSumAggregateOutputType | null
    _min: CleanerReviewMinAggregateOutputType | null
    _max: CleanerReviewMaxAggregateOutputType | null
  }

  export type CleanerReviewAvgAggregateOutputType = {
    id: number | null
    cleanerProfileId: number | null
    customerId: number | null
    rating: number | null
  }

  export type CleanerReviewSumAggregateOutputType = {
    id: number | null
    cleanerProfileId: number | null
    customerId: number | null
    rating: number | null
  }

  export type CleanerReviewMinAggregateOutputType = {
    id: number | null
    cleanerProfileId: number | null
    customerId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type CleanerReviewMaxAggregateOutputType = {
    id: number | null
    cleanerProfileId: number | null
    customerId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type CleanerReviewCountAggregateOutputType = {
    id: number
    cleanerProfileId: number
    customerId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type CleanerReviewAvgAggregateInputType = {
    id?: true
    cleanerProfileId?: true
    customerId?: true
    rating?: true
  }

  export type CleanerReviewSumAggregateInputType = {
    id?: true
    cleanerProfileId?: true
    customerId?: true
    rating?: true
  }

  export type CleanerReviewMinAggregateInputType = {
    id?: true
    cleanerProfileId?: true
    customerId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type CleanerReviewMaxAggregateInputType = {
    id?: true
    cleanerProfileId?: true
    customerId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type CleanerReviewCountAggregateInputType = {
    id?: true
    cleanerProfileId?: true
    customerId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type CleanerReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CleanerReview to aggregate.
     */
    where?: CleanerReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerReviews to fetch.
     */
    orderBy?: CleanerReviewOrderByWithRelationInput | CleanerReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CleanerReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CleanerReviews
    **/
    _count?: true | CleanerReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CleanerReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CleanerReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CleanerReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CleanerReviewMaxAggregateInputType
  }

  export type GetCleanerReviewAggregateType<T extends CleanerReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateCleanerReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCleanerReview[P]>
      : GetScalarType<T[P], AggregateCleanerReview[P]>
  }




  export type CleanerReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CleanerReviewWhereInput
    orderBy?: CleanerReviewOrderByWithAggregationInput | CleanerReviewOrderByWithAggregationInput[]
    by: CleanerReviewScalarFieldEnum[] | CleanerReviewScalarFieldEnum
    having?: CleanerReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CleanerReviewCountAggregateInputType | true
    _avg?: CleanerReviewAvgAggregateInputType
    _sum?: CleanerReviewSumAggregateInputType
    _min?: CleanerReviewMinAggregateInputType
    _max?: CleanerReviewMaxAggregateInputType
  }

  export type CleanerReviewGroupByOutputType = {
    id: number
    cleanerProfileId: number
    customerId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date
    _count: CleanerReviewCountAggregateOutputType | null
    _avg: CleanerReviewAvgAggregateOutputType | null
    _sum: CleanerReviewSumAggregateOutputType | null
    _min: CleanerReviewMinAggregateOutputType | null
    _max: CleanerReviewMaxAggregateOutputType | null
  }

  type GetCleanerReviewGroupByPayload<T extends CleanerReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CleanerReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CleanerReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CleanerReviewGroupByOutputType[P]>
            : GetScalarType<T[P], CleanerReviewGroupByOutputType[P]>
        }
      >
    >


  export type CleanerReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cleanerProfileId?: boolean
    customerId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    cleanerProfile?: boolean | CleanerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cleanerReview"]>

  export type CleanerReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cleanerProfileId?: boolean
    customerId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    cleanerProfile?: boolean | CleanerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cleanerReview"]>

  export type CleanerReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cleanerProfileId?: boolean
    customerId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    cleanerProfile?: boolean | CleanerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cleanerReview"]>

  export type CleanerReviewSelectScalar = {
    id?: boolean
    cleanerProfileId?: boolean
    customerId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type CleanerReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cleanerProfileId" | "customerId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["cleanerReview"]>
  export type CleanerReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cleanerProfile?: boolean | CleanerProfileDefaultArgs<ExtArgs>
  }
  export type CleanerReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cleanerProfile?: boolean | CleanerProfileDefaultArgs<ExtArgs>
  }
  export type CleanerReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cleanerProfile?: boolean | CleanerProfileDefaultArgs<ExtArgs>
  }

  export type $CleanerReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CleanerReview"
    objects: {
      cleanerProfile: Prisma.$CleanerProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cleanerProfileId: number
      customerId: number | null
      rating: number | null
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["cleanerReview"]>
    composites: {}
  }

  type CleanerReviewGetPayload<S extends boolean | null | undefined | CleanerReviewDefaultArgs> = $Result.GetResult<Prisma.$CleanerReviewPayload, S>

  type CleanerReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CleanerReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CleanerReviewCountAggregateInputType | true
    }

  export interface CleanerReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CleanerReview'], meta: { name: 'CleanerReview' } }
    /**
     * Find zero or one CleanerReview that matches the filter.
     * @param {CleanerReviewFindUniqueArgs} args - Arguments to find a CleanerReview
     * @example
     * // Get one CleanerReview
     * const cleanerReview = await prisma.cleanerReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CleanerReviewFindUniqueArgs>(args: SelectSubset<T, CleanerReviewFindUniqueArgs<ExtArgs>>): Prisma__CleanerReviewClient<$Result.GetResult<Prisma.$CleanerReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CleanerReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CleanerReviewFindUniqueOrThrowArgs} args - Arguments to find a CleanerReview
     * @example
     * // Get one CleanerReview
     * const cleanerReview = await prisma.cleanerReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CleanerReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, CleanerReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CleanerReviewClient<$Result.GetResult<Prisma.$CleanerReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CleanerReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerReviewFindFirstArgs} args - Arguments to find a CleanerReview
     * @example
     * // Get one CleanerReview
     * const cleanerReview = await prisma.cleanerReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CleanerReviewFindFirstArgs>(args?: SelectSubset<T, CleanerReviewFindFirstArgs<ExtArgs>>): Prisma__CleanerReviewClient<$Result.GetResult<Prisma.$CleanerReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CleanerReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerReviewFindFirstOrThrowArgs} args - Arguments to find a CleanerReview
     * @example
     * // Get one CleanerReview
     * const cleanerReview = await prisma.cleanerReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CleanerReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, CleanerReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__CleanerReviewClient<$Result.GetResult<Prisma.$CleanerReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CleanerReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CleanerReviews
     * const cleanerReviews = await prisma.cleanerReview.findMany()
     * 
     * // Get first 10 CleanerReviews
     * const cleanerReviews = await prisma.cleanerReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cleanerReviewWithIdOnly = await prisma.cleanerReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CleanerReviewFindManyArgs>(args?: SelectSubset<T, CleanerReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CleanerReview.
     * @param {CleanerReviewCreateArgs} args - Arguments to create a CleanerReview.
     * @example
     * // Create one CleanerReview
     * const CleanerReview = await prisma.cleanerReview.create({
     *   data: {
     *     // ... data to create a CleanerReview
     *   }
     * })
     * 
     */
    create<T extends CleanerReviewCreateArgs>(args: SelectSubset<T, CleanerReviewCreateArgs<ExtArgs>>): Prisma__CleanerReviewClient<$Result.GetResult<Prisma.$CleanerReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CleanerReviews.
     * @param {CleanerReviewCreateManyArgs} args - Arguments to create many CleanerReviews.
     * @example
     * // Create many CleanerReviews
     * const cleanerReview = await prisma.cleanerReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CleanerReviewCreateManyArgs>(args?: SelectSubset<T, CleanerReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CleanerReviews and returns the data saved in the database.
     * @param {CleanerReviewCreateManyAndReturnArgs} args - Arguments to create many CleanerReviews.
     * @example
     * // Create many CleanerReviews
     * const cleanerReview = await prisma.cleanerReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CleanerReviews and only return the `id`
     * const cleanerReviewWithIdOnly = await prisma.cleanerReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CleanerReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, CleanerReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CleanerReview.
     * @param {CleanerReviewDeleteArgs} args - Arguments to delete one CleanerReview.
     * @example
     * // Delete one CleanerReview
     * const CleanerReview = await prisma.cleanerReview.delete({
     *   where: {
     *     // ... filter to delete one CleanerReview
     *   }
     * })
     * 
     */
    delete<T extends CleanerReviewDeleteArgs>(args: SelectSubset<T, CleanerReviewDeleteArgs<ExtArgs>>): Prisma__CleanerReviewClient<$Result.GetResult<Prisma.$CleanerReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CleanerReview.
     * @param {CleanerReviewUpdateArgs} args - Arguments to update one CleanerReview.
     * @example
     * // Update one CleanerReview
     * const cleanerReview = await prisma.cleanerReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CleanerReviewUpdateArgs>(args: SelectSubset<T, CleanerReviewUpdateArgs<ExtArgs>>): Prisma__CleanerReviewClient<$Result.GetResult<Prisma.$CleanerReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CleanerReviews.
     * @param {CleanerReviewDeleteManyArgs} args - Arguments to filter CleanerReviews to delete.
     * @example
     * // Delete a few CleanerReviews
     * const { count } = await prisma.cleanerReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CleanerReviewDeleteManyArgs>(args?: SelectSubset<T, CleanerReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CleanerReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CleanerReviews
     * const cleanerReview = await prisma.cleanerReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CleanerReviewUpdateManyArgs>(args: SelectSubset<T, CleanerReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CleanerReviews and returns the data updated in the database.
     * @param {CleanerReviewUpdateManyAndReturnArgs} args - Arguments to update many CleanerReviews.
     * @example
     * // Update many CleanerReviews
     * const cleanerReview = await prisma.cleanerReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CleanerReviews and only return the `id`
     * const cleanerReviewWithIdOnly = await prisma.cleanerReview.updateManyAndReturn({
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
    updateManyAndReturn<T extends CleanerReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, CleanerReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CleanerReview.
     * @param {CleanerReviewUpsertArgs} args - Arguments to update or create a CleanerReview.
     * @example
     * // Update or create a CleanerReview
     * const cleanerReview = await prisma.cleanerReview.upsert({
     *   create: {
     *     // ... data to create a CleanerReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CleanerReview we want to update
     *   }
     * })
     */
    upsert<T extends CleanerReviewUpsertArgs>(args: SelectSubset<T, CleanerReviewUpsertArgs<ExtArgs>>): Prisma__CleanerReviewClient<$Result.GetResult<Prisma.$CleanerReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CleanerReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerReviewCountArgs} args - Arguments to filter CleanerReviews to count.
     * @example
     * // Count the number of CleanerReviews
     * const count = await prisma.cleanerReview.count({
     *   where: {
     *     // ... the filter for the CleanerReviews we want to count
     *   }
     * })
    **/
    count<T extends CleanerReviewCountArgs>(
      args?: Subset<T, CleanerReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CleanerReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CleanerReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CleanerReviewAggregateArgs>(args: Subset<T, CleanerReviewAggregateArgs>): Prisma.PrismaPromise<GetCleanerReviewAggregateType<T>>

    /**
     * Group by CleanerReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerReviewGroupByArgs} args - Group by arguments.
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
      T extends CleanerReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CleanerReviewGroupByArgs['orderBy'] }
        : { orderBy?: CleanerReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CleanerReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCleanerReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CleanerReview model
   */
  readonly fields: CleanerReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CleanerReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CleanerReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cleanerProfile<T extends CleanerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CleanerProfileDefaultArgs<ExtArgs>>): Prisma__CleanerProfileClient<$Result.GetResult<Prisma.$CleanerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CleanerReview model
   */
  interface CleanerReviewFieldRefs {
    readonly id: FieldRef<"CleanerReview", 'Int'>
    readonly cleanerProfileId: FieldRef<"CleanerReview", 'Int'>
    readonly customerId: FieldRef<"CleanerReview", 'Int'>
    readonly rating: FieldRef<"CleanerReview", 'Int'>
    readonly comment: FieldRef<"CleanerReview", 'String'>
    readonly createdAt: FieldRef<"CleanerReview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CleanerReview findUnique
   */
  export type CleanerReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerReview
     */
    select?: CleanerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerReview
     */
    omit?: CleanerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerReviewInclude<ExtArgs> | null
    /**
     * Filter, which CleanerReview to fetch.
     */
    where: CleanerReviewWhereUniqueInput
  }

  /**
   * CleanerReview findUniqueOrThrow
   */
  export type CleanerReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerReview
     */
    select?: CleanerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerReview
     */
    omit?: CleanerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerReviewInclude<ExtArgs> | null
    /**
     * Filter, which CleanerReview to fetch.
     */
    where: CleanerReviewWhereUniqueInput
  }

  /**
   * CleanerReview findFirst
   */
  export type CleanerReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerReview
     */
    select?: CleanerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerReview
     */
    omit?: CleanerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerReviewInclude<ExtArgs> | null
    /**
     * Filter, which CleanerReview to fetch.
     */
    where?: CleanerReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerReviews to fetch.
     */
    orderBy?: CleanerReviewOrderByWithRelationInput | CleanerReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CleanerReviews.
     */
    cursor?: CleanerReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CleanerReviews.
     */
    distinct?: CleanerReviewScalarFieldEnum | CleanerReviewScalarFieldEnum[]
  }

  /**
   * CleanerReview findFirstOrThrow
   */
  export type CleanerReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerReview
     */
    select?: CleanerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerReview
     */
    omit?: CleanerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerReviewInclude<ExtArgs> | null
    /**
     * Filter, which CleanerReview to fetch.
     */
    where?: CleanerReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerReviews to fetch.
     */
    orderBy?: CleanerReviewOrderByWithRelationInput | CleanerReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CleanerReviews.
     */
    cursor?: CleanerReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CleanerReviews.
     */
    distinct?: CleanerReviewScalarFieldEnum | CleanerReviewScalarFieldEnum[]
  }

  /**
   * CleanerReview findMany
   */
  export type CleanerReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerReview
     */
    select?: CleanerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerReview
     */
    omit?: CleanerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerReviewInclude<ExtArgs> | null
    /**
     * Filter, which CleanerReviews to fetch.
     */
    where?: CleanerReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerReviews to fetch.
     */
    orderBy?: CleanerReviewOrderByWithRelationInput | CleanerReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CleanerReviews.
     */
    cursor?: CleanerReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerReviews.
     */
    skip?: number
    distinct?: CleanerReviewScalarFieldEnum | CleanerReviewScalarFieldEnum[]
  }

  /**
   * CleanerReview create
   */
  export type CleanerReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerReview
     */
    select?: CleanerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerReview
     */
    omit?: CleanerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a CleanerReview.
     */
    data: XOR<CleanerReviewCreateInput, CleanerReviewUncheckedCreateInput>
  }

  /**
   * CleanerReview createMany
   */
  export type CleanerReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CleanerReviews.
     */
    data: CleanerReviewCreateManyInput | CleanerReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CleanerReview createManyAndReturn
   */
  export type CleanerReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerReview
     */
    select?: CleanerReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerReview
     */
    omit?: CleanerReviewOmit<ExtArgs> | null
    /**
     * The data used to create many CleanerReviews.
     */
    data: CleanerReviewCreateManyInput | CleanerReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CleanerReview update
   */
  export type CleanerReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerReview
     */
    select?: CleanerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerReview
     */
    omit?: CleanerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a CleanerReview.
     */
    data: XOR<CleanerReviewUpdateInput, CleanerReviewUncheckedUpdateInput>
    /**
     * Choose, which CleanerReview to update.
     */
    where: CleanerReviewWhereUniqueInput
  }

  /**
   * CleanerReview updateMany
   */
  export type CleanerReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CleanerReviews.
     */
    data: XOR<CleanerReviewUpdateManyMutationInput, CleanerReviewUncheckedUpdateManyInput>
    /**
     * Filter which CleanerReviews to update
     */
    where?: CleanerReviewWhereInput
    /**
     * Limit how many CleanerReviews to update.
     */
    limit?: number
  }

  /**
   * CleanerReview updateManyAndReturn
   */
  export type CleanerReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerReview
     */
    select?: CleanerReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerReview
     */
    omit?: CleanerReviewOmit<ExtArgs> | null
    /**
     * The data used to update CleanerReviews.
     */
    data: XOR<CleanerReviewUpdateManyMutationInput, CleanerReviewUncheckedUpdateManyInput>
    /**
     * Filter which CleanerReviews to update
     */
    where?: CleanerReviewWhereInput
    /**
     * Limit how many CleanerReviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CleanerReview upsert
   */
  export type CleanerReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerReview
     */
    select?: CleanerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerReview
     */
    omit?: CleanerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the CleanerReview to update in case it exists.
     */
    where: CleanerReviewWhereUniqueInput
    /**
     * In case the CleanerReview found by the `where` argument doesn't exist, create a new CleanerReview with this data.
     */
    create: XOR<CleanerReviewCreateInput, CleanerReviewUncheckedCreateInput>
    /**
     * In case the CleanerReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CleanerReviewUpdateInput, CleanerReviewUncheckedUpdateInput>
  }

  /**
   * CleanerReview delete
   */
  export type CleanerReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerReview
     */
    select?: CleanerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerReview
     */
    omit?: CleanerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerReviewInclude<ExtArgs> | null
    /**
     * Filter which CleanerReview to delete.
     */
    where: CleanerReviewWhereUniqueInput
  }

  /**
   * CleanerReview deleteMany
   */
  export type CleanerReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CleanerReviews to delete
     */
    where?: CleanerReviewWhereInput
    /**
     * Limit how many CleanerReviews to delete.
     */
    limit?: number
  }

  /**
   * CleanerReview without action
   */
  export type CleanerReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerReview
     */
    select?: CleanerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerReview
     */
    omit?: CleanerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerReviewInclude<ExtArgs> | null
  }


  /**
   * Model CleanerJob
   */

  export type AggregateCleanerJob = {
    _count: CleanerJobCountAggregateOutputType | null
    _avg: CleanerJobAvgAggregateOutputType | null
    _sum: CleanerJobSumAggregateOutputType | null
    _min: CleanerJobMinAggregateOutputType | null
    _max: CleanerJobMaxAggregateOutputType | null
  }

  export type CleanerJobAvgAggregateOutputType = {
    id: number | null
    cleanerProfileId: number | null
    orderId: number | null
  }

  export type CleanerJobSumAggregateOutputType = {
    id: number | null
    cleanerProfileId: number | null
    orderId: number | null
  }

  export type CleanerJobMinAggregateOutputType = {
    id: number | null
    cleanerProfileId: number | null
    orderId: number | null
    status: $Enums.JobStatus | null
    paymentStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CleanerJobMaxAggregateOutputType = {
    id: number | null
    cleanerProfileId: number | null
    orderId: number | null
    status: $Enums.JobStatus | null
    paymentStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CleanerJobCountAggregateOutputType = {
    id: number
    cleanerProfileId: number
    orderId: number
    status: number
    paymentStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CleanerJobAvgAggregateInputType = {
    id?: true
    cleanerProfileId?: true
    orderId?: true
  }

  export type CleanerJobSumAggregateInputType = {
    id?: true
    cleanerProfileId?: true
    orderId?: true
  }

  export type CleanerJobMinAggregateInputType = {
    id?: true
    cleanerProfileId?: true
    orderId?: true
    status?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CleanerJobMaxAggregateInputType = {
    id?: true
    cleanerProfileId?: true
    orderId?: true
    status?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CleanerJobCountAggregateInputType = {
    id?: true
    cleanerProfileId?: true
    orderId?: true
    status?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CleanerJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CleanerJob to aggregate.
     */
    where?: CleanerJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerJobs to fetch.
     */
    orderBy?: CleanerJobOrderByWithRelationInput | CleanerJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CleanerJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CleanerJobs
    **/
    _count?: true | CleanerJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CleanerJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CleanerJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CleanerJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CleanerJobMaxAggregateInputType
  }

  export type GetCleanerJobAggregateType<T extends CleanerJobAggregateArgs> = {
        [P in keyof T & keyof AggregateCleanerJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCleanerJob[P]>
      : GetScalarType<T[P], AggregateCleanerJob[P]>
  }




  export type CleanerJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CleanerJobWhereInput
    orderBy?: CleanerJobOrderByWithAggregationInput | CleanerJobOrderByWithAggregationInput[]
    by: CleanerJobScalarFieldEnum[] | CleanerJobScalarFieldEnum
    having?: CleanerJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CleanerJobCountAggregateInputType | true
    _avg?: CleanerJobAvgAggregateInputType
    _sum?: CleanerJobSumAggregateInputType
    _min?: CleanerJobMinAggregateInputType
    _max?: CleanerJobMaxAggregateInputType
  }

  export type CleanerJobGroupByOutputType = {
    id: number
    cleanerProfileId: number
    orderId: number
    status: $Enums.JobStatus | null
    paymentStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: CleanerJobCountAggregateOutputType | null
    _avg: CleanerJobAvgAggregateOutputType | null
    _sum: CleanerJobSumAggregateOutputType | null
    _min: CleanerJobMinAggregateOutputType | null
    _max: CleanerJobMaxAggregateOutputType | null
  }

  type GetCleanerJobGroupByPayload<T extends CleanerJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CleanerJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CleanerJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CleanerJobGroupByOutputType[P]>
            : GetScalarType<T[P], CleanerJobGroupByOutputType[P]>
        }
      >
    >


  export type CleanerJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cleanerProfileId?: boolean
    orderId?: boolean
    status?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cleanerProfile?: boolean | CleanerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cleanerJob"]>

  export type CleanerJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cleanerProfileId?: boolean
    orderId?: boolean
    status?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cleanerProfile?: boolean | CleanerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cleanerJob"]>

  export type CleanerJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cleanerProfileId?: boolean
    orderId?: boolean
    status?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cleanerProfile?: boolean | CleanerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cleanerJob"]>

  export type CleanerJobSelectScalar = {
    id?: boolean
    cleanerProfileId?: boolean
    orderId?: boolean
    status?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CleanerJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cleanerProfileId" | "orderId" | "status" | "paymentStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["cleanerJob"]>
  export type CleanerJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cleanerProfile?: boolean | CleanerProfileDefaultArgs<ExtArgs>
  }
  export type CleanerJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cleanerProfile?: boolean | CleanerProfileDefaultArgs<ExtArgs>
  }
  export type CleanerJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cleanerProfile?: boolean | CleanerProfileDefaultArgs<ExtArgs>
  }

  export type $CleanerJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CleanerJob"
    objects: {
      cleanerProfile: Prisma.$CleanerProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cleanerProfileId: number
      orderId: number
      status: $Enums.JobStatus | null
      paymentStatus: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["cleanerJob"]>
    composites: {}
  }

  type CleanerJobGetPayload<S extends boolean | null | undefined | CleanerJobDefaultArgs> = $Result.GetResult<Prisma.$CleanerJobPayload, S>

  type CleanerJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CleanerJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CleanerJobCountAggregateInputType | true
    }

  export interface CleanerJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CleanerJob'], meta: { name: 'CleanerJob' } }
    /**
     * Find zero or one CleanerJob that matches the filter.
     * @param {CleanerJobFindUniqueArgs} args - Arguments to find a CleanerJob
     * @example
     * // Get one CleanerJob
     * const cleanerJob = await prisma.cleanerJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CleanerJobFindUniqueArgs>(args: SelectSubset<T, CleanerJobFindUniqueArgs<ExtArgs>>): Prisma__CleanerJobClient<$Result.GetResult<Prisma.$CleanerJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CleanerJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CleanerJobFindUniqueOrThrowArgs} args - Arguments to find a CleanerJob
     * @example
     * // Get one CleanerJob
     * const cleanerJob = await prisma.cleanerJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CleanerJobFindUniqueOrThrowArgs>(args: SelectSubset<T, CleanerJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CleanerJobClient<$Result.GetResult<Prisma.$CleanerJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CleanerJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerJobFindFirstArgs} args - Arguments to find a CleanerJob
     * @example
     * // Get one CleanerJob
     * const cleanerJob = await prisma.cleanerJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CleanerJobFindFirstArgs>(args?: SelectSubset<T, CleanerJobFindFirstArgs<ExtArgs>>): Prisma__CleanerJobClient<$Result.GetResult<Prisma.$CleanerJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CleanerJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerJobFindFirstOrThrowArgs} args - Arguments to find a CleanerJob
     * @example
     * // Get one CleanerJob
     * const cleanerJob = await prisma.cleanerJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CleanerJobFindFirstOrThrowArgs>(args?: SelectSubset<T, CleanerJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__CleanerJobClient<$Result.GetResult<Prisma.$CleanerJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CleanerJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CleanerJobs
     * const cleanerJobs = await prisma.cleanerJob.findMany()
     * 
     * // Get first 10 CleanerJobs
     * const cleanerJobs = await prisma.cleanerJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cleanerJobWithIdOnly = await prisma.cleanerJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CleanerJobFindManyArgs>(args?: SelectSubset<T, CleanerJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CleanerJob.
     * @param {CleanerJobCreateArgs} args - Arguments to create a CleanerJob.
     * @example
     * // Create one CleanerJob
     * const CleanerJob = await prisma.cleanerJob.create({
     *   data: {
     *     // ... data to create a CleanerJob
     *   }
     * })
     * 
     */
    create<T extends CleanerJobCreateArgs>(args: SelectSubset<T, CleanerJobCreateArgs<ExtArgs>>): Prisma__CleanerJobClient<$Result.GetResult<Prisma.$CleanerJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CleanerJobs.
     * @param {CleanerJobCreateManyArgs} args - Arguments to create many CleanerJobs.
     * @example
     * // Create many CleanerJobs
     * const cleanerJob = await prisma.cleanerJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CleanerJobCreateManyArgs>(args?: SelectSubset<T, CleanerJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CleanerJobs and returns the data saved in the database.
     * @param {CleanerJobCreateManyAndReturnArgs} args - Arguments to create many CleanerJobs.
     * @example
     * // Create many CleanerJobs
     * const cleanerJob = await prisma.cleanerJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CleanerJobs and only return the `id`
     * const cleanerJobWithIdOnly = await prisma.cleanerJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CleanerJobCreateManyAndReturnArgs>(args?: SelectSubset<T, CleanerJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CleanerJob.
     * @param {CleanerJobDeleteArgs} args - Arguments to delete one CleanerJob.
     * @example
     * // Delete one CleanerJob
     * const CleanerJob = await prisma.cleanerJob.delete({
     *   where: {
     *     // ... filter to delete one CleanerJob
     *   }
     * })
     * 
     */
    delete<T extends CleanerJobDeleteArgs>(args: SelectSubset<T, CleanerJobDeleteArgs<ExtArgs>>): Prisma__CleanerJobClient<$Result.GetResult<Prisma.$CleanerJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CleanerJob.
     * @param {CleanerJobUpdateArgs} args - Arguments to update one CleanerJob.
     * @example
     * // Update one CleanerJob
     * const cleanerJob = await prisma.cleanerJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CleanerJobUpdateArgs>(args: SelectSubset<T, CleanerJobUpdateArgs<ExtArgs>>): Prisma__CleanerJobClient<$Result.GetResult<Prisma.$CleanerJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CleanerJobs.
     * @param {CleanerJobDeleteManyArgs} args - Arguments to filter CleanerJobs to delete.
     * @example
     * // Delete a few CleanerJobs
     * const { count } = await prisma.cleanerJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CleanerJobDeleteManyArgs>(args?: SelectSubset<T, CleanerJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CleanerJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CleanerJobs
     * const cleanerJob = await prisma.cleanerJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CleanerJobUpdateManyArgs>(args: SelectSubset<T, CleanerJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CleanerJobs and returns the data updated in the database.
     * @param {CleanerJobUpdateManyAndReturnArgs} args - Arguments to update many CleanerJobs.
     * @example
     * // Update many CleanerJobs
     * const cleanerJob = await prisma.cleanerJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CleanerJobs and only return the `id`
     * const cleanerJobWithIdOnly = await prisma.cleanerJob.updateManyAndReturn({
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
    updateManyAndReturn<T extends CleanerJobUpdateManyAndReturnArgs>(args: SelectSubset<T, CleanerJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CleanerJob.
     * @param {CleanerJobUpsertArgs} args - Arguments to update or create a CleanerJob.
     * @example
     * // Update or create a CleanerJob
     * const cleanerJob = await prisma.cleanerJob.upsert({
     *   create: {
     *     // ... data to create a CleanerJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CleanerJob we want to update
     *   }
     * })
     */
    upsert<T extends CleanerJobUpsertArgs>(args: SelectSubset<T, CleanerJobUpsertArgs<ExtArgs>>): Prisma__CleanerJobClient<$Result.GetResult<Prisma.$CleanerJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CleanerJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerJobCountArgs} args - Arguments to filter CleanerJobs to count.
     * @example
     * // Count the number of CleanerJobs
     * const count = await prisma.cleanerJob.count({
     *   where: {
     *     // ... the filter for the CleanerJobs we want to count
     *   }
     * })
    **/
    count<T extends CleanerJobCountArgs>(
      args?: Subset<T, CleanerJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CleanerJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CleanerJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CleanerJobAggregateArgs>(args: Subset<T, CleanerJobAggregateArgs>): Prisma.PrismaPromise<GetCleanerJobAggregateType<T>>

    /**
     * Group by CleanerJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerJobGroupByArgs} args - Group by arguments.
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
      T extends CleanerJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CleanerJobGroupByArgs['orderBy'] }
        : { orderBy?: CleanerJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CleanerJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCleanerJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CleanerJob model
   */
  readonly fields: CleanerJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CleanerJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CleanerJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cleanerProfile<T extends CleanerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CleanerProfileDefaultArgs<ExtArgs>>): Prisma__CleanerProfileClient<$Result.GetResult<Prisma.$CleanerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CleanerJob model
   */
  interface CleanerJobFieldRefs {
    readonly id: FieldRef<"CleanerJob", 'Int'>
    readonly cleanerProfileId: FieldRef<"CleanerJob", 'Int'>
    readonly orderId: FieldRef<"CleanerJob", 'Int'>
    readonly status: FieldRef<"CleanerJob", 'JobStatus'>
    readonly paymentStatus: FieldRef<"CleanerJob", 'String'>
    readonly createdAt: FieldRef<"CleanerJob", 'DateTime'>
    readonly updatedAt: FieldRef<"CleanerJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CleanerJob findUnique
   */
  export type CleanerJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerJob
     */
    select?: CleanerJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerJob
     */
    omit?: CleanerJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerJobInclude<ExtArgs> | null
    /**
     * Filter, which CleanerJob to fetch.
     */
    where: CleanerJobWhereUniqueInput
  }

  /**
   * CleanerJob findUniqueOrThrow
   */
  export type CleanerJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerJob
     */
    select?: CleanerJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerJob
     */
    omit?: CleanerJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerJobInclude<ExtArgs> | null
    /**
     * Filter, which CleanerJob to fetch.
     */
    where: CleanerJobWhereUniqueInput
  }

  /**
   * CleanerJob findFirst
   */
  export type CleanerJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerJob
     */
    select?: CleanerJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerJob
     */
    omit?: CleanerJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerJobInclude<ExtArgs> | null
    /**
     * Filter, which CleanerJob to fetch.
     */
    where?: CleanerJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerJobs to fetch.
     */
    orderBy?: CleanerJobOrderByWithRelationInput | CleanerJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CleanerJobs.
     */
    cursor?: CleanerJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CleanerJobs.
     */
    distinct?: CleanerJobScalarFieldEnum | CleanerJobScalarFieldEnum[]
  }

  /**
   * CleanerJob findFirstOrThrow
   */
  export type CleanerJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerJob
     */
    select?: CleanerJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerJob
     */
    omit?: CleanerJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerJobInclude<ExtArgs> | null
    /**
     * Filter, which CleanerJob to fetch.
     */
    where?: CleanerJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerJobs to fetch.
     */
    orderBy?: CleanerJobOrderByWithRelationInput | CleanerJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CleanerJobs.
     */
    cursor?: CleanerJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CleanerJobs.
     */
    distinct?: CleanerJobScalarFieldEnum | CleanerJobScalarFieldEnum[]
  }

  /**
   * CleanerJob findMany
   */
  export type CleanerJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerJob
     */
    select?: CleanerJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerJob
     */
    omit?: CleanerJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerJobInclude<ExtArgs> | null
    /**
     * Filter, which CleanerJobs to fetch.
     */
    where?: CleanerJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerJobs to fetch.
     */
    orderBy?: CleanerJobOrderByWithRelationInput | CleanerJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CleanerJobs.
     */
    cursor?: CleanerJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerJobs.
     */
    skip?: number
    distinct?: CleanerJobScalarFieldEnum | CleanerJobScalarFieldEnum[]
  }

  /**
   * CleanerJob create
   */
  export type CleanerJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerJob
     */
    select?: CleanerJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerJob
     */
    omit?: CleanerJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerJobInclude<ExtArgs> | null
    /**
     * The data needed to create a CleanerJob.
     */
    data: XOR<CleanerJobCreateInput, CleanerJobUncheckedCreateInput>
  }

  /**
   * CleanerJob createMany
   */
  export type CleanerJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CleanerJobs.
     */
    data: CleanerJobCreateManyInput | CleanerJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CleanerJob createManyAndReturn
   */
  export type CleanerJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerJob
     */
    select?: CleanerJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerJob
     */
    omit?: CleanerJobOmit<ExtArgs> | null
    /**
     * The data used to create many CleanerJobs.
     */
    data: CleanerJobCreateManyInput | CleanerJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CleanerJob update
   */
  export type CleanerJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerJob
     */
    select?: CleanerJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerJob
     */
    omit?: CleanerJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerJobInclude<ExtArgs> | null
    /**
     * The data needed to update a CleanerJob.
     */
    data: XOR<CleanerJobUpdateInput, CleanerJobUncheckedUpdateInput>
    /**
     * Choose, which CleanerJob to update.
     */
    where: CleanerJobWhereUniqueInput
  }

  /**
   * CleanerJob updateMany
   */
  export type CleanerJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CleanerJobs.
     */
    data: XOR<CleanerJobUpdateManyMutationInput, CleanerJobUncheckedUpdateManyInput>
    /**
     * Filter which CleanerJobs to update
     */
    where?: CleanerJobWhereInput
    /**
     * Limit how many CleanerJobs to update.
     */
    limit?: number
  }

  /**
   * CleanerJob updateManyAndReturn
   */
  export type CleanerJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerJob
     */
    select?: CleanerJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerJob
     */
    omit?: CleanerJobOmit<ExtArgs> | null
    /**
     * The data used to update CleanerJobs.
     */
    data: XOR<CleanerJobUpdateManyMutationInput, CleanerJobUncheckedUpdateManyInput>
    /**
     * Filter which CleanerJobs to update
     */
    where?: CleanerJobWhereInput
    /**
     * Limit how many CleanerJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CleanerJob upsert
   */
  export type CleanerJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerJob
     */
    select?: CleanerJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerJob
     */
    omit?: CleanerJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerJobInclude<ExtArgs> | null
    /**
     * The filter to search for the CleanerJob to update in case it exists.
     */
    where: CleanerJobWhereUniqueInput
    /**
     * In case the CleanerJob found by the `where` argument doesn't exist, create a new CleanerJob with this data.
     */
    create: XOR<CleanerJobCreateInput, CleanerJobUncheckedCreateInput>
    /**
     * In case the CleanerJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CleanerJobUpdateInput, CleanerJobUncheckedUpdateInput>
  }

  /**
   * CleanerJob delete
   */
  export type CleanerJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerJob
     */
    select?: CleanerJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerJob
     */
    omit?: CleanerJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerJobInclude<ExtArgs> | null
    /**
     * Filter which CleanerJob to delete.
     */
    where: CleanerJobWhereUniqueInput
  }

  /**
   * CleanerJob deleteMany
   */
  export type CleanerJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CleanerJobs to delete
     */
    where?: CleanerJobWhereInput
    /**
     * Limit how many CleanerJobs to delete.
     */
    limit?: number
  }

  /**
   * CleanerJob without action
   */
  export type CleanerJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerJob
     */
    select?: CleanerJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerJob
     */
    omit?: CleanerJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleanerJobInclude<ExtArgs> | null
  }


  /**
   * Model CleanerOutbox
   */

  export type AggregateCleanerOutbox = {
    _count: CleanerOutboxCountAggregateOutputType | null
    _avg: CleanerOutboxAvgAggregateOutputType | null
    _sum: CleanerOutboxSumAggregateOutputType | null
    _min: CleanerOutboxMinAggregateOutputType | null
    _max: CleanerOutboxMaxAggregateOutputType | null
  }

  export type CleanerOutboxAvgAggregateOutputType = {
    aggregateId: number | null
  }

  export type CleanerOutboxSumAggregateOutputType = {
    aggregateId: number | null
  }

  export type CleanerOutboxMinAggregateOutputType = {
    id: string | null
    aggregateType: string | null
    aggregateId: number | null
    createdAt: Date | null
  }

  export type CleanerOutboxMaxAggregateOutputType = {
    id: string | null
    aggregateType: string | null
    aggregateId: number | null
    createdAt: Date | null
  }

  export type CleanerOutboxCountAggregateOutputType = {
    id: number
    aggregateType: number
    aggregateId: number
    payload: number
    createdAt: number
    _all: number
  }


  export type CleanerOutboxAvgAggregateInputType = {
    aggregateId?: true
  }

  export type CleanerOutboxSumAggregateInputType = {
    aggregateId?: true
  }

  export type CleanerOutboxMinAggregateInputType = {
    id?: true
    aggregateType?: true
    aggregateId?: true
    createdAt?: true
  }

  export type CleanerOutboxMaxAggregateInputType = {
    id?: true
    aggregateType?: true
    aggregateId?: true
    createdAt?: true
  }

  export type CleanerOutboxCountAggregateInputType = {
    id?: true
    aggregateType?: true
    aggregateId?: true
    payload?: true
    createdAt?: true
    _all?: true
  }

  export type CleanerOutboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CleanerOutbox to aggregate.
     */
    where?: CleanerOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerOutboxes to fetch.
     */
    orderBy?: CleanerOutboxOrderByWithRelationInput | CleanerOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CleanerOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CleanerOutboxes
    **/
    _count?: true | CleanerOutboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CleanerOutboxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CleanerOutboxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CleanerOutboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CleanerOutboxMaxAggregateInputType
  }

  export type GetCleanerOutboxAggregateType<T extends CleanerOutboxAggregateArgs> = {
        [P in keyof T & keyof AggregateCleanerOutbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCleanerOutbox[P]>
      : GetScalarType<T[P], AggregateCleanerOutbox[P]>
  }




  export type CleanerOutboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CleanerOutboxWhereInput
    orderBy?: CleanerOutboxOrderByWithAggregationInput | CleanerOutboxOrderByWithAggregationInput[]
    by: CleanerOutboxScalarFieldEnum[] | CleanerOutboxScalarFieldEnum
    having?: CleanerOutboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CleanerOutboxCountAggregateInputType | true
    _avg?: CleanerOutboxAvgAggregateInputType
    _sum?: CleanerOutboxSumAggregateInputType
    _min?: CleanerOutboxMinAggregateInputType
    _max?: CleanerOutboxMaxAggregateInputType
  }

  export type CleanerOutboxGroupByOutputType = {
    id: string
    aggregateType: string
    aggregateId: number
    payload: JsonValue
    createdAt: Date
    _count: CleanerOutboxCountAggregateOutputType | null
    _avg: CleanerOutboxAvgAggregateOutputType | null
    _sum: CleanerOutboxSumAggregateOutputType | null
    _min: CleanerOutboxMinAggregateOutputType | null
    _max: CleanerOutboxMaxAggregateOutputType | null
  }

  type GetCleanerOutboxGroupByPayload<T extends CleanerOutboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CleanerOutboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CleanerOutboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CleanerOutboxGroupByOutputType[P]>
            : GetScalarType<T[P], CleanerOutboxGroupByOutputType[P]>
        }
      >
    >


  export type CleanerOutboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aggregateType?: boolean
    aggregateId?: boolean
    payload?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cleanerOutbox"]>

  export type CleanerOutboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aggregateType?: boolean
    aggregateId?: boolean
    payload?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cleanerOutbox"]>

  export type CleanerOutboxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aggregateType?: boolean
    aggregateId?: boolean
    payload?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cleanerOutbox"]>

  export type CleanerOutboxSelectScalar = {
    id?: boolean
    aggregateType?: boolean
    aggregateId?: boolean
    payload?: boolean
    createdAt?: boolean
  }

  export type CleanerOutboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aggregateType" | "aggregateId" | "payload" | "createdAt", ExtArgs["result"]["cleanerOutbox"]>

  export type $CleanerOutboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CleanerOutbox"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      aggregateType: string
      aggregateId: number
      payload: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["cleanerOutbox"]>
    composites: {}
  }

  type CleanerOutboxGetPayload<S extends boolean | null | undefined | CleanerOutboxDefaultArgs> = $Result.GetResult<Prisma.$CleanerOutboxPayload, S>

  type CleanerOutboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CleanerOutboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CleanerOutboxCountAggregateInputType | true
    }

  export interface CleanerOutboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CleanerOutbox'], meta: { name: 'CleanerOutbox' } }
    /**
     * Find zero or one CleanerOutbox that matches the filter.
     * @param {CleanerOutboxFindUniqueArgs} args - Arguments to find a CleanerOutbox
     * @example
     * // Get one CleanerOutbox
     * const cleanerOutbox = await prisma.cleanerOutbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CleanerOutboxFindUniqueArgs>(args: SelectSubset<T, CleanerOutboxFindUniqueArgs<ExtArgs>>): Prisma__CleanerOutboxClient<$Result.GetResult<Prisma.$CleanerOutboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CleanerOutbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CleanerOutboxFindUniqueOrThrowArgs} args - Arguments to find a CleanerOutbox
     * @example
     * // Get one CleanerOutbox
     * const cleanerOutbox = await prisma.cleanerOutbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CleanerOutboxFindUniqueOrThrowArgs>(args: SelectSubset<T, CleanerOutboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CleanerOutboxClient<$Result.GetResult<Prisma.$CleanerOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CleanerOutbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerOutboxFindFirstArgs} args - Arguments to find a CleanerOutbox
     * @example
     * // Get one CleanerOutbox
     * const cleanerOutbox = await prisma.cleanerOutbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CleanerOutboxFindFirstArgs>(args?: SelectSubset<T, CleanerOutboxFindFirstArgs<ExtArgs>>): Prisma__CleanerOutboxClient<$Result.GetResult<Prisma.$CleanerOutboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CleanerOutbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerOutboxFindFirstOrThrowArgs} args - Arguments to find a CleanerOutbox
     * @example
     * // Get one CleanerOutbox
     * const cleanerOutbox = await prisma.cleanerOutbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CleanerOutboxFindFirstOrThrowArgs>(args?: SelectSubset<T, CleanerOutboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__CleanerOutboxClient<$Result.GetResult<Prisma.$CleanerOutboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CleanerOutboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerOutboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CleanerOutboxes
     * const cleanerOutboxes = await prisma.cleanerOutbox.findMany()
     * 
     * // Get first 10 CleanerOutboxes
     * const cleanerOutboxes = await prisma.cleanerOutbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cleanerOutboxWithIdOnly = await prisma.cleanerOutbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CleanerOutboxFindManyArgs>(args?: SelectSubset<T, CleanerOutboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CleanerOutbox.
     * @param {CleanerOutboxCreateArgs} args - Arguments to create a CleanerOutbox.
     * @example
     * // Create one CleanerOutbox
     * const CleanerOutbox = await prisma.cleanerOutbox.create({
     *   data: {
     *     // ... data to create a CleanerOutbox
     *   }
     * })
     * 
     */
    create<T extends CleanerOutboxCreateArgs>(args: SelectSubset<T, CleanerOutboxCreateArgs<ExtArgs>>): Prisma__CleanerOutboxClient<$Result.GetResult<Prisma.$CleanerOutboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CleanerOutboxes.
     * @param {CleanerOutboxCreateManyArgs} args - Arguments to create many CleanerOutboxes.
     * @example
     * // Create many CleanerOutboxes
     * const cleanerOutbox = await prisma.cleanerOutbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CleanerOutboxCreateManyArgs>(args?: SelectSubset<T, CleanerOutboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CleanerOutboxes and returns the data saved in the database.
     * @param {CleanerOutboxCreateManyAndReturnArgs} args - Arguments to create many CleanerOutboxes.
     * @example
     * // Create many CleanerOutboxes
     * const cleanerOutbox = await prisma.cleanerOutbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CleanerOutboxes and only return the `id`
     * const cleanerOutboxWithIdOnly = await prisma.cleanerOutbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CleanerOutboxCreateManyAndReturnArgs>(args?: SelectSubset<T, CleanerOutboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerOutboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CleanerOutbox.
     * @param {CleanerOutboxDeleteArgs} args - Arguments to delete one CleanerOutbox.
     * @example
     * // Delete one CleanerOutbox
     * const CleanerOutbox = await prisma.cleanerOutbox.delete({
     *   where: {
     *     // ... filter to delete one CleanerOutbox
     *   }
     * })
     * 
     */
    delete<T extends CleanerOutboxDeleteArgs>(args: SelectSubset<T, CleanerOutboxDeleteArgs<ExtArgs>>): Prisma__CleanerOutboxClient<$Result.GetResult<Prisma.$CleanerOutboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CleanerOutbox.
     * @param {CleanerOutboxUpdateArgs} args - Arguments to update one CleanerOutbox.
     * @example
     * // Update one CleanerOutbox
     * const cleanerOutbox = await prisma.cleanerOutbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CleanerOutboxUpdateArgs>(args: SelectSubset<T, CleanerOutboxUpdateArgs<ExtArgs>>): Prisma__CleanerOutboxClient<$Result.GetResult<Prisma.$CleanerOutboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CleanerOutboxes.
     * @param {CleanerOutboxDeleteManyArgs} args - Arguments to filter CleanerOutboxes to delete.
     * @example
     * // Delete a few CleanerOutboxes
     * const { count } = await prisma.cleanerOutbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CleanerOutboxDeleteManyArgs>(args?: SelectSubset<T, CleanerOutboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CleanerOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerOutboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CleanerOutboxes
     * const cleanerOutbox = await prisma.cleanerOutbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CleanerOutboxUpdateManyArgs>(args: SelectSubset<T, CleanerOutboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CleanerOutboxes and returns the data updated in the database.
     * @param {CleanerOutboxUpdateManyAndReturnArgs} args - Arguments to update many CleanerOutboxes.
     * @example
     * // Update many CleanerOutboxes
     * const cleanerOutbox = await prisma.cleanerOutbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CleanerOutboxes and only return the `id`
     * const cleanerOutboxWithIdOnly = await prisma.cleanerOutbox.updateManyAndReturn({
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
    updateManyAndReturn<T extends CleanerOutboxUpdateManyAndReturnArgs>(args: SelectSubset<T, CleanerOutboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerOutboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CleanerOutbox.
     * @param {CleanerOutboxUpsertArgs} args - Arguments to update or create a CleanerOutbox.
     * @example
     * // Update or create a CleanerOutbox
     * const cleanerOutbox = await prisma.cleanerOutbox.upsert({
     *   create: {
     *     // ... data to create a CleanerOutbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CleanerOutbox we want to update
     *   }
     * })
     */
    upsert<T extends CleanerOutboxUpsertArgs>(args: SelectSubset<T, CleanerOutboxUpsertArgs<ExtArgs>>): Prisma__CleanerOutboxClient<$Result.GetResult<Prisma.$CleanerOutboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CleanerOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerOutboxCountArgs} args - Arguments to filter CleanerOutboxes to count.
     * @example
     * // Count the number of CleanerOutboxes
     * const count = await prisma.cleanerOutbox.count({
     *   where: {
     *     // ... the filter for the CleanerOutboxes we want to count
     *   }
     * })
    **/
    count<T extends CleanerOutboxCountArgs>(
      args?: Subset<T, CleanerOutboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CleanerOutboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CleanerOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerOutboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CleanerOutboxAggregateArgs>(args: Subset<T, CleanerOutboxAggregateArgs>): Prisma.PrismaPromise<GetCleanerOutboxAggregateType<T>>

    /**
     * Group by CleanerOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerOutboxGroupByArgs} args - Group by arguments.
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
      T extends CleanerOutboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CleanerOutboxGroupByArgs['orderBy'] }
        : { orderBy?: CleanerOutboxGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CleanerOutboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCleanerOutboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CleanerOutbox model
   */
  readonly fields: CleanerOutboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CleanerOutbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CleanerOutboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CleanerOutbox model
   */
  interface CleanerOutboxFieldRefs {
    readonly id: FieldRef<"CleanerOutbox", 'String'>
    readonly aggregateType: FieldRef<"CleanerOutbox", 'String'>
    readonly aggregateId: FieldRef<"CleanerOutbox", 'Int'>
    readonly payload: FieldRef<"CleanerOutbox", 'Json'>
    readonly createdAt: FieldRef<"CleanerOutbox", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CleanerOutbox findUnique
   */
  export type CleanerOutboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerOutbox
     */
    select?: CleanerOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerOutbox
     */
    omit?: CleanerOutboxOmit<ExtArgs> | null
    /**
     * Filter, which CleanerOutbox to fetch.
     */
    where: CleanerOutboxWhereUniqueInput
  }

  /**
   * CleanerOutbox findUniqueOrThrow
   */
  export type CleanerOutboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerOutbox
     */
    select?: CleanerOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerOutbox
     */
    omit?: CleanerOutboxOmit<ExtArgs> | null
    /**
     * Filter, which CleanerOutbox to fetch.
     */
    where: CleanerOutboxWhereUniqueInput
  }

  /**
   * CleanerOutbox findFirst
   */
  export type CleanerOutboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerOutbox
     */
    select?: CleanerOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerOutbox
     */
    omit?: CleanerOutboxOmit<ExtArgs> | null
    /**
     * Filter, which CleanerOutbox to fetch.
     */
    where?: CleanerOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerOutboxes to fetch.
     */
    orderBy?: CleanerOutboxOrderByWithRelationInput | CleanerOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CleanerOutboxes.
     */
    cursor?: CleanerOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CleanerOutboxes.
     */
    distinct?: CleanerOutboxScalarFieldEnum | CleanerOutboxScalarFieldEnum[]
  }

  /**
   * CleanerOutbox findFirstOrThrow
   */
  export type CleanerOutboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerOutbox
     */
    select?: CleanerOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerOutbox
     */
    omit?: CleanerOutboxOmit<ExtArgs> | null
    /**
     * Filter, which CleanerOutbox to fetch.
     */
    where?: CleanerOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerOutboxes to fetch.
     */
    orderBy?: CleanerOutboxOrderByWithRelationInput | CleanerOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CleanerOutboxes.
     */
    cursor?: CleanerOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CleanerOutboxes.
     */
    distinct?: CleanerOutboxScalarFieldEnum | CleanerOutboxScalarFieldEnum[]
  }

  /**
   * CleanerOutbox findMany
   */
  export type CleanerOutboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerOutbox
     */
    select?: CleanerOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerOutbox
     */
    omit?: CleanerOutboxOmit<ExtArgs> | null
    /**
     * Filter, which CleanerOutboxes to fetch.
     */
    where?: CleanerOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanerOutboxes to fetch.
     */
    orderBy?: CleanerOutboxOrderByWithRelationInput | CleanerOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CleanerOutboxes.
     */
    cursor?: CleanerOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanerOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanerOutboxes.
     */
    skip?: number
    distinct?: CleanerOutboxScalarFieldEnum | CleanerOutboxScalarFieldEnum[]
  }

  /**
   * CleanerOutbox create
   */
  export type CleanerOutboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerOutbox
     */
    select?: CleanerOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerOutbox
     */
    omit?: CleanerOutboxOmit<ExtArgs> | null
    /**
     * The data needed to create a CleanerOutbox.
     */
    data: XOR<CleanerOutboxCreateInput, CleanerOutboxUncheckedCreateInput>
  }

  /**
   * CleanerOutbox createMany
   */
  export type CleanerOutboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CleanerOutboxes.
     */
    data: CleanerOutboxCreateManyInput | CleanerOutboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CleanerOutbox createManyAndReturn
   */
  export type CleanerOutboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerOutbox
     */
    select?: CleanerOutboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerOutbox
     */
    omit?: CleanerOutboxOmit<ExtArgs> | null
    /**
     * The data used to create many CleanerOutboxes.
     */
    data: CleanerOutboxCreateManyInput | CleanerOutboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CleanerOutbox update
   */
  export type CleanerOutboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerOutbox
     */
    select?: CleanerOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerOutbox
     */
    omit?: CleanerOutboxOmit<ExtArgs> | null
    /**
     * The data needed to update a CleanerOutbox.
     */
    data: XOR<CleanerOutboxUpdateInput, CleanerOutboxUncheckedUpdateInput>
    /**
     * Choose, which CleanerOutbox to update.
     */
    where: CleanerOutboxWhereUniqueInput
  }

  /**
   * CleanerOutbox updateMany
   */
  export type CleanerOutboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CleanerOutboxes.
     */
    data: XOR<CleanerOutboxUpdateManyMutationInput, CleanerOutboxUncheckedUpdateManyInput>
    /**
     * Filter which CleanerOutboxes to update
     */
    where?: CleanerOutboxWhereInput
    /**
     * Limit how many CleanerOutboxes to update.
     */
    limit?: number
  }

  /**
   * CleanerOutbox updateManyAndReturn
   */
  export type CleanerOutboxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerOutbox
     */
    select?: CleanerOutboxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerOutbox
     */
    omit?: CleanerOutboxOmit<ExtArgs> | null
    /**
     * The data used to update CleanerOutboxes.
     */
    data: XOR<CleanerOutboxUpdateManyMutationInput, CleanerOutboxUncheckedUpdateManyInput>
    /**
     * Filter which CleanerOutboxes to update
     */
    where?: CleanerOutboxWhereInput
    /**
     * Limit how many CleanerOutboxes to update.
     */
    limit?: number
  }

  /**
   * CleanerOutbox upsert
   */
  export type CleanerOutboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerOutbox
     */
    select?: CleanerOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerOutbox
     */
    omit?: CleanerOutboxOmit<ExtArgs> | null
    /**
     * The filter to search for the CleanerOutbox to update in case it exists.
     */
    where: CleanerOutboxWhereUniqueInput
    /**
     * In case the CleanerOutbox found by the `where` argument doesn't exist, create a new CleanerOutbox with this data.
     */
    create: XOR<CleanerOutboxCreateInput, CleanerOutboxUncheckedCreateInput>
    /**
     * In case the CleanerOutbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CleanerOutboxUpdateInput, CleanerOutboxUncheckedUpdateInput>
  }

  /**
   * CleanerOutbox delete
   */
  export type CleanerOutboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerOutbox
     */
    select?: CleanerOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerOutbox
     */
    omit?: CleanerOutboxOmit<ExtArgs> | null
    /**
     * Filter which CleanerOutbox to delete.
     */
    where: CleanerOutboxWhereUniqueInput
  }

  /**
   * CleanerOutbox deleteMany
   */
  export type CleanerOutboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CleanerOutboxes to delete
     */
    where?: CleanerOutboxWhereInput
    /**
     * Limit how many CleanerOutboxes to delete.
     */
    limit?: number
  }

  /**
   * CleanerOutbox without action
   */
  export type CleanerOutboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanerOutbox
     */
    select?: CleanerOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanerOutbox
     */
    omit?: CleanerOutboxOmit<ExtArgs> | null
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


  export const CleanerProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    zipCode: 'zipCode',
    city: 'city',
    experienceYears: 'experienceYears',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    busy: 'busy'
  };

  export type CleanerProfileScalarFieldEnum = (typeof CleanerProfileScalarFieldEnum)[keyof typeof CleanerProfileScalarFieldEnum]


  export const CleanerScheduleDayScalarFieldEnum: {
    id: 'id',
    cleanerProfileId: 'cleanerProfileId',
    dayOfWeek: 'dayOfWeek',
    createdAt: 'createdAt'
  };

  export type CleanerScheduleDayScalarFieldEnum = (typeof CleanerScheduleDayScalarFieldEnum)[keyof typeof CleanerScheduleDayScalarFieldEnum]


  export const CleanerScheduleSlotScalarFieldEnum: {
    id: 'id',
    scheduleDayId: 'scheduleDayId',
    startTime: 'startTime',
    endTime: 'endTime',
    isAvailable: 'isAvailable',
    createdAt: 'createdAt'
  };

  export type CleanerScheduleSlotScalarFieldEnum = (typeof CleanerScheduleSlotScalarFieldEnum)[keyof typeof CleanerScheduleSlotScalarFieldEnum]


  export const CleanerReviewScalarFieldEnum: {
    id: 'id',
    cleanerProfileId: 'cleanerProfileId',
    customerId: 'customerId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type CleanerReviewScalarFieldEnum = (typeof CleanerReviewScalarFieldEnum)[keyof typeof CleanerReviewScalarFieldEnum]


  export const CleanerJobScalarFieldEnum: {
    id: 'id',
    cleanerProfileId: 'cleanerProfileId',
    orderId: 'orderId',
    status: 'status',
    paymentStatus: 'paymentStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CleanerJobScalarFieldEnum = (typeof CleanerJobScalarFieldEnum)[keyof typeof CleanerJobScalarFieldEnum]


  export const CleanerOutboxScalarFieldEnum: {
    id: 'id',
    aggregateType: 'aggregateType',
    aggregateId: 'aggregateId',
    payload: 'payload',
    createdAt: 'createdAt'
  };

  export type CleanerOutboxScalarFieldEnum = (typeof CleanerOutboxScalarFieldEnum)[keyof typeof CleanerOutboxScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CleanerProfileWhereInput = {
    AND?: CleanerProfileWhereInput | CleanerProfileWhereInput[]
    OR?: CleanerProfileWhereInput[]
    NOT?: CleanerProfileWhereInput | CleanerProfileWhereInput[]
    id?: IntFilter<"CleanerProfile"> | number
    userId?: IntFilter<"CleanerProfile"> | number
    firstName?: StringNullableFilter<"CleanerProfile"> | string | null
    lastName?: StringNullableFilter<"CleanerProfile"> | string | null
    zipCode?: IntNullableFilter<"CleanerProfile"> | number | null
    city?: StringNullableFilter<"CleanerProfile"> | string | null
    experienceYears?: IntNullableFilter<"CleanerProfile"> | number | null
    rating?: IntNullableFilter<"CleanerProfile"> | number | null
    createdAt?: DateTimeFilter<"CleanerProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CleanerProfile"> | Date | string
    busy?: BoolFilter<"CleanerProfile"> | boolean
    schedules?: CleanerScheduleDayListRelationFilter
    reviews?: CleanerReviewListRelationFilter
    jobs?: CleanerJobListRelationFilter
  }

  export type CleanerProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    experienceYears?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    busy?: SortOrder
    schedules?: CleanerScheduleDayOrderByRelationAggregateInput
    reviews?: CleanerReviewOrderByRelationAggregateInput
    jobs?: CleanerJobOrderByRelationAggregateInput
  }

  export type CleanerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: CleanerProfileWhereInput | CleanerProfileWhereInput[]
    OR?: CleanerProfileWhereInput[]
    NOT?: CleanerProfileWhereInput | CleanerProfileWhereInput[]
    firstName?: StringNullableFilter<"CleanerProfile"> | string | null
    lastName?: StringNullableFilter<"CleanerProfile"> | string | null
    zipCode?: IntNullableFilter<"CleanerProfile"> | number | null
    city?: StringNullableFilter<"CleanerProfile"> | string | null
    experienceYears?: IntNullableFilter<"CleanerProfile"> | number | null
    rating?: IntNullableFilter<"CleanerProfile"> | number | null
    createdAt?: DateTimeFilter<"CleanerProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CleanerProfile"> | Date | string
    busy?: BoolFilter<"CleanerProfile"> | boolean
    schedules?: CleanerScheduleDayListRelationFilter
    reviews?: CleanerReviewListRelationFilter
    jobs?: CleanerJobListRelationFilter
  }, "id" | "userId">

  export type CleanerProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    experienceYears?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    busy?: SortOrder
    _count?: CleanerProfileCountOrderByAggregateInput
    _avg?: CleanerProfileAvgOrderByAggregateInput
    _max?: CleanerProfileMaxOrderByAggregateInput
    _min?: CleanerProfileMinOrderByAggregateInput
    _sum?: CleanerProfileSumOrderByAggregateInput
  }

  export type CleanerProfileScalarWhereWithAggregatesInput = {
    AND?: CleanerProfileScalarWhereWithAggregatesInput | CleanerProfileScalarWhereWithAggregatesInput[]
    OR?: CleanerProfileScalarWhereWithAggregatesInput[]
    NOT?: CleanerProfileScalarWhereWithAggregatesInput | CleanerProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CleanerProfile"> | number
    userId?: IntWithAggregatesFilter<"CleanerProfile"> | number
    firstName?: StringNullableWithAggregatesFilter<"CleanerProfile"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"CleanerProfile"> | string | null
    zipCode?: IntNullableWithAggregatesFilter<"CleanerProfile"> | number | null
    city?: StringNullableWithAggregatesFilter<"CleanerProfile"> | string | null
    experienceYears?: IntNullableWithAggregatesFilter<"CleanerProfile"> | number | null
    rating?: IntNullableWithAggregatesFilter<"CleanerProfile"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"CleanerProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CleanerProfile"> | Date | string
    busy?: BoolWithAggregatesFilter<"CleanerProfile"> | boolean
  }

  export type CleanerScheduleDayWhereInput = {
    AND?: CleanerScheduleDayWhereInput | CleanerScheduleDayWhereInput[]
    OR?: CleanerScheduleDayWhereInput[]
    NOT?: CleanerScheduleDayWhereInput | CleanerScheduleDayWhereInput[]
    id?: IntFilter<"CleanerScheduleDay"> | number
    cleanerProfileId?: IntFilter<"CleanerScheduleDay"> | number
    dayOfWeek?: IntFilter<"CleanerScheduleDay"> | number
    createdAt?: DateTimeNullableFilter<"CleanerScheduleDay"> | Date | string | null
    slots?: CleanerScheduleSlotListRelationFilter
    cleanerProfile?: XOR<CleanerProfileScalarRelationFilter, CleanerProfileWhereInput>
  }

  export type CleanerScheduleDayOrderByWithRelationInput = {
    id?: SortOrder
    cleanerProfileId?: SortOrder
    dayOfWeek?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    slots?: CleanerScheduleSlotOrderByRelationAggregateInput
    cleanerProfile?: CleanerProfileOrderByWithRelationInput
  }

  export type CleanerScheduleDayWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cleanerProfileId_dayOfWeek?: CleanerScheduleDayCleanerProfileIdDayOfWeekCompoundUniqueInput
    AND?: CleanerScheduleDayWhereInput | CleanerScheduleDayWhereInput[]
    OR?: CleanerScheduleDayWhereInput[]
    NOT?: CleanerScheduleDayWhereInput | CleanerScheduleDayWhereInput[]
    cleanerProfileId?: IntFilter<"CleanerScheduleDay"> | number
    dayOfWeek?: IntFilter<"CleanerScheduleDay"> | number
    createdAt?: DateTimeNullableFilter<"CleanerScheduleDay"> | Date | string | null
    slots?: CleanerScheduleSlotListRelationFilter
    cleanerProfile?: XOR<CleanerProfileScalarRelationFilter, CleanerProfileWhereInput>
  }, "id" | "cleanerProfileId_dayOfWeek">

  export type CleanerScheduleDayOrderByWithAggregationInput = {
    id?: SortOrder
    cleanerProfileId?: SortOrder
    dayOfWeek?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: CleanerScheduleDayCountOrderByAggregateInput
    _avg?: CleanerScheduleDayAvgOrderByAggregateInput
    _max?: CleanerScheduleDayMaxOrderByAggregateInput
    _min?: CleanerScheduleDayMinOrderByAggregateInput
    _sum?: CleanerScheduleDaySumOrderByAggregateInput
  }

  export type CleanerScheduleDayScalarWhereWithAggregatesInput = {
    AND?: CleanerScheduleDayScalarWhereWithAggregatesInput | CleanerScheduleDayScalarWhereWithAggregatesInput[]
    OR?: CleanerScheduleDayScalarWhereWithAggregatesInput[]
    NOT?: CleanerScheduleDayScalarWhereWithAggregatesInput | CleanerScheduleDayScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CleanerScheduleDay"> | number
    cleanerProfileId?: IntWithAggregatesFilter<"CleanerScheduleDay"> | number
    dayOfWeek?: IntWithAggregatesFilter<"CleanerScheduleDay"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"CleanerScheduleDay"> | Date | string | null
  }

  export type CleanerScheduleSlotWhereInput = {
    AND?: CleanerScheduleSlotWhereInput | CleanerScheduleSlotWhereInput[]
    OR?: CleanerScheduleSlotWhereInput[]
    NOT?: CleanerScheduleSlotWhereInput | CleanerScheduleSlotWhereInput[]
    id?: IntFilter<"CleanerScheduleSlot"> | number
    scheduleDayId?: IntFilter<"CleanerScheduleSlot"> | number
    startTime?: StringNullableFilter<"CleanerScheduleSlot"> | string | null
    endTime?: StringNullableFilter<"CleanerScheduleSlot"> | string | null
    isAvailable?: BoolFilter<"CleanerScheduleSlot"> | boolean
    createdAt?: DateTimeFilter<"CleanerScheduleSlot"> | Date | string
    scheduleDay?: XOR<CleanerScheduleDayScalarRelationFilter, CleanerScheduleDayWhereInput>
  }

  export type CleanerScheduleSlotOrderByWithRelationInput = {
    id?: SortOrder
    scheduleDayId?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    scheduleDay?: CleanerScheduleDayOrderByWithRelationInput
  }

  export type CleanerScheduleSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CleanerScheduleSlotWhereInput | CleanerScheduleSlotWhereInput[]
    OR?: CleanerScheduleSlotWhereInput[]
    NOT?: CleanerScheduleSlotWhereInput | CleanerScheduleSlotWhereInput[]
    scheduleDayId?: IntFilter<"CleanerScheduleSlot"> | number
    startTime?: StringNullableFilter<"CleanerScheduleSlot"> | string | null
    endTime?: StringNullableFilter<"CleanerScheduleSlot"> | string | null
    isAvailable?: BoolFilter<"CleanerScheduleSlot"> | boolean
    createdAt?: DateTimeFilter<"CleanerScheduleSlot"> | Date | string
    scheduleDay?: XOR<CleanerScheduleDayScalarRelationFilter, CleanerScheduleDayWhereInput>
  }, "id">

  export type CleanerScheduleSlotOrderByWithAggregationInput = {
    id?: SortOrder
    scheduleDayId?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    _count?: CleanerScheduleSlotCountOrderByAggregateInput
    _avg?: CleanerScheduleSlotAvgOrderByAggregateInput
    _max?: CleanerScheduleSlotMaxOrderByAggregateInput
    _min?: CleanerScheduleSlotMinOrderByAggregateInput
    _sum?: CleanerScheduleSlotSumOrderByAggregateInput
  }

  export type CleanerScheduleSlotScalarWhereWithAggregatesInput = {
    AND?: CleanerScheduleSlotScalarWhereWithAggregatesInput | CleanerScheduleSlotScalarWhereWithAggregatesInput[]
    OR?: CleanerScheduleSlotScalarWhereWithAggregatesInput[]
    NOT?: CleanerScheduleSlotScalarWhereWithAggregatesInput | CleanerScheduleSlotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CleanerScheduleSlot"> | number
    scheduleDayId?: IntWithAggregatesFilter<"CleanerScheduleSlot"> | number
    startTime?: StringNullableWithAggregatesFilter<"CleanerScheduleSlot"> | string | null
    endTime?: StringNullableWithAggregatesFilter<"CleanerScheduleSlot"> | string | null
    isAvailable?: BoolWithAggregatesFilter<"CleanerScheduleSlot"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CleanerScheduleSlot"> | Date | string
  }

  export type CleanerReviewWhereInput = {
    AND?: CleanerReviewWhereInput | CleanerReviewWhereInput[]
    OR?: CleanerReviewWhereInput[]
    NOT?: CleanerReviewWhereInput | CleanerReviewWhereInput[]
    id?: IntFilter<"CleanerReview"> | number
    cleanerProfileId?: IntFilter<"CleanerReview"> | number
    customerId?: IntNullableFilter<"CleanerReview"> | number | null
    rating?: IntNullableFilter<"CleanerReview"> | number | null
    comment?: StringNullableFilter<"CleanerReview"> | string | null
    createdAt?: DateTimeFilter<"CleanerReview"> | Date | string
    cleanerProfile?: XOR<CleanerProfileScalarRelationFilter, CleanerProfileWhereInput>
  }

  export type CleanerReviewOrderByWithRelationInput = {
    id?: SortOrder
    cleanerProfileId?: SortOrder
    customerId?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    cleanerProfile?: CleanerProfileOrderByWithRelationInput
  }

  export type CleanerReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CleanerReviewWhereInput | CleanerReviewWhereInput[]
    OR?: CleanerReviewWhereInput[]
    NOT?: CleanerReviewWhereInput | CleanerReviewWhereInput[]
    cleanerProfileId?: IntFilter<"CleanerReview"> | number
    customerId?: IntNullableFilter<"CleanerReview"> | number | null
    rating?: IntNullableFilter<"CleanerReview"> | number | null
    comment?: StringNullableFilter<"CleanerReview"> | string | null
    createdAt?: DateTimeFilter<"CleanerReview"> | Date | string
    cleanerProfile?: XOR<CleanerProfileScalarRelationFilter, CleanerProfileWhereInput>
  }, "id">

  export type CleanerReviewOrderByWithAggregationInput = {
    id?: SortOrder
    cleanerProfileId?: SortOrder
    customerId?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CleanerReviewCountOrderByAggregateInput
    _avg?: CleanerReviewAvgOrderByAggregateInput
    _max?: CleanerReviewMaxOrderByAggregateInput
    _min?: CleanerReviewMinOrderByAggregateInput
    _sum?: CleanerReviewSumOrderByAggregateInput
  }

  export type CleanerReviewScalarWhereWithAggregatesInput = {
    AND?: CleanerReviewScalarWhereWithAggregatesInput | CleanerReviewScalarWhereWithAggregatesInput[]
    OR?: CleanerReviewScalarWhereWithAggregatesInput[]
    NOT?: CleanerReviewScalarWhereWithAggregatesInput | CleanerReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CleanerReview"> | number
    cleanerProfileId?: IntWithAggregatesFilter<"CleanerReview"> | number
    customerId?: IntNullableWithAggregatesFilter<"CleanerReview"> | number | null
    rating?: IntNullableWithAggregatesFilter<"CleanerReview"> | number | null
    comment?: StringNullableWithAggregatesFilter<"CleanerReview"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CleanerReview"> | Date | string
  }

  export type CleanerJobWhereInput = {
    AND?: CleanerJobWhereInput | CleanerJobWhereInput[]
    OR?: CleanerJobWhereInput[]
    NOT?: CleanerJobWhereInput | CleanerJobWhereInput[]
    id?: IntFilter<"CleanerJob"> | number
    cleanerProfileId?: IntFilter<"CleanerJob"> | number
    orderId?: IntFilter<"CleanerJob"> | number
    status?: EnumJobStatusNullableFilter<"CleanerJob"> | $Enums.JobStatus | null
    paymentStatus?: StringNullableFilter<"CleanerJob"> | string | null
    createdAt?: DateTimeNullableFilter<"CleanerJob"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"CleanerJob"> | Date | string | null
    cleanerProfile?: XOR<CleanerProfileScalarRelationFilter, CleanerProfileWhereInput>
  }

  export type CleanerJobOrderByWithRelationInput = {
    id?: SortOrder
    cleanerProfileId?: SortOrder
    orderId?: SortOrder
    status?: SortOrderInput | SortOrder
    paymentStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    cleanerProfile?: CleanerProfileOrderByWithRelationInput
  }

  export type CleanerJobWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CleanerJobWhereInput | CleanerJobWhereInput[]
    OR?: CleanerJobWhereInput[]
    NOT?: CleanerJobWhereInput | CleanerJobWhereInput[]
    cleanerProfileId?: IntFilter<"CleanerJob"> | number
    orderId?: IntFilter<"CleanerJob"> | number
    status?: EnumJobStatusNullableFilter<"CleanerJob"> | $Enums.JobStatus | null
    paymentStatus?: StringNullableFilter<"CleanerJob"> | string | null
    createdAt?: DateTimeNullableFilter<"CleanerJob"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"CleanerJob"> | Date | string | null
    cleanerProfile?: XOR<CleanerProfileScalarRelationFilter, CleanerProfileWhereInput>
  }, "id">

  export type CleanerJobOrderByWithAggregationInput = {
    id?: SortOrder
    cleanerProfileId?: SortOrder
    orderId?: SortOrder
    status?: SortOrderInput | SortOrder
    paymentStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: CleanerJobCountOrderByAggregateInput
    _avg?: CleanerJobAvgOrderByAggregateInput
    _max?: CleanerJobMaxOrderByAggregateInput
    _min?: CleanerJobMinOrderByAggregateInput
    _sum?: CleanerJobSumOrderByAggregateInput
  }

  export type CleanerJobScalarWhereWithAggregatesInput = {
    AND?: CleanerJobScalarWhereWithAggregatesInput | CleanerJobScalarWhereWithAggregatesInput[]
    OR?: CleanerJobScalarWhereWithAggregatesInput[]
    NOT?: CleanerJobScalarWhereWithAggregatesInput | CleanerJobScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CleanerJob"> | number
    cleanerProfileId?: IntWithAggregatesFilter<"CleanerJob"> | number
    orderId?: IntWithAggregatesFilter<"CleanerJob"> | number
    status?: EnumJobStatusNullableWithAggregatesFilter<"CleanerJob"> | $Enums.JobStatus | null
    paymentStatus?: StringNullableWithAggregatesFilter<"CleanerJob"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"CleanerJob"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"CleanerJob"> | Date | string | null
  }

  export type CleanerOutboxWhereInput = {
    AND?: CleanerOutboxWhereInput | CleanerOutboxWhereInput[]
    OR?: CleanerOutboxWhereInput[]
    NOT?: CleanerOutboxWhereInput | CleanerOutboxWhereInput[]
    id?: StringFilter<"CleanerOutbox"> | string
    aggregateType?: StringFilter<"CleanerOutbox"> | string
    aggregateId?: IntFilter<"CleanerOutbox"> | number
    payload?: JsonFilter<"CleanerOutbox">
    createdAt?: DateTimeFilter<"CleanerOutbox"> | Date | string
  }

  export type CleanerOutboxOrderByWithRelationInput = {
    id?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
  }

  export type CleanerOutboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CleanerOutboxWhereInput | CleanerOutboxWhereInput[]
    OR?: CleanerOutboxWhereInput[]
    NOT?: CleanerOutboxWhereInput | CleanerOutboxWhereInput[]
    aggregateType?: StringFilter<"CleanerOutbox"> | string
    aggregateId?: IntFilter<"CleanerOutbox"> | number
    payload?: JsonFilter<"CleanerOutbox">
    createdAt?: DateTimeFilter<"CleanerOutbox"> | Date | string
  }, "id">

  export type CleanerOutboxOrderByWithAggregationInput = {
    id?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
    _count?: CleanerOutboxCountOrderByAggregateInput
    _avg?: CleanerOutboxAvgOrderByAggregateInput
    _max?: CleanerOutboxMaxOrderByAggregateInput
    _min?: CleanerOutboxMinOrderByAggregateInput
    _sum?: CleanerOutboxSumOrderByAggregateInput
  }

  export type CleanerOutboxScalarWhereWithAggregatesInput = {
    AND?: CleanerOutboxScalarWhereWithAggregatesInput | CleanerOutboxScalarWhereWithAggregatesInput[]
    OR?: CleanerOutboxScalarWhereWithAggregatesInput[]
    NOT?: CleanerOutboxScalarWhereWithAggregatesInput | CleanerOutboxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CleanerOutbox"> | string
    aggregateType?: StringWithAggregatesFilter<"CleanerOutbox"> | string
    aggregateId?: IntWithAggregatesFilter<"CleanerOutbox"> | number
    payload?: JsonWithAggregatesFilter<"CleanerOutbox">
    createdAt?: DateTimeWithAggregatesFilter<"CleanerOutbox"> | Date | string
  }

  export type CleanerProfileCreateInput = {
    userId: number
    firstName?: string | null
    lastName?: string | null
    zipCode?: number | null
    city?: string | null
    experienceYears?: number | null
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    busy?: boolean
    schedules?: CleanerScheduleDayCreateNestedManyWithoutCleanerProfileInput
    reviews?: CleanerReviewCreateNestedManyWithoutCleanerProfileInput
    jobs?: CleanerJobCreateNestedManyWithoutCleanerProfileInput
  }

  export type CleanerProfileUncheckedCreateInput = {
    id?: number
    userId: number
    firstName?: string | null
    lastName?: string | null
    zipCode?: number | null
    city?: string | null
    experienceYears?: number | null
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    busy?: boolean
    schedules?: CleanerScheduleDayUncheckedCreateNestedManyWithoutCleanerProfileInput
    reviews?: CleanerReviewUncheckedCreateNestedManyWithoutCleanerProfileInput
    jobs?: CleanerJobUncheckedCreateNestedManyWithoutCleanerProfileInput
  }

  export type CleanerProfileUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busy?: BoolFieldUpdateOperationsInput | boolean
    schedules?: CleanerScheduleDayUpdateManyWithoutCleanerProfileNestedInput
    reviews?: CleanerReviewUpdateManyWithoutCleanerProfileNestedInput
    jobs?: CleanerJobUpdateManyWithoutCleanerProfileNestedInput
  }

  export type CleanerProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busy?: BoolFieldUpdateOperationsInput | boolean
    schedules?: CleanerScheduleDayUncheckedUpdateManyWithoutCleanerProfileNestedInput
    reviews?: CleanerReviewUncheckedUpdateManyWithoutCleanerProfileNestedInput
    jobs?: CleanerJobUncheckedUpdateManyWithoutCleanerProfileNestedInput
  }

  export type CleanerProfileCreateManyInput = {
    id?: number
    userId: number
    firstName?: string | null
    lastName?: string | null
    zipCode?: number | null
    city?: string | null
    experienceYears?: number | null
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    busy?: boolean
  }

  export type CleanerProfileUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busy?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CleanerProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busy?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CleanerScheduleDayCreateInput = {
    dayOfWeek: number
    createdAt?: Date | string | null
    slots?: CleanerScheduleSlotCreateNestedManyWithoutScheduleDayInput
    cleanerProfile: CleanerProfileCreateNestedOneWithoutSchedulesInput
  }

  export type CleanerScheduleDayUncheckedCreateInput = {
    id?: number
    cleanerProfileId: number
    dayOfWeek: number
    createdAt?: Date | string | null
    slots?: CleanerScheduleSlotUncheckedCreateNestedManyWithoutScheduleDayInput
  }

  export type CleanerScheduleDayUpdateInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slots?: CleanerScheduleSlotUpdateManyWithoutScheduleDayNestedInput
    cleanerProfile?: CleanerProfileUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type CleanerScheduleDayUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cleanerProfileId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slots?: CleanerScheduleSlotUncheckedUpdateManyWithoutScheduleDayNestedInput
  }

  export type CleanerScheduleDayCreateManyInput = {
    id?: number
    cleanerProfileId: number
    dayOfWeek: number
    createdAt?: Date | string | null
  }

  export type CleanerScheduleDayUpdateManyMutationInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CleanerScheduleDayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cleanerProfileId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CleanerScheduleSlotCreateInput = {
    startTime?: string | null
    endTime?: string | null
    isAvailable?: boolean
    createdAt?: Date | string
    scheduleDay: CleanerScheduleDayCreateNestedOneWithoutSlotsInput
  }

  export type CleanerScheduleSlotUncheckedCreateInput = {
    id?: number
    scheduleDayId: number
    startTime?: string | null
    endTime?: string | null
    isAvailable?: boolean
    createdAt?: Date | string
  }

  export type CleanerScheduleSlotUpdateInput = {
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleDay?: CleanerScheduleDayUpdateOneRequiredWithoutSlotsNestedInput
  }

  export type CleanerScheduleSlotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduleDayId?: IntFieldUpdateOperationsInput | number
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleanerScheduleSlotCreateManyInput = {
    id?: number
    scheduleDayId: number
    startTime?: string | null
    endTime?: string | null
    isAvailable?: boolean
    createdAt?: Date | string
  }

  export type CleanerScheduleSlotUpdateManyMutationInput = {
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleanerScheduleSlotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduleDayId?: IntFieldUpdateOperationsInput | number
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleanerReviewCreateInput = {
    customerId?: number | null
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
    cleanerProfile: CleanerProfileCreateNestedOneWithoutReviewsInput
  }

  export type CleanerReviewUncheckedCreateInput = {
    id?: number
    cleanerProfileId: number
    customerId?: number | null
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
  }

  export type CleanerReviewUpdateInput = {
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cleanerProfile?: CleanerProfileUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type CleanerReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cleanerProfileId?: IntFieldUpdateOperationsInput | number
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleanerReviewCreateManyInput = {
    id?: number
    cleanerProfileId: number
    customerId?: number | null
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
  }

  export type CleanerReviewUpdateManyMutationInput = {
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleanerReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cleanerProfileId?: IntFieldUpdateOperationsInput | number
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleanerJobCreateInput = {
    orderId: number
    status?: $Enums.JobStatus | null
    paymentStatus?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    cleanerProfile: CleanerProfileCreateNestedOneWithoutJobsInput
  }

  export type CleanerJobUncheckedCreateInput = {
    id?: number
    cleanerProfileId: number
    orderId: number
    status?: $Enums.JobStatus | null
    paymentStatus?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type CleanerJobUpdateInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cleanerProfile?: CleanerProfileUpdateOneRequiredWithoutJobsNestedInput
  }

  export type CleanerJobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cleanerProfileId?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CleanerJobCreateManyInput = {
    id?: number
    cleanerProfileId: number
    orderId: number
    status?: $Enums.JobStatus | null
    paymentStatus?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type CleanerJobUpdateManyMutationInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CleanerJobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cleanerProfileId?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CleanerOutboxCreateInput = {
    id?: string
    aggregateType: string
    aggregateId: number
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CleanerOutboxUncheckedCreateInput = {
    id?: string
    aggregateType: string
    aggregateId: number
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CleanerOutboxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aggregateType?: StringFieldUpdateOperationsInput | string
    aggregateId?: IntFieldUpdateOperationsInput | number
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleanerOutboxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aggregateType?: StringFieldUpdateOperationsInput | string
    aggregateId?: IntFieldUpdateOperationsInput | number
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleanerOutboxCreateManyInput = {
    id?: string
    aggregateType: string
    aggregateId: number
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CleanerOutboxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    aggregateType?: StringFieldUpdateOperationsInput | string
    aggregateId?: IntFieldUpdateOperationsInput | number
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleanerOutboxUncheckedUpdateManyInput = {
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CleanerScheduleDayListRelationFilter = {
    every?: CleanerScheduleDayWhereInput
    some?: CleanerScheduleDayWhereInput
    none?: CleanerScheduleDayWhereInput
  }

  export type CleanerReviewListRelationFilter = {
    every?: CleanerReviewWhereInput
    some?: CleanerReviewWhereInput
    none?: CleanerReviewWhereInput
  }

  export type CleanerJobListRelationFilter = {
    every?: CleanerJobWhereInput
    some?: CleanerJobWhereInput
    none?: CleanerJobWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CleanerScheduleDayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CleanerReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CleanerJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CleanerProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    zipCode?: SortOrder
    city?: SortOrder
    experienceYears?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    busy?: SortOrder
  }

  export type CleanerProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    zipCode?: SortOrder
    experienceYears?: SortOrder
    rating?: SortOrder
  }

  export type CleanerProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    zipCode?: SortOrder
    city?: SortOrder
    experienceYears?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    busy?: SortOrder
  }

  export type CleanerProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    zipCode?: SortOrder
    city?: SortOrder
    experienceYears?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    busy?: SortOrder
  }

  export type CleanerProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    zipCode?: SortOrder
    experienceYears?: SortOrder
    rating?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CleanerScheduleSlotListRelationFilter = {
    every?: CleanerScheduleSlotWhereInput
    some?: CleanerScheduleSlotWhereInput
    none?: CleanerScheduleSlotWhereInput
  }

  export type CleanerProfileScalarRelationFilter = {
    is?: CleanerProfileWhereInput
    isNot?: CleanerProfileWhereInput
  }

  export type CleanerScheduleSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CleanerScheduleDayCleanerProfileIdDayOfWeekCompoundUniqueInput = {
    cleanerProfileId: number
    dayOfWeek: number
  }

  export type CleanerScheduleDayCountOrderByAggregateInput = {
    id?: SortOrder
    cleanerProfileId?: SortOrder
    dayOfWeek?: SortOrder
    createdAt?: SortOrder
  }

  export type CleanerScheduleDayAvgOrderByAggregateInput = {
    id?: SortOrder
    cleanerProfileId?: SortOrder
    dayOfWeek?: SortOrder
  }

  export type CleanerScheduleDayMaxOrderByAggregateInput = {
    id?: SortOrder
    cleanerProfileId?: SortOrder
    dayOfWeek?: SortOrder
    createdAt?: SortOrder
  }

  export type CleanerScheduleDayMinOrderByAggregateInput = {
    id?: SortOrder
    cleanerProfileId?: SortOrder
    dayOfWeek?: SortOrder
    createdAt?: SortOrder
  }

  export type CleanerScheduleDaySumOrderByAggregateInput = {
    id?: SortOrder
    cleanerProfileId?: SortOrder
    dayOfWeek?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CleanerScheduleDayScalarRelationFilter = {
    is?: CleanerScheduleDayWhereInput
    isNot?: CleanerScheduleDayWhereInput
  }

  export type CleanerScheduleSlotCountOrderByAggregateInput = {
    id?: SortOrder
    scheduleDayId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
  }

  export type CleanerScheduleSlotAvgOrderByAggregateInput = {
    id?: SortOrder
    scheduleDayId?: SortOrder
  }

  export type CleanerScheduleSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    scheduleDayId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
  }

  export type CleanerScheduleSlotMinOrderByAggregateInput = {
    id?: SortOrder
    scheduleDayId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
  }

  export type CleanerScheduleSlotSumOrderByAggregateInput = {
    id?: SortOrder
    scheduleDayId?: SortOrder
  }

  export type CleanerReviewCountOrderByAggregateInput = {
    id?: SortOrder
    cleanerProfileId?: SortOrder
    customerId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type CleanerReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    cleanerProfileId?: SortOrder
    customerId?: SortOrder
    rating?: SortOrder
  }

  export type CleanerReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    cleanerProfileId?: SortOrder
    customerId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type CleanerReviewMinOrderByAggregateInput = {
    id?: SortOrder
    cleanerProfileId?: SortOrder
    customerId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type CleanerReviewSumOrderByAggregateInput = {
    id?: SortOrder
    cleanerProfileId?: SortOrder
    customerId?: SortOrder
    rating?: SortOrder
  }

  export type EnumJobStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumJobStatusNullableFilter<$PrismaModel> | $Enums.JobStatus | null
  }

  export type CleanerJobCountOrderByAggregateInput = {
    id?: SortOrder
    cleanerProfileId?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CleanerJobAvgOrderByAggregateInput = {
    id?: SortOrder
    cleanerProfileId?: SortOrder
    orderId?: SortOrder
  }

  export type CleanerJobMaxOrderByAggregateInput = {
    id?: SortOrder
    cleanerProfileId?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CleanerJobMinOrderByAggregateInput = {
    id?: SortOrder
    cleanerProfileId?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CleanerJobSumOrderByAggregateInput = {
    id?: SortOrder
    cleanerProfileId?: SortOrder
    orderId?: SortOrder
  }

  export type EnumJobStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumJobStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumJobStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumJobStatusNullableFilter<$PrismaModel>
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

  export type CleanerOutboxCountOrderByAggregateInput = {
    id?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
  }

  export type CleanerOutboxAvgOrderByAggregateInput = {
    aggregateId?: SortOrder
  }

  export type CleanerOutboxMaxOrderByAggregateInput = {
    id?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    createdAt?: SortOrder
  }

  export type CleanerOutboxMinOrderByAggregateInput = {
    id?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    createdAt?: SortOrder
  }

  export type CleanerOutboxSumOrderByAggregateInput = {
    aggregateId?: SortOrder
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

  export type CleanerScheduleDayCreateNestedManyWithoutCleanerProfileInput = {
    create?: XOR<CleanerScheduleDayCreateWithoutCleanerProfileInput, CleanerScheduleDayUncheckedCreateWithoutCleanerProfileInput> | CleanerScheduleDayCreateWithoutCleanerProfileInput[] | CleanerScheduleDayUncheckedCreateWithoutCleanerProfileInput[]
    connectOrCreate?: CleanerScheduleDayCreateOrConnectWithoutCleanerProfileInput | CleanerScheduleDayCreateOrConnectWithoutCleanerProfileInput[]
    createMany?: CleanerScheduleDayCreateManyCleanerProfileInputEnvelope
    connect?: CleanerScheduleDayWhereUniqueInput | CleanerScheduleDayWhereUniqueInput[]
  }

  export type CleanerReviewCreateNestedManyWithoutCleanerProfileInput = {
    create?: XOR<CleanerReviewCreateWithoutCleanerProfileInput, CleanerReviewUncheckedCreateWithoutCleanerProfileInput> | CleanerReviewCreateWithoutCleanerProfileInput[] | CleanerReviewUncheckedCreateWithoutCleanerProfileInput[]
    connectOrCreate?: CleanerReviewCreateOrConnectWithoutCleanerProfileInput | CleanerReviewCreateOrConnectWithoutCleanerProfileInput[]
    createMany?: CleanerReviewCreateManyCleanerProfileInputEnvelope
    connect?: CleanerReviewWhereUniqueInput | CleanerReviewWhereUniqueInput[]
  }

  export type CleanerJobCreateNestedManyWithoutCleanerProfileInput = {
    create?: XOR<CleanerJobCreateWithoutCleanerProfileInput, CleanerJobUncheckedCreateWithoutCleanerProfileInput> | CleanerJobCreateWithoutCleanerProfileInput[] | CleanerJobUncheckedCreateWithoutCleanerProfileInput[]
    connectOrCreate?: CleanerJobCreateOrConnectWithoutCleanerProfileInput | CleanerJobCreateOrConnectWithoutCleanerProfileInput[]
    createMany?: CleanerJobCreateManyCleanerProfileInputEnvelope
    connect?: CleanerJobWhereUniqueInput | CleanerJobWhereUniqueInput[]
  }

  export type CleanerScheduleDayUncheckedCreateNestedManyWithoutCleanerProfileInput = {
    create?: XOR<CleanerScheduleDayCreateWithoutCleanerProfileInput, CleanerScheduleDayUncheckedCreateWithoutCleanerProfileInput> | CleanerScheduleDayCreateWithoutCleanerProfileInput[] | CleanerScheduleDayUncheckedCreateWithoutCleanerProfileInput[]
    connectOrCreate?: CleanerScheduleDayCreateOrConnectWithoutCleanerProfileInput | CleanerScheduleDayCreateOrConnectWithoutCleanerProfileInput[]
    createMany?: CleanerScheduleDayCreateManyCleanerProfileInputEnvelope
    connect?: CleanerScheduleDayWhereUniqueInput | CleanerScheduleDayWhereUniqueInput[]
  }

  export type CleanerReviewUncheckedCreateNestedManyWithoutCleanerProfileInput = {
    create?: XOR<CleanerReviewCreateWithoutCleanerProfileInput, CleanerReviewUncheckedCreateWithoutCleanerProfileInput> | CleanerReviewCreateWithoutCleanerProfileInput[] | CleanerReviewUncheckedCreateWithoutCleanerProfileInput[]
    connectOrCreate?: CleanerReviewCreateOrConnectWithoutCleanerProfileInput | CleanerReviewCreateOrConnectWithoutCleanerProfileInput[]
    createMany?: CleanerReviewCreateManyCleanerProfileInputEnvelope
    connect?: CleanerReviewWhereUniqueInput | CleanerReviewWhereUniqueInput[]
  }

  export type CleanerJobUncheckedCreateNestedManyWithoutCleanerProfileInput = {
    create?: XOR<CleanerJobCreateWithoutCleanerProfileInput, CleanerJobUncheckedCreateWithoutCleanerProfileInput> | CleanerJobCreateWithoutCleanerProfileInput[] | CleanerJobUncheckedCreateWithoutCleanerProfileInput[]
    connectOrCreate?: CleanerJobCreateOrConnectWithoutCleanerProfileInput | CleanerJobCreateOrConnectWithoutCleanerProfileInput[]
    createMany?: CleanerJobCreateManyCleanerProfileInputEnvelope
    connect?: CleanerJobWhereUniqueInput | CleanerJobWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CleanerScheduleDayUpdateManyWithoutCleanerProfileNestedInput = {
    create?: XOR<CleanerScheduleDayCreateWithoutCleanerProfileInput, CleanerScheduleDayUncheckedCreateWithoutCleanerProfileInput> | CleanerScheduleDayCreateWithoutCleanerProfileInput[] | CleanerScheduleDayUncheckedCreateWithoutCleanerProfileInput[]
    connectOrCreate?: CleanerScheduleDayCreateOrConnectWithoutCleanerProfileInput | CleanerScheduleDayCreateOrConnectWithoutCleanerProfileInput[]
    upsert?: CleanerScheduleDayUpsertWithWhereUniqueWithoutCleanerProfileInput | CleanerScheduleDayUpsertWithWhereUniqueWithoutCleanerProfileInput[]
    createMany?: CleanerScheduleDayCreateManyCleanerProfileInputEnvelope
    set?: CleanerScheduleDayWhereUniqueInput | CleanerScheduleDayWhereUniqueInput[]
    disconnect?: CleanerScheduleDayWhereUniqueInput | CleanerScheduleDayWhereUniqueInput[]
    delete?: CleanerScheduleDayWhereUniqueInput | CleanerScheduleDayWhereUniqueInput[]
    connect?: CleanerScheduleDayWhereUniqueInput | CleanerScheduleDayWhereUniqueInput[]
    update?: CleanerScheduleDayUpdateWithWhereUniqueWithoutCleanerProfileInput | CleanerScheduleDayUpdateWithWhereUniqueWithoutCleanerProfileInput[]
    updateMany?: CleanerScheduleDayUpdateManyWithWhereWithoutCleanerProfileInput | CleanerScheduleDayUpdateManyWithWhereWithoutCleanerProfileInput[]
    deleteMany?: CleanerScheduleDayScalarWhereInput | CleanerScheduleDayScalarWhereInput[]
  }

  export type CleanerReviewUpdateManyWithoutCleanerProfileNestedInput = {
    create?: XOR<CleanerReviewCreateWithoutCleanerProfileInput, CleanerReviewUncheckedCreateWithoutCleanerProfileInput> | CleanerReviewCreateWithoutCleanerProfileInput[] | CleanerReviewUncheckedCreateWithoutCleanerProfileInput[]
    connectOrCreate?: CleanerReviewCreateOrConnectWithoutCleanerProfileInput | CleanerReviewCreateOrConnectWithoutCleanerProfileInput[]
    upsert?: CleanerReviewUpsertWithWhereUniqueWithoutCleanerProfileInput | CleanerReviewUpsertWithWhereUniqueWithoutCleanerProfileInput[]
    createMany?: CleanerReviewCreateManyCleanerProfileInputEnvelope
    set?: CleanerReviewWhereUniqueInput | CleanerReviewWhereUniqueInput[]
    disconnect?: CleanerReviewWhereUniqueInput | CleanerReviewWhereUniqueInput[]
    delete?: CleanerReviewWhereUniqueInput | CleanerReviewWhereUniqueInput[]
    connect?: CleanerReviewWhereUniqueInput | CleanerReviewWhereUniqueInput[]
    update?: CleanerReviewUpdateWithWhereUniqueWithoutCleanerProfileInput | CleanerReviewUpdateWithWhereUniqueWithoutCleanerProfileInput[]
    updateMany?: CleanerReviewUpdateManyWithWhereWithoutCleanerProfileInput | CleanerReviewUpdateManyWithWhereWithoutCleanerProfileInput[]
    deleteMany?: CleanerReviewScalarWhereInput | CleanerReviewScalarWhereInput[]
  }

  export type CleanerJobUpdateManyWithoutCleanerProfileNestedInput = {
    create?: XOR<CleanerJobCreateWithoutCleanerProfileInput, CleanerJobUncheckedCreateWithoutCleanerProfileInput> | CleanerJobCreateWithoutCleanerProfileInput[] | CleanerJobUncheckedCreateWithoutCleanerProfileInput[]
    connectOrCreate?: CleanerJobCreateOrConnectWithoutCleanerProfileInput | CleanerJobCreateOrConnectWithoutCleanerProfileInput[]
    upsert?: CleanerJobUpsertWithWhereUniqueWithoutCleanerProfileInput | CleanerJobUpsertWithWhereUniqueWithoutCleanerProfileInput[]
    createMany?: CleanerJobCreateManyCleanerProfileInputEnvelope
    set?: CleanerJobWhereUniqueInput | CleanerJobWhereUniqueInput[]
    disconnect?: CleanerJobWhereUniqueInput | CleanerJobWhereUniqueInput[]
    delete?: CleanerJobWhereUniqueInput | CleanerJobWhereUniqueInput[]
    connect?: CleanerJobWhereUniqueInput | CleanerJobWhereUniqueInput[]
    update?: CleanerJobUpdateWithWhereUniqueWithoutCleanerProfileInput | CleanerJobUpdateWithWhereUniqueWithoutCleanerProfileInput[]
    updateMany?: CleanerJobUpdateManyWithWhereWithoutCleanerProfileInput | CleanerJobUpdateManyWithWhereWithoutCleanerProfileInput[]
    deleteMany?: CleanerJobScalarWhereInput | CleanerJobScalarWhereInput[]
  }

  export type CleanerScheduleDayUncheckedUpdateManyWithoutCleanerProfileNestedInput = {
    create?: XOR<CleanerScheduleDayCreateWithoutCleanerProfileInput, CleanerScheduleDayUncheckedCreateWithoutCleanerProfileInput> | CleanerScheduleDayCreateWithoutCleanerProfileInput[] | CleanerScheduleDayUncheckedCreateWithoutCleanerProfileInput[]
    connectOrCreate?: CleanerScheduleDayCreateOrConnectWithoutCleanerProfileInput | CleanerScheduleDayCreateOrConnectWithoutCleanerProfileInput[]
    upsert?: CleanerScheduleDayUpsertWithWhereUniqueWithoutCleanerProfileInput | CleanerScheduleDayUpsertWithWhereUniqueWithoutCleanerProfileInput[]
    createMany?: CleanerScheduleDayCreateManyCleanerProfileInputEnvelope
    set?: CleanerScheduleDayWhereUniqueInput | CleanerScheduleDayWhereUniqueInput[]
    disconnect?: CleanerScheduleDayWhereUniqueInput | CleanerScheduleDayWhereUniqueInput[]
    delete?: CleanerScheduleDayWhereUniqueInput | CleanerScheduleDayWhereUniqueInput[]
    connect?: CleanerScheduleDayWhereUniqueInput | CleanerScheduleDayWhereUniqueInput[]
    update?: CleanerScheduleDayUpdateWithWhereUniqueWithoutCleanerProfileInput | CleanerScheduleDayUpdateWithWhereUniqueWithoutCleanerProfileInput[]
    updateMany?: CleanerScheduleDayUpdateManyWithWhereWithoutCleanerProfileInput | CleanerScheduleDayUpdateManyWithWhereWithoutCleanerProfileInput[]
    deleteMany?: CleanerScheduleDayScalarWhereInput | CleanerScheduleDayScalarWhereInput[]
  }

  export type CleanerReviewUncheckedUpdateManyWithoutCleanerProfileNestedInput = {
    create?: XOR<CleanerReviewCreateWithoutCleanerProfileInput, CleanerReviewUncheckedCreateWithoutCleanerProfileInput> | CleanerReviewCreateWithoutCleanerProfileInput[] | CleanerReviewUncheckedCreateWithoutCleanerProfileInput[]
    connectOrCreate?: CleanerReviewCreateOrConnectWithoutCleanerProfileInput | CleanerReviewCreateOrConnectWithoutCleanerProfileInput[]
    upsert?: CleanerReviewUpsertWithWhereUniqueWithoutCleanerProfileInput | CleanerReviewUpsertWithWhereUniqueWithoutCleanerProfileInput[]
    createMany?: CleanerReviewCreateManyCleanerProfileInputEnvelope
    set?: CleanerReviewWhereUniqueInput | CleanerReviewWhereUniqueInput[]
    disconnect?: CleanerReviewWhereUniqueInput | CleanerReviewWhereUniqueInput[]
    delete?: CleanerReviewWhereUniqueInput | CleanerReviewWhereUniqueInput[]
    connect?: CleanerReviewWhereUniqueInput | CleanerReviewWhereUniqueInput[]
    update?: CleanerReviewUpdateWithWhereUniqueWithoutCleanerProfileInput | CleanerReviewUpdateWithWhereUniqueWithoutCleanerProfileInput[]
    updateMany?: CleanerReviewUpdateManyWithWhereWithoutCleanerProfileInput | CleanerReviewUpdateManyWithWhereWithoutCleanerProfileInput[]
    deleteMany?: CleanerReviewScalarWhereInput | CleanerReviewScalarWhereInput[]
  }

  export type CleanerJobUncheckedUpdateManyWithoutCleanerProfileNestedInput = {
    create?: XOR<CleanerJobCreateWithoutCleanerProfileInput, CleanerJobUncheckedCreateWithoutCleanerProfileInput> | CleanerJobCreateWithoutCleanerProfileInput[] | CleanerJobUncheckedCreateWithoutCleanerProfileInput[]
    connectOrCreate?: CleanerJobCreateOrConnectWithoutCleanerProfileInput | CleanerJobCreateOrConnectWithoutCleanerProfileInput[]
    upsert?: CleanerJobUpsertWithWhereUniqueWithoutCleanerProfileInput | CleanerJobUpsertWithWhereUniqueWithoutCleanerProfileInput[]
    createMany?: CleanerJobCreateManyCleanerProfileInputEnvelope
    set?: CleanerJobWhereUniqueInput | CleanerJobWhereUniqueInput[]
    disconnect?: CleanerJobWhereUniqueInput | CleanerJobWhereUniqueInput[]
    delete?: CleanerJobWhereUniqueInput | CleanerJobWhereUniqueInput[]
    connect?: CleanerJobWhereUniqueInput | CleanerJobWhereUniqueInput[]
    update?: CleanerJobUpdateWithWhereUniqueWithoutCleanerProfileInput | CleanerJobUpdateWithWhereUniqueWithoutCleanerProfileInput[]
    updateMany?: CleanerJobUpdateManyWithWhereWithoutCleanerProfileInput | CleanerJobUpdateManyWithWhereWithoutCleanerProfileInput[]
    deleteMany?: CleanerJobScalarWhereInput | CleanerJobScalarWhereInput[]
  }

  export type CleanerScheduleSlotCreateNestedManyWithoutScheduleDayInput = {
    create?: XOR<CleanerScheduleSlotCreateWithoutScheduleDayInput, CleanerScheduleSlotUncheckedCreateWithoutScheduleDayInput> | CleanerScheduleSlotCreateWithoutScheduleDayInput[] | CleanerScheduleSlotUncheckedCreateWithoutScheduleDayInput[]
    connectOrCreate?: CleanerScheduleSlotCreateOrConnectWithoutScheduleDayInput | CleanerScheduleSlotCreateOrConnectWithoutScheduleDayInput[]
    createMany?: CleanerScheduleSlotCreateManyScheduleDayInputEnvelope
    connect?: CleanerScheduleSlotWhereUniqueInput | CleanerScheduleSlotWhereUniqueInput[]
  }

  export type CleanerProfileCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<CleanerProfileCreateWithoutSchedulesInput, CleanerProfileUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: CleanerProfileCreateOrConnectWithoutSchedulesInput
    connect?: CleanerProfileWhereUniqueInput
  }

  export type CleanerScheduleSlotUncheckedCreateNestedManyWithoutScheduleDayInput = {
    create?: XOR<CleanerScheduleSlotCreateWithoutScheduleDayInput, CleanerScheduleSlotUncheckedCreateWithoutScheduleDayInput> | CleanerScheduleSlotCreateWithoutScheduleDayInput[] | CleanerScheduleSlotUncheckedCreateWithoutScheduleDayInput[]
    connectOrCreate?: CleanerScheduleSlotCreateOrConnectWithoutScheduleDayInput | CleanerScheduleSlotCreateOrConnectWithoutScheduleDayInput[]
    createMany?: CleanerScheduleSlotCreateManyScheduleDayInputEnvelope
    connect?: CleanerScheduleSlotWhereUniqueInput | CleanerScheduleSlotWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CleanerScheduleSlotUpdateManyWithoutScheduleDayNestedInput = {
    create?: XOR<CleanerScheduleSlotCreateWithoutScheduleDayInput, CleanerScheduleSlotUncheckedCreateWithoutScheduleDayInput> | CleanerScheduleSlotCreateWithoutScheduleDayInput[] | CleanerScheduleSlotUncheckedCreateWithoutScheduleDayInput[]
    connectOrCreate?: CleanerScheduleSlotCreateOrConnectWithoutScheduleDayInput | CleanerScheduleSlotCreateOrConnectWithoutScheduleDayInput[]
    upsert?: CleanerScheduleSlotUpsertWithWhereUniqueWithoutScheduleDayInput | CleanerScheduleSlotUpsertWithWhereUniqueWithoutScheduleDayInput[]
    createMany?: CleanerScheduleSlotCreateManyScheduleDayInputEnvelope
    set?: CleanerScheduleSlotWhereUniqueInput | CleanerScheduleSlotWhereUniqueInput[]
    disconnect?: CleanerScheduleSlotWhereUniqueInput | CleanerScheduleSlotWhereUniqueInput[]
    delete?: CleanerScheduleSlotWhereUniqueInput | CleanerScheduleSlotWhereUniqueInput[]
    connect?: CleanerScheduleSlotWhereUniqueInput | CleanerScheduleSlotWhereUniqueInput[]
    update?: CleanerScheduleSlotUpdateWithWhereUniqueWithoutScheduleDayInput | CleanerScheduleSlotUpdateWithWhereUniqueWithoutScheduleDayInput[]
    updateMany?: CleanerScheduleSlotUpdateManyWithWhereWithoutScheduleDayInput | CleanerScheduleSlotUpdateManyWithWhereWithoutScheduleDayInput[]
    deleteMany?: CleanerScheduleSlotScalarWhereInput | CleanerScheduleSlotScalarWhereInput[]
  }

  export type CleanerProfileUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<CleanerProfileCreateWithoutSchedulesInput, CleanerProfileUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: CleanerProfileCreateOrConnectWithoutSchedulesInput
    upsert?: CleanerProfileUpsertWithoutSchedulesInput
    connect?: CleanerProfileWhereUniqueInput
    update?: XOR<XOR<CleanerProfileUpdateToOneWithWhereWithoutSchedulesInput, CleanerProfileUpdateWithoutSchedulesInput>, CleanerProfileUncheckedUpdateWithoutSchedulesInput>
  }

  export type CleanerScheduleSlotUncheckedUpdateManyWithoutScheduleDayNestedInput = {
    create?: XOR<CleanerScheduleSlotCreateWithoutScheduleDayInput, CleanerScheduleSlotUncheckedCreateWithoutScheduleDayInput> | CleanerScheduleSlotCreateWithoutScheduleDayInput[] | CleanerScheduleSlotUncheckedCreateWithoutScheduleDayInput[]
    connectOrCreate?: CleanerScheduleSlotCreateOrConnectWithoutScheduleDayInput | CleanerScheduleSlotCreateOrConnectWithoutScheduleDayInput[]
    upsert?: CleanerScheduleSlotUpsertWithWhereUniqueWithoutScheduleDayInput | CleanerScheduleSlotUpsertWithWhereUniqueWithoutScheduleDayInput[]
    createMany?: CleanerScheduleSlotCreateManyScheduleDayInputEnvelope
    set?: CleanerScheduleSlotWhereUniqueInput | CleanerScheduleSlotWhereUniqueInput[]
    disconnect?: CleanerScheduleSlotWhereUniqueInput | CleanerScheduleSlotWhereUniqueInput[]
    delete?: CleanerScheduleSlotWhereUniqueInput | CleanerScheduleSlotWhereUniqueInput[]
    connect?: CleanerScheduleSlotWhereUniqueInput | CleanerScheduleSlotWhereUniqueInput[]
    update?: CleanerScheduleSlotUpdateWithWhereUniqueWithoutScheduleDayInput | CleanerScheduleSlotUpdateWithWhereUniqueWithoutScheduleDayInput[]
    updateMany?: CleanerScheduleSlotUpdateManyWithWhereWithoutScheduleDayInput | CleanerScheduleSlotUpdateManyWithWhereWithoutScheduleDayInput[]
    deleteMany?: CleanerScheduleSlotScalarWhereInput | CleanerScheduleSlotScalarWhereInput[]
  }

  export type CleanerScheduleDayCreateNestedOneWithoutSlotsInput = {
    create?: XOR<CleanerScheduleDayCreateWithoutSlotsInput, CleanerScheduleDayUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: CleanerScheduleDayCreateOrConnectWithoutSlotsInput
    connect?: CleanerScheduleDayWhereUniqueInput
  }

  export type CleanerScheduleDayUpdateOneRequiredWithoutSlotsNestedInput = {
    create?: XOR<CleanerScheduleDayCreateWithoutSlotsInput, CleanerScheduleDayUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: CleanerScheduleDayCreateOrConnectWithoutSlotsInput
    upsert?: CleanerScheduleDayUpsertWithoutSlotsInput
    connect?: CleanerScheduleDayWhereUniqueInput
    update?: XOR<XOR<CleanerScheduleDayUpdateToOneWithWhereWithoutSlotsInput, CleanerScheduleDayUpdateWithoutSlotsInput>, CleanerScheduleDayUncheckedUpdateWithoutSlotsInput>
  }

  export type CleanerProfileCreateNestedOneWithoutReviewsInput = {
    create?: XOR<CleanerProfileCreateWithoutReviewsInput, CleanerProfileUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: CleanerProfileCreateOrConnectWithoutReviewsInput
    connect?: CleanerProfileWhereUniqueInput
  }

  export type CleanerProfileUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<CleanerProfileCreateWithoutReviewsInput, CleanerProfileUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: CleanerProfileCreateOrConnectWithoutReviewsInput
    upsert?: CleanerProfileUpsertWithoutReviewsInput
    connect?: CleanerProfileWhereUniqueInput
    update?: XOR<XOR<CleanerProfileUpdateToOneWithWhereWithoutReviewsInput, CleanerProfileUpdateWithoutReviewsInput>, CleanerProfileUncheckedUpdateWithoutReviewsInput>
  }

  export type CleanerProfileCreateNestedOneWithoutJobsInput = {
    create?: XOR<CleanerProfileCreateWithoutJobsInput, CleanerProfileUncheckedCreateWithoutJobsInput>
    connectOrCreate?: CleanerProfileCreateOrConnectWithoutJobsInput
    connect?: CleanerProfileWhereUniqueInput
  }

  export type NullableEnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus | null
  }

  export type CleanerProfileUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<CleanerProfileCreateWithoutJobsInput, CleanerProfileUncheckedCreateWithoutJobsInput>
    connectOrCreate?: CleanerProfileCreateOrConnectWithoutJobsInput
    upsert?: CleanerProfileUpsertWithoutJobsInput
    connect?: CleanerProfileWhereUniqueInput
    update?: XOR<XOR<CleanerProfileUpdateToOneWithWhereWithoutJobsInput, CleanerProfileUpdateWithoutJobsInput>, CleanerProfileUncheckedUpdateWithoutJobsInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumJobStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumJobStatusNullableFilter<$PrismaModel> | $Enums.JobStatus | null
  }

  export type NestedEnumJobStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumJobStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumJobStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumJobStatusNullableFilter<$PrismaModel>
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

  export type CleanerScheduleDayCreateWithoutCleanerProfileInput = {
    dayOfWeek: number
    createdAt?: Date | string | null
    slots?: CleanerScheduleSlotCreateNestedManyWithoutScheduleDayInput
  }

  export type CleanerScheduleDayUncheckedCreateWithoutCleanerProfileInput = {
    id?: number
    dayOfWeek: number
    createdAt?: Date | string | null
    slots?: CleanerScheduleSlotUncheckedCreateNestedManyWithoutScheduleDayInput
  }

  export type CleanerScheduleDayCreateOrConnectWithoutCleanerProfileInput = {
    where: CleanerScheduleDayWhereUniqueInput
    create: XOR<CleanerScheduleDayCreateWithoutCleanerProfileInput, CleanerScheduleDayUncheckedCreateWithoutCleanerProfileInput>
  }

  export type CleanerScheduleDayCreateManyCleanerProfileInputEnvelope = {
    data: CleanerScheduleDayCreateManyCleanerProfileInput | CleanerScheduleDayCreateManyCleanerProfileInput[]
    skipDuplicates?: boolean
  }

  export type CleanerReviewCreateWithoutCleanerProfileInput = {
    customerId?: number | null
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
  }

  export type CleanerReviewUncheckedCreateWithoutCleanerProfileInput = {
    id?: number
    customerId?: number | null
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
  }

  export type CleanerReviewCreateOrConnectWithoutCleanerProfileInput = {
    where: CleanerReviewWhereUniqueInput
    create: XOR<CleanerReviewCreateWithoutCleanerProfileInput, CleanerReviewUncheckedCreateWithoutCleanerProfileInput>
  }

  export type CleanerReviewCreateManyCleanerProfileInputEnvelope = {
    data: CleanerReviewCreateManyCleanerProfileInput | CleanerReviewCreateManyCleanerProfileInput[]
    skipDuplicates?: boolean
  }

  export type CleanerJobCreateWithoutCleanerProfileInput = {
    orderId: number
    status?: $Enums.JobStatus | null
    paymentStatus?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type CleanerJobUncheckedCreateWithoutCleanerProfileInput = {
    id?: number
    orderId: number
    status?: $Enums.JobStatus | null
    paymentStatus?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type CleanerJobCreateOrConnectWithoutCleanerProfileInput = {
    where: CleanerJobWhereUniqueInput
    create: XOR<CleanerJobCreateWithoutCleanerProfileInput, CleanerJobUncheckedCreateWithoutCleanerProfileInput>
  }

  export type CleanerJobCreateManyCleanerProfileInputEnvelope = {
    data: CleanerJobCreateManyCleanerProfileInput | CleanerJobCreateManyCleanerProfileInput[]
    skipDuplicates?: boolean
  }

  export type CleanerScheduleDayUpsertWithWhereUniqueWithoutCleanerProfileInput = {
    where: CleanerScheduleDayWhereUniqueInput
    update: XOR<CleanerScheduleDayUpdateWithoutCleanerProfileInput, CleanerScheduleDayUncheckedUpdateWithoutCleanerProfileInput>
    create: XOR<CleanerScheduleDayCreateWithoutCleanerProfileInput, CleanerScheduleDayUncheckedCreateWithoutCleanerProfileInput>
  }

  export type CleanerScheduleDayUpdateWithWhereUniqueWithoutCleanerProfileInput = {
    where: CleanerScheduleDayWhereUniqueInput
    data: XOR<CleanerScheduleDayUpdateWithoutCleanerProfileInput, CleanerScheduleDayUncheckedUpdateWithoutCleanerProfileInput>
  }

  export type CleanerScheduleDayUpdateManyWithWhereWithoutCleanerProfileInput = {
    where: CleanerScheduleDayScalarWhereInput
    data: XOR<CleanerScheduleDayUpdateManyMutationInput, CleanerScheduleDayUncheckedUpdateManyWithoutCleanerProfileInput>
  }

  export type CleanerScheduleDayScalarWhereInput = {
    AND?: CleanerScheduleDayScalarWhereInput | CleanerScheduleDayScalarWhereInput[]
    OR?: CleanerScheduleDayScalarWhereInput[]
    NOT?: CleanerScheduleDayScalarWhereInput | CleanerScheduleDayScalarWhereInput[]
    id?: IntFilter<"CleanerScheduleDay"> | number
    cleanerProfileId?: IntFilter<"CleanerScheduleDay"> | number
    dayOfWeek?: IntFilter<"CleanerScheduleDay"> | number
    createdAt?: DateTimeNullableFilter<"CleanerScheduleDay"> | Date | string | null
  }

  export type CleanerReviewUpsertWithWhereUniqueWithoutCleanerProfileInput = {
    where: CleanerReviewWhereUniqueInput
    update: XOR<CleanerReviewUpdateWithoutCleanerProfileInput, CleanerReviewUncheckedUpdateWithoutCleanerProfileInput>
    create: XOR<CleanerReviewCreateWithoutCleanerProfileInput, CleanerReviewUncheckedCreateWithoutCleanerProfileInput>
  }

  export type CleanerReviewUpdateWithWhereUniqueWithoutCleanerProfileInput = {
    where: CleanerReviewWhereUniqueInput
    data: XOR<CleanerReviewUpdateWithoutCleanerProfileInput, CleanerReviewUncheckedUpdateWithoutCleanerProfileInput>
  }

  export type CleanerReviewUpdateManyWithWhereWithoutCleanerProfileInput = {
    where: CleanerReviewScalarWhereInput
    data: XOR<CleanerReviewUpdateManyMutationInput, CleanerReviewUncheckedUpdateManyWithoutCleanerProfileInput>
  }

  export type CleanerReviewScalarWhereInput = {
    AND?: CleanerReviewScalarWhereInput | CleanerReviewScalarWhereInput[]
    OR?: CleanerReviewScalarWhereInput[]
    NOT?: CleanerReviewScalarWhereInput | CleanerReviewScalarWhereInput[]
    id?: IntFilter<"CleanerReview"> | number
    cleanerProfileId?: IntFilter<"CleanerReview"> | number
    customerId?: IntNullableFilter<"CleanerReview"> | number | null
    rating?: IntNullableFilter<"CleanerReview"> | number | null
    comment?: StringNullableFilter<"CleanerReview"> | string | null
    createdAt?: DateTimeFilter<"CleanerReview"> | Date | string
  }

  export type CleanerJobUpsertWithWhereUniqueWithoutCleanerProfileInput = {
    where: CleanerJobWhereUniqueInput
    update: XOR<CleanerJobUpdateWithoutCleanerProfileInput, CleanerJobUncheckedUpdateWithoutCleanerProfileInput>
    create: XOR<CleanerJobCreateWithoutCleanerProfileInput, CleanerJobUncheckedCreateWithoutCleanerProfileInput>
  }

  export type CleanerJobUpdateWithWhereUniqueWithoutCleanerProfileInput = {
    where: CleanerJobWhereUniqueInput
    data: XOR<CleanerJobUpdateWithoutCleanerProfileInput, CleanerJobUncheckedUpdateWithoutCleanerProfileInput>
  }

  export type CleanerJobUpdateManyWithWhereWithoutCleanerProfileInput = {
    where: CleanerJobScalarWhereInput
    data: XOR<CleanerJobUpdateManyMutationInput, CleanerJobUncheckedUpdateManyWithoutCleanerProfileInput>
  }

  export type CleanerJobScalarWhereInput = {
    AND?: CleanerJobScalarWhereInput | CleanerJobScalarWhereInput[]
    OR?: CleanerJobScalarWhereInput[]
    NOT?: CleanerJobScalarWhereInput | CleanerJobScalarWhereInput[]
    id?: IntFilter<"CleanerJob"> | number
    cleanerProfileId?: IntFilter<"CleanerJob"> | number
    orderId?: IntFilter<"CleanerJob"> | number
    status?: EnumJobStatusNullableFilter<"CleanerJob"> | $Enums.JobStatus | null
    paymentStatus?: StringNullableFilter<"CleanerJob"> | string | null
    createdAt?: DateTimeNullableFilter<"CleanerJob"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"CleanerJob"> | Date | string | null
  }

  export type CleanerScheduleSlotCreateWithoutScheduleDayInput = {
    startTime?: string | null
    endTime?: string | null
    isAvailable?: boolean
    createdAt?: Date | string
  }

  export type CleanerScheduleSlotUncheckedCreateWithoutScheduleDayInput = {
    id?: number
    startTime?: string | null
    endTime?: string | null
    isAvailable?: boolean
    createdAt?: Date | string
  }

  export type CleanerScheduleSlotCreateOrConnectWithoutScheduleDayInput = {
    where: CleanerScheduleSlotWhereUniqueInput
    create: XOR<CleanerScheduleSlotCreateWithoutScheduleDayInput, CleanerScheduleSlotUncheckedCreateWithoutScheduleDayInput>
  }

  export type CleanerScheduleSlotCreateManyScheduleDayInputEnvelope = {
    data: CleanerScheduleSlotCreateManyScheduleDayInput | CleanerScheduleSlotCreateManyScheduleDayInput[]
    skipDuplicates?: boolean
  }

  export type CleanerProfileCreateWithoutSchedulesInput = {
    userId: number
    firstName?: string | null
    lastName?: string | null
    zipCode?: number | null
    city?: string | null
    experienceYears?: number | null
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    busy?: boolean
    reviews?: CleanerReviewCreateNestedManyWithoutCleanerProfileInput
    jobs?: CleanerJobCreateNestedManyWithoutCleanerProfileInput
  }

  export type CleanerProfileUncheckedCreateWithoutSchedulesInput = {
    id?: number
    userId: number
    firstName?: string | null
    lastName?: string | null
    zipCode?: number | null
    city?: string | null
    experienceYears?: number | null
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    busy?: boolean
    reviews?: CleanerReviewUncheckedCreateNestedManyWithoutCleanerProfileInput
    jobs?: CleanerJobUncheckedCreateNestedManyWithoutCleanerProfileInput
  }

  export type CleanerProfileCreateOrConnectWithoutSchedulesInput = {
    where: CleanerProfileWhereUniqueInput
    create: XOR<CleanerProfileCreateWithoutSchedulesInput, CleanerProfileUncheckedCreateWithoutSchedulesInput>
  }

  export type CleanerScheduleSlotUpsertWithWhereUniqueWithoutScheduleDayInput = {
    where: CleanerScheduleSlotWhereUniqueInput
    update: XOR<CleanerScheduleSlotUpdateWithoutScheduleDayInput, CleanerScheduleSlotUncheckedUpdateWithoutScheduleDayInput>
    create: XOR<CleanerScheduleSlotCreateWithoutScheduleDayInput, CleanerScheduleSlotUncheckedCreateWithoutScheduleDayInput>
  }

  export type CleanerScheduleSlotUpdateWithWhereUniqueWithoutScheduleDayInput = {
    where: CleanerScheduleSlotWhereUniqueInput
    data: XOR<CleanerScheduleSlotUpdateWithoutScheduleDayInput, CleanerScheduleSlotUncheckedUpdateWithoutScheduleDayInput>
  }

  export type CleanerScheduleSlotUpdateManyWithWhereWithoutScheduleDayInput = {
    where: CleanerScheduleSlotScalarWhereInput
    data: XOR<CleanerScheduleSlotUpdateManyMutationInput, CleanerScheduleSlotUncheckedUpdateManyWithoutScheduleDayInput>
  }

  export type CleanerScheduleSlotScalarWhereInput = {
    AND?: CleanerScheduleSlotScalarWhereInput | CleanerScheduleSlotScalarWhereInput[]
    OR?: CleanerScheduleSlotScalarWhereInput[]
    NOT?: CleanerScheduleSlotScalarWhereInput | CleanerScheduleSlotScalarWhereInput[]
    id?: IntFilter<"CleanerScheduleSlot"> | number
    scheduleDayId?: IntFilter<"CleanerScheduleSlot"> | number
    startTime?: StringNullableFilter<"CleanerScheduleSlot"> | string | null
    endTime?: StringNullableFilter<"CleanerScheduleSlot"> | string | null
    isAvailable?: BoolFilter<"CleanerScheduleSlot"> | boolean
    createdAt?: DateTimeFilter<"CleanerScheduleSlot"> | Date | string
  }

  export type CleanerProfileUpsertWithoutSchedulesInput = {
    update: XOR<CleanerProfileUpdateWithoutSchedulesInput, CleanerProfileUncheckedUpdateWithoutSchedulesInput>
    create: XOR<CleanerProfileCreateWithoutSchedulesInput, CleanerProfileUncheckedCreateWithoutSchedulesInput>
    where?: CleanerProfileWhereInput
  }

  export type CleanerProfileUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: CleanerProfileWhereInput
    data: XOR<CleanerProfileUpdateWithoutSchedulesInput, CleanerProfileUncheckedUpdateWithoutSchedulesInput>
  }

  export type CleanerProfileUpdateWithoutSchedulesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busy?: BoolFieldUpdateOperationsInput | boolean
    reviews?: CleanerReviewUpdateManyWithoutCleanerProfileNestedInput
    jobs?: CleanerJobUpdateManyWithoutCleanerProfileNestedInput
  }

  export type CleanerProfileUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busy?: BoolFieldUpdateOperationsInput | boolean
    reviews?: CleanerReviewUncheckedUpdateManyWithoutCleanerProfileNestedInput
    jobs?: CleanerJobUncheckedUpdateManyWithoutCleanerProfileNestedInput
  }

  export type CleanerScheduleDayCreateWithoutSlotsInput = {
    dayOfWeek: number
    createdAt?: Date | string | null
    cleanerProfile: CleanerProfileCreateNestedOneWithoutSchedulesInput
  }

  export type CleanerScheduleDayUncheckedCreateWithoutSlotsInput = {
    id?: number
    cleanerProfileId: number
    dayOfWeek: number
    createdAt?: Date | string | null
  }

  export type CleanerScheduleDayCreateOrConnectWithoutSlotsInput = {
    where: CleanerScheduleDayWhereUniqueInput
    create: XOR<CleanerScheduleDayCreateWithoutSlotsInput, CleanerScheduleDayUncheckedCreateWithoutSlotsInput>
  }

  export type CleanerScheduleDayUpsertWithoutSlotsInput = {
    update: XOR<CleanerScheduleDayUpdateWithoutSlotsInput, CleanerScheduleDayUncheckedUpdateWithoutSlotsInput>
    create: XOR<CleanerScheduleDayCreateWithoutSlotsInput, CleanerScheduleDayUncheckedCreateWithoutSlotsInput>
    where?: CleanerScheduleDayWhereInput
  }

  export type CleanerScheduleDayUpdateToOneWithWhereWithoutSlotsInput = {
    where?: CleanerScheduleDayWhereInput
    data: XOR<CleanerScheduleDayUpdateWithoutSlotsInput, CleanerScheduleDayUncheckedUpdateWithoutSlotsInput>
  }

  export type CleanerScheduleDayUpdateWithoutSlotsInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cleanerProfile?: CleanerProfileUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type CleanerScheduleDayUncheckedUpdateWithoutSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cleanerProfileId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CleanerProfileCreateWithoutReviewsInput = {
    userId: number
    firstName?: string | null
    lastName?: string | null
    zipCode?: number | null
    city?: string | null
    experienceYears?: number | null
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    busy?: boolean
    schedules?: CleanerScheduleDayCreateNestedManyWithoutCleanerProfileInput
    jobs?: CleanerJobCreateNestedManyWithoutCleanerProfileInput
  }

  export type CleanerProfileUncheckedCreateWithoutReviewsInput = {
    id?: number
    userId: number
    firstName?: string | null
    lastName?: string | null
    zipCode?: number | null
    city?: string | null
    experienceYears?: number | null
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    busy?: boolean
    schedules?: CleanerScheduleDayUncheckedCreateNestedManyWithoutCleanerProfileInput
    jobs?: CleanerJobUncheckedCreateNestedManyWithoutCleanerProfileInput
  }

  export type CleanerProfileCreateOrConnectWithoutReviewsInput = {
    where: CleanerProfileWhereUniqueInput
    create: XOR<CleanerProfileCreateWithoutReviewsInput, CleanerProfileUncheckedCreateWithoutReviewsInput>
  }

  export type CleanerProfileUpsertWithoutReviewsInput = {
    update: XOR<CleanerProfileUpdateWithoutReviewsInput, CleanerProfileUncheckedUpdateWithoutReviewsInput>
    create: XOR<CleanerProfileCreateWithoutReviewsInput, CleanerProfileUncheckedCreateWithoutReviewsInput>
    where?: CleanerProfileWhereInput
  }

  export type CleanerProfileUpdateToOneWithWhereWithoutReviewsInput = {
    where?: CleanerProfileWhereInput
    data: XOR<CleanerProfileUpdateWithoutReviewsInput, CleanerProfileUncheckedUpdateWithoutReviewsInput>
  }

  export type CleanerProfileUpdateWithoutReviewsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busy?: BoolFieldUpdateOperationsInput | boolean
    schedules?: CleanerScheduleDayUpdateManyWithoutCleanerProfileNestedInput
    jobs?: CleanerJobUpdateManyWithoutCleanerProfileNestedInput
  }

  export type CleanerProfileUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busy?: BoolFieldUpdateOperationsInput | boolean
    schedules?: CleanerScheduleDayUncheckedUpdateManyWithoutCleanerProfileNestedInput
    jobs?: CleanerJobUncheckedUpdateManyWithoutCleanerProfileNestedInput
  }

  export type CleanerProfileCreateWithoutJobsInput = {
    userId: number
    firstName?: string | null
    lastName?: string | null
    zipCode?: number | null
    city?: string | null
    experienceYears?: number | null
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    busy?: boolean
    schedules?: CleanerScheduleDayCreateNestedManyWithoutCleanerProfileInput
    reviews?: CleanerReviewCreateNestedManyWithoutCleanerProfileInput
  }

  export type CleanerProfileUncheckedCreateWithoutJobsInput = {
    id?: number
    userId: number
    firstName?: string | null
    lastName?: string | null
    zipCode?: number | null
    city?: string | null
    experienceYears?: number | null
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    busy?: boolean
    schedules?: CleanerScheduleDayUncheckedCreateNestedManyWithoutCleanerProfileInput
    reviews?: CleanerReviewUncheckedCreateNestedManyWithoutCleanerProfileInput
  }

  export type CleanerProfileCreateOrConnectWithoutJobsInput = {
    where: CleanerProfileWhereUniqueInput
    create: XOR<CleanerProfileCreateWithoutJobsInput, CleanerProfileUncheckedCreateWithoutJobsInput>
  }

  export type CleanerProfileUpsertWithoutJobsInput = {
    update: XOR<CleanerProfileUpdateWithoutJobsInput, CleanerProfileUncheckedUpdateWithoutJobsInput>
    create: XOR<CleanerProfileCreateWithoutJobsInput, CleanerProfileUncheckedCreateWithoutJobsInput>
    where?: CleanerProfileWhereInput
  }

  export type CleanerProfileUpdateToOneWithWhereWithoutJobsInput = {
    where?: CleanerProfileWhereInput
    data: XOR<CleanerProfileUpdateWithoutJobsInput, CleanerProfileUncheckedUpdateWithoutJobsInput>
  }

  export type CleanerProfileUpdateWithoutJobsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busy?: BoolFieldUpdateOperationsInput | boolean
    schedules?: CleanerScheduleDayUpdateManyWithoutCleanerProfileNestedInput
    reviews?: CleanerReviewUpdateManyWithoutCleanerProfileNestedInput
  }

  export type CleanerProfileUncheckedUpdateWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busy?: BoolFieldUpdateOperationsInput | boolean
    schedules?: CleanerScheduleDayUncheckedUpdateManyWithoutCleanerProfileNestedInput
    reviews?: CleanerReviewUncheckedUpdateManyWithoutCleanerProfileNestedInput
  }

  export type CleanerScheduleDayCreateManyCleanerProfileInput = {
    id?: number
    dayOfWeek: number
    createdAt?: Date | string | null
  }

  export type CleanerReviewCreateManyCleanerProfileInput = {
    id?: number
    customerId?: number | null
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
  }

  export type CleanerJobCreateManyCleanerProfileInput = {
    id?: number
    orderId: number
    status?: $Enums.JobStatus | null
    paymentStatus?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type CleanerScheduleDayUpdateWithoutCleanerProfileInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slots?: CleanerScheduleSlotUpdateManyWithoutScheduleDayNestedInput
  }

  export type CleanerScheduleDayUncheckedUpdateWithoutCleanerProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slots?: CleanerScheduleSlotUncheckedUpdateManyWithoutScheduleDayNestedInput
  }

  export type CleanerScheduleDayUncheckedUpdateManyWithoutCleanerProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CleanerReviewUpdateWithoutCleanerProfileInput = {
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleanerReviewUncheckedUpdateWithoutCleanerProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleanerReviewUncheckedUpdateManyWithoutCleanerProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleanerJobUpdateWithoutCleanerProfileInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CleanerJobUncheckedUpdateWithoutCleanerProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CleanerJobUncheckedUpdateManyWithoutCleanerProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CleanerScheduleSlotCreateManyScheduleDayInput = {
    id?: number
    startTime?: string | null
    endTime?: string | null
    isAvailable?: boolean
    createdAt?: Date | string
  }

  export type CleanerScheduleSlotUpdateWithoutScheduleDayInput = {
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleanerScheduleSlotUncheckedUpdateWithoutScheduleDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleanerScheduleSlotUncheckedUpdateManyWithoutScheduleDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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