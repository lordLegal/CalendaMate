
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model EmailVerificationRequest
 * 
 */
export type EmailVerificationRequest = $Result.DefaultSelection<Prisma.$EmailVerificationRequestPayload>
/**
 * Model PasswordResetSession
 * 
 */
export type PasswordResetSession = $Result.DefaultSelection<Prisma.$PasswordResetSessionPayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model ApiKeyPermission
 * 
 */
export type ApiKeyPermission = $Result.DefaultSelection<Prisma.$ApiKeyPermissionPayload>
/**
 * Model ApiCreditsPurchase
 * 
 */
export type ApiCreditsPurchase = $Result.DefaultSelection<Prisma.$ApiCreditsPurchasePayload>
/**
 * Model ApiCreditsUsage
 * 
 */
export type ApiCreditsUsage = $Result.DefaultSelection<Prisma.$ApiCreditsUsagePayload>
/**
 * Model ApiUsageLog
 * 
 */
export type ApiUsageLog = $Result.DefaultSelection<Prisma.$ApiUsageLogPayload>
/**
 * Model TimetableCache
 * 
 */
export type TimetableCache = $Result.DefaultSelection<Prisma.$TimetableCachePayload>
/**
 * Model CalendarAccount
 * 
 */
export type CalendarAccount = $Result.DefaultSelection<Prisma.$CalendarAccountPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CalendarProvider: {
  GOOGLE: 'GOOGLE',
  MICROSOFT: 'MICROSOFT',
  ICLOUD: 'ICLOUD'
};

export type CalendarProvider = (typeof CalendarProvider)[keyof typeof CalendarProvider]

}

export type CalendarProvider = $Enums.CalendarProvider

export const CalendarProvider: typeof $Enums.CalendarProvider

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailVerificationRequest`: Exposes CRUD operations for the **EmailVerificationRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailVerificationRequests
    * const emailVerificationRequests = await prisma.emailVerificationRequest.findMany()
    * ```
    */
  get emailVerificationRequest(): Prisma.EmailVerificationRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetSession`: Exposes CRUD operations for the **PasswordResetSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetSessions
    * const passwordResetSessions = await prisma.passwordResetSession.findMany()
    * ```
    */
  get passwordResetSession(): Prisma.PasswordResetSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKeyPermission`: Exposes CRUD operations for the **ApiKeyPermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeyPermissions
    * const apiKeyPermissions = await prisma.apiKeyPermission.findMany()
    * ```
    */
  get apiKeyPermission(): Prisma.ApiKeyPermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiCreditsPurchase`: Exposes CRUD operations for the **ApiCreditsPurchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiCreditsPurchases
    * const apiCreditsPurchases = await prisma.apiCreditsPurchase.findMany()
    * ```
    */
  get apiCreditsPurchase(): Prisma.ApiCreditsPurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiCreditsUsage`: Exposes CRUD operations for the **ApiCreditsUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiCreditsUsages
    * const apiCreditsUsages = await prisma.apiCreditsUsage.findMany()
    * ```
    */
  get apiCreditsUsage(): Prisma.ApiCreditsUsageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiUsageLog`: Exposes CRUD operations for the **ApiUsageLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiUsageLogs
    * const apiUsageLogs = await prisma.apiUsageLog.findMany()
    * ```
    */
  get apiUsageLog(): Prisma.ApiUsageLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timetableCache`: Exposes CRUD operations for the **TimetableCache** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimetableCaches
    * const timetableCaches = await prisma.timetableCache.findMany()
    * ```
    */
  get timetableCache(): Prisma.TimetableCacheDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.calendarAccount`: Exposes CRUD operations for the **CalendarAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CalendarAccounts
    * const calendarAccounts = await prisma.calendarAccount.findMany()
    * ```
    */
  get calendarAccount(): Prisma.CalendarAccountDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    Subscription: 'Subscription',
    Session: 'Session',
    EmailVerificationRequest: 'EmailVerificationRequest',
    PasswordResetSession: 'PasswordResetSession',
    ApiKey: 'ApiKey',
    ApiKeyPermission: 'ApiKeyPermission',
    ApiCreditsPurchase: 'ApiCreditsPurchase',
    ApiCreditsUsage: 'ApiCreditsUsage',
    ApiUsageLog: 'ApiUsageLog',
    TimetableCache: 'TimetableCache',
    CalendarAccount: 'CalendarAccount'
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
      modelProps: "user" | "subscription" | "session" | "emailVerificationRequest" | "passwordResetSession" | "apiKey" | "apiKeyPermission" | "apiCreditsPurchase" | "apiCreditsUsage" | "apiUsageLog" | "timetableCache" | "calendarAccount"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      EmailVerificationRequest: {
        payload: Prisma.$EmailVerificationRequestPayload<ExtArgs>
        fields: Prisma.EmailVerificationRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailVerificationRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailVerificationRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationRequestPayload>
          }
          findFirst: {
            args: Prisma.EmailVerificationRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailVerificationRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationRequestPayload>
          }
          findMany: {
            args: Prisma.EmailVerificationRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationRequestPayload>[]
          }
          create: {
            args: Prisma.EmailVerificationRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationRequestPayload>
          }
          createMany: {
            args: Prisma.EmailVerificationRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailVerificationRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationRequestPayload>[]
          }
          delete: {
            args: Prisma.EmailVerificationRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationRequestPayload>
          }
          update: {
            args: Prisma.EmailVerificationRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationRequestPayload>
          }
          deleteMany: {
            args: Prisma.EmailVerificationRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailVerificationRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailVerificationRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationRequestPayload>[]
          }
          upsert: {
            args: Prisma.EmailVerificationRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationRequestPayload>
          }
          aggregate: {
            args: Prisma.EmailVerificationRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailVerificationRequest>
          }
          groupBy: {
            args: Prisma.EmailVerificationRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailVerificationRequestCountArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationRequestCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetSession: {
        payload: Prisma.$PasswordResetSessionPayload<ExtArgs>
        fields: Prisma.PasswordResetSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetSessionPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetSessionPayload>
          }
          findMany: {
            args: Prisma.PasswordResetSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetSessionPayload>[]
          }
          create: {
            args: Prisma.PasswordResetSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetSessionPayload>
          }
          createMany: {
            args: Prisma.PasswordResetSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetSessionPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetSessionPayload>
          }
          update: {
            args: Prisma.PasswordResetSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetSessionPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetSessionPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetSessionPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetSession>
          }
          groupBy: {
            args: Prisma.PasswordResetSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetSessionCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetSessionCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      ApiKeyPermission: {
        payload: Prisma.$ApiKeyPermissionPayload<ExtArgs>
        fields: Prisma.ApiKeyPermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyPermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyPermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPermissionPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyPermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyPermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPermissionPayload>
          }
          findMany: {
            args: Prisma.ApiKeyPermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPermissionPayload>[]
          }
          create: {
            args: Prisma.ApiKeyPermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPermissionPayload>
          }
          createMany: {
            args: Prisma.ApiKeyPermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyPermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPermissionPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyPermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPermissionPayload>
          }
          update: {
            args: Prisma.ApiKeyPermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPermissionPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyPermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyPermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyPermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPermissionPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyPermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPermissionPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyPermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKeyPermission>
          }
          groupBy: {
            args: Prisma.ApiKeyPermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyPermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyPermissionCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyPermissionCountAggregateOutputType> | number
          }
        }
      }
      ApiCreditsPurchase: {
        payload: Prisma.$ApiCreditsPurchasePayload<ExtArgs>
        fields: Prisma.ApiCreditsPurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiCreditsPurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCreditsPurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiCreditsPurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCreditsPurchasePayload>
          }
          findFirst: {
            args: Prisma.ApiCreditsPurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCreditsPurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiCreditsPurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCreditsPurchasePayload>
          }
          findMany: {
            args: Prisma.ApiCreditsPurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCreditsPurchasePayload>[]
          }
          create: {
            args: Prisma.ApiCreditsPurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCreditsPurchasePayload>
          }
          createMany: {
            args: Prisma.ApiCreditsPurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiCreditsPurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCreditsPurchasePayload>[]
          }
          delete: {
            args: Prisma.ApiCreditsPurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCreditsPurchasePayload>
          }
          update: {
            args: Prisma.ApiCreditsPurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCreditsPurchasePayload>
          }
          deleteMany: {
            args: Prisma.ApiCreditsPurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiCreditsPurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiCreditsPurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCreditsPurchasePayload>[]
          }
          upsert: {
            args: Prisma.ApiCreditsPurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCreditsPurchasePayload>
          }
          aggregate: {
            args: Prisma.ApiCreditsPurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiCreditsPurchase>
          }
          groupBy: {
            args: Prisma.ApiCreditsPurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiCreditsPurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiCreditsPurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<ApiCreditsPurchaseCountAggregateOutputType> | number
          }
        }
      }
      ApiCreditsUsage: {
        payload: Prisma.$ApiCreditsUsagePayload<ExtArgs>
        fields: Prisma.ApiCreditsUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiCreditsUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCreditsUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiCreditsUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCreditsUsagePayload>
          }
          findFirst: {
            args: Prisma.ApiCreditsUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCreditsUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiCreditsUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCreditsUsagePayload>
          }
          findMany: {
            args: Prisma.ApiCreditsUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCreditsUsagePayload>[]
          }
          create: {
            args: Prisma.ApiCreditsUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCreditsUsagePayload>
          }
          createMany: {
            args: Prisma.ApiCreditsUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiCreditsUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCreditsUsagePayload>[]
          }
          delete: {
            args: Prisma.ApiCreditsUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCreditsUsagePayload>
          }
          update: {
            args: Prisma.ApiCreditsUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCreditsUsagePayload>
          }
          deleteMany: {
            args: Prisma.ApiCreditsUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiCreditsUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiCreditsUsageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCreditsUsagePayload>[]
          }
          upsert: {
            args: Prisma.ApiCreditsUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCreditsUsagePayload>
          }
          aggregate: {
            args: Prisma.ApiCreditsUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiCreditsUsage>
          }
          groupBy: {
            args: Prisma.ApiCreditsUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiCreditsUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiCreditsUsageCountArgs<ExtArgs>
            result: $Utils.Optional<ApiCreditsUsageCountAggregateOutputType> | number
          }
        }
      }
      ApiUsageLog: {
        payload: Prisma.$ApiUsageLogPayload<ExtArgs>
        fields: Prisma.ApiUsageLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiUsageLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiUsageLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>
          }
          findFirst: {
            args: Prisma.ApiUsageLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiUsageLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>
          }
          findMany: {
            args: Prisma.ApiUsageLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>[]
          }
          create: {
            args: Prisma.ApiUsageLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>
          }
          createMany: {
            args: Prisma.ApiUsageLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiUsageLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>[]
          }
          delete: {
            args: Prisma.ApiUsageLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>
          }
          update: {
            args: Prisma.ApiUsageLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>
          }
          deleteMany: {
            args: Prisma.ApiUsageLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiUsageLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiUsageLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>[]
          }
          upsert: {
            args: Prisma.ApiUsageLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>
          }
          aggregate: {
            args: Prisma.ApiUsageLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiUsageLog>
          }
          groupBy: {
            args: Prisma.ApiUsageLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiUsageLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiUsageLogCountArgs<ExtArgs>
            result: $Utils.Optional<ApiUsageLogCountAggregateOutputType> | number
          }
        }
      }
      TimetableCache: {
        payload: Prisma.$TimetableCachePayload<ExtArgs>
        fields: Prisma.TimetableCacheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimetableCacheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetableCachePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimetableCacheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetableCachePayload>
          }
          findFirst: {
            args: Prisma.TimetableCacheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetableCachePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimetableCacheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetableCachePayload>
          }
          findMany: {
            args: Prisma.TimetableCacheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetableCachePayload>[]
          }
          create: {
            args: Prisma.TimetableCacheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetableCachePayload>
          }
          createMany: {
            args: Prisma.TimetableCacheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimetableCacheCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetableCachePayload>[]
          }
          delete: {
            args: Prisma.TimetableCacheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetableCachePayload>
          }
          update: {
            args: Prisma.TimetableCacheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetableCachePayload>
          }
          deleteMany: {
            args: Prisma.TimetableCacheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimetableCacheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimetableCacheUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetableCachePayload>[]
          }
          upsert: {
            args: Prisma.TimetableCacheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetableCachePayload>
          }
          aggregate: {
            args: Prisma.TimetableCacheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimetableCache>
          }
          groupBy: {
            args: Prisma.TimetableCacheGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimetableCacheGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimetableCacheCountArgs<ExtArgs>
            result: $Utils.Optional<TimetableCacheCountAggregateOutputType> | number
          }
        }
      }
      CalendarAccount: {
        payload: Prisma.$CalendarAccountPayload<ExtArgs>
        fields: Prisma.CalendarAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalendarAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalendarAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarAccountPayload>
          }
          findFirst: {
            args: Prisma.CalendarAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalendarAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarAccountPayload>
          }
          findMany: {
            args: Prisma.CalendarAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarAccountPayload>[]
          }
          create: {
            args: Prisma.CalendarAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarAccountPayload>
          }
          createMany: {
            args: Prisma.CalendarAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CalendarAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarAccountPayload>[]
          }
          delete: {
            args: Prisma.CalendarAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarAccountPayload>
          }
          update: {
            args: Prisma.CalendarAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarAccountPayload>
          }
          deleteMany: {
            args: Prisma.CalendarAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalendarAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CalendarAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarAccountPayload>[]
          }
          upsert: {
            args: Prisma.CalendarAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarAccountPayload>
          }
          aggregate: {
            args: Prisma.CalendarAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalendarAccount>
          }
          groupBy: {
            args: Prisma.CalendarAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalendarAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalendarAccountCountArgs<ExtArgs>
            result: $Utils.Optional<CalendarAccountCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    subscription?: SubscriptionOmit
    session?: SessionOmit
    emailVerificationRequest?: EmailVerificationRequestOmit
    passwordResetSession?: PasswordResetSessionOmit
    apiKey?: ApiKeyOmit
    apiKeyPermission?: ApiKeyPermissionOmit
    apiCreditsPurchase?: ApiCreditsPurchaseOmit
    apiCreditsUsage?: ApiCreditsUsageOmit
    apiUsageLog?: ApiUsageLogOmit
    timetableCache?: TimetableCacheOmit
    calendarAccount?: CalendarAccountOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    emailVerifications: number
    passwordResets: number
    apiKeys: number
    calendarAccounts: number
    subscriptions: number
    apiCreditsPurchases: number
    apiCreditsUsages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    emailVerifications?: boolean | UserCountOutputTypeCountEmailVerificationsArgs
    passwordResets?: boolean | UserCountOutputTypeCountPasswordResetsArgs
    apiKeys?: boolean | UserCountOutputTypeCountApiKeysArgs
    calendarAccounts?: boolean | UserCountOutputTypeCountCalendarAccountsArgs
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs
    apiCreditsPurchases?: boolean | UserCountOutputTypeCountApiCreditsPurchasesArgs
    apiCreditsUsages?: boolean | UserCountOutputTypeCountApiCreditsUsagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmailVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasswordResetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCalendarAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarAccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApiCreditsPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiCreditsPurchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApiCreditsUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiCreditsUsageWhereInput
  }


  /**
   * Count Type ApiKeyCountOutputType
   */

  export type ApiKeyCountOutputType = {
    usageLogs: number
    apiKeyPermissions: number
  }

  export type ApiKeyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usageLogs?: boolean | ApiKeyCountOutputTypeCountUsageLogsArgs
    apiKeyPermissions?: boolean | ApiKeyCountOutputTypeCountApiKeyPermissionsArgs
  }

  // Custom InputTypes
  /**
   * ApiKeyCountOutputType without action
   */
  export type ApiKeyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyCountOutputType
     */
    select?: ApiKeyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApiKeyCountOutputType without action
   */
  export type ApiKeyCountOutputTypeCountUsageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiUsageLogWhereInput
  }

  /**
   * ApiKeyCountOutputType without action
   */
  export type ApiKeyCountOutputTypeCountApiKeyPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyPermissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    passwordHash: string | null
    emailVerified: boolean | null
    totpKey: Uint8Array | null
    recoveryCode: Uint8Array | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    passwordHash: string | null
    emailVerified: boolean | null
    totpKey: Uint8Array | null
    recoveryCode: Uint8Array | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    passwordHash: number
    emailVerified: number
    totpKey: number
    recoveryCode: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    emailVerified?: true
    totpKey?: true
    recoveryCode?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    emailVerified?: true
    totpKey?: true
    recoveryCode?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    emailVerified?: true
    totpKey?: true
    recoveryCode?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    username: string
    passwordHash: string
    emailVerified: boolean
    totpKey: Uint8Array | null
    recoveryCode: Uint8Array
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    emailVerified?: boolean
    totpKey?: boolean
    recoveryCode?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    emailVerifications?: boolean | User$emailVerificationsArgs<ExtArgs>
    passwordResets?: boolean | User$passwordResetsArgs<ExtArgs>
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    calendarAccounts?: boolean | User$calendarAccountsArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    apiCreditsPurchases?: boolean | User$apiCreditsPurchasesArgs<ExtArgs>
    apiCreditsUsages?: boolean | User$apiCreditsUsagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    emailVerified?: boolean
    totpKey?: boolean
    recoveryCode?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    emailVerified?: boolean
    totpKey?: boolean
    recoveryCode?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    emailVerified?: boolean
    totpKey?: boolean
    recoveryCode?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "passwordHash" | "emailVerified" | "totpKey" | "recoveryCode", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    emailVerifications?: boolean | User$emailVerificationsArgs<ExtArgs>
    passwordResets?: boolean | User$passwordResetsArgs<ExtArgs>
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    calendarAccounts?: boolean | User$calendarAccountsArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    apiCreditsPurchases?: boolean | User$apiCreditsPurchasesArgs<ExtArgs>
    apiCreditsUsages?: boolean | User$apiCreditsUsagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      emailVerifications: Prisma.$EmailVerificationRequestPayload<ExtArgs>[]
      passwordResets: Prisma.$PasswordResetSessionPayload<ExtArgs>[]
      apiKeys: Prisma.$ApiKeyPayload<ExtArgs>[]
      calendarAccounts: Prisma.$CalendarAccountPayload<ExtArgs>[]
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      apiCreditsPurchases: Prisma.$ApiCreditsPurchasePayload<ExtArgs>[]
      apiCreditsUsages: Prisma.$ApiCreditsUsagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      passwordHash: string
      emailVerified: boolean
      totpKey: Uint8Array | null
      recoveryCode: Uint8Array
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emailVerifications<T extends User$emailVerificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$emailVerificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passwordResets<T extends User$passwordResetsArgs<ExtArgs> = {}>(args?: Subset<T, User$passwordResetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiKeys<T extends User$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, User$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    calendarAccounts<T extends User$calendarAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$calendarAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends User$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiCreditsPurchases<T extends User$apiCreditsPurchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$apiCreditsPurchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiCreditsPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiCreditsUsages<T extends User$apiCreditsUsagesArgs<ExtArgs> = {}>(args?: Subset<T, User$apiCreditsUsagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiCreditsUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly totpKey: FieldRef<"User", 'Bytes'>
    readonly recoveryCode: FieldRef<"User", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.emailVerifications
   */
  export type User$emailVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationRequest
     */
    select?: EmailVerificationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationRequest
     */
    omit?: EmailVerificationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationRequestInclude<ExtArgs> | null
    where?: EmailVerificationRequestWhereInput
    orderBy?: EmailVerificationRequestOrderByWithRelationInput | EmailVerificationRequestOrderByWithRelationInput[]
    cursor?: EmailVerificationRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailVerificationRequestScalarFieldEnum | EmailVerificationRequestScalarFieldEnum[]
  }

  /**
   * User.passwordResets
   */
  export type User$passwordResetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetSession
     */
    select?: PasswordResetSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetSession
     */
    omit?: PasswordResetSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetSessionInclude<ExtArgs> | null
    where?: PasswordResetSessionWhereInput
    orderBy?: PasswordResetSessionOrderByWithRelationInput | PasswordResetSessionOrderByWithRelationInput[]
    cursor?: PasswordResetSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordResetSessionScalarFieldEnum | PasswordResetSessionScalarFieldEnum[]
  }

  /**
   * User.apiKeys
   */
  export type User$apiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    cursor?: ApiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * User.calendarAccounts
   */
  export type User$calendarAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarAccount
     */
    select?: CalendarAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarAccount
     */
    omit?: CalendarAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarAccountInclude<ExtArgs> | null
    where?: CalendarAccountWhereInput
    orderBy?: CalendarAccountOrderByWithRelationInput | CalendarAccountOrderByWithRelationInput[]
    cursor?: CalendarAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalendarAccountScalarFieldEnum | CalendarAccountScalarFieldEnum[]
  }

  /**
   * User.subscriptions
   */
  export type User$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * User.apiCreditsPurchases
   */
  export type User$apiCreditsPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsPurchase
     */
    select?: ApiCreditsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsPurchase
     */
    omit?: ApiCreditsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsPurchaseInclude<ExtArgs> | null
    where?: ApiCreditsPurchaseWhereInput
    orderBy?: ApiCreditsPurchaseOrderByWithRelationInput | ApiCreditsPurchaseOrderByWithRelationInput[]
    cursor?: ApiCreditsPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiCreditsPurchaseScalarFieldEnum | ApiCreditsPurchaseScalarFieldEnum[]
  }

  /**
   * User.apiCreditsUsages
   */
  export type User$apiCreditsUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsUsage
     */
    select?: ApiCreditsUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsUsage
     */
    omit?: ApiCreditsUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsUsageInclude<ExtArgs> | null
    where?: ApiCreditsUsageWhereInput
    orderBy?: ApiCreditsUsageOrderByWithRelationInput | ApiCreditsUsageOrderByWithRelationInput[]
    cursor?: ApiCreditsUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiCreditsUsageScalarFieldEnum | ApiCreditsUsageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    userId: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    userId: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: number | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    status: string | null
    priceId: string | null
    currentPeriodEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    status: string | null
    priceId: string | null
    currentPeriodEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    stripeCustomerId: number
    stripeSubscriptionId: number
    status: number
    priceId: number
    currentPeriodEnd: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    userId?: true
  }

  export type SubscriptionSumAggregateInputType = {
    userId?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    status?: true
    priceId?: true
    currentPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    status?: true
    priceId?: true
    currentPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    status?: true
    priceId?: true
    currentPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: number
    stripeCustomerId: string
    stripeSubscriptionId: string
    status: string
    priceId: string
    currentPeriodEnd: Date
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    priceId?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    priceId?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    priceId?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    priceId?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "stripeCustomerId" | "stripeSubscriptionId" | "status" | "priceId" | "currentPeriodEnd" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      stripeCustomerId: string
      stripeSubscriptionId: string
      status: string
      priceId: string
      currentPeriodEnd: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'Int'>
    readonly stripeCustomerId: FieldRef<"Subscription", 'String'>
    readonly stripeSubscriptionId: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'String'>
    readonly priceId: FieldRef<"Subscription", 'String'>
    readonly currentPeriodEnd: FieldRef<"Subscription", 'DateTime'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    userId: number | null
  }

  export type SessionSumAggregateOutputType = {
    userId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: number | null
    expiresAt: Date | null
    twoFactorVerified: boolean | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    expiresAt: Date | null
    twoFactorVerified: boolean | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    expiresAt: number
    twoFactorVerified: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    userId?: true
  }

  export type SessionSumAggregateInputType = {
    userId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    twoFactorVerified?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    twoFactorVerified?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    twoFactorVerified?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: number
    expiresAt: Date
    twoFactorVerified: boolean
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    twoFactorVerified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    twoFactorVerified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    twoFactorVerified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    twoFactorVerified?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "expiresAt" | "twoFactorVerified", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      expiresAt: Date
      twoFactorVerified: boolean
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'Int'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly twoFactorVerified: FieldRef<"Session", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model EmailVerificationRequest
   */

  export type AggregateEmailVerificationRequest = {
    _count: EmailVerificationRequestCountAggregateOutputType | null
    _avg: EmailVerificationRequestAvgAggregateOutputType | null
    _sum: EmailVerificationRequestSumAggregateOutputType | null
    _min: EmailVerificationRequestMinAggregateOutputType | null
    _max: EmailVerificationRequestMaxAggregateOutputType | null
  }

  export type EmailVerificationRequestAvgAggregateOutputType = {
    userId: number | null
  }

  export type EmailVerificationRequestSumAggregateOutputType = {
    userId: number | null
  }

  export type EmailVerificationRequestMinAggregateOutputType = {
    id: string | null
    userId: number | null
    email: string | null
    code: string | null
    expiresAt: Date | null
  }

  export type EmailVerificationRequestMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    email: string | null
    code: string | null
    expiresAt: Date | null
  }

  export type EmailVerificationRequestCountAggregateOutputType = {
    id: number
    userId: number
    email: number
    code: number
    expiresAt: number
    _all: number
  }


  export type EmailVerificationRequestAvgAggregateInputType = {
    userId?: true
  }

  export type EmailVerificationRequestSumAggregateInputType = {
    userId?: true
  }

  export type EmailVerificationRequestMinAggregateInputType = {
    id?: true
    userId?: true
    email?: true
    code?: true
    expiresAt?: true
  }

  export type EmailVerificationRequestMaxAggregateInputType = {
    id?: true
    userId?: true
    email?: true
    code?: true
    expiresAt?: true
  }

  export type EmailVerificationRequestCountAggregateInputType = {
    id?: true
    userId?: true
    email?: true
    code?: true
    expiresAt?: true
    _all?: true
  }

  export type EmailVerificationRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationRequest to aggregate.
     */
    where?: EmailVerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationRequests to fetch.
     */
    orderBy?: EmailVerificationRequestOrderByWithRelationInput | EmailVerificationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailVerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailVerificationRequests
    **/
    _count?: true | EmailVerificationRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailVerificationRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailVerificationRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailVerificationRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailVerificationRequestMaxAggregateInputType
  }

  export type GetEmailVerificationRequestAggregateType<T extends EmailVerificationRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailVerificationRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailVerificationRequest[P]>
      : GetScalarType<T[P], AggregateEmailVerificationRequest[P]>
  }




  export type EmailVerificationRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationRequestWhereInput
    orderBy?: EmailVerificationRequestOrderByWithAggregationInput | EmailVerificationRequestOrderByWithAggregationInput[]
    by: EmailVerificationRequestScalarFieldEnum[] | EmailVerificationRequestScalarFieldEnum
    having?: EmailVerificationRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailVerificationRequestCountAggregateInputType | true
    _avg?: EmailVerificationRequestAvgAggregateInputType
    _sum?: EmailVerificationRequestSumAggregateInputType
    _min?: EmailVerificationRequestMinAggregateInputType
    _max?: EmailVerificationRequestMaxAggregateInputType
  }

  export type EmailVerificationRequestGroupByOutputType = {
    id: string
    userId: number
    email: string
    code: string
    expiresAt: Date
    _count: EmailVerificationRequestCountAggregateOutputType | null
    _avg: EmailVerificationRequestAvgAggregateOutputType | null
    _sum: EmailVerificationRequestSumAggregateOutputType | null
    _min: EmailVerificationRequestMinAggregateOutputType | null
    _max: EmailVerificationRequestMaxAggregateOutputType | null
  }

  type GetEmailVerificationRequestGroupByPayload<T extends EmailVerificationRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailVerificationRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailVerificationRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailVerificationRequestGroupByOutputType[P]>
            : GetScalarType<T[P], EmailVerificationRequestGroupByOutputType[P]>
        }
      >
    >


  export type EmailVerificationRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationRequest"]>

  export type EmailVerificationRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationRequest"]>

  export type EmailVerificationRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationRequest"]>

  export type EmailVerificationRequestSelectScalar = {
    id?: boolean
    userId?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
  }

  export type EmailVerificationRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "email" | "code" | "expiresAt", ExtArgs["result"]["emailVerificationRequest"]>
  export type EmailVerificationRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailVerificationRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailVerificationRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmailVerificationRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailVerificationRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      email: string
      code: string
      expiresAt: Date
    }, ExtArgs["result"]["emailVerificationRequest"]>
    composites: {}
  }

  type EmailVerificationRequestGetPayload<S extends boolean | null | undefined | EmailVerificationRequestDefaultArgs> = $Result.GetResult<Prisma.$EmailVerificationRequestPayload, S>

  type EmailVerificationRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailVerificationRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailVerificationRequestCountAggregateInputType | true
    }

  export interface EmailVerificationRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailVerificationRequest'], meta: { name: 'EmailVerificationRequest' } }
    /**
     * Find zero or one EmailVerificationRequest that matches the filter.
     * @param {EmailVerificationRequestFindUniqueArgs} args - Arguments to find a EmailVerificationRequest
     * @example
     * // Get one EmailVerificationRequest
     * const emailVerificationRequest = await prisma.emailVerificationRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailVerificationRequestFindUniqueArgs>(args: SelectSubset<T, EmailVerificationRequestFindUniqueArgs<ExtArgs>>): Prisma__EmailVerificationRequestClient<$Result.GetResult<Prisma.$EmailVerificationRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailVerificationRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailVerificationRequestFindUniqueOrThrowArgs} args - Arguments to find a EmailVerificationRequest
     * @example
     * // Get one EmailVerificationRequest
     * const emailVerificationRequest = await prisma.emailVerificationRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailVerificationRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailVerificationRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationRequestClient<$Result.GetResult<Prisma.$EmailVerificationRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerificationRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationRequestFindFirstArgs} args - Arguments to find a EmailVerificationRequest
     * @example
     * // Get one EmailVerificationRequest
     * const emailVerificationRequest = await prisma.emailVerificationRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailVerificationRequestFindFirstArgs>(args?: SelectSubset<T, EmailVerificationRequestFindFirstArgs<ExtArgs>>): Prisma__EmailVerificationRequestClient<$Result.GetResult<Prisma.$EmailVerificationRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerificationRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationRequestFindFirstOrThrowArgs} args - Arguments to find a EmailVerificationRequest
     * @example
     * // Get one EmailVerificationRequest
     * const emailVerificationRequest = await prisma.emailVerificationRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailVerificationRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailVerificationRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationRequestClient<$Result.GetResult<Prisma.$EmailVerificationRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailVerificationRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailVerificationRequests
     * const emailVerificationRequests = await prisma.emailVerificationRequest.findMany()
     * 
     * // Get first 10 EmailVerificationRequests
     * const emailVerificationRequests = await prisma.emailVerificationRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailVerificationRequestWithIdOnly = await prisma.emailVerificationRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailVerificationRequestFindManyArgs>(args?: SelectSubset<T, EmailVerificationRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailVerificationRequest.
     * @param {EmailVerificationRequestCreateArgs} args - Arguments to create a EmailVerificationRequest.
     * @example
     * // Create one EmailVerificationRequest
     * const EmailVerificationRequest = await prisma.emailVerificationRequest.create({
     *   data: {
     *     // ... data to create a EmailVerificationRequest
     *   }
     * })
     * 
     */
    create<T extends EmailVerificationRequestCreateArgs>(args: SelectSubset<T, EmailVerificationRequestCreateArgs<ExtArgs>>): Prisma__EmailVerificationRequestClient<$Result.GetResult<Prisma.$EmailVerificationRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailVerificationRequests.
     * @param {EmailVerificationRequestCreateManyArgs} args - Arguments to create many EmailVerificationRequests.
     * @example
     * // Create many EmailVerificationRequests
     * const emailVerificationRequest = await prisma.emailVerificationRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailVerificationRequestCreateManyArgs>(args?: SelectSubset<T, EmailVerificationRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailVerificationRequests and returns the data saved in the database.
     * @param {EmailVerificationRequestCreateManyAndReturnArgs} args - Arguments to create many EmailVerificationRequests.
     * @example
     * // Create many EmailVerificationRequests
     * const emailVerificationRequest = await prisma.emailVerificationRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailVerificationRequests and only return the `id`
     * const emailVerificationRequestWithIdOnly = await prisma.emailVerificationRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailVerificationRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailVerificationRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailVerificationRequest.
     * @param {EmailVerificationRequestDeleteArgs} args - Arguments to delete one EmailVerificationRequest.
     * @example
     * // Delete one EmailVerificationRequest
     * const EmailVerificationRequest = await prisma.emailVerificationRequest.delete({
     *   where: {
     *     // ... filter to delete one EmailVerificationRequest
     *   }
     * })
     * 
     */
    delete<T extends EmailVerificationRequestDeleteArgs>(args: SelectSubset<T, EmailVerificationRequestDeleteArgs<ExtArgs>>): Prisma__EmailVerificationRequestClient<$Result.GetResult<Prisma.$EmailVerificationRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailVerificationRequest.
     * @param {EmailVerificationRequestUpdateArgs} args - Arguments to update one EmailVerificationRequest.
     * @example
     * // Update one EmailVerificationRequest
     * const emailVerificationRequest = await prisma.emailVerificationRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailVerificationRequestUpdateArgs>(args: SelectSubset<T, EmailVerificationRequestUpdateArgs<ExtArgs>>): Prisma__EmailVerificationRequestClient<$Result.GetResult<Prisma.$EmailVerificationRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailVerificationRequests.
     * @param {EmailVerificationRequestDeleteManyArgs} args - Arguments to filter EmailVerificationRequests to delete.
     * @example
     * // Delete a few EmailVerificationRequests
     * const { count } = await prisma.emailVerificationRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailVerificationRequestDeleteManyArgs>(args?: SelectSubset<T, EmailVerificationRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerificationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailVerificationRequests
     * const emailVerificationRequest = await prisma.emailVerificationRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailVerificationRequestUpdateManyArgs>(args: SelectSubset<T, EmailVerificationRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerificationRequests and returns the data updated in the database.
     * @param {EmailVerificationRequestUpdateManyAndReturnArgs} args - Arguments to update many EmailVerificationRequests.
     * @example
     * // Update many EmailVerificationRequests
     * const emailVerificationRequest = await prisma.emailVerificationRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailVerificationRequests and only return the `id`
     * const emailVerificationRequestWithIdOnly = await prisma.emailVerificationRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmailVerificationRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailVerificationRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailVerificationRequest.
     * @param {EmailVerificationRequestUpsertArgs} args - Arguments to update or create a EmailVerificationRequest.
     * @example
     * // Update or create a EmailVerificationRequest
     * const emailVerificationRequest = await prisma.emailVerificationRequest.upsert({
     *   create: {
     *     // ... data to create a EmailVerificationRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailVerificationRequest we want to update
     *   }
     * })
     */
    upsert<T extends EmailVerificationRequestUpsertArgs>(args: SelectSubset<T, EmailVerificationRequestUpsertArgs<ExtArgs>>): Prisma__EmailVerificationRequestClient<$Result.GetResult<Prisma.$EmailVerificationRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailVerificationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationRequestCountArgs} args - Arguments to filter EmailVerificationRequests to count.
     * @example
     * // Count the number of EmailVerificationRequests
     * const count = await prisma.emailVerificationRequest.count({
     *   where: {
     *     // ... the filter for the EmailVerificationRequests we want to count
     *   }
     * })
    **/
    count<T extends EmailVerificationRequestCountArgs>(
      args?: Subset<T, EmailVerificationRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailVerificationRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailVerificationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailVerificationRequestAggregateArgs>(args: Subset<T, EmailVerificationRequestAggregateArgs>): Prisma.PrismaPromise<GetEmailVerificationRequestAggregateType<T>>

    /**
     * Group by EmailVerificationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationRequestGroupByArgs} args - Group by arguments.
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
      T extends EmailVerificationRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailVerificationRequestGroupByArgs['orderBy'] }
        : { orderBy?: EmailVerificationRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailVerificationRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailVerificationRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailVerificationRequest model
   */
  readonly fields: EmailVerificationRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailVerificationRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailVerificationRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EmailVerificationRequest model
   */
  interface EmailVerificationRequestFieldRefs {
    readonly id: FieldRef<"EmailVerificationRequest", 'String'>
    readonly userId: FieldRef<"EmailVerificationRequest", 'Int'>
    readonly email: FieldRef<"EmailVerificationRequest", 'String'>
    readonly code: FieldRef<"EmailVerificationRequest", 'String'>
    readonly expiresAt: FieldRef<"EmailVerificationRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailVerificationRequest findUnique
   */
  export type EmailVerificationRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationRequest
     */
    select?: EmailVerificationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationRequest
     */
    omit?: EmailVerificationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationRequestInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationRequest to fetch.
     */
    where: EmailVerificationRequestWhereUniqueInput
  }

  /**
   * EmailVerificationRequest findUniqueOrThrow
   */
  export type EmailVerificationRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationRequest
     */
    select?: EmailVerificationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationRequest
     */
    omit?: EmailVerificationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationRequestInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationRequest to fetch.
     */
    where: EmailVerificationRequestWhereUniqueInput
  }

  /**
   * EmailVerificationRequest findFirst
   */
  export type EmailVerificationRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationRequest
     */
    select?: EmailVerificationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationRequest
     */
    omit?: EmailVerificationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationRequestInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationRequest to fetch.
     */
    where?: EmailVerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationRequests to fetch.
     */
    orderBy?: EmailVerificationRequestOrderByWithRelationInput | EmailVerificationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerificationRequests.
     */
    cursor?: EmailVerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationRequests.
     */
    distinct?: EmailVerificationRequestScalarFieldEnum | EmailVerificationRequestScalarFieldEnum[]
  }

  /**
   * EmailVerificationRequest findFirstOrThrow
   */
  export type EmailVerificationRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationRequest
     */
    select?: EmailVerificationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationRequest
     */
    omit?: EmailVerificationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationRequestInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationRequest to fetch.
     */
    where?: EmailVerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationRequests to fetch.
     */
    orderBy?: EmailVerificationRequestOrderByWithRelationInput | EmailVerificationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerificationRequests.
     */
    cursor?: EmailVerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationRequests.
     */
    distinct?: EmailVerificationRequestScalarFieldEnum | EmailVerificationRequestScalarFieldEnum[]
  }

  /**
   * EmailVerificationRequest findMany
   */
  export type EmailVerificationRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationRequest
     */
    select?: EmailVerificationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationRequest
     */
    omit?: EmailVerificationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationRequestInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationRequests to fetch.
     */
    where?: EmailVerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationRequests to fetch.
     */
    orderBy?: EmailVerificationRequestOrderByWithRelationInput | EmailVerificationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailVerificationRequests.
     */
    cursor?: EmailVerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationRequests.
     */
    skip?: number
    distinct?: EmailVerificationRequestScalarFieldEnum | EmailVerificationRequestScalarFieldEnum[]
  }

  /**
   * EmailVerificationRequest create
   */
  export type EmailVerificationRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationRequest
     */
    select?: EmailVerificationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationRequest
     */
    omit?: EmailVerificationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailVerificationRequest.
     */
    data: XOR<EmailVerificationRequestCreateInput, EmailVerificationRequestUncheckedCreateInput>
  }

  /**
   * EmailVerificationRequest createMany
   */
  export type EmailVerificationRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailVerificationRequests.
     */
    data: EmailVerificationRequestCreateManyInput | EmailVerificationRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailVerificationRequest createManyAndReturn
   */
  export type EmailVerificationRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationRequest
     */
    select?: EmailVerificationRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationRequest
     */
    omit?: EmailVerificationRequestOmit<ExtArgs> | null
    /**
     * The data used to create many EmailVerificationRequests.
     */
    data: EmailVerificationRequestCreateManyInput | EmailVerificationRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailVerificationRequest update
   */
  export type EmailVerificationRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationRequest
     */
    select?: EmailVerificationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationRequest
     */
    omit?: EmailVerificationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailVerificationRequest.
     */
    data: XOR<EmailVerificationRequestUpdateInput, EmailVerificationRequestUncheckedUpdateInput>
    /**
     * Choose, which EmailVerificationRequest to update.
     */
    where: EmailVerificationRequestWhereUniqueInput
  }

  /**
   * EmailVerificationRequest updateMany
   */
  export type EmailVerificationRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailVerificationRequests.
     */
    data: XOR<EmailVerificationRequestUpdateManyMutationInput, EmailVerificationRequestUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationRequests to update
     */
    where?: EmailVerificationRequestWhereInput
    /**
     * Limit how many EmailVerificationRequests to update.
     */
    limit?: number
  }

  /**
   * EmailVerificationRequest updateManyAndReturn
   */
  export type EmailVerificationRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationRequest
     */
    select?: EmailVerificationRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationRequest
     */
    omit?: EmailVerificationRequestOmit<ExtArgs> | null
    /**
     * The data used to update EmailVerificationRequests.
     */
    data: XOR<EmailVerificationRequestUpdateManyMutationInput, EmailVerificationRequestUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationRequests to update
     */
    where?: EmailVerificationRequestWhereInput
    /**
     * Limit how many EmailVerificationRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailVerificationRequest upsert
   */
  export type EmailVerificationRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationRequest
     */
    select?: EmailVerificationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationRequest
     */
    omit?: EmailVerificationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailVerificationRequest to update in case it exists.
     */
    where: EmailVerificationRequestWhereUniqueInput
    /**
     * In case the EmailVerificationRequest found by the `where` argument doesn't exist, create a new EmailVerificationRequest with this data.
     */
    create: XOR<EmailVerificationRequestCreateInput, EmailVerificationRequestUncheckedCreateInput>
    /**
     * In case the EmailVerificationRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailVerificationRequestUpdateInput, EmailVerificationRequestUncheckedUpdateInput>
  }

  /**
   * EmailVerificationRequest delete
   */
  export type EmailVerificationRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationRequest
     */
    select?: EmailVerificationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationRequest
     */
    omit?: EmailVerificationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationRequestInclude<ExtArgs> | null
    /**
     * Filter which EmailVerificationRequest to delete.
     */
    where: EmailVerificationRequestWhereUniqueInput
  }

  /**
   * EmailVerificationRequest deleteMany
   */
  export type EmailVerificationRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationRequests to delete
     */
    where?: EmailVerificationRequestWhereInput
    /**
     * Limit how many EmailVerificationRequests to delete.
     */
    limit?: number
  }

  /**
   * EmailVerificationRequest without action
   */
  export type EmailVerificationRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationRequest
     */
    select?: EmailVerificationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationRequest
     */
    omit?: EmailVerificationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationRequestInclude<ExtArgs> | null
  }


  /**
   * Model PasswordResetSession
   */

  export type AggregatePasswordResetSession = {
    _count: PasswordResetSessionCountAggregateOutputType | null
    _avg: PasswordResetSessionAvgAggregateOutputType | null
    _sum: PasswordResetSessionSumAggregateOutputType | null
    _min: PasswordResetSessionMinAggregateOutputType | null
    _max: PasswordResetSessionMaxAggregateOutputType | null
  }

  export type PasswordResetSessionAvgAggregateOutputType = {
    userId: number | null
  }

  export type PasswordResetSessionSumAggregateOutputType = {
    userId: number | null
  }

  export type PasswordResetSessionMinAggregateOutputType = {
    id: string | null
    userId: number | null
    email: string | null
    code: string | null
    expiresAt: Date | null
    emailVerified: boolean | null
    twoFactorVerified: boolean | null
  }

  export type PasswordResetSessionMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    email: string | null
    code: string | null
    expiresAt: Date | null
    emailVerified: boolean | null
    twoFactorVerified: boolean | null
  }

  export type PasswordResetSessionCountAggregateOutputType = {
    id: number
    userId: number
    email: number
    code: number
    expiresAt: number
    emailVerified: number
    twoFactorVerified: number
    _all: number
  }


  export type PasswordResetSessionAvgAggregateInputType = {
    userId?: true
  }

  export type PasswordResetSessionSumAggregateInputType = {
    userId?: true
  }

  export type PasswordResetSessionMinAggregateInputType = {
    id?: true
    userId?: true
    email?: true
    code?: true
    expiresAt?: true
    emailVerified?: true
    twoFactorVerified?: true
  }

  export type PasswordResetSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    email?: true
    code?: true
    expiresAt?: true
    emailVerified?: true
    twoFactorVerified?: true
  }

  export type PasswordResetSessionCountAggregateInputType = {
    id?: true
    userId?: true
    email?: true
    code?: true
    expiresAt?: true
    emailVerified?: true
    twoFactorVerified?: true
    _all?: true
  }

  export type PasswordResetSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetSession to aggregate.
     */
    where?: PasswordResetSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetSessions to fetch.
     */
    orderBy?: PasswordResetSessionOrderByWithRelationInput | PasswordResetSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetSessions
    **/
    _count?: true | PasswordResetSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasswordResetSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasswordResetSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetSessionMaxAggregateInputType
  }

  export type GetPasswordResetSessionAggregateType<T extends PasswordResetSessionAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetSession[P]>
      : GetScalarType<T[P], AggregatePasswordResetSession[P]>
  }




  export type PasswordResetSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetSessionWhereInput
    orderBy?: PasswordResetSessionOrderByWithAggregationInput | PasswordResetSessionOrderByWithAggregationInput[]
    by: PasswordResetSessionScalarFieldEnum[] | PasswordResetSessionScalarFieldEnum
    having?: PasswordResetSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetSessionCountAggregateInputType | true
    _avg?: PasswordResetSessionAvgAggregateInputType
    _sum?: PasswordResetSessionSumAggregateInputType
    _min?: PasswordResetSessionMinAggregateInputType
    _max?: PasswordResetSessionMaxAggregateInputType
  }

  export type PasswordResetSessionGroupByOutputType = {
    id: string
    userId: number
    email: string
    code: string
    expiresAt: Date
    emailVerified: boolean
    twoFactorVerified: boolean
    _count: PasswordResetSessionCountAggregateOutputType | null
    _avg: PasswordResetSessionAvgAggregateOutputType | null
    _sum: PasswordResetSessionSumAggregateOutputType | null
    _min: PasswordResetSessionMinAggregateOutputType | null
    _max: PasswordResetSessionMaxAggregateOutputType | null
  }

  type GetPasswordResetSessionGroupByPayload<T extends PasswordResetSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetSessionGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetSessionGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    emailVerified?: boolean
    twoFactorVerified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetSession"]>

  export type PasswordResetSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    emailVerified?: boolean
    twoFactorVerified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetSession"]>

  export type PasswordResetSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    emailVerified?: boolean
    twoFactorVerified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetSession"]>

  export type PasswordResetSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    emailVerified?: boolean
    twoFactorVerified?: boolean
  }

  export type PasswordResetSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "email" | "code" | "expiresAt" | "emailVerified" | "twoFactorVerified", ExtArgs["result"]["passwordResetSession"]>
  export type PasswordResetSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordResetSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      email: string
      code: string
      expiresAt: Date
      emailVerified: boolean
      twoFactorVerified: boolean
    }, ExtArgs["result"]["passwordResetSession"]>
    composites: {}
  }

  type PasswordResetSessionGetPayload<S extends boolean | null | undefined | PasswordResetSessionDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetSessionPayload, S>

  type PasswordResetSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetSessionCountAggregateInputType | true
    }

  export interface PasswordResetSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetSession'], meta: { name: 'PasswordResetSession' } }
    /**
     * Find zero or one PasswordResetSession that matches the filter.
     * @param {PasswordResetSessionFindUniqueArgs} args - Arguments to find a PasswordResetSession
     * @example
     * // Get one PasswordResetSession
     * const passwordResetSession = await prisma.passwordResetSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetSessionFindUniqueArgs>(args: SelectSubset<T, PasswordResetSessionFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetSessionClient<$Result.GetResult<Prisma.$PasswordResetSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetSessionFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetSession
     * @example
     * // Get one PasswordResetSession
     * const passwordResetSession = await prisma.passwordResetSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetSessionClient<$Result.GetResult<Prisma.$PasswordResetSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetSessionFindFirstArgs} args - Arguments to find a PasswordResetSession
     * @example
     * // Get one PasswordResetSession
     * const passwordResetSession = await prisma.passwordResetSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetSessionFindFirstArgs>(args?: SelectSubset<T, PasswordResetSessionFindFirstArgs<ExtArgs>>): Prisma__PasswordResetSessionClient<$Result.GetResult<Prisma.$PasswordResetSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetSessionFindFirstOrThrowArgs} args - Arguments to find a PasswordResetSession
     * @example
     * // Get one PasswordResetSession
     * const passwordResetSession = await prisma.passwordResetSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetSessionClient<$Result.GetResult<Prisma.$PasswordResetSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetSessions
     * const passwordResetSessions = await prisma.passwordResetSession.findMany()
     * 
     * // Get first 10 PasswordResetSessions
     * const passwordResetSessions = await prisma.passwordResetSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetSessionWithIdOnly = await prisma.passwordResetSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetSessionFindManyArgs>(args?: SelectSubset<T, PasswordResetSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetSession.
     * @param {PasswordResetSessionCreateArgs} args - Arguments to create a PasswordResetSession.
     * @example
     * // Create one PasswordResetSession
     * const PasswordResetSession = await prisma.passwordResetSession.create({
     *   data: {
     *     // ... data to create a PasswordResetSession
     *   }
     * })
     * 
     */
    create<T extends PasswordResetSessionCreateArgs>(args: SelectSubset<T, PasswordResetSessionCreateArgs<ExtArgs>>): Prisma__PasswordResetSessionClient<$Result.GetResult<Prisma.$PasswordResetSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetSessions.
     * @param {PasswordResetSessionCreateManyArgs} args - Arguments to create many PasswordResetSessions.
     * @example
     * // Create many PasswordResetSessions
     * const passwordResetSession = await prisma.passwordResetSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetSessionCreateManyArgs>(args?: SelectSubset<T, PasswordResetSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetSessions and returns the data saved in the database.
     * @param {PasswordResetSessionCreateManyAndReturnArgs} args - Arguments to create many PasswordResetSessions.
     * @example
     * // Create many PasswordResetSessions
     * const passwordResetSession = await prisma.passwordResetSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetSessions and only return the `id`
     * const passwordResetSessionWithIdOnly = await prisma.passwordResetSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResetSession.
     * @param {PasswordResetSessionDeleteArgs} args - Arguments to delete one PasswordResetSession.
     * @example
     * // Delete one PasswordResetSession
     * const PasswordResetSession = await prisma.passwordResetSession.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetSession
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetSessionDeleteArgs>(args: SelectSubset<T, PasswordResetSessionDeleteArgs<ExtArgs>>): Prisma__PasswordResetSessionClient<$Result.GetResult<Prisma.$PasswordResetSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetSession.
     * @param {PasswordResetSessionUpdateArgs} args - Arguments to update one PasswordResetSession.
     * @example
     * // Update one PasswordResetSession
     * const passwordResetSession = await prisma.passwordResetSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetSessionUpdateArgs>(args: SelectSubset<T, PasswordResetSessionUpdateArgs<ExtArgs>>): Prisma__PasswordResetSessionClient<$Result.GetResult<Prisma.$PasswordResetSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetSessions.
     * @param {PasswordResetSessionDeleteManyArgs} args - Arguments to filter PasswordResetSessions to delete.
     * @example
     * // Delete a few PasswordResetSessions
     * const { count } = await prisma.passwordResetSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetSessionDeleteManyArgs>(args?: SelectSubset<T, PasswordResetSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetSessions
     * const passwordResetSession = await prisma.passwordResetSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetSessionUpdateManyArgs>(args: SelectSubset<T, PasswordResetSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetSessions and returns the data updated in the database.
     * @param {PasswordResetSessionUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetSessions.
     * @example
     * // Update many PasswordResetSessions
     * const passwordResetSession = await prisma.passwordResetSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResetSessions and only return the `id`
     * const passwordResetSessionWithIdOnly = await prisma.passwordResetSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends PasswordResetSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResetSession.
     * @param {PasswordResetSessionUpsertArgs} args - Arguments to update or create a PasswordResetSession.
     * @example
     * // Update or create a PasswordResetSession
     * const passwordResetSession = await prisma.passwordResetSession.upsert({
     *   create: {
     *     // ... data to create a PasswordResetSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetSession we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetSessionUpsertArgs>(args: SelectSubset<T, PasswordResetSessionUpsertArgs<ExtArgs>>): Prisma__PasswordResetSessionClient<$Result.GetResult<Prisma.$PasswordResetSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetSessionCountArgs} args - Arguments to filter PasswordResetSessions to count.
     * @example
     * // Count the number of PasswordResetSessions
     * const count = await prisma.passwordResetSession.count({
     *   where: {
     *     // ... the filter for the PasswordResetSessions we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetSessionCountArgs>(
      args?: Subset<T, PasswordResetSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordResetSessionAggregateArgs>(args: Subset<T, PasswordResetSessionAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetSessionAggregateType<T>>

    /**
     * Group by PasswordResetSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetSessionGroupByArgs} args - Group by arguments.
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
      T extends PasswordResetSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetSessionGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasswordResetSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetSession model
   */
  readonly fields: PasswordResetSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PasswordResetSession model
   */
  interface PasswordResetSessionFieldRefs {
    readonly id: FieldRef<"PasswordResetSession", 'String'>
    readonly userId: FieldRef<"PasswordResetSession", 'Int'>
    readonly email: FieldRef<"PasswordResetSession", 'String'>
    readonly code: FieldRef<"PasswordResetSession", 'String'>
    readonly expiresAt: FieldRef<"PasswordResetSession", 'DateTime'>
    readonly emailVerified: FieldRef<"PasswordResetSession", 'Boolean'>
    readonly twoFactorVerified: FieldRef<"PasswordResetSession", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetSession findUnique
   */
  export type PasswordResetSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetSession
     */
    select?: PasswordResetSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetSession
     */
    omit?: PasswordResetSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetSessionInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetSession to fetch.
     */
    where: PasswordResetSessionWhereUniqueInput
  }

  /**
   * PasswordResetSession findUniqueOrThrow
   */
  export type PasswordResetSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetSession
     */
    select?: PasswordResetSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetSession
     */
    omit?: PasswordResetSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetSessionInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetSession to fetch.
     */
    where: PasswordResetSessionWhereUniqueInput
  }

  /**
   * PasswordResetSession findFirst
   */
  export type PasswordResetSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetSession
     */
    select?: PasswordResetSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetSession
     */
    omit?: PasswordResetSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetSessionInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetSession to fetch.
     */
    where?: PasswordResetSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetSessions to fetch.
     */
    orderBy?: PasswordResetSessionOrderByWithRelationInput | PasswordResetSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetSessions.
     */
    cursor?: PasswordResetSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetSessions.
     */
    distinct?: PasswordResetSessionScalarFieldEnum | PasswordResetSessionScalarFieldEnum[]
  }

  /**
   * PasswordResetSession findFirstOrThrow
   */
  export type PasswordResetSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetSession
     */
    select?: PasswordResetSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetSession
     */
    omit?: PasswordResetSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetSessionInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetSession to fetch.
     */
    where?: PasswordResetSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetSessions to fetch.
     */
    orderBy?: PasswordResetSessionOrderByWithRelationInput | PasswordResetSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetSessions.
     */
    cursor?: PasswordResetSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetSessions.
     */
    distinct?: PasswordResetSessionScalarFieldEnum | PasswordResetSessionScalarFieldEnum[]
  }

  /**
   * PasswordResetSession findMany
   */
  export type PasswordResetSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetSession
     */
    select?: PasswordResetSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetSession
     */
    omit?: PasswordResetSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetSessionInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetSessions to fetch.
     */
    where?: PasswordResetSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetSessions to fetch.
     */
    orderBy?: PasswordResetSessionOrderByWithRelationInput | PasswordResetSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetSessions.
     */
    cursor?: PasswordResetSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetSessions.
     */
    skip?: number
    distinct?: PasswordResetSessionScalarFieldEnum | PasswordResetSessionScalarFieldEnum[]
  }

  /**
   * PasswordResetSession create
   */
  export type PasswordResetSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetSession
     */
    select?: PasswordResetSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetSession
     */
    omit?: PasswordResetSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetSession.
     */
    data: XOR<PasswordResetSessionCreateInput, PasswordResetSessionUncheckedCreateInput>
  }

  /**
   * PasswordResetSession createMany
   */
  export type PasswordResetSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetSessions.
     */
    data: PasswordResetSessionCreateManyInput | PasswordResetSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetSession createManyAndReturn
   */
  export type PasswordResetSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetSession
     */
    select?: PasswordResetSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetSession
     */
    omit?: PasswordResetSessionOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResetSessions.
     */
    data: PasswordResetSessionCreateManyInput | PasswordResetSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetSession update
   */
  export type PasswordResetSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetSession
     */
    select?: PasswordResetSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetSession
     */
    omit?: PasswordResetSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetSession.
     */
    data: XOR<PasswordResetSessionUpdateInput, PasswordResetSessionUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetSession to update.
     */
    where: PasswordResetSessionWhereUniqueInput
  }

  /**
   * PasswordResetSession updateMany
   */
  export type PasswordResetSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetSessions.
     */
    data: XOR<PasswordResetSessionUpdateManyMutationInput, PasswordResetSessionUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetSessions to update
     */
    where?: PasswordResetSessionWhereInput
    /**
     * Limit how many PasswordResetSessions to update.
     */
    limit?: number
  }

  /**
   * PasswordResetSession updateManyAndReturn
   */
  export type PasswordResetSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetSession
     */
    select?: PasswordResetSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetSession
     */
    omit?: PasswordResetSessionOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResetSessions.
     */
    data: XOR<PasswordResetSessionUpdateManyMutationInput, PasswordResetSessionUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetSessions to update
     */
    where?: PasswordResetSessionWhereInput
    /**
     * Limit how many PasswordResetSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetSession upsert
   */
  export type PasswordResetSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetSession
     */
    select?: PasswordResetSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetSession
     */
    omit?: PasswordResetSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetSession to update in case it exists.
     */
    where: PasswordResetSessionWhereUniqueInput
    /**
     * In case the PasswordResetSession found by the `where` argument doesn't exist, create a new PasswordResetSession with this data.
     */
    create: XOR<PasswordResetSessionCreateInput, PasswordResetSessionUncheckedCreateInput>
    /**
     * In case the PasswordResetSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetSessionUpdateInput, PasswordResetSessionUncheckedUpdateInput>
  }

  /**
   * PasswordResetSession delete
   */
  export type PasswordResetSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetSession
     */
    select?: PasswordResetSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetSession
     */
    omit?: PasswordResetSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetSessionInclude<ExtArgs> | null
    /**
     * Filter which PasswordResetSession to delete.
     */
    where: PasswordResetSessionWhereUniqueInput
  }

  /**
   * PasswordResetSession deleteMany
   */
  export type PasswordResetSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetSessions to delete
     */
    where?: PasswordResetSessionWhereInput
    /**
     * Limit how many PasswordResetSessions to delete.
     */
    limit?: number
  }

  /**
   * PasswordResetSession without action
   */
  export type PasswordResetSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetSession
     */
    select?: PasswordResetSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetSession
     */
    omit?: PasswordResetSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetSessionInclude<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _avg: ApiKeyAvgAggregateOutputType | null
    _sum: ApiKeySumAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyAvgAggregateOutputType = {
    minInterval: number | null
    ownerId: number | null
  }

  export type ApiKeySumAggregateOutputType = {
    minInterval: number | null
    ownerId: number | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    key: string | null
    unlimited: boolean | null
    minInterval: number | null
    ownerId: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    lastRequest: Date | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    key: string | null
    unlimited: boolean | null
    minInterval: number | null
    ownerId: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    lastRequest: Date | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    key: number
    unlimited: number
    minInterval: number
    ownerId: number
    name: number
    description: number
    createdAt: number
    lastRequest: number
    _all: number
  }


  export type ApiKeyAvgAggregateInputType = {
    minInterval?: true
    ownerId?: true
  }

  export type ApiKeySumAggregateInputType = {
    minInterval?: true
    ownerId?: true
  }

  export type ApiKeyMinAggregateInputType = {
    id?: true
    key?: true
    unlimited?: true
    minInterval?: true
    ownerId?: true
    name?: true
    description?: true
    createdAt?: true
    lastRequest?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    key?: true
    unlimited?: true
    minInterval?: true
    ownerId?: true
    name?: true
    description?: true
    createdAt?: true
    lastRequest?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    key?: true
    unlimited?: true
    minInterval?: true
    ownerId?: true
    name?: true
    description?: true
    createdAt?: true
    lastRequest?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiKeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiKeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _avg?: ApiKeyAvgAggregateInputType
    _sum?: ApiKeySumAggregateInputType
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    key: string
    unlimited: boolean
    minInterval: number
    ownerId: number | null
    name: string
    description: string | null
    createdAt: Date
    lastRequest: Date | null
    _count: ApiKeyCountAggregateOutputType | null
    _avg: ApiKeyAvgAggregateOutputType | null
    _sum: ApiKeySumAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    unlimited?: boolean
    minInterval?: boolean
    ownerId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    lastRequest?: boolean
    owner?: boolean | ApiKey$ownerArgs<ExtArgs>
    usageLogs?: boolean | ApiKey$usageLogsArgs<ExtArgs>
    apiKeyPermissions?: boolean | ApiKey$apiKeyPermissionsArgs<ExtArgs>
    _count?: boolean | ApiKeyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    unlimited?: boolean
    minInterval?: boolean
    ownerId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    lastRequest?: boolean
    owner?: boolean | ApiKey$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    unlimited?: boolean
    minInterval?: boolean
    ownerId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    lastRequest?: boolean
    owner?: boolean | ApiKey$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    key?: boolean
    unlimited?: boolean
    minInterval?: boolean
    ownerId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    lastRequest?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "unlimited" | "minInterval" | "ownerId" | "name" | "description" | "createdAt" | "lastRequest", ExtArgs["result"]["apiKey"]>
  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | ApiKey$ownerArgs<ExtArgs>
    usageLogs?: boolean | ApiKey$usageLogsArgs<ExtArgs>
    apiKeyPermissions?: boolean | ApiKey$apiKeyPermissionsArgs<ExtArgs>
    _count?: boolean | ApiKeyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | ApiKey$ownerArgs<ExtArgs>
  }
  export type ApiKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | ApiKey$ownerArgs<ExtArgs>
  }

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs> | null
      usageLogs: Prisma.$ApiUsageLogPayload<ExtArgs>[]
      apiKeyPermissions: Prisma.$ApiKeyPermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      unlimited: boolean
      minInterval: number
      ownerId: number | null
      name: string
      description: string | null
      createdAt: Date
      lastRequest: Date | null
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys and returns the data updated in the database.
     * @param {ApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ApiKeys.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
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
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends ApiKey$ownerArgs<ExtArgs> = {}>(args?: Subset<T, ApiKey$ownerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usageLogs<T extends ApiKey$usageLogsArgs<ExtArgs> = {}>(args?: Subset<T, ApiKey$usageLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiKeyPermissions<T extends ApiKey$apiKeyPermissionsArgs<ExtArgs> = {}>(args?: Subset<T, ApiKey$apiKeyPermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ApiKey model
   */
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly key: FieldRef<"ApiKey", 'String'>
    readonly unlimited: FieldRef<"ApiKey", 'Boolean'>
    readonly minInterval: FieldRef<"ApiKey", 'Int'>
    readonly ownerId: FieldRef<"ApiKey", 'Int'>
    readonly name: FieldRef<"ApiKey", 'String'>
    readonly description: FieldRef<"ApiKey", 'String'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
    readonly lastRequest: FieldRef<"ApiKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey updateManyAndReturn
   */
  export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ApiKey.owner
   */
  export type ApiKey$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ApiKey.usageLogs
   */
  export type ApiKey$usageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    where?: ApiUsageLogWhereInput
    orderBy?: ApiUsageLogOrderByWithRelationInput | ApiUsageLogOrderByWithRelationInput[]
    cursor?: ApiUsageLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiUsageLogScalarFieldEnum | ApiUsageLogScalarFieldEnum[]
  }

  /**
   * ApiKey.apiKeyPermissions
   */
  export type ApiKey$apiKeyPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyPermission
     */
    select?: ApiKeyPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyPermission
     */
    omit?: ApiKeyPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyPermissionInclude<ExtArgs> | null
    where?: ApiKeyPermissionWhereInput
    orderBy?: ApiKeyPermissionOrderByWithRelationInput | ApiKeyPermissionOrderByWithRelationInput[]
    cursor?: ApiKeyPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyPermissionScalarFieldEnum | ApiKeyPermissionScalarFieldEnum[]
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model ApiKeyPermission
   */

  export type AggregateApiKeyPermission = {
    _count: ApiKeyPermissionCountAggregateOutputType | null
    _min: ApiKeyPermissionMinAggregateOutputType | null
    _max: ApiKeyPermissionMaxAggregateOutputType | null
  }

  export type ApiKeyPermissionMinAggregateOutputType = {
    id: string | null
    apiKeyId: string | null
    permission: string | null
  }

  export type ApiKeyPermissionMaxAggregateOutputType = {
    id: string | null
    apiKeyId: string | null
    permission: string | null
  }

  export type ApiKeyPermissionCountAggregateOutputType = {
    id: number
    apiKeyId: number
    permission: number
    _all: number
  }


  export type ApiKeyPermissionMinAggregateInputType = {
    id?: true
    apiKeyId?: true
    permission?: true
  }

  export type ApiKeyPermissionMaxAggregateInputType = {
    id?: true
    apiKeyId?: true
    permission?: true
  }

  export type ApiKeyPermissionCountAggregateInputType = {
    id?: true
    apiKeyId?: true
    permission?: true
    _all?: true
  }

  export type ApiKeyPermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeyPermission to aggregate.
     */
    where?: ApiKeyPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeyPermissions to fetch.
     */
    orderBy?: ApiKeyPermissionOrderByWithRelationInput | ApiKeyPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeyPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeyPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeyPermissions
    **/
    _count?: true | ApiKeyPermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyPermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyPermissionMaxAggregateInputType
  }

  export type GetApiKeyPermissionAggregateType<T extends ApiKeyPermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKeyPermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKeyPermission[P]>
      : GetScalarType<T[P], AggregateApiKeyPermission[P]>
  }




  export type ApiKeyPermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyPermissionWhereInput
    orderBy?: ApiKeyPermissionOrderByWithAggregationInput | ApiKeyPermissionOrderByWithAggregationInput[]
    by: ApiKeyPermissionScalarFieldEnum[] | ApiKeyPermissionScalarFieldEnum
    having?: ApiKeyPermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyPermissionCountAggregateInputType | true
    _min?: ApiKeyPermissionMinAggregateInputType
    _max?: ApiKeyPermissionMaxAggregateInputType
  }

  export type ApiKeyPermissionGroupByOutputType = {
    id: string
    apiKeyId: string
    permission: string
    _count: ApiKeyPermissionCountAggregateOutputType | null
    _min: ApiKeyPermissionMinAggregateOutputType | null
    _max: ApiKeyPermissionMaxAggregateOutputType | null
  }

  type GetApiKeyPermissionGroupByPayload<T extends ApiKeyPermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyPermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyPermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyPermissionGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyPermissionGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeyPermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKeyId?: boolean
    permission?: boolean
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKeyPermission"]>

  export type ApiKeyPermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKeyId?: boolean
    permission?: boolean
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKeyPermission"]>

  export type ApiKeyPermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKeyId?: boolean
    permission?: boolean
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKeyPermission"]>

  export type ApiKeyPermissionSelectScalar = {
    id?: boolean
    apiKeyId?: boolean
    permission?: boolean
  }

  export type ApiKeyPermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apiKeyId" | "permission", ExtArgs["result"]["apiKeyPermission"]>
  export type ApiKeyPermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }
  export type ApiKeyPermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }
  export type ApiKeyPermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }

  export type $ApiKeyPermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKeyPermission"
    objects: {
      apiKey: Prisma.$ApiKeyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      apiKeyId: string
      permission: string
    }, ExtArgs["result"]["apiKeyPermission"]>
    composites: {}
  }

  type ApiKeyPermissionGetPayload<S extends boolean | null | undefined | ApiKeyPermissionDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPermissionPayload, S>

  type ApiKeyPermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyPermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyPermissionCountAggregateInputType | true
    }

  export interface ApiKeyPermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKeyPermission'], meta: { name: 'ApiKeyPermission' } }
    /**
     * Find zero or one ApiKeyPermission that matches the filter.
     * @param {ApiKeyPermissionFindUniqueArgs} args - Arguments to find a ApiKeyPermission
     * @example
     * // Get one ApiKeyPermission
     * const apiKeyPermission = await prisma.apiKeyPermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyPermissionFindUniqueArgs>(args: SelectSubset<T, ApiKeyPermissionFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyPermissionClient<$Result.GetResult<Prisma.$ApiKeyPermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKeyPermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyPermissionFindUniqueOrThrowArgs} args - Arguments to find a ApiKeyPermission
     * @example
     * // Get one ApiKeyPermission
     * const apiKeyPermission = await prisma.apiKeyPermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyPermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyPermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyPermissionClient<$Result.GetResult<Prisma.$ApiKeyPermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKeyPermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyPermissionFindFirstArgs} args - Arguments to find a ApiKeyPermission
     * @example
     * // Get one ApiKeyPermission
     * const apiKeyPermission = await prisma.apiKeyPermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyPermissionFindFirstArgs>(args?: SelectSubset<T, ApiKeyPermissionFindFirstArgs<ExtArgs>>): Prisma__ApiKeyPermissionClient<$Result.GetResult<Prisma.$ApiKeyPermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKeyPermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyPermissionFindFirstOrThrowArgs} args - Arguments to find a ApiKeyPermission
     * @example
     * // Get one ApiKeyPermission
     * const apiKeyPermission = await prisma.apiKeyPermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyPermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyPermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyPermissionClient<$Result.GetResult<Prisma.$ApiKeyPermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeyPermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyPermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeyPermissions
     * const apiKeyPermissions = await prisma.apiKeyPermission.findMany()
     * 
     * // Get first 10 ApiKeyPermissions
     * const apiKeyPermissions = await prisma.apiKeyPermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyPermissionWithIdOnly = await prisma.apiKeyPermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyPermissionFindManyArgs>(args?: SelectSubset<T, ApiKeyPermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKeyPermission.
     * @param {ApiKeyPermissionCreateArgs} args - Arguments to create a ApiKeyPermission.
     * @example
     * // Create one ApiKeyPermission
     * const ApiKeyPermission = await prisma.apiKeyPermission.create({
     *   data: {
     *     // ... data to create a ApiKeyPermission
     *   }
     * })
     * 
     */
    create<T extends ApiKeyPermissionCreateArgs>(args: SelectSubset<T, ApiKeyPermissionCreateArgs<ExtArgs>>): Prisma__ApiKeyPermissionClient<$Result.GetResult<Prisma.$ApiKeyPermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeyPermissions.
     * @param {ApiKeyPermissionCreateManyArgs} args - Arguments to create many ApiKeyPermissions.
     * @example
     * // Create many ApiKeyPermissions
     * const apiKeyPermission = await prisma.apiKeyPermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyPermissionCreateManyArgs>(args?: SelectSubset<T, ApiKeyPermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeyPermissions and returns the data saved in the database.
     * @param {ApiKeyPermissionCreateManyAndReturnArgs} args - Arguments to create many ApiKeyPermissions.
     * @example
     * // Create many ApiKeyPermissions
     * const apiKeyPermission = await prisma.apiKeyPermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeyPermissions and only return the `id`
     * const apiKeyPermissionWithIdOnly = await prisma.apiKeyPermission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyPermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyPermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKeyPermission.
     * @param {ApiKeyPermissionDeleteArgs} args - Arguments to delete one ApiKeyPermission.
     * @example
     * // Delete one ApiKeyPermission
     * const ApiKeyPermission = await prisma.apiKeyPermission.delete({
     *   where: {
     *     // ... filter to delete one ApiKeyPermission
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyPermissionDeleteArgs>(args: SelectSubset<T, ApiKeyPermissionDeleteArgs<ExtArgs>>): Prisma__ApiKeyPermissionClient<$Result.GetResult<Prisma.$ApiKeyPermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKeyPermission.
     * @param {ApiKeyPermissionUpdateArgs} args - Arguments to update one ApiKeyPermission.
     * @example
     * // Update one ApiKeyPermission
     * const apiKeyPermission = await prisma.apiKeyPermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyPermissionUpdateArgs>(args: SelectSubset<T, ApiKeyPermissionUpdateArgs<ExtArgs>>): Prisma__ApiKeyPermissionClient<$Result.GetResult<Prisma.$ApiKeyPermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeyPermissions.
     * @param {ApiKeyPermissionDeleteManyArgs} args - Arguments to filter ApiKeyPermissions to delete.
     * @example
     * // Delete a few ApiKeyPermissions
     * const { count } = await prisma.apiKeyPermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyPermissionDeleteManyArgs>(args?: SelectSubset<T, ApiKeyPermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeyPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyPermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeyPermissions
     * const apiKeyPermission = await prisma.apiKeyPermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyPermissionUpdateManyArgs>(args: SelectSubset<T, ApiKeyPermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeyPermissions and returns the data updated in the database.
     * @param {ApiKeyPermissionUpdateManyAndReturnArgs} args - Arguments to update many ApiKeyPermissions.
     * @example
     * // Update many ApiKeyPermissions
     * const apiKeyPermission = await prisma.apiKeyPermission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeyPermissions and only return the `id`
     * const apiKeyPermissionWithIdOnly = await prisma.apiKeyPermission.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApiKeyPermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyPermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKeyPermission.
     * @param {ApiKeyPermissionUpsertArgs} args - Arguments to update or create a ApiKeyPermission.
     * @example
     * // Update or create a ApiKeyPermission
     * const apiKeyPermission = await prisma.apiKeyPermission.upsert({
     *   create: {
     *     // ... data to create a ApiKeyPermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKeyPermission we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyPermissionUpsertArgs>(args: SelectSubset<T, ApiKeyPermissionUpsertArgs<ExtArgs>>): Prisma__ApiKeyPermissionClient<$Result.GetResult<Prisma.$ApiKeyPermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeyPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyPermissionCountArgs} args - Arguments to filter ApiKeyPermissions to count.
     * @example
     * // Count the number of ApiKeyPermissions
     * const count = await prisma.apiKeyPermission.count({
     *   where: {
     *     // ... the filter for the ApiKeyPermissions we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyPermissionCountArgs>(
      args?: Subset<T, ApiKeyPermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyPermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKeyPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyPermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiKeyPermissionAggregateArgs>(args: Subset<T, ApiKeyPermissionAggregateArgs>): Prisma.PrismaPromise<GetApiKeyPermissionAggregateType<T>>

    /**
     * Group by ApiKeyPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyPermissionGroupByArgs} args - Group by arguments.
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
      T extends ApiKeyPermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyPermissionGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyPermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiKeyPermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKeyPermission model
   */
  readonly fields: ApiKeyPermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKeyPermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyPermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apiKey<T extends ApiKeyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiKeyDefaultArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ApiKeyPermission model
   */
  interface ApiKeyPermissionFieldRefs {
    readonly id: FieldRef<"ApiKeyPermission", 'String'>
    readonly apiKeyId: FieldRef<"ApiKeyPermission", 'String'>
    readonly permission: FieldRef<"ApiKeyPermission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ApiKeyPermission findUnique
   */
  export type ApiKeyPermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyPermission
     */
    select?: ApiKeyPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyPermission
     */
    omit?: ApiKeyPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyPermission to fetch.
     */
    where: ApiKeyPermissionWhereUniqueInput
  }

  /**
   * ApiKeyPermission findUniqueOrThrow
   */
  export type ApiKeyPermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyPermission
     */
    select?: ApiKeyPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyPermission
     */
    omit?: ApiKeyPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyPermission to fetch.
     */
    where: ApiKeyPermissionWhereUniqueInput
  }

  /**
   * ApiKeyPermission findFirst
   */
  export type ApiKeyPermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyPermission
     */
    select?: ApiKeyPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyPermission
     */
    omit?: ApiKeyPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyPermission to fetch.
     */
    where?: ApiKeyPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeyPermissions to fetch.
     */
    orderBy?: ApiKeyPermissionOrderByWithRelationInput | ApiKeyPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeyPermissions.
     */
    cursor?: ApiKeyPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeyPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeyPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeyPermissions.
     */
    distinct?: ApiKeyPermissionScalarFieldEnum | ApiKeyPermissionScalarFieldEnum[]
  }

  /**
   * ApiKeyPermission findFirstOrThrow
   */
  export type ApiKeyPermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyPermission
     */
    select?: ApiKeyPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyPermission
     */
    omit?: ApiKeyPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyPermission to fetch.
     */
    where?: ApiKeyPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeyPermissions to fetch.
     */
    orderBy?: ApiKeyPermissionOrderByWithRelationInput | ApiKeyPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeyPermissions.
     */
    cursor?: ApiKeyPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeyPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeyPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeyPermissions.
     */
    distinct?: ApiKeyPermissionScalarFieldEnum | ApiKeyPermissionScalarFieldEnum[]
  }

  /**
   * ApiKeyPermission findMany
   */
  export type ApiKeyPermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyPermission
     */
    select?: ApiKeyPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyPermission
     */
    omit?: ApiKeyPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyPermissions to fetch.
     */
    where?: ApiKeyPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeyPermissions to fetch.
     */
    orderBy?: ApiKeyPermissionOrderByWithRelationInput | ApiKeyPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeyPermissions.
     */
    cursor?: ApiKeyPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeyPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeyPermissions.
     */
    skip?: number
    distinct?: ApiKeyPermissionScalarFieldEnum | ApiKeyPermissionScalarFieldEnum[]
  }

  /**
   * ApiKeyPermission create
   */
  export type ApiKeyPermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyPermission
     */
    select?: ApiKeyPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyPermission
     */
    omit?: ApiKeyPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyPermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKeyPermission.
     */
    data: XOR<ApiKeyPermissionCreateInput, ApiKeyPermissionUncheckedCreateInput>
  }

  /**
   * ApiKeyPermission createMany
   */
  export type ApiKeyPermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeyPermissions.
     */
    data: ApiKeyPermissionCreateManyInput | ApiKeyPermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKeyPermission createManyAndReturn
   */
  export type ApiKeyPermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyPermission
     */
    select?: ApiKeyPermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyPermission
     */
    omit?: ApiKeyPermissionOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeyPermissions.
     */
    data: ApiKeyPermissionCreateManyInput | ApiKeyPermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyPermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKeyPermission update
   */
  export type ApiKeyPermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyPermission
     */
    select?: ApiKeyPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyPermission
     */
    omit?: ApiKeyPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyPermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKeyPermission.
     */
    data: XOR<ApiKeyPermissionUpdateInput, ApiKeyPermissionUncheckedUpdateInput>
    /**
     * Choose, which ApiKeyPermission to update.
     */
    where: ApiKeyPermissionWhereUniqueInput
  }

  /**
   * ApiKeyPermission updateMany
   */
  export type ApiKeyPermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeyPermissions.
     */
    data: XOR<ApiKeyPermissionUpdateManyMutationInput, ApiKeyPermissionUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeyPermissions to update
     */
    where?: ApiKeyPermissionWhereInput
    /**
     * Limit how many ApiKeyPermissions to update.
     */
    limit?: number
  }

  /**
   * ApiKeyPermission updateManyAndReturn
   */
  export type ApiKeyPermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyPermission
     */
    select?: ApiKeyPermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyPermission
     */
    omit?: ApiKeyPermissionOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeyPermissions.
     */
    data: XOR<ApiKeyPermissionUpdateManyMutationInput, ApiKeyPermissionUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeyPermissions to update
     */
    where?: ApiKeyPermissionWhereInput
    /**
     * Limit how many ApiKeyPermissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyPermissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKeyPermission upsert
   */
  export type ApiKeyPermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyPermission
     */
    select?: ApiKeyPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyPermission
     */
    omit?: ApiKeyPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyPermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKeyPermission to update in case it exists.
     */
    where: ApiKeyPermissionWhereUniqueInput
    /**
     * In case the ApiKeyPermission found by the `where` argument doesn't exist, create a new ApiKeyPermission with this data.
     */
    create: XOR<ApiKeyPermissionCreateInput, ApiKeyPermissionUncheckedCreateInput>
    /**
     * In case the ApiKeyPermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyPermissionUpdateInput, ApiKeyPermissionUncheckedUpdateInput>
  }

  /**
   * ApiKeyPermission delete
   */
  export type ApiKeyPermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyPermission
     */
    select?: ApiKeyPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyPermission
     */
    omit?: ApiKeyPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyPermissionInclude<ExtArgs> | null
    /**
     * Filter which ApiKeyPermission to delete.
     */
    where: ApiKeyPermissionWhereUniqueInput
  }

  /**
   * ApiKeyPermission deleteMany
   */
  export type ApiKeyPermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeyPermissions to delete
     */
    where?: ApiKeyPermissionWhereInput
    /**
     * Limit how many ApiKeyPermissions to delete.
     */
    limit?: number
  }

  /**
   * ApiKeyPermission without action
   */
  export type ApiKeyPermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyPermission
     */
    select?: ApiKeyPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyPermission
     */
    omit?: ApiKeyPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyPermissionInclude<ExtArgs> | null
  }


  /**
   * Model ApiCreditsPurchase
   */

  export type AggregateApiCreditsPurchase = {
    _count: ApiCreditsPurchaseCountAggregateOutputType | null
    _avg: ApiCreditsPurchaseAvgAggregateOutputType | null
    _sum: ApiCreditsPurchaseSumAggregateOutputType | null
    _min: ApiCreditsPurchaseMinAggregateOutputType | null
    _max: ApiCreditsPurchaseMaxAggregateOutputType | null
  }

  export type ApiCreditsPurchaseAvgAggregateOutputType = {
    credits: number | null
    userId: number | null
  }

  export type ApiCreditsPurchaseSumAggregateOutputType = {
    credits: number | null
    userId: number | null
  }

  export type ApiCreditsPurchaseMinAggregateOutputType = {
    id: string | null
    credits: number | null
    purchaseDate: Date | null
    userId: number | null
  }

  export type ApiCreditsPurchaseMaxAggregateOutputType = {
    id: string | null
    credits: number | null
    purchaseDate: Date | null
    userId: number | null
  }

  export type ApiCreditsPurchaseCountAggregateOutputType = {
    id: number
    credits: number
    purchaseDate: number
    userId: number
    _all: number
  }


  export type ApiCreditsPurchaseAvgAggregateInputType = {
    credits?: true
    userId?: true
  }

  export type ApiCreditsPurchaseSumAggregateInputType = {
    credits?: true
    userId?: true
  }

  export type ApiCreditsPurchaseMinAggregateInputType = {
    id?: true
    credits?: true
    purchaseDate?: true
    userId?: true
  }

  export type ApiCreditsPurchaseMaxAggregateInputType = {
    id?: true
    credits?: true
    purchaseDate?: true
    userId?: true
  }

  export type ApiCreditsPurchaseCountAggregateInputType = {
    id?: true
    credits?: true
    purchaseDate?: true
    userId?: true
    _all?: true
  }

  export type ApiCreditsPurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiCreditsPurchase to aggregate.
     */
    where?: ApiCreditsPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCreditsPurchases to fetch.
     */
    orderBy?: ApiCreditsPurchaseOrderByWithRelationInput | ApiCreditsPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiCreditsPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCreditsPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCreditsPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiCreditsPurchases
    **/
    _count?: true | ApiCreditsPurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiCreditsPurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiCreditsPurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiCreditsPurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiCreditsPurchaseMaxAggregateInputType
  }

  export type GetApiCreditsPurchaseAggregateType<T extends ApiCreditsPurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregateApiCreditsPurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiCreditsPurchase[P]>
      : GetScalarType<T[P], AggregateApiCreditsPurchase[P]>
  }




  export type ApiCreditsPurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiCreditsPurchaseWhereInput
    orderBy?: ApiCreditsPurchaseOrderByWithAggregationInput | ApiCreditsPurchaseOrderByWithAggregationInput[]
    by: ApiCreditsPurchaseScalarFieldEnum[] | ApiCreditsPurchaseScalarFieldEnum
    having?: ApiCreditsPurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiCreditsPurchaseCountAggregateInputType | true
    _avg?: ApiCreditsPurchaseAvgAggregateInputType
    _sum?: ApiCreditsPurchaseSumAggregateInputType
    _min?: ApiCreditsPurchaseMinAggregateInputType
    _max?: ApiCreditsPurchaseMaxAggregateInputType
  }

  export type ApiCreditsPurchaseGroupByOutputType = {
    id: string
    credits: number
    purchaseDate: Date
    userId: number | null
    _count: ApiCreditsPurchaseCountAggregateOutputType | null
    _avg: ApiCreditsPurchaseAvgAggregateOutputType | null
    _sum: ApiCreditsPurchaseSumAggregateOutputType | null
    _min: ApiCreditsPurchaseMinAggregateOutputType | null
    _max: ApiCreditsPurchaseMaxAggregateOutputType | null
  }

  type GetApiCreditsPurchaseGroupByPayload<T extends ApiCreditsPurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiCreditsPurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiCreditsPurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiCreditsPurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], ApiCreditsPurchaseGroupByOutputType[P]>
        }
      >
    >


  export type ApiCreditsPurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    credits?: boolean
    purchaseDate?: boolean
    userId?: boolean
    user?: boolean | ApiCreditsPurchase$userArgs<ExtArgs>
  }, ExtArgs["result"]["apiCreditsPurchase"]>

  export type ApiCreditsPurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    credits?: boolean
    purchaseDate?: boolean
    userId?: boolean
    user?: boolean | ApiCreditsPurchase$userArgs<ExtArgs>
  }, ExtArgs["result"]["apiCreditsPurchase"]>

  export type ApiCreditsPurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    credits?: boolean
    purchaseDate?: boolean
    userId?: boolean
    user?: boolean | ApiCreditsPurchase$userArgs<ExtArgs>
  }, ExtArgs["result"]["apiCreditsPurchase"]>

  export type ApiCreditsPurchaseSelectScalar = {
    id?: boolean
    credits?: boolean
    purchaseDate?: boolean
    userId?: boolean
  }

  export type ApiCreditsPurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "credits" | "purchaseDate" | "userId", ExtArgs["result"]["apiCreditsPurchase"]>
  export type ApiCreditsPurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ApiCreditsPurchase$userArgs<ExtArgs>
  }
  export type ApiCreditsPurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ApiCreditsPurchase$userArgs<ExtArgs>
  }
  export type ApiCreditsPurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ApiCreditsPurchase$userArgs<ExtArgs>
  }

  export type $ApiCreditsPurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiCreditsPurchase"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      credits: number
      purchaseDate: Date
      userId: number | null
    }, ExtArgs["result"]["apiCreditsPurchase"]>
    composites: {}
  }

  type ApiCreditsPurchaseGetPayload<S extends boolean | null | undefined | ApiCreditsPurchaseDefaultArgs> = $Result.GetResult<Prisma.$ApiCreditsPurchasePayload, S>

  type ApiCreditsPurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiCreditsPurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiCreditsPurchaseCountAggregateInputType | true
    }

  export interface ApiCreditsPurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiCreditsPurchase'], meta: { name: 'ApiCreditsPurchase' } }
    /**
     * Find zero or one ApiCreditsPurchase that matches the filter.
     * @param {ApiCreditsPurchaseFindUniqueArgs} args - Arguments to find a ApiCreditsPurchase
     * @example
     * // Get one ApiCreditsPurchase
     * const apiCreditsPurchase = await prisma.apiCreditsPurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiCreditsPurchaseFindUniqueArgs>(args: SelectSubset<T, ApiCreditsPurchaseFindUniqueArgs<ExtArgs>>): Prisma__ApiCreditsPurchaseClient<$Result.GetResult<Prisma.$ApiCreditsPurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiCreditsPurchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiCreditsPurchaseFindUniqueOrThrowArgs} args - Arguments to find a ApiCreditsPurchase
     * @example
     * // Get one ApiCreditsPurchase
     * const apiCreditsPurchase = await prisma.apiCreditsPurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiCreditsPurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiCreditsPurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiCreditsPurchaseClient<$Result.GetResult<Prisma.$ApiCreditsPurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiCreditsPurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCreditsPurchaseFindFirstArgs} args - Arguments to find a ApiCreditsPurchase
     * @example
     * // Get one ApiCreditsPurchase
     * const apiCreditsPurchase = await prisma.apiCreditsPurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiCreditsPurchaseFindFirstArgs>(args?: SelectSubset<T, ApiCreditsPurchaseFindFirstArgs<ExtArgs>>): Prisma__ApiCreditsPurchaseClient<$Result.GetResult<Prisma.$ApiCreditsPurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiCreditsPurchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCreditsPurchaseFindFirstOrThrowArgs} args - Arguments to find a ApiCreditsPurchase
     * @example
     * // Get one ApiCreditsPurchase
     * const apiCreditsPurchase = await prisma.apiCreditsPurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiCreditsPurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiCreditsPurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiCreditsPurchaseClient<$Result.GetResult<Prisma.$ApiCreditsPurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiCreditsPurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCreditsPurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiCreditsPurchases
     * const apiCreditsPurchases = await prisma.apiCreditsPurchase.findMany()
     * 
     * // Get first 10 ApiCreditsPurchases
     * const apiCreditsPurchases = await prisma.apiCreditsPurchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiCreditsPurchaseWithIdOnly = await prisma.apiCreditsPurchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiCreditsPurchaseFindManyArgs>(args?: SelectSubset<T, ApiCreditsPurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiCreditsPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiCreditsPurchase.
     * @param {ApiCreditsPurchaseCreateArgs} args - Arguments to create a ApiCreditsPurchase.
     * @example
     * // Create one ApiCreditsPurchase
     * const ApiCreditsPurchase = await prisma.apiCreditsPurchase.create({
     *   data: {
     *     // ... data to create a ApiCreditsPurchase
     *   }
     * })
     * 
     */
    create<T extends ApiCreditsPurchaseCreateArgs>(args: SelectSubset<T, ApiCreditsPurchaseCreateArgs<ExtArgs>>): Prisma__ApiCreditsPurchaseClient<$Result.GetResult<Prisma.$ApiCreditsPurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiCreditsPurchases.
     * @param {ApiCreditsPurchaseCreateManyArgs} args - Arguments to create many ApiCreditsPurchases.
     * @example
     * // Create many ApiCreditsPurchases
     * const apiCreditsPurchase = await prisma.apiCreditsPurchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiCreditsPurchaseCreateManyArgs>(args?: SelectSubset<T, ApiCreditsPurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiCreditsPurchases and returns the data saved in the database.
     * @param {ApiCreditsPurchaseCreateManyAndReturnArgs} args - Arguments to create many ApiCreditsPurchases.
     * @example
     * // Create many ApiCreditsPurchases
     * const apiCreditsPurchase = await prisma.apiCreditsPurchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiCreditsPurchases and only return the `id`
     * const apiCreditsPurchaseWithIdOnly = await prisma.apiCreditsPurchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiCreditsPurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiCreditsPurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiCreditsPurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiCreditsPurchase.
     * @param {ApiCreditsPurchaseDeleteArgs} args - Arguments to delete one ApiCreditsPurchase.
     * @example
     * // Delete one ApiCreditsPurchase
     * const ApiCreditsPurchase = await prisma.apiCreditsPurchase.delete({
     *   where: {
     *     // ... filter to delete one ApiCreditsPurchase
     *   }
     * })
     * 
     */
    delete<T extends ApiCreditsPurchaseDeleteArgs>(args: SelectSubset<T, ApiCreditsPurchaseDeleteArgs<ExtArgs>>): Prisma__ApiCreditsPurchaseClient<$Result.GetResult<Prisma.$ApiCreditsPurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiCreditsPurchase.
     * @param {ApiCreditsPurchaseUpdateArgs} args - Arguments to update one ApiCreditsPurchase.
     * @example
     * // Update one ApiCreditsPurchase
     * const apiCreditsPurchase = await prisma.apiCreditsPurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiCreditsPurchaseUpdateArgs>(args: SelectSubset<T, ApiCreditsPurchaseUpdateArgs<ExtArgs>>): Prisma__ApiCreditsPurchaseClient<$Result.GetResult<Prisma.$ApiCreditsPurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiCreditsPurchases.
     * @param {ApiCreditsPurchaseDeleteManyArgs} args - Arguments to filter ApiCreditsPurchases to delete.
     * @example
     * // Delete a few ApiCreditsPurchases
     * const { count } = await prisma.apiCreditsPurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiCreditsPurchaseDeleteManyArgs>(args?: SelectSubset<T, ApiCreditsPurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiCreditsPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCreditsPurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiCreditsPurchases
     * const apiCreditsPurchase = await prisma.apiCreditsPurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiCreditsPurchaseUpdateManyArgs>(args: SelectSubset<T, ApiCreditsPurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiCreditsPurchases and returns the data updated in the database.
     * @param {ApiCreditsPurchaseUpdateManyAndReturnArgs} args - Arguments to update many ApiCreditsPurchases.
     * @example
     * // Update many ApiCreditsPurchases
     * const apiCreditsPurchase = await prisma.apiCreditsPurchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiCreditsPurchases and only return the `id`
     * const apiCreditsPurchaseWithIdOnly = await prisma.apiCreditsPurchase.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApiCreditsPurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiCreditsPurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiCreditsPurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiCreditsPurchase.
     * @param {ApiCreditsPurchaseUpsertArgs} args - Arguments to update or create a ApiCreditsPurchase.
     * @example
     * // Update or create a ApiCreditsPurchase
     * const apiCreditsPurchase = await prisma.apiCreditsPurchase.upsert({
     *   create: {
     *     // ... data to create a ApiCreditsPurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiCreditsPurchase we want to update
     *   }
     * })
     */
    upsert<T extends ApiCreditsPurchaseUpsertArgs>(args: SelectSubset<T, ApiCreditsPurchaseUpsertArgs<ExtArgs>>): Prisma__ApiCreditsPurchaseClient<$Result.GetResult<Prisma.$ApiCreditsPurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiCreditsPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCreditsPurchaseCountArgs} args - Arguments to filter ApiCreditsPurchases to count.
     * @example
     * // Count the number of ApiCreditsPurchases
     * const count = await prisma.apiCreditsPurchase.count({
     *   where: {
     *     // ... the filter for the ApiCreditsPurchases we want to count
     *   }
     * })
    **/
    count<T extends ApiCreditsPurchaseCountArgs>(
      args?: Subset<T, ApiCreditsPurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiCreditsPurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiCreditsPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCreditsPurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiCreditsPurchaseAggregateArgs>(args: Subset<T, ApiCreditsPurchaseAggregateArgs>): Prisma.PrismaPromise<GetApiCreditsPurchaseAggregateType<T>>

    /**
     * Group by ApiCreditsPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCreditsPurchaseGroupByArgs} args - Group by arguments.
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
      T extends ApiCreditsPurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiCreditsPurchaseGroupByArgs['orderBy'] }
        : { orderBy?: ApiCreditsPurchaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiCreditsPurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiCreditsPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiCreditsPurchase model
   */
  readonly fields: ApiCreditsPurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiCreditsPurchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiCreditsPurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ApiCreditsPurchase$userArgs<ExtArgs> = {}>(args?: Subset<T, ApiCreditsPurchase$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ApiCreditsPurchase model
   */
  interface ApiCreditsPurchaseFieldRefs {
    readonly id: FieldRef<"ApiCreditsPurchase", 'String'>
    readonly credits: FieldRef<"ApiCreditsPurchase", 'Int'>
    readonly purchaseDate: FieldRef<"ApiCreditsPurchase", 'DateTime'>
    readonly userId: FieldRef<"ApiCreditsPurchase", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ApiCreditsPurchase findUnique
   */
  export type ApiCreditsPurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsPurchase
     */
    select?: ApiCreditsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsPurchase
     */
    omit?: ApiCreditsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which ApiCreditsPurchase to fetch.
     */
    where: ApiCreditsPurchaseWhereUniqueInput
  }

  /**
   * ApiCreditsPurchase findUniqueOrThrow
   */
  export type ApiCreditsPurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsPurchase
     */
    select?: ApiCreditsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsPurchase
     */
    omit?: ApiCreditsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which ApiCreditsPurchase to fetch.
     */
    where: ApiCreditsPurchaseWhereUniqueInput
  }

  /**
   * ApiCreditsPurchase findFirst
   */
  export type ApiCreditsPurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsPurchase
     */
    select?: ApiCreditsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsPurchase
     */
    omit?: ApiCreditsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which ApiCreditsPurchase to fetch.
     */
    where?: ApiCreditsPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCreditsPurchases to fetch.
     */
    orderBy?: ApiCreditsPurchaseOrderByWithRelationInput | ApiCreditsPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiCreditsPurchases.
     */
    cursor?: ApiCreditsPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCreditsPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCreditsPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiCreditsPurchases.
     */
    distinct?: ApiCreditsPurchaseScalarFieldEnum | ApiCreditsPurchaseScalarFieldEnum[]
  }

  /**
   * ApiCreditsPurchase findFirstOrThrow
   */
  export type ApiCreditsPurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsPurchase
     */
    select?: ApiCreditsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsPurchase
     */
    omit?: ApiCreditsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which ApiCreditsPurchase to fetch.
     */
    where?: ApiCreditsPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCreditsPurchases to fetch.
     */
    orderBy?: ApiCreditsPurchaseOrderByWithRelationInput | ApiCreditsPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiCreditsPurchases.
     */
    cursor?: ApiCreditsPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCreditsPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCreditsPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiCreditsPurchases.
     */
    distinct?: ApiCreditsPurchaseScalarFieldEnum | ApiCreditsPurchaseScalarFieldEnum[]
  }

  /**
   * ApiCreditsPurchase findMany
   */
  export type ApiCreditsPurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsPurchase
     */
    select?: ApiCreditsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsPurchase
     */
    omit?: ApiCreditsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which ApiCreditsPurchases to fetch.
     */
    where?: ApiCreditsPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCreditsPurchases to fetch.
     */
    orderBy?: ApiCreditsPurchaseOrderByWithRelationInput | ApiCreditsPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiCreditsPurchases.
     */
    cursor?: ApiCreditsPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCreditsPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCreditsPurchases.
     */
    skip?: number
    distinct?: ApiCreditsPurchaseScalarFieldEnum | ApiCreditsPurchaseScalarFieldEnum[]
  }

  /**
   * ApiCreditsPurchase create
   */
  export type ApiCreditsPurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsPurchase
     */
    select?: ApiCreditsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsPurchase
     */
    omit?: ApiCreditsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiCreditsPurchase.
     */
    data: XOR<ApiCreditsPurchaseCreateInput, ApiCreditsPurchaseUncheckedCreateInput>
  }

  /**
   * ApiCreditsPurchase createMany
   */
  export type ApiCreditsPurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiCreditsPurchases.
     */
    data: ApiCreditsPurchaseCreateManyInput | ApiCreditsPurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiCreditsPurchase createManyAndReturn
   */
  export type ApiCreditsPurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsPurchase
     */
    select?: ApiCreditsPurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsPurchase
     */
    omit?: ApiCreditsPurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many ApiCreditsPurchases.
     */
    data: ApiCreditsPurchaseCreateManyInput | ApiCreditsPurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsPurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiCreditsPurchase update
   */
  export type ApiCreditsPurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsPurchase
     */
    select?: ApiCreditsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsPurchase
     */
    omit?: ApiCreditsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiCreditsPurchase.
     */
    data: XOR<ApiCreditsPurchaseUpdateInput, ApiCreditsPurchaseUncheckedUpdateInput>
    /**
     * Choose, which ApiCreditsPurchase to update.
     */
    where: ApiCreditsPurchaseWhereUniqueInput
  }

  /**
   * ApiCreditsPurchase updateMany
   */
  export type ApiCreditsPurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiCreditsPurchases.
     */
    data: XOR<ApiCreditsPurchaseUpdateManyMutationInput, ApiCreditsPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which ApiCreditsPurchases to update
     */
    where?: ApiCreditsPurchaseWhereInput
    /**
     * Limit how many ApiCreditsPurchases to update.
     */
    limit?: number
  }

  /**
   * ApiCreditsPurchase updateManyAndReturn
   */
  export type ApiCreditsPurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsPurchase
     */
    select?: ApiCreditsPurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsPurchase
     */
    omit?: ApiCreditsPurchaseOmit<ExtArgs> | null
    /**
     * The data used to update ApiCreditsPurchases.
     */
    data: XOR<ApiCreditsPurchaseUpdateManyMutationInput, ApiCreditsPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which ApiCreditsPurchases to update
     */
    where?: ApiCreditsPurchaseWhereInput
    /**
     * Limit how many ApiCreditsPurchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsPurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiCreditsPurchase upsert
   */
  export type ApiCreditsPurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsPurchase
     */
    select?: ApiCreditsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsPurchase
     */
    omit?: ApiCreditsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsPurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiCreditsPurchase to update in case it exists.
     */
    where: ApiCreditsPurchaseWhereUniqueInput
    /**
     * In case the ApiCreditsPurchase found by the `where` argument doesn't exist, create a new ApiCreditsPurchase with this data.
     */
    create: XOR<ApiCreditsPurchaseCreateInput, ApiCreditsPurchaseUncheckedCreateInput>
    /**
     * In case the ApiCreditsPurchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiCreditsPurchaseUpdateInput, ApiCreditsPurchaseUncheckedUpdateInput>
  }

  /**
   * ApiCreditsPurchase delete
   */
  export type ApiCreditsPurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsPurchase
     */
    select?: ApiCreditsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsPurchase
     */
    omit?: ApiCreditsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsPurchaseInclude<ExtArgs> | null
    /**
     * Filter which ApiCreditsPurchase to delete.
     */
    where: ApiCreditsPurchaseWhereUniqueInput
  }

  /**
   * ApiCreditsPurchase deleteMany
   */
  export type ApiCreditsPurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiCreditsPurchases to delete
     */
    where?: ApiCreditsPurchaseWhereInput
    /**
     * Limit how many ApiCreditsPurchases to delete.
     */
    limit?: number
  }

  /**
   * ApiCreditsPurchase.user
   */
  export type ApiCreditsPurchase$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ApiCreditsPurchase without action
   */
  export type ApiCreditsPurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsPurchase
     */
    select?: ApiCreditsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsPurchase
     */
    omit?: ApiCreditsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsPurchaseInclude<ExtArgs> | null
  }


  /**
   * Model ApiCreditsUsage
   */

  export type AggregateApiCreditsUsage = {
    _count: ApiCreditsUsageCountAggregateOutputType | null
    _avg: ApiCreditsUsageAvgAggregateOutputType | null
    _sum: ApiCreditsUsageSumAggregateOutputType | null
    _min: ApiCreditsUsageMinAggregateOutputType | null
    _max: ApiCreditsUsageMaxAggregateOutputType | null
  }

  export type ApiCreditsUsageAvgAggregateOutputType = {
    credits: number | null
    userId: number | null
  }

  export type ApiCreditsUsageSumAggregateOutputType = {
    credits: number | null
    userId: number | null
  }

  export type ApiCreditsUsageMinAggregateOutputType = {
    id: string | null
    apiKeyId: string | null
    credits: number | null
    usageDate: Date | null
    userId: number | null
  }

  export type ApiCreditsUsageMaxAggregateOutputType = {
    id: string | null
    apiKeyId: string | null
    credits: number | null
    usageDate: Date | null
    userId: number | null
  }

  export type ApiCreditsUsageCountAggregateOutputType = {
    id: number
    apiKeyId: number
    credits: number
    usageDate: number
    userId: number
    _all: number
  }


  export type ApiCreditsUsageAvgAggregateInputType = {
    credits?: true
    userId?: true
  }

  export type ApiCreditsUsageSumAggregateInputType = {
    credits?: true
    userId?: true
  }

  export type ApiCreditsUsageMinAggregateInputType = {
    id?: true
    apiKeyId?: true
    credits?: true
    usageDate?: true
    userId?: true
  }

  export type ApiCreditsUsageMaxAggregateInputType = {
    id?: true
    apiKeyId?: true
    credits?: true
    usageDate?: true
    userId?: true
  }

  export type ApiCreditsUsageCountAggregateInputType = {
    id?: true
    apiKeyId?: true
    credits?: true
    usageDate?: true
    userId?: true
    _all?: true
  }

  export type ApiCreditsUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiCreditsUsage to aggregate.
     */
    where?: ApiCreditsUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCreditsUsages to fetch.
     */
    orderBy?: ApiCreditsUsageOrderByWithRelationInput | ApiCreditsUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiCreditsUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCreditsUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCreditsUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiCreditsUsages
    **/
    _count?: true | ApiCreditsUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiCreditsUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiCreditsUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiCreditsUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiCreditsUsageMaxAggregateInputType
  }

  export type GetApiCreditsUsageAggregateType<T extends ApiCreditsUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateApiCreditsUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiCreditsUsage[P]>
      : GetScalarType<T[P], AggregateApiCreditsUsage[P]>
  }




  export type ApiCreditsUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiCreditsUsageWhereInput
    orderBy?: ApiCreditsUsageOrderByWithAggregationInput | ApiCreditsUsageOrderByWithAggregationInput[]
    by: ApiCreditsUsageScalarFieldEnum[] | ApiCreditsUsageScalarFieldEnum
    having?: ApiCreditsUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiCreditsUsageCountAggregateInputType | true
    _avg?: ApiCreditsUsageAvgAggregateInputType
    _sum?: ApiCreditsUsageSumAggregateInputType
    _min?: ApiCreditsUsageMinAggregateInputType
    _max?: ApiCreditsUsageMaxAggregateInputType
  }

  export type ApiCreditsUsageGroupByOutputType = {
    id: string
    apiKeyId: string
    credits: number
    usageDate: Date
    userId: number | null
    _count: ApiCreditsUsageCountAggregateOutputType | null
    _avg: ApiCreditsUsageAvgAggregateOutputType | null
    _sum: ApiCreditsUsageSumAggregateOutputType | null
    _min: ApiCreditsUsageMinAggregateOutputType | null
    _max: ApiCreditsUsageMaxAggregateOutputType | null
  }

  type GetApiCreditsUsageGroupByPayload<T extends ApiCreditsUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiCreditsUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiCreditsUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiCreditsUsageGroupByOutputType[P]>
            : GetScalarType<T[P], ApiCreditsUsageGroupByOutputType[P]>
        }
      >
    >


  export type ApiCreditsUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKeyId?: boolean
    credits?: boolean
    usageDate?: boolean
    userId?: boolean
    user?: boolean | ApiCreditsUsage$userArgs<ExtArgs>
  }, ExtArgs["result"]["apiCreditsUsage"]>

  export type ApiCreditsUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKeyId?: boolean
    credits?: boolean
    usageDate?: boolean
    userId?: boolean
    user?: boolean | ApiCreditsUsage$userArgs<ExtArgs>
  }, ExtArgs["result"]["apiCreditsUsage"]>

  export type ApiCreditsUsageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKeyId?: boolean
    credits?: boolean
    usageDate?: boolean
    userId?: boolean
    user?: boolean | ApiCreditsUsage$userArgs<ExtArgs>
  }, ExtArgs["result"]["apiCreditsUsage"]>

  export type ApiCreditsUsageSelectScalar = {
    id?: boolean
    apiKeyId?: boolean
    credits?: boolean
    usageDate?: boolean
    userId?: boolean
  }

  export type ApiCreditsUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apiKeyId" | "credits" | "usageDate" | "userId", ExtArgs["result"]["apiCreditsUsage"]>
  export type ApiCreditsUsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ApiCreditsUsage$userArgs<ExtArgs>
  }
  export type ApiCreditsUsageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ApiCreditsUsage$userArgs<ExtArgs>
  }
  export type ApiCreditsUsageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ApiCreditsUsage$userArgs<ExtArgs>
  }

  export type $ApiCreditsUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiCreditsUsage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      apiKeyId: string
      credits: number
      usageDate: Date
      userId: number | null
    }, ExtArgs["result"]["apiCreditsUsage"]>
    composites: {}
  }

  type ApiCreditsUsageGetPayload<S extends boolean | null | undefined | ApiCreditsUsageDefaultArgs> = $Result.GetResult<Prisma.$ApiCreditsUsagePayload, S>

  type ApiCreditsUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiCreditsUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiCreditsUsageCountAggregateInputType | true
    }

  export interface ApiCreditsUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiCreditsUsage'], meta: { name: 'ApiCreditsUsage' } }
    /**
     * Find zero or one ApiCreditsUsage that matches the filter.
     * @param {ApiCreditsUsageFindUniqueArgs} args - Arguments to find a ApiCreditsUsage
     * @example
     * // Get one ApiCreditsUsage
     * const apiCreditsUsage = await prisma.apiCreditsUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiCreditsUsageFindUniqueArgs>(args: SelectSubset<T, ApiCreditsUsageFindUniqueArgs<ExtArgs>>): Prisma__ApiCreditsUsageClient<$Result.GetResult<Prisma.$ApiCreditsUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiCreditsUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiCreditsUsageFindUniqueOrThrowArgs} args - Arguments to find a ApiCreditsUsage
     * @example
     * // Get one ApiCreditsUsage
     * const apiCreditsUsage = await prisma.apiCreditsUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiCreditsUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiCreditsUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiCreditsUsageClient<$Result.GetResult<Prisma.$ApiCreditsUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiCreditsUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCreditsUsageFindFirstArgs} args - Arguments to find a ApiCreditsUsage
     * @example
     * // Get one ApiCreditsUsage
     * const apiCreditsUsage = await prisma.apiCreditsUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiCreditsUsageFindFirstArgs>(args?: SelectSubset<T, ApiCreditsUsageFindFirstArgs<ExtArgs>>): Prisma__ApiCreditsUsageClient<$Result.GetResult<Prisma.$ApiCreditsUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiCreditsUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCreditsUsageFindFirstOrThrowArgs} args - Arguments to find a ApiCreditsUsage
     * @example
     * // Get one ApiCreditsUsage
     * const apiCreditsUsage = await prisma.apiCreditsUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiCreditsUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiCreditsUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiCreditsUsageClient<$Result.GetResult<Prisma.$ApiCreditsUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiCreditsUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCreditsUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiCreditsUsages
     * const apiCreditsUsages = await prisma.apiCreditsUsage.findMany()
     * 
     * // Get first 10 ApiCreditsUsages
     * const apiCreditsUsages = await prisma.apiCreditsUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiCreditsUsageWithIdOnly = await prisma.apiCreditsUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiCreditsUsageFindManyArgs>(args?: SelectSubset<T, ApiCreditsUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiCreditsUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiCreditsUsage.
     * @param {ApiCreditsUsageCreateArgs} args - Arguments to create a ApiCreditsUsage.
     * @example
     * // Create one ApiCreditsUsage
     * const ApiCreditsUsage = await prisma.apiCreditsUsage.create({
     *   data: {
     *     // ... data to create a ApiCreditsUsage
     *   }
     * })
     * 
     */
    create<T extends ApiCreditsUsageCreateArgs>(args: SelectSubset<T, ApiCreditsUsageCreateArgs<ExtArgs>>): Prisma__ApiCreditsUsageClient<$Result.GetResult<Prisma.$ApiCreditsUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiCreditsUsages.
     * @param {ApiCreditsUsageCreateManyArgs} args - Arguments to create many ApiCreditsUsages.
     * @example
     * // Create many ApiCreditsUsages
     * const apiCreditsUsage = await prisma.apiCreditsUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiCreditsUsageCreateManyArgs>(args?: SelectSubset<T, ApiCreditsUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiCreditsUsages and returns the data saved in the database.
     * @param {ApiCreditsUsageCreateManyAndReturnArgs} args - Arguments to create many ApiCreditsUsages.
     * @example
     * // Create many ApiCreditsUsages
     * const apiCreditsUsage = await prisma.apiCreditsUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiCreditsUsages and only return the `id`
     * const apiCreditsUsageWithIdOnly = await prisma.apiCreditsUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiCreditsUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiCreditsUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiCreditsUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiCreditsUsage.
     * @param {ApiCreditsUsageDeleteArgs} args - Arguments to delete one ApiCreditsUsage.
     * @example
     * // Delete one ApiCreditsUsage
     * const ApiCreditsUsage = await prisma.apiCreditsUsage.delete({
     *   where: {
     *     // ... filter to delete one ApiCreditsUsage
     *   }
     * })
     * 
     */
    delete<T extends ApiCreditsUsageDeleteArgs>(args: SelectSubset<T, ApiCreditsUsageDeleteArgs<ExtArgs>>): Prisma__ApiCreditsUsageClient<$Result.GetResult<Prisma.$ApiCreditsUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiCreditsUsage.
     * @param {ApiCreditsUsageUpdateArgs} args - Arguments to update one ApiCreditsUsage.
     * @example
     * // Update one ApiCreditsUsage
     * const apiCreditsUsage = await prisma.apiCreditsUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiCreditsUsageUpdateArgs>(args: SelectSubset<T, ApiCreditsUsageUpdateArgs<ExtArgs>>): Prisma__ApiCreditsUsageClient<$Result.GetResult<Prisma.$ApiCreditsUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiCreditsUsages.
     * @param {ApiCreditsUsageDeleteManyArgs} args - Arguments to filter ApiCreditsUsages to delete.
     * @example
     * // Delete a few ApiCreditsUsages
     * const { count } = await prisma.apiCreditsUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiCreditsUsageDeleteManyArgs>(args?: SelectSubset<T, ApiCreditsUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiCreditsUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCreditsUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiCreditsUsages
     * const apiCreditsUsage = await prisma.apiCreditsUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiCreditsUsageUpdateManyArgs>(args: SelectSubset<T, ApiCreditsUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiCreditsUsages and returns the data updated in the database.
     * @param {ApiCreditsUsageUpdateManyAndReturnArgs} args - Arguments to update many ApiCreditsUsages.
     * @example
     * // Update many ApiCreditsUsages
     * const apiCreditsUsage = await prisma.apiCreditsUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiCreditsUsages and only return the `id`
     * const apiCreditsUsageWithIdOnly = await prisma.apiCreditsUsage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApiCreditsUsageUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiCreditsUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiCreditsUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiCreditsUsage.
     * @param {ApiCreditsUsageUpsertArgs} args - Arguments to update or create a ApiCreditsUsage.
     * @example
     * // Update or create a ApiCreditsUsage
     * const apiCreditsUsage = await prisma.apiCreditsUsage.upsert({
     *   create: {
     *     // ... data to create a ApiCreditsUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiCreditsUsage we want to update
     *   }
     * })
     */
    upsert<T extends ApiCreditsUsageUpsertArgs>(args: SelectSubset<T, ApiCreditsUsageUpsertArgs<ExtArgs>>): Prisma__ApiCreditsUsageClient<$Result.GetResult<Prisma.$ApiCreditsUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiCreditsUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCreditsUsageCountArgs} args - Arguments to filter ApiCreditsUsages to count.
     * @example
     * // Count the number of ApiCreditsUsages
     * const count = await prisma.apiCreditsUsage.count({
     *   where: {
     *     // ... the filter for the ApiCreditsUsages we want to count
     *   }
     * })
    **/
    count<T extends ApiCreditsUsageCountArgs>(
      args?: Subset<T, ApiCreditsUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiCreditsUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiCreditsUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCreditsUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiCreditsUsageAggregateArgs>(args: Subset<T, ApiCreditsUsageAggregateArgs>): Prisma.PrismaPromise<GetApiCreditsUsageAggregateType<T>>

    /**
     * Group by ApiCreditsUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCreditsUsageGroupByArgs} args - Group by arguments.
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
      T extends ApiCreditsUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiCreditsUsageGroupByArgs['orderBy'] }
        : { orderBy?: ApiCreditsUsageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiCreditsUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiCreditsUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiCreditsUsage model
   */
  readonly fields: ApiCreditsUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiCreditsUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiCreditsUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ApiCreditsUsage$userArgs<ExtArgs> = {}>(args?: Subset<T, ApiCreditsUsage$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ApiCreditsUsage model
   */
  interface ApiCreditsUsageFieldRefs {
    readonly id: FieldRef<"ApiCreditsUsage", 'String'>
    readonly apiKeyId: FieldRef<"ApiCreditsUsage", 'String'>
    readonly credits: FieldRef<"ApiCreditsUsage", 'Int'>
    readonly usageDate: FieldRef<"ApiCreditsUsage", 'DateTime'>
    readonly userId: FieldRef<"ApiCreditsUsage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ApiCreditsUsage findUnique
   */
  export type ApiCreditsUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsUsage
     */
    select?: ApiCreditsUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsUsage
     */
    omit?: ApiCreditsUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsUsageInclude<ExtArgs> | null
    /**
     * Filter, which ApiCreditsUsage to fetch.
     */
    where: ApiCreditsUsageWhereUniqueInput
  }

  /**
   * ApiCreditsUsage findUniqueOrThrow
   */
  export type ApiCreditsUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsUsage
     */
    select?: ApiCreditsUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsUsage
     */
    omit?: ApiCreditsUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsUsageInclude<ExtArgs> | null
    /**
     * Filter, which ApiCreditsUsage to fetch.
     */
    where: ApiCreditsUsageWhereUniqueInput
  }

  /**
   * ApiCreditsUsage findFirst
   */
  export type ApiCreditsUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsUsage
     */
    select?: ApiCreditsUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsUsage
     */
    omit?: ApiCreditsUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsUsageInclude<ExtArgs> | null
    /**
     * Filter, which ApiCreditsUsage to fetch.
     */
    where?: ApiCreditsUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCreditsUsages to fetch.
     */
    orderBy?: ApiCreditsUsageOrderByWithRelationInput | ApiCreditsUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiCreditsUsages.
     */
    cursor?: ApiCreditsUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCreditsUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCreditsUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiCreditsUsages.
     */
    distinct?: ApiCreditsUsageScalarFieldEnum | ApiCreditsUsageScalarFieldEnum[]
  }

  /**
   * ApiCreditsUsage findFirstOrThrow
   */
  export type ApiCreditsUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsUsage
     */
    select?: ApiCreditsUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsUsage
     */
    omit?: ApiCreditsUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsUsageInclude<ExtArgs> | null
    /**
     * Filter, which ApiCreditsUsage to fetch.
     */
    where?: ApiCreditsUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCreditsUsages to fetch.
     */
    orderBy?: ApiCreditsUsageOrderByWithRelationInput | ApiCreditsUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiCreditsUsages.
     */
    cursor?: ApiCreditsUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCreditsUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCreditsUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiCreditsUsages.
     */
    distinct?: ApiCreditsUsageScalarFieldEnum | ApiCreditsUsageScalarFieldEnum[]
  }

  /**
   * ApiCreditsUsage findMany
   */
  export type ApiCreditsUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsUsage
     */
    select?: ApiCreditsUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsUsage
     */
    omit?: ApiCreditsUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsUsageInclude<ExtArgs> | null
    /**
     * Filter, which ApiCreditsUsages to fetch.
     */
    where?: ApiCreditsUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCreditsUsages to fetch.
     */
    orderBy?: ApiCreditsUsageOrderByWithRelationInput | ApiCreditsUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiCreditsUsages.
     */
    cursor?: ApiCreditsUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCreditsUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCreditsUsages.
     */
    skip?: number
    distinct?: ApiCreditsUsageScalarFieldEnum | ApiCreditsUsageScalarFieldEnum[]
  }

  /**
   * ApiCreditsUsage create
   */
  export type ApiCreditsUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsUsage
     */
    select?: ApiCreditsUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsUsage
     */
    omit?: ApiCreditsUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsUsageInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiCreditsUsage.
     */
    data: XOR<ApiCreditsUsageCreateInput, ApiCreditsUsageUncheckedCreateInput>
  }

  /**
   * ApiCreditsUsage createMany
   */
  export type ApiCreditsUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiCreditsUsages.
     */
    data: ApiCreditsUsageCreateManyInput | ApiCreditsUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiCreditsUsage createManyAndReturn
   */
  export type ApiCreditsUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsUsage
     */
    select?: ApiCreditsUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsUsage
     */
    omit?: ApiCreditsUsageOmit<ExtArgs> | null
    /**
     * The data used to create many ApiCreditsUsages.
     */
    data: ApiCreditsUsageCreateManyInput | ApiCreditsUsageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsUsageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiCreditsUsage update
   */
  export type ApiCreditsUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsUsage
     */
    select?: ApiCreditsUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsUsage
     */
    omit?: ApiCreditsUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsUsageInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiCreditsUsage.
     */
    data: XOR<ApiCreditsUsageUpdateInput, ApiCreditsUsageUncheckedUpdateInput>
    /**
     * Choose, which ApiCreditsUsage to update.
     */
    where: ApiCreditsUsageWhereUniqueInput
  }

  /**
   * ApiCreditsUsage updateMany
   */
  export type ApiCreditsUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiCreditsUsages.
     */
    data: XOR<ApiCreditsUsageUpdateManyMutationInput, ApiCreditsUsageUncheckedUpdateManyInput>
    /**
     * Filter which ApiCreditsUsages to update
     */
    where?: ApiCreditsUsageWhereInput
    /**
     * Limit how many ApiCreditsUsages to update.
     */
    limit?: number
  }

  /**
   * ApiCreditsUsage updateManyAndReturn
   */
  export type ApiCreditsUsageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsUsage
     */
    select?: ApiCreditsUsageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsUsage
     */
    omit?: ApiCreditsUsageOmit<ExtArgs> | null
    /**
     * The data used to update ApiCreditsUsages.
     */
    data: XOR<ApiCreditsUsageUpdateManyMutationInput, ApiCreditsUsageUncheckedUpdateManyInput>
    /**
     * Filter which ApiCreditsUsages to update
     */
    where?: ApiCreditsUsageWhereInput
    /**
     * Limit how many ApiCreditsUsages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsUsageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiCreditsUsage upsert
   */
  export type ApiCreditsUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsUsage
     */
    select?: ApiCreditsUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsUsage
     */
    omit?: ApiCreditsUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsUsageInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiCreditsUsage to update in case it exists.
     */
    where: ApiCreditsUsageWhereUniqueInput
    /**
     * In case the ApiCreditsUsage found by the `where` argument doesn't exist, create a new ApiCreditsUsage with this data.
     */
    create: XOR<ApiCreditsUsageCreateInput, ApiCreditsUsageUncheckedCreateInput>
    /**
     * In case the ApiCreditsUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiCreditsUsageUpdateInput, ApiCreditsUsageUncheckedUpdateInput>
  }

  /**
   * ApiCreditsUsage delete
   */
  export type ApiCreditsUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsUsage
     */
    select?: ApiCreditsUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsUsage
     */
    omit?: ApiCreditsUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsUsageInclude<ExtArgs> | null
    /**
     * Filter which ApiCreditsUsage to delete.
     */
    where: ApiCreditsUsageWhereUniqueInput
  }

  /**
   * ApiCreditsUsage deleteMany
   */
  export type ApiCreditsUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiCreditsUsages to delete
     */
    where?: ApiCreditsUsageWhereInput
    /**
     * Limit how many ApiCreditsUsages to delete.
     */
    limit?: number
  }

  /**
   * ApiCreditsUsage.user
   */
  export type ApiCreditsUsage$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ApiCreditsUsage without action
   */
  export type ApiCreditsUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCreditsUsage
     */
    select?: ApiCreditsUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCreditsUsage
     */
    omit?: ApiCreditsUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCreditsUsageInclude<ExtArgs> | null
  }


  /**
   * Model ApiUsageLog
   */

  export type AggregateApiUsageLog = {
    _count: ApiUsageLogCountAggregateOutputType | null
    _avg: ApiUsageLogAvgAggregateOutputType | null
    _sum: ApiUsageLogSumAggregateOutputType | null
    _min: ApiUsageLogMinAggregateOutputType | null
    _max: ApiUsageLogMaxAggregateOutputType | null
  }

  export type ApiUsageLogAvgAggregateOutputType = {
    statusCode: number | null
  }

  export type ApiUsageLogSumAggregateOutputType = {
    statusCode: number | null
  }

  export type ApiUsageLogMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    endpoint: string | null
    statusCode: number | null
    ipAddress: string | null
    userAgent: string | null
    apiKeyId: string | null
  }

  export type ApiUsageLogMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    endpoint: string | null
    statusCode: number | null
    ipAddress: string | null
    userAgent: string | null
    apiKeyId: string | null
  }

  export type ApiUsageLogCountAggregateOutputType = {
    id: number
    timestamp: number
    endpoint: number
    params: number
    statusCode: number
    ipAddress: number
    userAgent: number
    apiKeyId: number
    _all: number
  }


  export type ApiUsageLogAvgAggregateInputType = {
    statusCode?: true
  }

  export type ApiUsageLogSumAggregateInputType = {
    statusCode?: true
  }

  export type ApiUsageLogMinAggregateInputType = {
    id?: true
    timestamp?: true
    endpoint?: true
    statusCode?: true
    ipAddress?: true
    userAgent?: true
    apiKeyId?: true
  }

  export type ApiUsageLogMaxAggregateInputType = {
    id?: true
    timestamp?: true
    endpoint?: true
    statusCode?: true
    ipAddress?: true
    userAgent?: true
    apiKeyId?: true
  }

  export type ApiUsageLogCountAggregateInputType = {
    id?: true
    timestamp?: true
    endpoint?: true
    params?: true
    statusCode?: true
    ipAddress?: true
    userAgent?: true
    apiKeyId?: true
    _all?: true
  }

  export type ApiUsageLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiUsageLog to aggregate.
     */
    where?: ApiUsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiUsageLogs to fetch.
     */
    orderBy?: ApiUsageLogOrderByWithRelationInput | ApiUsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiUsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiUsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiUsageLogs
    **/
    _count?: true | ApiUsageLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiUsageLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiUsageLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiUsageLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiUsageLogMaxAggregateInputType
  }

  export type GetApiUsageLogAggregateType<T extends ApiUsageLogAggregateArgs> = {
        [P in keyof T & keyof AggregateApiUsageLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiUsageLog[P]>
      : GetScalarType<T[P], AggregateApiUsageLog[P]>
  }




  export type ApiUsageLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiUsageLogWhereInput
    orderBy?: ApiUsageLogOrderByWithAggregationInput | ApiUsageLogOrderByWithAggregationInput[]
    by: ApiUsageLogScalarFieldEnum[] | ApiUsageLogScalarFieldEnum
    having?: ApiUsageLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiUsageLogCountAggregateInputType | true
    _avg?: ApiUsageLogAvgAggregateInputType
    _sum?: ApiUsageLogSumAggregateInputType
    _min?: ApiUsageLogMinAggregateInputType
    _max?: ApiUsageLogMaxAggregateInputType
  }

  export type ApiUsageLogGroupByOutputType = {
    id: string
    timestamp: Date
    endpoint: string
    params: JsonValue
    statusCode: number
    ipAddress: string | null
    userAgent: string | null
    apiKeyId: string
    _count: ApiUsageLogCountAggregateOutputType | null
    _avg: ApiUsageLogAvgAggregateOutputType | null
    _sum: ApiUsageLogSumAggregateOutputType | null
    _min: ApiUsageLogMinAggregateOutputType | null
    _max: ApiUsageLogMaxAggregateOutputType | null
  }

  type GetApiUsageLogGroupByPayload<T extends ApiUsageLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiUsageLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiUsageLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiUsageLogGroupByOutputType[P]>
            : GetScalarType<T[P], ApiUsageLogGroupByOutputType[P]>
        }
      >
    >


  export type ApiUsageLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    endpoint?: boolean
    params?: boolean
    statusCode?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    apiKeyId?: boolean
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiUsageLog"]>

  export type ApiUsageLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    endpoint?: boolean
    params?: boolean
    statusCode?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    apiKeyId?: boolean
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiUsageLog"]>

  export type ApiUsageLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    endpoint?: boolean
    params?: boolean
    statusCode?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    apiKeyId?: boolean
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiUsageLog"]>

  export type ApiUsageLogSelectScalar = {
    id?: boolean
    timestamp?: boolean
    endpoint?: boolean
    params?: boolean
    statusCode?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    apiKeyId?: boolean
  }

  export type ApiUsageLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "endpoint" | "params" | "statusCode" | "ipAddress" | "userAgent" | "apiKeyId", ExtArgs["result"]["apiUsageLog"]>
  export type ApiUsageLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }
  export type ApiUsageLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }
  export type ApiUsageLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }

  export type $ApiUsageLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiUsageLog"
    objects: {
      apiKey: Prisma.$ApiKeyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      endpoint: string
      params: Prisma.JsonValue
      statusCode: number
      ipAddress: string | null
      userAgent: string | null
      apiKeyId: string
    }, ExtArgs["result"]["apiUsageLog"]>
    composites: {}
  }

  type ApiUsageLogGetPayload<S extends boolean | null | undefined | ApiUsageLogDefaultArgs> = $Result.GetResult<Prisma.$ApiUsageLogPayload, S>

  type ApiUsageLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiUsageLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiUsageLogCountAggregateInputType | true
    }

  export interface ApiUsageLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiUsageLog'], meta: { name: 'ApiUsageLog' } }
    /**
     * Find zero or one ApiUsageLog that matches the filter.
     * @param {ApiUsageLogFindUniqueArgs} args - Arguments to find a ApiUsageLog
     * @example
     * // Get one ApiUsageLog
     * const apiUsageLog = await prisma.apiUsageLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiUsageLogFindUniqueArgs>(args: SelectSubset<T, ApiUsageLogFindUniqueArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiUsageLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiUsageLogFindUniqueOrThrowArgs} args - Arguments to find a ApiUsageLog
     * @example
     * // Get one ApiUsageLog
     * const apiUsageLog = await prisma.apiUsageLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiUsageLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiUsageLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiUsageLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageLogFindFirstArgs} args - Arguments to find a ApiUsageLog
     * @example
     * // Get one ApiUsageLog
     * const apiUsageLog = await prisma.apiUsageLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiUsageLogFindFirstArgs>(args?: SelectSubset<T, ApiUsageLogFindFirstArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiUsageLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageLogFindFirstOrThrowArgs} args - Arguments to find a ApiUsageLog
     * @example
     * // Get one ApiUsageLog
     * const apiUsageLog = await prisma.apiUsageLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiUsageLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiUsageLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiUsageLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiUsageLogs
     * const apiUsageLogs = await prisma.apiUsageLog.findMany()
     * 
     * // Get first 10 ApiUsageLogs
     * const apiUsageLogs = await prisma.apiUsageLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiUsageLogWithIdOnly = await prisma.apiUsageLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiUsageLogFindManyArgs>(args?: SelectSubset<T, ApiUsageLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiUsageLog.
     * @param {ApiUsageLogCreateArgs} args - Arguments to create a ApiUsageLog.
     * @example
     * // Create one ApiUsageLog
     * const ApiUsageLog = await prisma.apiUsageLog.create({
     *   data: {
     *     // ... data to create a ApiUsageLog
     *   }
     * })
     * 
     */
    create<T extends ApiUsageLogCreateArgs>(args: SelectSubset<T, ApiUsageLogCreateArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiUsageLogs.
     * @param {ApiUsageLogCreateManyArgs} args - Arguments to create many ApiUsageLogs.
     * @example
     * // Create many ApiUsageLogs
     * const apiUsageLog = await prisma.apiUsageLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiUsageLogCreateManyArgs>(args?: SelectSubset<T, ApiUsageLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiUsageLogs and returns the data saved in the database.
     * @param {ApiUsageLogCreateManyAndReturnArgs} args - Arguments to create many ApiUsageLogs.
     * @example
     * // Create many ApiUsageLogs
     * const apiUsageLog = await prisma.apiUsageLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiUsageLogs and only return the `id`
     * const apiUsageLogWithIdOnly = await prisma.apiUsageLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiUsageLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiUsageLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiUsageLog.
     * @param {ApiUsageLogDeleteArgs} args - Arguments to delete one ApiUsageLog.
     * @example
     * // Delete one ApiUsageLog
     * const ApiUsageLog = await prisma.apiUsageLog.delete({
     *   where: {
     *     // ... filter to delete one ApiUsageLog
     *   }
     * })
     * 
     */
    delete<T extends ApiUsageLogDeleteArgs>(args: SelectSubset<T, ApiUsageLogDeleteArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiUsageLog.
     * @param {ApiUsageLogUpdateArgs} args - Arguments to update one ApiUsageLog.
     * @example
     * // Update one ApiUsageLog
     * const apiUsageLog = await prisma.apiUsageLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiUsageLogUpdateArgs>(args: SelectSubset<T, ApiUsageLogUpdateArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiUsageLogs.
     * @param {ApiUsageLogDeleteManyArgs} args - Arguments to filter ApiUsageLogs to delete.
     * @example
     * // Delete a few ApiUsageLogs
     * const { count } = await prisma.apiUsageLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiUsageLogDeleteManyArgs>(args?: SelectSubset<T, ApiUsageLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiUsageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiUsageLogs
     * const apiUsageLog = await prisma.apiUsageLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiUsageLogUpdateManyArgs>(args: SelectSubset<T, ApiUsageLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiUsageLogs and returns the data updated in the database.
     * @param {ApiUsageLogUpdateManyAndReturnArgs} args - Arguments to update many ApiUsageLogs.
     * @example
     * // Update many ApiUsageLogs
     * const apiUsageLog = await prisma.apiUsageLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiUsageLogs and only return the `id`
     * const apiUsageLogWithIdOnly = await prisma.apiUsageLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApiUsageLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiUsageLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiUsageLog.
     * @param {ApiUsageLogUpsertArgs} args - Arguments to update or create a ApiUsageLog.
     * @example
     * // Update or create a ApiUsageLog
     * const apiUsageLog = await prisma.apiUsageLog.upsert({
     *   create: {
     *     // ... data to create a ApiUsageLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiUsageLog we want to update
     *   }
     * })
     */
    upsert<T extends ApiUsageLogUpsertArgs>(args: SelectSubset<T, ApiUsageLogUpsertArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiUsageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageLogCountArgs} args - Arguments to filter ApiUsageLogs to count.
     * @example
     * // Count the number of ApiUsageLogs
     * const count = await prisma.apiUsageLog.count({
     *   where: {
     *     // ... the filter for the ApiUsageLogs we want to count
     *   }
     * })
    **/
    count<T extends ApiUsageLogCountArgs>(
      args?: Subset<T, ApiUsageLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiUsageLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiUsageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiUsageLogAggregateArgs>(args: Subset<T, ApiUsageLogAggregateArgs>): Prisma.PrismaPromise<GetApiUsageLogAggregateType<T>>

    /**
     * Group by ApiUsageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageLogGroupByArgs} args - Group by arguments.
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
      T extends ApiUsageLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiUsageLogGroupByArgs['orderBy'] }
        : { orderBy?: ApiUsageLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiUsageLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiUsageLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiUsageLog model
   */
  readonly fields: ApiUsageLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiUsageLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiUsageLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apiKey<T extends ApiKeyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiKeyDefaultArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ApiUsageLog model
   */
  interface ApiUsageLogFieldRefs {
    readonly id: FieldRef<"ApiUsageLog", 'String'>
    readonly timestamp: FieldRef<"ApiUsageLog", 'DateTime'>
    readonly endpoint: FieldRef<"ApiUsageLog", 'String'>
    readonly params: FieldRef<"ApiUsageLog", 'Json'>
    readonly statusCode: FieldRef<"ApiUsageLog", 'Int'>
    readonly ipAddress: FieldRef<"ApiUsageLog", 'String'>
    readonly userAgent: FieldRef<"ApiUsageLog", 'String'>
    readonly apiKeyId: FieldRef<"ApiUsageLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ApiUsageLog findUnique
   */
  export type ApiUsageLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsageLog to fetch.
     */
    where: ApiUsageLogWhereUniqueInput
  }

  /**
   * ApiUsageLog findUniqueOrThrow
   */
  export type ApiUsageLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsageLog to fetch.
     */
    where: ApiUsageLogWhereUniqueInput
  }

  /**
   * ApiUsageLog findFirst
   */
  export type ApiUsageLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsageLog to fetch.
     */
    where?: ApiUsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiUsageLogs to fetch.
     */
    orderBy?: ApiUsageLogOrderByWithRelationInput | ApiUsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiUsageLogs.
     */
    cursor?: ApiUsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiUsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiUsageLogs.
     */
    distinct?: ApiUsageLogScalarFieldEnum | ApiUsageLogScalarFieldEnum[]
  }

  /**
   * ApiUsageLog findFirstOrThrow
   */
  export type ApiUsageLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsageLog to fetch.
     */
    where?: ApiUsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiUsageLogs to fetch.
     */
    orderBy?: ApiUsageLogOrderByWithRelationInput | ApiUsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiUsageLogs.
     */
    cursor?: ApiUsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiUsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiUsageLogs.
     */
    distinct?: ApiUsageLogScalarFieldEnum | ApiUsageLogScalarFieldEnum[]
  }

  /**
   * ApiUsageLog findMany
   */
  export type ApiUsageLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsageLogs to fetch.
     */
    where?: ApiUsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiUsageLogs to fetch.
     */
    orderBy?: ApiUsageLogOrderByWithRelationInput | ApiUsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiUsageLogs.
     */
    cursor?: ApiUsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiUsageLogs.
     */
    skip?: number
    distinct?: ApiUsageLogScalarFieldEnum | ApiUsageLogScalarFieldEnum[]
  }

  /**
   * ApiUsageLog create
   */
  export type ApiUsageLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiUsageLog.
     */
    data: XOR<ApiUsageLogCreateInput, ApiUsageLogUncheckedCreateInput>
  }

  /**
   * ApiUsageLog createMany
   */
  export type ApiUsageLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiUsageLogs.
     */
    data: ApiUsageLogCreateManyInput | ApiUsageLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiUsageLog createManyAndReturn
   */
  export type ApiUsageLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * The data used to create many ApiUsageLogs.
     */
    data: ApiUsageLogCreateManyInput | ApiUsageLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiUsageLog update
   */
  export type ApiUsageLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiUsageLog.
     */
    data: XOR<ApiUsageLogUpdateInput, ApiUsageLogUncheckedUpdateInput>
    /**
     * Choose, which ApiUsageLog to update.
     */
    where: ApiUsageLogWhereUniqueInput
  }

  /**
   * ApiUsageLog updateMany
   */
  export type ApiUsageLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiUsageLogs.
     */
    data: XOR<ApiUsageLogUpdateManyMutationInput, ApiUsageLogUncheckedUpdateManyInput>
    /**
     * Filter which ApiUsageLogs to update
     */
    where?: ApiUsageLogWhereInput
    /**
     * Limit how many ApiUsageLogs to update.
     */
    limit?: number
  }

  /**
   * ApiUsageLog updateManyAndReturn
   */
  export type ApiUsageLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * The data used to update ApiUsageLogs.
     */
    data: XOR<ApiUsageLogUpdateManyMutationInput, ApiUsageLogUncheckedUpdateManyInput>
    /**
     * Filter which ApiUsageLogs to update
     */
    where?: ApiUsageLogWhereInput
    /**
     * Limit how many ApiUsageLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiUsageLog upsert
   */
  export type ApiUsageLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiUsageLog to update in case it exists.
     */
    where: ApiUsageLogWhereUniqueInput
    /**
     * In case the ApiUsageLog found by the `where` argument doesn't exist, create a new ApiUsageLog with this data.
     */
    create: XOR<ApiUsageLogCreateInput, ApiUsageLogUncheckedCreateInput>
    /**
     * In case the ApiUsageLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiUsageLogUpdateInput, ApiUsageLogUncheckedUpdateInput>
  }

  /**
   * ApiUsageLog delete
   */
  export type ApiUsageLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * Filter which ApiUsageLog to delete.
     */
    where: ApiUsageLogWhereUniqueInput
  }

  /**
   * ApiUsageLog deleteMany
   */
  export type ApiUsageLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiUsageLogs to delete
     */
    where?: ApiUsageLogWhereInput
    /**
     * Limit how many ApiUsageLogs to delete.
     */
    limit?: number
  }

  /**
   * ApiUsageLog without action
   */
  export type ApiUsageLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
  }


  /**
   * Model TimetableCache
   */

  export type AggregateTimetableCache = {
    _count: TimetableCacheCountAggregateOutputType | null
    _min: TimetableCacheMinAggregateOutputType | null
    _max: TimetableCacheMaxAggregateOutputType | null
  }

  export type TimetableCacheMinAggregateOutputType = {
    id: string | null
    username: string | null
    school: string | null
    date: Date | null
    expiresAt: Date | null
  }

  export type TimetableCacheMaxAggregateOutputType = {
    id: string | null
    username: string | null
    school: string | null
    date: Date | null
    expiresAt: Date | null
  }

  export type TimetableCacheCountAggregateOutputType = {
    id: number
    username: number
    school: number
    date: number
    data: number
    expiresAt: number
    _all: number
  }


  export type TimetableCacheMinAggregateInputType = {
    id?: true
    username?: true
    school?: true
    date?: true
    expiresAt?: true
  }

  export type TimetableCacheMaxAggregateInputType = {
    id?: true
    username?: true
    school?: true
    date?: true
    expiresAt?: true
  }

  export type TimetableCacheCountAggregateInputType = {
    id?: true
    username?: true
    school?: true
    date?: true
    data?: true
    expiresAt?: true
    _all?: true
  }

  export type TimetableCacheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimetableCache to aggregate.
     */
    where?: TimetableCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimetableCaches to fetch.
     */
    orderBy?: TimetableCacheOrderByWithRelationInput | TimetableCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimetableCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimetableCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimetableCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimetableCaches
    **/
    _count?: true | TimetableCacheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimetableCacheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimetableCacheMaxAggregateInputType
  }

  export type GetTimetableCacheAggregateType<T extends TimetableCacheAggregateArgs> = {
        [P in keyof T & keyof AggregateTimetableCache]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimetableCache[P]>
      : GetScalarType<T[P], AggregateTimetableCache[P]>
  }




  export type TimetableCacheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimetableCacheWhereInput
    orderBy?: TimetableCacheOrderByWithAggregationInput | TimetableCacheOrderByWithAggregationInput[]
    by: TimetableCacheScalarFieldEnum[] | TimetableCacheScalarFieldEnum
    having?: TimetableCacheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimetableCacheCountAggregateInputType | true
    _min?: TimetableCacheMinAggregateInputType
    _max?: TimetableCacheMaxAggregateInputType
  }

  export type TimetableCacheGroupByOutputType = {
    id: string
    username: string
    school: string
    date: Date
    data: JsonValue
    expiresAt: Date
    _count: TimetableCacheCountAggregateOutputType | null
    _min: TimetableCacheMinAggregateOutputType | null
    _max: TimetableCacheMaxAggregateOutputType | null
  }

  type GetTimetableCacheGroupByPayload<T extends TimetableCacheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimetableCacheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimetableCacheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimetableCacheGroupByOutputType[P]>
            : GetScalarType<T[P], TimetableCacheGroupByOutputType[P]>
        }
      >
    >


  export type TimetableCacheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    school?: boolean
    date?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["timetableCache"]>

  export type TimetableCacheSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    school?: boolean
    date?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["timetableCache"]>

  export type TimetableCacheSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    school?: boolean
    date?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["timetableCache"]>

  export type TimetableCacheSelectScalar = {
    id?: boolean
    username?: boolean
    school?: boolean
    date?: boolean
    data?: boolean
    expiresAt?: boolean
  }

  export type TimetableCacheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "school" | "date" | "data" | "expiresAt", ExtArgs["result"]["timetableCache"]>

  export type $TimetableCachePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimetableCache"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      school: string
      date: Date
      data: Prisma.JsonValue
      expiresAt: Date
    }, ExtArgs["result"]["timetableCache"]>
    composites: {}
  }

  type TimetableCacheGetPayload<S extends boolean | null | undefined | TimetableCacheDefaultArgs> = $Result.GetResult<Prisma.$TimetableCachePayload, S>

  type TimetableCacheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimetableCacheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimetableCacheCountAggregateInputType | true
    }

  export interface TimetableCacheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimetableCache'], meta: { name: 'TimetableCache' } }
    /**
     * Find zero or one TimetableCache that matches the filter.
     * @param {TimetableCacheFindUniqueArgs} args - Arguments to find a TimetableCache
     * @example
     * // Get one TimetableCache
     * const timetableCache = await prisma.timetableCache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimetableCacheFindUniqueArgs>(args: SelectSubset<T, TimetableCacheFindUniqueArgs<ExtArgs>>): Prisma__TimetableCacheClient<$Result.GetResult<Prisma.$TimetableCachePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimetableCache that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimetableCacheFindUniqueOrThrowArgs} args - Arguments to find a TimetableCache
     * @example
     * // Get one TimetableCache
     * const timetableCache = await prisma.timetableCache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimetableCacheFindUniqueOrThrowArgs>(args: SelectSubset<T, TimetableCacheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimetableCacheClient<$Result.GetResult<Prisma.$TimetableCachePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimetableCache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableCacheFindFirstArgs} args - Arguments to find a TimetableCache
     * @example
     * // Get one TimetableCache
     * const timetableCache = await prisma.timetableCache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimetableCacheFindFirstArgs>(args?: SelectSubset<T, TimetableCacheFindFirstArgs<ExtArgs>>): Prisma__TimetableCacheClient<$Result.GetResult<Prisma.$TimetableCachePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimetableCache that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableCacheFindFirstOrThrowArgs} args - Arguments to find a TimetableCache
     * @example
     * // Get one TimetableCache
     * const timetableCache = await prisma.timetableCache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimetableCacheFindFirstOrThrowArgs>(args?: SelectSubset<T, TimetableCacheFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimetableCacheClient<$Result.GetResult<Prisma.$TimetableCachePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimetableCaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableCacheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimetableCaches
     * const timetableCaches = await prisma.timetableCache.findMany()
     * 
     * // Get first 10 TimetableCaches
     * const timetableCaches = await prisma.timetableCache.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timetableCacheWithIdOnly = await prisma.timetableCache.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimetableCacheFindManyArgs>(args?: SelectSubset<T, TimetableCacheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimetableCachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimetableCache.
     * @param {TimetableCacheCreateArgs} args - Arguments to create a TimetableCache.
     * @example
     * // Create one TimetableCache
     * const TimetableCache = await prisma.timetableCache.create({
     *   data: {
     *     // ... data to create a TimetableCache
     *   }
     * })
     * 
     */
    create<T extends TimetableCacheCreateArgs>(args: SelectSubset<T, TimetableCacheCreateArgs<ExtArgs>>): Prisma__TimetableCacheClient<$Result.GetResult<Prisma.$TimetableCachePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimetableCaches.
     * @param {TimetableCacheCreateManyArgs} args - Arguments to create many TimetableCaches.
     * @example
     * // Create many TimetableCaches
     * const timetableCache = await prisma.timetableCache.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimetableCacheCreateManyArgs>(args?: SelectSubset<T, TimetableCacheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimetableCaches and returns the data saved in the database.
     * @param {TimetableCacheCreateManyAndReturnArgs} args - Arguments to create many TimetableCaches.
     * @example
     * // Create many TimetableCaches
     * const timetableCache = await prisma.timetableCache.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimetableCaches and only return the `id`
     * const timetableCacheWithIdOnly = await prisma.timetableCache.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimetableCacheCreateManyAndReturnArgs>(args?: SelectSubset<T, TimetableCacheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimetableCachePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TimetableCache.
     * @param {TimetableCacheDeleteArgs} args - Arguments to delete one TimetableCache.
     * @example
     * // Delete one TimetableCache
     * const TimetableCache = await prisma.timetableCache.delete({
     *   where: {
     *     // ... filter to delete one TimetableCache
     *   }
     * })
     * 
     */
    delete<T extends TimetableCacheDeleteArgs>(args: SelectSubset<T, TimetableCacheDeleteArgs<ExtArgs>>): Prisma__TimetableCacheClient<$Result.GetResult<Prisma.$TimetableCachePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimetableCache.
     * @param {TimetableCacheUpdateArgs} args - Arguments to update one TimetableCache.
     * @example
     * // Update one TimetableCache
     * const timetableCache = await prisma.timetableCache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimetableCacheUpdateArgs>(args: SelectSubset<T, TimetableCacheUpdateArgs<ExtArgs>>): Prisma__TimetableCacheClient<$Result.GetResult<Prisma.$TimetableCachePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimetableCaches.
     * @param {TimetableCacheDeleteManyArgs} args - Arguments to filter TimetableCaches to delete.
     * @example
     * // Delete a few TimetableCaches
     * const { count } = await prisma.timetableCache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimetableCacheDeleteManyArgs>(args?: SelectSubset<T, TimetableCacheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimetableCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableCacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimetableCaches
     * const timetableCache = await prisma.timetableCache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimetableCacheUpdateManyArgs>(args: SelectSubset<T, TimetableCacheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimetableCaches and returns the data updated in the database.
     * @param {TimetableCacheUpdateManyAndReturnArgs} args - Arguments to update many TimetableCaches.
     * @example
     * // Update many TimetableCaches
     * const timetableCache = await prisma.timetableCache.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimetableCaches and only return the `id`
     * const timetableCacheWithIdOnly = await prisma.timetableCache.updateManyAndReturn({
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
    updateManyAndReturn<T extends TimetableCacheUpdateManyAndReturnArgs>(args: SelectSubset<T, TimetableCacheUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimetableCachePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TimetableCache.
     * @param {TimetableCacheUpsertArgs} args - Arguments to update or create a TimetableCache.
     * @example
     * // Update or create a TimetableCache
     * const timetableCache = await prisma.timetableCache.upsert({
     *   create: {
     *     // ... data to create a TimetableCache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimetableCache we want to update
     *   }
     * })
     */
    upsert<T extends TimetableCacheUpsertArgs>(args: SelectSubset<T, TimetableCacheUpsertArgs<ExtArgs>>): Prisma__TimetableCacheClient<$Result.GetResult<Prisma.$TimetableCachePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimetableCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableCacheCountArgs} args - Arguments to filter TimetableCaches to count.
     * @example
     * // Count the number of TimetableCaches
     * const count = await prisma.timetableCache.count({
     *   where: {
     *     // ... the filter for the TimetableCaches we want to count
     *   }
     * })
    **/
    count<T extends TimetableCacheCountArgs>(
      args?: Subset<T, TimetableCacheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimetableCacheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimetableCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableCacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimetableCacheAggregateArgs>(args: Subset<T, TimetableCacheAggregateArgs>): Prisma.PrismaPromise<GetTimetableCacheAggregateType<T>>

    /**
     * Group by TimetableCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableCacheGroupByArgs} args - Group by arguments.
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
      T extends TimetableCacheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimetableCacheGroupByArgs['orderBy'] }
        : { orderBy?: TimetableCacheGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimetableCacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimetableCacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimetableCache model
   */
  readonly fields: TimetableCacheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimetableCache.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimetableCacheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TimetableCache model
   */
  interface TimetableCacheFieldRefs {
    readonly id: FieldRef<"TimetableCache", 'String'>
    readonly username: FieldRef<"TimetableCache", 'String'>
    readonly school: FieldRef<"TimetableCache", 'String'>
    readonly date: FieldRef<"TimetableCache", 'DateTime'>
    readonly data: FieldRef<"TimetableCache", 'Json'>
    readonly expiresAt: FieldRef<"TimetableCache", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TimetableCache findUnique
   */
  export type TimetableCacheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimetableCache
     */
    select?: TimetableCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimetableCache
     */
    omit?: TimetableCacheOmit<ExtArgs> | null
    /**
     * Filter, which TimetableCache to fetch.
     */
    where: TimetableCacheWhereUniqueInput
  }

  /**
   * TimetableCache findUniqueOrThrow
   */
  export type TimetableCacheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimetableCache
     */
    select?: TimetableCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimetableCache
     */
    omit?: TimetableCacheOmit<ExtArgs> | null
    /**
     * Filter, which TimetableCache to fetch.
     */
    where: TimetableCacheWhereUniqueInput
  }

  /**
   * TimetableCache findFirst
   */
  export type TimetableCacheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimetableCache
     */
    select?: TimetableCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimetableCache
     */
    omit?: TimetableCacheOmit<ExtArgs> | null
    /**
     * Filter, which TimetableCache to fetch.
     */
    where?: TimetableCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimetableCaches to fetch.
     */
    orderBy?: TimetableCacheOrderByWithRelationInput | TimetableCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimetableCaches.
     */
    cursor?: TimetableCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimetableCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimetableCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimetableCaches.
     */
    distinct?: TimetableCacheScalarFieldEnum | TimetableCacheScalarFieldEnum[]
  }

  /**
   * TimetableCache findFirstOrThrow
   */
  export type TimetableCacheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimetableCache
     */
    select?: TimetableCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimetableCache
     */
    omit?: TimetableCacheOmit<ExtArgs> | null
    /**
     * Filter, which TimetableCache to fetch.
     */
    where?: TimetableCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimetableCaches to fetch.
     */
    orderBy?: TimetableCacheOrderByWithRelationInput | TimetableCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimetableCaches.
     */
    cursor?: TimetableCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimetableCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimetableCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimetableCaches.
     */
    distinct?: TimetableCacheScalarFieldEnum | TimetableCacheScalarFieldEnum[]
  }

  /**
   * TimetableCache findMany
   */
  export type TimetableCacheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimetableCache
     */
    select?: TimetableCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimetableCache
     */
    omit?: TimetableCacheOmit<ExtArgs> | null
    /**
     * Filter, which TimetableCaches to fetch.
     */
    where?: TimetableCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimetableCaches to fetch.
     */
    orderBy?: TimetableCacheOrderByWithRelationInput | TimetableCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimetableCaches.
     */
    cursor?: TimetableCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimetableCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimetableCaches.
     */
    skip?: number
    distinct?: TimetableCacheScalarFieldEnum | TimetableCacheScalarFieldEnum[]
  }

  /**
   * TimetableCache create
   */
  export type TimetableCacheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimetableCache
     */
    select?: TimetableCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimetableCache
     */
    omit?: TimetableCacheOmit<ExtArgs> | null
    /**
     * The data needed to create a TimetableCache.
     */
    data: XOR<TimetableCacheCreateInput, TimetableCacheUncheckedCreateInput>
  }

  /**
   * TimetableCache createMany
   */
  export type TimetableCacheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimetableCaches.
     */
    data: TimetableCacheCreateManyInput | TimetableCacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimetableCache createManyAndReturn
   */
  export type TimetableCacheCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimetableCache
     */
    select?: TimetableCacheSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimetableCache
     */
    omit?: TimetableCacheOmit<ExtArgs> | null
    /**
     * The data used to create many TimetableCaches.
     */
    data: TimetableCacheCreateManyInput | TimetableCacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimetableCache update
   */
  export type TimetableCacheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimetableCache
     */
    select?: TimetableCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimetableCache
     */
    omit?: TimetableCacheOmit<ExtArgs> | null
    /**
     * The data needed to update a TimetableCache.
     */
    data: XOR<TimetableCacheUpdateInput, TimetableCacheUncheckedUpdateInput>
    /**
     * Choose, which TimetableCache to update.
     */
    where: TimetableCacheWhereUniqueInput
  }

  /**
   * TimetableCache updateMany
   */
  export type TimetableCacheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimetableCaches.
     */
    data: XOR<TimetableCacheUpdateManyMutationInput, TimetableCacheUncheckedUpdateManyInput>
    /**
     * Filter which TimetableCaches to update
     */
    where?: TimetableCacheWhereInput
    /**
     * Limit how many TimetableCaches to update.
     */
    limit?: number
  }

  /**
   * TimetableCache updateManyAndReturn
   */
  export type TimetableCacheUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimetableCache
     */
    select?: TimetableCacheSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimetableCache
     */
    omit?: TimetableCacheOmit<ExtArgs> | null
    /**
     * The data used to update TimetableCaches.
     */
    data: XOR<TimetableCacheUpdateManyMutationInput, TimetableCacheUncheckedUpdateManyInput>
    /**
     * Filter which TimetableCaches to update
     */
    where?: TimetableCacheWhereInput
    /**
     * Limit how many TimetableCaches to update.
     */
    limit?: number
  }

  /**
   * TimetableCache upsert
   */
  export type TimetableCacheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimetableCache
     */
    select?: TimetableCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimetableCache
     */
    omit?: TimetableCacheOmit<ExtArgs> | null
    /**
     * The filter to search for the TimetableCache to update in case it exists.
     */
    where: TimetableCacheWhereUniqueInput
    /**
     * In case the TimetableCache found by the `where` argument doesn't exist, create a new TimetableCache with this data.
     */
    create: XOR<TimetableCacheCreateInput, TimetableCacheUncheckedCreateInput>
    /**
     * In case the TimetableCache was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimetableCacheUpdateInput, TimetableCacheUncheckedUpdateInput>
  }

  /**
   * TimetableCache delete
   */
  export type TimetableCacheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimetableCache
     */
    select?: TimetableCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimetableCache
     */
    omit?: TimetableCacheOmit<ExtArgs> | null
    /**
     * Filter which TimetableCache to delete.
     */
    where: TimetableCacheWhereUniqueInput
  }

  /**
   * TimetableCache deleteMany
   */
  export type TimetableCacheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimetableCaches to delete
     */
    where?: TimetableCacheWhereInput
    /**
     * Limit how many TimetableCaches to delete.
     */
    limit?: number
  }

  /**
   * TimetableCache without action
   */
  export type TimetableCacheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimetableCache
     */
    select?: TimetableCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimetableCache
     */
    omit?: TimetableCacheOmit<ExtArgs> | null
  }


  /**
   * Model CalendarAccount
   */

  export type AggregateCalendarAccount = {
    _count: CalendarAccountCountAggregateOutputType | null
    _avg: CalendarAccountAvgAggregateOutputType | null
    _sum: CalendarAccountSumAggregateOutputType | null
    _min: CalendarAccountMinAggregateOutputType | null
    _max: CalendarAccountMaxAggregateOutputType | null
  }

  export type CalendarAccountAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CalendarAccountSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CalendarAccountMinAggregateOutputType = {
    id: number | null
    userId: number | null
    provider: $Enums.CalendarProvider | null
    providerAccountId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    scope: string | null
    calendarId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CalendarAccountMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    provider: $Enums.CalendarProvider | null
    providerAccountId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    scope: string | null
    calendarId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CalendarAccountCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    providerAccountId: number
    accessToken: number
    refreshToken: number
    expiresAt: number
    scope: number
    calendarId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CalendarAccountAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CalendarAccountSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CalendarAccountMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    scope?: true
    calendarId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CalendarAccountMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    scope?: true
    calendarId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CalendarAccountCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    scope?: true
    calendarId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CalendarAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalendarAccount to aggregate.
     */
    where?: CalendarAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarAccounts to fetch.
     */
    orderBy?: CalendarAccountOrderByWithRelationInput | CalendarAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalendarAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CalendarAccounts
    **/
    _count?: true | CalendarAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CalendarAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CalendarAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalendarAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalendarAccountMaxAggregateInputType
  }

  export type GetCalendarAccountAggregateType<T extends CalendarAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateCalendarAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalendarAccount[P]>
      : GetScalarType<T[P], AggregateCalendarAccount[P]>
  }




  export type CalendarAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarAccountWhereInput
    orderBy?: CalendarAccountOrderByWithAggregationInput | CalendarAccountOrderByWithAggregationInput[]
    by: CalendarAccountScalarFieldEnum[] | CalendarAccountScalarFieldEnum
    having?: CalendarAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalendarAccountCountAggregateInputType | true
    _avg?: CalendarAccountAvgAggregateInputType
    _sum?: CalendarAccountSumAggregateInputType
    _min?: CalendarAccountMinAggregateInputType
    _max?: CalendarAccountMaxAggregateInputType
  }

  export type CalendarAccountGroupByOutputType = {
    id: number
    userId: number
    provider: $Enums.CalendarProvider
    providerAccountId: string
    accessToken: string
    refreshToken: string | null
    expiresAt: Date | null
    scope: string | null
    calendarId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CalendarAccountCountAggregateOutputType | null
    _avg: CalendarAccountAvgAggregateOutputType | null
    _sum: CalendarAccountSumAggregateOutputType | null
    _min: CalendarAccountMinAggregateOutputType | null
    _max: CalendarAccountMaxAggregateOutputType | null
  }

  type GetCalendarAccountGroupByPayload<T extends CalendarAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalendarAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalendarAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalendarAccountGroupByOutputType[P]>
            : GetScalarType<T[P], CalendarAccountGroupByOutputType[P]>
        }
      >
    >


  export type CalendarAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    scope?: boolean
    calendarId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendarAccount"]>

  export type CalendarAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    scope?: boolean
    calendarId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendarAccount"]>

  export type CalendarAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    scope?: boolean
    calendarId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendarAccount"]>

  export type CalendarAccountSelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    scope?: boolean
    calendarId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CalendarAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "provider" | "providerAccountId" | "accessToken" | "refreshToken" | "expiresAt" | "scope" | "calendarId" | "createdAt" | "updatedAt", ExtArgs["result"]["calendarAccount"]>
  export type CalendarAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CalendarAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CalendarAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CalendarAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CalendarAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      provider: $Enums.CalendarProvider
      providerAccountId: string
      accessToken: string
      refreshToken: string | null
      expiresAt: Date | null
      scope: string | null
      calendarId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["calendarAccount"]>
    composites: {}
  }

  type CalendarAccountGetPayload<S extends boolean | null | undefined | CalendarAccountDefaultArgs> = $Result.GetResult<Prisma.$CalendarAccountPayload, S>

  type CalendarAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CalendarAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalendarAccountCountAggregateInputType | true
    }

  export interface CalendarAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CalendarAccount'], meta: { name: 'CalendarAccount' } }
    /**
     * Find zero or one CalendarAccount that matches the filter.
     * @param {CalendarAccountFindUniqueArgs} args - Arguments to find a CalendarAccount
     * @example
     * // Get one CalendarAccount
     * const calendarAccount = await prisma.calendarAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalendarAccountFindUniqueArgs>(args: SelectSubset<T, CalendarAccountFindUniqueArgs<ExtArgs>>): Prisma__CalendarAccountClient<$Result.GetResult<Prisma.$CalendarAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CalendarAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CalendarAccountFindUniqueOrThrowArgs} args - Arguments to find a CalendarAccount
     * @example
     * // Get one CalendarAccount
     * const calendarAccount = await prisma.calendarAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalendarAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, CalendarAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalendarAccountClient<$Result.GetResult<Prisma.$CalendarAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CalendarAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarAccountFindFirstArgs} args - Arguments to find a CalendarAccount
     * @example
     * // Get one CalendarAccount
     * const calendarAccount = await prisma.calendarAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalendarAccountFindFirstArgs>(args?: SelectSubset<T, CalendarAccountFindFirstArgs<ExtArgs>>): Prisma__CalendarAccountClient<$Result.GetResult<Prisma.$CalendarAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CalendarAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarAccountFindFirstOrThrowArgs} args - Arguments to find a CalendarAccount
     * @example
     * // Get one CalendarAccount
     * const calendarAccount = await prisma.calendarAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalendarAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, CalendarAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalendarAccountClient<$Result.GetResult<Prisma.$CalendarAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CalendarAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CalendarAccounts
     * const calendarAccounts = await prisma.calendarAccount.findMany()
     * 
     * // Get first 10 CalendarAccounts
     * const calendarAccounts = await prisma.calendarAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calendarAccountWithIdOnly = await prisma.calendarAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CalendarAccountFindManyArgs>(args?: SelectSubset<T, CalendarAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CalendarAccount.
     * @param {CalendarAccountCreateArgs} args - Arguments to create a CalendarAccount.
     * @example
     * // Create one CalendarAccount
     * const CalendarAccount = await prisma.calendarAccount.create({
     *   data: {
     *     // ... data to create a CalendarAccount
     *   }
     * })
     * 
     */
    create<T extends CalendarAccountCreateArgs>(args: SelectSubset<T, CalendarAccountCreateArgs<ExtArgs>>): Prisma__CalendarAccountClient<$Result.GetResult<Prisma.$CalendarAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CalendarAccounts.
     * @param {CalendarAccountCreateManyArgs} args - Arguments to create many CalendarAccounts.
     * @example
     * // Create many CalendarAccounts
     * const calendarAccount = await prisma.calendarAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalendarAccountCreateManyArgs>(args?: SelectSubset<T, CalendarAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CalendarAccounts and returns the data saved in the database.
     * @param {CalendarAccountCreateManyAndReturnArgs} args - Arguments to create many CalendarAccounts.
     * @example
     * // Create many CalendarAccounts
     * const calendarAccount = await prisma.calendarAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CalendarAccounts and only return the `id`
     * const calendarAccountWithIdOnly = await prisma.calendarAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CalendarAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, CalendarAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CalendarAccount.
     * @param {CalendarAccountDeleteArgs} args - Arguments to delete one CalendarAccount.
     * @example
     * // Delete one CalendarAccount
     * const CalendarAccount = await prisma.calendarAccount.delete({
     *   where: {
     *     // ... filter to delete one CalendarAccount
     *   }
     * })
     * 
     */
    delete<T extends CalendarAccountDeleteArgs>(args: SelectSubset<T, CalendarAccountDeleteArgs<ExtArgs>>): Prisma__CalendarAccountClient<$Result.GetResult<Prisma.$CalendarAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CalendarAccount.
     * @param {CalendarAccountUpdateArgs} args - Arguments to update one CalendarAccount.
     * @example
     * // Update one CalendarAccount
     * const calendarAccount = await prisma.calendarAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalendarAccountUpdateArgs>(args: SelectSubset<T, CalendarAccountUpdateArgs<ExtArgs>>): Prisma__CalendarAccountClient<$Result.GetResult<Prisma.$CalendarAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CalendarAccounts.
     * @param {CalendarAccountDeleteManyArgs} args - Arguments to filter CalendarAccounts to delete.
     * @example
     * // Delete a few CalendarAccounts
     * const { count } = await prisma.calendarAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalendarAccountDeleteManyArgs>(args?: SelectSubset<T, CalendarAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalendarAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CalendarAccounts
     * const calendarAccount = await prisma.calendarAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalendarAccountUpdateManyArgs>(args: SelectSubset<T, CalendarAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalendarAccounts and returns the data updated in the database.
     * @param {CalendarAccountUpdateManyAndReturnArgs} args - Arguments to update many CalendarAccounts.
     * @example
     * // Update many CalendarAccounts
     * const calendarAccount = await prisma.calendarAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CalendarAccounts and only return the `id`
     * const calendarAccountWithIdOnly = await prisma.calendarAccount.updateManyAndReturn({
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
    updateManyAndReturn<T extends CalendarAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, CalendarAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CalendarAccount.
     * @param {CalendarAccountUpsertArgs} args - Arguments to update or create a CalendarAccount.
     * @example
     * // Update or create a CalendarAccount
     * const calendarAccount = await prisma.calendarAccount.upsert({
     *   create: {
     *     // ... data to create a CalendarAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CalendarAccount we want to update
     *   }
     * })
     */
    upsert<T extends CalendarAccountUpsertArgs>(args: SelectSubset<T, CalendarAccountUpsertArgs<ExtArgs>>): Prisma__CalendarAccountClient<$Result.GetResult<Prisma.$CalendarAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CalendarAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarAccountCountArgs} args - Arguments to filter CalendarAccounts to count.
     * @example
     * // Count the number of CalendarAccounts
     * const count = await prisma.calendarAccount.count({
     *   where: {
     *     // ... the filter for the CalendarAccounts we want to count
     *   }
     * })
    **/
    count<T extends CalendarAccountCountArgs>(
      args?: Subset<T, CalendarAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalendarAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CalendarAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CalendarAccountAggregateArgs>(args: Subset<T, CalendarAccountAggregateArgs>): Prisma.PrismaPromise<GetCalendarAccountAggregateType<T>>

    /**
     * Group by CalendarAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarAccountGroupByArgs} args - Group by arguments.
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
      T extends CalendarAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalendarAccountGroupByArgs['orderBy'] }
        : { orderBy?: CalendarAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CalendarAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CalendarAccount model
   */
  readonly fields: CalendarAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CalendarAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalendarAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CalendarAccount model
   */
  interface CalendarAccountFieldRefs {
    readonly id: FieldRef<"CalendarAccount", 'Int'>
    readonly userId: FieldRef<"CalendarAccount", 'Int'>
    readonly provider: FieldRef<"CalendarAccount", 'CalendarProvider'>
    readonly providerAccountId: FieldRef<"CalendarAccount", 'String'>
    readonly accessToken: FieldRef<"CalendarAccount", 'String'>
    readonly refreshToken: FieldRef<"CalendarAccount", 'String'>
    readonly expiresAt: FieldRef<"CalendarAccount", 'DateTime'>
    readonly scope: FieldRef<"CalendarAccount", 'String'>
    readonly calendarId: FieldRef<"CalendarAccount", 'String'>
    readonly createdAt: FieldRef<"CalendarAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"CalendarAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CalendarAccount findUnique
   */
  export type CalendarAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarAccount
     */
    select?: CalendarAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarAccount
     */
    omit?: CalendarAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarAccountInclude<ExtArgs> | null
    /**
     * Filter, which CalendarAccount to fetch.
     */
    where: CalendarAccountWhereUniqueInput
  }

  /**
   * CalendarAccount findUniqueOrThrow
   */
  export type CalendarAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarAccount
     */
    select?: CalendarAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarAccount
     */
    omit?: CalendarAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarAccountInclude<ExtArgs> | null
    /**
     * Filter, which CalendarAccount to fetch.
     */
    where: CalendarAccountWhereUniqueInput
  }

  /**
   * CalendarAccount findFirst
   */
  export type CalendarAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarAccount
     */
    select?: CalendarAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarAccount
     */
    omit?: CalendarAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarAccountInclude<ExtArgs> | null
    /**
     * Filter, which CalendarAccount to fetch.
     */
    where?: CalendarAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarAccounts to fetch.
     */
    orderBy?: CalendarAccountOrderByWithRelationInput | CalendarAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalendarAccounts.
     */
    cursor?: CalendarAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalendarAccounts.
     */
    distinct?: CalendarAccountScalarFieldEnum | CalendarAccountScalarFieldEnum[]
  }

  /**
   * CalendarAccount findFirstOrThrow
   */
  export type CalendarAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarAccount
     */
    select?: CalendarAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarAccount
     */
    omit?: CalendarAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarAccountInclude<ExtArgs> | null
    /**
     * Filter, which CalendarAccount to fetch.
     */
    where?: CalendarAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarAccounts to fetch.
     */
    orderBy?: CalendarAccountOrderByWithRelationInput | CalendarAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalendarAccounts.
     */
    cursor?: CalendarAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalendarAccounts.
     */
    distinct?: CalendarAccountScalarFieldEnum | CalendarAccountScalarFieldEnum[]
  }

  /**
   * CalendarAccount findMany
   */
  export type CalendarAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarAccount
     */
    select?: CalendarAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarAccount
     */
    omit?: CalendarAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarAccountInclude<ExtArgs> | null
    /**
     * Filter, which CalendarAccounts to fetch.
     */
    where?: CalendarAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarAccounts to fetch.
     */
    orderBy?: CalendarAccountOrderByWithRelationInput | CalendarAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CalendarAccounts.
     */
    cursor?: CalendarAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarAccounts.
     */
    skip?: number
    distinct?: CalendarAccountScalarFieldEnum | CalendarAccountScalarFieldEnum[]
  }

  /**
   * CalendarAccount create
   */
  export type CalendarAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarAccount
     */
    select?: CalendarAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarAccount
     */
    omit?: CalendarAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a CalendarAccount.
     */
    data: XOR<CalendarAccountCreateInput, CalendarAccountUncheckedCreateInput>
  }

  /**
   * CalendarAccount createMany
   */
  export type CalendarAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CalendarAccounts.
     */
    data: CalendarAccountCreateManyInput | CalendarAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CalendarAccount createManyAndReturn
   */
  export type CalendarAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarAccount
     */
    select?: CalendarAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarAccount
     */
    omit?: CalendarAccountOmit<ExtArgs> | null
    /**
     * The data used to create many CalendarAccounts.
     */
    data: CalendarAccountCreateManyInput | CalendarAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CalendarAccount update
   */
  export type CalendarAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarAccount
     */
    select?: CalendarAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarAccount
     */
    omit?: CalendarAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a CalendarAccount.
     */
    data: XOR<CalendarAccountUpdateInput, CalendarAccountUncheckedUpdateInput>
    /**
     * Choose, which CalendarAccount to update.
     */
    where: CalendarAccountWhereUniqueInput
  }

  /**
   * CalendarAccount updateMany
   */
  export type CalendarAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CalendarAccounts.
     */
    data: XOR<CalendarAccountUpdateManyMutationInput, CalendarAccountUncheckedUpdateManyInput>
    /**
     * Filter which CalendarAccounts to update
     */
    where?: CalendarAccountWhereInput
    /**
     * Limit how many CalendarAccounts to update.
     */
    limit?: number
  }

  /**
   * CalendarAccount updateManyAndReturn
   */
  export type CalendarAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarAccount
     */
    select?: CalendarAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarAccount
     */
    omit?: CalendarAccountOmit<ExtArgs> | null
    /**
     * The data used to update CalendarAccounts.
     */
    data: XOR<CalendarAccountUpdateManyMutationInput, CalendarAccountUncheckedUpdateManyInput>
    /**
     * Filter which CalendarAccounts to update
     */
    where?: CalendarAccountWhereInput
    /**
     * Limit how many CalendarAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CalendarAccount upsert
   */
  export type CalendarAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarAccount
     */
    select?: CalendarAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarAccount
     */
    omit?: CalendarAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the CalendarAccount to update in case it exists.
     */
    where: CalendarAccountWhereUniqueInput
    /**
     * In case the CalendarAccount found by the `where` argument doesn't exist, create a new CalendarAccount with this data.
     */
    create: XOR<CalendarAccountCreateInput, CalendarAccountUncheckedCreateInput>
    /**
     * In case the CalendarAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalendarAccountUpdateInput, CalendarAccountUncheckedUpdateInput>
  }

  /**
   * CalendarAccount delete
   */
  export type CalendarAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarAccount
     */
    select?: CalendarAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarAccount
     */
    omit?: CalendarAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarAccountInclude<ExtArgs> | null
    /**
     * Filter which CalendarAccount to delete.
     */
    where: CalendarAccountWhereUniqueInput
  }

  /**
   * CalendarAccount deleteMany
   */
  export type CalendarAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalendarAccounts to delete
     */
    where?: CalendarAccountWhereInput
    /**
     * Limit how many CalendarAccounts to delete.
     */
    limit?: number
  }

  /**
   * CalendarAccount without action
   */
  export type CalendarAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarAccount
     */
    select?: CalendarAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarAccount
     */
    omit?: CalendarAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarAccountInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    passwordHash: 'passwordHash',
    emailVerified: 'emailVerified',
    totpKey: 'totpKey',
    recoveryCode: 'recoveryCode'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    stripeCustomerId: 'stripeCustomerId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    status: 'status',
    priceId: 'priceId',
    currentPeriodEnd: 'currentPeriodEnd',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expiresAt: 'expiresAt',
    twoFactorVerified: 'twoFactorVerified'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const EmailVerificationRequestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    email: 'email',
    code: 'code',
    expiresAt: 'expiresAt'
  };

  export type EmailVerificationRequestScalarFieldEnum = (typeof EmailVerificationRequestScalarFieldEnum)[keyof typeof EmailVerificationRequestScalarFieldEnum]


  export const PasswordResetSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    email: 'email',
    code: 'code',
    expiresAt: 'expiresAt',
    emailVerified: 'emailVerified',
    twoFactorVerified: 'twoFactorVerified'
  };

  export type PasswordResetSessionScalarFieldEnum = (typeof PasswordResetSessionScalarFieldEnum)[keyof typeof PasswordResetSessionScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    key: 'key',
    unlimited: 'unlimited',
    minInterval: 'minInterval',
    ownerId: 'ownerId',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    lastRequest: 'lastRequest'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const ApiKeyPermissionScalarFieldEnum: {
    id: 'id',
    apiKeyId: 'apiKeyId',
    permission: 'permission'
  };

  export type ApiKeyPermissionScalarFieldEnum = (typeof ApiKeyPermissionScalarFieldEnum)[keyof typeof ApiKeyPermissionScalarFieldEnum]


  export const ApiCreditsPurchaseScalarFieldEnum: {
    id: 'id',
    credits: 'credits',
    purchaseDate: 'purchaseDate',
    userId: 'userId'
  };

  export type ApiCreditsPurchaseScalarFieldEnum = (typeof ApiCreditsPurchaseScalarFieldEnum)[keyof typeof ApiCreditsPurchaseScalarFieldEnum]


  export const ApiCreditsUsageScalarFieldEnum: {
    id: 'id',
    apiKeyId: 'apiKeyId',
    credits: 'credits',
    usageDate: 'usageDate',
    userId: 'userId'
  };

  export type ApiCreditsUsageScalarFieldEnum = (typeof ApiCreditsUsageScalarFieldEnum)[keyof typeof ApiCreditsUsageScalarFieldEnum]


  export const ApiUsageLogScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    endpoint: 'endpoint',
    params: 'params',
    statusCode: 'statusCode',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    apiKeyId: 'apiKeyId'
  };

  export type ApiUsageLogScalarFieldEnum = (typeof ApiUsageLogScalarFieldEnum)[keyof typeof ApiUsageLogScalarFieldEnum]


  export const TimetableCacheScalarFieldEnum: {
    id: 'id',
    username: 'username',
    school: 'school',
    date: 'date',
    data: 'data',
    expiresAt: 'expiresAt'
  };

  export type TimetableCacheScalarFieldEnum = (typeof TimetableCacheScalarFieldEnum)[keyof typeof TimetableCacheScalarFieldEnum]


  export const CalendarAccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt',
    scope: 'scope',
    calendarId: 'calendarId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CalendarAccountScalarFieldEnum = (typeof CalendarAccountScalarFieldEnum)[keyof typeof CalendarAccountScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


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
   * Reference to a field of type 'CalendarProvider'
   */
  export type EnumCalendarProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CalendarProvider'>
    


  /**
   * Reference to a field of type 'CalendarProvider[]'
   */
  export type ListEnumCalendarProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CalendarProvider[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    totpKey?: BytesNullableFilter<"User"> | Uint8Array | null
    recoveryCode?: BytesFilter<"User"> | Uint8Array
    sessions?: SessionListRelationFilter
    emailVerifications?: EmailVerificationRequestListRelationFilter
    passwordResets?: PasswordResetSessionListRelationFilter
    apiKeys?: ApiKeyListRelationFilter
    calendarAccounts?: CalendarAccountListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
    apiCreditsPurchases?: ApiCreditsPurchaseListRelationFilter
    apiCreditsUsages?: ApiCreditsUsageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    emailVerified?: SortOrder
    totpKey?: SortOrderInput | SortOrder
    recoveryCode?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    emailVerifications?: EmailVerificationRequestOrderByRelationAggregateInput
    passwordResets?: PasswordResetSessionOrderByRelationAggregateInput
    apiKeys?: ApiKeyOrderByRelationAggregateInput
    calendarAccounts?: CalendarAccountOrderByRelationAggregateInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    apiCreditsPurchases?: ApiCreditsPurchaseOrderByRelationAggregateInput
    apiCreditsUsages?: ApiCreditsUsageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    totpKey?: BytesNullableFilter<"User"> | Uint8Array | null
    recoveryCode?: BytesFilter<"User"> | Uint8Array
    sessions?: SessionListRelationFilter
    emailVerifications?: EmailVerificationRequestListRelationFilter
    passwordResets?: PasswordResetSessionListRelationFilter
    apiKeys?: ApiKeyListRelationFilter
    calendarAccounts?: CalendarAccountListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
    apiCreditsPurchases?: ApiCreditsPurchaseListRelationFilter
    apiCreditsUsages?: ApiCreditsUsageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    emailVerified?: SortOrder
    totpKey?: SortOrderInput | SortOrder
    recoveryCode?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    totpKey?: BytesNullableWithAggregatesFilter<"User"> | Uint8Array | null
    recoveryCode?: BytesWithAggregatesFilter<"User"> | Uint8Array
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: IntFilter<"Subscription"> | number
    stripeCustomerId?: StringFilter<"Subscription"> | string
    stripeSubscriptionId?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    priceId?: StringFilter<"Subscription"> | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    priceId?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: number
    stripeCustomerId?: string
    stripeSubscriptionId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    status?: StringFilter<"Subscription"> | string
    priceId?: StringFilter<"Subscription"> | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "stripeCustomerId" | "stripeSubscriptionId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    priceId?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: IntWithAggregatesFilter<"Subscription"> | number
    stripeCustomerId?: StringWithAggregatesFilter<"Subscription"> | string
    stripeSubscriptionId?: StringWithAggregatesFilter<"Subscription"> | string
    status?: StringWithAggregatesFilter<"Subscription"> | string
    priceId?: StringWithAggregatesFilter<"Subscription"> | string
    currentPeriodEnd?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: IntFilter<"Session"> | number
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    twoFactorVerified?: BoolFilter<"Session"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    twoFactorVerified?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: IntFilter<"Session"> | number
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    twoFactorVerified?: BoolFilter<"Session"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    twoFactorVerified?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: IntWithAggregatesFilter<"Session"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    twoFactorVerified?: BoolWithAggregatesFilter<"Session"> | boolean
  }

  export type EmailVerificationRequestWhereInput = {
    AND?: EmailVerificationRequestWhereInput | EmailVerificationRequestWhereInput[]
    OR?: EmailVerificationRequestWhereInput[]
    NOT?: EmailVerificationRequestWhereInput | EmailVerificationRequestWhereInput[]
    id?: StringFilter<"EmailVerificationRequest"> | string
    userId?: IntFilter<"EmailVerificationRequest"> | number
    email?: StringFilter<"EmailVerificationRequest"> | string
    code?: StringFilter<"EmailVerificationRequest"> | string
    expiresAt?: DateTimeFilter<"EmailVerificationRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmailVerificationRequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmailVerificationRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailVerificationRequestWhereInput | EmailVerificationRequestWhereInput[]
    OR?: EmailVerificationRequestWhereInput[]
    NOT?: EmailVerificationRequestWhereInput | EmailVerificationRequestWhereInput[]
    userId?: IntFilter<"EmailVerificationRequest"> | number
    email?: StringFilter<"EmailVerificationRequest"> | string
    code?: StringFilter<"EmailVerificationRequest"> | string
    expiresAt?: DateTimeFilter<"EmailVerificationRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EmailVerificationRequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    _count?: EmailVerificationRequestCountOrderByAggregateInput
    _avg?: EmailVerificationRequestAvgOrderByAggregateInput
    _max?: EmailVerificationRequestMaxOrderByAggregateInput
    _min?: EmailVerificationRequestMinOrderByAggregateInput
    _sum?: EmailVerificationRequestSumOrderByAggregateInput
  }

  export type EmailVerificationRequestScalarWhereWithAggregatesInput = {
    AND?: EmailVerificationRequestScalarWhereWithAggregatesInput | EmailVerificationRequestScalarWhereWithAggregatesInput[]
    OR?: EmailVerificationRequestScalarWhereWithAggregatesInput[]
    NOT?: EmailVerificationRequestScalarWhereWithAggregatesInput | EmailVerificationRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailVerificationRequest"> | string
    userId?: IntWithAggregatesFilter<"EmailVerificationRequest"> | number
    email?: StringWithAggregatesFilter<"EmailVerificationRequest"> | string
    code?: StringWithAggregatesFilter<"EmailVerificationRequest"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"EmailVerificationRequest"> | Date | string
  }

  export type PasswordResetSessionWhereInput = {
    AND?: PasswordResetSessionWhereInput | PasswordResetSessionWhereInput[]
    OR?: PasswordResetSessionWhereInput[]
    NOT?: PasswordResetSessionWhereInput | PasswordResetSessionWhereInput[]
    id?: StringFilter<"PasswordResetSession"> | string
    userId?: IntFilter<"PasswordResetSession"> | number
    email?: StringFilter<"PasswordResetSession"> | string
    code?: StringFilter<"PasswordResetSession"> | string
    expiresAt?: DateTimeFilter<"PasswordResetSession"> | Date | string
    emailVerified?: BoolFilter<"PasswordResetSession"> | boolean
    twoFactorVerified?: BoolFilter<"PasswordResetSession"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordResetSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    emailVerified?: SortOrder
    twoFactorVerified?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasswordResetSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PasswordResetSessionWhereInput | PasswordResetSessionWhereInput[]
    OR?: PasswordResetSessionWhereInput[]
    NOT?: PasswordResetSessionWhereInput | PasswordResetSessionWhereInput[]
    userId?: IntFilter<"PasswordResetSession"> | number
    email?: StringFilter<"PasswordResetSession"> | string
    code?: StringFilter<"PasswordResetSession"> | string
    expiresAt?: DateTimeFilter<"PasswordResetSession"> | Date | string
    emailVerified?: BoolFilter<"PasswordResetSession"> | boolean
    twoFactorVerified?: BoolFilter<"PasswordResetSession"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PasswordResetSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    emailVerified?: SortOrder
    twoFactorVerified?: SortOrder
    _count?: PasswordResetSessionCountOrderByAggregateInput
    _avg?: PasswordResetSessionAvgOrderByAggregateInput
    _max?: PasswordResetSessionMaxOrderByAggregateInput
    _min?: PasswordResetSessionMinOrderByAggregateInput
    _sum?: PasswordResetSessionSumOrderByAggregateInput
  }

  export type PasswordResetSessionScalarWhereWithAggregatesInput = {
    AND?: PasswordResetSessionScalarWhereWithAggregatesInput | PasswordResetSessionScalarWhereWithAggregatesInput[]
    OR?: PasswordResetSessionScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetSessionScalarWhereWithAggregatesInput | PasswordResetSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordResetSession"> | string
    userId?: IntWithAggregatesFilter<"PasswordResetSession"> | number
    email?: StringWithAggregatesFilter<"PasswordResetSession"> | string
    code?: StringWithAggregatesFilter<"PasswordResetSession"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordResetSession"> | Date | string
    emailVerified?: BoolWithAggregatesFilter<"PasswordResetSession"> | boolean
    twoFactorVerified?: BoolWithAggregatesFilter<"PasswordResetSession"> | boolean
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    key?: StringFilter<"ApiKey"> | string
    unlimited?: BoolFilter<"ApiKey"> | boolean
    minInterval?: IntFilter<"ApiKey"> | number
    ownerId?: IntNullableFilter<"ApiKey"> | number | null
    name?: StringFilter<"ApiKey"> | string
    description?: StringNullableFilter<"ApiKey"> | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    lastRequest?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    usageLogs?: ApiUsageLogListRelationFilter
    apiKeyPermissions?: ApiKeyPermissionListRelationFilter
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    unlimited?: SortOrder
    minInterval?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastRequest?: SortOrderInput | SortOrder
    owner?: UserOrderByWithRelationInput
    usageLogs?: ApiUsageLogOrderByRelationAggregateInput
    apiKeyPermissions?: ApiKeyPermissionOrderByRelationAggregateInput
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    unlimited?: BoolFilter<"ApiKey"> | boolean
    minInterval?: IntFilter<"ApiKey"> | number
    ownerId?: IntNullableFilter<"ApiKey"> | number | null
    name?: StringFilter<"ApiKey"> | string
    description?: StringNullableFilter<"ApiKey"> | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    lastRequest?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    usageLogs?: ApiUsageLogListRelationFilter
    apiKeyPermissions?: ApiKeyPermissionListRelationFilter
  }, "id" | "key">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    unlimited?: SortOrder
    minInterval?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastRequest?: SortOrderInput | SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _avg?: ApiKeyAvgOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
    _sum?: ApiKeySumOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    key?: StringWithAggregatesFilter<"ApiKey"> | string
    unlimited?: BoolWithAggregatesFilter<"ApiKey"> | boolean
    minInterval?: IntWithAggregatesFilter<"ApiKey"> | number
    ownerId?: IntNullableWithAggregatesFilter<"ApiKey"> | number | null
    name?: StringWithAggregatesFilter<"ApiKey"> | string
    description?: StringNullableWithAggregatesFilter<"ApiKey"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
    lastRequest?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
  }

  export type ApiKeyPermissionWhereInput = {
    AND?: ApiKeyPermissionWhereInput | ApiKeyPermissionWhereInput[]
    OR?: ApiKeyPermissionWhereInput[]
    NOT?: ApiKeyPermissionWhereInput | ApiKeyPermissionWhereInput[]
    id?: StringFilter<"ApiKeyPermission"> | string
    apiKeyId?: StringFilter<"ApiKeyPermission"> | string
    permission?: StringFilter<"ApiKeyPermission"> | string
    apiKey?: XOR<ApiKeyScalarRelationFilter, ApiKeyWhereInput>
  }

  export type ApiKeyPermissionOrderByWithRelationInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    permission?: SortOrder
    apiKey?: ApiKeyOrderByWithRelationInput
  }

  export type ApiKeyPermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApiKeyPermissionWhereInput | ApiKeyPermissionWhereInput[]
    OR?: ApiKeyPermissionWhereInput[]
    NOT?: ApiKeyPermissionWhereInput | ApiKeyPermissionWhereInput[]
    apiKeyId?: StringFilter<"ApiKeyPermission"> | string
    permission?: StringFilter<"ApiKeyPermission"> | string
    apiKey?: XOR<ApiKeyScalarRelationFilter, ApiKeyWhereInput>
  }, "id">

  export type ApiKeyPermissionOrderByWithAggregationInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    permission?: SortOrder
    _count?: ApiKeyPermissionCountOrderByAggregateInput
    _max?: ApiKeyPermissionMaxOrderByAggregateInput
    _min?: ApiKeyPermissionMinOrderByAggregateInput
  }

  export type ApiKeyPermissionScalarWhereWithAggregatesInput = {
    AND?: ApiKeyPermissionScalarWhereWithAggregatesInput | ApiKeyPermissionScalarWhereWithAggregatesInput[]
    OR?: ApiKeyPermissionScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyPermissionScalarWhereWithAggregatesInput | ApiKeyPermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKeyPermission"> | string
    apiKeyId?: StringWithAggregatesFilter<"ApiKeyPermission"> | string
    permission?: StringWithAggregatesFilter<"ApiKeyPermission"> | string
  }

  export type ApiCreditsPurchaseWhereInput = {
    AND?: ApiCreditsPurchaseWhereInput | ApiCreditsPurchaseWhereInput[]
    OR?: ApiCreditsPurchaseWhereInput[]
    NOT?: ApiCreditsPurchaseWhereInput | ApiCreditsPurchaseWhereInput[]
    id?: StringFilter<"ApiCreditsPurchase"> | string
    credits?: IntFilter<"ApiCreditsPurchase"> | number
    purchaseDate?: DateTimeFilter<"ApiCreditsPurchase"> | Date | string
    userId?: IntNullableFilter<"ApiCreditsPurchase"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ApiCreditsPurchaseOrderByWithRelationInput = {
    id?: SortOrder
    credits?: SortOrder
    purchaseDate?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ApiCreditsPurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApiCreditsPurchaseWhereInput | ApiCreditsPurchaseWhereInput[]
    OR?: ApiCreditsPurchaseWhereInput[]
    NOT?: ApiCreditsPurchaseWhereInput | ApiCreditsPurchaseWhereInput[]
    credits?: IntFilter<"ApiCreditsPurchase"> | number
    purchaseDate?: DateTimeFilter<"ApiCreditsPurchase"> | Date | string
    userId?: IntNullableFilter<"ApiCreditsPurchase"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ApiCreditsPurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    credits?: SortOrder
    purchaseDate?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ApiCreditsPurchaseCountOrderByAggregateInput
    _avg?: ApiCreditsPurchaseAvgOrderByAggregateInput
    _max?: ApiCreditsPurchaseMaxOrderByAggregateInput
    _min?: ApiCreditsPurchaseMinOrderByAggregateInput
    _sum?: ApiCreditsPurchaseSumOrderByAggregateInput
  }

  export type ApiCreditsPurchaseScalarWhereWithAggregatesInput = {
    AND?: ApiCreditsPurchaseScalarWhereWithAggregatesInput | ApiCreditsPurchaseScalarWhereWithAggregatesInput[]
    OR?: ApiCreditsPurchaseScalarWhereWithAggregatesInput[]
    NOT?: ApiCreditsPurchaseScalarWhereWithAggregatesInput | ApiCreditsPurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiCreditsPurchase"> | string
    credits?: IntWithAggregatesFilter<"ApiCreditsPurchase"> | number
    purchaseDate?: DateTimeWithAggregatesFilter<"ApiCreditsPurchase"> | Date | string
    userId?: IntNullableWithAggregatesFilter<"ApiCreditsPurchase"> | number | null
  }

  export type ApiCreditsUsageWhereInput = {
    AND?: ApiCreditsUsageWhereInput | ApiCreditsUsageWhereInput[]
    OR?: ApiCreditsUsageWhereInput[]
    NOT?: ApiCreditsUsageWhereInput | ApiCreditsUsageWhereInput[]
    id?: StringFilter<"ApiCreditsUsage"> | string
    apiKeyId?: StringFilter<"ApiCreditsUsage"> | string
    credits?: IntFilter<"ApiCreditsUsage"> | number
    usageDate?: DateTimeFilter<"ApiCreditsUsage"> | Date | string
    userId?: IntNullableFilter<"ApiCreditsUsage"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ApiCreditsUsageOrderByWithRelationInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    credits?: SortOrder
    usageDate?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ApiCreditsUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApiCreditsUsageWhereInput | ApiCreditsUsageWhereInput[]
    OR?: ApiCreditsUsageWhereInput[]
    NOT?: ApiCreditsUsageWhereInput | ApiCreditsUsageWhereInput[]
    apiKeyId?: StringFilter<"ApiCreditsUsage"> | string
    credits?: IntFilter<"ApiCreditsUsage"> | number
    usageDate?: DateTimeFilter<"ApiCreditsUsage"> | Date | string
    userId?: IntNullableFilter<"ApiCreditsUsage"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ApiCreditsUsageOrderByWithAggregationInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    credits?: SortOrder
    usageDate?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ApiCreditsUsageCountOrderByAggregateInput
    _avg?: ApiCreditsUsageAvgOrderByAggregateInput
    _max?: ApiCreditsUsageMaxOrderByAggregateInput
    _min?: ApiCreditsUsageMinOrderByAggregateInput
    _sum?: ApiCreditsUsageSumOrderByAggregateInput
  }

  export type ApiCreditsUsageScalarWhereWithAggregatesInput = {
    AND?: ApiCreditsUsageScalarWhereWithAggregatesInput | ApiCreditsUsageScalarWhereWithAggregatesInput[]
    OR?: ApiCreditsUsageScalarWhereWithAggregatesInput[]
    NOT?: ApiCreditsUsageScalarWhereWithAggregatesInput | ApiCreditsUsageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiCreditsUsage"> | string
    apiKeyId?: StringWithAggregatesFilter<"ApiCreditsUsage"> | string
    credits?: IntWithAggregatesFilter<"ApiCreditsUsage"> | number
    usageDate?: DateTimeWithAggregatesFilter<"ApiCreditsUsage"> | Date | string
    userId?: IntNullableWithAggregatesFilter<"ApiCreditsUsage"> | number | null
  }

  export type ApiUsageLogWhereInput = {
    AND?: ApiUsageLogWhereInput | ApiUsageLogWhereInput[]
    OR?: ApiUsageLogWhereInput[]
    NOT?: ApiUsageLogWhereInput | ApiUsageLogWhereInput[]
    id?: StringFilter<"ApiUsageLog"> | string
    timestamp?: DateTimeFilter<"ApiUsageLog"> | Date | string
    endpoint?: StringFilter<"ApiUsageLog"> | string
    params?: JsonFilter<"ApiUsageLog">
    statusCode?: IntFilter<"ApiUsageLog"> | number
    ipAddress?: StringNullableFilter<"ApiUsageLog"> | string | null
    userAgent?: StringNullableFilter<"ApiUsageLog"> | string | null
    apiKeyId?: StringFilter<"ApiUsageLog"> | string
    apiKey?: XOR<ApiKeyScalarRelationFilter, ApiKeyWhereInput>
  }

  export type ApiUsageLogOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    endpoint?: SortOrder
    params?: SortOrder
    statusCode?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    apiKeyId?: SortOrder
    apiKey?: ApiKeyOrderByWithRelationInput
  }

  export type ApiUsageLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApiUsageLogWhereInput | ApiUsageLogWhereInput[]
    OR?: ApiUsageLogWhereInput[]
    NOT?: ApiUsageLogWhereInput | ApiUsageLogWhereInput[]
    timestamp?: DateTimeFilter<"ApiUsageLog"> | Date | string
    endpoint?: StringFilter<"ApiUsageLog"> | string
    params?: JsonFilter<"ApiUsageLog">
    statusCode?: IntFilter<"ApiUsageLog"> | number
    ipAddress?: StringNullableFilter<"ApiUsageLog"> | string | null
    userAgent?: StringNullableFilter<"ApiUsageLog"> | string | null
    apiKeyId?: StringFilter<"ApiUsageLog"> | string
    apiKey?: XOR<ApiKeyScalarRelationFilter, ApiKeyWhereInput>
  }, "id">

  export type ApiUsageLogOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    endpoint?: SortOrder
    params?: SortOrder
    statusCode?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    apiKeyId?: SortOrder
    _count?: ApiUsageLogCountOrderByAggregateInput
    _avg?: ApiUsageLogAvgOrderByAggregateInput
    _max?: ApiUsageLogMaxOrderByAggregateInput
    _min?: ApiUsageLogMinOrderByAggregateInput
    _sum?: ApiUsageLogSumOrderByAggregateInput
  }

  export type ApiUsageLogScalarWhereWithAggregatesInput = {
    AND?: ApiUsageLogScalarWhereWithAggregatesInput | ApiUsageLogScalarWhereWithAggregatesInput[]
    OR?: ApiUsageLogScalarWhereWithAggregatesInput[]
    NOT?: ApiUsageLogScalarWhereWithAggregatesInput | ApiUsageLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiUsageLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"ApiUsageLog"> | Date | string
    endpoint?: StringWithAggregatesFilter<"ApiUsageLog"> | string
    params?: JsonWithAggregatesFilter<"ApiUsageLog">
    statusCode?: IntWithAggregatesFilter<"ApiUsageLog"> | number
    ipAddress?: StringNullableWithAggregatesFilter<"ApiUsageLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"ApiUsageLog"> | string | null
    apiKeyId?: StringWithAggregatesFilter<"ApiUsageLog"> | string
  }

  export type TimetableCacheWhereInput = {
    AND?: TimetableCacheWhereInput | TimetableCacheWhereInput[]
    OR?: TimetableCacheWhereInput[]
    NOT?: TimetableCacheWhereInput | TimetableCacheWhereInput[]
    id?: StringFilter<"TimetableCache"> | string
    username?: StringFilter<"TimetableCache"> | string
    school?: StringFilter<"TimetableCache"> | string
    date?: DateTimeFilter<"TimetableCache"> | Date | string
    data?: JsonFilter<"TimetableCache">
    expiresAt?: DateTimeFilter<"TimetableCache"> | Date | string
  }

  export type TimetableCacheOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    school?: SortOrder
    date?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type TimetableCacheWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimetableCacheWhereInput | TimetableCacheWhereInput[]
    OR?: TimetableCacheWhereInput[]
    NOT?: TimetableCacheWhereInput | TimetableCacheWhereInput[]
    username?: StringFilter<"TimetableCache"> | string
    school?: StringFilter<"TimetableCache"> | string
    date?: DateTimeFilter<"TimetableCache"> | Date | string
    data?: JsonFilter<"TimetableCache">
    expiresAt?: DateTimeFilter<"TimetableCache"> | Date | string
  }, "id">

  export type TimetableCacheOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    school?: SortOrder
    date?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    _count?: TimetableCacheCountOrderByAggregateInput
    _max?: TimetableCacheMaxOrderByAggregateInput
    _min?: TimetableCacheMinOrderByAggregateInput
  }

  export type TimetableCacheScalarWhereWithAggregatesInput = {
    AND?: TimetableCacheScalarWhereWithAggregatesInput | TimetableCacheScalarWhereWithAggregatesInput[]
    OR?: TimetableCacheScalarWhereWithAggregatesInput[]
    NOT?: TimetableCacheScalarWhereWithAggregatesInput | TimetableCacheScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimetableCache"> | string
    username?: StringWithAggregatesFilter<"TimetableCache"> | string
    school?: StringWithAggregatesFilter<"TimetableCache"> | string
    date?: DateTimeWithAggregatesFilter<"TimetableCache"> | Date | string
    data?: JsonWithAggregatesFilter<"TimetableCache">
    expiresAt?: DateTimeWithAggregatesFilter<"TimetableCache"> | Date | string
  }

  export type CalendarAccountWhereInput = {
    AND?: CalendarAccountWhereInput | CalendarAccountWhereInput[]
    OR?: CalendarAccountWhereInput[]
    NOT?: CalendarAccountWhereInput | CalendarAccountWhereInput[]
    id?: IntFilter<"CalendarAccount"> | number
    userId?: IntFilter<"CalendarAccount"> | number
    provider?: EnumCalendarProviderFilter<"CalendarAccount"> | $Enums.CalendarProvider
    providerAccountId?: StringFilter<"CalendarAccount"> | string
    accessToken?: StringFilter<"CalendarAccount"> | string
    refreshToken?: StringNullableFilter<"CalendarAccount"> | string | null
    expiresAt?: DateTimeNullableFilter<"CalendarAccount"> | Date | string | null
    scope?: StringNullableFilter<"CalendarAccount"> | string | null
    calendarId?: StringNullableFilter<"CalendarAccount"> | string | null
    createdAt?: DateTimeFilter<"CalendarAccount"> | Date | string
    updatedAt?: DateTimeFilter<"CalendarAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CalendarAccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    calendarId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CalendarAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_provider?: CalendarAccountUserIdProviderCompoundUniqueInput
    AND?: CalendarAccountWhereInput | CalendarAccountWhereInput[]
    OR?: CalendarAccountWhereInput[]
    NOT?: CalendarAccountWhereInput | CalendarAccountWhereInput[]
    userId?: IntFilter<"CalendarAccount"> | number
    provider?: EnumCalendarProviderFilter<"CalendarAccount"> | $Enums.CalendarProvider
    providerAccountId?: StringFilter<"CalendarAccount"> | string
    accessToken?: StringFilter<"CalendarAccount"> | string
    refreshToken?: StringNullableFilter<"CalendarAccount"> | string | null
    expiresAt?: DateTimeNullableFilter<"CalendarAccount"> | Date | string | null
    scope?: StringNullableFilter<"CalendarAccount"> | string | null
    calendarId?: StringNullableFilter<"CalendarAccount"> | string | null
    createdAt?: DateTimeFilter<"CalendarAccount"> | Date | string
    updatedAt?: DateTimeFilter<"CalendarAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_provider">

  export type CalendarAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    calendarId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CalendarAccountCountOrderByAggregateInput
    _avg?: CalendarAccountAvgOrderByAggregateInput
    _max?: CalendarAccountMaxOrderByAggregateInput
    _min?: CalendarAccountMinOrderByAggregateInput
    _sum?: CalendarAccountSumOrderByAggregateInput
  }

  export type CalendarAccountScalarWhereWithAggregatesInput = {
    AND?: CalendarAccountScalarWhereWithAggregatesInput | CalendarAccountScalarWhereWithAggregatesInput[]
    OR?: CalendarAccountScalarWhereWithAggregatesInput[]
    NOT?: CalendarAccountScalarWhereWithAggregatesInput | CalendarAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CalendarAccount"> | number
    userId?: IntWithAggregatesFilter<"CalendarAccount"> | number
    provider?: EnumCalendarProviderWithAggregatesFilter<"CalendarAccount"> | $Enums.CalendarProvider
    providerAccountId?: StringWithAggregatesFilter<"CalendarAccount"> | string
    accessToken?: StringWithAggregatesFilter<"CalendarAccount"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"CalendarAccount"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"CalendarAccount"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"CalendarAccount"> | string | null
    calendarId?: StringNullableWithAggregatesFilter<"CalendarAccount"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CalendarAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CalendarAccount"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    sessions?: SessionCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    apiCreditsPurchases?: ApiCreditsPurchaseCreateNestedManyWithoutUserInput
    apiCreditsUsages?: ApiCreditsUsageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    apiCreditsPurchases?: ApiCreditsPurchaseUncheckedCreateNestedManyWithoutUserInput
    apiCreditsUsages?: ApiCreditsUsageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    sessions?: SessionUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    apiCreditsPurchases?: ApiCreditsPurchaseUpdateManyWithoutUserNestedInput
    apiCreditsUsages?: ApiCreditsUsageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    apiCreditsPurchases?: ApiCreditsPurchaseUncheckedUpdateManyWithoutUserNestedInput
    apiCreditsUsages?: ApiCreditsUsageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type SubscriptionCreateInput = {
    id?: string
    stripeCustomerId: string
    stripeSubscriptionId: string
    status: string
    priceId: string
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId: number
    stripeCustomerId: string
    stripeSubscriptionId: string
    status: string
    priceId: string
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priceId?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priceId?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId: number
    stripeCustomerId: string
    stripeSubscriptionId: string
    status: string
    priceId: string
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priceId?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priceId?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    expiresAt: Date | string
    twoFactorVerified?: boolean
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: number
    expiresAt: Date | string
    twoFactorVerified?: boolean
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: number
    expiresAt: Date | string
    twoFactorVerified?: boolean
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailVerificationRequestCreateInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutEmailVerificationsInput
  }

  export type EmailVerificationRequestUncheckedCreateInput = {
    id?: string
    userId: number
    email: string
    code: string
    expiresAt: Date | string
  }

  export type EmailVerificationRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmailVerificationsNestedInput
  }

  export type EmailVerificationRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationRequestCreateManyInput = {
    id?: string
    userId: number
    email: string
    code: string
    expiresAt: Date | string
  }

  export type EmailVerificationRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetSessionCreateInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
    emailVerified?: boolean
    twoFactorVerified?: boolean
    user: UserCreateNestedOneWithoutPasswordResetsInput
  }

  export type PasswordResetSessionUncheckedCreateInput = {
    id?: string
    userId: number
    email: string
    code: string
    expiresAt: Date | string
    emailVerified?: boolean
    twoFactorVerified?: boolean
  }

  export type PasswordResetSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPasswordResetsNestedInput
  }

  export type PasswordResetSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetSessionCreateManyInput = {
    id?: string
    userId: number
    email: string
    code: string
    expiresAt: Date | string
    emailVerified?: boolean
    twoFactorVerified?: boolean
  }

  export type PasswordResetSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApiKeyCreateInput = {
    id?: string
    key: string
    unlimited: boolean
    minInterval?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    lastRequest?: Date | string | null
    owner?: UserCreateNestedOneWithoutApiKeysInput
    usageLogs?: ApiUsageLogCreateNestedManyWithoutApiKeyInput
    apiKeyPermissions?: ApiKeyPermissionCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    key: string
    unlimited: boolean
    minInterval?: number
    ownerId?: number | null
    name: string
    description?: string | null
    createdAt?: Date | string
    lastRequest?: Date | string | null
    usageLogs?: ApiUsageLogUncheckedCreateNestedManyWithoutApiKeyInput
    apiKeyPermissions?: ApiKeyPermissionUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    unlimited?: BoolFieldUpdateOperationsInput | boolean
    minInterval?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRequest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneWithoutApiKeysNestedInput
    usageLogs?: ApiUsageLogUpdateManyWithoutApiKeyNestedInput
    apiKeyPermissions?: ApiKeyPermissionUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    unlimited?: BoolFieldUpdateOperationsInput | boolean
    minInterval?: IntFieldUpdateOperationsInput | number
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRequest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageLogs?: ApiUsageLogUncheckedUpdateManyWithoutApiKeyNestedInput
    apiKeyPermissions?: ApiKeyPermissionUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    key: string
    unlimited: boolean
    minInterval?: number
    ownerId?: number | null
    name: string
    description?: string | null
    createdAt?: Date | string
    lastRequest?: Date | string | null
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    unlimited?: BoolFieldUpdateOperationsInput | boolean
    minInterval?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRequest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    unlimited?: BoolFieldUpdateOperationsInput | boolean
    minInterval?: IntFieldUpdateOperationsInput | number
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRequest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApiKeyPermissionCreateInput = {
    id?: string
    permission: string
    apiKey: ApiKeyCreateNestedOneWithoutApiKeyPermissionsInput
  }

  export type ApiKeyPermissionUncheckedCreateInput = {
    id?: string
    apiKeyId: string
    permission: string
  }

  export type ApiKeyPermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    apiKey?: ApiKeyUpdateOneRequiredWithoutApiKeyPermissionsNestedInput
  }

  export type ApiKeyPermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
  }

  export type ApiKeyPermissionCreateManyInput = {
    id?: string
    apiKeyId: string
    permission: string
  }

  export type ApiKeyPermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
  }

  export type ApiKeyPermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
  }

  export type ApiCreditsPurchaseCreateInput = {
    id?: string
    credits: number
    purchaseDate?: Date | string
    user?: UserCreateNestedOneWithoutApiCreditsPurchasesInput
  }

  export type ApiCreditsPurchaseUncheckedCreateInput = {
    id?: string
    credits: number
    purchaseDate?: Date | string
    userId?: number | null
  }

  export type ApiCreditsPurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutApiCreditsPurchasesNestedInput
  }

  export type ApiCreditsPurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ApiCreditsPurchaseCreateManyInput = {
    id?: string
    credits: number
    purchaseDate?: Date | string
    userId?: number | null
  }

  export type ApiCreditsPurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCreditsPurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ApiCreditsUsageCreateInput = {
    id?: string
    apiKeyId: string
    credits: number
    usageDate?: Date | string
    user?: UserCreateNestedOneWithoutApiCreditsUsagesInput
  }

  export type ApiCreditsUsageUncheckedCreateInput = {
    id?: string
    apiKeyId: string
    credits: number
    usageDate?: Date | string
    userId?: number | null
  }

  export type ApiCreditsUsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    usageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutApiCreditsUsagesNestedInput
  }

  export type ApiCreditsUsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    usageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ApiCreditsUsageCreateManyInput = {
    id?: string
    apiKeyId: string
    credits: number
    usageDate?: Date | string
    userId?: number | null
  }

  export type ApiCreditsUsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    usageDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCreditsUsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    usageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ApiUsageLogCreateInput = {
    id?: string
    timestamp?: Date | string
    endpoint: string
    params: JsonNullValueInput | InputJsonValue
    statusCode: number
    ipAddress?: string | null
    userAgent?: string | null
    apiKey: ApiKeyCreateNestedOneWithoutUsageLogsInput
  }

  export type ApiUsageLogUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    endpoint: string
    params: JsonNullValueInput | InputJsonValue
    statusCode: number
    ipAddress?: string | null
    userAgent?: string | null
    apiKeyId: string
  }

  export type ApiUsageLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: StringFieldUpdateOperationsInput | string
    params?: JsonNullValueInput | InputJsonValue
    statusCode?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: ApiKeyUpdateOneRequiredWithoutUsageLogsNestedInput
  }

  export type ApiUsageLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: StringFieldUpdateOperationsInput | string
    params?: JsonNullValueInput | InputJsonValue
    statusCode?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeyId?: StringFieldUpdateOperationsInput | string
  }

  export type ApiUsageLogCreateManyInput = {
    id?: string
    timestamp?: Date | string
    endpoint: string
    params: JsonNullValueInput | InputJsonValue
    statusCode: number
    ipAddress?: string | null
    userAgent?: string | null
    apiKeyId: string
  }

  export type ApiUsageLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: StringFieldUpdateOperationsInput | string
    params?: JsonNullValueInput | InputJsonValue
    statusCode?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApiUsageLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: StringFieldUpdateOperationsInput | string
    params?: JsonNullValueInput | InputJsonValue
    statusCode?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeyId?: StringFieldUpdateOperationsInput | string
  }

  export type TimetableCacheCreateInput = {
    id?: string
    username: string
    school: string
    date: Date | string
    data: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
  }

  export type TimetableCacheUncheckedCreateInput = {
    id?: string
    username: string
    school: string
    date: Date | string
    data: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
  }

  export type TimetableCacheUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimetableCacheUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimetableCacheCreateManyInput = {
    id?: string
    username: string
    school: string
    date: Date | string
    data: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
  }

  export type TimetableCacheUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimetableCacheUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarAccountCreateInput = {
    provider?: $Enums.CalendarProvider
    providerAccountId: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    calendarId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCalendarAccountsInput
  }

  export type CalendarAccountUncheckedCreateInput = {
    id?: number
    userId: number
    provider?: $Enums.CalendarProvider
    providerAccountId: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    calendarId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarAccountUpdateInput = {
    provider?: EnumCalendarProviderFieldUpdateOperationsInput | $Enums.CalendarProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCalendarAccountsNestedInput
  }

  export type CalendarAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    provider?: EnumCalendarProviderFieldUpdateOperationsInput | $Enums.CalendarProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarAccountCreateManyInput = {
    id?: number
    userId: number
    provider?: $Enums.CalendarProvider
    providerAccountId: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    calendarId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarAccountUpdateManyMutationInput = {
    provider?: EnumCalendarProviderFieldUpdateOperationsInput | $Enums.CalendarProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    provider?: EnumCalendarProviderFieldUpdateOperationsInput | $Enums.CalendarProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type EmailVerificationRequestListRelationFilter = {
    every?: EmailVerificationRequestWhereInput
    some?: EmailVerificationRequestWhereInput
    none?: EmailVerificationRequestWhereInput
  }

  export type PasswordResetSessionListRelationFilter = {
    every?: PasswordResetSessionWhereInput
    some?: PasswordResetSessionWhereInput
    none?: PasswordResetSessionWhereInput
  }

  export type ApiKeyListRelationFilter = {
    every?: ApiKeyWhereInput
    some?: ApiKeyWhereInput
    none?: ApiKeyWhereInput
  }

  export type CalendarAccountListRelationFilter = {
    every?: CalendarAccountWhereInput
    some?: CalendarAccountWhereInput
    none?: CalendarAccountWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type ApiCreditsPurchaseListRelationFilter = {
    every?: ApiCreditsPurchaseWhereInput
    some?: ApiCreditsPurchaseWhereInput
    none?: ApiCreditsPurchaseWhereInput
  }

  export type ApiCreditsUsageListRelationFilter = {
    every?: ApiCreditsUsageWhereInput
    some?: ApiCreditsUsageWhereInput
    none?: ApiCreditsUsageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailVerificationRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordResetSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CalendarAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiCreditsPurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiCreditsUsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    emailVerified?: SortOrder
    totpKey?: SortOrder
    recoveryCode?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    emailVerified?: SortOrder
    totpKey?: SortOrder
    recoveryCode?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    emailVerified?: SortOrder
    totpKey?: SortOrder
    recoveryCode?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    priceId?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    priceId?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    priceId?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    userId?: SortOrder
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    twoFactorVerified?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    twoFactorVerified?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    twoFactorVerified?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type EmailVerificationRequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
  }

  export type EmailVerificationRequestAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type EmailVerificationRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
  }

  export type EmailVerificationRequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
  }

  export type EmailVerificationRequestSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type PasswordResetSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    emailVerified?: SortOrder
    twoFactorVerified?: SortOrder
  }

  export type PasswordResetSessionAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type PasswordResetSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    emailVerified?: SortOrder
    twoFactorVerified?: SortOrder
  }

  export type PasswordResetSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    emailVerified?: SortOrder
    twoFactorVerified?: SortOrder
  }

  export type PasswordResetSessionSumOrderByAggregateInput = {
    userId?: SortOrder
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ApiUsageLogListRelationFilter = {
    every?: ApiUsageLogWhereInput
    some?: ApiUsageLogWhereInput
    none?: ApiUsageLogWhereInput
  }

  export type ApiKeyPermissionListRelationFilter = {
    every?: ApiKeyPermissionWhereInput
    some?: ApiKeyPermissionWhereInput
    none?: ApiKeyPermissionWhereInput
  }

  export type ApiUsageLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiKeyPermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    unlimited?: SortOrder
    minInterval?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    lastRequest?: SortOrder
  }

  export type ApiKeyAvgOrderByAggregateInput = {
    minInterval?: SortOrder
    ownerId?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    unlimited?: SortOrder
    minInterval?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    lastRequest?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    unlimited?: SortOrder
    minInterval?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    lastRequest?: SortOrder
  }

  export type ApiKeySumOrderByAggregateInput = {
    minInterval?: SortOrder
    ownerId?: SortOrder
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

  export type ApiKeyScalarRelationFilter = {
    is?: ApiKeyWhereInput
    isNot?: ApiKeyWhereInput
  }

  export type ApiKeyPermissionCountOrderByAggregateInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    permission?: SortOrder
  }

  export type ApiKeyPermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    permission?: SortOrder
  }

  export type ApiKeyPermissionMinOrderByAggregateInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    permission?: SortOrder
  }

  export type ApiCreditsPurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    credits?: SortOrder
    purchaseDate?: SortOrder
    userId?: SortOrder
  }

  export type ApiCreditsPurchaseAvgOrderByAggregateInput = {
    credits?: SortOrder
    userId?: SortOrder
  }

  export type ApiCreditsPurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    credits?: SortOrder
    purchaseDate?: SortOrder
    userId?: SortOrder
  }

  export type ApiCreditsPurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    credits?: SortOrder
    purchaseDate?: SortOrder
    userId?: SortOrder
  }

  export type ApiCreditsPurchaseSumOrderByAggregateInput = {
    credits?: SortOrder
    userId?: SortOrder
  }

  export type ApiCreditsUsageCountOrderByAggregateInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    credits?: SortOrder
    usageDate?: SortOrder
    userId?: SortOrder
  }

  export type ApiCreditsUsageAvgOrderByAggregateInput = {
    credits?: SortOrder
    userId?: SortOrder
  }

  export type ApiCreditsUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    credits?: SortOrder
    usageDate?: SortOrder
    userId?: SortOrder
  }

  export type ApiCreditsUsageMinOrderByAggregateInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    credits?: SortOrder
    usageDate?: SortOrder
    userId?: SortOrder
  }

  export type ApiCreditsUsageSumOrderByAggregateInput = {
    credits?: SortOrder
    userId?: SortOrder
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

  export type ApiUsageLogCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    endpoint?: SortOrder
    params?: SortOrder
    statusCode?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    apiKeyId?: SortOrder
  }

  export type ApiUsageLogAvgOrderByAggregateInput = {
    statusCode?: SortOrder
  }

  export type ApiUsageLogMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    endpoint?: SortOrder
    statusCode?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    apiKeyId?: SortOrder
  }

  export type ApiUsageLogMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    endpoint?: SortOrder
    statusCode?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    apiKeyId?: SortOrder
  }

  export type ApiUsageLogSumOrderByAggregateInput = {
    statusCode?: SortOrder
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

  export type TimetableCacheCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    school?: SortOrder
    date?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type TimetableCacheMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    school?: SortOrder
    date?: SortOrder
    expiresAt?: SortOrder
  }

  export type TimetableCacheMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    school?: SortOrder
    date?: SortOrder
    expiresAt?: SortOrder
  }

  export type EnumCalendarProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.CalendarProvider | EnumCalendarProviderFieldRefInput<$PrismaModel>
    in?: $Enums.CalendarProvider[] | ListEnumCalendarProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.CalendarProvider[] | ListEnumCalendarProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumCalendarProviderFilter<$PrismaModel> | $Enums.CalendarProvider
  }

  export type CalendarAccountUserIdProviderCompoundUniqueInput = {
    userId: number
    provider: $Enums.CalendarProvider
  }

  export type CalendarAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    scope?: SortOrder
    calendarId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalendarAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CalendarAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    scope?: SortOrder
    calendarId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalendarAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    scope?: SortOrder
    calendarId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalendarAccountSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumCalendarProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CalendarProvider | EnumCalendarProviderFieldRefInput<$PrismaModel>
    in?: $Enums.CalendarProvider[] | ListEnumCalendarProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.CalendarProvider[] | ListEnumCalendarProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumCalendarProviderWithAggregatesFilter<$PrismaModel> | $Enums.CalendarProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCalendarProviderFilter<$PrismaModel>
    _max?: NestedEnumCalendarProviderFilter<$PrismaModel>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type EmailVerificationRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailVerificationRequestCreateWithoutUserInput, EmailVerificationRequestUncheckedCreateWithoutUserInput> | EmailVerificationRequestCreateWithoutUserInput[] | EmailVerificationRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationRequestCreateOrConnectWithoutUserInput | EmailVerificationRequestCreateOrConnectWithoutUserInput[]
    createMany?: EmailVerificationRequestCreateManyUserInputEnvelope
    connect?: EmailVerificationRequestWhereUniqueInput | EmailVerificationRequestWhereUniqueInput[]
  }

  export type PasswordResetSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetSessionCreateWithoutUserInput, PasswordResetSessionUncheckedCreateWithoutUserInput> | PasswordResetSessionCreateWithoutUserInput[] | PasswordResetSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetSessionCreateOrConnectWithoutUserInput | PasswordResetSessionCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetSessionCreateManyUserInputEnvelope
    connect?: PasswordResetSessionWhereUniqueInput | PasswordResetSessionWhereUniqueInput[]
  }

  export type ApiKeyCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ApiKeyCreateWithoutOwnerInput, ApiKeyUncheckedCreateWithoutOwnerInput> | ApiKeyCreateWithoutOwnerInput[] | ApiKeyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutOwnerInput | ApiKeyCreateOrConnectWithoutOwnerInput[]
    createMany?: ApiKeyCreateManyOwnerInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type CalendarAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<CalendarAccountCreateWithoutUserInput, CalendarAccountUncheckedCreateWithoutUserInput> | CalendarAccountCreateWithoutUserInput[] | CalendarAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CalendarAccountCreateOrConnectWithoutUserInput | CalendarAccountCreateOrConnectWithoutUserInput[]
    createMany?: CalendarAccountCreateManyUserInputEnvelope
    connect?: CalendarAccountWhereUniqueInput | CalendarAccountWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type ApiCreditsPurchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiCreditsPurchaseCreateWithoutUserInput, ApiCreditsPurchaseUncheckedCreateWithoutUserInput> | ApiCreditsPurchaseCreateWithoutUserInput[] | ApiCreditsPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiCreditsPurchaseCreateOrConnectWithoutUserInput | ApiCreditsPurchaseCreateOrConnectWithoutUserInput[]
    createMany?: ApiCreditsPurchaseCreateManyUserInputEnvelope
    connect?: ApiCreditsPurchaseWhereUniqueInput | ApiCreditsPurchaseWhereUniqueInput[]
  }

  export type ApiCreditsUsageCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiCreditsUsageCreateWithoutUserInput, ApiCreditsUsageUncheckedCreateWithoutUserInput> | ApiCreditsUsageCreateWithoutUserInput[] | ApiCreditsUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiCreditsUsageCreateOrConnectWithoutUserInput | ApiCreditsUsageCreateOrConnectWithoutUserInput[]
    createMany?: ApiCreditsUsageCreateManyUserInputEnvelope
    connect?: ApiCreditsUsageWhereUniqueInput | ApiCreditsUsageWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type EmailVerificationRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailVerificationRequestCreateWithoutUserInput, EmailVerificationRequestUncheckedCreateWithoutUserInput> | EmailVerificationRequestCreateWithoutUserInput[] | EmailVerificationRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationRequestCreateOrConnectWithoutUserInput | EmailVerificationRequestCreateOrConnectWithoutUserInput[]
    createMany?: EmailVerificationRequestCreateManyUserInputEnvelope
    connect?: EmailVerificationRequestWhereUniqueInput | EmailVerificationRequestWhereUniqueInput[]
  }

  export type PasswordResetSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetSessionCreateWithoutUserInput, PasswordResetSessionUncheckedCreateWithoutUserInput> | PasswordResetSessionCreateWithoutUserInput[] | PasswordResetSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetSessionCreateOrConnectWithoutUserInput | PasswordResetSessionCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetSessionCreateManyUserInputEnvelope
    connect?: PasswordResetSessionWhereUniqueInput | PasswordResetSessionWhereUniqueInput[]
  }

  export type ApiKeyUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ApiKeyCreateWithoutOwnerInput, ApiKeyUncheckedCreateWithoutOwnerInput> | ApiKeyCreateWithoutOwnerInput[] | ApiKeyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutOwnerInput | ApiKeyCreateOrConnectWithoutOwnerInput[]
    createMany?: ApiKeyCreateManyOwnerInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type CalendarAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CalendarAccountCreateWithoutUserInput, CalendarAccountUncheckedCreateWithoutUserInput> | CalendarAccountCreateWithoutUserInput[] | CalendarAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CalendarAccountCreateOrConnectWithoutUserInput | CalendarAccountCreateOrConnectWithoutUserInput[]
    createMany?: CalendarAccountCreateManyUserInputEnvelope
    connect?: CalendarAccountWhereUniqueInput | CalendarAccountWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type ApiCreditsPurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiCreditsPurchaseCreateWithoutUserInput, ApiCreditsPurchaseUncheckedCreateWithoutUserInput> | ApiCreditsPurchaseCreateWithoutUserInput[] | ApiCreditsPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiCreditsPurchaseCreateOrConnectWithoutUserInput | ApiCreditsPurchaseCreateOrConnectWithoutUserInput[]
    createMany?: ApiCreditsPurchaseCreateManyUserInputEnvelope
    connect?: ApiCreditsPurchaseWhereUniqueInput | ApiCreditsPurchaseWhereUniqueInput[]
  }

  export type ApiCreditsUsageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiCreditsUsageCreateWithoutUserInput, ApiCreditsUsageUncheckedCreateWithoutUserInput> | ApiCreditsUsageCreateWithoutUserInput[] | ApiCreditsUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiCreditsUsageCreateOrConnectWithoutUserInput | ApiCreditsUsageCreateOrConnectWithoutUserInput[]
    createMany?: ApiCreditsUsageCreateManyUserInputEnvelope
    connect?: ApiCreditsUsageWhereUniqueInput | ApiCreditsUsageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type EmailVerificationRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailVerificationRequestCreateWithoutUserInput, EmailVerificationRequestUncheckedCreateWithoutUserInput> | EmailVerificationRequestCreateWithoutUserInput[] | EmailVerificationRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationRequestCreateOrConnectWithoutUserInput | EmailVerificationRequestCreateOrConnectWithoutUserInput[]
    upsert?: EmailVerificationRequestUpsertWithWhereUniqueWithoutUserInput | EmailVerificationRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailVerificationRequestCreateManyUserInputEnvelope
    set?: EmailVerificationRequestWhereUniqueInput | EmailVerificationRequestWhereUniqueInput[]
    disconnect?: EmailVerificationRequestWhereUniqueInput | EmailVerificationRequestWhereUniqueInput[]
    delete?: EmailVerificationRequestWhereUniqueInput | EmailVerificationRequestWhereUniqueInput[]
    connect?: EmailVerificationRequestWhereUniqueInput | EmailVerificationRequestWhereUniqueInput[]
    update?: EmailVerificationRequestUpdateWithWhereUniqueWithoutUserInput | EmailVerificationRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailVerificationRequestUpdateManyWithWhereWithoutUserInput | EmailVerificationRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailVerificationRequestScalarWhereInput | EmailVerificationRequestScalarWhereInput[]
  }

  export type PasswordResetSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetSessionCreateWithoutUserInput, PasswordResetSessionUncheckedCreateWithoutUserInput> | PasswordResetSessionCreateWithoutUserInput[] | PasswordResetSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetSessionCreateOrConnectWithoutUserInput | PasswordResetSessionCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetSessionUpsertWithWhereUniqueWithoutUserInput | PasswordResetSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetSessionCreateManyUserInputEnvelope
    set?: PasswordResetSessionWhereUniqueInput | PasswordResetSessionWhereUniqueInput[]
    disconnect?: PasswordResetSessionWhereUniqueInput | PasswordResetSessionWhereUniqueInput[]
    delete?: PasswordResetSessionWhereUniqueInput | PasswordResetSessionWhereUniqueInput[]
    connect?: PasswordResetSessionWhereUniqueInput | PasswordResetSessionWhereUniqueInput[]
    update?: PasswordResetSessionUpdateWithWhereUniqueWithoutUserInput | PasswordResetSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetSessionUpdateManyWithWhereWithoutUserInput | PasswordResetSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetSessionScalarWhereInput | PasswordResetSessionScalarWhereInput[]
  }

  export type ApiKeyUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ApiKeyCreateWithoutOwnerInput, ApiKeyUncheckedCreateWithoutOwnerInput> | ApiKeyCreateWithoutOwnerInput[] | ApiKeyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutOwnerInput | ApiKeyCreateOrConnectWithoutOwnerInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutOwnerInput | ApiKeyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ApiKeyCreateManyOwnerInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutOwnerInput | ApiKeyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutOwnerInput | ApiKeyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type CalendarAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<CalendarAccountCreateWithoutUserInput, CalendarAccountUncheckedCreateWithoutUserInput> | CalendarAccountCreateWithoutUserInput[] | CalendarAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CalendarAccountCreateOrConnectWithoutUserInput | CalendarAccountCreateOrConnectWithoutUserInput[]
    upsert?: CalendarAccountUpsertWithWhereUniqueWithoutUserInput | CalendarAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CalendarAccountCreateManyUserInputEnvelope
    set?: CalendarAccountWhereUniqueInput | CalendarAccountWhereUniqueInput[]
    disconnect?: CalendarAccountWhereUniqueInput | CalendarAccountWhereUniqueInput[]
    delete?: CalendarAccountWhereUniqueInput | CalendarAccountWhereUniqueInput[]
    connect?: CalendarAccountWhereUniqueInput | CalendarAccountWhereUniqueInput[]
    update?: CalendarAccountUpdateWithWhereUniqueWithoutUserInput | CalendarAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CalendarAccountUpdateManyWithWhereWithoutUserInput | CalendarAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CalendarAccountScalarWhereInput | CalendarAccountScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type ApiCreditsPurchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiCreditsPurchaseCreateWithoutUserInput, ApiCreditsPurchaseUncheckedCreateWithoutUserInput> | ApiCreditsPurchaseCreateWithoutUserInput[] | ApiCreditsPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiCreditsPurchaseCreateOrConnectWithoutUserInput | ApiCreditsPurchaseCreateOrConnectWithoutUserInput[]
    upsert?: ApiCreditsPurchaseUpsertWithWhereUniqueWithoutUserInput | ApiCreditsPurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiCreditsPurchaseCreateManyUserInputEnvelope
    set?: ApiCreditsPurchaseWhereUniqueInput | ApiCreditsPurchaseWhereUniqueInput[]
    disconnect?: ApiCreditsPurchaseWhereUniqueInput | ApiCreditsPurchaseWhereUniqueInput[]
    delete?: ApiCreditsPurchaseWhereUniqueInput | ApiCreditsPurchaseWhereUniqueInput[]
    connect?: ApiCreditsPurchaseWhereUniqueInput | ApiCreditsPurchaseWhereUniqueInput[]
    update?: ApiCreditsPurchaseUpdateWithWhereUniqueWithoutUserInput | ApiCreditsPurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiCreditsPurchaseUpdateManyWithWhereWithoutUserInput | ApiCreditsPurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiCreditsPurchaseScalarWhereInput | ApiCreditsPurchaseScalarWhereInput[]
  }

  export type ApiCreditsUsageUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiCreditsUsageCreateWithoutUserInput, ApiCreditsUsageUncheckedCreateWithoutUserInput> | ApiCreditsUsageCreateWithoutUserInput[] | ApiCreditsUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiCreditsUsageCreateOrConnectWithoutUserInput | ApiCreditsUsageCreateOrConnectWithoutUserInput[]
    upsert?: ApiCreditsUsageUpsertWithWhereUniqueWithoutUserInput | ApiCreditsUsageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiCreditsUsageCreateManyUserInputEnvelope
    set?: ApiCreditsUsageWhereUniqueInput | ApiCreditsUsageWhereUniqueInput[]
    disconnect?: ApiCreditsUsageWhereUniqueInput | ApiCreditsUsageWhereUniqueInput[]
    delete?: ApiCreditsUsageWhereUniqueInput | ApiCreditsUsageWhereUniqueInput[]
    connect?: ApiCreditsUsageWhereUniqueInput | ApiCreditsUsageWhereUniqueInput[]
    update?: ApiCreditsUsageUpdateWithWhereUniqueWithoutUserInput | ApiCreditsUsageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiCreditsUsageUpdateManyWithWhereWithoutUserInput | ApiCreditsUsageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiCreditsUsageScalarWhereInput | ApiCreditsUsageScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type EmailVerificationRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailVerificationRequestCreateWithoutUserInput, EmailVerificationRequestUncheckedCreateWithoutUserInput> | EmailVerificationRequestCreateWithoutUserInput[] | EmailVerificationRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationRequestCreateOrConnectWithoutUserInput | EmailVerificationRequestCreateOrConnectWithoutUserInput[]
    upsert?: EmailVerificationRequestUpsertWithWhereUniqueWithoutUserInput | EmailVerificationRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailVerificationRequestCreateManyUserInputEnvelope
    set?: EmailVerificationRequestWhereUniqueInput | EmailVerificationRequestWhereUniqueInput[]
    disconnect?: EmailVerificationRequestWhereUniqueInput | EmailVerificationRequestWhereUniqueInput[]
    delete?: EmailVerificationRequestWhereUniqueInput | EmailVerificationRequestWhereUniqueInput[]
    connect?: EmailVerificationRequestWhereUniqueInput | EmailVerificationRequestWhereUniqueInput[]
    update?: EmailVerificationRequestUpdateWithWhereUniqueWithoutUserInput | EmailVerificationRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailVerificationRequestUpdateManyWithWhereWithoutUserInput | EmailVerificationRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailVerificationRequestScalarWhereInput | EmailVerificationRequestScalarWhereInput[]
  }

  export type PasswordResetSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetSessionCreateWithoutUserInput, PasswordResetSessionUncheckedCreateWithoutUserInput> | PasswordResetSessionCreateWithoutUserInput[] | PasswordResetSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetSessionCreateOrConnectWithoutUserInput | PasswordResetSessionCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetSessionUpsertWithWhereUniqueWithoutUserInput | PasswordResetSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetSessionCreateManyUserInputEnvelope
    set?: PasswordResetSessionWhereUniqueInput | PasswordResetSessionWhereUniqueInput[]
    disconnect?: PasswordResetSessionWhereUniqueInput | PasswordResetSessionWhereUniqueInput[]
    delete?: PasswordResetSessionWhereUniqueInput | PasswordResetSessionWhereUniqueInput[]
    connect?: PasswordResetSessionWhereUniqueInput | PasswordResetSessionWhereUniqueInput[]
    update?: PasswordResetSessionUpdateWithWhereUniqueWithoutUserInput | PasswordResetSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetSessionUpdateManyWithWhereWithoutUserInput | PasswordResetSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetSessionScalarWhereInput | PasswordResetSessionScalarWhereInput[]
  }

  export type ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ApiKeyCreateWithoutOwnerInput, ApiKeyUncheckedCreateWithoutOwnerInput> | ApiKeyCreateWithoutOwnerInput[] | ApiKeyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutOwnerInput | ApiKeyCreateOrConnectWithoutOwnerInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutOwnerInput | ApiKeyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ApiKeyCreateManyOwnerInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutOwnerInput | ApiKeyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutOwnerInput | ApiKeyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type CalendarAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CalendarAccountCreateWithoutUserInput, CalendarAccountUncheckedCreateWithoutUserInput> | CalendarAccountCreateWithoutUserInput[] | CalendarAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CalendarAccountCreateOrConnectWithoutUserInput | CalendarAccountCreateOrConnectWithoutUserInput[]
    upsert?: CalendarAccountUpsertWithWhereUniqueWithoutUserInput | CalendarAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CalendarAccountCreateManyUserInputEnvelope
    set?: CalendarAccountWhereUniqueInput | CalendarAccountWhereUniqueInput[]
    disconnect?: CalendarAccountWhereUniqueInput | CalendarAccountWhereUniqueInput[]
    delete?: CalendarAccountWhereUniqueInput | CalendarAccountWhereUniqueInput[]
    connect?: CalendarAccountWhereUniqueInput | CalendarAccountWhereUniqueInput[]
    update?: CalendarAccountUpdateWithWhereUniqueWithoutUserInput | CalendarAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CalendarAccountUpdateManyWithWhereWithoutUserInput | CalendarAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CalendarAccountScalarWhereInput | CalendarAccountScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type ApiCreditsPurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiCreditsPurchaseCreateWithoutUserInput, ApiCreditsPurchaseUncheckedCreateWithoutUserInput> | ApiCreditsPurchaseCreateWithoutUserInput[] | ApiCreditsPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiCreditsPurchaseCreateOrConnectWithoutUserInput | ApiCreditsPurchaseCreateOrConnectWithoutUserInput[]
    upsert?: ApiCreditsPurchaseUpsertWithWhereUniqueWithoutUserInput | ApiCreditsPurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiCreditsPurchaseCreateManyUserInputEnvelope
    set?: ApiCreditsPurchaseWhereUniqueInput | ApiCreditsPurchaseWhereUniqueInput[]
    disconnect?: ApiCreditsPurchaseWhereUniqueInput | ApiCreditsPurchaseWhereUniqueInput[]
    delete?: ApiCreditsPurchaseWhereUniqueInput | ApiCreditsPurchaseWhereUniqueInput[]
    connect?: ApiCreditsPurchaseWhereUniqueInput | ApiCreditsPurchaseWhereUniqueInput[]
    update?: ApiCreditsPurchaseUpdateWithWhereUniqueWithoutUserInput | ApiCreditsPurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiCreditsPurchaseUpdateManyWithWhereWithoutUserInput | ApiCreditsPurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiCreditsPurchaseScalarWhereInput | ApiCreditsPurchaseScalarWhereInput[]
  }

  export type ApiCreditsUsageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiCreditsUsageCreateWithoutUserInput, ApiCreditsUsageUncheckedCreateWithoutUserInput> | ApiCreditsUsageCreateWithoutUserInput[] | ApiCreditsUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiCreditsUsageCreateOrConnectWithoutUserInput | ApiCreditsUsageCreateOrConnectWithoutUserInput[]
    upsert?: ApiCreditsUsageUpsertWithWhereUniqueWithoutUserInput | ApiCreditsUsageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiCreditsUsageCreateManyUserInputEnvelope
    set?: ApiCreditsUsageWhereUniqueInput | ApiCreditsUsageWhereUniqueInput[]
    disconnect?: ApiCreditsUsageWhereUniqueInput | ApiCreditsUsageWhereUniqueInput[]
    delete?: ApiCreditsUsageWhereUniqueInput | ApiCreditsUsageWhereUniqueInput[]
    connect?: ApiCreditsUsageWhereUniqueInput | ApiCreditsUsageWhereUniqueInput[]
    update?: ApiCreditsUsageUpdateWithWhereUniqueWithoutUserInput | ApiCreditsUsageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiCreditsUsageUpdateManyWithWhereWithoutUserInput | ApiCreditsUsageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiCreditsUsageScalarWhereInput | ApiCreditsUsageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    upsert?: UserUpsertWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionsInput, UserUpdateWithoutSubscriptionsInput>, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutEmailVerificationsInput = {
    create?: XOR<UserCreateWithoutEmailVerificationsInput, UserUncheckedCreateWithoutEmailVerificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailVerificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEmailVerificationsNestedInput = {
    create?: XOR<UserCreateWithoutEmailVerificationsInput, UserUncheckedCreateWithoutEmailVerificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailVerificationsInput
    upsert?: UserUpsertWithoutEmailVerificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailVerificationsInput, UserUpdateWithoutEmailVerificationsInput>, UserUncheckedUpdateWithoutEmailVerificationsInput>
  }

  export type UserCreateNestedOneWithoutPasswordResetsInput = {
    create?: XOR<UserCreateWithoutPasswordResetsInput, UserUncheckedCreateWithoutPasswordResetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPasswordResetsNestedInput = {
    create?: XOR<UserCreateWithoutPasswordResetsInput, UserUncheckedCreateWithoutPasswordResetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetsInput
    upsert?: UserUpsertWithoutPasswordResetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordResetsInput, UserUpdateWithoutPasswordResetsInput>, UserUncheckedUpdateWithoutPasswordResetsInput>
  }

  export type UserCreateNestedOneWithoutApiKeysInput = {
    create?: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput
    connect?: UserWhereUniqueInput
  }

  export type ApiUsageLogCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<ApiUsageLogCreateWithoutApiKeyInput, ApiUsageLogUncheckedCreateWithoutApiKeyInput> | ApiUsageLogCreateWithoutApiKeyInput[] | ApiUsageLogUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ApiUsageLogCreateOrConnectWithoutApiKeyInput | ApiUsageLogCreateOrConnectWithoutApiKeyInput[]
    createMany?: ApiUsageLogCreateManyApiKeyInputEnvelope
    connect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
  }

  export type ApiKeyPermissionCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<ApiKeyPermissionCreateWithoutApiKeyInput, ApiKeyPermissionUncheckedCreateWithoutApiKeyInput> | ApiKeyPermissionCreateWithoutApiKeyInput[] | ApiKeyPermissionUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ApiKeyPermissionCreateOrConnectWithoutApiKeyInput | ApiKeyPermissionCreateOrConnectWithoutApiKeyInput[]
    createMany?: ApiKeyPermissionCreateManyApiKeyInputEnvelope
    connect?: ApiKeyPermissionWhereUniqueInput | ApiKeyPermissionWhereUniqueInput[]
  }

  export type ApiUsageLogUncheckedCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<ApiUsageLogCreateWithoutApiKeyInput, ApiUsageLogUncheckedCreateWithoutApiKeyInput> | ApiUsageLogCreateWithoutApiKeyInput[] | ApiUsageLogUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ApiUsageLogCreateOrConnectWithoutApiKeyInput | ApiUsageLogCreateOrConnectWithoutApiKeyInput[]
    createMany?: ApiUsageLogCreateManyApiKeyInputEnvelope
    connect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
  }

  export type ApiKeyPermissionUncheckedCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<ApiKeyPermissionCreateWithoutApiKeyInput, ApiKeyPermissionUncheckedCreateWithoutApiKeyInput> | ApiKeyPermissionCreateWithoutApiKeyInput[] | ApiKeyPermissionUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ApiKeyPermissionCreateOrConnectWithoutApiKeyInput | ApiKeyPermissionCreateOrConnectWithoutApiKeyInput[]
    createMany?: ApiKeyPermissionCreateManyApiKeyInputEnvelope
    connect?: ApiKeyPermissionWhereUniqueInput | ApiKeyPermissionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutApiKeysNestedInput = {
    create?: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput
    upsert?: UserUpsertWithoutApiKeysInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApiKeysInput, UserUpdateWithoutApiKeysInput>, UserUncheckedUpdateWithoutApiKeysInput>
  }

  export type ApiUsageLogUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<ApiUsageLogCreateWithoutApiKeyInput, ApiUsageLogUncheckedCreateWithoutApiKeyInput> | ApiUsageLogCreateWithoutApiKeyInput[] | ApiUsageLogUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ApiUsageLogCreateOrConnectWithoutApiKeyInput | ApiUsageLogCreateOrConnectWithoutApiKeyInput[]
    upsert?: ApiUsageLogUpsertWithWhereUniqueWithoutApiKeyInput | ApiUsageLogUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: ApiUsageLogCreateManyApiKeyInputEnvelope
    set?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    disconnect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    delete?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    connect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    update?: ApiUsageLogUpdateWithWhereUniqueWithoutApiKeyInput | ApiUsageLogUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: ApiUsageLogUpdateManyWithWhereWithoutApiKeyInput | ApiUsageLogUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: ApiUsageLogScalarWhereInput | ApiUsageLogScalarWhereInput[]
  }

  export type ApiKeyPermissionUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<ApiKeyPermissionCreateWithoutApiKeyInput, ApiKeyPermissionUncheckedCreateWithoutApiKeyInput> | ApiKeyPermissionCreateWithoutApiKeyInput[] | ApiKeyPermissionUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ApiKeyPermissionCreateOrConnectWithoutApiKeyInput | ApiKeyPermissionCreateOrConnectWithoutApiKeyInput[]
    upsert?: ApiKeyPermissionUpsertWithWhereUniqueWithoutApiKeyInput | ApiKeyPermissionUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: ApiKeyPermissionCreateManyApiKeyInputEnvelope
    set?: ApiKeyPermissionWhereUniqueInput | ApiKeyPermissionWhereUniqueInput[]
    disconnect?: ApiKeyPermissionWhereUniqueInput | ApiKeyPermissionWhereUniqueInput[]
    delete?: ApiKeyPermissionWhereUniqueInput | ApiKeyPermissionWhereUniqueInput[]
    connect?: ApiKeyPermissionWhereUniqueInput | ApiKeyPermissionWhereUniqueInput[]
    update?: ApiKeyPermissionUpdateWithWhereUniqueWithoutApiKeyInput | ApiKeyPermissionUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: ApiKeyPermissionUpdateManyWithWhereWithoutApiKeyInput | ApiKeyPermissionUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: ApiKeyPermissionScalarWhereInput | ApiKeyPermissionScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ApiUsageLogUncheckedUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<ApiUsageLogCreateWithoutApiKeyInput, ApiUsageLogUncheckedCreateWithoutApiKeyInput> | ApiUsageLogCreateWithoutApiKeyInput[] | ApiUsageLogUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ApiUsageLogCreateOrConnectWithoutApiKeyInput | ApiUsageLogCreateOrConnectWithoutApiKeyInput[]
    upsert?: ApiUsageLogUpsertWithWhereUniqueWithoutApiKeyInput | ApiUsageLogUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: ApiUsageLogCreateManyApiKeyInputEnvelope
    set?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    disconnect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    delete?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    connect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    update?: ApiUsageLogUpdateWithWhereUniqueWithoutApiKeyInput | ApiUsageLogUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: ApiUsageLogUpdateManyWithWhereWithoutApiKeyInput | ApiUsageLogUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: ApiUsageLogScalarWhereInput | ApiUsageLogScalarWhereInput[]
  }

  export type ApiKeyPermissionUncheckedUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<ApiKeyPermissionCreateWithoutApiKeyInput, ApiKeyPermissionUncheckedCreateWithoutApiKeyInput> | ApiKeyPermissionCreateWithoutApiKeyInput[] | ApiKeyPermissionUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ApiKeyPermissionCreateOrConnectWithoutApiKeyInput | ApiKeyPermissionCreateOrConnectWithoutApiKeyInput[]
    upsert?: ApiKeyPermissionUpsertWithWhereUniqueWithoutApiKeyInput | ApiKeyPermissionUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: ApiKeyPermissionCreateManyApiKeyInputEnvelope
    set?: ApiKeyPermissionWhereUniqueInput | ApiKeyPermissionWhereUniqueInput[]
    disconnect?: ApiKeyPermissionWhereUniqueInput | ApiKeyPermissionWhereUniqueInput[]
    delete?: ApiKeyPermissionWhereUniqueInput | ApiKeyPermissionWhereUniqueInput[]
    connect?: ApiKeyPermissionWhereUniqueInput | ApiKeyPermissionWhereUniqueInput[]
    update?: ApiKeyPermissionUpdateWithWhereUniqueWithoutApiKeyInput | ApiKeyPermissionUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: ApiKeyPermissionUpdateManyWithWhereWithoutApiKeyInput | ApiKeyPermissionUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: ApiKeyPermissionScalarWhereInput | ApiKeyPermissionScalarWhereInput[]
  }

  export type ApiKeyCreateNestedOneWithoutApiKeyPermissionsInput = {
    create?: XOR<ApiKeyCreateWithoutApiKeyPermissionsInput, ApiKeyUncheckedCreateWithoutApiKeyPermissionsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutApiKeyPermissionsInput
    connect?: ApiKeyWhereUniqueInput
  }

  export type ApiKeyUpdateOneRequiredWithoutApiKeyPermissionsNestedInput = {
    create?: XOR<ApiKeyCreateWithoutApiKeyPermissionsInput, ApiKeyUncheckedCreateWithoutApiKeyPermissionsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutApiKeyPermissionsInput
    upsert?: ApiKeyUpsertWithoutApiKeyPermissionsInput
    connect?: ApiKeyWhereUniqueInput
    update?: XOR<XOR<ApiKeyUpdateToOneWithWhereWithoutApiKeyPermissionsInput, ApiKeyUpdateWithoutApiKeyPermissionsInput>, ApiKeyUncheckedUpdateWithoutApiKeyPermissionsInput>
  }

  export type UserCreateNestedOneWithoutApiCreditsPurchasesInput = {
    create?: XOR<UserCreateWithoutApiCreditsPurchasesInput, UserUncheckedCreateWithoutApiCreditsPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiCreditsPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutApiCreditsPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutApiCreditsPurchasesInput, UserUncheckedCreateWithoutApiCreditsPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiCreditsPurchasesInput
    upsert?: UserUpsertWithoutApiCreditsPurchasesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApiCreditsPurchasesInput, UserUpdateWithoutApiCreditsPurchasesInput>, UserUncheckedUpdateWithoutApiCreditsPurchasesInput>
  }

  export type UserCreateNestedOneWithoutApiCreditsUsagesInput = {
    create?: XOR<UserCreateWithoutApiCreditsUsagesInput, UserUncheckedCreateWithoutApiCreditsUsagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiCreditsUsagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutApiCreditsUsagesNestedInput = {
    create?: XOR<UserCreateWithoutApiCreditsUsagesInput, UserUncheckedCreateWithoutApiCreditsUsagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiCreditsUsagesInput
    upsert?: UserUpsertWithoutApiCreditsUsagesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApiCreditsUsagesInput, UserUpdateWithoutApiCreditsUsagesInput>, UserUncheckedUpdateWithoutApiCreditsUsagesInput>
  }

  export type ApiKeyCreateNestedOneWithoutUsageLogsInput = {
    create?: XOR<ApiKeyCreateWithoutUsageLogsInput, ApiKeyUncheckedCreateWithoutUsageLogsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUsageLogsInput
    connect?: ApiKeyWhereUniqueInput
  }

  export type ApiKeyUpdateOneRequiredWithoutUsageLogsNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUsageLogsInput, ApiKeyUncheckedCreateWithoutUsageLogsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUsageLogsInput
    upsert?: ApiKeyUpsertWithoutUsageLogsInput
    connect?: ApiKeyWhereUniqueInput
    update?: XOR<XOR<ApiKeyUpdateToOneWithWhereWithoutUsageLogsInput, ApiKeyUpdateWithoutUsageLogsInput>, ApiKeyUncheckedUpdateWithoutUsageLogsInput>
  }

  export type UserCreateNestedOneWithoutCalendarAccountsInput = {
    create?: XOR<UserCreateWithoutCalendarAccountsInput, UserUncheckedCreateWithoutCalendarAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCalendarAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumCalendarProviderFieldUpdateOperationsInput = {
    set?: $Enums.CalendarProvider
  }

  export type UserUpdateOneRequiredWithoutCalendarAccountsNestedInput = {
    create?: XOR<UserCreateWithoutCalendarAccountsInput, UserUncheckedCreateWithoutCalendarAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCalendarAccountsInput
    upsert?: UserUpsertWithoutCalendarAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCalendarAccountsInput, UserUpdateWithoutCalendarAccountsInput>, UserUncheckedUpdateWithoutCalendarAccountsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
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

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
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

  export type NestedEnumCalendarProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.CalendarProvider | EnumCalendarProviderFieldRefInput<$PrismaModel>
    in?: $Enums.CalendarProvider[] | ListEnumCalendarProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.CalendarProvider[] | ListEnumCalendarProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumCalendarProviderFilter<$PrismaModel> | $Enums.CalendarProvider
  }

  export type NestedEnumCalendarProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CalendarProvider | EnumCalendarProviderFieldRefInput<$PrismaModel>
    in?: $Enums.CalendarProvider[] | ListEnumCalendarProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.CalendarProvider[] | ListEnumCalendarProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumCalendarProviderWithAggregatesFilter<$PrismaModel> | $Enums.CalendarProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCalendarProviderFilter<$PrismaModel>
    _max?: NestedEnumCalendarProviderFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    twoFactorVerified?: boolean
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    twoFactorVerified?: boolean
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmailVerificationRequestCreateWithoutUserInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
  }

  export type EmailVerificationRequestUncheckedCreateWithoutUserInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
  }

  export type EmailVerificationRequestCreateOrConnectWithoutUserInput = {
    where: EmailVerificationRequestWhereUniqueInput
    create: XOR<EmailVerificationRequestCreateWithoutUserInput, EmailVerificationRequestUncheckedCreateWithoutUserInput>
  }

  export type EmailVerificationRequestCreateManyUserInputEnvelope = {
    data: EmailVerificationRequestCreateManyUserInput | EmailVerificationRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PasswordResetSessionCreateWithoutUserInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
    emailVerified?: boolean
    twoFactorVerified?: boolean
  }

  export type PasswordResetSessionUncheckedCreateWithoutUserInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
    emailVerified?: boolean
    twoFactorVerified?: boolean
  }

  export type PasswordResetSessionCreateOrConnectWithoutUserInput = {
    where: PasswordResetSessionWhereUniqueInput
    create: XOR<PasswordResetSessionCreateWithoutUserInput, PasswordResetSessionUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetSessionCreateManyUserInputEnvelope = {
    data: PasswordResetSessionCreateManyUserInput | PasswordResetSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyCreateWithoutOwnerInput = {
    id?: string
    key: string
    unlimited: boolean
    minInterval?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    lastRequest?: Date | string | null
    usageLogs?: ApiUsageLogCreateNestedManyWithoutApiKeyInput
    apiKeyPermissions?: ApiKeyPermissionCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateWithoutOwnerInput = {
    id?: string
    key: string
    unlimited: boolean
    minInterval?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    lastRequest?: Date | string | null
    usageLogs?: ApiUsageLogUncheckedCreateNestedManyWithoutApiKeyInput
    apiKeyPermissions?: ApiKeyPermissionUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyCreateOrConnectWithoutOwnerInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutOwnerInput, ApiKeyUncheckedCreateWithoutOwnerInput>
  }

  export type ApiKeyCreateManyOwnerInputEnvelope = {
    data: ApiKeyCreateManyOwnerInput | ApiKeyCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type CalendarAccountCreateWithoutUserInput = {
    provider?: $Enums.CalendarProvider
    providerAccountId: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    calendarId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarAccountUncheckedCreateWithoutUserInput = {
    id?: number
    provider?: $Enums.CalendarProvider
    providerAccountId: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    calendarId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarAccountCreateOrConnectWithoutUserInput = {
    where: CalendarAccountWhereUniqueInput
    create: XOR<CalendarAccountCreateWithoutUserInput, CalendarAccountUncheckedCreateWithoutUserInput>
  }

  export type CalendarAccountCreateManyUserInputEnvelope = {
    data: CalendarAccountCreateManyUserInput | CalendarAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    stripeCustomerId: string
    stripeSubscriptionId: string
    status: string
    priceId: string
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    stripeCustomerId: string
    stripeSubscriptionId: string
    status: string
    priceId: string
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateManyUserInputEnvelope = {
    data: SubscriptionCreateManyUserInput | SubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApiCreditsPurchaseCreateWithoutUserInput = {
    id?: string
    credits: number
    purchaseDate?: Date | string
  }

  export type ApiCreditsPurchaseUncheckedCreateWithoutUserInput = {
    id?: string
    credits: number
    purchaseDate?: Date | string
  }

  export type ApiCreditsPurchaseCreateOrConnectWithoutUserInput = {
    where: ApiCreditsPurchaseWhereUniqueInput
    create: XOR<ApiCreditsPurchaseCreateWithoutUserInput, ApiCreditsPurchaseUncheckedCreateWithoutUserInput>
  }

  export type ApiCreditsPurchaseCreateManyUserInputEnvelope = {
    data: ApiCreditsPurchaseCreateManyUserInput | ApiCreditsPurchaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApiCreditsUsageCreateWithoutUserInput = {
    id?: string
    apiKeyId: string
    credits: number
    usageDate?: Date | string
  }

  export type ApiCreditsUsageUncheckedCreateWithoutUserInput = {
    id?: string
    apiKeyId: string
    credits: number
    usageDate?: Date | string
  }

  export type ApiCreditsUsageCreateOrConnectWithoutUserInput = {
    where: ApiCreditsUsageWhereUniqueInput
    create: XOR<ApiCreditsUsageCreateWithoutUserInput, ApiCreditsUsageUncheckedCreateWithoutUserInput>
  }

  export type ApiCreditsUsageCreateManyUserInputEnvelope = {
    data: ApiCreditsUsageCreateManyUserInput | ApiCreditsUsageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: IntFilter<"Session"> | number
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    twoFactorVerified?: BoolFilter<"Session"> | boolean
  }

  export type EmailVerificationRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailVerificationRequestWhereUniqueInput
    update: XOR<EmailVerificationRequestUpdateWithoutUserInput, EmailVerificationRequestUncheckedUpdateWithoutUserInput>
    create: XOR<EmailVerificationRequestCreateWithoutUserInput, EmailVerificationRequestUncheckedCreateWithoutUserInput>
  }

  export type EmailVerificationRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailVerificationRequestWhereUniqueInput
    data: XOR<EmailVerificationRequestUpdateWithoutUserInput, EmailVerificationRequestUncheckedUpdateWithoutUserInput>
  }

  export type EmailVerificationRequestUpdateManyWithWhereWithoutUserInput = {
    where: EmailVerificationRequestScalarWhereInput
    data: XOR<EmailVerificationRequestUpdateManyMutationInput, EmailVerificationRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type EmailVerificationRequestScalarWhereInput = {
    AND?: EmailVerificationRequestScalarWhereInput | EmailVerificationRequestScalarWhereInput[]
    OR?: EmailVerificationRequestScalarWhereInput[]
    NOT?: EmailVerificationRequestScalarWhereInput | EmailVerificationRequestScalarWhereInput[]
    id?: StringFilter<"EmailVerificationRequest"> | string
    userId?: IntFilter<"EmailVerificationRequest"> | number
    email?: StringFilter<"EmailVerificationRequest"> | string
    code?: StringFilter<"EmailVerificationRequest"> | string
    expiresAt?: DateTimeFilter<"EmailVerificationRequest"> | Date | string
  }

  export type PasswordResetSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: PasswordResetSessionWhereUniqueInput
    update: XOR<PasswordResetSessionUpdateWithoutUserInput, PasswordResetSessionUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordResetSessionCreateWithoutUserInput, PasswordResetSessionUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: PasswordResetSessionWhereUniqueInput
    data: XOR<PasswordResetSessionUpdateWithoutUserInput, PasswordResetSessionUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetSessionUpdateManyWithWhereWithoutUserInput = {
    where: PasswordResetSessionScalarWhereInput
    data: XOR<PasswordResetSessionUpdateManyMutationInput, PasswordResetSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type PasswordResetSessionScalarWhereInput = {
    AND?: PasswordResetSessionScalarWhereInput | PasswordResetSessionScalarWhereInput[]
    OR?: PasswordResetSessionScalarWhereInput[]
    NOT?: PasswordResetSessionScalarWhereInput | PasswordResetSessionScalarWhereInput[]
    id?: StringFilter<"PasswordResetSession"> | string
    userId?: IntFilter<"PasswordResetSession"> | number
    email?: StringFilter<"PasswordResetSession"> | string
    code?: StringFilter<"PasswordResetSession"> | string
    expiresAt?: DateTimeFilter<"PasswordResetSession"> | Date | string
    emailVerified?: BoolFilter<"PasswordResetSession"> | boolean
    twoFactorVerified?: BoolFilter<"PasswordResetSession"> | boolean
  }

  export type ApiKeyUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ApiKeyWhereUniqueInput
    update: XOR<ApiKeyUpdateWithoutOwnerInput, ApiKeyUncheckedUpdateWithoutOwnerInput>
    create: XOR<ApiKeyCreateWithoutOwnerInput, ApiKeyUncheckedCreateWithoutOwnerInput>
  }

  export type ApiKeyUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ApiKeyWhereUniqueInput
    data: XOR<ApiKeyUpdateWithoutOwnerInput, ApiKeyUncheckedUpdateWithoutOwnerInput>
  }

  export type ApiKeyUpdateManyWithWhereWithoutOwnerInput = {
    where: ApiKeyScalarWhereInput
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ApiKeyScalarWhereInput = {
    AND?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    OR?: ApiKeyScalarWhereInput[]
    NOT?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    key?: StringFilter<"ApiKey"> | string
    unlimited?: BoolFilter<"ApiKey"> | boolean
    minInterval?: IntFilter<"ApiKey"> | number
    ownerId?: IntNullableFilter<"ApiKey"> | number | null
    name?: StringFilter<"ApiKey"> | string
    description?: StringNullableFilter<"ApiKey"> | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    lastRequest?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
  }

  export type CalendarAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: CalendarAccountWhereUniqueInput
    update: XOR<CalendarAccountUpdateWithoutUserInput, CalendarAccountUncheckedUpdateWithoutUserInput>
    create: XOR<CalendarAccountCreateWithoutUserInput, CalendarAccountUncheckedCreateWithoutUserInput>
  }

  export type CalendarAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: CalendarAccountWhereUniqueInput
    data: XOR<CalendarAccountUpdateWithoutUserInput, CalendarAccountUncheckedUpdateWithoutUserInput>
  }

  export type CalendarAccountUpdateManyWithWhereWithoutUserInput = {
    where: CalendarAccountScalarWhereInput
    data: XOR<CalendarAccountUpdateManyMutationInput, CalendarAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type CalendarAccountScalarWhereInput = {
    AND?: CalendarAccountScalarWhereInput | CalendarAccountScalarWhereInput[]
    OR?: CalendarAccountScalarWhereInput[]
    NOT?: CalendarAccountScalarWhereInput | CalendarAccountScalarWhereInput[]
    id?: IntFilter<"CalendarAccount"> | number
    userId?: IntFilter<"CalendarAccount"> | number
    provider?: EnumCalendarProviderFilter<"CalendarAccount"> | $Enums.CalendarProvider
    providerAccountId?: StringFilter<"CalendarAccount"> | string
    accessToken?: StringFilter<"CalendarAccount"> | string
    refreshToken?: StringNullableFilter<"CalendarAccount"> | string | null
    expiresAt?: DateTimeNullableFilter<"CalendarAccount"> | Date | string | null
    scope?: StringNullableFilter<"CalendarAccount"> | string | null
    calendarId?: StringNullableFilter<"CalendarAccount"> | string | null
    createdAt?: DateTimeFilter<"CalendarAccount"> | Date | string
    updatedAt?: DateTimeFilter<"CalendarAccount"> | Date | string
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: IntFilter<"Subscription"> | number
    stripeCustomerId?: StringFilter<"Subscription"> | string
    stripeSubscriptionId?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    priceId?: StringFilter<"Subscription"> | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type ApiCreditsPurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: ApiCreditsPurchaseWhereUniqueInput
    update: XOR<ApiCreditsPurchaseUpdateWithoutUserInput, ApiCreditsPurchaseUncheckedUpdateWithoutUserInput>
    create: XOR<ApiCreditsPurchaseCreateWithoutUserInput, ApiCreditsPurchaseUncheckedCreateWithoutUserInput>
  }

  export type ApiCreditsPurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: ApiCreditsPurchaseWhereUniqueInput
    data: XOR<ApiCreditsPurchaseUpdateWithoutUserInput, ApiCreditsPurchaseUncheckedUpdateWithoutUserInput>
  }

  export type ApiCreditsPurchaseUpdateManyWithWhereWithoutUserInput = {
    where: ApiCreditsPurchaseScalarWhereInput
    data: XOR<ApiCreditsPurchaseUpdateManyMutationInput, ApiCreditsPurchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type ApiCreditsPurchaseScalarWhereInput = {
    AND?: ApiCreditsPurchaseScalarWhereInput | ApiCreditsPurchaseScalarWhereInput[]
    OR?: ApiCreditsPurchaseScalarWhereInput[]
    NOT?: ApiCreditsPurchaseScalarWhereInput | ApiCreditsPurchaseScalarWhereInput[]
    id?: StringFilter<"ApiCreditsPurchase"> | string
    credits?: IntFilter<"ApiCreditsPurchase"> | number
    purchaseDate?: DateTimeFilter<"ApiCreditsPurchase"> | Date | string
    userId?: IntNullableFilter<"ApiCreditsPurchase"> | number | null
  }

  export type ApiCreditsUsageUpsertWithWhereUniqueWithoutUserInput = {
    where: ApiCreditsUsageWhereUniqueInput
    update: XOR<ApiCreditsUsageUpdateWithoutUserInput, ApiCreditsUsageUncheckedUpdateWithoutUserInput>
    create: XOR<ApiCreditsUsageCreateWithoutUserInput, ApiCreditsUsageUncheckedCreateWithoutUserInput>
  }

  export type ApiCreditsUsageUpdateWithWhereUniqueWithoutUserInput = {
    where: ApiCreditsUsageWhereUniqueInput
    data: XOR<ApiCreditsUsageUpdateWithoutUserInput, ApiCreditsUsageUncheckedUpdateWithoutUserInput>
  }

  export type ApiCreditsUsageUpdateManyWithWhereWithoutUserInput = {
    where: ApiCreditsUsageScalarWhereInput
    data: XOR<ApiCreditsUsageUpdateManyMutationInput, ApiCreditsUsageUncheckedUpdateManyWithoutUserInput>
  }

  export type ApiCreditsUsageScalarWhereInput = {
    AND?: ApiCreditsUsageScalarWhereInput | ApiCreditsUsageScalarWhereInput[]
    OR?: ApiCreditsUsageScalarWhereInput[]
    NOT?: ApiCreditsUsageScalarWhereInput | ApiCreditsUsageScalarWhereInput[]
    id?: StringFilter<"ApiCreditsUsage"> | string
    apiKeyId?: StringFilter<"ApiCreditsUsage"> | string
    credits?: IntFilter<"ApiCreditsUsage"> | number
    usageDate?: DateTimeFilter<"ApiCreditsUsage"> | Date | string
    userId?: IntNullableFilter<"ApiCreditsUsage"> | number | null
  }

  export type UserCreateWithoutSubscriptionsInput = {
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    sessions?: SessionCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountCreateNestedManyWithoutUserInput
    apiCreditsPurchases?: ApiCreditsPurchaseCreateNestedManyWithoutUserInput
    apiCreditsUsages?: ApiCreditsUsageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id?: number
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountUncheckedCreateNestedManyWithoutUserInput
    apiCreditsPurchases?: ApiCreditsPurchaseUncheckedCreateNestedManyWithoutUserInput
    apiCreditsUsages?: ApiCreditsUsageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
  }

  export type UserUpsertWithoutSubscriptionsInput = {
    update: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateWithoutSubscriptionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    sessions?: SessionUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUpdateManyWithoutUserNestedInput
    apiCreditsPurchases?: ApiCreditsPurchaseUpdateManyWithoutUserNestedInput
    apiCreditsUsages?: ApiCreditsUsageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUncheckedUpdateManyWithoutUserNestedInput
    apiCreditsPurchases?: ApiCreditsPurchaseUncheckedUpdateManyWithoutUserNestedInput
    apiCreditsUsages?: ApiCreditsUsageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    emailVerifications?: EmailVerificationRequestCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    apiCreditsPurchases?: ApiCreditsPurchaseCreateNestedManyWithoutUserInput
    apiCreditsUsages?: ApiCreditsUsageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    emailVerifications?: EmailVerificationRequestUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    apiCreditsPurchases?: ApiCreditsPurchaseUncheckedCreateNestedManyWithoutUserInput
    apiCreditsUsages?: ApiCreditsUsageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    emailVerifications?: EmailVerificationRequestUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    apiCreditsPurchases?: ApiCreditsPurchaseUpdateManyWithoutUserNestedInput
    apiCreditsUsages?: ApiCreditsUsageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    emailVerifications?: EmailVerificationRequestUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    apiCreditsPurchases?: ApiCreditsPurchaseUncheckedUpdateManyWithoutUserNestedInput
    apiCreditsUsages?: ApiCreditsUsageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEmailVerificationsInput = {
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    sessions?: SessionCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    apiCreditsPurchases?: ApiCreditsPurchaseCreateNestedManyWithoutUserInput
    apiCreditsUsages?: ApiCreditsUsageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmailVerificationsInput = {
    id?: number
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    apiCreditsPurchases?: ApiCreditsPurchaseUncheckedCreateNestedManyWithoutUserInput
    apiCreditsUsages?: ApiCreditsUsageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmailVerificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailVerificationsInput, UserUncheckedCreateWithoutEmailVerificationsInput>
  }

  export type UserUpsertWithoutEmailVerificationsInput = {
    update: XOR<UserUpdateWithoutEmailVerificationsInput, UserUncheckedUpdateWithoutEmailVerificationsInput>
    create: XOR<UserCreateWithoutEmailVerificationsInput, UserUncheckedCreateWithoutEmailVerificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmailVerificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailVerificationsInput, UserUncheckedUpdateWithoutEmailVerificationsInput>
  }

  export type UserUpdateWithoutEmailVerificationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    sessions?: SessionUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    apiCreditsPurchases?: ApiCreditsPurchaseUpdateManyWithoutUserNestedInput
    apiCreditsUsages?: ApiCreditsUsageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailVerificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    apiCreditsPurchases?: ApiCreditsPurchaseUncheckedUpdateManyWithoutUserNestedInput
    apiCreditsUsages?: ApiCreditsUsageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPasswordResetsInput = {
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    sessions?: SessionCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    apiCreditsPurchases?: ApiCreditsPurchaseCreateNestedManyWithoutUserInput
    apiCreditsUsages?: ApiCreditsUsageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPasswordResetsInput = {
    id?: number
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    apiCreditsPurchases?: ApiCreditsPurchaseUncheckedCreateNestedManyWithoutUserInput
    apiCreditsUsages?: ApiCreditsUsageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPasswordResetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordResetsInput, UserUncheckedCreateWithoutPasswordResetsInput>
  }

  export type UserUpsertWithoutPasswordResetsInput = {
    update: XOR<UserUpdateWithoutPasswordResetsInput, UserUncheckedUpdateWithoutPasswordResetsInput>
    create: XOR<UserCreateWithoutPasswordResetsInput, UserUncheckedCreateWithoutPasswordResetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordResetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordResetsInput, UserUncheckedUpdateWithoutPasswordResetsInput>
  }

  export type UserUpdateWithoutPasswordResetsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    sessions?: SessionUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    apiCreditsPurchases?: ApiCreditsPurchaseUpdateManyWithoutUserNestedInput
    apiCreditsUsages?: ApiCreditsUsageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordResetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    apiCreditsPurchases?: ApiCreditsPurchaseUncheckedUpdateManyWithoutUserNestedInput
    apiCreditsUsages?: ApiCreditsUsageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutApiKeysInput = {
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    sessions?: SessionCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionCreateNestedManyWithoutUserInput
    calendarAccounts?: CalendarAccountCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    apiCreditsPurchases?: ApiCreditsPurchaseCreateNestedManyWithoutUserInput
    apiCreditsUsages?: ApiCreditsUsageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApiKeysInput = {
    id?: number
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionUncheckedCreateNestedManyWithoutUserInput
    calendarAccounts?: CalendarAccountUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    apiCreditsPurchases?: ApiCreditsPurchaseUncheckedCreateNestedManyWithoutUserInput
    apiCreditsUsages?: ApiCreditsUsageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApiKeysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
  }

  export type ApiUsageLogCreateWithoutApiKeyInput = {
    id?: string
    timestamp?: Date | string
    endpoint: string
    params: JsonNullValueInput | InputJsonValue
    statusCode: number
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type ApiUsageLogUncheckedCreateWithoutApiKeyInput = {
    id?: string
    timestamp?: Date | string
    endpoint: string
    params: JsonNullValueInput | InputJsonValue
    statusCode: number
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type ApiUsageLogCreateOrConnectWithoutApiKeyInput = {
    where: ApiUsageLogWhereUniqueInput
    create: XOR<ApiUsageLogCreateWithoutApiKeyInput, ApiUsageLogUncheckedCreateWithoutApiKeyInput>
  }

  export type ApiUsageLogCreateManyApiKeyInputEnvelope = {
    data: ApiUsageLogCreateManyApiKeyInput | ApiUsageLogCreateManyApiKeyInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyPermissionCreateWithoutApiKeyInput = {
    id?: string
    permission: string
  }

  export type ApiKeyPermissionUncheckedCreateWithoutApiKeyInput = {
    id?: string
    permission: string
  }

  export type ApiKeyPermissionCreateOrConnectWithoutApiKeyInput = {
    where: ApiKeyPermissionWhereUniqueInput
    create: XOR<ApiKeyPermissionCreateWithoutApiKeyInput, ApiKeyPermissionUncheckedCreateWithoutApiKeyInput>
  }

  export type ApiKeyPermissionCreateManyApiKeyInputEnvelope = {
    data: ApiKeyPermissionCreateManyApiKeyInput | ApiKeyPermissionCreateManyApiKeyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutApiKeysInput = {
    update: XOR<UserUpdateWithoutApiKeysInput, UserUncheckedUpdateWithoutApiKeysInput>
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApiKeysInput, UserUncheckedUpdateWithoutApiKeysInput>
  }

  export type UserUpdateWithoutApiKeysInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    sessions?: SessionUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUpdateManyWithoutUserNestedInput
    calendarAccounts?: CalendarAccountUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    apiCreditsPurchases?: ApiCreditsPurchaseUpdateManyWithoutUserNestedInput
    apiCreditsUsages?: ApiCreditsUsageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApiKeysInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUncheckedUpdateManyWithoutUserNestedInput
    calendarAccounts?: CalendarAccountUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    apiCreditsPurchases?: ApiCreditsPurchaseUncheckedUpdateManyWithoutUserNestedInput
    apiCreditsUsages?: ApiCreditsUsageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ApiUsageLogUpsertWithWhereUniqueWithoutApiKeyInput = {
    where: ApiUsageLogWhereUniqueInput
    update: XOR<ApiUsageLogUpdateWithoutApiKeyInput, ApiUsageLogUncheckedUpdateWithoutApiKeyInput>
    create: XOR<ApiUsageLogCreateWithoutApiKeyInput, ApiUsageLogUncheckedCreateWithoutApiKeyInput>
  }

  export type ApiUsageLogUpdateWithWhereUniqueWithoutApiKeyInput = {
    where: ApiUsageLogWhereUniqueInput
    data: XOR<ApiUsageLogUpdateWithoutApiKeyInput, ApiUsageLogUncheckedUpdateWithoutApiKeyInput>
  }

  export type ApiUsageLogUpdateManyWithWhereWithoutApiKeyInput = {
    where: ApiUsageLogScalarWhereInput
    data: XOR<ApiUsageLogUpdateManyMutationInput, ApiUsageLogUncheckedUpdateManyWithoutApiKeyInput>
  }

  export type ApiUsageLogScalarWhereInput = {
    AND?: ApiUsageLogScalarWhereInput | ApiUsageLogScalarWhereInput[]
    OR?: ApiUsageLogScalarWhereInput[]
    NOT?: ApiUsageLogScalarWhereInput | ApiUsageLogScalarWhereInput[]
    id?: StringFilter<"ApiUsageLog"> | string
    timestamp?: DateTimeFilter<"ApiUsageLog"> | Date | string
    endpoint?: StringFilter<"ApiUsageLog"> | string
    params?: JsonFilter<"ApiUsageLog">
    statusCode?: IntFilter<"ApiUsageLog"> | number
    ipAddress?: StringNullableFilter<"ApiUsageLog"> | string | null
    userAgent?: StringNullableFilter<"ApiUsageLog"> | string | null
    apiKeyId?: StringFilter<"ApiUsageLog"> | string
  }

  export type ApiKeyPermissionUpsertWithWhereUniqueWithoutApiKeyInput = {
    where: ApiKeyPermissionWhereUniqueInput
    update: XOR<ApiKeyPermissionUpdateWithoutApiKeyInput, ApiKeyPermissionUncheckedUpdateWithoutApiKeyInput>
    create: XOR<ApiKeyPermissionCreateWithoutApiKeyInput, ApiKeyPermissionUncheckedCreateWithoutApiKeyInput>
  }

  export type ApiKeyPermissionUpdateWithWhereUniqueWithoutApiKeyInput = {
    where: ApiKeyPermissionWhereUniqueInput
    data: XOR<ApiKeyPermissionUpdateWithoutApiKeyInput, ApiKeyPermissionUncheckedUpdateWithoutApiKeyInput>
  }

  export type ApiKeyPermissionUpdateManyWithWhereWithoutApiKeyInput = {
    where: ApiKeyPermissionScalarWhereInput
    data: XOR<ApiKeyPermissionUpdateManyMutationInput, ApiKeyPermissionUncheckedUpdateManyWithoutApiKeyInput>
  }

  export type ApiKeyPermissionScalarWhereInput = {
    AND?: ApiKeyPermissionScalarWhereInput | ApiKeyPermissionScalarWhereInput[]
    OR?: ApiKeyPermissionScalarWhereInput[]
    NOT?: ApiKeyPermissionScalarWhereInput | ApiKeyPermissionScalarWhereInput[]
    id?: StringFilter<"ApiKeyPermission"> | string
    apiKeyId?: StringFilter<"ApiKeyPermission"> | string
    permission?: StringFilter<"ApiKeyPermission"> | string
  }

  export type ApiKeyCreateWithoutApiKeyPermissionsInput = {
    id?: string
    key: string
    unlimited: boolean
    minInterval?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    lastRequest?: Date | string | null
    owner?: UserCreateNestedOneWithoutApiKeysInput
    usageLogs?: ApiUsageLogCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateWithoutApiKeyPermissionsInput = {
    id?: string
    key: string
    unlimited: boolean
    minInterval?: number
    ownerId?: number | null
    name: string
    description?: string | null
    createdAt?: Date | string
    lastRequest?: Date | string | null
    usageLogs?: ApiUsageLogUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyCreateOrConnectWithoutApiKeyPermissionsInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutApiKeyPermissionsInput, ApiKeyUncheckedCreateWithoutApiKeyPermissionsInput>
  }

  export type ApiKeyUpsertWithoutApiKeyPermissionsInput = {
    update: XOR<ApiKeyUpdateWithoutApiKeyPermissionsInput, ApiKeyUncheckedUpdateWithoutApiKeyPermissionsInput>
    create: XOR<ApiKeyCreateWithoutApiKeyPermissionsInput, ApiKeyUncheckedCreateWithoutApiKeyPermissionsInput>
    where?: ApiKeyWhereInput
  }

  export type ApiKeyUpdateToOneWithWhereWithoutApiKeyPermissionsInput = {
    where?: ApiKeyWhereInput
    data: XOR<ApiKeyUpdateWithoutApiKeyPermissionsInput, ApiKeyUncheckedUpdateWithoutApiKeyPermissionsInput>
  }

  export type ApiKeyUpdateWithoutApiKeyPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    unlimited?: BoolFieldUpdateOperationsInput | boolean
    minInterval?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRequest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneWithoutApiKeysNestedInput
    usageLogs?: ApiUsageLogUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutApiKeyPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    unlimited?: BoolFieldUpdateOperationsInput | boolean
    minInterval?: IntFieldUpdateOperationsInput | number
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRequest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageLogs?: ApiUsageLogUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type UserCreateWithoutApiCreditsPurchasesInput = {
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    sessions?: SessionCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    apiCreditsUsages?: ApiCreditsUsageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApiCreditsPurchasesInput = {
    id?: number
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    apiCreditsUsages?: ApiCreditsUsageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApiCreditsPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApiCreditsPurchasesInput, UserUncheckedCreateWithoutApiCreditsPurchasesInput>
  }

  export type UserUpsertWithoutApiCreditsPurchasesInput = {
    update: XOR<UserUpdateWithoutApiCreditsPurchasesInput, UserUncheckedUpdateWithoutApiCreditsPurchasesInput>
    create: XOR<UserCreateWithoutApiCreditsPurchasesInput, UserUncheckedCreateWithoutApiCreditsPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApiCreditsPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApiCreditsPurchasesInput, UserUncheckedUpdateWithoutApiCreditsPurchasesInput>
  }

  export type UserUpdateWithoutApiCreditsPurchasesInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    sessions?: SessionUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    apiCreditsUsages?: ApiCreditsUsageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApiCreditsPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    apiCreditsUsages?: ApiCreditsUsageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutApiCreditsUsagesInput = {
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    sessions?: SessionCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    apiCreditsPurchases?: ApiCreditsPurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApiCreditsUsagesInput = {
    id?: number
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    apiCreditsPurchases?: ApiCreditsPurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApiCreditsUsagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApiCreditsUsagesInput, UserUncheckedCreateWithoutApiCreditsUsagesInput>
  }

  export type UserUpsertWithoutApiCreditsUsagesInput = {
    update: XOR<UserUpdateWithoutApiCreditsUsagesInput, UserUncheckedUpdateWithoutApiCreditsUsagesInput>
    create: XOR<UserCreateWithoutApiCreditsUsagesInput, UserUncheckedCreateWithoutApiCreditsUsagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApiCreditsUsagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApiCreditsUsagesInput, UserUncheckedUpdateWithoutApiCreditsUsagesInput>
  }

  export type UserUpdateWithoutApiCreditsUsagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    sessions?: SessionUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    apiCreditsPurchases?: ApiCreditsPurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApiCreditsUsagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    apiCreditsPurchases?: ApiCreditsPurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ApiKeyCreateWithoutUsageLogsInput = {
    id?: string
    key: string
    unlimited: boolean
    minInterval?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    lastRequest?: Date | string | null
    owner?: UserCreateNestedOneWithoutApiKeysInput
    apiKeyPermissions?: ApiKeyPermissionCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateWithoutUsageLogsInput = {
    id?: string
    key: string
    unlimited: boolean
    minInterval?: number
    ownerId?: number | null
    name: string
    description?: string | null
    createdAt?: Date | string
    lastRequest?: Date | string | null
    apiKeyPermissions?: ApiKeyPermissionUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyCreateOrConnectWithoutUsageLogsInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutUsageLogsInput, ApiKeyUncheckedCreateWithoutUsageLogsInput>
  }

  export type ApiKeyUpsertWithoutUsageLogsInput = {
    update: XOR<ApiKeyUpdateWithoutUsageLogsInput, ApiKeyUncheckedUpdateWithoutUsageLogsInput>
    create: XOR<ApiKeyCreateWithoutUsageLogsInput, ApiKeyUncheckedCreateWithoutUsageLogsInput>
    where?: ApiKeyWhereInput
  }

  export type ApiKeyUpdateToOneWithWhereWithoutUsageLogsInput = {
    where?: ApiKeyWhereInput
    data: XOR<ApiKeyUpdateWithoutUsageLogsInput, ApiKeyUncheckedUpdateWithoutUsageLogsInput>
  }

  export type ApiKeyUpdateWithoutUsageLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    unlimited?: BoolFieldUpdateOperationsInput | boolean
    minInterval?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRequest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneWithoutApiKeysNestedInput
    apiKeyPermissions?: ApiKeyPermissionUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutUsageLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    unlimited?: BoolFieldUpdateOperationsInput | boolean
    minInterval?: IntFieldUpdateOperationsInput | number
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRequest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apiKeyPermissions?: ApiKeyPermissionUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type UserCreateWithoutCalendarAccountsInput = {
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    sessions?: SessionCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    apiCreditsPurchases?: ApiCreditsPurchaseCreateNestedManyWithoutUserInput
    apiCreditsUsages?: ApiCreditsUsageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCalendarAccountsInput = {
    id?: number
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    apiCreditsPurchases?: ApiCreditsPurchaseUncheckedCreateNestedManyWithoutUserInput
    apiCreditsUsages?: ApiCreditsUsageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCalendarAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCalendarAccountsInput, UserUncheckedCreateWithoutCalendarAccountsInput>
  }

  export type UserUpsertWithoutCalendarAccountsInput = {
    update: XOR<UserUpdateWithoutCalendarAccountsInput, UserUncheckedUpdateWithoutCalendarAccountsInput>
    create: XOR<UserCreateWithoutCalendarAccountsInput, UserUncheckedCreateWithoutCalendarAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCalendarAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCalendarAccountsInput, UserUncheckedUpdateWithoutCalendarAccountsInput>
  }

  export type UserUpdateWithoutCalendarAccountsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    sessions?: SessionUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    apiCreditsPurchases?: ApiCreditsPurchaseUpdateManyWithoutUserNestedInput
    apiCreditsUsages?: ApiCreditsUsageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCalendarAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    apiCreditsPurchases?: ApiCreditsPurchaseUncheckedUpdateManyWithoutUserNestedInput
    apiCreditsUsages?: ApiCreditsUsageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    expiresAt: Date | string
    twoFactorVerified?: boolean
  }

  export type EmailVerificationRequestCreateManyUserInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
  }

  export type PasswordResetSessionCreateManyUserInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
    emailVerified?: boolean
    twoFactorVerified?: boolean
  }

  export type ApiKeyCreateManyOwnerInput = {
    id?: string
    key: string
    unlimited: boolean
    minInterval?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    lastRequest?: Date | string | null
  }

  export type CalendarAccountCreateManyUserInput = {
    id?: number
    provider?: $Enums.CalendarProvider
    providerAccountId: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    calendarId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateManyUserInput = {
    id?: string
    stripeCustomerId: string
    stripeSubscriptionId: string
    status: string
    priceId: string
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiCreditsPurchaseCreateManyUserInput = {
    id?: string
    credits: number
    purchaseDate?: Date | string
  }

  export type ApiCreditsUsageCreateManyUserInput = {
    id?: string
    apiKeyId: string
    credits: number
    usageDate?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailVerificationRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApiKeyUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    unlimited?: BoolFieldUpdateOperationsInput | boolean
    minInterval?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRequest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageLogs?: ApiUsageLogUpdateManyWithoutApiKeyNestedInput
    apiKeyPermissions?: ApiKeyPermissionUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    unlimited?: BoolFieldUpdateOperationsInput | boolean
    minInterval?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRequest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageLogs?: ApiUsageLogUncheckedUpdateManyWithoutApiKeyNestedInput
    apiKeyPermissions?: ApiKeyPermissionUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    unlimited?: BoolFieldUpdateOperationsInput | boolean
    minInterval?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRequest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CalendarAccountUpdateWithoutUserInput = {
    provider?: EnumCalendarProviderFieldUpdateOperationsInput | $Enums.CalendarProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarAccountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: EnumCalendarProviderFieldUpdateOperationsInput | $Enums.CalendarProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarAccountUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: EnumCalendarProviderFieldUpdateOperationsInput | $Enums.CalendarProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priceId?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priceId?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priceId?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCreditsPurchaseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCreditsPurchaseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCreditsPurchaseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCreditsUsageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    usageDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCreditsUsageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    usageDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCreditsUsageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    usageDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUsageLogCreateManyApiKeyInput = {
    id?: string
    timestamp?: Date | string
    endpoint: string
    params: JsonNullValueInput | InputJsonValue
    statusCode: number
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type ApiKeyPermissionCreateManyApiKeyInput = {
    id?: string
    permission: string
  }

  export type ApiUsageLogUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: StringFieldUpdateOperationsInput | string
    params?: JsonNullValueInput | InputJsonValue
    statusCode?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApiUsageLogUncheckedUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: StringFieldUpdateOperationsInput | string
    params?: JsonNullValueInput | InputJsonValue
    statusCode?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApiUsageLogUncheckedUpdateManyWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: StringFieldUpdateOperationsInput | string
    params?: JsonNullValueInput | InputJsonValue
    statusCode?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApiKeyPermissionUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
  }

  export type ApiKeyPermissionUncheckedUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
  }

  export type ApiKeyPermissionUncheckedUpdateManyWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
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