
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
 * Model LearningAccount
 * 
 */
export type LearningAccount = $Result.DefaultSelection<Prisma.$LearningAccountPayload>
/**
 * Model ApiKeyCreditsBalance
 * 
 */
export type ApiKeyCreditsBalance = $Result.DefaultSelection<Prisma.$ApiKeyCreditsBalancePayload>
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
 * Model api_credits_purchase
 * 
 */
export type api_credits_purchase = $Result.DefaultSelection<Prisma.$api_credits_purchasePayload>
/**
 * Model api_credits_usage
 * 
 */
export type api_credits_usage = $Result.DefaultSelection<Prisma.$api_credits_usagePayload>
/**
 * Model api_key_permission
 * 
 */
export type api_key_permission = $Result.DefaultSelection<Prisma.$api_key_permissionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AccountType: {
  WEBUNTIS: 'WEBUNTIS',
  MOODLE: 'MOODLE'
};

export type AccountType = (typeof AccountType)[keyof typeof AccountType]


export const CalendarProvider: {
  GOOGLE: 'GOOGLE',
  MICROSOFT: 'MICROSOFT',
  ICLOUD: 'ICLOUD'
};

export type CalendarProvider = (typeof CalendarProvider)[keyof typeof CalendarProvider]

}

export type AccountType = $Enums.AccountType

export const AccountType: typeof $Enums.AccountType

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
   * `prisma.learningAccount`: Exposes CRUD operations for the **LearningAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LearningAccounts
    * const learningAccounts = await prisma.learningAccount.findMany()
    * ```
    */
  get learningAccount(): Prisma.LearningAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKeyCreditsBalance`: Exposes CRUD operations for the **ApiKeyCreditsBalance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeyCreditsBalances
    * const apiKeyCreditsBalances = await prisma.apiKeyCreditsBalance.findMany()
    * ```
    */
  get apiKeyCreditsBalance(): Prisma.ApiKeyCreditsBalanceDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.api_credits_purchase`: Exposes CRUD operations for the **api_credits_purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Api_credits_purchases
    * const api_credits_purchases = await prisma.api_credits_purchase.findMany()
    * ```
    */
  get api_credits_purchase(): Prisma.api_credits_purchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.api_credits_usage`: Exposes CRUD operations for the **api_credits_usage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Api_credits_usages
    * const api_credits_usages = await prisma.api_credits_usage.findMany()
    * ```
    */
  get api_credits_usage(): Prisma.api_credits_usageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.api_key_permission`: Exposes CRUD operations for the **api_key_permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Api_key_permissions
    * const api_key_permissions = await prisma.api_key_permission.findMany()
    * ```
    */
  get api_key_permission(): Prisma.api_key_permissionDelegate<ExtArgs, ClientOptions>;
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
    LearningAccount: 'LearningAccount',
    ApiKeyCreditsBalance: 'ApiKeyCreditsBalance',
    Subscription: 'Subscription',
    Session: 'Session',
    EmailVerificationRequest: 'EmailVerificationRequest',
    PasswordResetSession: 'PasswordResetSession',
    ApiKey: 'ApiKey',
    ApiUsageLog: 'ApiUsageLog',
    TimetableCache: 'TimetableCache',
    CalendarAccount: 'CalendarAccount',
    api_credits_purchase: 'api_credits_purchase',
    api_credits_usage: 'api_credits_usage',
    api_key_permission: 'api_key_permission'
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
      modelProps: "user" | "learningAccount" | "apiKeyCreditsBalance" | "subscription" | "session" | "emailVerificationRequest" | "passwordResetSession" | "apiKey" | "apiUsageLog" | "timetableCache" | "calendarAccount" | "api_credits_purchase" | "api_credits_usage" | "api_key_permission"
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
      LearningAccount: {
        payload: Prisma.$LearningAccountPayload<ExtArgs>
        fields: Prisma.LearningAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LearningAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningAccountPayload>
          }
          findFirst: {
            args: Prisma.LearningAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningAccountPayload>
          }
          findMany: {
            args: Prisma.LearningAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningAccountPayload>[]
          }
          create: {
            args: Prisma.LearningAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningAccountPayload>
          }
          createMany: {
            args: Prisma.LearningAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LearningAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningAccountPayload>[]
          }
          delete: {
            args: Prisma.LearningAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningAccountPayload>
          }
          update: {
            args: Prisma.LearningAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningAccountPayload>
          }
          deleteMany: {
            args: Prisma.LearningAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LearningAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LearningAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningAccountPayload>[]
          }
          upsert: {
            args: Prisma.LearningAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningAccountPayload>
          }
          aggregate: {
            args: Prisma.LearningAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLearningAccount>
          }
          groupBy: {
            args: Prisma.LearningAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<LearningAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.LearningAccountCountArgs<ExtArgs>
            result: $Utils.Optional<LearningAccountCountAggregateOutputType> | number
          }
        }
      }
      ApiKeyCreditsBalance: {
        payload: Prisma.$ApiKeyCreditsBalancePayload<ExtArgs>
        fields: Prisma.ApiKeyCreditsBalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyCreditsBalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyCreditsBalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyCreditsBalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyCreditsBalancePayload>
          }
          findFirst: {
            args: Prisma.ApiKeyCreditsBalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyCreditsBalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyCreditsBalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyCreditsBalancePayload>
          }
          findMany: {
            args: Prisma.ApiKeyCreditsBalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyCreditsBalancePayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreditsBalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyCreditsBalancePayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreditsBalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreditsBalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyCreditsBalancePayload>[]
          }
          delete: {
            args: Prisma.ApiKeyCreditsBalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyCreditsBalancePayload>
          }
          update: {
            args: Prisma.ApiKeyCreditsBalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyCreditsBalancePayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyCreditsBalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyCreditsBalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyCreditsBalanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyCreditsBalancePayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyCreditsBalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyCreditsBalancePayload>
          }
          aggregate: {
            args: Prisma.ApiKeyCreditsBalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKeyCreditsBalance>
          }
          groupBy: {
            args: Prisma.ApiKeyCreditsBalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCreditsBalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCreditsBalanceCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCreditsBalanceCountAggregateOutputType> | number
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
      api_credits_purchase: {
        payload: Prisma.$api_credits_purchasePayload<ExtArgs>
        fields: Prisma.api_credits_purchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.api_credits_purchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_credits_purchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.api_credits_purchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_credits_purchasePayload>
          }
          findFirst: {
            args: Prisma.api_credits_purchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_credits_purchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.api_credits_purchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_credits_purchasePayload>
          }
          findMany: {
            args: Prisma.api_credits_purchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_credits_purchasePayload>[]
          }
          create: {
            args: Prisma.api_credits_purchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_credits_purchasePayload>
          }
          createMany: {
            args: Prisma.api_credits_purchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.api_credits_purchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_credits_purchasePayload>[]
          }
          delete: {
            args: Prisma.api_credits_purchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_credits_purchasePayload>
          }
          update: {
            args: Prisma.api_credits_purchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_credits_purchasePayload>
          }
          deleteMany: {
            args: Prisma.api_credits_purchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.api_credits_purchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.api_credits_purchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_credits_purchasePayload>[]
          }
          upsert: {
            args: Prisma.api_credits_purchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_credits_purchasePayload>
          }
          aggregate: {
            args: Prisma.Api_credits_purchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApi_credits_purchase>
          }
          groupBy: {
            args: Prisma.api_credits_purchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<Api_credits_purchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.api_credits_purchaseCountArgs<ExtArgs>
            result: $Utils.Optional<Api_credits_purchaseCountAggregateOutputType> | number
          }
        }
      }
      api_credits_usage: {
        payload: Prisma.$api_credits_usagePayload<ExtArgs>
        fields: Prisma.api_credits_usageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.api_credits_usageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_credits_usagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.api_credits_usageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_credits_usagePayload>
          }
          findFirst: {
            args: Prisma.api_credits_usageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_credits_usagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.api_credits_usageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_credits_usagePayload>
          }
          findMany: {
            args: Prisma.api_credits_usageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_credits_usagePayload>[]
          }
          create: {
            args: Prisma.api_credits_usageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_credits_usagePayload>
          }
          createMany: {
            args: Prisma.api_credits_usageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.api_credits_usageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_credits_usagePayload>[]
          }
          delete: {
            args: Prisma.api_credits_usageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_credits_usagePayload>
          }
          update: {
            args: Prisma.api_credits_usageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_credits_usagePayload>
          }
          deleteMany: {
            args: Prisma.api_credits_usageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.api_credits_usageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.api_credits_usageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_credits_usagePayload>[]
          }
          upsert: {
            args: Prisma.api_credits_usageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_credits_usagePayload>
          }
          aggregate: {
            args: Prisma.Api_credits_usageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApi_credits_usage>
          }
          groupBy: {
            args: Prisma.api_credits_usageGroupByArgs<ExtArgs>
            result: $Utils.Optional<Api_credits_usageGroupByOutputType>[]
          }
          count: {
            args: Prisma.api_credits_usageCountArgs<ExtArgs>
            result: $Utils.Optional<Api_credits_usageCountAggregateOutputType> | number
          }
        }
      }
      api_key_permission: {
        payload: Prisma.$api_key_permissionPayload<ExtArgs>
        fields: Prisma.api_key_permissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.api_key_permissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_key_permissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.api_key_permissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_key_permissionPayload>
          }
          findFirst: {
            args: Prisma.api_key_permissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_key_permissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.api_key_permissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_key_permissionPayload>
          }
          findMany: {
            args: Prisma.api_key_permissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_key_permissionPayload>[]
          }
          create: {
            args: Prisma.api_key_permissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_key_permissionPayload>
          }
          createMany: {
            args: Prisma.api_key_permissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.api_key_permissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_key_permissionPayload>[]
          }
          delete: {
            args: Prisma.api_key_permissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_key_permissionPayload>
          }
          update: {
            args: Prisma.api_key_permissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_key_permissionPayload>
          }
          deleteMany: {
            args: Prisma.api_key_permissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.api_key_permissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.api_key_permissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_key_permissionPayload>[]
          }
          upsert: {
            args: Prisma.api_key_permissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_key_permissionPayload>
          }
          aggregate: {
            args: Prisma.Api_key_permissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApi_key_permission>
          }
          groupBy: {
            args: Prisma.api_key_permissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Api_key_permissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.api_key_permissionCountArgs<ExtArgs>
            result: $Utils.Optional<Api_key_permissionCountAggregateOutputType> | number
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
    learningAccount?: LearningAccountOmit
    apiKeyCreditsBalance?: ApiKeyCreditsBalanceOmit
    subscription?: SubscriptionOmit
    session?: SessionOmit
    emailVerificationRequest?: EmailVerificationRequestOmit
    passwordResetSession?: PasswordResetSessionOmit
    apiKey?: ApiKeyOmit
    apiUsageLog?: ApiUsageLogOmit
    timetableCache?: TimetableCacheOmit
    calendarAccount?: CalendarAccountOmit
    api_credits_purchase?: api_credits_purchaseOmit
    api_credits_usage?: api_credits_usageOmit
    api_key_permission?: api_key_permissionOmit
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
    api_credits_purchase: number
    api_credits_usage: number
    apiKeys: number
    calendarAccounts: number
    emailVerifications: number
    passwordResets: number
    sessions: number
    creditsBalance: number
    LearningAccounts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api_credits_purchase?: boolean | UserCountOutputTypeCountApi_credits_purchaseArgs
    api_credits_usage?: boolean | UserCountOutputTypeCountApi_credits_usageArgs
    apiKeys?: boolean | UserCountOutputTypeCountApiKeysArgs
    calendarAccounts?: boolean | UserCountOutputTypeCountCalendarAccountsArgs
    emailVerifications?: boolean | UserCountOutputTypeCountEmailVerificationsArgs
    passwordResets?: boolean | UserCountOutputTypeCountPasswordResetsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    creditsBalance?: boolean | UserCountOutputTypeCountCreditsBalanceArgs
    LearningAccounts?: boolean | UserCountOutputTypeCountLearningAccountsArgs
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
  export type UserCountOutputTypeCountApi_credits_purchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: api_credits_purchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApi_credits_usageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: api_credits_usageWhereInput
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreditsBalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyCreditsBalanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLearningAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningAccountWhereInput
  }


  /**
   * Count Type ApiKeyCountOutputType
   */

  export type ApiKeyCountOutputType = {
    api_key_permission: number
    usageLogs: number
  }

  export type ApiKeyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api_key_permission?: boolean | ApiKeyCountOutputTypeCountApi_key_permissionArgs
    usageLogs?: boolean | ApiKeyCountOutputTypeCountUsageLogsArgs
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
  export type ApiKeyCountOutputTypeCountApi_key_permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: api_key_permissionWhereInput
  }

  /**
   * ApiKeyCountOutputType without action
   */
  export type ApiKeyCountOutputTypeCountUsageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiUsageLogWhereInput
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
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    api_credits_purchase?: boolean | User$api_credits_purchaseArgs<ExtArgs>
    api_credits_usage?: boolean | User$api_credits_usageArgs<ExtArgs>
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    calendarAccounts?: boolean | User$calendarAccountsArgs<ExtArgs>
    emailVerifications?: boolean | User$emailVerificationsArgs<ExtArgs>
    passwordResets?: boolean | User$passwordResetsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    creditsBalance?: boolean | User$creditsBalanceArgs<ExtArgs>
    LearningAccounts?: boolean | User$LearningAccountsArgs<ExtArgs>
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
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    api_credits_purchase?: boolean | User$api_credits_purchaseArgs<ExtArgs>
    api_credits_usage?: boolean | User$api_credits_usageArgs<ExtArgs>
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    calendarAccounts?: boolean | User$calendarAccountsArgs<ExtArgs>
    emailVerifications?: boolean | User$emailVerificationsArgs<ExtArgs>
    passwordResets?: boolean | User$passwordResetsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    creditsBalance?: boolean | User$creditsBalanceArgs<ExtArgs>
    LearningAccounts?: boolean | User$LearningAccountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs> | null
      api_credits_purchase: Prisma.$api_credits_purchasePayload<ExtArgs>[]
      api_credits_usage: Prisma.$api_credits_usagePayload<ExtArgs>[]
      apiKeys: Prisma.$ApiKeyPayload<ExtArgs>[]
      calendarAccounts: Prisma.$CalendarAccountPayload<ExtArgs>[]
      emailVerifications: Prisma.$EmailVerificationRequestPayload<ExtArgs>[]
      passwordResets: Prisma.$PasswordResetSessionPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      creditsBalance: Prisma.$ApiKeyCreditsBalancePayload<ExtArgs>[]
      LearningAccounts: Prisma.$LearningAccountPayload<ExtArgs>[]
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
    subscriptions<T extends User$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionsArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    api_credits_purchase<T extends User$api_credits_purchaseArgs<ExtArgs> = {}>(args?: Subset<T, User$api_credits_purchaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_credits_purchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    api_credits_usage<T extends User$api_credits_usageArgs<ExtArgs> = {}>(args?: Subset<T, User$api_credits_usageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_credits_usagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiKeys<T extends User$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, User$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    calendarAccounts<T extends User$calendarAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$calendarAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emailVerifications<T extends User$emailVerificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$emailVerificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passwordResets<T extends User$passwordResetsArgs<ExtArgs> = {}>(args?: Subset<T, User$passwordResetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creditsBalance<T extends User$creditsBalanceArgs<ExtArgs> = {}>(args?: Subset<T, User$creditsBalanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyCreditsBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    LearningAccounts<T extends User$LearningAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$LearningAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
  }

  /**
   * User.api_credits_purchase
   */
  export type User$api_credits_purchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_purchase
     */
    select?: api_credits_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_purchase
     */
    omit?: api_credits_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_purchaseInclude<ExtArgs> | null
    where?: api_credits_purchaseWhereInput
    orderBy?: api_credits_purchaseOrderByWithRelationInput | api_credits_purchaseOrderByWithRelationInput[]
    cursor?: api_credits_purchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Api_credits_purchaseScalarFieldEnum | Api_credits_purchaseScalarFieldEnum[]
  }

  /**
   * User.api_credits_usage
   */
  export type User$api_credits_usageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_usage
     */
    select?: api_credits_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_usage
     */
    omit?: api_credits_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_usageInclude<ExtArgs> | null
    where?: api_credits_usageWhereInput
    orderBy?: api_credits_usageOrderByWithRelationInput | api_credits_usageOrderByWithRelationInput[]
    cursor?: api_credits_usageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Api_credits_usageScalarFieldEnum | Api_credits_usageScalarFieldEnum[]
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
   * User.creditsBalance
   */
  export type User$creditsBalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyCreditsBalance
     */
    select?: ApiKeyCreditsBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyCreditsBalance
     */
    omit?: ApiKeyCreditsBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyCreditsBalanceInclude<ExtArgs> | null
    where?: ApiKeyCreditsBalanceWhereInput
    orderBy?: ApiKeyCreditsBalanceOrderByWithRelationInput | ApiKeyCreditsBalanceOrderByWithRelationInput[]
    cursor?: ApiKeyCreditsBalanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyCreditsBalanceScalarFieldEnum | ApiKeyCreditsBalanceScalarFieldEnum[]
  }

  /**
   * User.LearningAccounts
   */
  export type User$LearningAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningAccount
     */
    select?: LearningAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningAccount
     */
    omit?: LearningAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningAccountInclude<ExtArgs> | null
    where?: LearningAccountWhereInput
    orderBy?: LearningAccountOrderByWithRelationInput | LearningAccountOrderByWithRelationInput[]
    cursor?: LearningAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LearningAccountScalarFieldEnum | LearningAccountScalarFieldEnum[]
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
   * Model LearningAccount
   */

  export type AggregateLearningAccount = {
    _count: LearningAccountCountAggregateOutputType | null
    _avg: LearningAccountAvgAggregateOutputType | null
    _sum: LearningAccountSumAggregateOutputType | null
    _min: LearningAccountMinAggregateOutputType | null
    _max: LearningAccountMaxAggregateOutputType | null
  }

  export type LearningAccountAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LearningAccountSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LearningAccountMinAggregateOutputType = {
    id: number | null
    userId: number | null
    type: $Enums.AccountType | null
    username: string | null
    passwordHash: string | null
    school: string | null
    baseUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningAccountMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    type: $Enums.AccountType | null
    username: string | null
    passwordHash: string | null
    school: string | null
    baseUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningAccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    username: number
    passwordHash: number
    school: number
    baseUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LearningAccountAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LearningAccountSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LearningAccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    username?: true
    passwordHash?: true
    school?: true
    baseUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningAccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    username?: true
    passwordHash?: true
    school?: true
    baseUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningAccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    username?: true
    passwordHash?: true
    school?: true
    baseUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LearningAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningAccount to aggregate.
     */
    where?: LearningAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningAccounts to fetch.
     */
    orderBy?: LearningAccountOrderByWithRelationInput | LearningAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LearningAccounts
    **/
    _count?: true | LearningAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearningAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearningAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningAccountMaxAggregateInputType
  }

  export type GetLearningAccountAggregateType<T extends LearningAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateLearningAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearningAccount[P]>
      : GetScalarType<T[P], AggregateLearningAccount[P]>
  }




  export type LearningAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningAccountWhereInput
    orderBy?: LearningAccountOrderByWithAggregationInput | LearningAccountOrderByWithAggregationInput[]
    by: LearningAccountScalarFieldEnum[] | LearningAccountScalarFieldEnum
    having?: LearningAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningAccountCountAggregateInputType | true
    _avg?: LearningAccountAvgAggregateInputType
    _sum?: LearningAccountSumAggregateInputType
    _min?: LearningAccountMinAggregateInputType
    _max?: LearningAccountMaxAggregateInputType
  }

  export type LearningAccountGroupByOutputType = {
    id: number
    userId: number
    type: $Enums.AccountType
    username: string
    passwordHash: string
    school: string
    baseUrl: string
    createdAt: Date
    updatedAt: Date
    _count: LearningAccountCountAggregateOutputType | null
    _avg: LearningAccountAvgAggregateOutputType | null
    _sum: LearningAccountSumAggregateOutputType | null
    _min: LearningAccountMinAggregateOutputType | null
    _max: LearningAccountMaxAggregateOutputType | null
  }

  type GetLearningAccountGroupByPayload<T extends LearningAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LearningAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningAccountGroupByOutputType[P]>
            : GetScalarType<T[P], LearningAccountGroupByOutputType[P]>
        }
      >
    >


  export type LearningAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    username?: boolean
    passwordHash?: boolean
    school?: boolean
    baseUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningAccount"]>

  export type LearningAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    username?: boolean
    passwordHash?: boolean
    school?: boolean
    baseUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningAccount"]>

  export type LearningAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    username?: boolean
    passwordHash?: boolean
    school?: boolean
    baseUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningAccount"]>

  export type LearningAccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    username?: boolean
    passwordHash?: boolean
    school?: boolean
    baseUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LearningAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "username" | "passwordHash" | "school" | "baseUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["learningAccount"]>
  export type LearningAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LearningAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LearningAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LearningAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LearningAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      type: $Enums.AccountType
      username: string
      passwordHash: string
      school: string
      baseUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["learningAccount"]>
    composites: {}
  }

  type LearningAccountGetPayload<S extends boolean | null | undefined | LearningAccountDefaultArgs> = $Result.GetResult<Prisma.$LearningAccountPayload, S>

  type LearningAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LearningAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LearningAccountCountAggregateInputType | true
    }

  export interface LearningAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LearningAccount'], meta: { name: 'LearningAccount' } }
    /**
     * Find zero or one LearningAccount that matches the filter.
     * @param {LearningAccountFindUniqueArgs} args - Arguments to find a LearningAccount
     * @example
     * // Get one LearningAccount
     * const learningAccount = await prisma.learningAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LearningAccountFindUniqueArgs>(args: SelectSubset<T, LearningAccountFindUniqueArgs<ExtArgs>>): Prisma__LearningAccountClient<$Result.GetResult<Prisma.$LearningAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LearningAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LearningAccountFindUniqueOrThrowArgs} args - Arguments to find a LearningAccount
     * @example
     * // Get one LearningAccount
     * const learningAccount = await prisma.learningAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LearningAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, LearningAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LearningAccountClient<$Result.GetResult<Prisma.$LearningAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningAccountFindFirstArgs} args - Arguments to find a LearningAccount
     * @example
     * // Get one LearningAccount
     * const learningAccount = await prisma.learningAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LearningAccountFindFirstArgs>(args?: SelectSubset<T, LearningAccountFindFirstArgs<ExtArgs>>): Prisma__LearningAccountClient<$Result.GetResult<Prisma.$LearningAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningAccountFindFirstOrThrowArgs} args - Arguments to find a LearningAccount
     * @example
     * // Get one LearningAccount
     * const learningAccount = await prisma.learningAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LearningAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, LearningAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__LearningAccountClient<$Result.GetResult<Prisma.$LearningAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LearningAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LearningAccounts
     * const learningAccounts = await prisma.learningAccount.findMany()
     * 
     * // Get first 10 LearningAccounts
     * const learningAccounts = await prisma.learningAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningAccountWithIdOnly = await prisma.learningAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LearningAccountFindManyArgs>(args?: SelectSubset<T, LearningAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LearningAccount.
     * @param {LearningAccountCreateArgs} args - Arguments to create a LearningAccount.
     * @example
     * // Create one LearningAccount
     * const LearningAccount = await prisma.learningAccount.create({
     *   data: {
     *     // ... data to create a LearningAccount
     *   }
     * })
     * 
     */
    create<T extends LearningAccountCreateArgs>(args: SelectSubset<T, LearningAccountCreateArgs<ExtArgs>>): Prisma__LearningAccountClient<$Result.GetResult<Prisma.$LearningAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LearningAccounts.
     * @param {LearningAccountCreateManyArgs} args - Arguments to create many LearningAccounts.
     * @example
     * // Create many LearningAccounts
     * const learningAccount = await prisma.learningAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LearningAccountCreateManyArgs>(args?: SelectSubset<T, LearningAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LearningAccounts and returns the data saved in the database.
     * @param {LearningAccountCreateManyAndReturnArgs} args - Arguments to create many LearningAccounts.
     * @example
     * // Create many LearningAccounts
     * const learningAccount = await prisma.learningAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LearningAccounts and only return the `id`
     * const learningAccountWithIdOnly = await prisma.learningAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LearningAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, LearningAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LearningAccount.
     * @param {LearningAccountDeleteArgs} args - Arguments to delete one LearningAccount.
     * @example
     * // Delete one LearningAccount
     * const LearningAccount = await prisma.learningAccount.delete({
     *   where: {
     *     // ... filter to delete one LearningAccount
     *   }
     * })
     * 
     */
    delete<T extends LearningAccountDeleteArgs>(args: SelectSubset<T, LearningAccountDeleteArgs<ExtArgs>>): Prisma__LearningAccountClient<$Result.GetResult<Prisma.$LearningAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LearningAccount.
     * @param {LearningAccountUpdateArgs} args - Arguments to update one LearningAccount.
     * @example
     * // Update one LearningAccount
     * const learningAccount = await prisma.learningAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LearningAccountUpdateArgs>(args: SelectSubset<T, LearningAccountUpdateArgs<ExtArgs>>): Prisma__LearningAccountClient<$Result.GetResult<Prisma.$LearningAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LearningAccounts.
     * @param {LearningAccountDeleteManyArgs} args - Arguments to filter LearningAccounts to delete.
     * @example
     * // Delete a few LearningAccounts
     * const { count } = await prisma.learningAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LearningAccountDeleteManyArgs>(args?: SelectSubset<T, LearningAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LearningAccounts
     * const learningAccount = await prisma.learningAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LearningAccountUpdateManyArgs>(args: SelectSubset<T, LearningAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningAccounts and returns the data updated in the database.
     * @param {LearningAccountUpdateManyAndReturnArgs} args - Arguments to update many LearningAccounts.
     * @example
     * // Update many LearningAccounts
     * const learningAccount = await prisma.learningAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LearningAccounts and only return the `id`
     * const learningAccountWithIdOnly = await prisma.learningAccount.updateManyAndReturn({
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
    updateManyAndReturn<T extends LearningAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, LearningAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LearningAccount.
     * @param {LearningAccountUpsertArgs} args - Arguments to update or create a LearningAccount.
     * @example
     * // Update or create a LearningAccount
     * const learningAccount = await prisma.learningAccount.upsert({
     *   create: {
     *     // ... data to create a LearningAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LearningAccount we want to update
     *   }
     * })
     */
    upsert<T extends LearningAccountUpsertArgs>(args: SelectSubset<T, LearningAccountUpsertArgs<ExtArgs>>): Prisma__LearningAccountClient<$Result.GetResult<Prisma.$LearningAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LearningAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningAccountCountArgs} args - Arguments to filter LearningAccounts to count.
     * @example
     * // Count the number of LearningAccounts
     * const count = await prisma.learningAccount.count({
     *   where: {
     *     // ... the filter for the LearningAccounts we want to count
     *   }
     * })
    **/
    count<T extends LearningAccountCountArgs>(
      args?: Subset<T, LearningAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LearningAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LearningAccountAggregateArgs>(args: Subset<T, LearningAccountAggregateArgs>): Prisma.PrismaPromise<GetLearningAccountAggregateType<T>>

    /**
     * Group by LearningAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningAccountGroupByArgs} args - Group by arguments.
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
      T extends LearningAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningAccountGroupByArgs['orderBy'] }
        : { orderBy?: LearningAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LearningAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LearningAccount model
   */
  readonly fields: LearningAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LearningAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LearningAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LearningAccount model
   */
  interface LearningAccountFieldRefs {
    readonly id: FieldRef<"LearningAccount", 'Int'>
    readonly userId: FieldRef<"LearningAccount", 'Int'>
    readonly type: FieldRef<"LearningAccount", 'AccountType'>
    readonly username: FieldRef<"LearningAccount", 'String'>
    readonly passwordHash: FieldRef<"LearningAccount", 'String'>
    readonly school: FieldRef<"LearningAccount", 'String'>
    readonly baseUrl: FieldRef<"LearningAccount", 'String'>
    readonly createdAt: FieldRef<"LearningAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"LearningAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LearningAccount findUnique
   */
  export type LearningAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningAccount
     */
    select?: LearningAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningAccount
     */
    omit?: LearningAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningAccountInclude<ExtArgs> | null
    /**
     * Filter, which LearningAccount to fetch.
     */
    where: LearningAccountWhereUniqueInput
  }

  /**
   * LearningAccount findUniqueOrThrow
   */
  export type LearningAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningAccount
     */
    select?: LearningAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningAccount
     */
    omit?: LearningAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningAccountInclude<ExtArgs> | null
    /**
     * Filter, which LearningAccount to fetch.
     */
    where: LearningAccountWhereUniqueInput
  }

  /**
   * LearningAccount findFirst
   */
  export type LearningAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningAccount
     */
    select?: LearningAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningAccount
     */
    omit?: LearningAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningAccountInclude<ExtArgs> | null
    /**
     * Filter, which LearningAccount to fetch.
     */
    where?: LearningAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningAccounts to fetch.
     */
    orderBy?: LearningAccountOrderByWithRelationInput | LearningAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningAccounts.
     */
    cursor?: LearningAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningAccounts.
     */
    distinct?: LearningAccountScalarFieldEnum | LearningAccountScalarFieldEnum[]
  }

  /**
   * LearningAccount findFirstOrThrow
   */
  export type LearningAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningAccount
     */
    select?: LearningAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningAccount
     */
    omit?: LearningAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningAccountInclude<ExtArgs> | null
    /**
     * Filter, which LearningAccount to fetch.
     */
    where?: LearningAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningAccounts to fetch.
     */
    orderBy?: LearningAccountOrderByWithRelationInput | LearningAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningAccounts.
     */
    cursor?: LearningAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningAccounts.
     */
    distinct?: LearningAccountScalarFieldEnum | LearningAccountScalarFieldEnum[]
  }

  /**
   * LearningAccount findMany
   */
  export type LearningAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningAccount
     */
    select?: LearningAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningAccount
     */
    omit?: LearningAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningAccountInclude<ExtArgs> | null
    /**
     * Filter, which LearningAccounts to fetch.
     */
    where?: LearningAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningAccounts to fetch.
     */
    orderBy?: LearningAccountOrderByWithRelationInput | LearningAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LearningAccounts.
     */
    cursor?: LearningAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningAccounts.
     */
    skip?: number
    distinct?: LearningAccountScalarFieldEnum | LearningAccountScalarFieldEnum[]
  }

  /**
   * LearningAccount create
   */
  export type LearningAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningAccount
     */
    select?: LearningAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningAccount
     */
    omit?: LearningAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a LearningAccount.
     */
    data: XOR<LearningAccountCreateInput, LearningAccountUncheckedCreateInput>
  }

  /**
   * LearningAccount createMany
   */
  export type LearningAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LearningAccounts.
     */
    data: LearningAccountCreateManyInput | LearningAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LearningAccount createManyAndReturn
   */
  export type LearningAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningAccount
     */
    select?: LearningAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningAccount
     */
    omit?: LearningAccountOmit<ExtArgs> | null
    /**
     * The data used to create many LearningAccounts.
     */
    data: LearningAccountCreateManyInput | LearningAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningAccount update
   */
  export type LearningAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningAccount
     */
    select?: LearningAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningAccount
     */
    omit?: LearningAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a LearningAccount.
     */
    data: XOR<LearningAccountUpdateInput, LearningAccountUncheckedUpdateInput>
    /**
     * Choose, which LearningAccount to update.
     */
    where: LearningAccountWhereUniqueInput
  }

  /**
   * LearningAccount updateMany
   */
  export type LearningAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LearningAccounts.
     */
    data: XOR<LearningAccountUpdateManyMutationInput, LearningAccountUncheckedUpdateManyInput>
    /**
     * Filter which LearningAccounts to update
     */
    where?: LearningAccountWhereInput
    /**
     * Limit how many LearningAccounts to update.
     */
    limit?: number
  }

  /**
   * LearningAccount updateManyAndReturn
   */
  export type LearningAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningAccount
     */
    select?: LearningAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningAccount
     */
    omit?: LearningAccountOmit<ExtArgs> | null
    /**
     * The data used to update LearningAccounts.
     */
    data: XOR<LearningAccountUpdateManyMutationInput, LearningAccountUncheckedUpdateManyInput>
    /**
     * Filter which LearningAccounts to update
     */
    where?: LearningAccountWhereInput
    /**
     * Limit how many LearningAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningAccount upsert
   */
  export type LearningAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningAccount
     */
    select?: LearningAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningAccount
     */
    omit?: LearningAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the LearningAccount to update in case it exists.
     */
    where: LearningAccountWhereUniqueInput
    /**
     * In case the LearningAccount found by the `where` argument doesn't exist, create a new LearningAccount with this data.
     */
    create: XOR<LearningAccountCreateInput, LearningAccountUncheckedCreateInput>
    /**
     * In case the LearningAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningAccountUpdateInput, LearningAccountUncheckedUpdateInput>
  }

  /**
   * LearningAccount delete
   */
  export type LearningAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningAccount
     */
    select?: LearningAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningAccount
     */
    omit?: LearningAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningAccountInclude<ExtArgs> | null
    /**
     * Filter which LearningAccount to delete.
     */
    where: LearningAccountWhereUniqueInput
  }

  /**
   * LearningAccount deleteMany
   */
  export type LearningAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningAccounts to delete
     */
    where?: LearningAccountWhereInput
    /**
     * Limit how many LearningAccounts to delete.
     */
    limit?: number
  }

  /**
   * LearningAccount without action
   */
  export type LearningAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningAccount
     */
    select?: LearningAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningAccount
     */
    omit?: LearningAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningAccountInclude<ExtArgs> | null
  }


  /**
   * Model ApiKeyCreditsBalance
   */

  export type AggregateApiKeyCreditsBalance = {
    _count: ApiKeyCreditsBalanceCountAggregateOutputType | null
    _avg: ApiKeyCreditsBalanceAvgAggregateOutputType | null
    _sum: ApiKeyCreditsBalanceSumAggregateOutputType | null
    _min: ApiKeyCreditsBalanceMinAggregateOutputType | null
    _max: ApiKeyCreditsBalanceMaxAggregateOutputType | null
  }

  export type ApiKeyCreditsBalanceAvgAggregateOutputType = {
    userId: number | null
    credits: number | null
  }

  export type ApiKeyCreditsBalanceSumAggregateOutputType = {
    userId: number | null
    credits: number | null
  }

  export type ApiKeyCreditsBalanceMinAggregateOutputType = {
    id: string | null
    userId: number | null
    credits: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiKeyCreditsBalanceMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    credits: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiKeyCreditsBalanceCountAggregateOutputType = {
    id: number
    userId: number
    credits: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApiKeyCreditsBalanceAvgAggregateInputType = {
    userId?: true
    credits?: true
  }

  export type ApiKeyCreditsBalanceSumAggregateInputType = {
    userId?: true
    credits?: true
  }

  export type ApiKeyCreditsBalanceMinAggregateInputType = {
    id?: true
    userId?: true
    credits?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiKeyCreditsBalanceMaxAggregateInputType = {
    id?: true
    userId?: true
    credits?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiKeyCreditsBalanceCountAggregateInputType = {
    id?: true
    userId?: true
    credits?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApiKeyCreditsBalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeyCreditsBalance to aggregate.
     */
    where?: ApiKeyCreditsBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeyCreditsBalances to fetch.
     */
    orderBy?: ApiKeyCreditsBalanceOrderByWithRelationInput | ApiKeyCreditsBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyCreditsBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeyCreditsBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeyCreditsBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeyCreditsBalances
    **/
    _count?: true | ApiKeyCreditsBalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiKeyCreditsBalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiKeyCreditsBalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyCreditsBalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyCreditsBalanceMaxAggregateInputType
  }

  export type GetApiKeyCreditsBalanceAggregateType<T extends ApiKeyCreditsBalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKeyCreditsBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKeyCreditsBalance[P]>
      : GetScalarType<T[P], AggregateApiKeyCreditsBalance[P]>
  }




  export type ApiKeyCreditsBalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyCreditsBalanceWhereInput
    orderBy?: ApiKeyCreditsBalanceOrderByWithAggregationInput | ApiKeyCreditsBalanceOrderByWithAggregationInput[]
    by: ApiKeyCreditsBalanceScalarFieldEnum[] | ApiKeyCreditsBalanceScalarFieldEnum
    having?: ApiKeyCreditsBalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCreditsBalanceCountAggregateInputType | true
    _avg?: ApiKeyCreditsBalanceAvgAggregateInputType
    _sum?: ApiKeyCreditsBalanceSumAggregateInputType
    _min?: ApiKeyCreditsBalanceMinAggregateInputType
    _max?: ApiKeyCreditsBalanceMaxAggregateInputType
  }

  export type ApiKeyCreditsBalanceGroupByOutputType = {
    id: string
    userId: number
    credits: number
    createdAt: Date
    updatedAt: Date
    _count: ApiKeyCreditsBalanceCountAggregateOutputType | null
    _avg: ApiKeyCreditsBalanceAvgAggregateOutputType | null
    _sum: ApiKeyCreditsBalanceSumAggregateOutputType | null
    _min: ApiKeyCreditsBalanceMinAggregateOutputType | null
    _max: ApiKeyCreditsBalanceMaxAggregateOutputType | null
  }

  type GetApiKeyCreditsBalanceGroupByPayload<T extends ApiKeyCreditsBalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyCreditsBalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyCreditsBalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyCreditsBalanceGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyCreditsBalanceGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeyCreditsBalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    credits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKeyCreditsBalance"]>

  export type ApiKeyCreditsBalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    credits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKeyCreditsBalance"]>

  export type ApiKeyCreditsBalanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    credits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKeyCreditsBalance"]>

  export type ApiKeyCreditsBalanceSelectScalar = {
    id?: boolean
    userId?: boolean
    credits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApiKeyCreditsBalanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "credits" | "createdAt" | "updatedAt", ExtArgs["result"]["apiKeyCreditsBalance"]>
  export type ApiKeyCreditsBalanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApiKeyCreditsBalanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApiKeyCreditsBalanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApiKeyCreditsBalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKeyCreditsBalance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      credits: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["apiKeyCreditsBalance"]>
    composites: {}
  }

  type ApiKeyCreditsBalanceGetPayload<S extends boolean | null | undefined | ApiKeyCreditsBalanceDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyCreditsBalancePayload, S>

  type ApiKeyCreditsBalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyCreditsBalanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCreditsBalanceCountAggregateInputType | true
    }

  export interface ApiKeyCreditsBalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKeyCreditsBalance'], meta: { name: 'ApiKeyCreditsBalance' } }
    /**
     * Find zero or one ApiKeyCreditsBalance that matches the filter.
     * @param {ApiKeyCreditsBalanceFindUniqueArgs} args - Arguments to find a ApiKeyCreditsBalance
     * @example
     * // Get one ApiKeyCreditsBalance
     * const apiKeyCreditsBalance = await prisma.apiKeyCreditsBalance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyCreditsBalanceFindUniqueArgs>(args: SelectSubset<T, ApiKeyCreditsBalanceFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyCreditsBalanceClient<$Result.GetResult<Prisma.$ApiKeyCreditsBalancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKeyCreditsBalance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyCreditsBalanceFindUniqueOrThrowArgs} args - Arguments to find a ApiKeyCreditsBalance
     * @example
     * // Get one ApiKeyCreditsBalance
     * const apiKeyCreditsBalance = await prisma.apiKeyCreditsBalance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyCreditsBalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyCreditsBalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyCreditsBalanceClient<$Result.GetResult<Prisma.$ApiKeyCreditsBalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKeyCreditsBalance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCreditsBalanceFindFirstArgs} args - Arguments to find a ApiKeyCreditsBalance
     * @example
     * // Get one ApiKeyCreditsBalance
     * const apiKeyCreditsBalance = await prisma.apiKeyCreditsBalance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyCreditsBalanceFindFirstArgs>(args?: SelectSubset<T, ApiKeyCreditsBalanceFindFirstArgs<ExtArgs>>): Prisma__ApiKeyCreditsBalanceClient<$Result.GetResult<Prisma.$ApiKeyCreditsBalancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKeyCreditsBalance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCreditsBalanceFindFirstOrThrowArgs} args - Arguments to find a ApiKeyCreditsBalance
     * @example
     * // Get one ApiKeyCreditsBalance
     * const apiKeyCreditsBalance = await prisma.apiKeyCreditsBalance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyCreditsBalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyCreditsBalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyCreditsBalanceClient<$Result.GetResult<Prisma.$ApiKeyCreditsBalancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeyCreditsBalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCreditsBalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeyCreditsBalances
     * const apiKeyCreditsBalances = await prisma.apiKeyCreditsBalance.findMany()
     * 
     * // Get first 10 ApiKeyCreditsBalances
     * const apiKeyCreditsBalances = await prisma.apiKeyCreditsBalance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyCreditsBalanceWithIdOnly = await prisma.apiKeyCreditsBalance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyCreditsBalanceFindManyArgs>(args?: SelectSubset<T, ApiKeyCreditsBalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyCreditsBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKeyCreditsBalance.
     * @param {ApiKeyCreditsBalanceCreateArgs} args - Arguments to create a ApiKeyCreditsBalance.
     * @example
     * // Create one ApiKeyCreditsBalance
     * const ApiKeyCreditsBalance = await prisma.apiKeyCreditsBalance.create({
     *   data: {
     *     // ... data to create a ApiKeyCreditsBalance
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreditsBalanceCreateArgs>(args: SelectSubset<T, ApiKeyCreditsBalanceCreateArgs<ExtArgs>>): Prisma__ApiKeyCreditsBalanceClient<$Result.GetResult<Prisma.$ApiKeyCreditsBalancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeyCreditsBalances.
     * @param {ApiKeyCreditsBalanceCreateManyArgs} args - Arguments to create many ApiKeyCreditsBalances.
     * @example
     * // Create many ApiKeyCreditsBalances
     * const apiKeyCreditsBalance = await prisma.apiKeyCreditsBalance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreditsBalanceCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreditsBalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeyCreditsBalances and returns the data saved in the database.
     * @param {ApiKeyCreditsBalanceCreateManyAndReturnArgs} args - Arguments to create many ApiKeyCreditsBalances.
     * @example
     * // Create many ApiKeyCreditsBalances
     * const apiKeyCreditsBalance = await prisma.apiKeyCreditsBalance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeyCreditsBalances and only return the `id`
     * const apiKeyCreditsBalanceWithIdOnly = await prisma.apiKeyCreditsBalance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreditsBalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreditsBalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyCreditsBalancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKeyCreditsBalance.
     * @param {ApiKeyCreditsBalanceDeleteArgs} args - Arguments to delete one ApiKeyCreditsBalance.
     * @example
     * // Delete one ApiKeyCreditsBalance
     * const ApiKeyCreditsBalance = await prisma.apiKeyCreditsBalance.delete({
     *   where: {
     *     // ... filter to delete one ApiKeyCreditsBalance
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyCreditsBalanceDeleteArgs>(args: SelectSubset<T, ApiKeyCreditsBalanceDeleteArgs<ExtArgs>>): Prisma__ApiKeyCreditsBalanceClient<$Result.GetResult<Prisma.$ApiKeyCreditsBalancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKeyCreditsBalance.
     * @param {ApiKeyCreditsBalanceUpdateArgs} args - Arguments to update one ApiKeyCreditsBalance.
     * @example
     * // Update one ApiKeyCreditsBalance
     * const apiKeyCreditsBalance = await prisma.apiKeyCreditsBalance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyCreditsBalanceUpdateArgs>(args: SelectSubset<T, ApiKeyCreditsBalanceUpdateArgs<ExtArgs>>): Prisma__ApiKeyCreditsBalanceClient<$Result.GetResult<Prisma.$ApiKeyCreditsBalancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeyCreditsBalances.
     * @param {ApiKeyCreditsBalanceDeleteManyArgs} args - Arguments to filter ApiKeyCreditsBalances to delete.
     * @example
     * // Delete a few ApiKeyCreditsBalances
     * const { count } = await prisma.apiKeyCreditsBalance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyCreditsBalanceDeleteManyArgs>(args?: SelectSubset<T, ApiKeyCreditsBalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeyCreditsBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCreditsBalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeyCreditsBalances
     * const apiKeyCreditsBalance = await prisma.apiKeyCreditsBalance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyCreditsBalanceUpdateManyArgs>(args: SelectSubset<T, ApiKeyCreditsBalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeyCreditsBalances and returns the data updated in the database.
     * @param {ApiKeyCreditsBalanceUpdateManyAndReturnArgs} args - Arguments to update many ApiKeyCreditsBalances.
     * @example
     * // Update many ApiKeyCreditsBalances
     * const apiKeyCreditsBalance = await prisma.apiKeyCreditsBalance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeyCreditsBalances and only return the `id`
     * const apiKeyCreditsBalanceWithIdOnly = await prisma.apiKeyCreditsBalance.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApiKeyCreditsBalanceUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyCreditsBalanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyCreditsBalancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKeyCreditsBalance.
     * @param {ApiKeyCreditsBalanceUpsertArgs} args - Arguments to update or create a ApiKeyCreditsBalance.
     * @example
     * // Update or create a ApiKeyCreditsBalance
     * const apiKeyCreditsBalance = await prisma.apiKeyCreditsBalance.upsert({
     *   create: {
     *     // ... data to create a ApiKeyCreditsBalance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKeyCreditsBalance we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyCreditsBalanceUpsertArgs>(args: SelectSubset<T, ApiKeyCreditsBalanceUpsertArgs<ExtArgs>>): Prisma__ApiKeyCreditsBalanceClient<$Result.GetResult<Prisma.$ApiKeyCreditsBalancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeyCreditsBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCreditsBalanceCountArgs} args - Arguments to filter ApiKeyCreditsBalances to count.
     * @example
     * // Count the number of ApiKeyCreditsBalances
     * const count = await prisma.apiKeyCreditsBalance.count({
     *   where: {
     *     // ... the filter for the ApiKeyCreditsBalances we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCreditsBalanceCountArgs>(
      args?: Subset<T, ApiKeyCreditsBalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCreditsBalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKeyCreditsBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCreditsBalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiKeyCreditsBalanceAggregateArgs>(args: Subset<T, ApiKeyCreditsBalanceAggregateArgs>): Prisma.PrismaPromise<GetApiKeyCreditsBalanceAggregateType<T>>

    /**
     * Group by ApiKeyCreditsBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCreditsBalanceGroupByArgs} args - Group by arguments.
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
      T extends ApiKeyCreditsBalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyCreditsBalanceGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyCreditsBalanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiKeyCreditsBalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyCreditsBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKeyCreditsBalance model
   */
  readonly fields: ApiKeyCreditsBalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKeyCreditsBalance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyCreditsBalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ApiKeyCreditsBalance model
   */
  interface ApiKeyCreditsBalanceFieldRefs {
    readonly id: FieldRef<"ApiKeyCreditsBalance", 'String'>
    readonly userId: FieldRef<"ApiKeyCreditsBalance", 'Int'>
    readonly credits: FieldRef<"ApiKeyCreditsBalance", 'Int'>
    readonly createdAt: FieldRef<"ApiKeyCreditsBalance", 'DateTime'>
    readonly updatedAt: FieldRef<"ApiKeyCreditsBalance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiKeyCreditsBalance findUnique
   */
  export type ApiKeyCreditsBalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyCreditsBalance
     */
    select?: ApiKeyCreditsBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyCreditsBalance
     */
    omit?: ApiKeyCreditsBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyCreditsBalanceInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyCreditsBalance to fetch.
     */
    where: ApiKeyCreditsBalanceWhereUniqueInput
  }

  /**
   * ApiKeyCreditsBalance findUniqueOrThrow
   */
  export type ApiKeyCreditsBalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyCreditsBalance
     */
    select?: ApiKeyCreditsBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyCreditsBalance
     */
    omit?: ApiKeyCreditsBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyCreditsBalanceInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyCreditsBalance to fetch.
     */
    where: ApiKeyCreditsBalanceWhereUniqueInput
  }

  /**
   * ApiKeyCreditsBalance findFirst
   */
  export type ApiKeyCreditsBalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyCreditsBalance
     */
    select?: ApiKeyCreditsBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyCreditsBalance
     */
    omit?: ApiKeyCreditsBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyCreditsBalanceInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyCreditsBalance to fetch.
     */
    where?: ApiKeyCreditsBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeyCreditsBalances to fetch.
     */
    orderBy?: ApiKeyCreditsBalanceOrderByWithRelationInput | ApiKeyCreditsBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeyCreditsBalances.
     */
    cursor?: ApiKeyCreditsBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeyCreditsBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeyCreditsBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeyCreditsBalances.
     */
    distinct?: ApiKeyCreditsBalanceScalarFieldEnum | ApiKeyCreditsBalanceScalarFieldEnum[]
  }

  /**
   * ApiKeyCreditsBalance findFirstOrThrow
   */
  export type ApiKeyCreditsBalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyCreditsBalance
     */
    select?: ApiKeyCreditsBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyCreditsBalance
     */
    omit?: ApiKeyCreditsBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyCreditsBalanceInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyCreditsBalance to fetch.
     */
    where?: ApiKeyCreditsBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeyCreditsBalances to fetch.
     */
    orderBy?: ApiKeyCreditsBalanceOrderByWithRelationInput | ApiKeyCreditsBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeyCreditsBalances.
     */
    cursor?: ApiKeyCreditsBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeyCreditsBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeyCreditsBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeyCreditsBalances.
     */
    distinct?: ApiKeyCreditsBalanceScalarFieldEnum | ApiKeyCreditsBalanceScalarFieldEnum[]
  }

  /**
   * ApiKeyCreditsBalance findMany
   */
  export type ApiKeyCreditsBalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyCreditsBalance
     */
    select?: ApiKeyCreditsBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyCreditsBalance
     */
    omit?: ApiKeyCreditsBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyCreditsBalanceInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyCreditsBalances to fetch.
     */
    where?: ApiKeyCreditsBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeyCreditsBalances to fetch.
     */
    orderBy?: ApiKeyCreditsBalanceOrderByWithRelationInput | ApiKeyCreditsBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeyCreditsBalances.
     */
    cursor?: ApiKeyCreditsBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeyCreditsBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeyCreditsBalances.
     */
    skip?: number
    distinct?: ApiKeyCreditsBalanceScalarFieldEnum | ApiKeyCreditsBalanceScalarFieldEnum[]
  }

  /**
   * ApiKeyCreditsBalance create
   */
  export type ApiKeyCreditsBalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyCreditsBalance
     */
    select?: ApiKeyCreditsBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyCreditsBalance
     */
    omit?: ApiKeyCreditsBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyCreditsBalanceInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKeyCreditsBalance.
     */
    data: XOR<ApiKeyCreditsBalanceCreateInput, ApiKeyCreditsBalanceUncheckedCreateInput>
  }

  /**
   * ApiKeyCreditsBalance createMany
   */
  export type ApiKeyCreditsBalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeyCreditsBalances.
     */
    data: ApiKeyCreditsBalanceCreateManyInput | ApiKeyCreditsBalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKeyCreditsBalance createManyAndReturn
   */
  export type ApiKeyCreditsBalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyCreditsBalance
     */
    select?: ApiKeyCreditsBalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyCreditsBalance
     */
    omit?: ApiKeyCreditsBalanceOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeyCreditsBalances.
     */
    data: ApiKeyCreditsBalanceCreateManyInput | ApiKeyCreditsBalanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyCreditsBalanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKeyCreditsBalance update
   */
  export type ApiKeyCreditsBalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyCreditsBalance
     */
    select?: ApiKeyCreditsBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyCreditsBalance
     */
    omit?: ApiKeyCreditsBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyCreditsBalanceInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKeyCreditsBalance.
     */
    data: XOR<ApiKeyCreditsBalanceUpdateInput, ApiKeyCreditsBalanceUncheckedUpdateInput>
    /**
     * Choose, which ApiKeyCreditsBalance to update.
     */
    where: ApiKeyCreditsBalanceWhereUniqueInput
  }

  /**
   * ApiKeyCreditsBalance updateMany
   */
  export type ApiKeyCreditsBalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeyCreditsBalances.
     */
    data: XOR<ApiKeyCreditsBalanceUpdateManyMutationInput, ApiKeyCreditsBalanceUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeyCreditsBalances to update
     */
    where?: ApiKeyCreditsBalanceWhereInput
    /**
     * Limit how many ApiKeyCreditsBalances to update.
     */
    limit?: number
  }

  /**
   * ApiKeyCreditsBalance updateManyAndReturn
   */
  export type ApiKeyCreditsBalanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyCreditsBalance
     */
    select?: ApiKeyCreditsBalanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyCreditsBalance
     */
    omit?: ApiKeyCreditsBalanceOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeyCreditsBalances.
     */
    data: XOR<ApiKeyCreditsBalanceUpdateManyMutationInput, ApiKeyCreditsBalanceUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeyCreditsBalances to update
     */
    where?: ApiKeyCreditsBalanceWhereInput
    /**
     * Limit how many ApiKeyCreditsBalances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyCreditsBalanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKeyCreditsBalance upsert
   */
  export type ApiKeyCreditsBalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyCreditsBalance
     */
    select?: ApiKeyCreditsBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyCreditsBalance
     */
    omit?: ApiKeyCreditsBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyCreditsBalanceInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKeyCreditsBalance to update in case it exists.
     */
    where: ApiKeyCreditsBalanceWhereUniqueInput
    /**
     * In case the ApiKeyCreditsBalance found by the `where` argument doesn't exist, create a new ApiKeyCreditsBalance with this data.
     */
    create: XOR<ApiKeyCreditsBalanceCreateInput, ApiKeyCreditsBalanceUncheckedCreateInput>
    /**
     * In case the ApiKeyCreditsBalance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyCreditsBalanceUpdateInput, ApiKeyCreditsBalanceUncheckedUpdateInput>
  }

  /**
   * ApiKeyCreditsBalance delete
   */
  export type ApiKeyCreditsBalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyCreditsBalance
     */
    select?: ApiKeyCreditsBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyCreditsBalance
     */
    omit?: ApiKeyCreditsBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyCreditsBalanceInclude<ExtArgs> | null
    /**
     * Filter which ApiKeyCreditsBalance to delete.
     */
    where: ApiKeyCreditsBalanceWhereUniqueInput
  }

  /**
   * ApiKeyCreditsBalance deleteMany
   */
  export type ApiKeyCreditsBalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeyCreditsBalances to delete
     */
    where?: ApiKeyCreditsBalanceWhereInput
    /**
     * Limit how many ApiKeyCreditsBalances to delete.
     */
    limit?: number
  }

  /**
   * ApiKeyCreditsBalance without action
   */
  export type ApiKeyCreditsBalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyCreditsBalance
     */
    select?: ApiKeyCreditsBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyCreditsBalance
     */
    omit?: ApiKeyCreditsBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyCreditsBalanceInclude<ExtArgs> | null
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
    description: string | null
    createdAt: Date | null
    lastRequest: Date | null
    name: string | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    key: string | null
    unlimited: boolean | null
    minInterval: number | null
    ownerId: number | null
    description: string | null
    createdAt: Date | null
    lastRequest: Date | null
    name: string | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    key: number
    unlimited: number
    minInterval: number
    ownerId: number
    description: number
    createdAt: number
    lastRequest: number
    name: number
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
    description?: true
    createdAt?: true
    lastRequest?: true
    name?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    key?: true
    unlimited?: true
    minInterval?: true
    ownerId?: true
    description?: true
    createdAt?: true
    lastRequest?: true
    name?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    key?: true
    unlimited?: true
    minInterval?: true
    ownerId?: true
    description?: true
    createdAt?: true
    lastRequest?: true
    name?: true
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
    description: string | null
    createdAt: Date
    lastRequest: Date | null
    name: string
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
    description?: boolean
    createdAt?: boolean
    lastRequest?: boolean
    name?: boolean
    owner?: boolean | ApiKey$ownerArgs<ExtArgs>
    api_key_permission?: boolean | ApiKey$api_key_permissionArgs<ExtArgs>
    usageLogs?: boolean | ApiKey$usageLogsArgs<ExtArgs>
    _count?: boolean | ApiKeyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    unlimited?: boolean
    minInterval?: boolean
    ownerId?: boolean
    description?: boolean
    createdAt?: boolean
    lastRequest?: boolean
    name?: boolean
    owner?: boolean | ApiKey$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    unlimited?: boolean
    minInterval?: boolean
    ownerId?: boolean
    description?: boolean
    createdAt?: boolean
    lastRequest?: boolean
    name?: boolean
    owner?: boolean | ApiKey$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    key?: boolean
    unlimited?: boolean
    minInterval?: boolean
    ownerId?: boolean
    description?: boolean
    createdAt?: boolean
    lastRequest?: boolean
    name?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "unlimited" | "minInterval" | "ownerId" | "description" | "createdAt" | "lastRequest" | "name", ExtArgs["result"]["apiKey"]>
  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | ApiKey$ownerArgs<ExtArgs>
    api_key_permission?: boolean | ApiKey$api_key_permissionArgs<ExtArgs>
    usageLogs?: boolean | ApiKey$usageLogsArgs<ExtArgs>
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
      api_key_permission: Prisma.$api_key_permissionPayload<ExtArgs>[]
      usageLogs: Prisma.$ApiUsageLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      unlimited: boolean
      minInterval: number
      ownerId: number | null
      description: string | null
      createdAt: Date
      lastRequest: Date | null
      name: string
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
    api_key_permission<T extends ApiKey$api_key_permissionArgs<ExtArgs> = {}>(args?: Subset<T, ApiKey$api_key_permissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_key_permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usageLogs<T extends ApiKey$usageLogsArgs<ExtArgs> = {}>(args?: Subset<T, ApiKey$usageLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly description: FieldRef<"ApiKey", 'String'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
    readonly lastRequest: FieldRef<"ApiKey", 'DateTime'>
    readonly name: FieldRef<"ApiKey", 'String'>
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
   * ApiKey.api_key_permission
   */
  export type ApiKey$api_key_permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key_permission
     */
    select?: api_key_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_key_permission
     */
    omit?: api_key_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_key_permissionInclude<ExtArgs> | null
    where?: api_key_permissionWhereInput
    orderBy?: api_key_permissionOrderByWithRelationInput | api_key_permissionOrderByWithRelationInput[]
    cursor?: api_key_permissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Api_key_permissionScalarFieldEnum | Api_key_permissionScalarFieldEnum[]
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
    apiKeyId: string | null
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
    apiKey?: boolean | ApiUsageLog$apiKeyArgs<ExtArgs>
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
    apiKey?: boolean | ApiUsageLog$apiKeyArgs<ExtArgs>
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
    apiKey?: boolean | ApiUsageLog$apiKeyArgs<ExtArgs>
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
    apiKey?: boolean | ApiUsageLog$apiKeyArgs<ExtArgs>
  }
  export type ApiUsageLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiUsageLog$apiKeyArgs<ExtArgs>
  }
  export type ApiUsageLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiUsageLog$apiKeyArgs<ExtArgs>
  }

  export type $ApiUsageLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiUsageLog"
    objects: {
      apiKey: Prisma.$ApiKeyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      endpoint: string
      params: Prisma.JsonValue
      statusCode: number
      ipAddress: string | null
      userAgent: string | null
      apiKeyId: string | null
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
    apiKey<T extends ApiUsageLog$apiKeyArgs<ExtArgs> = {}>(args?: Subset<T, ApiUsageLog$apiKeyArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * ApiUsageLog.apiKey
   */
  export type ApiUsageLog$apiKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    date: string | null
    expiresAt: Date | null
  }

  export type TimetableCacheMaxAggregateOutputType = {
    id: string | null
    username: string | null
    school: string | null
    date: string | null
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
    date: string
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
      date: string
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
    readonly date: FieldRef<"TimetableCache", 'String'>
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
   * Model api_credits_purchase
   */

  export type AggregateApi_credits_purchase = {
    _count: Api_credits_purchaseCountAggregateOutputType | null
    _avg: Api_credits_purchaseAvgAggregateOutputType | null
    _sum: Api_credits_purchaseSumAggregateOutputType | null
    _min: Api_credits_purchaseMinAggregateOutputType | null
    _max: Api_credits_purchaseMaxAggregateOutputType | null
  }

  export type Api_credits_purchaseAvgAggregateOutputType = {
    credits: number | null
    user_id: number | null
  }

  export type Api_credits_purchaseSumAggregateOutputType = {
    credits: number | null
    user_id: number | null
  }

  export type Api_credits_purchaseMinAggregateOutputType = {
    id: string | null
    credits: number | null
    purchaseDate: Date | null
    user_id: number | null
  }

  export type Api_credits_purchaseMaxAggregateOutputType = {
    id: string | null
    credits: number | null
    purchaseDate: Date | null
    user_id: number | null
  }

  export type Api_credits_purchaseCountAggregateOutputType = {
    id: number
    credits: number
    purchaseDate: number
    user_id: number
    _all: number
  }


  export type Api_credits_purchaseAvgAggregateInputType = {
    credits?: true
    user_id?: true
  }

  export type Api_credits_purchaseSumAggregateInputType = {
    credits?: true
    user_id?: true
  }

  export type Api_credits_purchaseMinAggregateInputType = {
    id?: true
    credits?: true
    purchaseDate?: true
    user_id?: true
  }

  export type Api_credits_purchaseMaxAggregateInputType = {
    id?: true
    credits?: true
    purchaseDate?: true
    user_id?: true
  }

  export type Api_credits_purchaseCountAggregateInputType = {
    id?: true
    credits?: true
    purchaseDate?: true
    user_id?: true
    _all?: true
  }

  export type Api_credits_purchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which api_credits_purchase to aggregate.
     */
    where?: api_credits_purchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_credits_purchases to fetch.
     */
    orderBy?: api_credits_purchaseOrderByWithRelationInput | api_credits_purchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: api_credits_purchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_credits_purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_credits_purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned api_credits_purchases
    **/
    _count?: true | Api_credits_purchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Api_credits_purchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Api_credits_purchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Api_credits_purchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Api_credits_purchaseMaxAggregateInputType
  }

  export type GetApi_credits_purchaseAggregateType<T extends Api_credits_purchaseAggregateArgs> = {
        [P in keyof T & keyof AggregateApi_credits_purchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApi_credits_purchase[P]>
      : GetScalarType<T[P], AggregateApi_credits_purchase[P]>
  }




  export type api_credits_purchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: api_credits_purchaseWhereInput
    orderBy?: api_credits_purchaseOrderByWithAggregationInput | api_credits_purchaseOrderByWithAggregationInput[]
    by: Api_credits_purchaseScalarFieldEnum[] | Api_credits_purchaseScalarFieldEnum
    having?: api_credits_purchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Api_credits_purchaseCountAggregateInputType | true
    _avg?: Api_credits_purchaseAvgAggregateInputType
    _sum?: Api_credits_purchaseSumAggregateInputType
    _min?: Api_credits_purchaseMinAggregateInputType
    _max?: Api_credits_purchaseMaxAggregateInputType
  }

  export type Api_credits_purchaseGroupByOutputType = {
    id: string
    credits: number
    purchaseDate: Date
    user_id: number | null
    _count: Api_credits_purchaseCountAggregateOutputType | null
    _avg: Api_credits_purchaseAvgAggregateOutputType | null
    _sum: Api_credits_purchaseSumAggregateOutputType | null
    _min: Api_credits_purchaseMinAggregateOutputType | null
    _max: Api_credits_purchaseMaxAggregateOutputType | null
  }

  type GetApi_credits_purchaseGroupByPayload<T extends api_credits_purchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Api_credits_purchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Api_credits_purchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Api_credits_purchaseGroupByOutputType[P]>
            : GetScalarType<T[P], Api_credits_purchaseGroupByOutputType[P]>
        }
      >
    >


  export type api_credits_purchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    credits?: boolean
    purchaseDate?: boolean
    user_id?: boolean
    user?: boolean | api_credits_purchase$userArgs<ExtArgs>
  }, ExtArgs["result"]["api_credits_purchase"]>

  export type api_credits_purchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    credits?: boolean
    purchaseDate?: boolean
    user_id?: boolean
    user?: boolean | api_credits_purchase$userArgs<ExtArgs>
  }, ExtArgs["result"]["api_credits_purchase"]>

  export type api_credits_purchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    credits?: boolean
    purchaseDate?: boolean
    user_id?: boolean
    user?: boolean | api_credits_purchase$userArgs<ExtArgs>
  }, ExtArgs["result"]["api_credits_purchase"]>

  export type api_credits_purchaseSelectScalar = {
    id?: boolean
    credits?: boolean
    purchaseDate?: boolean
    user_id?: boolean
  }

  export type api_credits_purchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "credits" | "purchaseDate" | "user_id", ExtArgs["result"]["api_credits_purchase"]>
  export type api_credits_purchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | api_credits_purchase$userArgs<ExtArgs>
  }
  export type api_credits_purchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | api_credits_purchase$userArgs<ExtArgs>
  }
  export type api_credits_purchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | api_credits_purchase$userArgs<ExtArgs>
  }

  export type $api_credits_purchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "api_credits_purchase"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      credits: number
      purchaseDate: Date
      user_id: number | null
    }, ExtArgs["result"]["api_credits_purchase"]>
    composites: {}
  }

  type api_credits_purchaseGetPayload<S extends boolean | null | undefined | api_credits_purchaseDefaultArgs> = $Result.GetResult<Prisma.$api_credits_purchasePayload, S>

  type api_credits_purchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<api_credits_purchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Api_credits_purchaseCountAggregateInputType | true
    }

  export interface api_credits_purchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['api_credits_purchase'], meta: { name: 'api_credits_purchase' } }
    /**
     * Find zero or one Api_credits_purchase that matches the filter.
     * @param {api_credits_purchaseFindUniqueArgs} args - Arguments to find a Api_credits_purchase
     * @example
     * // Get one Api_credits_purchase
     * const api_credits_purchase = await prisma.api_credits_purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends api_credits_purchaseFindUniqueArgs>(args: SelectSubset<T, api_credits_purchaseFindUniqueArgs<ExtArgs>>): Prisma__api_credits_purchaseClient<$Result.GetResult<Prisma.$api_credits_purchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Api_credits_purchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {api_credits_purchaseFindUniqueOrThrowArgs} args - Arguments to find a Api_credits_purchase
     * @example
     * // Get one Api_credits_purchase
     * const api_credits_purchase = await prisma.api_credits_purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends api_credits_purchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, api_credits_purchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__api_credits_purchaseClient<$Result.GetResult<Prisma.$api_credits_purchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api_credits_purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_credits_purchaseFindFirstArgs} args - Arguments to find a Api_credits_purchase
     * @example
     * // Get one Api_credits_purchase
     * const api_credits_purchase = await prisma.api_credits_purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends api_credits_purchaseFindFirstArgs>(args?: SelectSubset<T, api_credits_purchaseFindFirstArgs<ExtArgs>>): Prisma__api_credits_purchaseClient<$Result.GetResult<Prisma.$api_credits_purchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api_credits_purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_credits_purchaseFindFirstOrThrowArgs} args - Arguments to find a Api_credits_purchase
     * @example
     * // Get one Api_credits_purchase
     * const api_credits_purchase = await prisma.api_credits_purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends api_credits_purchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, api_credits_purchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__api_credits_purchaseClient<$Result.GetResult<Prisma.$api_credits_purchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Api_credits_purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_credits_purchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Api_credits_purchases
     * const api_credits_purchases = await prisma.api_credits_purchase.findMany()
     * 
     * // Get first 10 Api_credits_purchases
     * const api_credits_purchases = await prisma.api_credits_purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const api_credits_purchaseWithIdOnly = await prisma.api_credits_purchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends api_credits_purchaseFindManyArgs>(args?: SelectSubset<T, api_credits_purchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_credits_purchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Api_credits_purchase.
     * @param {api_credits_purchaseCreateArgs} args - Arguments to create a Api_credits_purchase.
     * @example
     * // Create one Api_credits_purchase
     * const Api_credits_purchase = await prisma.api_credits_purchase.create({
     *   data: {
     *     // ... data to create a Api_credits_purchase
     *   }
     * })
     * 
     */
    create<T extends api_credits_purchaseCreateArgs>(args: SelectSubset<T, api_credits_purchaseCreateArgs<ExtArgs>>): Prisma__api_credits_purchaseClient<$Result.GetResult<Prisma.$api_credits_purchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Api_credits_purchases.
     * @param {api_credits_purchaseCreateManyArgs} args - Arguments to create many Api_credits_purchases.
     * @example
     * // Create many Api_credits_purchases
     * const api_credits_purchase = await prisma.api_credits_purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends api_credits_purchaseCreateManyArgs>(args?: SelectSubset<T, api_credits_purchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Api_credits_purchases and returns the data saved in the database.
     * @param {api_credits_purchaseCreateManyAndReturnArgs} args - Arguments to create many Api_credits_purchases.
     * @example
     * // Create many Api_credits_purchases
     * const api_credits_purchase = await prisma.api_credits_purchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Api_credits_purchases and only return the `id`
     * const api_credits_purchaseWithIdOnly = await prisma.api_credits_purchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends api_credits_purchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, api_credits_purchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_credits_purchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Api_credits_purchase.
     * @param {api_credits_purchaseDeleteArgs} args - Arguments to delete one Api_credits_purchase.
     * @example
     * // Delete one Api_credits_purchase
     * const Api_credits_purchase = await prisma.api_credits_purchase.delete({
     *   where: {
     *     // ... filter to delete one Api_credits_purchase
     *   }
     * })
     * 
     */
    delete<T extends api_credits_purchaseDeleteArgs>(args: SelectSubset<T, api_credits_purchaseDeleteArgs<ExtArgs>>): Prisma__api_credits_purchaseClient<$Result.GetResult<Prisma.$api_credits_purchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Api_credits_purchase.
     * @param {api_credits_purchaseUpdateArgs} args - Arguments to update one Api_credits_purchase.
     * @example
     * // Update one Api_credits_purchase
     * const api_credits_purchase = await prisma.api_credits_purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends api_credits_purchaseUpdateArgs>(args: SelectSubset<T, api_credits_purchaseUpdateArgs<ExtArgs>>): Prisma__api_credits_purchaseClient<$Result.GetResult<Prisma.$api_credits_purchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Api_credits_purchases.
     * @param {api_credits_purchaseDeleteManyArgs} args - Arguments to filter Api_credits_purchases to delete.
     * @example
     * // Delete a few Api_credits_purchases
     * const { count } = await prisma.api_credits_purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends api_credits_purchaseDeleteManyArgs>(args?: SelectSubset<T, api_credits_purchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Api_credits_purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_credits_purchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Api_credits_purchases
     * const api_credits_purchase = await prisma.api_credits_purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends api_credits_purchaseUpdateManyArgs>(args: SelectSubset<T, api_credits_purchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Api_credits_purchases and returns the data updated in the database.
     * @param {api_credits_purchaseUpdateManyAndReturnArgs} args - Arguments to update many Api_credits_purchases.
     * @example
     * // Update many Api_credits_purchases
     * const api_credits_purchase = await prisma.api_credits_purchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Api_credits_purchases and only return the `id`
     * const api_credits_purchaseWithIdOnly = await prisma.api_credits_purchase.updateManyAndReturn({
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
    updateManyAndReturn<T extends api_credits_purchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, api_credits_purchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_credits_purchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Api_credits_purchase.
     * @param {api_credits_purchaseUpsertArgs} args - Arguments to update or create a Api_credits_purchase.
     * @example
     * // Update or create a Api_credits_purchase
     * const api_credits_purchase = await prisma.api_credits_purchase.upsert({
     *   create: {
     *     // ... data to create a Api_credits_purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Api_credits_purchase we want to update
     *   }
     * })
     */
    upsert<T extends api_credits_purchaseUpsertArgs>(args: SelectSubset<T, api_credits_purchaseUpsertArgs<ExtArgs>>): Prisma__api_credits_purchaseClient<$Result.GetResult<Prisma.$api_credits_purchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Api_credits_purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_credits_purchaseCountArgs} args - Arguments to filter Api_credits_purchases to count.
     * @example
     * // Count the number of Api_credits_purchases
     * const count = await prisma.api_credits_purchase.count({
     *   where: {
     *     // ... the filter for the Api_credits_purchases we want to count
     *   }
     * })
    **/
    count<T extends api_credits_purchaseCountArgs>(
      args?: Subset<T, api_credits_purchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Api_credits_purchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Api_credits_purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Api_credits_purchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Api_credits_purchaseAggregateArgs>(args: Subset<T, Api_credits_purchaseAggregateArgs>): Prisma.PrismaPromise<GetApi_credits_purchaseAggregateType<T>>

    /**
     * Group by Api_credits_purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_credits_purchaseGroupByArgs} args - Group by arguments.
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
      T extends api_credits_purchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: api_credits_purchaseGroupByArgs['orderBy'] }
        : { orderBy?: api_credits_purchaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, api_credits_purchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApi_credits_purchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the api_credits_purchase model
   */
  readonly fields: api_credits_purchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for api_credits_purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__api_credits_purchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends api_credits_purchase$userArgs<ExtArgs> = {}>(args?: Subset<T, api_credits_purchase$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the api_credits_purchase model
   */
  interface api_credits_purchaseFieldRefs {
    readonly id: FieldRef<"api_credits_purchase", 'String'>
    readonly credits: FieldRef<"api_credits_purchase", 'Int'>
    readonly purchaseDate: FieldRef<"api_credits_purchase", 'DateTime'>
    readonly user_id: FieldRef<"api_credits_purchase", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * api_credits_purchase findUnique
   */
  export type api_credits_purchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_purchase
     */
    select?: api_credits_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_purchase
     */
    omit?: api_credits_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_purchaseInclude<ExtArgs> | null
    /**
     * Filter, which api_credits_purchase to fetch.
     */
    where: api_credits_purchaseWhereUniqueInput
  }

  /**
   * api_credits_purchase findUniqueOrThrow
   */
  export type api_credits_purchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_purchase
     */
    select?: api_credits_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_purchase
     */
    omit?: api_credits_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_purchaseInclude<ExtArgs> | null
    /**
     * Filter, which api_credits_purchase to fetch.
     */
    where: api_credits_purchaseWhereUniqueInput
  }

  /**
   * api_credits_purchase findFirst
   */
  export type api_credits_purchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_purchase
     */
    select?: api_credits_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_purchase
     */
    omit?: api_credits_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_purchaseInclude<ExtArgs> | null
    /**
     * Filter, which api_credits_purchase to fetch.
     */
    where?: api_credits_purchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_credits_purchases to fetch.
     */
    orderBy?: api_credits_purchaseOrderByWithRelationInput | api_credits_purchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for api_credits_purchases.
     */
    cursor?: api_credits_purchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_credits_purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_credits_purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of api_credits_purchases.
     */
    distinct?: Api_credits_purchaseScalarFieldEnum | Api_credits_purchaseScalarFieldEnum[]
  }

  /**
   * api_credits_purchase findFirstOrThrow
   */
  export type api_credits_purchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_purchase
     */
    select?: api_credits_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_purchase
     */
    omit?: api_credits_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_purchaseInclude<ExtArgs> | null
    /**
     * Filter, which api_credits_purchase to fetch.
     */
    where?: api_credits_purchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_credits_purchases to fetch.
     */
    orderBy?: api_credits_purchaseOrderByWithRelationInput | api_credits_purchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for api_credits_purchases.
     */
    cursor?: api_credits_purchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_credits_purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_credits_purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of api_credits_purchases.
     */
    distinct?: Api_credits_purchaseScalarFieldEnum | Api_credits_purchaseScalarFieldEnum[]
  }

  /**
   * api_credits_purchase findMany
   */
  export type api_credits_purchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_purchase
     */
    select?: api_credits_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_purchase
     */
    omit?: api_credits_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_purchaseInclude<ExtArgs> | null
    /**
     * Filter, which api_credits_purchases to fetch.
     */
    where?: api_credits_purchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_credits_purchases to fetch.
     */
    orderBy?: api_credits_purchaseOrderByWithRelationInput | api_credits_purchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing api_credits_purchases.
     */
    cursor?: api_credits_purchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_credits_purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_credits_purchases.
     */
    skip?: number
    distinct?: Api_credits_purchaseScalarFieldEnum | Api_credits_purchaseScalarFieldEnum[]
  }

  /**
   * api_credits_purchase create
   */
  export type api_credits_purchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_purchase
     */
    select?: api_credits_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_purchase
     */
    omit?: api_credits_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_purchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a api_credits_purchase.
     */
    data: XOR<api_credits_purchaseCreateInput, api_credits_purchaseUncheckedCreateInput>
  }

  /**
   * api_credits_purchase createMany
   */
  export type api_credits_purchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many api_credits_purchases.
     */
    data: api_credits_purchaseCreateManyInput | api_credits_purchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * api_credits_purchase createManyAndReturn
   */
  export type api_credits_purchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_purchase
     */
    select?: api_credits_purchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_purchase
     */
    omit?: api_credits_purchaseOmit<ExtArgs> | null
    /**
     * The data used to create many api_credits_purchases.
     */
    data: api_credits_purchaseCreateManyInput | api_credits_purchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_purchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * api_credits_purchase update
   */
  export type api_credits_purchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_purchase
     */
    select?: api_credits_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_purchase
     */
    omit?: api_credits_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_purchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a api_credits_purchase.
     */
    data: XOR<api_credits_purchaseUpdateInput, api_credits_purchaseUncheckedUpdateInput>
    /**
     * Choose, which api_credits_purchase to update.
     */
    where: api_credits_purchaseWhereUniqueInput
  }

  /**
   * api_credits_purchase updateMany
   */
  export type api_credits_purchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update api_credits_purchases.
     */
    data: XOR<api_credits_purchaseUpdateManyMutationInput, api_credits_purchaseUncheckedUpdateManyInput>
    /**
     * Filter which api_credits_purchases to update
     */
    where?: api_credits_purchaseWhereInput
    /**
     * Limit how many api_credits_purchases to update.
     */
    limit?: number
  }

  /**
   * api_credits_purchase updateManyAndReturn
   */
  export type api_credits_purchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_purchase
     */
    select?: api_credits_purchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_purchase
     */
    omit?: api_credits_purchaseOmit<ExtArgs> | null
    /**
     * The data used to update api_credits_purchases.
     */
    data: XOR<api_credits_purchaseUpdateManyMutationInput, api_credits_purchaseUncheckedUpdateManyInput>
    /**
     * Filter which api_credits_purchases to update
     */
    where?: api_credits_purchaseWhereInput
    /**
     * Limit how many api_credits_purchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_purchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * api_credits_purchase upsert
   */
  export type api_credits_purchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_purchase
     */
    select?: api_credits_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_purchase
     */
    omit?: api_credits_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_purchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the api_credits_purchase to update in case it exists.
     */
    where: api_credits_purchaseWhereUniqueInput
    /**
     * In case the api_credits_purchase found by the `where` argument doesn't exist, create a new api_credits_purchase with this data.
     */
    create: XOR<api_credits_purchaseCreateInput, api_credits_purchaseUncheckedCreateInput>
    /**
     * In case the api_credits_purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<api_credits_purchaseUpdateInput, api_credits_purchaseUncheckedUpdateInput>
  }

  /**
   * api_credits_purchase delete
   */
  export type api_credits_purchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_purchase
     */
    select?: api_credits_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_purchase
     */
    omit?: api_credits_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_purchaseInclude<ExtArgs> | null
    /**
     * Filter which api_credits_purchase to delete.
     */
    where: api_credits_purchaseWhereUniqueInput
  }

  /**
   * api_credits_purchase deleteMany
   */
  export type api_credits_purchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which api_credits_purchases to delete
     */
    where?: api_credits_purchaseWhereInput
    /**
     * Limit how many api_credits_purchases to delete.
     */
    limit?: number
  }

  /**
   * api_credits_purchase.user
   */
  export type api_credits_purchase$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * api_credits_purchase without action
   */
  export type api_credits_purchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_purchase
     */
    select?: api_credits_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_purchase
     */
    omit?: api_credits_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_purchaseInclude<ExtArgs> | null
  }


  /**
   * Model api_credits_usage
   */

  export type AggregateApi_credits_usage = {
    _count: Api_credits_usageCountAggregateOutputType | null
    _avg: Api_credits_usageAvgAggregateOutputType | null
    _sum: Api_credits_usageSumAggregateOutputType | null
    _min: Api_credits_usageMinAggregateOutputType | null
    _max: Api_credits_usageMaxAggregateOutputType | null
  }

  export type Api_credits_usageAvgAggregateOutputType = {
    credits: number | null
    user_id: number | null
  }

  export type Api_credits_usageSumAggregateOutputType = {
    credits: number | null
    user_id: number | null
  }

  export type Api_credits_usageMinAggregateOutputType = {
    id: string | null
    api_key_id: string | null
    credits: number | null
    usageDate: Date | null
    user_id: number | null
  }

  export type Api_credits_usageMaxAggregateOutputType = {
    id: string | null
    api_key_id: string | null
    credits: number | null
    usageDate: Date | null
    user_id: number | null
  }

  export type Api_credits_usageCountAggregateOutputType = {
    id: number
    api_key_id: number
    credits: number
    usageDate: number
    user_id: number
    _all: number
  }


  export type Api_credits_usageAvgAggregateInputType = {
    credits?: true
    user_id?: true
  }

  export type Api_credits_usageSumAggregateInputType = {
    credits?: true
    user_id?: true
  }

  export type Api_credits_usageMinAggregateInputType = {
    id?: true
    api_key_id?: true
    credits?: true
    usageDate?: true
    user_id?: true
  }

  export type Api_credits_usageMaxAggregateInputType = {
    id?: true
    api_key_id?: true
    credits?: true
    usageDate?: true
    user_id?: true
  }

  export type Api_credits_usageCountAggregateInputType = {
    id?: true
    api_key_id?: true
    credits?: true
    usageDate?: true
    user_id?: true
    _all?: true
  }

  export type Api_credits_usageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which api_credits_usage to aggregate.
     */
    where?: api_credits_usageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_credits_usages to fetch.
     */
    orderBy?: api_credits_usageOrderByWithRelationInput | api_credits_usageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: api_credits_usageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_credits_usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_credits_usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned api_credits_usages
    **/
    _count?: true | Api_credits_usageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Api_credits_usageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Api_credits_usageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Api_credits_usageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Api_credits_usageMaxAggregateInputType
  }

  export type GetApi_credits_usageAggregateType<T extends Api_credits_usageAggregateArgs> = {
        [P in keyof T & keyof AggregateApi_credits_usage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApi_credits_usage[P]>
      : GetScalarType<T[P], AggregateApi_credits_usage[P]>
  }




  export type api_credits_usageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: api_credits_usageWhereInput
    orderBy?: api_credits_usageOrderByWithAggregationInput | api_credits_usageOrderByWithAggregationInput[]
    by: Api_credits_usageScalarFieldEnum[] | Api_credits_usageScalarFieldEnum
    having?: api_credits_usageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Api_credits_usageCountAggregateInputType | true
    _avg?: Api_credits_usageAvgAggregateInputType
    _sum?: Api_credits_usageSumAggregateInputType
    _min?: Api_credits_usageMinAggregateInputType
    _max?: Api_credits_usageMaxAggregateInputType
  }

  export type Api_credits_usageGroupByOutputType = {
    id: string
    api_key_id: string
    credits: number
    usageDate: Date
    user_id: number | null
    _count: Api_credits_usageCountAggregateOutputType | null
    _avg: Api_credits_usageAvgAggregateOutputType | null
    _sum: Api_credits_usageSumAggregateOutputType | null
    _min: Api_credits_usageMinAggregateOutputType | null
    _max: Api_credits_usageMaxAggregateOutputType | null
  }

  type GetApi_credits_usageGroupByPayload<T extends api_credits_usageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Api_credits_usageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Api_credits_usageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Api_credits_usageGroupByOutputType[P]>
            : GetScalarType<T[P], Api_credits_usageGroupByOutputType[P]>
        }
      >
    >


  export type api_credits_usageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    api_key_id?: boolean
    credits?: boolean
    usageDate?: boolean
    user_id?: boolean
    user?: boolean | api_credits_usage$userArgs<ExtArgs>
  }, ExtArgs["result"]["api_credits_usage"]>

  export type api_credits_usageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    api_key_id?: boolean
    credits?: boolean
    usageDate?: boolean
    user_id?: boolean
    user?: boolean | api_credits_usage$userArgs<ExtArgs>
  }, ExtArgs["result"]["api_credits_usage"]>

  export type api_credits_usageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    api_key_id?: boolean
    credits?: boolean
    usageDate?: boolean
    user_id?: boolean
    user?: boolean | api_credits_usage$userArgs<ExtArgs>
  }, ExtArgs["result"]["api_credits_usage"]>

  export type api_credits_usageSelectScalar = {
    id?: boolean
    api_key_id?: boolean
    credits?: boolean
    usageDate?: boolean
    user_id?: boolean
  }

  export type api_credits_usageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "api_key_id" | "credits" | "usageDate" | "user_id", ExtArgs["result"]["api_credits_usage"]>
  export type api_credits_usageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | api_credits_usage$userArgs<ExtArgs>
  }
  export type api_credits_usageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | api_credits_usage$userArgs<ExtArgs>
  }
  export type api_credits_usageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | api_credits_usage$userArgs<ExtArgs>
  }

  export type $api_credits_usagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "api_credits_usage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      api_key_id: string
      credits: number
      usageDate: Date
      user_id: number | null
    }, ExtArgs["result"]["api_credits_usage"]>
    composites: {}
  }

  type api_credits_usageGetPayload<S extends boolean | null | undefined | api_credits_usageDefaultArgs> = $Result.GetResult<Prisma.$api_credits_usagePayload, S>

  type api_credits_usageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<api_credits_usageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Api_credits_usageCountAggregateInputType | true
    }

  export interface api_credits_usageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['api_credits_usage'], meta: { name: 'api_credits_usage' } }
    /**
     * Find zero or one Api_credits_usage that matches the filter.
     * @param {api_credits_usageFindUniqueArgs} args - Arguments to find a Api_credits_usage
     * @example
     * // Get one Api_credits_usage
     * const api_credits_usage = await prisma.api_credits_usage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends api_credits_usageFindUniqueArgs>(args: SelectSubset<T, api_credits_usageFindUniqueArgs<ExtArgs>>): Prisma__api_credits_usageClient<$Result.GetResult<Prisma.$api_credits_usagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Api_credits_usage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {api_credits_usageFindUniqueOrThrowArgs} args - Arguments to find a Api_credits_usage
     * @example
     * // Get one Api_credits_usage
     * const api_credits_usage = await prisma.api_credits_usage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends api_credits_usageFindUniqueOrThrowArgs>(args: SelectSubset<T, api_credits_usageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__api_credits_usageClient<$Result.GetResult<Prisma.$api_credits_usagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api_credits_usage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_credits_usageFindFirstArgs} args - Arguments to find a Api_credits_usage
     * @example
     * // Get one Api_credits_usage
     * const api_credits_usage = await prisma.api_credits_usage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends api_credits_usageFindFirstArgs>(args?: SelectSubset<T, api_credits_usageFindFirstArgs<ExtArgs>>): Prisma__api_credits_usageClient<$Result.GetResult<Prisma.$api_credits_usagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api_credits_usage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_credits_usageFindFirstOrThrowArgs} args - Arguments to find a Api_credits_usage
     * @example
     * // Get one Api_credits_usage
     * const api_credits_usage = await prisma.api_credits_usage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends api_credits_usageFindFirstOrThrowArgs>(args?: SelectSubset<T, api_credits_usageFindFirstOrThrowArgs<ExtArgs>>): Prisma__api_credits_usageClient<$Result.GetResult<Prisma.$api_credits_usagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Api_credits_usages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_credits_usageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Api_credits_usages
     * const api_credits_usages = await prisma.api_credits_usage.findMany()
     * 
     * // Get first 10 Api_credits_usages
     * const api_credits_usages = await prisma.api_credits_usage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const api_credits_usageWithIdOnly = await prisma.api_credits_usage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends api_credits_usageFindManyArgs>(args?: SelectSubset<T, api_credits_usageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_credits_usagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Api_credits_usage.
     * @param {api_credits_usageCreateArgs} args - Arguments to create a Api_credits_usage.
     * @example
     * // Create one Api_credits_usage
     * const Api_credits_usage = await prisma.api_credits_usage.create({
     *   data: {
     *     // ... data to create a Api_credits_usage
     *   }
     * })
     * 
     */
    create<T extends api_credits_usageCreateArgs>(args: SelectSubset<T, api_credits_usageCreateArgs<ExtArgs>>): Prisma__api_credits_usageClient<$Result.GetResult<Prisma.$api_credits_usagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Api_credits_usages.
     * @param {api_credits_usageCreateManyArgs} args - Arguments to create many Api_credits_usages.
     * @example
     * // Create many Api_credits_usages
     * const api_credits_usage = await prisma.api_credits_usage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends api_credits_usageCreateManyArgs>(args?: SelectSubset<T, api_credits_usageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Api_credits_usages and returns the data saved in the database.
     * @param {api_credits_usageCreateManyAndReturnArgs} args - Arguments to create many Api_credits_usages.
     * @example
     * // Create many Api_credits_usages
     * const api_credits_usage = await prisma.api_credits_usage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Api_credits_usages and only return the `id`
     * const api_credits_usageWithIdOnly = await prisma.api_credits_usage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends api_credits_usageCreateManyAndReturnArgs>(args?: SelectSubset<T, api_credits_usageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_credits_usagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Api_credits_usage.
     * @param {api_credits_usageDeleteArgs} args - Arguments to delete one Api_credits_usage.
     * @example
     * // Delete one Api_credits_usage
     * const Api_credits_usage = await prisma.api_credits_usage.delete({
     *   where: {
     *     // ... filter to delete one Api_credits_usage
     *   }
     * })
     * 
     */
    delete<T extends api_credits_usageDeleteArgs>(args: SelectSubset<T, api_credits_usageDeleteArgs<ExtArgs>>): Prisma__api_credits_usageClient<$Result.GetResult<Prisma.$api_credits_usagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Api_credits_usage.
     * @param {api_credits_usageUpdateArgs} args - Arguments to update one Api_credits_usage.
     * @example
     * // Update one Api_credits_usage
     * const api_credits_usage = await prisma.api_credits_usage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends api_credits_usageUpdateArgs>(args: SelectSubset<T, api_credits_usageUpdateArgs<ExtArgs>>): Prisma__api_credits_usageClient<$Result.GetResult<Prisma.$api_credits_usagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Api_credits_usages.
     * @param {api_credits_usageDeleteManyArgs} args - Arguments to filter Api_credits_usages to delete.
     * @example
     * // Delete a few Api_credits_usages
     * const { count } = await prisma.api_credits_usage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends api_credits_usageDeleteManyArgs>(args?: SelectSubset<T, api_credits_usageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Api_credits_usages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_credits_usageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Api_credits_usages
     * const api_credits_usage = await prisma.api_credits_usage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends api_credits_usageUpdateManyArgs>(args: SelectSubset<T, api_credits_usageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Api_credits_usages and returns the data updated in the database.
     * @param {api_credits_usageUpdateManyAndReturnArgs} args - Arguments to update many Api_credits_usages.
     * @example
     * // Update many Api_credits_usages
     * const api_credits_usage = await prisma.api_credits_usage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Api_credits_usages and only return the `id`
     * const api_credits_usageWithIdOnly = await prisma.api_credits_usage.updateManyAndReturn({
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
    updateManyAndReturn<T extends api_credits_usageUpdateManyAndReturnArgs>(args: SelectSubset<T, api_credits_usageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_credits_usagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Api_credits_usage.
     * @param {api_credits_usageUpsertArgs} args - Arguments to update or create a Api_credits_usage.
     * @example
     * // Update or create a Api_credits_usage
     * const api_credits_usage = await prisma.api_credits_usage.upsert({
     *   create: {
     *     // ... data to create a Api_credits_usage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Api_credits_usage we want to update
     *   }
     * })
     */
    upsert<T extends api_credits_usageUpsertArgs>(args: SelectSubset<T, api_credits_usageUpsertArgs<ExtArgs>>): Prisma__api_credits_usageClient<$Result.GetResult<Prisma.$api_credits_usagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Api_credits_usages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_credits_usageCountArgs} args - Arguments to filter Api_credits_usages to count.
     * @example
     * // Count the number of Api_credits_usages
     * const count = await prisma.api_credits_usage.count({
     *   where: {
     *     // ... the filter for the Api_credits_usages we want to count
     *   }
     * })
    **/
    count<T extends api_credits_usageCountArgs>(
      args?: Subset<T, api_credits_usageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Api_credits_usageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Api_credits_usage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Api_credits_usageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Api_credits_usageAggregateArgs>(args: Subset<T, Api_credits_usageAggregateArgs>): Prisma.PrismaPromise<GetApi_credits_usageAggregateType<T>>

    /**
     * Group by Api_credits_usage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_credits_usageGroupByArgs} args - Group by arguments.
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
      T extends api_credits_usageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: api_credits_usageGroupByArgs['orderBy'] }
        : { orderBy?: api_credits_usageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, api_credits_usageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApi_credits_usageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the api_credits_usage model
   */
  readonly fields: api_credits_usageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for api_credits_usage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__api_credits_usageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends api_credits_usage$userArgs<ExtArgs> = {}>(args?: Subset<T, api_credits_usage$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the api_credits_usage model
   */
  interface api_credits_usageFieldRefs {
    readonly id: FieldRef<"api_credits_usage", 'String'>
    readonly api_key_id: FieldRef<"api_credits_usage", 'String'>
    readonly credits: FieldRef<"api_credits_usage", 'Int'>
    readonly usageDate: FieldRef<"api_credits_usage", 'DateTime'>
    readonly user_id: FieldRef<"api_credits_usage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * api_credits_usage findUnique
   */
  export type api_credits_usageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_usage
     */
    select?: api_credits_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_usage
     */
    omit?: api_credits_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_usageInclude<ExtArgs> | null
    /**
     * Filter, which api_credits_usage to fetch.
     */
    where: api_credits_usageWhereUniqueInput
  }

  /**
   * api_credits_usage findUniqueOrThrow
   */
  export type api_credits_usageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_usage
     */
    select?: api_credits_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_usage
     */
    omit?: api_credits_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_usageInclude<ExtArgs> | null
    /**
     * Filter, which api_credits_usage to fetch.
     */
    where: api_credits_usageWhereUniqueInput
  }

  /**
   * api_credits_usage findFirst
   */
  export type api_credits_usageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_usage
     */
    select?: api_credits_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_usage
     */
    omit?: api_credits_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_usageInclude<ExtArgs> | null
    /**
     * Filter, which api_credits_usage to fetch.
     */
    where?: api_credits_usageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_credits_usages to fetch.
     */
    orderBy?: api_credits_usageOrderByWithRelationInput | api_credits_usageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for api_credits_usages.
     */
    cursor?: api_credits_usageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_credits_usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_credits_usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of api_credits_usages.
     */
    distinct?: Api_credits_usageScalarFieldEnum | Api_credits_usageScalarFieldEnum[]
  }

  /**
   * api_credits_usage findFirstOrThrow
   */
  export type api_credits_usageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_usage
     */
    select?: api_credits_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_usage
     */
    omit?: api_credits_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_usageInclude<ExtArgs> | null
    /**
     * Filter, which api_credits_usage to fetch.
     */
    where?: api_credits_usageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_credits_usages to fetch.
     */
    orderBy?: api_credits_usageOrderByWithRelationInput | api_credits_usageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for api_credits_usages.
     */
    cursor?: api_credits_usageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_credits_usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_credits_usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of api_credits_usages.
     */
    distinct?: Api_credits_usageScalarFieldEnum | Api_credits_usageScalarFieldEnum[]
  }

  /**
   * api_credits_usage findMany
   */
  export type api_credits_usageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_usage
     */
    select?: api_credits_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_usage
     */
    omit?: api_credits_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_usageInclude<ExtArgs> | null
    /**
     * Filter, which api_credits_usages to fetch.
     */
    where?: api_credits_usageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_credits_usages to fetch.
     */
    orderBy?: api_credits_usageOrderByWithRelationInput | api_credits_usageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing api_credits_usages.
     */
    cursor?: api_credits_usageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_credits_usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_credits_usages.
     */
    skip?: number
    distinct?: Api_credits_usageScalarFieldEnum | Api_credits_usageScalarFieldEnum[]
  }

  /**
   * api_credits_usage create
   */
  export type api_credits_usageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_usage
     */
    select?: api_credits_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_usage
     */
    omit?: api_credits_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_usageInclude<ExtArgs> | null
    /**
     * The data needed to create a api_credits_usage.
     */
    data: XOR<api_credits_usageCreateInput, api_credits_usageUncheckedCreateInput>
  }

  /**
   * api_credits_usage createMany
   */
  export type api_credits_usageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many api_credits_usages.
     */
    data: api_credits_usageCreateManyInput | api_credits_usageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * api_credits_usage createManyAndReturn
   */
  export type api_credits_usageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_usage
     */
    select?: api_credits_usageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_usage
     */
    omit?: api_credits_usageOmit<ExtArgs> | null
    /**
     * The data used to create many api_credits_usages.
     */
    data: api_credits_usageCreateManyInput | api_credits_usageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_usageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * api_credits_usage update
   */
  export type api_credits_usageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_usage
     */
    select?: api_credits_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_usage
     */
    omit?: api_credits_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_usageInclude<ExtArgs> | null
    /**
     * The data needed to update a api_credits_usage.
     */
    data: XOR<api_credits_usageUpdateInput, api_credits_usageUncheckedUpdateInput>
    /**
     * Choose, which api_credits_usage to update.
     */
    where: api_credits_usageWhereUniqueInput
  }

  /**
   * api_credits_usage updateMany
   */
  export type api_credits_usageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update api_credits_usages.
     */
    data: XOR<api_credits_usageUpdateManyMutationInput, api_credits_usageUncheckedUpdateManyInput>
    /**
     * Filter which api_credits_usages to update
     */
    where?: api_credits_usageWhereInput
    /**
     * Limit how many api_credits_usages to update.
     */
    limit?: number
  }

  /**
   * api_credits_usage updateManyAndReturn
   */
  export type api_credits_usageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_usage
     */
    select?: api_credits_usageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_usage
     */
    omit?: api_credits_usageOmit<ExtArgs> | null
    /**
     * The data used to update api_credits_usages.
     */
    data: XOR<api_credits_usageUpdateManyMutationInput, api_credits_usageUncheckedUpdateManyInput>
    /**
     * Filter which api_credits_usages to update
     */
    where?: api_credits_usageWhereInput
    /**
     * Limit how many api_credits_usages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_usageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * api_credits_usage upsert
   */
  export type api_credits_usageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_usage
     */
    select?: api_credits_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_usage
     */
    omit?: api_credits_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_usageInclude<ExtArgs> | null
    /**
     * The filter to search for the api_credits_usage to update in case it exists.
     */
    where: api_credits_usageWhereUniqueInput
    /**
     * In case the api_credits_usage found by the `where` argument doesn't exist, create a new api_credits_usage with this data.
     */
    create: XOR<api_credits_usageCreateInput, api_credits_usageUncheckedCreateInput>
    /**
     * In case the api_credits_usage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<api_credits_usageUpdateInput, api_credits_usageUncheckedUpdateInput>
  }

  /**
   * api_credits_usage delete
   */
  export type api_credits_usageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_usage
     */
    select?: api_credits_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_usage
     */
    omit?: api_credits_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_usageInclude<ExtArgs> | null
    /**
     * Filter which api_credits_usage to delete.
     */
    where: api_credits_usageWhereUniqueInput
  }

  /**
   * api_credits_usage deleteMany
   */
  export type api_credits_usageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which api_credits_usages to delete
     */
    where?: api_credits_usageWhereInput
    /**
     * Limit how many api_credits_usages to delete.
     */
    limit?: number
  }

  /**
   * api_credits_usage.user
   */
  export type api_credits_usage$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * api_credits_usage without action
   */
  export type api_credits_usageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_credits_usage
     */
    select?: api_credits_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_credits_usage
     */
    omit?: api_credits_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_credits_usageInclude<ExtArgs> | null
  }


  /**
   * Model api_key_permission
   */

  export type AggregateApi_key_permission = {
    _count: Api_key_permissionCountAggregateOutputType | null
    _min: Api_key_permissionMinAggregateOutputType | null
    _max: Api_key_permissionMaxAggregateOutputType | null
  }

  export type Api_key_permissionMinAggregateOutputType = {
    id: string | null
    api_key_id: string | null
    permission: string | null
  }

  export type Api_key_permissionMaxAggregateOutputType = {
    id: string | null
    api_key_id: string | null
    permission: string | null
  }

  export type Api_key_permissionCountAggregateOutputType = {
    id: number
    api_key_id: number
    permission: number
    _all: number
  }


  export type Api_key_permissionMinAggregateInputType = {
    id?: true
    api_key_id?: true
    permission?: true
  }

  export type Api_key_permissionMaxAggregateInputType = {
    id?: true
    api_key_id?: true
    permission?: true
  }

  export type Api_key_permissionCountAggregateInputType = {
    id?: true
    api_key_id?: true
    permission?: true
    _all?: true
  }

  export type Api_key_permissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which api_key_permission to aggregate.
     */
    where?: api_key_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_key_permissions to fetch.
     */
    orderBy?: api_key_permissionOrderByWithRelationInput | api_key_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: api_key_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_key_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_key_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned api_key_permissions
    **/
    _count?: true | Api_key_permissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Api_key_permissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Api_key_permissionMaxAggregateInputType
  }

  export type GetApi_key_permissionAggregateType<T extends Api_key_permissionAggregateArgs> = {
        [P in keyof T & keyof AggregateApi_key_permission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApi_key_permission[P]>
      : GetScalarType<T[P], AggregateApi_key_permission[P]>
  }




  export type api_key_permissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: api_key_permissionWhereInput
    orderBy?: api_key_permissionOrderByWithAggregationInput | api_key_permissionOrderByWithAggregationInput[]
    by: Api_key_permissionScalarFieldEnum[] | Api_key_permissionScalarFieldEnum
    having?: api_key_permissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Api_key_permissionCountAggregateInputType | true
    _min?: Api_key_permissionMinAggregateInputType
    _max?: Api_key_permissionMaxAggregateInputType
  }

  export type Api_key_permissionGroupByOutputType = {
    id: string
    api_key_id: string
    permission: string
    _count: Api_key_permissionCountAggregateOutputType | null
    _min: Api_key_permissionMinAggregateOutputType | null
    _max: Api_key_permissionMaxAggregateOutputType | null
  }

  type GetApi_key_permissionGroupByPayload<T extends api_key_permissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Api_key_permissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Api_key_permissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Api_key_permissionGroupByOutputType[P]>
            : GetScalarType<T[P], Api_key_permissionGroupByOutputType[P]>
        }
      >
    >


  export type api_key_permissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    api_key_id?: boolean
    permission?: boolean
    api_key?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["api_key_permission"]>

  export type api_key_permissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    api_key_id?: boolean
    permission?: boolean
    api_key?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["api_key_permission"]>

  export type api_key_permissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    api_key_id?: boolean
    permission?: boolean
    api_key?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["api_key_permission"]>

  export type api_key_permissionSelectScalar = {
    id?: boolean
    api_key_id?: boolean
    permission?: boolean
  }

  export type api_key_permissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "api_key_id" | "permission", ExtArgs["result"]["api_key_permission"]>
  export type api_key_permissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api_key?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }
  export type api_key_permissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api_key?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }
  export type api_key_permissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api_key?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }

  export type $api_key_permissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "api_key_permission"
    objects: {
      api_key: Prisma.$ApiKeyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      api_key_id: string
      permission: string
    }, ExtArgs["result"]["api_key_permission"]>
    composites: {}
  }

  type api_key_permissionGetPayload<S extends boolean | null | undefined | api_key_permissionDefaultArgs> = $Result.GetResult<Prisma.$api_key_permissionPayload, S>

  type api_key_permissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<api_key_permissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Api_key_permissionCountAggregateInputType | true
    }

  export interface api_key_permissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['api_key_permission'], meta: { name: 'api_key_permission' } }
    /**
     * Find zero or one Api_key_permission that matches the filter.
     * @param {api_key_permissionFindUniqueArgs} args - Arguments to find a Api_key_permission
     * @example
     * // Get one Api_key_permission
     * const api_key_permission = await prisma.api_key_permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends api_key_permissionFindUniqueArgs>(args: SelectSubset<T, api_key_permissionFindUniqueArgs<ExtArgs>>): Prisma__api_key_permissionClient<$Result.GetResult<Prisma.$api_key_permissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Api_key_permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {api_key_permissionFindUniqueOrThrowArgs} args - Arguments to find a Api_key_permission
     * @example
     * // Get one Api_key_permission
     * const api_key_permission = await prisma.api_key_permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends api_key_permissionFindUniqueOrThrowArgs>(args: SelectSubset<T, api_key_permissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__api_key_permissionClient<$Result.GetResult<Prisma.$api_key_permissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api_key_permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_key_permissionFindFirstArgs} args - Arguments to find a Api_key_permission
     * @example
     * // Get one Api_key_permission
     * const api_key_permission = await prisma.api_key_permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends api_key_permissionFindFirstArgs>(args?: SelectSubset<T, api_key_permissionFindFirstArgs<ExtArgs>>): Prisma__api_key_permissionClient<$Result.GetResult<Prisma.$api_key_permissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api_key_permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_key_permissionFindFirstOrThrowArgs} args - Arguments to find a Api_key_permission
     * @example
     * // Get one Api_key_permission
     * const api_key_permission = await prisma.api_key_permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends api_key_permissionFindFirstOrThrowArgs>(args?: SelectSubset<T, api_key_permissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__api_key_permissionClient<$Result.GetResult<Prisma.$api_key_permissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Api_key_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_key_permissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Api_key_permissions
     * const api_key_permissions = await prisma.api_key_permission.findMany()
     * 
     * // Get first 10 Api_key_permissions
     * const api_key_permissions = await prisma.api_key_permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const api_key_permissionWithIdOnly = await prisma.api_key_permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends api_key_permissionFindManyArgs>(args?: SelectSubset<T, api_key_permissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_key_permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Api_key_permission.
     * @param {api_key_permissionCreateArgs} args - Arguments to create a Api_key_permission.
     * @example
     * // Create one Api_key_permission
     * const Api_key_permission = await prisma.api_key_permission.create({
     *   data: {
     *     // ... data to create a Api_key_permission
     *   }
     * })
     * 
     */
    create<T extends api_key_permissionCreateArgs>(args: SelectSubset<T, api_key_permissionCreateArgs<ExtArgs>>): Prisma__api_key_permissionClient<$Result.GetResult<Prisma.$api_key_permissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Api_key_permissions.
     * @param {api_key_permissionCreateManyArgs} args - Arguments to create many Api_key_permissions.
     * @example
     * // Create many Api_key_permissions
     * const api_key_permission = await prisma.api_key_permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends api_key_permissionCreateManyArgs>(args?: SelectSubset<T, api_key_permissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Api_key_permissions and returns the data saved in the database.
     * @param {api_key_permissionCreateManyAndReturnArgs} args - Arguments to create many Api_key_permissions.
     * @example
     * // Create many Api_key_permissions
     * const api_key_permission = await prisma.api_key_permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Api_key_permissions and only return the `id`
     * const api_key_permissionWithIdOnly = await prisma.api_key_permission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends api_key_permissionCreateManyAndReturnArgs>(args?: SelectSubset<T, api_key_permissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_key_permissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Api_key_permission.
     * @param {api_key_permissionDeleteArgs} args - Arguments to delete one Api_key_permission.
     * @example
     * // Delete one Api_key_permission
     * const Api_key_permission = await prisma.api_key_permission.delete({
     *   where: {
     *     // ... filter to delete one Api_key_permission
     *   }
     * })
     * 
     */
    delete<T extends api_key_permissionDeleteArgs>(args: SelectSubset<T, api_key_permissionDeleteArgs<ExtArgs>>): Prisma__api_key_permissionClient<$Result.GetResult<Prisma.$api_key_permissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Api_key_permission.
     * @param {api_key_permissionUpdateArgs} args - Arguments to update one Api_key_permission.
     * @example
     * // Update one Api_key_permission
     * const api_key_permission = await prisma.api_key_permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends api_key_permissionUpdateArgs>(args: SelectSubset<T, api_key_permissionUpdateArgs<ExtArgs>>): Prisma__api_key_permissionClient<$Result.GetResult<Prisma.$api_key_permissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Api_key_permissions.
     * @param {api_key_permissionDeleteManyArgs} args - Arguments to filter Api_key_permissions to delete.
     * @example
     * // Delete a few Api_key_permissions
     * const { count } = await prisma.api_key_permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends api_key_permissionDeleteManyArgs>(args?: SelectSubset<T, api_key_permissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Api_key_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_key_permissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Api_key_permissions
     * const api_key_permission = await prisma.api_key_permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends api_key_permissionUpdateManyArgs>(args: SelectSubset<T, api_key_permissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Api_key_permissions and returns the data updated in the database.
     * @param {api_key_permissionUpdateManyAndReturnArgs} args - Arguments to update many Api_key_permissions.
     * @example
     * // Update many Api_key_permissions
     * const api_key_permission = await prisma.api_key_permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Api_key_permissions and only return the `id`
     * const api_key_permissionWithIdOnly = await prisma.api_key_permission.updateManyAndReturn({
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
    updateManyAndReturn<T extends api_key_permissionUpdateManyAndReturnArgs>(args: SelectSubset<T, api_key_permissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_key_permissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Api_key_permission.
     * @param {api_key_permissionUpsertArgs} args - Arguments to update or create a Api_key_permission.
     * @example
     * // Update or create a Api_key_permission
     * const api_key_permission = await prisma.api_key_permission.upsert({
     *   create: {
     *     // ... data to create a Api_key_permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Api_key_permission we want to update
     *   }
     * })
     */
    upsert<T extends api_key_permissionUpsertArgs>(args: SelectSubset<T, api_key_permissionUpsertArgs<ExtArgs>>): Prisma__api_key_permissionClient<$Result.GetResult<Prisma.$api_key_permissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Api_key_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_key_permissionCountArgs} args - Arguments to filter Api_key_permissions to count.
     * @example
     * // Count the number of Api_key_permissions
     * const count = await prisma.api_key_permission.count({
     *   where: {
     *     // ... the filter for the Api_key_permissions we want to count
     *   }
     * })
    **/
    count<T extends api_key_permissionCountArgs>(
      args?: Subset<T, api_key_permissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Api_key_permissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Api_key_permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Api_key_permissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Api_key_permissionAggregateArgs>(args: Subset<T, Api_key_permissionAggregateArgs>): Prisma.PrismaPromise<GetApi_key_permissionAggregateType<T>>

    /**
     * Group by Api_key_permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_key_permissionGroupByArgs} args - Group by arguments.
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
      T extends api_key_permissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: api_key_permissionGroupByArgs['orderBy'] }
        : { orderBy?: api_key_permissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, api_key_permissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApi_key_permissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the api_key_permission model
   */
  readonly fields: api_key_permissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for api_key_permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__api_key_permissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    api_key<T extends ApiKeyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiKeyDefaultArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the api_key_permission model
   */
  interface api_key_permissionFieldRefs {
    readonly id: FieldRef<"api_key_permission", 'String'>
    readonly api_key_id: FieldRef<"api_key_permission", 'String'>
    readonly permission: FieldRef<"api_key_permission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * api_key_permission findUnique
   */
  export type api_key_permissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key_permission
     */
    select?: api_key_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_key_permission
     */
    omit?: api_key_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_key_permissionInclude<ExtArgs> | null
    /**
     * Filter, which api_key_permission to fetch.
     */
    where: api_key_permissionWhereUniqueInput
  }

  /**
   * api_key_permission findUniqueOrThrow
   */
  export type api_key_permissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key_permission
     */
    select?: api_key_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_key_permission
     */
    omit?: api_key_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_key_permissionInclude<ExtArgs> | null
    /**
     * Filter, which api_key_permission to fetch.
     */
    where: api_key_permissionWhereUniqueInput
  }

  /**
   * api_key_permission findFirst
   */
  export type api_key_permissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key_permission
     */
    select?: api_key_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_key_permission
     */
    omit?: api_key_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_key_permissionInclude<ExtArgs> | null
    /**
     * Filter, which api_key_permission to fetch.
     */
    where?: api_key_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_key_permissions to fetch.
     */
    orderBy?: api_key_permissionOrderByWithRelationInput | api_key_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for api_key_permissions.
     */
    cursor?: api_key_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_key_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_key_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of api_key_permissions.
     */
    distinct?: Api_key_permissionScalarFieldEnum | Api_key_permissionScalarFieldEnum[]
  }

  /**
   * api_key_permission findFirstOrThrow
   */
  export type api_key_permissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key_permission
     */
    select?: api_key_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_key_permission
     */
    omit?: api_key_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_key_permissionInclude<ExtArgs> | null
    /**
     * Filter, which api_key_permission to fetch.
     */
    where?: api_key_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_key_permissions to fetch.
     */
    orderBy?: api_key_permissionOrderByWithRelationInput | api_key_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for api_key_permissions.
     */
    cursor?: api_key_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_key_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_key_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of api_key_permissions.
     */
    distinct?: Api_key_permissionScalarFieldEnum | Api_key_permissionScalarFieldEnum[]
  }

  /**
   * api_key_permission findMany
   */
  export type api_key_permissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key_permission
     */
    select?: api_key_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_key_permission
     */
    omit?: api_key_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_key_permissionInclude<ExtArgs> | null
    /**
     * Filter, which api_key_permissions to fetch.
     */
    where?: api_key_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_key_permissions to fetch.
     */
    orderBy?: api_key_permissionOrderByWithRelationInput | api_key_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing api_key_permissions.
     */
    cursor?: api_key_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_key_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_key_permissions.
     */
    skip?: number
    distinct?: Api_key_permissionScalarFieldEnum | Api_key_permissionScalarFieldEnum[]
  }

  /**
   * api_key_permission create
   */
  export type api_key_permissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key_permission
     */
    select?: api_key_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_key_permission
     */
    omit?: api_key_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_key_permissionInclude<ExtArgs> | null
    /**
     * The data needed to create a api_key_permission.
     */
    data: XOR<api_key_permissionCreateInput, api_key_permissionUncheckedCreateInput>
  }

  /**
   * api_key_permission createMany
   */
  export type api_key_permissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many api_key_permissions.
     */
    data: api_key_permissionCreateManyInput | api_key_permissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * api_key_permission createManyAndReturn
   */
  export type api_key_permissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key_permission
     */
    select?: api_key_permissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the api_key_permission
     */
    omit?: api_key_permissionOmit<ExtArgs> | null
    /**
     * The data used to create many api_key_permissions.
     */
    data: api_key_permissionCreateManyInput | api_key_permissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_key_permissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * api_key_permission update
   */
  export type api_key_permissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key_permission
     */
    select?: api_key_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_key_permission
     */
    omit?: api_key_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_key_permissionInclude<ExtArgs> | null
    /**
     * The data needed to update a api_key_permission.
     */
    data: XOR<api_key_permissionUpdateInput, api_key_permissionUncheckedUpdateInput>
    /**
     * Choose, which api_key_permission to update.
     */
    where: api_key_permissionWhereUniqueInput
  }

  /**
   * api_key_permission updateMany
   */
  export type api_key_permissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update api_key_permissions.
     */
    data: XOR<api_key_permissionUpdateManyMutationInput, api_key_permissionUncheckedUpdateManyInput>
    /**
     * Filter which api_key_permissions to update
     */
    where?: api_key_permissionWhereInput
    /**
     * Limit how many api_key_permissions to update.
     */
    limit?: number
  }

  /**
   * api_key_permission updateManyAndReturn
   */
  export type api_key_permissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key_permission
     */
    select?: api_key_permissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the api_key_permission
     */
    omit?: api_key_permissionOmit<ExtArgs> | null
    /**
     * The data used to update api_key_permissions.
     */
    data: XOR<api_key_permissionUpdateManyMutationInput, api_key_permissionUncheckedUpdateManyInput>
    /**
     * Filter which api_key_permissions to update
     */
    where?: api_key_permissionWhereInput
    /**
     * Limit how many api_key_permissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_key_permissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * api_key_permission upsert
   */
  export type api_key_permissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key_permission
     */
    select?: api_key_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_key_permission
     */
    omit?: api_key_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_key_permissionInclude<ExtArgs> | null
    /**
     * The filter to search for the api_key_permission to update in case it exists.
     */
    where: api_key_permissionWhereUniqueInput
    /**
     * In case the api_key_permission found by the `where` argument doesn't exist, create a new api_key_permission with this data.
     */
    create: XOR<api_key_permissionCreateInput, api_key_permissionUncheckedCreateInput>
    /**
     * In case the api_key_permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<api_key_permissionUpdateInput, api_key_permissionUncheckedUpdateInput>
  }

  /**
   * api_key_permission delete
   */
  export type api_key_permissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key_permission
     */
    select?: api_key_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_key_permission
     */
    omit?: api_key_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_key_permissionInclude<ExtArgs> | null
    /**
     * Filter which api_key_permission to delete.
     */
    where: api_key_permissionWhereUniqueInput
  }

  /**
   * api_key_permission deleteMany
   */
  export type api_key_permissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which api_key_permissions to delete
     */
    where?: api_key_permissionWhereInput
    /**
     * Limit how many api_key_permissions to delete.
     */
    limit?: number
  }

  /**
   * api_key_permission without action
   */
  export type api_key_permissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key_permission
     */
    select?: api_key_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_key_permission
     */
    omit?: api_key_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_key_permissionInclude<ExtArgs> | null
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


  export const LearningAccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    username: 'username',
    passwordHash: 'passwordHash',
    school: 'school',
    baseUrl: 'baseUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LearningAccountScalarFieldEnum = (typeof LearningAccountScalarFieldEnum)[keyof typeof LearningAccountScalarFieldEnum]


  export const ApiKeyCreditsBalanceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    credits: 'credits',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApiKeyCreditsBalanceScalarFieldEnum = (typeof ApiKeyCreditsBalanceScalarFieldEnum)[keyof typeof ApiKeyCreditsBalanceScalarFieldEnum]


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
    description: 'description',
    createdAt: 'createdAt',
    lastRequest: 'lastRequest',
    name: 'name'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


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


  export const Api_credits_purchaseScalarFieldEnum: {
    id: 'id',
    credits: 'credits',
    purchaseDate: 'purchaseDate',
    user_id: 'user_id'
  };

  export type Api_credits_purchaseScalarFieldEnum = (typeof Api_credits_purchaseScalarFieldEnum)[keyof typeof Api_credits_purchaseScalarFieldEnum]


  export const Api_credits_usageScalarFieldEnum: {
    id: 'id',
    api_key_id: 'api_key_id',
    credits: 'credits',
    usageDate: 'usageDate',
    user_id: 'user_id'
  };

  export type Api_credits_usageScalarFieldEnum = (typeof Api_credits_usageScalarFieldEnum)[keyof typeof Api_credits_usageScalarFieldEnum]


  export const Api_key_permissionScalarFieldEnum: {
    id: 'id',
    api_key_id: 'api_key_id',
    permission: 'permission'
  };

  export type Api_key_permissionScalarFieldEnum = (typeof Api_key_permissionScalarFieldEnum)[keyof typeof Api_key_permissionScalarFieldEnum]


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
   * Reference to a field of type 'AccountType'
   */
  export type EnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType'>
    


  /**
   * Reference to a field of type 'AccountType[]'
   */
  export type ListEnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType[]'>
    


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
    subscriptions?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    api_credits_purchase?: Api_credits_purchaseListRelationFilter
    api_credits_usage?: Api_credits_usageListRelationFilter
    apiKeys?: ApiKeyListRelationFilter
    calendarAccounts?: CalendarAccountListRelationFilter
    emailVerifications?: EmailVerificationRequestListRelationFilter
    passwordResets?: PasswordResetSessionListRelationFilter
    sessions?: SessionListRelationFilter
    creditsBalance?: ApiKeyCreditsBalanceListRelationFilter
    LearningAccounts?: LearningAccountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    emailVerified?: SortOrder
    totpKey?: SortOrderInput | SortOrder
    recoveryCode?: SortOrder
    subscriptions?: SubscriptionOrderByWithRelationInput
    api_credits_purchase?: api_credits_purchaseOrderByRelationAggregateInput
    api_credits_usage?: api_credits_usageOrderByRelationAggregateInput
    apiKeys?: ApiKeyOrderByRelationAggregateInput
    calendarAccounts?: CalendarAccountOrderByRelationAggregateInput
    emailVerifications?: EmailVerificationRequestOrderByRelationAggregateInput
    passwordResets?: PasswordResetSessionOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    creditsBalance?: ApiKeyCreditsBalanceOrderByRelationAggregateInput
    LearningAccounts?: LearningAccountOrderByRelationAggregateInput
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
    subscriptions?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    api_credits_purchase?: Api_credits_purchaseListRelationFilter
    api_credits_usage?: Api_credits_usageListRelationFilter
    apiKeys?: ApiKeyListRelationFilter
    calendarAccounts?: CalendarAccountListRelationFilter
    emailVerifications?: EmailVerificationRequestListRelationFilter
    passwordResets?: PasswordResetSessionListRelationFilter
    sessions?: SessionListRelationFilter
    creditsBalance?: ApiKeyCreditsBalanceListRelationFilter
    LearningAccounts?: LearningAccountListRelationFilter
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

  export type LearningAccountWhereInput = {
    AND?: LearningAccountWhereInput | LearningAccountWhereInput[]
    OR?: LearningAccountWhereInput[]
    NOT?: LearningAccountWhereInput | LearningAccountWhereInput[]
    id?: IntFilter<"LearningAccount"> | number
    userId?: IntFilter<"LearningAccount"> | number
    type?: EnumAccountTypeFilter<"LearningAccount"> | $Enums.AccountType
    username?: StringFilter<"LearningAccount"> | string
    passwordHash?: StringFilter<"LearningAccount"> | string
    school?: StringFilter<"LearningAccount"> | string
    baseUrl?: StringFilter<"LearningAccount"> | string
    createdAt?: DateTimeFilter<"LearningAccount"> | Date | string
    updatedAt?: DateTimeFilter<"LearningAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LearningAccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    school?: SortOrder
    baseUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LearningAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_type?: LearningAccountUserIdTypeCompoundUniqueInput
    AND?: LearningAccountWhereInput | LearningAccountWhereInput[]
    OR?: LearningAccountWhereInput[]
    NOT?: LearningAccountWhereInput | LearningAccountWhereInput[]
    userId?: IntFilter<"LearningAccount"> | number
    type?: EnumAccountTypeFilter<"LearningAccount"> | $Enums.AccountType
    username?: StringFilter<"LearningAccount"> | string
    passwordHash?: StringFilter<"LearningAccount"> | string
    school?: StringFilter<"LearningAccount"> | string
    baseUrl?: StringFilter<"LearningAccount"> | string
    createdAt?: DateTimeFilter<"LearningAccount"> | Date | string
    updatedAt?: DateTimeFilter<"LearningAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_type">

  export type LearningAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    school?: SortOrder
    baseUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LearningAccountCountOrderByAggregateInput
    _avg?: LearningAccountAvgOrderByAggregateInput
    _max?: LearningAccountMaxOrderByAggregateInput
    _min?: LearningAccountMinOrderByAggregateInput
    _sum?: LearningAccountSumOrderByAggregateInput
  }

  export type LearningAccountScalarWhereWithAggregatesInput = {
    AND?: LearningAccountScalarWhereWithAggregatesInput | LearningAccountScalarWhereWithAggregatesInput[]
    OR?: LearningAccountScalarWhereWithAggregatesInput[]
    NOT?: LearningAccountScalarWhereWithAggregatesInput | LearningAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LearningAccount"> | number
    userId?: IntWithAggregatesFilter<"LearningAccount"> | number
    type?: EnumAccountTypeWithAggregatesFilter<"LearningAccount"> | $Enums.AccountType
    username?: StringWithAggregatesFilter<"LearningAccount"> | string
    passwordHash?: StringWithAggregatesFilter<"LearningAccount"> | string
    school?: StringWithAggregatesFilter<"LearningAccount"> | string
    baseUrl?: StringWithAggregatesFilter<"LearningAccount"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LearningAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LearningAccount"> | Date | string
  }

  export type ApiKeyCreditsBalanceWhereInput = {
    AND?: ApiKeyCreditsBalanceWhereInput | ApiKeyCreditsBalanceWhereInput[]
    OR?: ApiKeyCreditsBalanceWhereInput[]
    NOT?: ApiKeyCreditsBalanceWhereInput | ApiKeyCreditsBalanceWhereInput[]
    id?: StringFilter<"ApiKeyCreditsBalance"> | string
    userId?: IntFilter<"ApiKeyCreditsBalance"> | number
    credits?: IntFilter<"ApiKeyCreditsBalance"> | number
    createdAt?: DateTimeFilter<"ApiKeyCreditsBalance"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKeyCreditsBalance"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ApiKeyCreditsBalanceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ApiKeyCreditsBalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: number
    AND?: ApiKeyCreditsBalanceWhereInput | ApiKeyCreditsBalanceWhereInput[]
    OR?: ApiKeyCreditsBalanceWhereInput[]
    NOT?: ApiKeyCreditsBalanceWhereInput | ApiKeyCreditsBalanceWhereInput[]
    credits?: IntFilter<"ApiKeyCreditsBalance"> | number
    createdAt?: DateTimeFilter<"ApiKeyCreditsBalance"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKeyCreditsBalance"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id" | "userId">

  export type ApiKeyCreditsBalanceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApiKeyCreditsBalanceCountOrderByAggregateInput
    _avg?: ApiKeyCreditsBalanceAvgOrderByAggregateInput
    _max?: ApiKeyCreditsBalanceMaxOrderByAggregateInput
    _min?: ApiKeyCreditsBalanceMinOrderByAggregateInput
    _sum?: ApiKeyCreditsBalanceSumOrderByAggregateInput
  }

  export type ApiKeyCreditsBalanceScalarWhereWithAggregatesInput = {
    AND?: ApiKeyCreditsBalanceScalarWhereWithAggregatesInput | ApiKeyCreditsBalanceScalarWhereWithAggregatesInput[]
    OR?: ApiKeyCreditsBalanceScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyCreditsBalanceScalarWhereWithAggregatesInput | ApiKeyCreditsBalanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKeyCreditsBalance"> | string
    userId?: IntWithAggregatesFilter<"ApiKeyCreditsBalance"> | number
    credits?: IntWithAggregatesFilter<"ApiKeyCreditsBalance"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ApiKeyCreditsBalance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApiKeyCreditsBalance"> | Date | string
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
    description?: StringNullableFilter<"ApiKey"> | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    lastRequest?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    name?: StringFilter<"ApiKey"> | string
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    api_key_permission?: Api_key_permissionListRelationFilter
    usageLogs?: ApiUsageLogListRelationFilter
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    unlimited?: SortOrder
    minInterval?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastRequest?: SortOrderInput | SortOrder
    name?: SortOrder
    owner?: UserOrderByWithRelationInput
    api_key_permission?: api_key_permissionOrderByRelationAggregateInput
    usageLogs?: ApiUsageLogOrderByRelationAggregateInput
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
    description?: StringNullableFilter<"ApiKey"> | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    lastRequest?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    name?: StringFilter<"ApiKey"> | string
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    api_key_permission?: Api_key_permissionListRelationFilter
    usageLogs?: ApiUsageLogListRelationFilter
  }, "id" | "key">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    unlimited?: SortOrder
    minInterval?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastRequest?: SortOrderInput | SortOrder
    name?: SortOrder
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
    description?: StringNullableWithAggregatesFilter<"ApiKey"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
    lastRequest?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    name?: StringWithAggregatesFilter<"ApiKey"> | string
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
    apiKeyId?: StringNullableFilter<"ApiUsageLog"> | string | null
    apiKey?: XOR<ApiKeyNullableScalarRelationFilter, ApiKeyWhereInput> | null
  }

  export type ApiUsageLogOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    endpoint?: SortOrder
    params?: SortOrder
    statusCode?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    apiKeyId?: SortOrderInput | SortOrder
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
    apiKeyId?: StringNullableFilter<"ApiUsageLog"> | string | null
    apiKey?: XOR<ApiKeyNullableScalarRelationFilter, ApiKeyWhereInput> | null
  }, "id">

  export type ApiUsageLogOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    endpoint?: SortOrder
    params?: SortOrder
    statusCode?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    apiKeyId?: SortOrderInput | SortOrder
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
    apiKeyId?: StringNullableWithAggregatesFilter<"ApiUsageLog"> | string | null
  }

  export type TimetableCacheWhereInput = {
    AND?: TimetableCacheWhereInput | TimetableCacheWhereInput[]
    OR?: TimetableCacheWhereInput[]
    NOT?: TimetableCacheWhereInput | TimetableCacheWhereInput[]
    id?: StringFilter<"TimetableCache"> | string
    username?: StringFilter<"TimetableCache"> | string
    school?: StringFilter<"TimetableCache"> | string
    date?: StringFilter<"TimetableCache"> | string
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
    date?: StringFilter<"TimetableCache"> | string
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
    date?: StringWithAggregatesFilter<"TimetableCache"> | string
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

  export type api_credits_purchaseWhereInput = {
    AND?: api_credits_purchaseWhereInput | api_credits_purchaseWhereInput[]
    OR?: api_credits_purchaseWhereInput[]
    NOT?: api_credits_purchaseWhereInput | api_credits_purchaseWhereInput[]
    id?: StringFilter<"api_credits_purchase"> | string
    credits?: IntFilter<"api_credits_purchase"> | number
    purchaseDate?: DateTimeFilter<"api_credits_purchase"> | Date | string
    user_id?: IntNullableFilter<"api_credits_purchase"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type api_credits_purchaseOrderByWithRelationInput = {
    id?: SortOrder
    credits?: SortOrder
    purchaseDate?: SortOrder
    user_id?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type api_credits_purchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: api_credits_purchaseWhereInput | api_credits_purchaseWhereInput[]
    OR?: api_credits_purchaseWhereInput[]
    NOT?: api_credits_purchaseWhereInput | api_credits_purchaseWhereInput[]
    credits?: IntFilter<"api_credits_purchase"> | number
    purchaseDate?: DateTimeFilter<"api_credits_purchase"> | Date | string
    user_id?: IntNullableFilter<"api_credits_purchase"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type api_credits_purchaseOrderByWithAggregationInput = {
    id?: SortOrder
    credits?: SortOrder
    purchaseDate?: SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: api_credits_purchaseCountOrderByAggregateInput
    _avg?: api_credits_purchaseAvgOrderByAggregateInput
    _max?: api_credits_purchaseMaxOrderByAggregateInput
    _min?: api_credits_purchaseMinOrderByAggregateInput
    _sum?: api_credits_purchaseSumOrderByAggregateInput
  }

  export type api_credits_purchaseScalarWhereWithAggregatesInput = {
    AND?: api_credits_purchaseScalarWhereWithAggregatesInput | api_credits_purchaseScalarWhereWithAggregatesInput[]
    OR?: api_credits_purchaseScalarWhereWithAggregatesInput[]
    NOT?: api_credits_purchaseScalarWhereWithAggregatesInput | api_credits_purchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"api_credits_purchase"> | string
    credits?: IntWithAggregatesFilter<"api_credits_purchase"> | number
    purchaseDate?: DateTimeWithAggregatesFilter<"api_credits_purchase"> | Date | string
    user_id?: IntNullableWithAggregatesFilter<"api_credits_purchase"> | number | null
  }

  export type api_credits_usageWhereInput = {
    AND?: api_credits_usageWhereInput | api_credits_usageWhereInput[]
    OR?: api_credits_usageWhereInput[]
    NOT?: api_credits_usageWhereInput | api_credits_usageWhereInput[]
    id?: StringFilter<"api_credits_usage"> | string
    api_key_id?: StringFilter<"api_credits_usage"> | string
    credits?: IntFilter<"api_credits_usage"> | number
    usageDate?: DateTimeFilter<"api_credits_usage"> | Date | string
    user_id?: IntNullableFilter<"api_credits_usage"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type api_credits_usageOrderByWithRelationInput = {
    id?: SortOrder
    api_key_id?: SortOrder
    credits?: SortOrder
    usageDate?: SortOrder
    user_id?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type api_credits_usageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: api_credits_usageWhereInput | api_credits_usageWhereInput[]
    OR?: api_credits_usageWhereInput[]
    NOT?: api_credits_usageWhereInput | api_credits_usageWhereInput[]
    api_key_id?: StringFilter<"api_credits_usage"> | string
    credits?: IntFilter<"api_credits_usage"> | number
    usageDate?: DateTimeFilter<"api_credits_usage"> | Date | string
    user_id?: IntNullableFilter<"api_credits_usage"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type api_credits_usageOrderByWithAggregationInput = {
    id?: SortOrder
    api_key_id?: SortOrder
    credits?: SortOrder
    usageDate?: SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: api_credits_usageCountOrderByAggregateInput
    _avg?: api_credits_usageAvgOrderByAggregateInput
    _max?: api_credits_usageMaxOrderByAggregateInput
    _min?: api_credits_usageMinOrderByAggregateInput
    _sum?: api_credits_usageSumOrderByAggregateInput
  }

  export type api_credits_usageScalarWhereWithAggregatesInput = {
    AND?: api_credits_usageScalarWhereWithAggregatesInput | api_credits_usageScalarWhereWithAggregatesInput[]
    OR?: api_credits_usageScalarWhereWithAggregatesInput[]
    NOT?: api_credits_usageScalarWhereWithAggregatesInput | api_credits_usageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"api_credits_usage"> | string
    api_key_id?: StringWithAggregatesFilter<"api_credits_usage"> | string
    credits?: IntWithAggregatesFilter<"api_credits_usage"> | number
    usageDate?: DateTimeWithAggregatesFilter<"api_credits_usage"> | Date | string
    user_id?: IntNullableWithAggregatesFilter<"api_credits_usage"> | number | null
  }

  export type api_key_permissionWhereInput = {
    AND?: api_key_permissionWhereInput | api_key_permissionWhereInput[]
    OR?: api_key_permissionWhereInput[]
    NOT?: api_key_permissionWhereInput | api_key_permissionWhereInput[]
    id?: StringFilter<"api_key_permission"> | string
    api_key_id?: StringFilter<"api_key_permission"> | string
    permission?: StringFilter<"api_key_permission"> | string
    api_key?: XOR<ApiKeyScalarRelationFilter, ApiKeyWhereInput>
  }

  export type api_key_permissionOrderByWithRelationInput = {
    id?: SortOrder
    api_key_id?: SortOrder
    permission?: SortOrder
    api_key?: ApiKeyOrderByWithRelationInput
  }

  export type api_key_permissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: api_key_permissionWhereInput | api_key_permissionWhereInput[]
    OR?: api_key_permissionWhereInput[]
    NOT?: api_key_permissionWhereInput | api_key_permissionWhereInput[]
    api_key_id?: StringFilter<"api_key_permission"> | string
    permission?: StringFilter<"api_key_permission"> | string
    api_key?: XOR<ApiKeyScalarRelationFilter, ApiKeyWhereInput>
  }, "id">

  export type api_key_permissionOrderByWithAggregationInput = {
    id?: SortOrder
    api_key_id?: SortOrder
    permission?: SortOrder
    _count?: api_key_permissionCountOrderByAggregateInput
    _max?: api_key_permissionMaxOrderByAggregateInput
    _min?: api_key_permissionMinOrderByAggregateInput
  }

  export type api_key_permissionScalarWhereWithAggregatesInput = {
    AND?: api_key_permissionScalarWhereWithAggregatesInput | api_key_permissionScalarWhereWithAggregatesInput[]
    OR?: api_key_permissionScalarWhereWithAggregatesInput[]
    NOT?: api_key_permissionScalarWhereWithAggregatesInput | api_key_permissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"api_key_permission"> | string
    api_key_id?: StringWithAggregatesFilter<"api_key_permission"> | string
    permission?: StringWithAggregatesFilter<"api_key_permission"> | string
  }

  export type UserCreateInput = {
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    subscriptions?: SubscriptionCreateNestedOneWithoutUserInput
    api_credits_purchase?: api_credits_purchaseCreateNestedManyWithoutUserInput
    api_credits_usage?: api_credits_usageCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    creditsBalance?: ApiKeyCreditsBalanceCreateNestedManyWithoutUserInput
    LearningAccounts?: LearningAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    subscriptions?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    api_credits_purchase?: api_credits_purchaseUncheckedCreateNestedManyWithoutUserInput
    api_credits_usage?: api_credits_usageUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    creditsBalance?: ApiKeyCreditsBalanceUncheckedCreateNestedManyWithoutUserInput
    LearningAccounts?: LearningAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    subscriptions?: SubscriptionUpdateOneWithoutUserNestedInput
    api_credits_purchase?: api_credits_purchaseUpdateManyWithoutUserNestedInput
    api_credits_usage?: api_credits_usageUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    creditsBalance?: ApiKeyCreditsBalanceUpdateManyWithoutUserNestedInput
    LearningAccounts?: LearningAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    subscriptions?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    api_credits_purchase?: api_credits_purchaseUncheckedUpdateManyWithoutUserNestedInput
    api_credits_usage?: api_credits_usageUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    creditsBalance?: ApiKeyCreditsBalanceUncheckedUpdateManyWithoutUserNestedInput
    LearningAccounts?: LearningAccountUncheckedUpdateManyWithoutUserNestedInput
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

  export type LearningAccountCreateInput = {
    type: $Enums.AccountType
    username: string
    passwordHash: string
    school: string
    baseUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLearningAccountsInput
  }

  export type LearningAccountUncheckedCreateInput = {
    id?: number
    userId: number
    type: $Enums.AccountType
    username: string
    passwordHash: string
    school: string
    baseUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningAccountUpdateInput = {
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLearningAccountsNestedInput
  }

  export type LearningAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningAccountCreateManyInput = {
    id?: number
    userId: number
    type: $Enums.AccountType
    username: string
    passwordHash: string
    school: string
    baseUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningAccountUpdateManyMutationInput = {
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreditsBalanceCreateInput = {
    id?: string
    credits: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCreditsBalanceInput
  }

  export type ApiKeyCreditsBalanceUncheckedCreateInput = {
    id?: string
    userId: number
    credits: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyCreditsBalanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCreditsBalanceNestedInput
  }

  export type ApiKeyCreditsBalanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreditsBalanceCreateManyInput = {
    id?: string
    userId: number
    credits: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyCreditsBalanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreditsBalanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    description?: string | null
    createdAt?: Date | string
    lastRequest?: Date | string | null
    name: string
    owner?: UserCreateNestedOneWithoutApiKeysInput
    api_key_permission?: api_key_permissionCreateNestedManyWithoutApi_keyInput
    usageLogs?: ApiUsageLogCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    key: string
    unlimited: boolean
    minInterval?: number
    ownerId?: number | null
    description?: string | null
    createdAt?: Date | string
    lastRequest?: Date | string | null
    name: string
    api_key_permission?: api_key_permissionUncheckedCreateNestedManyWithoutApi_keyInput
    usageLogs?: ApiUsageLogUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    unlimited?: BoolFieldUpdateOperationsInput | boolean
    minInterval?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRequest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneWithoutApiKeysNestedInput
    api_key_permission?: api_key_permissionUpdateManyWithoutApi_keyNestedInput
    usageLogs?: ApiUsageLogUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    unlimited?: BoolFieldUpdateOperationsInput | boolean
    minInterval?: IntFieldUpdateOperationsInput | number
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRequest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    api_key_permission?: api_key_permissionUncheckedUpdateManyWithoutApi_keyNestedInput
    usageLogs?: ApiUsageLogUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    key: string
    unlimited: boolean
    minInterval?: number
    ownerId?: number | null
    description?: string | null
    createdAt?: Date | string
    lastRequest?: Date | string | null
    name: string
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    unlimited?: BoolFieldUpdateOperationsInput | boolean
    minInterval?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRequest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    unlimited?: BoolFieldUpdateOperationsInput | boolean
    minInterval?: IntFieldUpdateOperationsInput | number
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRequest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ApiUsageLogCreateInput = {
    id?: string
    timestamp?: Date | string
    endpoint: string
    params: JsonNullValueInput | InputJsonValue
    statusCode: number
    ipAddress?: string | null
    userAgent?: string | null
    apiKey?: ApiKeyCreateNestedOneWithoutUsageLogsInput
  }

  export type ApiUsageLogUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    endpoint: string
    params: JsonNullValueInput | InputJsonValue
    statusCode: number
    ipAddress?: string | null
    userAgent?: string | null
    apiKeyId?: string | null
  }

  export type ApiUsageLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: StringFieldUpdateOperationsInput | string
    params?: JsonNullValueInput | InputJsonValue
    statusCode?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: ApiKeyUpdateOneWithoutUsageLogsNestedInput
  }

  export type ApiUsageLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: StringFieldUpdateOperationsInput | string
    params?: JsonNullValueInput | InputJsonValue
    statusCode?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApiUsageLogCreateManyInput = {
    id?: string
    timestamp?: Date | string
    endpoint: string
    params: JsonNullValueInput | InputJsonValue
    statusCode: number
    ipAddress?: string | null
    userAgent?: string | null
    apiKeyId?: string | null
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
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TimetableCacheCreateInput = {
    id?: string
    username: string
    school: string
    date: string
    data: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
  }

  export type TimetableCacheUncheckedCreateInput = {
    id?: string
    username: string
    school: string
    date: string
    data: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
  }

  export type TimetableCacheUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimetableCacheUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimetableCacheCreateManyInput = {
    id?: string
    username: string
    school: string
    date: string
    data: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
  }

  export type TimetableCacheUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimetableCacheUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
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

  export type api_credits_purchaseCreateInput = {
    id?: string
    credits: number
    purchaseDate?: Date | string
    user?: UserCreateNestedOneWithoutApi_credits_purchaseInput
  }

  export type api_credits_purchaseUncheckedCreateInput = {
    id?: string
    credits: number
    purchaseDate?: Date | string
    user_id?: number | null
  }

  export type api_credits_purchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutApi_credits_purchaseNestedInput
  }

  export type api_credits_purchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type api_credits_purchaseCreateManyInput = {
    id?: string
    credits: number
    purchaseDate?: Date | string
    user_id?: number | null
  }

  export type api_credits_purchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type api_credits_purchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type api_credits_usageCreateInput = {
    id?: string
    api_key_id: string
    credits: number
    usageDate?: Date | string
    user?: UserCreateNestedOneWithoutApi_credits_usageInput
  }

  export type api_credits_usageUncheckedCreateInput = {
    id?: string
    api_key_id: string
    credits: number
    usageDate?: Date | string
    user_id?: number | null
  }

  export type api_credits_usageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    api_key_id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    usageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutApi_credits_usageNestedInput
  }

  export type api_credits_usageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    api_key_id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    usageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type api_credits_usageCreateManyInput = {
    id?: string
    api_key_id: string
    credits: number
    usageDate?: Date | string
    user_id?: number | null
  }

  export type api_credits_usageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    api_key_id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    usageDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type api_credits_usageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    api_key_id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    usageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type api_key_permissionCreateInput = {
    id: string
    permission: string
    api_key: ApiKeyCreateNestedOneWithoutApi_key_permissionInput
  }

  export type api_key_permissionUncheckedCreateInput = {
    id: string
    api_key_id: string
    permission: string
  }

  export type api_key_permissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    api_key?: ApiKeyUpdateOneRequiredWithoutApi_key_permissionNestedInput
  }

  export type api_key_permissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    api_key_id?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
  }

  export type api_key_permissionCreateManyInput = {
    id: string
    api_key_id: string
    permission: string
  }

  export type api_key_permissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
  }

  export type api_key_permissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    api_key_id?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
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

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type Api_credits_purchaseListRelationFilter = {
    every?: api_credits_purchaseWhereInput
    some?: api_credits_purchaseWhereInput
    none?: api_credits_purchaseWhereInput
  }

  export type Api_credits_usageListRelationFilter = {
    every?: api_credits_usageWhereInput
    some?: api_credits_usageWhereInput
    none?: api_credits_usageWhereInput
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

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ApiKeyCreditsBalanceListRelationFilter = {
    every?: ApiKeyCreditsBalanceWhereInput
    some?: ApiKeyCreditsBalanceWhereInput
    none?: ApiKeyCreditsBalanceWhereInput
  }

  export type LearningAccountListRelationFilter = {
    every?: LearningAccountWhereInput
    some?: LearningAccountWhereInput
    none?: LearningAccountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type api_credits_purchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type api_credits_usageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CalendarAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailVerificationRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordResetSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiKeyCreditsBalanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LearningAccountOrderByRelationAggregateInput = {
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

  export type EnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
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

  export type LearningAccountUserIdTypeCompoundUniqueInput = {
    userId: number
    type: $Enums.AccountType
  }

  export type LearningAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    school?: SortOrder
    baseUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LearningAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    school?: SortOrder
    baseUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    school?: SortOrder
    baseUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningAccountSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
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

  export type ApiKeyCreditsBalanceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyCreditsBalanceAvgOrderByAggregateInput = {
    userId?: SortOrder
    credits?: SortOrder
  }

  export type ApiKeyCreditsBalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyCreditsBalanceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyCreditsBalanceSumOrderByAggregateInput = {
    userId?: SortOrder
    credits?: SortOrder
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

  export type Api_key_permissionListRelationFilter = {
    every?: api_key_permissionWhereInput
    some?: api_key_permissionWhereInput
    none?: api_key_permissionWhereInput
  }

  export type ApiUsageLogListRelationFilter = {
    every?: ApiUsageLogWhereInput
    some?: ApiUsageLogWhereInput
    none?: ApiUsageLogWhereInput
  }

  export type api_key_permissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiUsageLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    unlimited?: SortOrder
    minInterval?: SortOrder
    ownerId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    lastRequest?: SortOrder
    name?: SortOrder
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
    description?: SortOrder
    createdAt?: SortOrder
    lastRequest?: SortOrder
    name?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    unlimited?: SortOrder
    minInterval?: SortOrder
    ownerId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    lastRequest?: SortOrder
    name?: SortOrder
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

  export type ApiKeyNullableScalarRelationFilter = {
    is?: ApiKeyWhereInput | null
    isNot?: ApiKeyWhereInput | null
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

  export type api_credits_purchaseCountOrderByAggregateInput = {
    id?: SortOrder
    credits?: SortOrder
    purchaseDate?: SortOrder
    user_id?: SortOrder
  }

  export type api_credits_purchaseAvgOrderByAggregateInput = {
    credits?: SortOrder
    user_id?: SortOrder
  }

  export type api_credits_purchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    credits?: SortOrder
    purchaseDate?: SortOrder
    user_id?: SortOrder
  }

  export type api_credits_purchaseMinOrderByAggregateInput = {
    id?: SortOrder
    credits?: SortOrder
    purchaseDate?: SortOrder
    user_id?: SortOrder
  }

  export type api_credits_purchaseSumOrderByAggregateInput = {
    credits?: SortOrder
    user_id?: SortOrder
  }

  export type api_credits_usageCountOrderByAggregateInput = {
    id?: SortOrder
    api_key_id?: SortOrder
    credits?: SortOrder
    usageDate?: SortOrder
    user_id?: SortOrder
  }

  export type api_credits_usageAvgOrderByAggregateInput = {
    credits?: SortOrder
    user_id?: SortOrder
  }

  export type api_credits_usageMaxOrderByAggregateInput = {
    id?: SortOrder
    api_key_id?: SortOrder
    credits?: SortOrder
    usageDate?: SortOrder
    user_id?: SortOrder
  }

  export type api_credits_usageMinOrderByAggregateInput = {
    id?: SortOrder
    api_key_id?: SortOrder
    credits?: SortOrder
    usageDate?: SortOrder
    user_id?: SortOrder
  }

  export type api_credits_usageSumOrderByAggregateInput = {
    credits?: SortOrder
    user_id?: SortOrder
  }

  export type ApiKeyScalarRelationFilter = {
    is?: ApiKeyWhereInput
    isNot?: ApiKeyWhereInput
  }

  export type api_key_permissionCountOrderByAggregateInput = {
    id?: SortOrder
    api_key_id?: SortOrder
    permission?: SortOrder
  }

  export type api_key_permissionMaxOrderByAggregateInput = {
    id?: SortOrder
    api_key_id?: SortOrder
    permission?: SortOrder
  }

  export type api_key_permissionMinOrderByAggregateInput = {
    id?: SortOrder
    api_key_id?: SortOrder
    permission?: SortOrder
  }

  export type SubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type api_credits_purchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<api_credits_purchaseCreateWithoutUserInput, api_credits_purchaseUncheckedCreateWithoutUserInput> | api_credits_purchaseCreateWithoutUserInput[] | api_credits_purchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: api_credits_purchaseCreateOrConnectWithoutUserInput | api_credits_purchaseCreateOrConnectWithoutUserInput[]
    createMany?: api_credits_purchaseCreateManyUserInputEnvelope
    connect?: api_credits_purchaseWhereUniqueInput | api_credits_purchaseWhereUniqueInput[]
  }

  export type api_credits_usageCreateNestedManyWithoutUserInput = {
    create?: XOR<api_credits_usageCreateWithoutUserInput, api_credits_usageUncheckedCreateWithoutUserInput> | api_credits_usageCreateWithoutUserInput[] | api_credits_usageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: api_credits_usageCreateOrConnectWithoutUserInput | api_credits_usageCreateOrConnectWithoutUserInput[]
    createMany?: api_credits_usageCreateManyUserInputEnvelope
    connect?: api_credits_usageWhereUniqueInput | api_credits_usageWhereUniqueInput[]
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

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ApiKeyCreditsBalanceCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiKeyCreditsBalanceCreateWithoutUserInput, ApiKeyCreditsBalanceUncheckedCreateWithoutUserInput> | ApiKeyCreditsBalanceCreateWithoutUserInput[] | ApiKeyCreditsBalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreditsBalanceCreateOrConnectWithoutUserInput | ApiKeyCreditsBalanceCreateOrConnectWithoutUserInput[]
    createMany?: ApiKeyCreditsBalanceCreateManyUserInputEnvelope
    connect?: ApiKeyCreditsBalanceWhereUniqueInput | ApiKeyCreditsBalanceWhereUniqueInput[]
  }

  export type LearningAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<LearningAccountCreateWithoutUserInput, LearningAccountUncheckedCreateWithoutUserInput> | LearningAccountCreateWithoutUserInput[] | LearningAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningAccountCreateOrConnectWithoutUserInput | LearningAccountCreateOrConnectWithoutUserInput[]
    createMany?: LearningAccountCreateManyUserInputEnvelope
    connect?: LearningAccountWhereUniqueInput | LearningAccountWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type api_credits_purchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<api_credits_purchaseCreateWithoutUserInput, api_credits_purchaseUncheckedCreateWithoutUserInput> | api_credits_purchaseCreateWithoutUserInput[] | api_credits_purchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: api_credits_purchaseCreateOrConnectWithoutUserInput | api_credits_purchaseCreateOrConnectWithoutUserInput[]
    createMany?: api_credits_purchaseCreateManyUserInputEnvelope
    connect?: api_credits_purchaseWhereUniqueInput | api_credits_purchaseWhereUniqueInput[]
  }

  export type api_credits_usageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<api_credits_usageCreateWithoutUserInput, api_credits_usageUncheckedCreateWithoutUserInput> | api_credits_usageCreateWithoutUserInput[] | api_credits_usageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: api_credits_usageCreateOrConnectWithoutUserInput | api_credits_usageCreateOrConnectWithoutUserInput[]
    createMany?: api_credits_usageCreateManyUserInputEnvelope
    connect?: api_credits_usageWhereUniqueInput | api_credits_usageWhereUniqueInput[]
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

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ApiKeyCreditsBalanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiKeyCreditsBalanceCreateWithoutUserInput, ApiKeyCreditsBalanceUncheckedCreateWithoutUserInput> | ApiKeyCreditsBalanceCreateWithoutUserInput[] | ApiKeyCreditsBalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreditsBalanceCreateOrConnectWithoutUserInput | ApiKeyCreditsBalanceCreateOrConnectWithoutUserInput[]
    createMany?: ApiKeyCreditsBalanceCreateManyUserInputEnvelope
    connect?: ApiKeyCreditsBalanceWhereUniqueInput | ApiKeyCreditsBalanceWhereUniqueInput[]
  }

  export type LearningAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LearningAccountCreateWithoutUserInput, LearningAccountUncheckedCreateWithoutUserInput> | LearningAccountCreateWithoutUserInput[] | LearningAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningAccountCreateOrConnectWithoutUserInput | LearningAccountCreateOrConnectWithoutUserInput[]
    createMany?: LearningAccountCreateManyUserInputEnvelope
    connect?: LearningAccountWhereUniqueInput | LearningAccountWhereUniqueInput[]
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

  export type SubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type api_credits_purchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<api_credits_purchaseCreateWithoutUserInput, api_credits_purchaseUncheckedCreateWithoutUserInput> | api_credits_purchaseCreateWithoutUserInput[] | api_credits_purchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: api_credits_purchaseCreateOrConnectWithoutUserInput | api_credits_purchaseCreateOrConnectWithoutUserInput[]
    upsert?: api_credits_purchaseUpsertWithWhereUniqueWithoutUserInput | api_credits_purchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: api_credits_purchaseCreateManyUserInputEnvelope
    set?: api_credits_purchaseWhereUniqueInput | api_credits_purchaseWhereUniqueInput[]
    disconnect?: api_credits_purchaseWhereUniqueInput | api_credits_purchaseWhereUniqueInput[]
    delete?: api_credits_purchaseWhereUniqueInput | api_credits_purchaseWhereUniqueInput[]
    connect?: api_credits_purchaseWhereUniqueInput | api_credits_purchaseWhereUniqueInput[]
    update?: api_credits_purchaseUpdateWithWhereUniqueWithoutUserInput | api_credits_purchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: api_credits_purchaseUpdateManyWithWhereWithoutUserInput | api_credits_purchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: api_credits_purchaseScalarWhereInput | api_credits_purchaseScalarWhereInput[]
  }

  export type api_credits_usageUpdateManyWithoutUserNestedInput = {
    create?: XOR<api_credits_usageCreateWithoutUserInput, api_credits_usageUncheckedCreateWithoutUserInput> | api_credits_usageCreateWithoutUserInput[] | api_credits_usageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: api_credits_usageCreateOrConnectWithoutUserInput | api_credits_usageCreateOrConnectWithoutUserInput[]
    upsert?: api_credits_usageUpsertWithWhereUniqueWithoutUserInput | api_credits_usageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: api_credits_usageCreateManyUserInputEnvelope
    set?: api_credits_usageWhereUniqueInput | api_credits_usageWhereUniqueInput[]
    disconnect?: api_credits_usageWhereUniqueInput | api_credits_usageWhereUniqueInput[]
    delete?: api_credits_usageWhereUniqueInput | api_credits_usageWhereUniqueInput[]
    connect?: api_credits_usageWhereUniqueInput | api_credits_usageWhereUniqueInput[]
    update?: api_credits_usageUpdateWithWhereUniqueWithoutUserInput | api_credits_usageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: api_credits_usageUpdateManyWithWhereWithoutUserInput | api_credits_usageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: api_credits_usageScalarWhereInput | api_credits_usageScalarWhereInput[]
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

  export type ApiKeyCreditsBalanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiKeyCreditsBalanceCreateWithoutUserInput, ApiKeyCreditsBalanceUncheckedCreateWithoutUserInput> | ApiKeyCreditsBalanceCreateWithoutUserInput[] | ApiKeyCreditsBalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreditsBalanceCreateOrConnectWithoutUserInput | ApiKeyCreditsBalanceCreateOrConnectWithoutUserInput[]
    upsert?: ApiKeyCreditsBalanceUpsertWithWhereUniqueWithoutUserInput | ApiKeyCreditsBalanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiKeyCreditsBalanceCreateManyUserInputEnvelope
    set?: ApiKeyCreditsBalanceWhereUniqueInput | ApiKeyCreditsBalanceWhereUniqueInput[]
    disconnect?: ApiKeyCreditsBalanceWhereUniqueInput | ApiKeyCreditsBalanceWhereUniqueInput[]
    delete?: ApiKeyCreditsBalanceWhereUniqueInput | ApiKeyCreditsBalanceWhereUniqueInput[]
    connect?: ApiKeyCreditsBalanceWhereUniqueInput | ApiKeyCreditsBalanceWhereUniqueInput[]
    update?: ApiKeyCreditsBalanceUpdateWithWhereUniqueWithoutUserInput | ApiKeyCreditsBalanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiKeyCreditsBalanceUpdateManyWithWhereWithoutUserInput | ApiKeyCreditsBalanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiKeyCreditsBalanceScalarWhereInput | ApiKeyCreditsBalanceScalarWhereInput[]
  }

  export type LearningAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<LearningAccountCreateWithoutUserInput, LearningAccountUncheckedCreateWithoutUserInput> | LearningAccountCreateWithoutUserInput[] | LearningAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningAccountCreateOrConnectWithoutUserInput | LearningAccountCreateOrConnectWithoutUserInput[]
    upsert?: LearningAccountUpsertWithWhereUniqueWithoutUserInput | LearningAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LearningAccountCreateManyUserInputEnvelope
    set?: LearningAccountWhereUniqueInput | LearningAccountWhereUniqueInput[]
    disconnect?: LearningAccountWhereUniqueInput | LearningAccountWhereUniqueInput[]
    delete?: LearningAccountWhereUniqueInput | LearningAccountWhereUniqueInput[]
    connect?: LearningAccountWhereUniqueInput | LearningAccountWhereUniqueInput[]
    update?: LearningAccountUpdateWithWhereUniqueWithoutUserInput | LearningAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LearningAccountUpdateManyWithWhereWithoutUserInput | LearningAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LearningAccountScalarWhereInput | LearningAccountScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type api_credits_purchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<api_credits_purchaseCreateWithoutUserInput, api_credits_purchaseUncheckedCreateWithoutUserInput> | api_credits_purchaseCreateWithoutUserInput[] | api_credits_purchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: api_credits_purchaseCreateOrConnectWithoutUserInput | api_credits_purchaseCreateOrConnectWithoutUserInput[]
    upsert?: api_credits_purchaseUpsertWithWhereUniqueWithoutUserInput | api_credits_purchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: api_credits_purchaseCreateManyUserInputEnvelope
    set?: api_credits_purchaseWhereUniqueInput | api_credits_purchaseWhereUniqueInput[]
    disconnect?: api_credits_purchaseWhereUniqueInput | api_credits_purchaseWhereUniqueInput[]
    delete?: api_credits_purchaseWhereUniqueInput | api_credits_purchaseWhereUniqueInput[]
    connect?: api_credits_purchaseWhereUniqueInput | api_credits_purchaseWhereUniqueInput[]
    update?: api_credits_purchaseUpdateWithWhereUniqueWithoutUserInput | api_credits_purchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: api_credits_purchaseUpdateManyWithWhereWithoutUserInput | api_credits_purchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: api_credits_purchaseScalarWhereInput | api_credits_purchaseScalarWhereInput[]
  }

  export type api_credits_usageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<api_credits_usageCreateWithoutUserInput, api_credits_usageUncheckedCreateWithoutUserInput> | api_credits_usageCreateWithoutUserInput[] | api_credits_usageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: api_credits_usageCreateOrConnectWithoutUserInput | api_credits_usageCreateOrConnectWithoutUserInput[]
    upsert?: api_credits_usageUpsertWithWhereUniqueWithoutUserInput | api_credits_usageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: api_credits_usageCreateManyUserInputEnvelope
    set?: api_credits_usageWhereUniqueInput | api_credits_usageWhereUniqueInput[]
    disconnect?: api_credits_usageWhereUniqueInput | api_credits_usageWhereUniqueInput[]
    delete?: api_credits_usageWhereUniqueInput | api_credits_usageWhereUniqueInput[]
    connect?: api_credits_usageWhereUniqueInput | api_credits_usageWhereUniqueInput[]
    update?: api_credits_usageUpdateWithWhereUniqueWithoutUserInput | api_credits_usageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: api_credits_usageUpdateManyWithWhereWithoutUserInput | api_credits_usageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: api_credits_usageScalarWhereInput | api_credits_usageScalarWhereInput[]
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

  export type ApiKeyCreditsBalanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiKeyCreditsBalanceCreateWithoutUserInput, ApiKeyCreditsBalanceUncheckedCreateWithoutUserInput> | ApiKeyCreditsBalanceCreateWithoutUserInput[] | ApiKeyCreditsBalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreditsBalanceCreateOrConnectWithoutUserInput | ApiKeyCreditsBalanceCreateOrConnectWithoutUserInput[]
    upsert?: ApiKeyCreditsBalanceUpsertWithWhereUniqueWithoutUserInput | ApiKeyCreditsBalanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiKeyCreditsBalanceCreateManyUserInputEnvelope
    set?: ApiKeyCreditsBalanceWhereUniqueInput | ApiKeyCreditsBalanceWhereUniqueInput[]
    disconnect?: ApiKeyCreditsBalanceWhereUniqueInput | ApiKeyCreditsBalanceWhereUniqueInput[]
    delete?: ApiKeyCreditsBalanceWhereUniqueInput | ApiKeyCreditsBalanceWhereUniqueInput[]
    connect?: ApiKeyCreditsBalanceWhereUniqueInput | ApiKeyCreditsBalanceWhereUniqueInput[]
    update?: ApiKeyCreditsBalanceUpdateWithWhereUniqueWithoutUserInput | ApiKeyCreditsBalanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiKeyCreditsBalanceUpdateManyWithWhereWithoutUserInput | ApiKeyCreditsBalanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiKeyCreditsBalanceScalarWhereInput | ApiKeyCreditsBalanceScalarWhereInput[]
  }

  export type LearningAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LearningAccountCreateWithoutUserInput, LearningAccountUncheckedCreateWithoutUserInput> | LearningAccountCreateWithoutUserInput[] | LearningAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningAccountCreateOrConnectWithoutUserInput | LearningAccountCreateOrConnectWithoutUserInput[]
    upsert?: LearningAccountUpsertWithWhereUniqueWithoutUserInput | LearningAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LearningAccountCreateManyUserInputEnvelope
    set?: LearningAccountWhereUniqueInput | LearningAccountWhereUniqueInput[]
    disconnect?: LearningAccountWhereUniqueInput | LearningAccountWhereUniqueInput[]
    delete?: LearningAccountWhereUniqueInput | LearningAccountWhereUniqueInput[]
    connect?: LearningAccountWhereUniqueInput | LearningAccountWhereUniqueInput[]
    update?: LearningAccountUpdateWithWhereUniqueWithoutUserInput | LearningAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LearningAccountUpdateManyWithWhereWithoutUserInput | LearningAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LearningAccountScalarWhereInput | LearningAccountScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLearningAccountsInput = {
    create?: XOR<UserCreateWithoutLearningAccountsInput, UserUncheckedCreateWithoutLearningAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLearningAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccountType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutLearningAccountsNestedInput = {
    create?: XOR<UserCreateWithoutLearningAccountsInput, UserUncheckedCreateWithoutLearningAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLearningAccountsInput
    upsert?: UserUpsertWithoutLearningAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLearningAccountsInput, UserUpdateWithoutLearningAccountsInput>, UserUncheckedUpdateWithoutLearningAccountsInput>
  }

  export type UserCreateNestedOneWithoutCreditsBalanceInput = {
    create?: XOR<UserCreateWithoutCreditsBalanceInput, UserUncheckedCreateWithoutCreditsBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditsBalanceInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCreditsBalanceNestedInput = {
    create?: XOR<UserCreateWithoutCreditsBalanceInput, UserUncheckedCreateWithoutCreditsBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditsBalanceInput
    upsert?: UserUpsertWithoutCreditsBalanceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreditsBalanceInput, UserUpdateWithoutCreditsBalanceInput>, UserUncheckedUpdateWithoutCreditsBalanceInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
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

  export type api_key_permissionCreateNestedManyWithoutApi_keyInput = {
    create?: XOR<api_key_permissionCreateWithoutApi_keyInput, api_key_permissionUncheckedCreateWithoutApi_keyInput> | api_key_permissionCreateWithoutApi_keyInput[] | api_key_permissionUncheckedCreateWithoutApi_keyInput[]
    connectOrCreate?: api_key_permissionCreateOrConnectWithoutApi_keyInput | api_key_permissionCreateOrConnectWithoutApi_keyInput[]
    createMany?: api_key_permissionCreateManyApi_keyInputEnvelope
    connect?: api_key_permissionWhereUniqueInput | api_key_permissionWhereUniqueInput[]
  }

  export type ApiUsageLogCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<ApiUsageLogCreateWithoutApiKeyInput, ApiUsageLogUncheckedCreateWithoutApiKeyInput> | ApiUsageLogCreateWithoutApiKeyInput[] | ApiUsageLogUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ApiUsageLogCreateOrConnectWithoutApiKeyInput | ApiUsageLogCreateOrConnectWithoutApiKeyInput[]
    createMany?: ApiUsageLogCreateManyApiKeyInputEnvelope
    connect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
  }

  export type api_key_permissionUncheckedCreateNestedManyWithoutApi_keyInput = {
    create?: XOR<api_key_permissionCreateWithoutApi_keyInput, api_key_permissionUncheckedCreateWithoutApi_keyInput> | api_key_permissionCreateWithoutApi_keyInput[] | api_key_permissionUncheckedCreateWithoutApi_keyInput[]
    connectOrCreate?: api_key_permissionCreateOrConnectWithoutApi_keyInput | api_key_permissionCreateOrConnectWithoutApi_keyInput[]
    createMany?: api_key_permissionCreateManyApi_keyInputEnvelope
    connect?: api_key_permissionWhereUniqueInput | api_key_permissionWhereUniqueInput[]
  }

  export type ApiUsageLogUncheckedCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<ApiUsageLogCreateWithoutApiKeyInput, ApiUsageLogUncheckedCreateWithoutApiKeyInput> | ApiUsageLogCreateWithoutApiKeyInput[] | ApiUsageLogUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ApiUsageLogCreateOrConnectWithoutApiKeyInput | ApiUsageLogCreateOrConnectWithoutApiKeyInput[]
    createMany?: ApiUsageLogCreateManyApiKeyInputEnvelope
    connect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
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

  export type api_key_permissionUpdateManyWithoutApi_keyNestedInput = {
    create?: XOR<api_key_permissionCreateWithoutApi_keyInput, api_key_permissionUncheckedCreateWithoutApi_keyInput> | api_key_permissionCreateWithoutApi_keyInput[] | api_key_permissionUncheckedCreateWithoutApi_keyInput[]
    connectOrCreate?: api_key_permissionCreateOrConnectWithoutApi_keyInput | api_key_permissionCreateOrConnectWithoutApi_keyInput[]
    upsert?: api_key_permissionUpsertWithWhereUniqueWithoutApi_keyInput | api_key_permissionUpsertWithWhereUniqueWithoutApi_keyInput[]
    createMany?: api_key_permissionCreateManyApi_keyInputEnvelope
    set?: api_key_permissionWhereUniqueInput | api_key_permissionWhereUniqueInput[]
    disconnect?: api_key_permissionWhereUniqueInput | api_key_permissionWhereUniqueInput[]
    delete?: api_key_permissionWhereUniqueInput | api_key_permissionWhereUniqueInput[]
    connect?: api_key_permissionWhereUniqueInput | api_key_permissionWhereUniqueInput[]
    update?: api_key_permissionUpdateWithWhereUniqueWithoutApi_keyInput | api_key_permissionUpdateWithWhereUniqueWithoutApi_keyInput[]
    updateMany?: api_key_permissionUpdateManyWithWhereWithoutApi_keyInput | api_key_permissionUpdateManyWithWhereWithoutApi_keyInput[]
    deleteMany?: api_key_permissionScalarWhereInput | api_key_permissionScalarWhereInput[]
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

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type api_key_permissionUncheckedUpdateManyWithoutApi_keyNestedInput = {
    create?: XOR<api_key_permissionCreateWithoutApi_keyInput, api_key_permissionUncheckedCreateWithoutApi_keyInput> | api_key_permissionCreateWithoutApi_keyInput[] | api_key_permissionUncheckedCreateWithoutApi_keyInput[]
    connectOrCreate?: api_key_permissionCreateOrConnectWithoutApi_keyInput | api_key_permissionCreateOrConnectWithoutApi_keyInput[]
    upsert?: api_key_permissionUpsertWithWhereUniqueWithoutApi_keyInput | api_key_permissionUpsertWithWhereUniqueWithoutApi_keyInput[]
    createMany?: api_key_permissionCreateManyApi_keyInputEnvelope
    set?: api_key_permissionWhereUniqueInput | api_key_permissionWhereUniqueInput[]
    disconnect?: api_key_permissionWhereUniqueInput | api_key_permissionWhereUniqueInput[]
    delete?: api_key_permissionWhereUniqueInput | api_key_permissionWhereUniqueInput[]
    connect?: api_key_permissionWhereUniqueInput | api_key_permissionWhereUniqueInput[]
    update?: api_key_permissionUpdateWithWhereUniqueWithoutApi_keyInput | api_key_permissionUpdateWithWhereUniqueWithoutApi_keyInput[]
    updateMany?: api_key_permissionUpdateManyWithWhereWithoutApi_keyInput | api_key_permissionUpdateManyWithWhereWithoutApi_keyInput[]
    deleteMany?: api_key_permissionScalarWhereInput | api_key_permissionScalarWhereInput[]
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

  export type ApiKeyCreateNestedOneWithoutUsageLogsInput = {
    create?: XOR<ApiKeyCreateWithoutUsageLogsInput, ApiKeyUncheckedCreateWithoutUsageLogsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUsageLogsInput
    connect?: ApiKeyWhereUniqueInput
  }

  export type ApiKeyUpdateOneWithoutUsageLogsNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUsageLogsInput, ApiKeyUncheckedCreateWithoutUsageLogsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUsageLogsInput
    upsert?: ApiKeyUpsertWithoutUsageLogsInput
    disconnect?: ApiKeyWhereInput | boolean
    delete?: ApiKeyWhereInput | boolean
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

  export type UserCreateNestedOneWithoutApi_credits_purchaseInput = {
    create?: XOR<UserCreateWithoutApi_credits_purchaseInput, UserUncheckedCreateWithoutApi_credits_purchaseInput>
    connectOrCreate?: UserCreateOrConnectWithoutApi_credits_purchaseInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutApi_credits_purchaseNestedInput = {
    create?: XOR<UserCreateWithoutApi_credits_purchaseInput, UserUncheckedCreateWithoutApi_credits_purchaseInput>
    connectOrCreate?: UserCreateOrConnectWithoutApi_credits_purchaseInput
    upsert?: UserUpsertWithoutApi_credits_purchaseInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApi_credits_purchaseInput, UserUpdateWithoutApi_credits_purchaseInput>, UserUncheckedUpdateWithoutApi_credits_purchaseInput>
  }

  export type UserCreateNestedOneWithoutApi_credits_usageInput = {
    create?: XOR<UserCreateWithoutApi_credits_usageInput, UserUncheckedCreateWithoutApi_credits_usageInput>
    connectOrCreate?: UserCreateOrConnectWithoutApi_credits_usageInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutApi_credits_usageNestedInput = {
    create?: XOR<UserCreateWithoutApi_credits_usageInput, UserUncheckedCreateWithoutApi_credits_usageInput>
    connectOrCreate?: UserCreateOrConnectWithoutApi_credits_usageInput
    upsert?: UserUpsertWithoutApi_credits_usageInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApi_credits_usageInput, UserUpdateWithoutApi_credits_usageInput>, UserUncheckedUpdateWithoutApi_credits_usageInput>
  }

  export type ApiKeyCreateNestedOneWithoutApi_key_permissionInput = {
    create?: XOR<ApiKeyCreateWithoutApi_key_permissionInput, ApiKeyUncheckedCreateWithoutApi_key_permissionInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutApi_key_permissionInput
    connect?: ApiKeyWhereUniqueInput
  }

  export type ApiKeyUpdateOneRequiredWithoutApi_key_permissionNestedInput = {
    create?: XOR<ApiKeyCreateWithoutApi_key_permissionInput, ApiKeyUncheckedCreateWithoutApi_key_permissionInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutApi_key_permissionInput
    upsert?: ApiKeyUpsertWithoutApi_key_permissionInput
    connect?: ApiKeyWhereUniqueInput
    update?: XOR<XOR<ApiKeyUpdateToOneWithWhereWithoutApi_key_permissionInput, ApiKeyUpdateWithoutApi_key_permissionInput>, ApiKeyUncheckedUpdateWithoutApi_key_permissionInput>
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

  export type NestedEnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
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

  export type NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
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

  export type api_credits_purchaseCreateWithoutUserInput = {
    id?: string
    credits: number
    purchaseDate?: Date | string
  }

  export type api_credits_purchaseUncheckedCreateWithoutUserInput = {
    id?: string
    credits: number
    purchaseDate?: Date | string
  }

  export type api_credits_purchaseCreateOrConnectWithoutUserInput = {
    where: api_credits_purchaseWhereUniqueInput
    create: XOR<api_credits_purchaseCreateWithoutUserInput, api_credits_purchaseUncheckedCreateWithoutUserInput>
  }

  export type api_credits_purchaseCreateManyUserInputEnvelope = {
    data: api_credits_purchaseCreateManyUserInput | api_credits_purchaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type api_credits_usageCreateWithoutUserInput = {
    id?: string
    api_key_id: string
    credits: number
    usageDate?: Date | string
  }

  export type api_credits_usageUncheckedCreateWithoutUserInput = {
    id?: string
    api_key_id: string
    credits: number
    usageDate?: Date | string
  }

  export type api_credits_usageCreateOrConnectWithoutUserInput = {
    where: api_credits_usageWhereUniqueInput
    create: XOR<api_credits_usageCreateWithoutUserInput, api_credits_usageUncheckedCreateWithoutUserInput>
  }

  export type api_credits_usageCreateManyUserInputEnvelope = {
    data: api_credits_usageCreateManyUserInput | api_credits_usageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyCreateWithoutOwnerInput = {
    id?: string
    key: string
    unlimited: boolean
    minInterval?: number
    description?: string | null
    createdAt?: Date | string
    lastRequest?: Date | string | null
    name: string
    api_key_permission?: api_key_permissionCreateNestedManyWithoutApi_keyInput
    usageLogs?: ApiUsageLogCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateWithoutOwnerInput = {
    id?: string
    key: string
    unlimited: boolean
    minInterval?: number
    description?: string | null
    createdAt?: Date | string
    lastRequest?: Date | string | null
    name: string
    api_key_permission?: api_key_permissionUncheckedCreateNestedManyWithoutApi_keyInput
    usageLogs?: ApiUsageLogUncheckedCreateNestedManyWithoutApiKeyInput
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

  export type ApiKeyCreditsBalanceCreateWithoutUserInput = {
    id?: string
    credits: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyCreditsBalanceUncheckedCreateWithoutUserInput = {
    id?: string
    credits: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyCreditsBalanceCreateOrConnectWithoutUserInput = {
    where: ApiKeyCreditsBalanceWhereUniqueInput
    create: XOR<ApiKeyCreditsBalanceCreateWithoutUserInput, ApiKeyCreditsBalanceUncheckedCreateWithoutUserInput>
  }

  export type ApiKeyCreditsBalanceCreateManyUserInputEnvelope = {
    data: ApiKeyCreditsBalanceCreateManyUserInput | ApiKeyCreditsBalanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LearningAccountCreateWithoutUserInput = {
    type: $Enums.AccountType
    username: string
    passwordHash: string
    school: string
    baseUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningAccountUncheckedCreateWithoutUserInput = {
    id?: number
    type: $Enums.AccountType
    username: string
    passwordHash: string
    school: string
    baseUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningAccountCreateOrConnectWithoutUserInput = {
    where: LearningAccountWhereUniqueInput
    create: XOR<LearningAccountCreateWithoutUserInput, LearningAccountUncheckedCreateWithoutUserInput>
  }

  export type LearningAccountCreateManyUserInputEnvelope = {
    data: LearningAccountCreateManyUserInput | LearningAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithoutUserInput = {
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
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

  export type api_credits_purchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: api_credits_purchaseWhereUniqueInput
    update: XOR<api_credits_purchaseUpdateWithoutUserInput, api_credits_purchaseUncheckedUpdateWithoutUserInput>
    create: XOR<api_credits_purchaseCreateWithoutUserInput, api_credits_purchaseUncheckedCreateWithoutUserInput>
  }

  export type api_credits_purchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: api_credits_purchaseWhereUniqueInput
    data: XOR<api_credits_purchaseUpdateWithoutUserInput, api_credits_purchaseUncheckedUpdateWithoutUserInput>
  }

  export type api_credits_purchaseUpdateManyWithWhereWithoutUserInput = {
    where: api_credits_purchaseScalarWhereInput
    data: XOR<api_credits_purchaseUpdateManyMutationInput, api_credits_purchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type api_credits_purchaseScalarWhereInput = {
    AND?: api_credits_purchaseScalarWhereInput | api_credits_purchaseScalarWhereInput[]
    OR?: api_credits_purchaseScalarWhereInput[]
    NOT?: api_credits_purchaseScalarWhereInput | api_credits_purchaseScalarWhereInput[]
    id?: StringFilter<"api_credits_purchase"> | string
    credits?: IntFilter<"api_credits_purchase"> | number
    purchaseDate?: DateTimeFilter<"api_credits_purchase"> | Date | string
    user_id?: IntNullableFilter<"api_credits_purchase"> | number | null
  }

  export type api_credits_usageUpsertWithWhereUniqueWithoutUserInput = {
    where: api_credits_usageWhereUniqueInput
    update: XOR<api_credits_usageUpdateWithoutUserInput, api_credits_usageUncheckedUpdateWithoutUserInput>
    create: XOR<api_credits_usageCreateWithoutUserInput, api_credits_usageUncheckedCreateWithoutUserInput>
  }

  export type api_credits_usageUpdateWithWhereUniqueWithoutUserInput = {
    where: api_credits_usageWhereUniqueInput
    data: XOR<api_credits_usageUpdateWithoutUserInput, api_credits_usageUncheckedUpdateWithoutUserInput>
  }

  export type api_credits_usageUpdateManyWithWhereWithoutUserInput = {
    where: api_credits_usageScalarWhereInput
    data: XOR<api_credits_usageUpdateManyMutationInput, api_credits_usageUncheckedUpdateManyWithoutUserInput>
  }

  export type api_credits_usageScalarWhereInput = {
    AND?: api_credits_usageScalarWhereInput | api_credits_usageScalarWhereInput[]
    OR?: api_credits_usageScalarWhereInput[]
    NOT?: api_credits_usageScalarWhereInput | api_credits_usageScalarWhereInput[]
    id?: StringFilter<"api_credits_usage"> | string
    api_key_id?: StringFilter<"api_credits_usage"> | string
    credits?: IntFilter<"api_credits_usage"> | number
    usageDate?: DateTimeFilter<"api_credits_usage"> | Date | string
    user_id?: IntNullableFilter<"api_credits_usage"> | number | null
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
    description?: StringNullableFilter<"ApiKey"> | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    lastRequest?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    name?: StringFilter<"ApiKey"> | string
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

  export type ApiKeyCreditsBalanceUpsertWithWhereUniqueWithoutUserInput = {
    where: ApiKeyCreditsBalanceWhereUniqueInput
    update: XOR<ApiKeyCreditsBalanceUpdateWithoutUserInput, ApiKeyCreditsBalanceUncheckedUpdateWithoutUserInput>
    create: XOR<ApiKeyCreditsBalanceCreateWithoutUserInput, ApiKeyCreditsBalanceUncheckedCreateWithoutUserInput>
  }

  export type ApiKeyCreditsBalanceUpdateWithWhereUniqueWithoutUserInput = {
    where: ApiKeyCreditsBalanceWhereUniqueInput
    data: XOR<ApiKeyCreditsBalanceUpdateWithoutUserInput, ApiKeyCreditsBalanceUncheckedUpdateWithoutUserInput>
  }

  export type ApiKeyCreditsBalanceUpdateManyWithWhereWithoutUserInput = {
    where: ApiKeyCreditsBalanceScalarWhereInput
    data: XOR<ApiKeyCreditsBalanceUpdateManyMutationInput, ApiKeyCreditsBalanceUncheckedUpdateManyWithoutUserInput>
  }

  export type ApiKeyCreditsBalanceScalarWhereInput = {
    AND?: ApiKeyCreditsBalanceScalarWhereInput | ApiKeyCreditsBalanceScalarWhereInput[]
    OR?: ApiKeyCreditsBalanceScalarWhereInput[]
    NOT?: ApiKeyCreditsBalanceScalarWhereInput | ApiKeyCreditsBalanceScalarWhereInput[]
    id?: StringFilter<"ApiKeyCreditsBalance"> | string
    userId?: IntFilter<"ApiKeyCreditsBalance"> | number
    credits?: IntFilter<"ApiKeyCreditsBalance"> | number
    createdAt?: DateTimeFilter<"ApiKeyCreditsBalance"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKeyCreditsBalance"> | Date | string
  }

  export type LearningAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: LearningAccountWhereUniqueInput
    update: XOR<LearningAccountUpdateWithoutUserInput, LearningAccountUncheckedUpdateWithoutUserInput>
    create: XOR<LearningAccountCreateWithoutUserInput, LearningAccountUncheckedCreateWithoutUserInput>
  }

  export type LearningAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: LearningAccountWhereUniqueInput
    data: XOR<LearningAccountUpdateWithoutUserInput, LearningAccountUncheckedUpdateWithoutUserInput>
  }

  export type LearningAccountUpdateManyWithWhereWithoutUserInput = {
    where: LearningAccountScalarWhereInput
    data: XOR<LearningAccountUpdateManyMutationInput, LearningAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type LearningAccountScalarWhereInput = {
    AND?: LearningAccountScalarWhereInput | LearningAccountScalarWhereInput[]
    OR?: LearningAccountScalarWhereInput[]
    NOT?: LearningAccountScalarWhereInput | LearningAccountScalarWhereInput[]
    id?: IntFilter<"LearningAccount"> | number
    userId?: IntFilter<"LearningAccount"> | number
    type?: EnumAccountTypeFilter<"LearningAccount"> | $Enums.AccountType
    username?: StringFilter<"LearningAccount"> | string
    passwordHash?: StringFilter<"LearningAccount"> | string
    school?: StringFilter<"LearningAccount"> | string
    baseUrl?: StringFilter<"LearningAccount"> | string
    createdAt?: DateTimeFilter<"LearningAccount"> | Date | string
    updatedAt?: DateTimeFilter<"LearningAccount"> | Date | string
  }

  export type UserCreateWithoutLearningAccountsInput = {
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    subscriptions?: SubscriptionCreateNestedOneWithoutUserInput
    api_credits_purchase?: api_credits_purchaseCreateNestedManyWithoutUserInput
    api_credits_usage?: api_credits_usageCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    creditsBalance?: ApiKeyCreditsBalanceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLearningAccountsInput = {
    id?: number
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    subscriptions?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    api_credits_purchase?: api_credits_purchaseUncheckedCreateNestedManyWithoutUserInput
    api_credits_usage?: api_credits_usageUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    creditsBalance?: ApiKeyCreditsBalanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLearningAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLearningAccountsInput, UserUncheckedCreateWithoutLearningAccountsInput>
  }

  export type UserUpsertWithoutLearningAccountsInput = {
    update: XOR<UserUpdateWithoutLearningAccountsInput, UserUncheckedUpdateWithoutLearningAccountsInput>
    create: XOR<UserCreateWithoutLearningAccountsInput, UserUncheckedCreateWithoutLearningAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLearningAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLearningAccountsInput, UserUncheckedUpdateWithoutLearningAccountsInput>
  }

  export type UserUpdateWithoutLearningAccountsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    subscriptions?: SubscriptionUpdateOneWithoutUserNestedInput
    api_credits_purchase?: api_credits_purchaseUpdateManyWithoutUserNestedInput
    api_credits_usage?: api_credits_usageUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    creditsBalance?: ApiKeyCreditsBalanceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLearningAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    subscriptions?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    api_credits_purchase?: api_credits_purchaseUncheckedUpdateManyWithoutUserNestedInput
    api_credits_usage?: api_credits_usageUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    creditsBalance?: ApiKeyCreditsBalanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCreditsBalanceInput = {
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    subscriptions?: SubscriptionCreateNestedOneWithoutUserInput
    api_credits_purchase?: api_credits_purchaseCreateNestedManyWithoutUserInput
    api_credits_usage?: api_credits_usageCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    LearningAccounts?: LearningAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreditsBalanceInput = {
    id?: number
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    subscriptions?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    api_credits_purchase?: api_credits_purchaseUncheckedCreateNestedManyWithoutUserInput
    api_credits_usage?: api_credits_usageUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    LearningAccounts?: LearningAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreditsBalanceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreditsBalanceInput, UserUncheckedCreateWithoutCreditsBalanceInput>
  }

  export type UserUpsertWithoutCreditsBalanceInput = {
    update: XOR<UserUpdateWithoutCreditsBalanceInput, UserUncheckedUpdateWithoutCreditsBalanceInput>
    create: XOR<UserCreateWithoutCreditsBalanceInput, UserUncheckedCreateWithoutCreditsBalanceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreditsBalanceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreditsBalanceInput, UserUncheckedUpdateWithoutCreditsBalanceInput>
  }

  export type UserUpdateWithoutCreditsBalanceInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    subscriptions?: SubscriptionUpdateOneWithoutUserNestedInput
    api_credits_purchase?: api_credits_purchaseUpdateManyWithoutUserNestedInput
    api_credits_usage?: api_credits_usageUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    LearningAccounts?: LearningAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreditsBalanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    subscriptions?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    api_credits_purchase?: api_credits_purchaseUncheckedUpdateManyWithoutUserNestedInput
    api_credits_usage?: api_credits_usageUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    LearningAccounts?: LearningAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSubscriptionsInput = {
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    api_credits_purchase?: api_credits_purchaseCreateNestedManyWithoutUserInput
    api_credits_usage?: api_credits_usageCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    creditsBalance?: ApiKeyCreditsBalanceCreateNestedManyWithoutUserInput
    LearningAccounts?: LearningAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id?: number
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    api_credits_purchase?: api_credits_purchaseUncheckedCreateNestedManyWithoutUserInput
    api_credits_usage?: api_credits_usageUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    creditsBalance?: ApiKeyCreditsBalanceUncheckedCreateNestedManyWithoutUserInput
    LearningAccounts?: LearningAccountUncheckedCreateNestedManyWithoutUserInput
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
    api_credits_purchase?: api_credits_purchaseUpdateManyWithoutUserNestedInput
    api_credits_usage?: api_credits_usageUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    creditsBalance?: ApiKeyCreditsBalanceUpdateManyWithoutUserNestedInput
    LearningAccounts?: LearningAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    api_credits_purchase?: api_credits_purchaseUncheckedUpdateManyWithoutUserNestedInput
    api_credits_usage?: api_credits_usageUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    creditsBalance?: ApiKeyCreditsBalanceUncheckedUpdateManyWithoutUserNestedInput
    LearningAccounts?: LearningAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    subscriptions?: SubscriptionCreateNestedOneWithoutUserInput
    api_credits_purchase?: api_credits_purchaseCreateNestedManyWithoutUserInput
    api_credits_usage?: api_credits_usageCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionCreateNestedManyWithoutUserInput
    creditsBalance?: ApiKeyCreditsBalanceCreateNestedManyWithoutUserInput
    LearningAccounts?: LearningAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    subscriptions?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    api_credits_purchase?: api_credits_purchaseUncheckedCreateNestedManyWithoutUserInput
    api_credits_usage?: api_credits_usageUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionUncheckedCreateNestedManyWithoutUserInput
    creditsBalance?: ApiKeyCreditsBalanceUncheckedCreateNestedManyWithoutUserInput
    LearningAccounts?: LearningAccountUncheckedCreateNestedManyWithoutUserInput
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
    subscriptions?: SubscriptionUpdateOneWithoutUserNestedInput
    api_credits_purchase?: api_credits_purchaseUpdateManyWithoutUserNestedInput
    api_credits_usage?: api_credits_usageUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUpdateManyWithoutUserNestedInput
    creditsBalance?: ApiKeyCreditsBalanceUpdateManyWithoutUserNestedInput
    LearningAccounts?: LearningAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    subscriptions?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    api_credits_purchase?: api_credits_purchaseUncheckedUpdateManyWithoutUserNestedInput
    api_credits_usage?: api_credits_usageUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUncheckedUpdateManyWithoutUserNestedInput
    creditsBalance?: ApiKeyCreditsBalanceUncheckedUpdateManyWithoutUserNestedInput
    LearningAccounts?: LearningAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEmailVerificationsInput = {
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    subscriptions?: SubscriptionCreateNestedOneWithoutUserInput
    api_credits_purchase?: api_credits_purchaseCreateNestedManyWithoutUserInput
    api_credits_usage?: api_credits_usageCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    creditsBalance?: ApiKeyCreditsBalanceCreateNestedManyWithoutUserInput
    LearningAccounts?: LearningAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmailVerificationsInput = {
    id?: number
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    subscriptions?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    api_credits_purchase?: api_credits_purchaseUncheckedCreateNestedManyWithoutUserInput
    api_credits_usage?: api_credits_usageUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    creditsBalance?: ApiKeyCreditsBalanceUncheckedCreateNestedManyWithoutUserInput
    LearningAccounts?: LearningAccountUncheckedCreateNestedManyWithoutUserInput
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
    subscriptions?: SubscriptionUpdateOneWithoutUserNestedInput
    api_credits_purchase?: api_credits_purchaseUpdateManyWithoutUserNestedInput
    api_credits_usage?: api_credits_usageUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    creditsBalance?: ApiKeyCreditsBalanceUpdateManyWithoutUserNestedInput
    LearningAccounts?: LearningAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailVerificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    subscriptions?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    api_credits_purchase?: api_credits_purchaseUncheckedUpdateManyWithoutUserNestedInput
    api_credits_usage?: api_credits_usageUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    creditsBalance?: ApiKeyCreditsBalanceUncheckedUpdateManyWithoutUserNestedInput
    LearningAccounts?: LearningAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPasswordResetsInput = {
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    subscriptions?: SubscriptionCreateNestedOneWithoutUserInput
    api_credits_purchase?: api_credits_purchaseCreateNestedManyWithoutUserInput
    api_credits_usage?: api_credits_usageCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    creditsBalance?: ApiKeyCreditsBalanceCreateNestedManyWithoutUserInput
    LearningAccounts?: LearningAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPasswordResetsInput = {
    id?: number
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    subscriptions?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    api_credits_purchase?: api_credits_purchaseUncheckedCreateNestedManyWithoutUserInput
    api_credits_usage?: api_credits_usageUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    creditsBalance?: ApiKeyCreditsBalanceUncheckedCreateNestedManyWithoutUserInput
    LearningAccounts?: LearningAccountUncheckedCreateNestedManyWithoutUserInput
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
    subscriptions?: SubscriptionUpdateOneWithoutUserNestedInput
    api_credits_purchase?: api_credits_purchaseUpdateManyWithoutUserNestedInput
    api_credits_usage?: api_credits_usageUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    creditsBalance?: ApiKeyCreditsBalanceUpdateManyWithoutUserNestedInput
    LearningAccounts?: LearningAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordResetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    subscriptions?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    api_credits_purchase?: api_credits_purchaseUncheckedUpdateManyWithoutUserNestedInput
    api_credits_usage?: api_credits_usageUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    creditsBalance?: ApiKeyCreditsBalanceUncheckedUpdateManyWithoutUserNestedInput
    LearningAccounts?: LearningAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutApiKeysInput = {
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    subscriptions?: SubscriptionCreateNestedOneWithoutUserInput
    api_credits_purchase?: api_credits_purchaseCreateNestedManyWithoutUserInput
    api_credits_usage?: api_credits_usageCreateNestedManyWithoutUserInput
    calendarAccounts?: CalendarAccountCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    creditsBalance?: ApiKeyCreditsBalanceCreateNestedManyWithoutUserInput
    LearningAccounts?: LearningAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApiKeysInput = {
    id?: number
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    subscriptions?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    api_credits_purchase?: api_credits_purchaseUncheckedCreateNestedManyWithoutUserInput
    api_credits_usage?: api_credits_usageUncheckedCreateNestedManyWithoutUserInput
    calendarAccounts?: CalendarAccountUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    creditsBalance?: ApiKeyCreditsBalanceUncheckedCreateNestedManyWithoutUserInput
    LearningAccounts?: LearningAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApiKeysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
  }

  export type api_key_permissionCreateWithoutApi_keyInput = {
    id: string
    permission: string
  }

  export type api_key_permissionUncheckedCreateWithoutApi_keyInput = {
    id: string
    permission: string
  }

  export type api_key_permissionCreateOrConnectWithoutApi_keyInput = {
    where: api_key_permissionWhereUniqueInput
    create: XOR<api_key_permissionCreateWithoutApi_keyInput, api_key_permissionUncheckedCreateWithoutApi_keyInput>
  }

  export type api_key_permissionCreateManyApi_keyInputEnvelope = {
    data: api_key_permissionCreateManyApi_keyInput | api_key_permissionCreateManyApi_keyInput[]
    skipDuplicates?: boolean
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
    subscriptions?: SubscriptionUpdateOneWithoutUserNestedInput
    api_credits_purchase?: api_credits_purchaseUpdateManyWithoutUserNestedInput
    api_credits_usage?: api_credits_usageUpdateManyWithoutUserNestedInput
    calendarAccounts?: CalendarAccountUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    creditsBalance?: ApiKeyCreditsBalanceUpdateManyWithoutUserNestedInput
    LearningAccounts?: LearningAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApiKeysInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    subscriptions?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    api_credits_purchase?: api_credits_purchaseUncheckedUpdateManyWithoutUserNestedInput
    api_credits_usage?: api_credits_usageUncheckedUpdateManyWithoutUserNestedInput
    calendarAccounts?: CalendarAccountUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    creditsBalance?: ApiKeyCreditsBalanceUncheckedUpdateManyWithoutUserNestedInput
    LearningAccounts?: LearningAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type api_key_permissionUpsertWithWhereUniqueWithoutApi_keyInput = {
    where: api_key_permissionWhereUniqueInput
    update: XOR<api_key_permissionUpdateWithoutApi_keyInput, api_key_permissionUncheckedUpdateWithoutApi_keyInput>
    create: XOR<api_key_permissionCreateWithoutApi_keyInput, api_key_permissionUncheckedCreateWithoutApi_keyInput>
  }

  export type api_key_permissionUpdateWithWhereUniqueWithoutApi_keyInput = {
    where: api_key_permissionWhereUniqueInput
    data: XOR<api_key_permissionUpdateWithoutApi_keyInput, api_key_permissionUncheckedUpdateWithoutApi_keyInput>
  }

  export type api_key_permissionUpdateManyWithWhereWithoutApi_keyInput = {
    where: api_key_permissionScalarWhereInput
    data: XOR<api_key_permissionUpdateManyMutationInput, api_key_permissionUncheckedUpdateManyWithoutApi_keyInput>
  }

  export type api_key_permissionScalarWhereInput = {
    AND?: api_key_permissionScalarWhereInput | api_key_permissionScalarWhereInput[]
    OR?: api_key_permissionScalarWhereInput[]
    NOT?: api_key_permissionScalarWhereInput | api_key_permissionScalarWhereInput[]
    id?: StringFilter<"api_key_permission"> | string
    api_key_id?: StringFilter<"api_key_permission"> | string
    permission?: StringFilter<"api_key_permission"> | string
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
    apiKeyId?: StringNullableFilter<"ApiUsageLog"> | string | null
  }

  export type ApiKeyCreateWithoutUsageLogsInput = {
    id?: string
    key: string
    unlimited: boolean
    minInterval?: number
    description?: string | null
    createdAt?: Date | string
    lastRequest?: Date | string | null
    name: string
    owner?: UserCreateNestedOneWithoutApiKeysInput
    api_key_permission?: api_key_permissionCreateNestedManyWithoutApi_keyInput
  }

  export type ApiKeyUncheckedCreateWithoutUsageLogsInput = {
    id?: string
    key: string
    unlimited: boolean
    minInterval?: number
    ownerId?: number | null
    description?: string | null
    createdAt?: Date | string
    lastRequest?: Date | string | null
    name: string
    api_key_permission?: api_key_permissionUncheckedCreateNestedManyWithoutApi_keyInput
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
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRequest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneWithoutApiKeysNestedInput
    api_key_permission?: api_key_permissionUpdateManyWithoutApi_keyNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutUsageLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    unlimited?: BoolFieldUpdateOperationsInput | boolean
    minInterval?: IntFieldUpdateOperationsInput | number
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRequest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    api_key_permission?: api_key_permissionUncheckedUpdateManyWithoutApi_keyNestedInput
  }

  export type UserCreateWithoutCalendarAccountsInput = {
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    subscriptions?: SubscriptionCreateNestedOneWithoutUserInput
    api_credits_purchase?: api_credits_purchaseCreateNestedManyWithoutUserInput
    api_credits_usage?: api_credits_usageCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    emailVerifications?: EmailVerificationRequestCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    creditsBalance?: ApiKeyCreditsBalanceCreateNestedManyWithoutUserInput
    LearningAccounts?: LearningAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCalendarAccountsInput = {
    id?: number
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    subscriptions?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    api_credits_purchase?: api_credits_purchaseUncheckedCreateNestedManyWithoutUserInput
    api_credits_usage?: api_credits_usageUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    emailVerifications?: EmailVerificationRequestUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    creditsBalance?: ApiKeyCreditsBalanceUncheckedCreateNestedManyWithoutUserInput
    LearningAccounts?: LearningAccountUncheckedCreateNestedManyWithoutUserInput
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
    subscriptions?: SubscriptionUpdateOneWithoutUserNestedInput
    api_credits_purchase?: api_credits_purchaseUpdateManyWithoutUserNestedInput
    api_credits_usage?: api_credits_usageUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    emailVerifications?: EmailVerificationRequestUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    creditsBalance?: ApiKeyCreditsBalanceUpdateManyWithoutUserNestedInput
    LearningAccounts?: LearningAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCalendarAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    subscriptions?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    api_credits_purchase?: api_credits_purchaseUncheckedUpdateManyWithoutUserNestedInput
    api_credits_usage?: api_credits_usageUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    emailVerifications?: EmailVerificationRequestUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    creditsBalance?: ApiKeyCreditsBalanceUncheckedUpdateManyWithoutUserNestedInput
    LearningAccounts?: LearningAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutApi_credits_purchaseInput = {
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    subscriptions?: SubscriptionCreateNestedOneWithoutUserInput
    api_credits_usage?: api_credits_usageCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    creditsBalance?: ApiKeyCreditsBalanceCreateNestedManyWithoutUserInput
    LearningAccounts?: LearningAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApi_credits_purchaseInput = {
    id?: number
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    subscriptions?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    api_credits_usage?: api_credits_usageUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    creditsBalance?: ApiKeyCreditsBalanceUncheckedCreateNestedManyWithoutUserInput
    LearningAccounts?: LearningAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApi_credits_purchaseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApi_credits_purchaseInput, UserUncheckedCreateWithoutApi_credits_purchaseInput>
  }

  export type UserUpsertWithoutApi_credits_purchaseInput = {
    update: XOR<UserUpdateWithoutApi_credits_purchaseInput, UserUncheckedUpdateWithoutApi_credits_purchaseInput>
    create: XOR<UserCreateWithoutApi_credits_purchaseInput, UserUncheckedCreateWithoutApi_credits_purchaseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApi_credits_purchaseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApi_credits_purchaseInput, UserUncheckedUpdateWithoutApi_credits_purchaseInput>
  }

  export type UserUpdateWithoutApi_credits_purchaseInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    subscriptions?: SubscriptionUpdateOneWithoutUserNestedInput
    api_credits_usage?: api_credits_usageUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    creditsBalance?: ApiKeyCreditsBalanceUpdateManyWithoutUserNestedInput
    LearningAccounts?: LearningAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApi_credits_purchaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    subscriptions?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    api_credits_usage?: api_credits_usageUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    creditsBalance?: ApiKeyCreditsBalanceUncheckedUpdateManyWithoutUserNestedInput
    LearningAccounts?: LearningAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutApi_credits_usageInput = {
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    subscriptions?: SubscriptionCreateNestedOneWithoutUserInput
    api_credits_purchase?: api_credits_purchaseCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    creditsBalance?: ApiKeyCreditsBalanceCreateNestedManyWithoutUserInput
    LearningAccounts?: LearningAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApi_credits_usageInput = {
    id?: number
    email: string
    username: string
    passwordHash: string
    emailVerified?: boolean
    totpKey?: Uint8Array | null
    recoveryCode: Uint8Array
    subscriptions?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    api_credits_purchase?: api_credits_purchaseUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    calendarAccounts?: CalendarAccountUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationRequestUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetSessionUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    creditsBalance?: ApiKeyCreditsBalanceUncheckedCreateNestedManyWithoutUserInput
    LearningAccounts?: LearningAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApi_credits_usageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApi_credits_usageInput, UserUncheckedCreateWithoutApi_credits_usageInput>
  }

  export type UserUpsertWithoutApi_credits_usageInput = {
    update: XOR<UserUpdateWithoutApi_credits_usageInput, UserUncheckedUpdateWithoutApi_credits_usageInput>
    create: XOR<UserCreateWithoutApi_credits_usageInput, UserUncheckedCreateWithoutApi_credits_usageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApi_credits_usageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApi_credits_usageInput, UserUncheckedUpdateWithoutApi_credits_usageInput>
  }

  export type UserUpdateWithoutApi_credits_usageInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    subscriptions?: SubscriptionUpdateOneWithoutUserNestedInput
    api_credits_purchase?: api_credits_purchaseUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    creditsBalance?: ApiKeyCreditsBalanceUpdateManyWithoutUserNestedInput
    LearningAccounts?: LearningAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApi_credits_usageInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    totpKey?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    recoveryCode?: BytesFieldUpdateOperationsInput | Uint8Array
    subscriptions?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    api_credits_purchase?: api_credits_purchaseUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    calendarAccounts?: CalendarAccountUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationRequestUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetSessionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    creditsBalance?: ApiKeyCreditsBalanceUncheckedUpdateManyWithoutUserNestedInput
    LearningAccounts?: LearningAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ApiKeyCreateWithoutApi_key_permissionInput = {
    id?: string
    key: string
    unlimited: boolean
    minInterval?: number
    description?: string | null
    createdAt?: Date | string
    lastRequest?: Date | string | null
    name: string
    owner?: UserCreateNestedOneWithoutApiKeysInput
    usageLogs?: ApiUsageLogCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateWithoutApi_key_permissionInput = {
    id?: string
    key: string
    unlimited: boolean
    minInterval?: number
    ownerId?: number | null
    description?: string | null
    createdAt?: Date | string
    lastRequest?: Date | string | null
    name: string
    usageLogs?: ApiUsageLogUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyCreateOrConnectWithoutApi_key_permissionInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutApi_key_permissionInput, ApiKeyUncheckedCreateWithoutApi_key_permissionInput>
  }

  export type ApiKeyUpsertWithoutApi_key_permissionInput = {
    update: XOR<ApiKeyUpdateWithoutApi_key_permissionInput, ApiKeyUncheckedUpdateWithoutApi_key_permissionInput>
    create: XOR<ApiKeyCreateWithoutApi_key_permissionInput, ApiKeyUncheckedCreateWithoutApi_key_permissionInput>
    where?: ApiKeyWhereInput
  }

  export type ApiKeyUpdateToOneWithWhereWithoutApi_key_permissionInput = {
    where?: ApiKeyWhereInput
    data: XOR<ApiKeyUpdateWithoutApi_key_permissionInput, ApiKeyUncheckedUpdateWithoutApi_key_permissionInput>
  }

  export type ApiKeyUpdateWithoutApi_key_permissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    unlimited?: BoolFieldUpdateOperationsInput | boolean
    minInterval?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRequest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneWithoutApiKeysNestedInput
    usageLogs?: ApiUsageLogUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutApi_key_permissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    unlimited?: BoolFieldUpdateOperationsInput | boolean
    minInterval?: IntFieldUpdateOperationsInput | number
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRequest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    usageLogs?: ApiUsageLogUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type api_credits_purchaseCreateManyUserInput = {
    id?: string
    credits: number
    purchaseDate?: Date | string
  }

  export type api_credits_usageCreateManyUserInput = {
    id?: string
    api_key_id: string
    credits: number
    usageDate?: Date | string
  }

  export type ApiKeyCreateManyOwnerInput = {
    id?: string
    key: string
    unlimited: boolean
    minInterval?: number
    description?: string | null
    createdAt?: Date | string
    lastRequest?: Date | string | null
    name: string
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

  export type SessionCreateManyUserInput = {
    id?: string
    expiresAt: Date | string
    twoFactorVerified?: boolean
  }

  export type ApiKeyCreditsBalanceCreateManyUserInput = {
    id?: string
    credits: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningAccountCreateManyUserInput = {
    id?: number
    type: $Enums.AccountType
    username: string
    passwordHash: string
    school: string
    baseUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type api_credits_purchaseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type api_credits_purchaseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type api_credits_purchaseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type api_credits_usageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    api_key_id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    usageDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type api_credits_usageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    api_key_id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    usageDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type api_credits_usageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    api_key_id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    usageDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    unlimited?: BoolFieldUpdateOperationsInput | boolean
    minInterval?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRequest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    api_key_permission?: api_key_permissionUpdateManyWithoutApi_keyNestedInput
    usageLogs?: ApiUsageLogUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    unlimited?: BoolFieldUpdateOperationsInput | boolean
    minInterval?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRequest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    api_key_permission?: api_key_permissionUncheckedUpdateManyWithoutApi_keyNestedInput
    usageLogs?: ApiUsageLogUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    unlimited?: BoolFieldUpdateOperationsInput | boolean
    minInterval?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRequest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
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

  export type ApiKeyCreditsBalanceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreditsBalanceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreditsBalanceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningAccountUpdateWithoutUserInput = {
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningAccountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningAccountUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type api_key_permissionCreateManyApi_keyInput = {
    id: string
    permission: string
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

  export type api_key_permissionUpdateWithoutApi_keyInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
  }

  export type api_key_permissionUncheckedUpdateWithoutApi_keyInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
  }

  export type api_key_permissionUncheckedUpdateManyWithoutApi_keyInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
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