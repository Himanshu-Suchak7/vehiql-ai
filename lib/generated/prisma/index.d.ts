
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
 * Model Cars
 * 
 */
export type Cars = $Result.DefaultSelection<Prisma.$CarsPayload>
/**
 * Model Dealership_Info
 * 
 */
export type Dealership_Info = $Result.DefaultSelection<Prisma.$Dealership_InfoPayload>
/**
 * Model Working_Hours
 * 
 */
export type Working_Hours = $Result.DefaultSelection<Prisma.$Working_HoursPayload>
/**
 * Model Saved_Cars
 * 
 */
export type Saved_Cars = $Result.DefaultSelection<Prisma.$Saved_CarsPayload>
/**
 * Model Test_Drive_Booking
 * 
 */
export type Test_Drive_Booking = $Result.DefaultSelection<Prisma.$Test_Drive_BookingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const User_Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type User_Role = (typeof User_Role)[keyof typeof User_Role]


export const Car_Status: {
  AVAILABLE: 'AVAILABLE',
  UNAVAILABLE: 'UNAVAILABLE',
  SOLD: 'SOLD'
};

export type Car_Status = (typeof Car_Status)[keyof typeof Car_Status]


export const Day_Of_Week: {
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY'
};

export type Day_Of_Week = (typeof Day_Of_Week)[keyof typeof Day_Of_Week]


export const Booking_Status: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  NO_SHOW: 'NO_SHOW'
};

export type Booking_Status = (typeof Booking_Status)[keyof typeof Booking_Status]

}

export type User_Role = $Enums.User_Role

export const User_Role: typeof $Enums.User_Role

export type Car_Status = $Enums.Car_Status

export const Car_Status: typeof $Enums.Car_Status

export type Day_Of_Week = $Enums.Day_Of_Week

export const Day_Of_Week: typeof $Enums.Day_Of_Week

export type Booking_Status = $Enums.Booking_Status

export const Booking_Status: typeof $Enums.Booking_Status

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
   * `prisma.cars`: Exposes CRUD operations for the **Cars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.cars.findMany()
    * ```
    */
  get cars(): Prisma.CarsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dealership_Info`: Exposes CRUD operations for the **Dealership_Info** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dealership_Infos
    * const dealership_Infos = await prisma.dealership_Info.findMany()
    * ```
    */
  get dealership_Info(): Prisma.Dealership_InfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.working_Hours`: Exposes CRUD operations for the **Working_Hours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Working_Hours
    * const working_Hours = await prisma.working_Hours.findMany()
    * ```
    */
  get working_Hours(): Prisma.Working_HoursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saved_Cars`: Exposes CRUD operations for the **Saved_Cars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Saved_Cars
    * const saved_Cars = await prisma.saved_Cars.findMany()
    * ```
    */
  get saved_Cars(): Prisma.Saved_CarsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.test_Drive_Booking`: Exposes CRUD operations for the **Test_Drive_Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Test_Drive_Bookings
    * const test_Drive_Bookings = await prisma.test_Drive_Booking.findMany()
    * ```
    */
  get test_Drive_Booking(): Prisma.Test_Drive_BookingDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Cars: 'Cars',
    Dealership_Info: 'Dealership_Info',
    Working_Hours: 'Working_Hours',
    Saved_Cars: 'Saved_Cars',
    Test_Drive_Booking: 'Test_Drive_Booking'
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
      modelProps: "user" | "cars" | "dealership_Info" | "working_Hours" | "saved_Cars" | "test_Drive_Booking"
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
      Cars: {
        payload: Prisma.$CarsPayload<ExtArgs>
        fields: Prisma.CarsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          findFirst: {
            args: Prisma.CarsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          findMany: {
            args: Prisma.CarsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>[]
          }
          create: {
            args: Prisma.CarsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          createMany: {
            args: Prisma.CarsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>[]
          }
          delete: {
            args: Prisma.CarsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          update: {
            args: Prisma.CarsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          deleteMany: {
            args: Prisma.CarsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>[]
          }
          upsert: {
            args: Prisma.CarsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          aggregate: {
            args: Prisma.CarsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCars>
          }
          groupBy: {
            args: Prisma.CarsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarsCountArgs<ExtArgs>
            result: $Utils.Optional<CarsCountAggregateOutputType> | number
          }
        }
      }
      Dealership_Info: {
        payload: Prisma.$Dealership_InfoPayload<ExtArgs>
        fields: Prisma.Dealership_InfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Dealership_InfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dealership_InfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Dealership_InfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dealership_InfoPayload>
          }
          findFirst: {
            args: Prisma.Dealership_InfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dealership_InfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Dealership_InfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dealership_InfoPayload>
          }
          findMany: {
            args: Prisma.Dealership_InfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dealership_InfoPayload>[]
          }
          create: {
            args: Prisma.Dealership_InfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dealership_InfoPayload>
          }
          createMany: {
            args: Prisma.Dealership_InfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Dealership_InfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dealership_InfoPayload>[]
          }
          delete: {
            args: Prisma.Dealership_InfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dealership_InfoPayload>
          }
          update: {
            args: Prisma.Dealership_InfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dealership_InfoPayload>
          }
          deleteMany: {
            args: Prisma.Dealership_InfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Dealership_InfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Dealership_InfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dealership_InfoPayload>[]
          }
          upsert: {
            args: Prisma.Dealership_InfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dealership_InfoPayload>
          }
          aggregate: {
            args: Prisma.Dealership_InfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDealership_Info>
          }
          groupBy: {
            args: Prisma.Dealership_InfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Dealership_InfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.Dealership_InfoCountArgs<ExtArgs>
            result: $Utils.Optional<Dealership_InfoCountAggregateOutputType> | number
          }
        }
      }
      Working_Hours: {
        payload: Prisma.$Working_HoursPayload<ExtArgs>
        fields: Prisma.Working_HoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Working_HoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Working_HoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Working_HoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Working_HoursPayload>
          }
          findFirst: {
            args: Prisma.Working_HoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Working_HoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Working_HoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Working_HoursPayload>
          }
          findMany: {
            args: Prisma.Working_HoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Working_HoursPayload>[]
          }
          create: {
            args: Prisma.Working_HoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Working_HoursPayload>
          }
          createMany: {
            args: Prisma.Working_HoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Working_HoursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Working_HoursPayload>[]
          }
          delete: {
            args: Prisma.Working_HoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Working_HoursPayload>
          }
          update: {
            args: Prisma.Working_HoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Working_HoursPayload>
          }
          deleteMany: {
            args: Prisma.Working_HoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Working_HoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Working_HoursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Working_HoursPayload>[]
          }
          upsert: {
            args: Prisma.Working_HoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Working_HoursPayload>
          }
          aggregate: {
            args: Prisma.Working_HoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorking_Hours>
          }
          groupBy: {
            args: Prisma.Working_HoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<Working_HoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.Working_HoursCountArgs<ExtArgs>
            result: $Utils.Optional<Working_HoursCountAggregateOutputType> | number
          }
        }
      }
      Saved_Cars: {
        payload: Prisma.$Saved_CarsPayload<ExtArgs>
        fields: Prisma.Saved_CarsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Saved_CarsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Saved_CarsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Saved_CarsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Saved_CarsPayload>
          }
          findFirst: {
            args: Prisma.Saved_CarsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Saved_CarsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Saved_CarsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Saved_CarsPayload>
          }
          findMany: {
            args: Prisma.Saved_CarsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Saved_CarsPayload>[]
          }
          create: {
            args: Prisma.Saved_CarsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Saved_CarsPayload>
          }
          createMany: {
            args: Prisma.Saved_CarsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Saved_CarsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Saved_CarsPayload>[]
          }
          delete: {
            args: Prisma.Saved_CarsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Saved_CarsPayload>
          }
          update: {
            args: Prisma.Saved_CarsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Saved_CarsPayload>
          }
          deleteMany: {
            args: Prisma.Saved_CarsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Saved_CarsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Saved_CarsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Saved_CarsPayload>[]
          }
          upsert: {
            args: Prisma.Saved_CarsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Saved_CarsPayload>
          }
          aggregate: {
            args: Prisma.Saved_CarsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaved_Cars>
          }
          groupBy: {
            args: Prisma.Saved_CarsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Saved_CarsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Saved_CarsCountArgs<ExtArgs>
            result: $Utils.Optional<Saved_CarsCountAggregateOutputType> | number
          }
        }
      }
      Test_Drive_Booking: {
        payload: Prisma.$Test_Drive_BookingPayload<ExtArgs>
        fields: Prisma.Test_Drive_BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Test_Drive_BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test_Drive_BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Test_Drive_BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test_Drive_BookingPayload>
          }
          findFirst: {
            args: Prisma.Test_Drive_BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test_Drive_BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Test_Drive_BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test_Drive_BookingPayload>
          }
          findMany: {
            args: Prisma.Test_Drive_BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test_Drive_BookingPayload>[]
          }
          create: {
            args: Prisma.Test_Drive_BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test_Drive_BookingPayload>
          }
          createMany: {
            args: Prisma.Test_Drive_BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Test_Drive_BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test_Drive_BookingPayload>[]
          }
          delete: {
            args: Prisma.Test_Drive_BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test_Drive_BookingPayload>
          }
          update: {
            args: Prisma.Test_Drive_BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test_Drive_BookingPayload>
          }
          deleteMany: {
            args: Prisma.Test_Drive_BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Test_Drive_BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Test_Drive_BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test_Drive_BookingPayload>[]
          }
          upsert: {
            args: Prisma.Test_Drive_BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test_Drive_BookingPayload>
          }
          aggregate: {
            args: Prisma.Test_Drive_BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest_Drive_Booking>
          }
          groupBy: {
            args: Prisma.Test_Drive_BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<Test_Drive_BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.Test_Drive_BookingCountArgs<ExtArgs>
            result: $Utils.Optional<Test_Drive_BookingCountAggregateOutputType> | number
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
    cars?: CarsOmit
    dealership_Info?: Dealership_InfoOmit
    working_Hours?: Working_HoursOmit
    saved_Cars?: Saved_CarsOmit
    test_Drive_Booking?: Test_Drive_BookingOmit
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
    saved_cars: number
    test_drive_bookings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saved_cars?: boolean | UserCountOutputTypeCountSaved_carsArgs
    test_drive_bookings?: boolean | UserCountOutputTypeCountTest_drive_bookingsArgs
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
  export type UserCountOutputTypeCountSaved_carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Saved_CarsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTest_drive_bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Test_Drive_BookingWhereInput
  }


  /**
   * Count Type CarsCountOutputType
   */

  export type CarsCountOutputType = {
    saved_by: number
    test_drive_bookings: number
  }

  export type CarsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saved_by?: boolean | CarsCountOutputTypeCountSaved_byArgs
    test_drive_bookings?: boolean | CarsCountOutputTypeCountTest_drive_bookingsArgs
  }

  // Custom InputTypes
  /**
   * CarsCountOutputType without action
   */
  export type CarsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsCountOutputType
     */
    select?: CarsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarsCountOutputType without action
   */
  export type CarsCountOutputTypeCountSaved_byArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Saved_CarsWhereInput
  }

  /**
   * CarsCountOutputType without action
   */
  export type CarsCountOutputTypeCountTest_drive_bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Test_Drive_BookingWhereInput
  }


  /**
   * Count Type Dealership_InfoCountOutputType
   */

  export type Dealership_InfoCountOutputType = {
    working_hours: number
  }

  export type Dealership_InfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    working_hours?: boolean | Dealership_InfoCountOutputTypeCountWorking_hoursArgs
  }

  // Custom InputTypes
  /**
   * Dealership_InfoCountOutputType without action
   */
  export type Dealership_InfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership_InfoCountOutputType
     */
    select?: Dealership_InfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Dealership_InfoCountOutputType without action
   */
  export type Dealership_InfoCountOutputTypeCountWorking_hoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Working_HoursWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerk_user_id: string | null
    email: string | null
    name: string | null
    phone_number: string | null
    profile_picture: string | null
    role: $Enums.User_Role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerk_user_id: string | null
    email: string | null
    name: string | null
    phone_number: string | null
    profile_picture: string | null
    role: $Enums.User_Role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerk_user_id: number
    email: number
    name: number
    phone_number: number
    profile_picture: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerk_user_id?: true
    email?: true
    name?: true
    phone_number?: true
    profile_picture?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerk_user_id?: true
    email?: true
    name?: true
    phone_number?: true
    profile_picture?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerk_user_id?: true
    email?: true
    name?: true
    phone_number?: true
    profile_picture?: true
    role?: true
    created_at?: true
    updated_at?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerk_user_id: string
    email: string
    name: string | null
    phone_number: string | null
    profile_picture: string | null
    role: $Enums.User_Role
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
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
    clerk_user_id?: boolean
    email?: boolean
    name?: boolean
    phone_number?: boolean
    profile_picture?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    saved_cars?: boolean | User$saved_carsArgs<ExtArgs>
    test_drive_bookings?: boolean | User$test_drive_bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerk_user_id?: boolean
    email?: boolean
    name?: boolean
    phone_number?: boolean
    profile_picture?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerk_user_id?: boolean
    email?: boolean
    name?: boolean
    phone_number?: boolean
    profile_picture?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerk_user_id?: boolean
    email?: boolean
    name?: boolean
    phone_number?: boolean
    profile_picture?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerk_user_id" | "email" | "name" | "phone_number" | "profile_picture" | "role" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saved_cars?: boolean | User$saved_carsArgs<ExtArgs>
    test_drive_bookings?: boolean | User$test_drive_bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      saved_cars: Prisma.$Saved_CarsPayload<ExtArgs>[]
      test_drive_bookings: Prisma.$Test_Drive_BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerk_user_id: string
      email: string
      name: string | null
      phone_number: string | null
      profile_picture: string | null
      role: $Enums.User_Role
      created_at: Date
      updated_at: Date
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
    saved_cars<T extends User$saved_carsArgs<ExtArgs> = {}>(args?: Subset<T, User$saved_carsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Saved_CarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    test_drive_bookings<T extends User$test_drive_bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$test_drive_bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Test_Drive_BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly clerk_user_id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly profile_picture: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'User_Role'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
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
   * User.saved_cars
   */
  export type User$saved_carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Cars
     */
    select?: Saved_CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saved_Cars
     */
    omit?: Saved_CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Saved_CarsInclude<ExtArgs> | null
    where?: Saved_CarsWhereInput
    orderBy?: Saved_CarsOrderByWithRelationInput | Saved_CarsOrderByWithRelationInput[]
    cursor?: Saved_CarsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Saved_CarsScalarFieldEnum | Saved_CarsScalarFieldEnum[]
  }

  /**
   * User.test_drive_bookings
   */
  export type User$test_drive_bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Drive_Booking
     */
    select?: Test_Drive_BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Drive_Booking
     */
    omit?: Test_Drive_BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_Drive_BookingInclude<ExtArgs> | null
    where?: Test_Drive_BookingWhereInput
    orderBy?: Test_Drive_BookingOrderByWithRelationInput | Test_Drive_BookingOrderByWithRelationInput[]
    cursor?: Test_Drive_BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Test_Drive_BookingScalarFieldEnum | Test_Drive_BookingScalarFieldEnum[]
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
   * Model Cars
   */

  export type AggregateCars = {
    _count: CarsCountAggregateOutputType | null
    _avg: CarsAvgAggregateOutputType | null
    _sum: CarsSumAggregateOutputType | null
    _min: CarsMinAggregateOutputType | null
    _max: CarsMaxAggregateOutputType | null
  }

  export type CarsAvgAggregateOutputType = {
    year: number | null
    price: Decimal | null
    mileage: number | null
    seating_capacity: number | null
  }

  export type CarsSumAggregateOutputType = {
    year: number | null
    price: Decimal | null
    mileage: number | null
    seating_capacity: number | null
  }

  export type CarsMinAggregateOutputType = {
    id: string | null
    make: string | null
    model: string | null
    year: number | null
    price: Decimal | null
    mileage: number | null
    color: string | null
    fuel_type: string | null
    transmission: string | null
    body_type: string | null
    description: string | null
    seating_capacity: number | null
    status: $Enums.Car_Status | null
    featured: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CarsMaxAggregateOutputType = {
    id: string | null
    make: string | null
    model: string | null
    year: number | null
    price: Decimal | null
    mileage: number | null
    color: string | null
    fuel_type: string | null
    transmission: string | null
    body_type: string | null
    description: string | null
    seating_capacity: number | null
    status: $Enums.Car_Status | null
    featured: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CarsCountAggregateOutputType = {
    id: number
    make: number
    model: number
    year: number
    price: number
    mileage: number
    color: number
    fuel_type: number
    transmission: number
    body_type: number
    description: number
    seating_capacity: number
    status: number
    featured: number
    images: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CarsAvgAggregateInputType = {
    year?: true
    price?: true
    mileage?: true
    seating_capacity?: true
  }

  export type CarsSumAggregateInputType = {
    year?: true
    price?: true
    mileage?: true
    seating_capacity?: true
  }

  export type CarsMinAggregateInputType = {
    id?: true
    make?: true
    model?: true
    year?: true
    price?: true
    mileage?: true
    color?: true
    fuel_type?: true
    transmission?: true
    body_type?: true
    description?: true
    seating_capacity?: true
    status?: true
    featured?: true
    created_at?: true
    updated_at?: true
  }

  export type CarsMaxAggregateInputType = {
    id?: true
    make?: true
    model?: true
    year?: true
    price?: true
    mileage?: true
    color?: true
    fuel_type?: true
    transmission?: true
    body_type?: true
    description?: true
    seating_capacity?: true
    status?: true
    featured?: true
    created_at?: true
    updated_at?: true
  }

  export type CarsCountAggregateInputType = {
    id?: true
    make?: true
    model?: true
    year?: true
    price?: true
    mileage?: true
    color?: true
    fuel_type?: true
    transmission?: true
    body_type?: true
    description?: true
    seating_capacity?: true
    status?: true
    featured?: true
    images?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CarsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to aggregate.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarsMaxAggregateInputType
  }

  export type GetCarsAggregateType<T extends CarsAggregateArgs> = {
        [P in keyof T & keyof AggregateCars]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCars[P]>
      : GetScalarType<T[P], AggregateCars[P]>
  }




  export type CarsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarsWhereInput
    orderBy?: CarsOrderByWithAggregationInput | CarsOrderByWithAggregationInput[]
    by: CarsScalarFieldEnum[] | CarsScalarFieldEnum
    having?: CarsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarsCountAggregateInputType | true
    _avg?: CarsAvgAggregateInputType
    _sum?: CarsSumAggregateInputType
    _min?: CarsMinAggregateInputType
    _max?: CarsMaxAggregateInputType
  }

  export type CarsGroupByOutputType = {
    id: string
    make: string
    model: string
    year: number
    price: Decimal
    mileage: number
    color: string
    fuel_type: string
    transmission: string
    body_type: string
    description: string
    seating_capacity: number | null
    status: $Enums.Car_Status
    featured: boolean
    images: string[]
    created_at: Date
    updated_at: Date
    _count: CarsCountAggregateOutputType | null
    _avg: CarsAvgAggregateOutputType | null
    _sum: CarsSumAggregateOutputType | null
    _min: CarsMinAggregateOutputType | null
    _max: CarsMaxAggregateOutputType | null
  }

  type GetCarsGroupByPayload<T extends CarsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarsGroupByOutputType[P]>
            : GetScalarType<T[P], CarsGroupByOutputType[P]>
        }
      >
    >


  export type CarsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    mileage?: boolean
    color?: boolean
    fuel_type?: boolean
    transmission?: boolean
    body_type?: boolean
    description?: boolean
    seating_capacity?: boolean
    status?: boolean
    featured?: boolean
    images?: boolean
    created_at?: boolean
    updated_at?: boolean
    saved_by?: boolean | Cars$saved_byArgs<ExtArgs>
    test_drive_bookings?: boolean | Cars$test_drive_bookingsArgs<ExtArgs>
    _count?: boolean | CarsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cars"]>

  export type CarsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    mileage?: boolean
    color?: boolean
    fuel_type?: boolean
    transmission?: boolean
    body_type?: boolean
    description?: boolean
    seating_capacity?: boolean
    status?: boolean
    featured?: boolean
    images?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["cars"]>

  export type CarsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    mileage?: boolean
    color?: boolean
    fuel_type?: boolean
    transmission?: boolean
    body_type?: boolean
    description?: boolean
    seating_capacity?: boolean
    status?: boolean
    featured?: boolean
    images?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["cars"]>

  export type CarsSelectScalar = {
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    mileage?: boolean
    color?: boolean
    fuel_type?: boolean
    transmission?: boolean
    body_type?: boolean
    description?: boolean
    seating_capacity?: boolean
    status?: boolean
    featured?: boolean
    images?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CarsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "make" | "model" | "year" | "price" | "mileage" | "color" | "fuel_type" | "transmission" | "body_type" | "description" | "seating_capacity" | "status" | "featured" | "images" | "created_at" | "updated_at", ExtArgs["result"]["cars"]>
  export type CarsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saved_by?: boolean | Cars$saved_byArgs<ExtArgs>
    test_drive_bookings?: boolean | Cars$test_drive_bookingsArgs<ExtArgs>
    _count?: boolean | CarsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CarsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CarsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cars"
    objects: {
      saved_by: Prisma.$Saved_CarsPayload<ExtArgs>[]
      test_drive_bookings: Prisma.$Test_Drive_BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      make: string
      model: string
      year: number
      price: Prisma.Decimal
      mileage: number
      color: string
      fuel_type: string
      transmission: string
      body_type: string
      description: string
      seating_capacity: number | null
      status: $Enums.Car_Status
      featured: boolean
      images: string[]
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["cars"]>
    composites: {}
  }

  type CarsGetPayload<S extends boolean | null | undefined | CarsDefaultArgs> = $Result.GetResult<Prisma.$CarsPayload, S>

  type CarsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarsCountAggregateInputType | true
    }

  export interface CarsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cars'], meta: { name: 'Cars' } }
    /**
     * Find zero or one Cars that matches the filter.
     * @param {CarsFindUniqueArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarsFindUniqueArgs>(args: SelectSubset<T, CarsFindUniqueArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cars that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarsFindUniqueOrThrowArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarsFindUniqueOrThrowArgs>(args: SelectSubset<T, CarsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsFindFirstArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarsFindFirstArgs>(args?: SelectSubset<T, CarsFindFirstArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cars that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsFindFirstOrThrowArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarsFindFirstOrThrowArgs>(args?: SelectSubset<T, CarsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.cars.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.cars.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carsWithIdOnly = await prisma.cars.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarsFindManyArgs>(args?: SelectSubset<T, CarsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cars.
     * @param {CarsCreateArgs} args - Arguments to create a Cars.
     * @example
     * // Create one Cars
     * const Cars = await prisma.cars.create({
     *   data: {
     *     // ... data to create a Cars
     *   }
     * })
     * 
     */
    create<T extends CarsCreateArgs>(args: SelectSubset<T, CarsCreateArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarsCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const cars = await prisma.cars.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarsCreateManyArgs>(args?: SelectSubset<T, CarsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarsCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const cars = await prisma.cars.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `id`
     * const carsWithIdOnly = await prisma.cars.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarsCreateManyAndReturnArgs>(args?: SelectSubset<T, CarsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cars.
     * @param {CarsDeleteArgs} args - Arguments to delete one Cars.
     * @example
     * // Delete one Cars
     * const Cars = await prisma.cars.delete({
     *   where: {
     *     // ... filter to delete one Cars
     *   }
     * })
     * 
     */
    delete<T extends CarsDeleteArgs>(args: SelectSubset<T, CarsDeleteArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cars.
     * @param {CarsUpdateArgs} args - Arguments to update one Cars.
     * @example
     * // Update one Cars
     * const cars = await prisma.cars.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarsUpdateArgs>(args: SelectSubset<T, CarsUpdateArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarsDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.cars.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarsDeleteManyArgs>(args?: SelectSubset<T, CarsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const cars = await prisma.cars.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarsUpdateManyArgs>(args: SelectSubset<T, CarsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarsUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const cars = await prisma.cars.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `id`
     * const carsWithIdOnly = await prisma.cars.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarsUpdateManyAndReturnArgs>(args: SelectSubset<T, CarsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cars.
     * @param {CarsUpsertArgs} args - Arguments to update or create a Cars.
     * @example
     * // Update or create a Cars
     * const cars = await prisma.cars.upsert({
     *   create: {
     *     // ... data to create a Cars
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cars we want to update
     *   }
     * })
     */
    upsert<T extends CarsUpsertArgs>(args: SelectSubset<T, CarsUpsertArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.cars.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarsCountArgs>(
      args?: Subset<T, CarsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarsAggregateArgs>(args: Subset<T, CarsAggregateArgs>): Prisma.PrismaPromise<GetCarsAggregateType<T>>

    /**
     * Group by Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsGroupByArgs} args - Group by arguments.
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
      T extends CarsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarsGroupByArgs['orderBy'] }
        : { orderBy?: CarsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cars model
   */
  readonly fields: CarsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cars.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    saved_by<T extends Cars$saved_byArgs<ExtArgs> = {}>(args?: Subset<T, Cars$saved_byArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Saved_CarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    test_drive_bookings<T extends Cars$test_drive_bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Cars$test_drive_bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Test_Drive_BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cars model
   */
  interface CarsFieldRefs {
    readonly id: FieldRef<"Cars", 'String'>
    readonly make: FieldRef<"Cars", 'String'>
    readonly model: FieldRef<"Cars", 'String'>
    readonly year: FieldRef<"Cars", 'Int'>
    readonly price: FieldRef<"Cars", 'Decimal'>
    readonly mileage: FieldRef<"Cars", 'Int'>
    readonly color: FieldRef<"Cars", 'String'>
    readonly fuel_type: FieldRef<"Cars", 'String'>
    readonly transmission: FieldRef<"Cars", 'String'>
    readonly body_type: FieldRef<"Cars", 'String'>
    readonly description: FieldRef<"Cars", 'String'>
    readonly seating_capacity: FieldRef<"Cars", 'Int'>
    readonly status: FieldRef<"Cars", 'Car_Status'>
    readonly featured: FieldRef<"Cars", 'Boolean'>
    readonly images: FieldRef<"Cars", 'String[]'>
    readonly created_at: FieldRef<"Cars", 'DateTime'>
    readonly updated_at: FieldRef<"Cars", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cars findUnique
   */
  export type CarsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where: CarsWhereUniqueInput
  }

  /**
   * Cars findUniqueOrThrow
   */
  export type CarsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where: CarsWhereUniqueInput
  }

  /**
   * Cars findFirst
   */
  export type CarsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * Cars findFirstOrThrow
   */
  export type CarsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * Cars findMany
   */
  export type CarsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * Cars create
   */
  export type CarsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * The data needed to create a Cars.
     */
    data: XOR<CarsCreateInput, CarsUncheckedCreateInput>
  }

  /**
   * Cars createMany
   */
  export type CarsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarsCreateManyInput | CarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cars createManyAndReturn
   */
  export type CarsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * The data used to create many Cars.
     */
    data: CarsCreateManyInput | CarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cars update
   */
  export type CarsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * The data needed to update a Cars.
     */
    data: XOR<CarsUpdateInput, CarsUncheckedUpdateInput>
    /**
     * Choose, which Cars to update.
     */
    where: CarsWhereUniqueInput
  }

  /**
   * Cars updateMany
   */
  export type CarsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarsUpdateManyMutationInput, CarsUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarsWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Cars updateManyAndReturn
   */
  export type CarsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * The data used to update Cars.
     */
    data: XOR<CarsUpdateManyMutationInput, CarsUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarsWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Cars upsert
   */
  export type CarsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * The filter to search for the Cars to update in case it exists.
     */
    where: CarsWhereUniqueInput
    /**
     * In case the Cars found by the `where` argument doesn't exist, create a new Cars with this data.
     */
    create: XOR<CarsCreateInput, CarsUncheckedCreateInput>
    /**
     * In case the Cars was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarsUpdateInput, CarsUncheckedUpdateInput>
  }

  /**
   * Cars delete
   */
  export type CarsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter which Cars to delete.
     */
    where: CarsWhereUniqueInput
  }

  /**
   * Cars deleteMany
   */
  export type CarsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarsWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Cars.saved_by
   */
  export type Cars$saved_byArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Cars
     */
    select?: Saved_CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saved_Cars
     */
    omit?: Saved_CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Saved_CarsInclude<ExtArgs> | null
    where?: Saved_CarsWhereInput
    orderBy?: Saved_CarsOrderByWithRelationInput | Saved_CarsOrderByWithRelationInput[]
    cursor?: Saved_CarsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Saved_CarsScalarFieldEnum | Saved_CarsScalarFieldEnum[]
  }

  /**
   * Cars.test_drive_bookings
   */
  export type Cars$test_drive_bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Drive_Booking
     */
    select?: Test_Drive_BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Drive_Booking
     */
    omit?: Test_Drive_BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_Drive_BookingInclude<ExtArgs> | null
    where?: Test_Drive_BookingWhereInput
    orderBy?: Test_Drive_BookingOrderByWithRelationInput | Test_Drive_BookingOrderByWithRelationInput[]
    cursor?: Test_Drive_BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Test_Drive_BookingScalarFieldEnum | Test_Drive_BookingScalarFieldEnum[]
  }

  /**
   * Cars without action
   */
  export type CarsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
  }


  /**
   * Model Dealership_Info
   */

  export type AggregateDealership_Info = {
    _count: Dealership_InfoCountAggregateOutputType | null
    _min: Dealership_InfoMinAggregateOutputType | null
    _max: Dealership_InfoMaxAggregateOutputType | null
  }

  export type Dealership_InfoMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone_number: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Dealership_InfoMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone_number: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Dealership_InfoCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phone_number: number
    email: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Dealership_InfoMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone_number?: true
    email?: true
    created_at?: true
    updated_at?: true
  }

  export type Dealership_InfoMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone_number?: true
    email?: true
    created_at?: true
    updated_at?: true
  }

  export type Dealership_InfoCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone_number?: true
    email?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Dealership_InfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dealership_Info to aggregate.
     */
    where?: Dealership_InfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dealership_Infos to fetch.
     */
    orderBy?: Dealership_InfoOrderByWithRelationInput | Dealership_InfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Dealership_InfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dealership_Infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dealership_Infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dealership_Infos
    **/
    _count?: true | Dealership_InfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Dealership_InfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Dealership_InfoMaxAggregateInputType
  }

  export type GetDealership_InfoAggregateType<T extends Dealership_InfoAggregateArgs> = {
        [P in keyof T & keyof AggregateDealership_Info]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDealership_Info[P]>
      : GetScalarType<T[P], AggregateDealership_Info[P]>
  }




  export type Dealership_InfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Dealership_InfoWhereInput
    orderBy?: Dealership_InfoOrderByWithAggregationInput | Dealership_InfoOrderByWithAggregationInput[]
    by: Dealership_InfoScalarFieldEnum[] | Dealership_InfoScalarFieldEnum
    having?: Dealership_InfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Dealership_InfoCountAggregateInputType | true
    _min?: Dealership_InfoMinAggregateInputType
    _max?: Dealership_InfoMaxAggregateInputType
  }

  export type Dealership_InfoGroupByOutputType = {
    id: string
    name: string
    address: string
    phone_number: string
    email: string
    created_at: Date
    updated_at: Date
    _count: Dealership_InfoCountAggregateOutputType | null
    _min: Dealership_InfoMinAggregateOutputType | null
    _max: Dealership_InfoMaxAggregateOutputType | null
  }

  type GetDealership_InfoGroupByPayload<T extends Dealership_InfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Dealership_InfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Dealership_InfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Dealership_InfoGroupByOutputType[P]>
            : GetScalarType<T[P], Dealership_InfoGroupByOutputType[P]>
        }
      >
    >


  export type Dealership_InfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone_number?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
    working_hours?: boolean | Dealership_Info$working_hoursArgs<ExtArgs>
    _count?: boolean | Dealership_InfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealership_Info"]>

  export type Dealership_InfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone_number?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["dealership_Info"]>

  export type Dealership_InfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone_number?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["dealership_Info"]>

  export type Dealership_InfoSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phone_number?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type Dealership_InfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "phone_number" | "email" | "created_at" | "updated_at", ExtArgs["result"]["dealership_Info"]>
  export type Dealership_InfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    working_hours?: boolean | Dealership_Info$working_hoursArgs<ExtArgs>
    _count?: boolean | Dealership_InfoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Dealership_InfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Dealership_InfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Dealership_InfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dealership_Info"
    objects: {
      working_hours: Prisma.$Working_HoursPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      phone_number: string
      email: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["dealership_Info"]>
    composites: {}
  }

  type Dealership_InfoGetPayload<S extends boolean | null | undefined | Dealership_InfoDefaultArgs> = $Result.GetResult<Prisma.$Dealership_InfoPayload, S>

  type Dealership_InfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Dealership_InfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Dealership_InfoCountAggregateInputType | true
    }

  export interface Dealership_InfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dealership_Info'], meta: { name: 'Dealership_Info' } }
    /**
     * Find zero or one Dealership_Info that matches the filter.
     * @param {Dealership_InfoFindUniqueArgs} args - Arguments to find a Dealership_Info
     * @example
     * // Get one Dealership_Info
     * const dealership_Info = await prisma.dealership_Info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Dealership_InfoFindUniqueArgs>(args: SelectSubset<T, Dealership_InfoFindUniqueArgs<ExtArgs>>): Prisma__Dealership_InfoClient<$Result.GetResult<Prisma.$Dealership_InfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dealership_Info that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Dealership_InfoFindUniqueOrThrowArgs} args - Arguments to find a Dealership_Info
     * @example
     * // Get one Dealership_Info
     * const dealership_Info = await prisma.dealership_Info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Dealership_InfoFindUniqueOrThrowArgs>(args: SelectSubset<T, Dealership_InfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Dealership_InfoClient<$Result.GetResult<Prisma.$Dealership_InfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dealership_Info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dealership_InfoFindFirstArgs} args - Arguments to find a Dealership_Info
     * @example
     * // Get one Dealership_Info
     * const dealership_Info = await prisma.dealership_Info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Dealership_InfoFindFirstArgs>(args?: SelectSubset<T, Dealership_InfoFindFirstArgs<ExtArgs>>): Prisma__Dealership_InfoClient<$Result.GetResult<Prisma.$Dealership_InfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dealership_Info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dealership_InfoFindFirstOrThrowArgs} args - Arguments to find a Dealership_Info
     * @example
     * // Get one Dealership_Info
     * const dealership_Info = await prisma.dealership_Info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Dealership_InfoFindFirstOrThrowArgs>(args?: SelectSubset<T, Dealership_InfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__Dealership_InfoClient<$Result.GetResult<Prisma.$Dealership_InfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dealership_Infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dealership_InfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dealership_Infos
     * const dealership_Infos = await prisma.dealership_Info.findMany()
     * 
     * // Get first 10 Dealership_Infos
     * const dealership_Infos = await prisma.dealership_Info.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dealership_InfoWithIdOnly = await prisma.dealership_Info.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Dealership_InfoFindManyArgs>(args?: SelectSubset<T, Dealership_InfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Dealership_InfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dealership_Info.
     * @param {Dealership_InfoCreateArgs} args - Arguments to create a Dealership_Info.
     * @example
     * // Create one Dealership_Info
     * const Dealership_Info = await prisma.dealership_Info.create({
     *   data: {
     *     // ... data to create a Dealership_Info
     *   }
     * })
     * 
     */
    create<T extends Dealership_InfoCreateArgs>(args: SelectSubset<T, Dealership_InfoCreateArgs<ExtArgs>>): Prisma__Dealership_InfoClient<$Result.GetResult<Prisma.$Dealership_InfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dealership_Infos.
     * @param {Dealership_InfoCreateManyArgs} args - Arguments to create many Dealership_Infos.
     * @example
     * // Create many Dealership_Infos
     * const dealership_Info = await prisma.dealership_Info.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Dealership_InfoCreateManyArgs>(args?: SelectSubset<T, Dealership_InfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dealership_Infos and returns the data saved in the database.
     * @param {Dealership_InfoCreateManyAndReturnArgs} args - Arguments to create many Dealership_Infos.
     * @example
     * // Create many Dealership_Infos
     * const dealership_Info = await prisma.dealership_Info.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dealership_Infos and only return the `id`
     * const dealership_InfoWithIdOnly = await prisma.dealership_Info.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Dealership_InfoCreateManyAndReturnArgs>(args?: SelectSubset<T, Dealership_InfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Dealership_InfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dealership_Info.
     * @param {Dealership_InfoDeleteArgs} args - Arguments to delete one Dealership_Info.
     * @example
     * // Delete one Dealership_Info
     * const Dealership_Info = await prisma.dealership_Info.delete({
     *   where: {
     *     // ... filter to delete one Dealership_Info
     *   }
     * })
     * 
     */
    delete<T extends Dealership_InfoDeleteArgs>(args: SelectSubset<T, Dealership_InfoDeleteArgs<ExtArgs>>): Prisma__Dealership_InfoClient<$Result.GetResult<Prisma.$Dealership_InfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dealership_Info.
     * @param {Dealership_InfoUpdateArgs} args - Arguments to update one Dealership_Info.
     * @example
     * // Update one Dealership_Info
     * const dealership_Info = await prisma.dealership_Info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Dealership_InfoUpdateArgs>(args: SelectSubset<T, Dealership_InfoUpdateArgs<ExtArgs>>): Prisma__Dealership_InfoClient<$Result.GetResult<Prisma.$Dealership_InfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dealership_Infos.
     * @param {Dealership_InfoDeleteManyArgs} args - Arguments to filter Dealership_Infos to delete.
     * @example
     * // Delete a few Dealership_Infos
     * const { count } = await prisma.dealership_Info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Dealership_InfoDeleteManyArgs>(args?: SelectSubset<T, Dealership_InfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dealership_Infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dealership_InfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dealership_Infos
     * const dealership_Info = await prisma.dealership_Info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Dealership_InfoUpdateManyArgs>(args: SelectSubset<T, Dealership_InfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dealership_Infos and returns the data updated in the database.
     * @param {Dealership_InfoUpdateManyAndReturnArgs} args - Arguments to update many Dealership_Infos.
     * @example
     * // Update many Dealership_Infos
     * const dealership_Info = await prisma.dealership_Info.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dealership_Infos and only return the `id`
     * const dealership_InfoWithIdOnly = await prisma.dealership_Info.updateManyAndReturn({
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
    updateManyAndReturn<T extends Dealership_InfoUpdateManyAndReturnArgs>(args: SelectSubset<T, Dealership_InfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Dealership_InfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dealership_Info.
     * @param {Dealership_InfoUpsertArgs} args - Arguments to update or create a Dealership_Info.
     * @example
     * // Update or create a Dealership_Info
     * const dealership_Info = await prisma.dealership_Info.upsert({
     *   create: {
     *     // ... data to create a Dealership_Info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dealership_Info we want to update
     *   }
     * })
     */
    upsert<T extends Dealership_InfoUpsertArgs>(args: SelectSubset<T, Dealership_InfoUpsertArgs<ExtArgs>>): Prisma__Dealership_InfoClient<$Result.GetResult<Prisma.$Dealership_InfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dealership_Infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dealership_InfoCountArgs} args - Arguments to filter Dealership_Infos to count.
     * @example
     * // Count the number of Dealership_Infos
     * const count = await prisma.dealership_Info.count({
     *   where: {
     *     // ... the filter for the Dealership_Infos we want to count
     *   }
     * })
    **/
    count<T extends Dealership_InfoCountArgs>(
      args?: Subset<T, Dealership_InfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Dealership_InfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dealership_Info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dealership_InfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Dealership_InfoAggregateArgs>(args: Subset<T, Dealership_InfoAggregateArgs>): Prisma.PrismaPromise<GetDealership_InfoAggregateType<T>>

    /**
     * Group by Dealership_Info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dealership_InfoGroupByArgs} args - Group by arguments.
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
      T extends Dealership_InfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Dealership_InfoGroupByArgs['orderBy'] }
        : { orderBy?: Dealership_InfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Dealership_InfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDealership_InfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dealership_Info model
   */
  readonly fields: Dealership_InfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dealership_Info.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Dealership_InfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    working_hours<T extends Dealership_Info$working_hoursArgs<ExtArgs> = {}>(args?: Subset<T, Dealership_Info$working_hoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Working_HoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Dealership_Info model
   */
  interface Dealership_InfoFieldRefs {
    readonly id: FieldRef<"Dealership_Info", 'String'>
    readonly name: FieldRef<"Dealership_Info", 'String'>
    readonly address: FieldRef<"Dealership_Info", 'String'>
    readonly phone_number: FieldRef<"Dealership_Info", 'String'>
    readonly email: FieldRef<"Dealership_Info", 'String'>
    readonly created_at: FieldRef<"Dealership_Info", 'DateTime'>
    readonly updated_at: FieldRef<"Dealership_Info", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dealership_Info findUnique
   */
  export type Dealership_InfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership_Info
     */
    select?: Dealership_InfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership_Info
     */
    omit?: Dealership_InfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dealership_InfoInclude<ExtArgs> | null
    /**
     * Filter, which Dealership_Info to fetch.
     */
    where: Dealership_InfoWhereUniqueInput
  }

  /**
   * Dealership_Info findUniqueOrThrow
   */
  export type Dealership_InfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership_Info
     */
    select?: Dealership_InfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership_Info
     */
    omit?: Dealership_InfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dealership_InfoInclude<ExtArgs> | null
    /**
     * Filter, which Dealership_Info to fetch.
     */
    where: Dealership_InfoWhereUniqueInput
  }

  /**
   * Dealership_Info findFirst
   */
  export type Dealership_InfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership_Info
     */
    select?: Dealership_InfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership_Info
     */
    omit?: Dealership_InfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dealership_InfoInclude<ExtArgs> | null
    /**
     * Filter, which Dealership_Info to fetch.
     */
    where?: Dealership_InfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dealership_Infos to fetch.
     */
    orderBy?: Dealership_InfoOrderByWithRelationInput | Dealership_InfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dealership_Infos.
     */
    cursor?: Dealership_InfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dealership_Infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dealership_Infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dealership_Infos.
     */
    distinct?: Dealership_InfoScalarFieldEnum | Dealership_InfoScalarFieldEnum[]
  }

  /**
   * Dealership_Info findFirstOrThrow
   */
  export type Dealership_InfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership_Info
     */
    select?: Dealership_InfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership_Info
     */
    omit?: Dealership_InfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dealership_InfoInclude<ExtArgs> | null
    /**
     * Filter, which Dealership_Info to fetch.
     */
    where?: Dealership_InfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dealership_Infos to fetch.
     */
    orderBy?: Dealership_InfoOrderByWithRelationInput | Dealership_InfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dealership_Infos.
     */
    cursor?: Dealership_InfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dealership_Infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dealership_Infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dealership_Infos.
     */
    distinct?: Dealership_InfoScalarFieldEnum | Dealership_InfoScalarFieldEnum[]
  }

  /**
   * Dealership_Info findMany
   */
  export type Dealership_InfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership_Info
     */
    select?: Dealership_InfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership_Info
     */
    omit?: Dealership_InfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dealership_InfoInclude<ExtArgs> | null
    /**
     * Filter, which Dealership_Infos to fetch.
     */
    where?: Dealership_InfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dealership_Infos to fetch.
     */
    orderBy?: Dealership_InfoOrderByWithRelationInput | Dealership_InfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dealership_Infos.
     */
    cursor?: Dealership_InfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dealership_Infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dealership_Infos.
     */
    skip?: number
    distinct?: Dealership_InfoScalarFieldEnum | Dealership_InfoScalarFieldEnum[]
  }

  /**
   * Dealership_Info create
   */
  export type Dealership_InfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership_Info
     */
    select?: Dealership_InfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership_Info
     */
    omit?: Dealership_InfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dealership_InfoInclude<ExtArgs> | null
    /**
     * The data needed to create a Dealership_Info.
     */
    data: XOR<Dealership_InfoCreateInput, Dealership_InfoUncheckedCreateInput>
  }

  /**
   * Dealership_Info createMany
   */
  export type Dealership_InfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dealership_Infos.
     */
    data: Dealership_InfoCreateManyInput | Dealership_InfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dealership_Info createManyAndReturn
   */
  export type Dealership_InfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership_Info
     */
    select?: Dealership_InfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership_Info
     */
    omit?: Dealership_InfoOmit<ExtArgs> | null
    /**
     * The data used to create many Dealership_Infos.
     */
    data: Dealership_InfoCreateManyInput | Dealership_InfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dealership_Info update
   */
  export type Dealership_InfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership_Info
     */
    select?: Dealership_InfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership_Info
     */
    omit?: Dealership_InfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dealership_InfoInclude<ExtArgs> | null
    /**
     * The data needed to update a Dealership_Info.
     */
    data: XOR<Dealership_InfoUpdateInput, Dealership_InfoUncheckedUpdateInput>
    /**
     * Choose, which Dealership_Info to update.
     */
    where: Dealership_InfoWhereUniqueInput
  }

  /**
   * Dealership_Info updateMany
   */
  export type Dealership_InfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dealership_Infos.
     */
    data: XOR<Dealership_InfoUpdateManyMutationInput, Dealership_InfoUncheckedUpdateManyInput>
    /**
     * Filter which Dealership_Infos to update
     */
    where?: Dealership_InfoWhereInput
    /**
     * Limit how many Dealership_Infos to update.
     */
    limit?: number
  }

  /**
   * Dealership_Info updateManyAndReturn
   */
  export type Dealership_InfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership_Info
     */
    select?: Dealership_InfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership_Info
     */
    omit?: Dealership_InfoOmit<ExtArgs> | null
    /**
     * The data used to update Dealership_Infos.
     */
    data: XOR<Dealership_InfoUpdateManyMutationInput, Dealership_InfoUncheckedUpdateManyInput>
    /**
     * Filter which Dealership_Infos to update
     */
    where?: Dealership_InfoWhereInput
    /**
     * Limit how many Dealership_Infos to update.
     */
    limit?: number
  }

  /**
   * Dealership_Info upsert
   */
  export type Dealership_InfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership_Info
     */
    select?: Dealership_InfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership_Info
     */
    omit?: Dealership_InfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dealership_InfoInclude<ExtArgs> | null
    /**
     * The filter to search for the Dealership_Info to update in case it exists.
     */
    where: Dealership_InfoWhereUniqueInput
    /**
     * In case the Dealership_Info found by the `where` argument doesn't exist, create a new Dealership_Info with this data.
     */
    create: XOR<Dealership_InfoCreateInput, Dealership_InfoUncheckedCreateInput>
    /**
     * In case the Dealership_Info was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Dealership_InfoUpdateInput, Dealership_InfoUncheckedUpdateInput>
  }

  /**
   * Dealership_Info delete
   */
  export type Dealership_InfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership_Info
     */
    select?: Dealership_InfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership_Info
     */
    omit?: Dealership_InfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dealership_InfoInclude<ExtArgs> | null
    /**
     * Filter which Dealership_Info to delete.
     */
    where: Dealership_InfoWhereUniqueInput
  }

  /**
   * Dealership_Info deleteMany
   */
  export type Dealership_InfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dealership_Infos to delete
     */
    where?: Dealership_InfoWhereInput
    /**
     * Limit how many Dealership_Infos to delete.
     */
    limit?: number
  }

  /**
   * Dealership_Info.working_hours
   */
  export type Dealership_Info$working_hoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Working_Hours
     */
    select?: Working_HoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Working_Hours
     */
    omit?: Working_HoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Working_HoursInclude<ExtArgs> | null
    where?: Working_HoursWhereInput
    orderBy?: Working_HoursOrderByWithRelationInput | Working_HoursOrderByWithRelationInput[]
    cursor?: Working_HoursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Working_HoursScalarFieldEnum | Working_HoursScalarFieldEnum[]
  }

  /**
   * Dealership_Info without action
   */
  export type Dealership_InfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership_Info
     */
    select?: Dealership_InfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership_Info
     */
    omit?: Dealership_InfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dealership_InfoInclude<ExtArgs> | null
  }


  /**
   * Model Working_Hours
   */

  export type AggregateWorking_Hours = {
    _count: Working_HoursCountAggregateOutputType | null
    _min: Working_HoursMinAggregateOutputType | null
    _max: Working_HoursMaxAggregateOutputType | null
  }

  export type Working_HoursMinAggregateOutputType = {
    id: string | null
    dealership_id: string | null
    day_of_week: $Enums.Day_Of_Week | null
    open_time: string | null
    close_time: string | null
    is_open: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Working_HoursMaxAggregateOutputType = {
    id: string | null
    dealership_id: string | null
    day_of_week: $Enums.Day_Of_Week | null
    open_time: string | null
    close_time: string | null
    is_open: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Working_HoursCountAggregateOutputType = {
    id: number
    dealership_id: number
    day_of_week: number
    open_time: number
    close_time: number
    is_open: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Working_HoursMinAggregateInputType = {
    id?: true
    dealership_id?: true
    day_of_week?: true
    open_time?: true
    close_time?: true
    is_open?: true
    created_at?: true
    updated_at?: true
  }

  export type Working_HoursMaxAggregateInputType = {
    id?: true
    dealership_id?: true
    day_of_week?: true
    open_time?: true
    close_time?: true
    is_open?: true
    created_at?: true
    updated_at?: true
  }

  export type Working_HoursCountAggregateInputType = {
    id?: true
    dealership_id?: true
    day_of_week?: true
    open_time?: true
    close_time?: true
    is_open?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Working_HoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Working_Hours to aggregate.
     */
    where?: Working_HoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Working_Hours to fetch.
     */
    orderBy?: Working_HoursOrderByWithRelationInput | Working_HoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Working_HoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Working_Hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Working_Hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Working_Hours
    **/
    _count?: true | Working_HoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Working_HoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Working_HoursMaxAggregateInputType
  }

  export type GetWorking_HoursAggregateType<T extends Working_HoursAggregateArgs> = {
        [P in keyof T & keyof AggregateWorking_Hours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorking_Hours[P]>
      : GetScalarType<T[P], AggregateWorking_Hours[P]>
  }




  export type Working_HoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Working_HoursWhereInput
    orderBy?: Working_HoursOrderByWithAggregationInput | Working_HoursOrderByWithAggregationInput[]
    by: Working_HoursScalarFieldEnum[] | Working_HoursScalarFieldEnum
    having?: Working_HoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Working_HoursCountAggregateInputType | true
    _min?: Working_HoursMinAggregateInputType
    _max?: Working_HoursMaxAggregateInputType
  }

  export type Working_HoursGroupByOutputType = {
    id: string
    dealership_id: string
    day_of_week: $Enums.Day_Of_Week
    open_time: string
    close_time: string
    is_open: boolean
    created_at: Date
    updated_at: Date
    _count: Working_HoursCountAggregateOutputType | null
    _min: Working_HoursMinAggregateOutputType | null
    _max: Working_HoursMaxAggregateOutputType | null
  }

  type GetWorking_HoursGroupByPayload<T extends Working_HoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Working_HoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Working_HoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Working_HoursGroupByOutputType[P]>
            : GetScalarType<T[P], Working_HoursGroupByOutputType[P]>
        }
      >
    >


  export type Working_HoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dealership_id?: boolean
    day_of_week?: boolean
    open_time?: boolean
    close_time?: boolean
    is_open?: boolean
    created_at?: boolean
    updated_at?: boolean
    dealership?: boolean | Dealership_InfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["working_Hours"]>

  export type Working_HoursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dealership_id?: boolean
    day_of_week?: boolean
    open_time?: boolean
    close_time?: boolean
    is_open?: boolean
    created_at?: boolean
    updated_at?: boolean
    dealership?: boolean | Dealership_InfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["working_Hours"]>

  export type Working_HoursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dealership_id?: boolean
    day_of_week?: boolean
    open_time?: boolean
    close_time?: boolean
    is_open?: boolean
    created_at?: boolean
    updated_at?: boolean
    dealership?: boolean | Dealership_InfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["working_Hours"]>

  export type Working_HoursSelectScalar = {
    id?: boolean
    dealership_id?: boolean
    day_of_week?: boolean
    open_time?: boolean
    close_time?: boolean
    is_open?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type Working_HoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dealership_id" | "day_of_week" | "open_time" | "close_time" | "is_open" | "created_at" | "updated_at", ExtArgs["result"]["working_Hours"]>
  export type Working_HoursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealership?: boolean | Dealership_InfoDefaultArgs<ExtArgs>
  }
  export type Working_HoursIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealership?: boolean | Dealership_InfoDefaultArgs<ExtArgs>
  }
  export type Working_HoursIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealership?: boolean | Dealership_InfoDefaultArgs<ExtArgs>
  }

  export type $Working_HoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Working_Hours"
    objects: {
      dealership: Prisma.$Dealership_InfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dealership_id: string
      day_of_week: $Enums.Day_Of_Week
      open_time: string
      close_time: string
      is_open: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["working_Hours"]>
    composites: {}
  }

  type Working_HoursGetPayload<S extends boolean | null | undefined | Working_HoursDefaultArgs> = $Result.GetResult<Prisma.$Working_HoursPayload, S>

  type Working_HoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Working_HoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Working_HoursCountAggregateInputType | true
    }

  export interface Working_HoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Working_Hours'], meta: { name: 'Working_Hours' } }
    /**
     * Find zero or one Working_Hours that matches the filter.
     * @param {Working_HoursFindUniqueArgs} args - Arguments to find a Working_Hours
     * @example
     * // Get one Working_Hours
     * const working_Hours = await prisma.working_Hours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Working_HoursFindUniqueArgs>(args: SelectSubset<T, Working_HoursFindUniqueArgs<ExtArgs>>): Prisma__Working_HoursClient<$Result.GetResult<Prisma.$Working_HoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Working_Hours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Working_HoursFindUniqueOrThrowArgs} args - Arguments to find a Working_Hours
     * @example
     * // Get one Working_Hours
     * const working_Hours = await prisma.working_Hours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Working_HoursFindUniqueOrThrowArgs>(args: SelectSubset<T, Working_HoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Working_HoursClient<$Result.GetResult<Prisma.$Working_HoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Working_Hours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Working_HoursFindFirstArgs} args - Arguments to find a Working_Hours
     * @example
     * // Get one Working_Hours
     * const working_Hours = await prisma.working_Hours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Working_HoursFindFirstArgs>(args?: SelectSubset<T, Working_HoursFindFirstArgs<ExtArgs>>): Prisma__Working_HoursClient<$Result.GetResult<Prisma.$Working_HoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Working_Hours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Working_HoursFindFirstOrThrowArgs} args - Arguments to find a Working_Hours
     * @example
     * // Get one Working_Hours
     * const working_Hours = await prisma.working_Hours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Working_HoursFindFirstOrThrowArgs>(args?: SelectSubset<T, Working_HoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__Working_HoursClient<$Result.GetResult<Prisma.$Working_HoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Working_Hours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Working_HoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Working_Hours
     * const working_Hours = await prisma.working_Hours.findMany()
     * 
     * // Get first 10 Working_Hours
     * const working_Hours = await prisma.working_Hours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const working_HoursWithIdOnly = await prisma.working_Hours.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Working_HoursFindManyArgs>(args?: SelectSubset<T, Working_HoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Working_HoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Working_Hours.
     * @param {Working_HoursCreateArgs} args - Arguments to create a Working_Hours.
     * @example
     * // Create one Working_Hours
     * const Working_Hours = await prisma.working_Hours.create({
     *   data: {
     *     // ... data to create a Working_Hours
     *   }
     * })
     * 
     */
    create<T extends Working_HoursCreateArgs>(args: SelectSubset<T, Working_HoursCreateArgs<ExtArgs>>): Prisma__Working_HoursClient<$Result.GetResult<Prisma.$Working_HoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Working_Hours.
     * @param {Working_HoursCreateManyArgs} args - Arguments to create many Working_Hours.
     * @example
     * // Create many Working_Hours
     * const working_Hours = await prisma.working_Hours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Working_HoursCreateManyArgs>(args?: SelectSubset<T, Working_HoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Working_Hours and returns the data saved in the database.
     * @param {Working_HoursCreateManyAndReturnArgs} args - Arguments to create many Working_Hours.
     * @example
     * // Create many Working_Hours
     * const working_Hours = await prisma.working_Hours.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Working_Hours and only return the `id`
     * const working_HoursWithIdOnly = await prisma.working_Hours.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Working_HoursCreateManyAndReturnArgs>(args?: SelectSubset<T, Working_HoursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Working_HoursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Working_Hours.
     * @param {Working_HoursDeleteArgs} args - Arguments to delete one Working_Hours.
     * @example
     * // Delete one Working_Hours
     * const Working_Hours = await prisma.working_Hours.delete({
     *   where: {
     *     // ... filter to delete one Working_Hours
     *   }
     * })
     * 
     */
    delete<T extends Working_HoursDeleteArgs>(args: SelectSubset<T, Working_HoursDeleteArgs<ExtArgs>>): Prisma__Working_HoursClient<$Result.GetResult<Prisma.$Working_HoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Working_Hours.
     * @param {Working_HoursUpdateArgs} args - Arguments to update one Working_Hours.
     * @example
     * // Update one Working_Hours
     * const working_Hours = await prisma.working_Hours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Working_HoursUpdateArgs>(args: SelectSubset<T, Working_HoursUpdateArgs<ExtArgs>>): Prisma__Working_HoursClient<$Result.GetResult<Prisma.$Working_HoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Working_Hours.
     * @param {Working_HoursDeleteManyArgs} args - Arguments to filter Working_Hours to delete.
     * @example
     * // Delete a few Working_Hours
     * const { count } = await prisma.working_Hours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Working_HoursDeleteManyArgs>(args?: SelectSubset<T, Working_HoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Working_Hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Working_HoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Working_Hours
     * const working_Hours = await prisma.working_Hours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Working_HoursUpdateManyArgs>(args: SelectSubset<T, Working_HoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Working_Hours and returns the data updated in the database.
     * @param {Working_HoursUpdateManyAndReturnArgs} args - Arguments to update many Working_Hours.
     * @example
     * // Update many Working_Hours
     * const working_Hours = await prisma.working_Hours.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Working_Hours and only return the `id`
     * const working_HoursWithIdOnly = await prisma.working_Hours.updateManyAndReturn({
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
    updateManyAndReturn<T extends Working_HoursUpdateManyAndReturnArgs>(args: SelectSubset<T, Working_HoursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Working_HoursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Working_Hours.
     * @param {Working_HoursUpsertArgs} args - Arguments to update or create a Working_Hours.
     * @example
     * // Update or create a Working_Hours
     * const working_Hours = await prisma.working_Hours.upsert({
     *   create: {
     *     // ... data to create a Working_Hours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Working_Hours we want to update
     *   }
     * })
     */
    upsert<T extends Working_HoursUpsertArgs>(args: SelectSubset<T, Working_HoursUpsertArgs<ExtArgs>>): Prisma__Working_HoursClient<$Result.GetResult<Prisma.$Working_HoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Working_Hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Working_HoursCountArgs} args - Arguments to filter Working_Hours to count.
     * @example
     * // Count the number of Working_Hours
     * const count = await prisma.working_Hours.count({
     *   where: {
     *     // ... the filter for the Working_Hours we want to count
     *   }
     * })
    **/
    count<T extends Working_HoursCountArgs>(
      args?: Subset<T, Working_HoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Working_HoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Working_Hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Working_HoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Working_HoursAggregateArgs>(args: Subset<T, Working_HoursAggregateArgs>): Prisma.PrismaPromise<GetWorking_HoursAggregateType<T>>

    /**
     * Group by Working_Hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Working_HoursGroupByArgs} args - Group by arguments.
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
      T extends Working_HoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Working_HoursGroupByArgs['orderBy'] }
        : { orderBy?: Working_HoursGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Working_HoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorking_HoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Working_Hours model
   */
  readonly fields: Working_HoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Working_Hours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Working_HoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dealership<T extends Dealership_InfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Dealership_InfoDefaultArgs<ExtArgs>>): Prisma__Dealership_InfoClient<$Result.GetResult<Prisma.$Dealership_InfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Working_Hours model
   */
  interface Working_HoursFieldRefs {
    readonly id: FieldRef<"Working_Hours", 'String'>
    readonly dealership_id: FieldRef<"Working_Hours", 'String'>
    readonly day_of_week: FieldRef<"Working_Hours", 'Day_Of_Week'>
    readonly open_time: FieldRef<"Working_Hours", 'String'>
    readonly close_time: FieldRef<"Working_Hours", 'String'>
    readonly is_open: FieldRef<"Working_Hours", 'Boolean'>
    readonly created_at: FieldRef<"Working_Hours", 'DateTime'>
    readonly updated_at: FieldRef<"Working_Hours", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Working_Hours findUnique
   */
  export type Working_HoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Working_Hours
     */
    select?: Working_HoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Working_Hours
     */
    omit?: Working_HoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Working_HoursInclude<ExtArgs> | null
    /**
     * Filter, which Working_Hours to fetch.
     */
    where: Working_HoursWhereUniqueInput
  }

  /**
   * Working_Hours findUniqueOrThrow
   */
  export type Working_HoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Working_Hours
     */
    select?: Working_HoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Working_Hours
     */
    omit?: Working_HoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Working_HoursInclude<ExtArgs> | null
    /**
     * Filter, which Working_Hours to fetch.
     */
    where: Working_HoursWhereUniqueInput
  }

  /**
   * Working_Hours findFirst
   */
  export type Working_HoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Working_Hours
     */
    select?: Working_HoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Working_Hours
     */
    omit?: Working_HoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Working_HoursInclude<ExtArgs> | null
    /**
     * Filter, which Working_Hours to fetch.
     */
    where?: Working_HoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Working_Hours to fetch.
     */
    orderBy?: Working_HoursOrderByWithRelationInput | Working_HoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Working_Hours.
     */
    cursor?: Working_HoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Working_Hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Working_Hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Working_Hours.
     */
    distinct?: Working_HoursScalarFieldEnum | Working_HoursScalarFieldEnum[]
  }

  /**
   * Working_Hours findFirstOrThrow
   */
  export type Working_HoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Working_Hours
     */
    select?: Working_HoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Working_Hours
     */
    omit?: Working_HoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Working_HoursInclude<ExtArgs> | null
    /**
     * Filter, which Working_Hours to fetch.
     */
    where?: Working_HoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Working_Hours to fetch.
     */
    orderBy?: Working_HoursOrderByWithRelationInput | Working_HoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Working_Hours.
     */
    cursor?: Working_HoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Working_Hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Working_Hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Working_Hours.
     */
    distinct?: Working_HoursScalarFieldEnum | Working_HoursScalarFieldEnum[]
  }

  /**
   * Working_Hours findMany
   */
  export type Working_HoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Working_Hours
     */
    select?: Working_HoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Working_Hours
     */
    omit?: Working_HoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Working_HoursInclude<ExtArgs> | null
    /**
     * Filter, which Working_Hours to fetch.
     */
    where?: Working_HoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Working_Hours to fetch.
     */
    orderBy?: Working_HoursOrderByWithRelationInput | Working_HoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Working_Hours.
     */
    cursor?: Working_HoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Working_Hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Working_Hours.
     */
    skip?: number
    distinct?: Working_HoursScalarFieldEnum | Working_HoursScalarFieldEnum[]
  }

  /**
   * Working_Hours create
   */
  export type Working_HoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Working_Hours
     */
    select?: Working_HoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Working_Hours
     */
    omit?: Working_HoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Working_HoursInclude<ExtArgs> | null
    /**
     * The data needed to create a Working_Hours.
     */
    data: XOR<Working_HoursCreateInput, Working_HoursUncheckedCreateInput>
  }

  /**
   * Working_Hours createMany
   */
  export type Working_HoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Working_Hours.
     */
    data: Working_HoursCreateManyInput | Working_HoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Working_Hours createManyAndReturn
   */
  export type Working_HoursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Working_Hours
     */
    select?: Working_HoursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Working_Hours
     */
    omit?: Working_HoursOmit<ExtArgs> | null
    /**
     * The data used to create many Working_Hours.
     */
    data: Working_HoursCreateManyInput | Working_HoursCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Working_HoursIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Working_Hours update
   */
  export type Working_HoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Working_Hours
     */
    select?: Working_HoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Working_Hours
     */
    omit?: Working_HoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Working_HoursInclude<ExtArgs> | null
    /**
     * The data needed to update a Working_Hours.
     */
    data: XOR<Working_HoursUpdateInput, Working_HoursUncheckedUpdateInput>
    /**
     * Choose, which Working_Hours to update.
     */
    where: Working_HoursWhereUniqueInput
  }

  /**
   * Working_Hours updateMany
   */
  export type Working_HoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Working_Hours.
     */
    data: XOR<Working_HoursUpdateManyMutationInput, Working_HoursUncheckedUpdateManyInput>
    /**
     * Filter which Working_Hours to update
     */
    where?: Working_HoursWhereInput
    /**
     * Limit how many Working_Hours to update.
     */
    limit?: number
  }

  /**
   * Working_Hours updateManyAndReturn
   */
  export type Working_HoursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Working_Hours
     */
    select?: Working_HoursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Working_Hours
     */
    omit?: Working_HoursOmit<ExtArgs> | null
    /**
     * The data used to update Working_Hours.
     */
    data: XOR<Working_HoursUpdateManyMutationInput, Working_HoursUncheckedUpdateManyInput>
    /**
     * Filter which Working_Hours to update
     */
    where?: Working_HoursWhereInput
    /**
     * Limit how many Working_Hours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Working_HoursIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Working_Hours upsert
   */
  export type Working_HoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Working_Hours
     */
    select?: Working_HoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Working_Hours
     */
    omit?: Working_HoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Working_HoursInclude<ExtArgs> | null
    /**
     * The filter to search for the Working_Hours to update in case it exists.
     */
    where: Working_HoursWhereUniqueInput
    /**
     * In case the Working_Hours found by the `where` argument doesn't exist, create a new Working_Hours with this data.
     */
    create: XOR<Working_HoursCreateInput, Working_HoursUncheckedCreateInput>
    /**
     * In case the Working_Hours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Working_HoursUpdateInput, Working_HoursUncheckedUpdateInput>
  }

  /**
   * Working_Hours delete
   */
  export type Working_HoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Working_Hours
     */
    select?: Working_HoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Working_Hours
     */
    omit?: Working_HoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Working_HoursInclude<ExtArgs> | null
    /**
     * Filter which Working_Hours to delete.
     */
    where: Working_HoursWhereUniqueInput
  }

  /**
   * Working_Hours deleteMany
   */
  export type Working_HoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Working_Hours to delete
     */
    where?: Working_HoursWhereInput
    /**
     * Limit how many Working_Hours to delete.
     */
    limit?: number
  }

  /**
   * Working_Hours without action
   */
  export type Working_HoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Working_Hours
     */
    select?: Working_HoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Working_Hours
     */
    omit?: Working_HoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Working_HoursInclude<ExtArgs> | null
  }


  /**
   * Model Saved_Cars
   */

  export type AggregateSaved_Cars = {
    _count: Saved_CarsCountAggregateOutputType | null
    _min: Saved_CarsMinAggregateOutputType | null
    _max: Saved_CarsMaxAggregateOutputType | null
  }

  export type Saved_CarsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    car_id: string | null
    saved_at: Date | null
  }

  export type Saved_CarsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    car_id: string | null
    saved_at: Date | null
  }

  export type Saved_CarsCountAggregateOutputType = {
    id: number
    user_id: number
    car_id: number
    saved_at: number
    _all: number
  }


  export type Saved_CarsMinAggregateInputType = {
    id?: true
    user_id?: true
    car_id?: true
    saved_at?: true
  }

  export type Saved_CarsMaxAggregateInputType = {
    id?: true
    user_id?: true
    car_id?: true
    saved_at?: true
  }

  export type Saved_CarsCountAggregateInputType = {
    id?: true
    user_id?: true
    car_id?: true
    saved_at?: true
    _all?: true
  }

  export type Saved_CarsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Saved_Cars to aggregate.
     */
    where?: Saved_CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saved_Cars to fetch.
     */
    orderBy?: Saved_CarsOrderByWithRelationInput | Saved_CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Saved_CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saved_Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saved_Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Saved_Cars
    **/
    _count?: true | Saved_CarsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Saved_CarsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Saved_CarsMaxAggregateInputType
  }

  export type GetSaved_CarsAggregateType<T extends Saved_CarsAggregateArgs> = {
        [P in keyof T & keyof AggregateSaved_Cars]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaved_Cars[P]>
      : GetScalarType<T[P], AggregateSaved_Cars[P]>
  }




  export type Saved_CarsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Saved_CarsWhereInput
    orderBy?: Saved_CarsOrderByWithAggregationInput | Saved_CarsOrderByWithAggregationInput[]
    by: Saved_CarsScalarFieldEnum[] | Saved_CarsScalarFieldEnum
    having?: Saved_CarsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Saved_CarsCountAggregateInputType | true
    _min?: Saved_CarsMinAggregateInputType
    _max?: Saved_CarsMaxAggregateInputType
  }

  export type Saved_CarsGroupByOutputType = {
    id: string
    user_id: string
    car_id: string
    saved_at: Date
    _count: Saved_CarsCountAggregateOutputType | null
    _min: Saved_CarsMinAggregateOutputType | null
    _max: Saved_CarsMaxAggregateOutputType | null
  }

  type GetSaved_CarsGroupByPayload<T extends Saved_CarsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Saved_CarsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Saved_CarsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Saved_CarsGroupByOutputType[P]>
            : GetScalarType<T[P], Saved_CarsGroupByOutputType[P]>
        }
      >
    >


  export type Saved_CarsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    car_id?: boolean
    saved_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saved_Cars"]>

  export type Saved_CarsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    car_id?: boolean
    saved_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saved_Cars"]>

  export type Saved_CarsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    car_id?: boolean
    saved_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saved_Cars"]>

  export type Saved_CarsSelectScalar = {
    id?: boolean
    user_id?: boolean
    car_id?: boolean
    saved_at?: boolean
  }

  export type Saved_CarsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "car_id" | "saved_at", ExtArgs["result"]["saved_Cars"]>
  export type Saved_CarsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
  }
  export type Saved_CarsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
  }
  export type Saved_CarsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
  }

  export type $Saved_CarsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Saved_Cars"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      car: Prisma.$CarsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      car_id: string
      saved_at: Date
    }, ExtArgs["result"]["saved_Cars"]>
    composites: {}
  }

  type Saved_CarsGetPayload<S extends boolean | null | undefined | Saved_CarsDefaultArgs> = $Result.GetResult<Prisma.$Saved_CarsPayload, S>

  type Saved_CarsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Saved_CarsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Saved_CarsCountAggregateInputType | true
    }

  export interface Saved_CarsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Saved_Cars'], meta: { name: 'Saved_Cars' } }
    /**
     * Find zero or one Saved_Cars that matches the filter.
     * @param {Saved_CarsFindUniqueArgs} args - Arguments to find a Saved_Cars
     * @example
     * // Get one Saved_Cars
     * const saved_Cars = await prisma.saved_Cars.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Saved_CarsFindUniqueArgs>(args: SelectSubset<T, Saved_CarsFindUniqueArgs<ExtArgs>>): Prisma__Saved_CarsClient<$Result.GetResult<Prisma.$Saved_CarsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Saved_Cars that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Saved_CarsFindUniqueOrThrowArgs} args - Arguments to find a Saved_Cars
     * @example
     * // Get one Saved_Cars
     * const saved_Cars = await prisma.saved_Cars.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Saved_CarsFindUniqueOrThrowArgs>(args: SelectSubset<T, Saved_CarsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Saved_CarsClient<$Result.GetResult<Prisma.$Saved_CarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saved_Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_CarsFindFirstArgs} args - Arguments to find a Saved_Cars
     * @example
     * // Get one Saved_Cars
     * const saved_Cars = await prisma.saved_Cars.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Saved_CarsFindFirstArgs>(args?: SelectSubset<T, Saved_CarsFindFirstArgs<ExtArgs>>): Prisma__Saved_CarsClient<$Result.GetResult<Prisma.$Saved_CarsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saved_Cars that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_CarsFindFirstOrThrowArgs} args - Arguments to find a Saved_Cars
     * @example
     * // Get one Saved_Cars
     * const saved_Cars = await prisma.saved_Cars.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Saved_CarsFindFirstOrThrowArgs>(args?: SelectSubset<T, Saved_CarsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Saved_CarsClient<$Result.GetResult<Prisma.$Saved_CarsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Saved_Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_CarsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Saved_Cars
     * const saved_Cars = await prisma.saved_Cars.findMany()
     * 
     * // Get first 10 Saved_Cars
     * const saved_Cars = await prisma.saved_Cars.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saved_CarsWithIdOnly = await prisma.saved_Cars.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Saved_CarsFindManyArgs>(args?: SelectSubset<T, Saved_CarsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Saved_CarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Saved_Cars.
     * @param {Saved_CarsCreateArgs} args - Arguments to create a Saved_Cars.
     * @example
     * // Create one Saved_Cars
     * const Saved_Cars = await prisma.saved_Cars.create({
     *   data: {
     *     // ... data to create a Saved_Cars
     *   }
     * })
     * 
     */
    create<T extends Saved_CarsCreateArgs>(args: SelectSubset<T, Saved_CarsCreateArgs<ExtArgs>>): Prisma__Saved_CarsClient<$Result.GetResult<Prisma.$Saved_CarsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Saved_Cars.
     * @param {Saved_CarsCreateManyArgs} args - Arguments to create many Saved_Cars.
     * @example
     * // Create many Saved_Cars
     * const saved_Cars = await prisma.saved_Cars.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Saved_CarsCreateManyArgs>(args?: SelectSubset<T, Saved_CarsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Saved_Cars and returns the data saved in the database.
     * @param {Saved_CarsCreateManyAndReturnArgs} args - Arguments to create many Saved_Cars.
     * @example
     * // Create many Saved_Cars
     * const saved_Cars = await prisma.saved_Cars.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Saved_Cars and only return the `id`
     * const saved_CarsWithIdOnly = await prisma.saved_Cars.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Saved_CarsCreateManyAndReturnArgs>(args?: SelectSubset<T, Saved_CarsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Saved_CarsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Saved_Cars.
     * @param {Saved_CarsDeleteArgs} args - Arguments to delete one Saved_Cars.
     * @example
     * // Delete one Saved_Cars
     * const Saved_Cars = await prisma.saved_Cars.delete({
     *   where: {
     *     // ... filter to delete one Saved_Cars
     *   }
     * })
     * 
     */
    delete<T extends Saved_CarsDeleteArgs>(args: SelectSubset<T, Saved_CarsDeleteArgs<ExtArgs>>): Prisma__Saved_CarsClient<$Result.GetResult<Prisma.$Saved_CarsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Saved_Cars.
     * @param {Saved_CarsUpdateArgs} args - Arguments to update one Saved_Cars.
     * @example
     * // Update one Saved_Cars
     * const saved_Cars = await prisma.saved_Cars.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Saved_CarsUpdateArgs>(args: SelectSubset<T, Saved_CarsUpdateArgs<ExtArgs>>): Prisma__Saved_CarsClient<$Result.GetResult<Prisma.$Saved_CarsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Saved_Cars.
     * @param {Saved_CarsDeleteManyArgs} args - Arguments to filter Saved_Cars to delete.
     * @example
     * // Delete a few Saved_Cars
     * const { count } = await prisma.saved_Cars.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Saved_CarsDeleteManyArgs>(args?: SelectSubset<T, Saved_CarsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saved_Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_CarsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Saved_Cars
     * const saved_Cars = await prisma.saved_Cars.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Saved_CarsUpdateManyArgs>(args: SelectSubset<T, Saved_CarsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saved_Cars and returns the data updated in the database.
     * @param {Saved_CarsUpdateManyAndReturnArgs} args - Arguments to update many Saved_Cars.
     * @example
     * // Update many Saved_Cars
     * const saved_Cars = await prisma.saved_Cars.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Saved_Cars and only return the `id`
     * const saved_CarsWithIdOnly = await prisma.saved_Cars.updateManyAndReturn({
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
    updateManyAndReturn<T extends Saved_CarsUpdateManyAndReturnArgs>(args: SelectSubset<T, Saved_CarsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Saved_CarsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Saved_Cars.
     * @param {Saved_CarsUpsertArgs} args - Arguments to update or create a Saved_Cars.
     * @example
     * // Update or create a Saved_Cars
     * const saved_Cars = await prisma.saved_Cars.upsert({
     *   create: {
     *     // ... data to create a Saved_Cars
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Saved_Cars we want to update
     *   }
     * })
     */
    upsert<T extends Saved_CarsUpsertArgs>(args: SelectSubset<T, Saved_CarsUpsertArgs<ExtArgs>>): Prisma__Saved_CarsClient<$Result.GetResult<Prisma.$Saved_CarsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Saved_Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_CarsCountArgs} args - Arguments to filter Saved_Cars to count.
     * @example
     * // Count the number of Saved_Cars
     * const count = await prisma.saved_Cars.count({
     *   where: {
     *     // ... the filter for the Saved_Cars we want to count
     *   }
     * })
    **/
    count<T extends Saved_CarsCountArgs>(
      args?: Subset<T, Saved_CarsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Saved_CarsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Saved_Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_CarsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Saved_CarsAggregateArgs>(args: Subset<T, Saved_CarsAggregateArgs>): Prisma.PrismaPromise<GetSaved_CarsAggregateType<T>>

    /**
     * Group by Saved_Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_CarsGroupByArgs} args - Group by arguments.
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
      T extends Saved_CarsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Saved_CarsGroupByArgs['orderBy'] }
        : { orderBy?: Saved_CarsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Saved_CarsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaved_CarsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Saved_Cars model
   */
  readonly fields: Saved_CarsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Saved_Cars.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Saved_CarsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    car<T extends CarsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarsDefaultArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Saved_Cars model
   */
  interface Saved_CarsFieldRefs {
    readonly id: FieldRef<"Saved_Cars", 'String'>
    readonly user_id: FieldRef<"Saved_Cars", 'String'>
    readonly car_id: FieldRef<"Saved_Cars", 'String'>
    readonly saved_at: FieldRef<"Saved_Cars", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Saved_Cars findUnique
   */
  export type Saved_CarsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Cars
     */
    select?: Saved_CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saved_Cars
     */
    omit?: Saved_CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Saved_CarsInclude<ExtArgs> | null
    /**
     * Filter, which Saved_Cars to fetch.
     */
    where: Saved_CarsWhereUniqueInput
  }

  /**
   * Saved_Cars findUniqueOrThrow
   */
  export type Saved_CarsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Cars
     */
    select?: Saved_CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saved_Cars
     */
    omit?: Saved_CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Saved_CarsInclude<ExtArgs> | null
    /**
     * Filter, which Saved_Cars to fetch.
     */
    where: Saved_CarsWhereUniqueInput
  }

  /**
   * Saved_Cars findFirst
   */
  export type Saved_CarsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Cars
     */
    select?: Saved_CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saved_Cars
     */
    omit?: Saved_CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Saved_CarsInclude<ExtArgs> | null
    /**
     * Filter, which Saved_Cars to fetch.
     */
    where?: Saved_CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saved_Cars to fetch.
     */
    orderBy?: Saved_CarsOrderByWithRelationInput | Saved_CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Saved_Cars.
     */
    cursor?: Saved_CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saved_Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saved_Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Saved_Cars.
     */
    distinct?: Saved_CarsScalarFieldEnum | Saved_CarsScalarFieldEnum[]
  }

  /**
   * Saved_Cars findFirstOrThrow
   */
  export type Saved_CarsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Cars
     */
    select?: Saved_CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saved_Cars
     */
    omit?: Saved_CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Saved_CarsInclude<ExtArgs> | null
    /**
     * Filter, which Saved_Cars to fetch.
     */
    where?: Saved_CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saved_Cars to fetch.
     */
    orderBy?: Saved_CarsOrderByWithRelationInput | Saved_CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Saved_Cars.
     */
    cursor?: Saved_CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saved_Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saved_Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Saved_Cars.
     */
    distinct?: Saved_CarsScalarFieldEnum | Saved_CarsScalarFieldEnum[]
  }

  /**
   * Saved_Cars findMany
   */
  export type Saved_CarsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Cars
     */
    select?: Saved_CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saved_Cars
     */
    omit?: Saved_CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Saved_CarsInclude<ExtArgs> | null
    /**
     * Filter, which Saved_Cars to fetch.
     */
    where?: Saved_CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saved_Cars to fetch.
     */
    orderBy?: Saved_CarsOrderByWithRelationInput | Saved_CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Saved_Cars.
     */
    cursor?: Saved_CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saved_Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saved_Cars.
     */
    skip?: number
    distinct?: Saved_CarsScalarFieldEnum | Saved_CarsScalarFieldEnum[]
  }

  /**
   * Saved_Cars create
   */
  export type Saved_CarsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Cars
     */
    select?: Saved_CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saved_Cars
     */
    omit?: Saved_CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Saved_CarsInclude<ExtArgs> | null
    /**
     * The data needed to create a Saved_Cars.
     */
    data: XOR<Saved_CarsCreateInput, Saved_CarsUncheckedCreateInput>
  }

  /**
   * Saved_Cars createMany
   */
  export type Saved_CarsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Saved_Cars.
     */
    data: Saved_CarsCreateManyInput | Saved_CarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Saved_Cars createManyAndReturn
   */
  export type Saved_CarsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Cars
     */
    select?: Saved_CarsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Saved_Cars
     */
    omit?: Saved_CarsOmit<ExtArgs> | null
    /**
     * The data used to create many Saved_Cars.
     */
    data: Saved_CarsCreateManyInput | Saved_CarsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Saved_CarsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Saved_Cars update
   */
  export type Saved_CarsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Cars
     */
    select?: Saved_CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saved_Cars
     */
    omit?: Saved_CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Saved_CarsInclude<ExtArgs> | null
    /**
     * The data needed to update a Saved_Cars.
     */
    data: XOR<Saved_CarsUpdateInput, Saved_CarsUncheckedUpdateInput>
    /**
     * Choose, which Saved_Cars to update.
     */
    where: Saved_CarsWhereUniqueInput
  }

  /**
   * Saved_Cars updateMany
   */
  export type Saved_CarsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Saved_Cars.
     */
    data: XOR<Saved_CarsUpdateManyMutationInput, Saved_CarsUncheckedUpdateManyInput>
    /**
     * Filter which Saved_Cars to update
     */
    where?: Saved_CarsWhereInput
    /**
     * Limit how many Saved_Cars to update.
     */
    limit?: number
  }

  /**
   * Saved_Cars updateManyAndReturn
   */
  export type Saved_CarsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Cars
     */
    select?: Saved_CarsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Saved_Cars
     */
    omit?: Saved_CarsOmit<ExtArgs> | null
    /**
     * The data used to update Saved_Cars.
     */
    data: XOR<Saved_CarsUpdateManyMutationInput, Saved_CarsUncheckedUpdateManyInput>
    /**
     * Filter which Saved_Cars to update
     */
    where?: Saved_CarsWhereInput
    /**
     * Limit how many Saved_Cars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Saved_CarsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Saved_Cars upsert
   */
  export type Saved_CarsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Cars
     */
    select?: Saved_CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saved_Cars
     */
    omit?: Saved_CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Saved_CarsInclude<ExtArgs> | null
    /**
     * The filter to search for the Saved_Cars to update in case it exists.
     */
    where: Saved_CarsWhereUniqueInput
    /**
     * In case the Saved_Cars found by the `where` argument doesn't exist, create a new Saved_Cars with this data.
     */
    create: XOR<Saved_CarsCreateInput, Saved_CarsUncheckedCreateInput>
    /**
     * In case the Saved_Cars was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Saved_CarsUpdateInput, Saved_CarsUncheckedUpdateInput>
  }

  /**
   * Saved_Cars delete
   */
  export type Saved_CarsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Cars
     */
    select?: Saved_CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saved_Cars
     */
    omit?: Saved_CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Saved_CarsInclude<ExtArgs> | null
    /**
     * Filter which Saved_Cars to delete.
     */
    where: Saved_CarsWhereUniqueInput
  }

  /**
   * Saved_Cars deleteMany
   */
  export type Saved_CarsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Saved_Cars to delete
     */
    where?: Saved_CarsWhereInput
    /**
     * Limit how many Saved_Cars to delete.
     */
    limit?: number
  }

  /**
   * Saved_Cars without action
   */
  export type Saved_CarsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Cars
     */
    select?: Saved_CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saved_Cars
     */
    omit?: Saved_CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Saved_CarsInclude<ExtArgs> | null
  }


  /**
   * Model Test_Drive_Booking
   */

  export type AggregateTest_Drive_Booking = {
    _count: Test_Drive_BookingCountAggregateOutputType | null
    _min: Test_Drive_BookingMinAggregateOutputType | null
    _max: Test_Drive_BookingMaxAggregateOutputType | null
  }

  export type Test_Drive_BookingMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    car_id: string | null
    booking_date: Date | null
    start_time: string | null
    end_time: string | null
    status: $Enums.Booking_Status | null
    notes: string | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type Test_Drive_BookingMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    car_id: string | null
    booking_date: Date | null
    start_time: string | null
    end_time: string | null
    status: $Enums.Booking_Status | null
    notes: string | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type Test_Drive_BookingCountAggregateOutputType = {
    id: number
    user_id: number
    car_id: number
    booking_date: number
    start_time: number
    end_time: number
    status: number
    notes: number
    created_at: number
    modified_at: number
    _all: number
  }


  export type Test_Drive_BookingMinAggregateInputType = {
    id?: true
    user_id?: true
    car_id?: true
    booking_date?: true
    start_time?: true
    end_time?: true
    status?: true
    notes?: true
    created_at?: true
    modified_at?: true
  }

  export type Test_Drive_BookingMaxAggregateInputType = {
    id?: true
    user_id?: true
    car_id?: true
    booking_date?: true
    start_time?: true
    end_time?: true
    status?: true
    notes?: true
    created_at?: true
    modified_at?: true
  }

  export type Test_Drive_BookingCountAggregateInputType = {
    id?: true
    user_id?: true
    car_id?: true
    booking_date?: true
    start_time?: true
    end_time?: true
    status?: true
    notes?: true
    created_at?: true
    modified_at?: true
    _all?: true
  }

  export type Test_Drive_BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test_Drive_Booking to aggregate.
     */
    where?: Test_Drive_BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Test_Drive_Bookings to fetch.
     */
    orderBy?: Test_Drive_BookingOrderByWithRelationInput | Test_Drive_BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Test_Drive_BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Test_Drive_Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Test_Drive_Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Test_Drive_Bookings
    **/
    _count?: true | Test_Drive_BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Test_Drive_BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Test_Drive_BookingMaxAggregateInputType
  }

  export type GetTest_Drive_BookingAggregateType<T extends Test_Drive_BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateTest_Drive_Booking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest_Drive_Booking[P]>
      : GetScalarType<T[P], AggregateTest_Drive_Booking[P]>
  }




  export type Test_Drive_BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Test_Drive_BookingWhereInput
    orderBy?: Test_Drive_BookingOrderByWithAggregationInput | Test_Drive_BookingOrderByWithAggregationInput[]
    by: Test_Drive_BookingScalarFieldEnum[] | Test_Drive_BookingScalarFieldEnum
    having?: Test_Drive_BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Test_Drive_BookingCountAggregateInputType | true
    _min?: Test_Drive_BookingMinAggregateInputType
    _max?: Test_Drive_BookingMaxAggregateInputType
  }

  export type Test_Drive_BookingGroupByOutputType = {
    id: string
    user_id: string
    car_id: string
    booking_date: Date
    start_time: string
    end_time: string
    status: $Enums.Booking_Status
    notes: string | null
    created_at: Date
    modified_at: Date
    _count: Test_Drive_BookingCountAggregateOutputType | null
    _min: Test_Drive_BookingMinAggregateOutputType | null
    _max: Test_Drive_BookingMaxAggregateOutputType | null
  }

  type GetTest_Drive_BookingGroupByPayload<T extends Test_Drive_BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Test_Drive_BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Test_Drive_BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Test_Drive_BookingGroupByOutputType[P]>
            : GetScalarType<T[P], Test_Drive_BookingGroupByOutputType[P]>
        }
      >
    >


  export type Test_Drive_BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    car_id?: boolean
    booking_date?: boolean
    start_time?: boolean
    end_time?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
    modified_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test_Drive_Booking"]>

  export type Test_Drive_BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    car_id?: boolean
    booking_date?: boolean
    start_time?: boolean
    end_time?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
    modified_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test_Drive_Booking"]>

  export type Test_Drive_BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    car_id?: boolean
    booking_date?: boolean
    start_time?: boolean
    end_time?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
    modified_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test_Drive_Booking"]>

  export type Test_Drive_BookingSelectScalar = {
    id?: boolean
    user_id?: boolean
    car_id?: boolean
    booking_date?: boolean
    start_time?: boolean
    end_time?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
    modified_at?: boolean
  }

  export type Test_Drive_BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "car_id" | "booking_date" | "start_time" | "end_time" | "status" | "notes" | "created_at" | "modified_at", ExtArgs["result"]["test_Drive_Booking"]>
  export type Test_Drive_BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
  }
  export type Test_Drive_BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
  }
  export type Test_Drive_BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
  }

  export type $Test_Drive_BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Test_Drive_Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      car: Prisma.$CarsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      car_id: string
      booking_date: Date
      start_time: string
      end_time: string
      status: $Enums.Booking_Status
      notes: string | null
      created_at: Date
      modified_at: Date
    }, ExtArgs["result"]["test_Drive_Booking"]>
    composites: {}
  }

  type Test_Drive_BookingGetPayload<S extends boolean | null | undefined | Test_Drive_BookingDefaultArgs> = $Result.GetResult<Prisma.$Test_Drive_BookingPayload, S>

  type Test_Drive_BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Test_Drive_BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Test_Drive_BookingCountAggregateInputType | true
    }

  export interface Test_Drive_BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test_Drive_Booking'], meta: { name: 'Test_Drive_Booking' } }
    /**
     * Find zero or one Test_Drive_Booking that matches the filter.
     * @param {Test_Drive_BookingFindUniqueArgs} args - Arguments to find a Test_Drive_Booking
     * @example
     * // Get one Test_Drive_Booking
     * const test_Drive_Booking = await prisma.test_Drive_Booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Test_Drive_BookingFindUniqueArgs>(args: SelectSubset<T, Test_Drive_BookingFindUniqueArgs<ExtArgs>>): Prisma__Test_Drive_BookingClient<$Result.GetResult<Prisma.$Test_Drive_BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test_Drive_Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Test_Drive_BookingFindUniqueOrThrowArgs} args - Arguments to find a Test_Drive_Booking
     * @example
     * // Get one Test_Drive_Booking
     * const test_Drive_Booking = await prisma.test_Drive_Booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Test_Drive_BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, Test_Drive_BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Test_Drive_BookingClient<$Result.GetResult<Prisma.$Test_Drive_BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test_Drive_Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_Drive_BookingFindFirstArgs} args - Arguments to find a Test_Drive_Booking
     * @example
     * // Get one Test_Drive_Booking
     * const test_Drive_Booking = await prisma.test_Drive_Booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Test_Drive_BookingFindFirstArgs>(args?: SelectSubset<T, Test_Drive_BookingFindFirstArgs<ExtArgs>>): Prisma__Test_Drive_BookingClient<$Result.GetResult<Prisma.$Test_Drive_BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test_Drive_Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_Drive_BookingFindFirstOrThrowArgs} args - Arguments to find a Test_Drive_Booking
     * @example
     * // Get one Test_Drive_Booking
     * const test_Drive_Booking = await prisma.test_Drive_Booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Test_Drive_BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, Test_Drive_BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__Test_Drive_BookingClient<$Result.GetResult<Prisma.$Test_Drive_BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Test_Drive_Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_Drive_BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Test_Drive_Bookings
     * const test_Drive_Bookings = await prisma.test_Drive_Booking.findMany()
     * 
     * // Get first 10 Test_Drive_Bookings
     * const test_Drive_Bookings = await prisma.test_Drive_Booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const test_Drive_BookingWithIdOnly = await prisma.test_Drive_Booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Test_Drive_BookingFindManyArgs>(args?: SelectSubset<T, Test_Drive_BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Test_Drive_BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test_Drive_Booking.
     * @param {Test_Drive_BookingCreateArgs} args - Arguments to create a Test_Drive_Booking.
     * @example
     * // Create one Test_Drive_Booking
     * const Test_Drive_Booking = await prisma.test_Drive_Booking.create({
     *   data: {
     *     // ... data to create a Test_Drive_Booking
     *   }
     * })
     * 
     */
    create<T extends Test_Drive_BookingCreateArgs>(args: SelectSubset<T, Test_Drive_BookingCreateArgs<ExtArgs>>): Prisma__Test_Drive_BookingClient<$Result.GetResult<Prisma.$Test_Drive_BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Test_Drive_Bookings.
     * @param {Test_Drive_BookingCreateManyArgs} args - Arguments to create many Test_Drive_Bookings.
     * @example
     * // Create many Test_Drive_Bookings
     * const test_Drive_Booking = await prisma.test_Drive_Booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Test_Drive_BookingCreateManyArgs>(args?: SelectSubset<T, Test_Drive_BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Test_Drive_Bookings and returns the data saved in the database.
     * @param {Test_Drive_BookingCreateManyAndReturnArgs} args - Arguments to create many Test_Drive_Bookings.
     * @example
     * // Create many Test_Drive_Bookings
     * const test_Drive_Booking = await prisma.test_Drive_Booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Test_Drive_Bookings and only return the `id`
     * const test_Drive_BookingWithIdOnly = await prisma.test_Drive_Booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Test_Drive_BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, Test_Drive_BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Test_Drive_BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Test_Drive_Booking.
     * @param {Test_Drive_BookingDeleteArgs} args - Arguments to delete one Test_Drive_Booking.
     * @example
     * // Delete one Test_Drive_Booking
     * const Test_Drive_Booking = await prisma.test_Drive_Booking.delete({
     *   where: {
     *     // ... filter to delete one Test_Drive_Booking
     *   }
     * })
     * 
     */
    delete<T extends Test_Drive_BookingDeleteArgs>(args: SelectSubset<T, Test_Drive_BookingDeleteArgs<ExtArgs>>): Prisma__Test_Drive_BookingClient<$Result.GetResult<Prisma.$Test_Drive_BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test_Drive_Booking.
     * @param {Test_Drive_BookingUpdateArgs} args - Arguments to update one Test_Drive_Booking.
     * @example
     * // Update one Test_Drive_Booking
     * const test_Drive_Booking = await prisma.test_Drive_Booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Test_Drive_BookingUpdateArgs>(args: SelectSubset<T, Test_Drive_BookingUpdateArgs<ExtArgs>>): Prisma__Test_Drive_BookingClient<$Result.GetResult<Prisma.$Test_Drive_BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Test_Drive_Bookings.
     * @param {Test_Drive_BookingDeleteManyArgs} args - Arguments to filter Test_Drive_Bookings to delete.
     * @example
     * // Delete a few Test_Drive_Bookings
     * const { count } = await prisma.test_Drive_Booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Test_Drive_BookingDeleteManyArgs>(args?: SelectSubset<T, Test_Drive_BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Test_Drive_Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_Drive_BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Test_Drive_Bookings
     * const test_Drive_Booking = await prisma.test_Drive_Booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Test_Drive_BookingUpdateManyArgs>(args: SelectSubset<T, Test_Drive_BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Test_Drive_Bookings and returns the data updated in the database.
     * @param {Test_Drive_BookingUpdateManyAndReturnArgs} args - Arguments to update many Test_Drive_Bookings.
     * @example
     * // Update many Test_Drive_Bookings
     * const test_Drive_Booking = await prisma.test_Drive_Booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Test_Drive_Bookings and only return the `id`
     * const test_Drive_BookingWithIdOnly = await prisma.test_Drive_Booking.updateManyAndReturn({
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
    updateManyAndReturn<T extends Test_Drive_BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, Test_Drive_BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Test_Drive_BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Test_Drive_Booking.
     * @param {Test_Drive_BookingUpsertArgs} args - Arguments to update or create a Test_Drive_Booking.
     * @example
     * // Update or create a Test_Drive_Booking
     * const test_Drive_Booking = await prisma.test_Drive_Booking.upsert({
     *   create: {
     *     // ... data to create a Test_Drive_Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test_Drive_Booking we want to update
     *   }
     * })
     */
    upsert<T extends Test_Drive_BookingUpsertArgs>(args: SelectSubset<T, Test_Drive_BookingUpsertArgs<ExtArgs>>): Prisma__Test_Drive_BookingClient<$Result.GetResult<Prisma.$Test_Drive_BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Test_Drive_Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_Drive_BookingCountArgs} args - Arguments to filter Test_Drive_Bookings to count.
     * @example
     * // Count the number of Test_Drive_Bookings
     * const count = await prisma.test_Drive_Booking.count({
     *   where: {
     *     // ... the filter for the Test_Drive_Bookings we want to count
     *   }
     * })
    **/
    count<T extends Test_Drive_BookingCountArgs>(
      args?: Subset<T, Test_Drive_BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Test_Drive_BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test_Drive_Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_Drive_BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Test_Drive_BookingAggregateArgs>(args: Subset<T, Test_Drive_BookingAggregateArgs>): Prisma.PrismaPromise<GetTest_Drive_BookingAggregateType<T>>

    /**
     * Group by Test_Drive_Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_Drive_BookingGroupByArgs} args - Group by arguments.
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
      T extends Test_Drive_BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Test_Drive_BookingGroupByArgs['orderBy'] }
        : { orderBy?: Test_Drive_BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Test_Drive_BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTest_Drive_BookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test_Drive_Booking model
   */
  readonly fields: Test_Drive_BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test_Drive_Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Test_Drive_BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    car<T extends CarsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarsDefaultArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Test_Drive_Booking model
   */
  interface Test_Drive_BookingFieldRefs {
    readonly id: FieldRef<"Test_Drive_Booking", 'String'>
    readonly user_id: FieldRef<"Test_Drive_Booking", 'String'>
    readonly car_id: FieldRef<"Test_Drive_Booking", 'String'>
    readonly booking_date: FieldRef<"Test_Drive_Booking", 'DateTime'>
    readonly start_time: FieldRef<"Test_Drive_Booking", 'String'>
    readonly end_time: FieldRef<"Test_Drive_Booking", 'String'>
    readonly status: FieldRef<"Test_Drive_Booking", 'Booking_Status'>
    readonly notes: FieldRef<"Test_Drive_Booking", 'String'>
    readonly created_at: FieldRef<"Test_Drive_Booking", 'DateTime'>
    readonly modified_at: FieldRef<"Test_Drive_Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Test_Drive_Booking findUnique
   */
  export type Test_Drive_BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Drive_Booking
     */
    select?: Test_Drive_BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Drive_Booking
     */
    omit?: Test_Drive_BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_Drive_BookingInclude<ExtArgs> | null
    /**
     * Filter, which Test_Drive_Booking to fetch.
     */
    where: Test_Drive_BookingWhereUniqueInput
  }

  /**
   * Test_Drive_Booking findUniqueOrThrow
   */
  export type Test_Drive_BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Drive_Booking
     */
    select?: Test_Drive_BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Drive_Booking
     */
    omit?: Test_Drive_BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_Drive_BookingInclude<ExtArgs> | null
    /**
     * Filter, which Test_Drive_Booking to fetch.
     */
    where: Test_Drive_BookingWhereUniqueInput
  }

  /**
   * Test_Drive_Booking findFirst
   */
  export type Test_Drive_BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Drive_Booking
     */
    select?: Test_Drive_BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Drive_Booking
     */
    omit?: Test_Drive_BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_Drive_BookingInclude<ExtArgs> | null
    /**
     * Filter, which Test_Drive_Booking to fetch.
     */
    where?: Test_Drive_BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Test_Drive_Bookings to fetch.
     */
    orderBy?: Test_Drive_BookingOrderByWithRelationInput | Test_Drive_BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Test_Drive_Bookings.
     */
    cursor?: Test_Drive_BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Test_Drive_Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Test_Drive_Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Test_Drive_Bookings.
     */
    distinct?: Test_Drive_BookingScalarFieldEnum | Test_Drive_BookingScalarFieldEnum[]
  }

  /**
   * Test_Drive_Booking findFirstOrThrow
   */
  export type Test_Drive_BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Drive_Booking
     */
    select?: Test_Drive_BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Drive_Booking
     */
    omit?: Test_Drive_BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_Drive_BookingInclude<ExtArgs> | null
    /**
     * Filter, which Test_Drive_Booking to fetch.
     */
    where?: Test_Drive_BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Test_Drive_Bookings to fetch.
     */
    orderBy?: Test_Drive_BookingOrderByWithRelationInput | Test_Drive_BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Test_Drive_Bookings.
     */
    cursor?: Test_Drive_BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Test_Drive_Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Test_Drive_Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Test_Drive_Bookings.
     */
    distinct?: Test_Drive_BookingScalarFieldEnum | Test_Drive_BookingScalarFieldEnum[]
  }

  /**
   * Test_Drive_Booking findMany
   */
  export type Test_Drive_BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Drive_Booking
     */
    select?: Test_Drive_BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Drive_Booking
     */
    omit?: Test_Drive_BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_Drive_BookingInclude<ExtArgs> | null
    /**
     * Filter, which Test_Drive_Bookings to fetch.
     */
    where?: Test_Drive_BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Test_Drive_Bookings to fetch.
     */
    orderBy?: Test_Drive_BookingOrderByWithRelationInput | Test_Drive_BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Test_Drive_Bookings.
     */
    cursor?: Test_Drive_BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Test_Drive_Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Test_Drive_Bookings.
     */
    skip?: number
    distinct?: Test_Drive_BookingScalarFieldEnum | Test_Drive_BookingScalarFieldEnum[]
  }

  /**
   * Test_Drive_Booking create
   */
  export type Test_Drive_BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Drive_Booking
     */
    select?: Test_Drive_BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Drive_Booking
     */
    omit?: Test_Drive_BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_Drive_BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Test_Drive_Booking.
     */
    data: XOR<Test_Drive_BookingCreateInput, Test_Drive_BookingUncheckedCreateInput>
  }

  /**
   * Test_Drive_Booking createMany
   */
  export type Test_Drive_BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Test_Drive_Bookings.
     */
    data: Test_Drive_BookingCreateManyInput | Test_Drive_BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test_Drive_Booking createManyAndReturn
   */
  export type Test_Drive_BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Drive_Booking
     */
    select?: Test_Drive_BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Drive_Booking
     */
    omit?: Test_Drive_BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Test_Drive_Bookings.
     */
    data: Test_Drive_BookingCreateManyInput | Test_Drive_BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_Drive_BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Test_Drive_Booking update
   */
  export type Test_Drive_BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Drive_Booking
     */
    select?: Test_Drive_BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Drive_Booking
     */
    omit?: Test_Drive_BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_Drive_BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Test_Drive_Booking.
     */
    data: XOR<Test_Drive_BookingUpdateInput, Test_Drive_BookingUncheckedUpdateInput>
    /**
     * Choose, which Test_Drive_Booking to update.
     */
    where: Test_Drive_BookingWhereUniqueInput
  }

  /**
   * Test_Drive_Booking updateMany
   */
  export type Test_Drive_BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Test_Drive_Bookings.
     */
    data: XOR<Test_Drive_BookingUpdateManyMutationInput, Test_Drive_BookingUncheckedUpdateManyInput>
    /**
     * Filter which Test_Drive_Bookings to update
     */
    where?: Test_Drive_BookingWhereInput
    /**
     * Limit how many Test_Drive_Bookings to update.
     */
    limit?: number
  }

  /**
   * Test_Drive_Booking updateManyAndReturn
   */
  export type Test_Drive_BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Drive_Booking
     */
    select?: Test_Drive_BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Drive_Booking
     */
    omit?: Test_Drive_BookingOmit<ExtArgs> | null
    /**
     * The data used to update Test_Drive_Bookings.
     */
    data: XOR<Test_Drive_BookingUpdateManyMutationInput, Test_Drive_BookingUncheckedUpdateManyInput>
    /**
     * Filter which Test_Drive_Bookings to update
     */
    where?: Test_Drive_BookingWhereInput
    /**
     * Limit how many Test_Drive_Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_Drive_BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Test_Drive_Booking upsert
   */
  export type Test_Drive_BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Drive_Booking
     */
    select?: Test_Drive_BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Drive_Booking
     */
    omit?: Test_Drive_BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_Drive_BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Test_Drive_Booking to update in case it exists.
     */
    where: Test_Drive_BookingWhereUniqueInput
    /**
     * In case the Test_Drive_Booking found by the `where` argument doesn't exist, create a new Test_Drive_Booking with this data.
     */
    create: XOR<Test_Drive_BookingCreateInput, Test_Drive_BookingUncheckedCreateInput>
    /**
     * In case the Test_Drive_Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Test_Drive_BookingUpdateInput, Test_Drive_BookingUncheckedUpdateInput>
  }

  /**
   * Test_Drive_Booking delete
   */
  export type Test_Drive_BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Drive_Booking
     */
    select?: Test_Drive_BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Drive_Booking
     */
    omit?: Test_Drive_BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_Drive_BookingInclude<ExtArgs> | null
    /**
     * Filter which Test_Drive_Booking to delete.
     */
    where: Test_Drive_BookingWhereUniqueInput
  }

  /**
   * Test_Drive_Booking deleteMany
   */
  export type Test_Drive_BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test_Drive_Bookings to delete
     */
    where?: Test_Drive_BookingWhereInput
    /**
     * Limit how many Test_Drive_Bookings to delete.
     */
    limit?: number
  }

  /**
   * Test_Drive_Booking without action
   */
  export type Test_Drive_BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Drive_Booking
     */
    select?: Test_Drive_BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Drive_Booking
     */
    omit?: Test_Drive_BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_Drive_BookingInclude<ExtArgs> | null
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
    clerk_user_id: 'clerk_user_id',
    email: 'email',
    name: 'name',
    phone_number: 'phone_number',
    profile_picture: 'profile_picture',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CarsScalarFieldEnum: {
    id: 'id',
    make: 'make',
    model: 'model',
    year: 'year',
    price: 'price',
    mileage: 'mileage',
    color: 'color',
    fuel_type: 'fuel_type',
    transmission: 'transmission',
    body_type: 'body_type',
    description: 'description',
    seating_capacity: 'seating_capacity',
    status: 'status',
    featured: 'featured',
    images: 'images',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CarsScalarFieldEnum = (typeof CarsScalarFieldEnum)[keyof typeof CarsScalarFieldEnum]


  export const Dealership_InfoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone_number: 'phone_number',
    email: 'email',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Dealership_InfoScalarFieldEnum = (typeof Dealership_InfoScalarFieldEnum)[keyof typeof Dealership_InfoScalarFieldEnum]


  export const Working_HoursScalarFieldEnum: {
    id: 'id',
    dealership_id: 'dealership_id',
    day_of_week: 'day_of_week',
    open_time: 'open_time',
    close_time: 'close_time',
    is_open: 'is_open',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Working_HoursScalarFieldEnum = (typeof Working_HoursScalarFieldEnum)[keyof typeof Working_HoursScalarFieldEnum]


  export const Saved_CarsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    car_id: 'car_id',
    saved_at: 'saved_at'
  };

  export type Saved_CarsScalarFieldEnum = (typeof Saved_CarsScalarFieldEnum)[keyof typeof Saved_CarsScalarFieldEnum]


  export const Test_Drive_BookingScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    car_id: 'car_id',
    booking_date: 'booking_date',
    start_time: 'start_time',
    end_time: 'end_time',
    status: 'status',
    notes: 'notes',
    created_at: 'created_at',
    modified_at: 'modified_at'
  };

  export type Test_Drive_BookingScalarFieldEnum = (typeof Test_Drive_BookingScalarFieldEnum)[keyof typeof Test_Drive_BookingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'User_Role'
   */
  export type EnumUser_RoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'User_Role'>
    


  /**
   * Reference to a field of type 'User_Role[]'
   */
  export type ListEnumUser_RoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'User_Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Car_Status'
   */
  export type EnumCar_StatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Car_Status'>
    


  /**
   * Reference to a field of type 'Car_Status[]'
   */
  export type ListEnumCar_StatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Car_Status[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Day_Of_Week'
   */
  export type EnumDay_Of_WeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Day_Of_Week'>
    


  /**
   * Reference to a field of type 'Day_Of_Week[]'
   */
  export type ListEnumDay_Of_WeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Day_Of_Week[]'>
    


  /**
   * Reference to a field of type 'Booking_Status'
   */
  export type EnumBooking_StatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Booking_Status'>
    


  /**
   * Reference to a field of type 'Booking_Status[]'
   */
  export type ListEnumBooking_StatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Booking_Status[]'>
    


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
    id?: StringFilter<"User"> | string
    clerk_user_id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    phone_number?: StringNullableFilter<"User"> | string | null
    profile_picture?: StringNullableFilter<"User"> | string | null
    role?: EnumUser_RoleFilter<"User"> | $Enums.User_Role
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    saved_cars?: Saved_CarsListRelationFilter
    test_drive_bookings?: Test_Drive_BookingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerk_user_id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    profile_picture?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    saved_cars?: Saved_CarsOrderByRelationAggregateInput
    test_drive_bookings?: Test_Drive_BookingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerk_user_id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    phone_number?: StringNullableFilter<"User"> | string | null
    profile_picture?: StringNullableFilter<"User"> | string | null
    role?: EnumUser_RoleFilter<"User"> | $Enums.User_Role
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    saved_cars?: Saved_CarsListRelationFilter
    test_drive_bookings?: Test_Drive_BookingListRelationFilter
  }, "id" | "clerk_user_id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerk_user_id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    profile_picture?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerk_user_id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"User"> | string | null
    profile_picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUser_RoleWithAggregatesFilter<"User"> | $Enums.User_Role
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CarsWhereInput = {
    AND?: CarsWhereInput | CarsWhereInput[]
    OR?: CarsWhereInput[]
    NOT?: CarsWhereInput | CarsWhereInput[]
    id?: StringFilter<"Cars"> | string
    make?: StringFilter<"Cars"> | string
    model?: StringFilter<"Cars"> | string
    year?: IntFilter<"Cars"> | number
    price?: DecimalFilter<"Cars"> | Decimal | DecimalJsLike | number | string
    mileage?: IntFilter<"Cars"> | number
    color?: StringFilter<"Cars"> | string
    fuel_type?: StringFilter<"Cars"> | string
    transmission?: StringFilter<"Cars"> | string
    body_type?: StringFilter<"Cars"> | string
    description?: StringFilter<"Cars"> | string
    seating_capacity?: IntNullableFilter<"Cars"> | number | null
    status?: EnumCar_StatusFilter<"Cars"> | $Enums.Car_Status
    featured?: BoolFilter<"Cars"> | boolean
    images?: StringNullableListFilter<"Cars">
    created_at?: DateTimeFilter<"Cars"> | Date | string
    updated_at?: DateTimeFilter<"Cars"> | Date | string
    saved_by?: Saved_CarsListRelationFilter
    test_drive_bookings?: Test_Drive_BookingListRelationFilter
  }

  export type CarsOrderByWithRelationInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    color?: SortOrder
    fuel_type?: SortOrder
    transmission?: SortOrder
    body_type?: SortOrder
    description?: SortOrder
    seating_capacity?: SortOrderInput | SortOrder
    status?: SortOrder
    featured?: SortOrder
    images?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    saved_by?: Saved_CarsOrderByRelationAggregateInput
    test_drive_bookings?: Test_Drive_BookingOrderByRelationAggregateInput
  }

  export type CarsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CarsWhereInput | CarsWhereInput[]
    OR?: CarsWhereInput[]
    NOT?: CarsWhereInput | CarsWhereInput[]
    make?: StringFilter<"Cars"> | string
    model?: StringFilter<"Cars"> | string
    year?: IntFilter<"Cars"> | number
    price?: DecimalFilter<"Cars"> | Decimal | DecimalJsLike | number | string
    mileage?: IntFilter<"Cars"> | number
    color?: StringFilter<"Cars"> | string
    fuel_type?: StringFilter<"Cars"> | string
    transmission?: StringFilter<"Cars"> | string
    body_type?: StringFilter<"Cars"> | string
    description?: StringFilter<"Cars"> | string
    seating_capacity?: IntNullableFilter<"Cars"> | number | null
    status?: EnumCar_StatusFilter<"Cars"> | $Enums.Car_Status
    featured?: BoolFilter<"Cars"> | boolean
    images?: StringNullableListFilter<"Cars">
    created_at?: DateTimeFilter<"Cars"> | Date | string
    updated_at?: DateTimeFilter<"Cars"> | Date | string
    saved_by?: Saved_CarsListRelationFilter
    test_drive_bookings?: Test_Drive_BookingListRelationFilter
  }, "id">

  export type CarsOrderByWithAggregationInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    color?: SortOrder
    fuel_type?: SortOrder
    transmission?: SortOrder
    body_type?: SortOrder
    description?: SortOrder
    seating_capacity?: SortOrderInput | SortOrder
    status?: SortOrder
    featured?: SortOrder
    images?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CarsCountOrderByAggregateInput
    _avg?: CarsAvgOrderByAggregateInput
    _max?: CarsMaxOrderByAggregateInput
    _min?: CarsMinOrderByAggregateInput
    _sum?: CarsSumOrderByAggregateInput
  }

  export type CarsScalarWhereWithAggregatesInput = {
    AND?: CarsScalarWhereWithAggregatesInput | CarsScalarWhereWithAggregatesInput[]
    OR?: CarsScalarWhereWithAggregatesInput[]
    NOT?: CarsScalarWhereWithAggregatesInput | CarsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cars"> | string
    make?: StringWithAggregatesFilter<"Cars"> | string
    model?: StringWithAggregatesFilter<"Cars"> | string
    year?: IntWithAggregatesFilter<"Cars"> | number
    price?: DecimalWithAggregatesFilter<"Cars"> | Decimal | DecimalJsLike | number | string
    mileage?: IntWithAggregatesFilter<"Cars"> | number
    color?: StringWithAggregatesFilter<"Cars"> | string
    fuel_type?: StringWithAggregatesFilter<"Cars"> | string
    transmission?: StringWithAggregatesFilter<"Cars"> | string
    body_type?: StringWithAggregatesFilter<"Cars"> | string
    description?: StringWithAggregatesFilter<"Cars"> | string
    seating_capacity?: IntNullableWithAggregatesFilter<"Cars"> | number | null
    status?: EnumCar_StatusWithAggregatesFilter<"Cars"> | $Enums.Car_Status
    featured?: BoolWithAggregatesFilter<"Cars"> | boolean
    images?: StringNullableListFilter<"Cars">
    created_at?: DateTimeWithAggregatesFilter<"Cars"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Cars"> | Date | string
  }

  export type Dealership_InfoWhereInput = {
    AND?: Dealership_InfoWhereInput | Dealership_InfoWhereInput[]
    OR?: Dealership_InfoWhereInput[]
    NOT?: Dealership_InfoWhereInput | Dealership_InfoWhereInput[]
    id?: StringFilter<"Dealership_Info"> | string
    name?: StringFilter<"Dealership_Info"> | string
    address?: StringFilter<"Dealership_Info"> | string
    phone_number?: StringFilter<"Dealership_Info"> | string
    email?: StringFilter<"Dealership_Info"> | string
    created_at?: DateTimeFilter<"Dealership_Info"> | Date | string
    updated_at?: DateTimeFilter<"Dealership_Info"> | Date | string
    working_hours?: Working_HoursListRelationFilter
  }

  export type Dealership_InfoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    working_hours?: Working_HoursOrderByRelationAggregateInput
  }

  export type Dealership_InfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Dealership_InfoWhereInput | Dealership_InfoWhereInput[]
    OR?: Dealership_InfoWhereInput[]
    NOT?: Dealership_InfoWhereInput | Dealership_InfoWhereInput[]
    name?: StringFilter<"Dealership_Info"> | string
    address?: StringFilter<"Dealership_Info"> | string
    phone_number?: StringFilter<"Dealership_Info"> | string
    email?: StringFilter<"Dealership_Info"> | string
    created_at?: DateTimeFilter<"Dealership_Info"> | Date | string
    updated_at?: DateTimeFilter<"Dealership_Info"> | Date | string
    working_hours?: Working_HoursListRelationFilter
  }, "id">

  export type Dealership_InfoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: Dealership_InfoCountOrderByAggregateInput
    _max?: Dealership_InfoMaxOrderByAggregateInput
    _min?: Dealership_InfoMinOrderByAggregateInput
  }

  export type Dealership_InfoScalarWhereWithAggregatesInput = {
    AND?: Dealership_InfoScalarWhereWithAggregatesInput | Dealership_InfoScalarWhereWithAggregatesInput[]
    OR?: Dealership_InfoScalarWhereWithAggregatesInput[]
    NOT?: Dealership_InfoScalarWhereWithAggregatesInput | Dealership_InfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dealership_Info"> | string
    name?: StringWithAggregatesFilter<"Dealership_Info"> | string
    address?: StringWithAggregatesFilter<"Dealership_Info"> | string
    phone_number?: StringWithAggregatesFilter<"Dealership_Info"> | string
    email?: StringWithAggregatesFilter<"Dealership_Info"> | string
    created_at?: DateTimeWithAggregatesFilter<"Dealership_Info"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Dealership_Info"> | Date | string
  }

  export type Working_HoursWhereInput = {
    AND?: Working_HoursWhereInput | Working_HoursWhereInput[]
    OR?: Working_HoursWhereInput[]
    NOT?: Working_HoursWhereInput | Working_HoursWhereInput[]
    id?: StringFilter<"Working_Hours"> | string
    dealership_id?: StringFilter<"Working_Hours"> | string
    day_of_week?: EnumDay_Of_WeekFilter<"Working_Hours"> | $Enums.Day_Of_Week
    open_time?: StringFilter<"Working_Hours"> | string
    close_time?: StringFilter<"Working_Hours"> | string
    is_open?: BoolFilter<"Working_Hours"> | boolean
    created_at?: DateTimeFilter<"Working_Hours"> | Date | string
    updated_at?: DateTimeFilter<"Working_Hours"> | Date | string
    dealership?: XOR<Dealership_InfoScalarRelationFilter, Dealership_InfoWhereInput>
  }

  export type Working_HoursOrderByWithRelationInput = {
    id?: SortOrder
    dealership_id?: SortOrder
    day_of_week?: SortOrder
    open_time?: SortOrder
    close_time?: SortOrder
    is_open?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    dealership?: Dealership_InfoOrderByWithRelationInput
  }

  export type Working_HoursWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dealership_id_day_of_week?: Working_HoursDealership_idDay_of_weekCompoundUniqueInput
    AND?: Working_HoursWhereInput | Working_HoursWhereInput[]
    OR?: Working_HoursWhereInput[]
    NOT?: Working_HoursWhereInput | Working_HoursWhereInput[]
    dealership_id?: StringFilter<"Working_Hours"> | string
    day_of_week?: EnumDay_Of_WeekFilter<"Working_Hours"> | $Enums.Day_Of_Week
    open_time?: StringFilter<"Working_Hours"> | string
    close_time?: StringFilter<"Working_Hours"> | string
    is_open?: BoolFilter<"Working_Hours"> | boolean
    created_at?: DateTimeFilter<"Working_Hours"> | Date | string
    updated_at?: DateTimeFilter<"Working_Hours"> | Date | string
    dealership?: XOR<Dealership_InfoScalarRelationFilter, Dealership_InfoWhereInput>
  }, "id" | "dealership_id_day_of_week">

  export type Working_HoursOrderByWithAggregationInput = {
    id?: SortOrder
    dealership_id?: SortOrder
    day_of_week?: SortOrder
    open_time?: SortOrder
    close_time?: SortOrder
    is_open?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: Working_HoursCountOrderByAggregateInput
    _max?: Working_HoursMaxOrderByAggregateInput
    _min?: Working_HoursMinOrderByAggregateInput
  }

  export type Working_HoursScalarWhereWithAggregatesInput = {
    AND?: Working_HoursScalarWhereWithAggregatesInput | Working_HoursScalarWhereWithAggregatesInput[]
    OR?: Working_HoursScalarWhereWithAggregatesInput[]
    NOT?: Working_HoursScalarWhereWithAggregatesInput | Working_HoursScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Working_Hours"> | string
    dealership_id?: StringWithAggregatesFilter<"Working_Hours"> | string
    day_of_week?: EnumDay_Of_WeekWithAggregatesFilter<"Working_Hours"> | $Enums.Day_Of_Week
    open_time?: StringWithAggregatesFilter<"Working_Hours"> | string
    close_time?: StringWithAggregatesFilter<"Working_Hours"> | string
    is_open?: BoolWithAggregatesFilter<"Working_Hours"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Working_Hours"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Working_Hours"> | Date | string
  }

  export type Saved_CarsWhereInput = {
    AND?: Saved_CarsWhereInput | Saved_CarsWhereInput[]
    OR?: Saved_CarsWhereInput[]
    NOT?: Saved_CarsWhereInput | Saved_CarsWhereInput[]
    id?: StringFilter<"Saved_Cars"> | string
    user_id?: StringFilter<"Saved_Cars"> | string
    car_id?: StringFilter<"Saved_Cars"> | string
    saved_at?: DateTimeFilter<"Saved_Cars"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    car?: XOR<CarsScalarRelationFilter, CarsWhereInput>
  }

  export type Saved_CarsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    car_id?: SortOrder
    saved_at?: SortOrder
    user?: UserOrderByWithRelationInput
    car?: CarsOrderByWithRelationInput
  }

  export type Saved_CarsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_car_id?: Saved_CarsUser_idCar_idCompoundUniqueInput
    AND?: Saved_CarsWhereInput | Saved_CarsWhereInput[]
    OR?: Saved_CarsWhereInput[]
    NOT?: Saved_CarsWhereInput | Saved_CarsWhereInput[]
    user_id?: StringFilter<"Saved_Cars"> | string
    car_id?: StringFilter<"Saved_Cars"> | string
    saved_at?: DateTimeFilter<"Saved_Cars"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    car?: XOR<CarsScalarRelationFilter, CarsWhereInput>
  }, "id" | "user_id_car_id">

  export type Saved_CarsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    car_id?: SortOrder
    saved_at?: SortOrder
    _count?: Saved_CarsCountOrderByAggregateInput
    _max?: Saved_CarsMaxOrderByAggregateInput
    _min?: Saved_CarsMinOrderByAggregateInput
  }

  export type Saved_CarsScalarWhereWithAggregatesInput = {
    AND?: Saved_CarsScalarWhereWithAggregatesInput | Saved_CarsScalarWhereWithAggregatesInput[]
    OR?: Saved_CarsScalarWhereWithAggregatesInput[]
    NOT?: Saved_CarsScalarWhereWithAggregatesInput | Saved_CarsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Saved_Cars"> | string
    user_id?: StringWithAggregatesFilter<"Saved_Cars"> | string
    car_id?: StringWithAggregatesFilter<"Saved_Cars"> | string
    saved_at?: DateTimeWithAggregatesFilter<"Saved_Cars"> | Date | string
  }

  export type Test_Drive_BookingWhereInput = {
    AND?: Test_Drive_BookingWhereInput | Test_Drive_BookingWhereInput[]
    OR?: Test_Drive_BookingWhereInput[]
    NOT?: Test_Drive_BookingWhereInput | Test_Drive_BookingWhereInput[]
    id?: StringFilter<"Test_Drive_Booking"> | string
    user_id?: StringFilter<"Test_Drive_Booking"> | string
    car_id?: StringFilter<"Test_Drive_Booking"> | string
    booking_date?: DateTimeFilter<"Test_Drive_Booking"> | Date | string
    start_time?: StringFilter<"Test_Drive_Booking"> | string
    end_time?: StringFilter<"Test_Drive_Booking"> | string
    status?: EnumBooking_StatusFilter<"Test_Drive_Booking"> | $Enums.Booking_Status
    notes?: StringNullableFilter<"Test_Drive_Booking"> | string | null
    created_at?: DateTimeFilter<"Test_Drive_Booking"> | Date | string
    modified_at?: DateTimeFilter<"Test_Drive_Booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    car?: XOR<CarsScalarRelationFilter, CarsWhereInput>
  }

  export type Test_Drive_BookingOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    car_id?: SortOrder
    booking_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    user?: UserOrderByWithRelationInput
    car?: CarsOrderByWithRelationInput
  }

  export type Test_Drive_BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Test_Drive_BookingWhereInput | Test_Drive_BookingWhereInput[]
    OR?: Test_Drive_BookingWhereInput[]
    NOT?: Test_Drive_BookingWhereInput | Test_Drive_BookingWhereInput[]
    user_id?: StringFilter<"Test_Drive_Booking"> | string
    car_id?: StringFilter<"Test_Drive_Booking"> | string
    booking_date?: DateTimeFilter<"Test_Drive_Booking"> | Date | string
    start_time?: StringFilter<"Test_Drive_Booking"> | string
    end_time?: StringFilter<"Test_Drive_Booking"> | string
    status?: EnumBooking_StatusFilter<"Test_Drive_Booking"> | $Enums.Booking_Status
    notes?: StringNullableFilter<"Test_Drive_Booking"> | string | null
    created_at?: DateTimeFilter<"Test_Drive_Booking"> | Date | string
    modified_at?: DateTimeFilter<"Test_Drive_Booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    car?: XOR<CarsScalarRelationFilter, CarsWhereInput>
  }, "id">

  export type Test_Drive_BookingOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    car_id?: SortOrder
    booking_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    _count?: Test_Drive_BookingCountOrderByAggregateInput
    _max?: Test_Drive_BookingMaxOrderByAggregateInput
    _min?: Test_Drive_BookingMinOrderByAggregateInput
  }

  export type Test_Drive_BookingScalarWhereWithAggregatesInput = {
    AND?: Test_Drive_BookingScalarWhereWithAggregatesInput | Test_Drive_BookingScalarWhereWithAggregatesInput[]
    OR?: Test_Drive_BookingScalarWhereWithAggregatesInput[]
    NOT?: Test_Drive_BookingScalarWhereWithAggregatesInput | Test_Drive_BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Test_Drive_Booking"> | string
    user_id?: StringWithAggregatesFilter<"Test_Drive_Booking"> | string
    car_id?: StringWithAggregatesFilter<"Test_Drive_Booking"> | string
    booking_date?: DateTimeWithAggregatesFilter<"Test_Drive_Booking"> | Date | string
    start_time?: StringWithAggregatesFilter<"Test_Drive_Booking"> | string
    end_time?: StringWithAggregatesFilter<"Test_Drive_Booking"> | string
    status?: EnumBooking_StatusWithAggregatesFilter<"Test_Drive_Booking"> | $Enums.Booking_Status
    notes?: StringNullableWithAggregatesFilter<"Test_Drive_Booking"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Test_Drive_Booking"> | Date | string
    modified_at?: DateTimeWithAggregatesFilter<"Test_Drive_Booking"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerk_user_id: string
    email: string
    name?: string | null
    phone_number?: string | null
    profile_picture?: string | null
    role?: $Enums.User_Role
    created_at?: Date | string
    updated_at?: Date | string
    saved_cars?: Saved_CarsCreateNestedManyWithoutUserInput
    test_drive_bookings?: Test_Drive_BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerk_user_id: string
    email: string
    name?: string | null
    phone_number?: string | null
    profile_picture?: string | null
    role?: $Enums.User_Role
    created_at?: Date | string
    updated_at?: Date | string
    saved_cars?: Saved_CarsUncheckedCreateNestedManyWithoutUserInput
    test_drive_bookings?: Test_Drive_BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerk_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUser_RoleFieldUpdateOperationsInput | $Enums.User_Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    saved_cars?: Saved_CarsUpdateManyWithoutUserNestedInput
    test_drive_bookings?: Test_Drive_BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerk_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUser_RoleFieldUpdateOperationsInput | $Enums.User_Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    saved_cars?: Saved_CarsUncheckedUpdateManyWithoutUserNestedInput
    test_drive_bookings?: Test_Drive_BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerk_user_id: string
    email: string
    name?: string | null
    phone_number?: string | null
    profile_picture?: string | null
    role?: $Enums.User_Role
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerk_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUser_RoleFieldUpdateOperationsInput | $Enums.User_Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerk_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUser_RoleFieldUpdateOperationsInput | $Enums.User_Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarsCreateInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuel_type: string
    transmission: string
    body_type: string
    description: string
    seating_capacity?: number | null
    status?: $Enums.Car_Status
    featured?: boolean
    images?: CarsCreateimagesInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
    saved_by?: Saved_CarsCreateNestedManyWithoutCarInput
    test_drive_bookings?: Test_Drive_BookingCreateNestedManyWithoutCarInput
  }

  export type CarsUncheckedCreateInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuel_type: string
    transmission: string
    body_type: string
    description: string
    seating_capacity?: number | null
    status?: $Enums.Car_Status
    featured?: boolean
    images?: CarsCreateimagesInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
    saved_by?: Saved_CarsUncheckedCreateNestedManyWithoutCarInput
    test_drive_bookings?: Test_Drive_BookingUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuel_type?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    body_type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCar_StatusFieldUpdateOperationsInput | $Enums.Car_Status
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarsUpdateimagesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    saved_by?: Saved_CarsUpdateManyWithoutCarNestedInput
    test_drive_bookings?: Test_Drive_BookingUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuel_type?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    body_type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCar_StatusFieldUpdateOperationsInput | $Enums.Car_Status
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarsUpdateimagesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    saved_by?: Saved_CarsUncheckedUpdateManyWithoutCarNestedInput
    test_drive_bookings?: Test_Drive_BookingUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarsCreateManyInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuel_type: string
    transmission: string
    body_type: string
    description: string
    seating_capacity?: number | null
    status?: $Enums.Car_Status
    featured?: boolean
    images?: CarsCreateimagesInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CarsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuel_type?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    body_type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCar_StatusFieldUpdateOperationsInput | $Enums.Car_Status
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarsUpdateimagesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuel_type?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    body_type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCar_StatusFieldUpdateOperationsInput | $Enums.Car_Status
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarsUpdateimagesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Dealership_InfoCreateInput = {
    id?: string
    name: string
    address: string
    phone_number: string
    email: string
    created_at?: Date | string
    updated_at?: Date | string
    working_hours?: Working_HoursCreateNestedManyWithoutDealershipInput
  }

  export type Dealership_InfoUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    phone_number: string
    email: string
    created_at?: Date | string
    updated_at?: Date | string
    working_hours?: Working_HoursUncheckedCreateNestedManyWithoutDealershipInput
  }

  export type Dealership_InfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    working_hours?: Working_HoursUpdateManyWithoutDealershipNestedInput
  }

  export type Dealership_InfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    working_hours?: Working_HoursUncheckedUpdateManyWithoutDealershipNestedInput
  }

  export type Dealership_InfoCreateManyInput = {
    id?: string
    name: string
    address: string
    phone_number: string
    email: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Dealership_InfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Dealership_InfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Working_HoursCreateInput = {
    id?: string
    day_of_week: $Enums.Day_Of_Week
    open_time: string
    close_time: string
    is_open?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    dealership: Dealership_InfoCreateNestedOneWithoutWorking_hoursInput
  }

  export type Working_HoursUncheckedCreateInput = {
    id?: string
    dealership_id: string
    day_of_week: $Enums.Day_Of_Week
    open_time: string
    close_time: string
    is_open?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Working_HoursUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day_of_week?: EnumDay_Of_WeekFieldUpdateOperationsInput | $Enums.Day_Of_Week
    open_time?: StringFieldUpdateOperationsInput | string
    close_time?: StringFieldUpdateOperationsInput | string
    is_open?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dealership?: Dealership_InfoUpdateOneRequiredWithoutWorking_hoursNestedInput
  }

  export type Working_HoursUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dealership_id?: StringFieldUpdateOperationsInput | string
    day_of_week?: EnumDay_Of_WeekFieldUpdateOperationsInput | $Enums.Day_Of_Week
    open_time?: StringFieldUpdateOperationsInput | string
    close_time?: StringFieldUpdateOperationsInput | string
    is_open?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Working_HoursCreateManyInput = {
    id?: string
    dealership_id: string
    day_of_week: $Enums.Day_Of_Week
    open_time: string
    close_time: string
    is_open?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Working_HoursUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    day_of_week?: EnumDay_Of_WeekFieldUpdateOperationsInput | $Enums.Day_Of_Week
    open_time?: StringFieldUpdateOperationsInput | string
    close_time?: StringFieldUpdateOperationsInput | string
    is_open?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Working_HoursUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dealership_id?: StringFieldUpdateOperationsInput | string
    day_of_week?: EnumDay_Of_WeekFieldUpdateOperationsInput | $Enums.Day_Of_Week
    open_time?: StringFieldUpdateOperationsInput | string
    close_time?: StringFieldUpdateOperationsInput | string
    is_open?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Saved_CarsCreateInput = {
    id?: string
    saved_at?: Date | string
    user: UserCreateNestedOneWithoutSaved_carsInput
    car: CarsCreateNestedOneWithoutSaved_byInput
  }

  export type Saved_CarsUncheckedCreateInput = {
    id?: string
    user_id: string
    car_id: string
    saved_at?: Date | string
  }

  export type Saved_CarsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    saved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSaved_carsNestedInput
    car?: CarsUpdateOneRequiredWithoutSaved_byNestedInput
  }

  export type Saved_CarsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    car_id?: StringFieldUpdateOperationsInput | string
    saved_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Saved_CarsCreateManyInput = {
    id?: string
    user_id: string
    car_id: string
    saved_at?: Date | string
  }

  export type Saved_CarsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    saved_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Saved_CarsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    car_id?: StringFieldUpdateOperationsInput | string
    saved_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Test_Drive_BookingCreateInput = {
    id?: string
    booking_date: Date | string
    start_time: string
    end_time: string
    status?: $Enums.Booking_Status
    notes?: string | null
    created_at?: Date | string
    modified_at?: Date | string
    user: UserCreateNestedOneWithoutTest_drive_bookingsInput
    car: CarsCreateNestedOneWithoutTest_drive_bookingsInput
  }

  export type Test_Drive_BookingUncheckedCreateInput = {
    id?: string
    user_id: string
    car_id: string
    booking_date: Date | string
    start_time: string
    end_time: string
    status?: $Enums.Booking_Status
    notes?: string | null
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type Test_Drive_BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: EnumBooking_StatusFieldUpdateOperationsInput | $Enums.Booking_Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTest_drive_bookingsNestedInput
    car?: CarsUpdateOneRequiredWithoutTest_drive_bookingsNestedInput
  }

  export type Test_Drive_BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    car_id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: EnumBooking_StatusFieldUpdateOperationsInput | $Enums.Booking_Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Test_Drive_BookingCreateManyInput = {
    id?: string
    user_id: string
    car_id: string
    booking_date: Date | string
    start_time: string
    end_time: string
    status?: $Enums.Booking_Status
    notes?: string | null
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type Test_Drive_BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: EnumBooking_StatusFieldUpdateOperationsInput | $Enums.Booking_Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Test_Drive_BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    car_id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: EnumBooking_StatusFieldUpdateOperationsInput | $Enums.Booking_Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUser_RoleFilter<$PrismaModel = never> = {
    equals?: $Enums.User_Role | EnumUser_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.User_Role[] | ListEnumUser_RoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.User_Role[] | ListEnumUser_RoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUser_RoleFilter<$PrismaModel> | $Enums.User_Role
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

  export type Saved_CarsListRelationFilter = {
    every?: Saved_CarsWhereInput
    some?: Saved_CarsWhereInput
    none?: Saved_CarsWhereInput
  }

  export type Test_Drive_BookingListRelationFilter = {
    every?: Test_Drive_BookingWhereInput
    some?: Test_Drive_BookingWhereInput
    none?: Test_Drive_BookingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Saved_CarsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Test_Drive_BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerk_user_id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    profile_picture?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerk_user_id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    profile_picture?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerk_user_id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    profile_picture?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type EnumUser_RoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.User_Role | EnumUser_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.User_Role[] | ListEnumUser_RoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.User_Role[] | ListEnumUser_RoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUser_RoleWithAggregatesFilter<$PrismaModel> | $Enums.User_Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUser_RoleFilter<$PrismaModel>
    _max?: NestedEnumUser_RoleFilter<$PrismaModel>
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type EnumCar_StatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Car_Status | EnumCar_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Car_Status[] | ListEnumCar_StatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Car_Status[] | ListEnumCar_StatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCar_StatusFilter<$PrismaModel> | $Enums.Car_Status
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CarsCountOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    color?: SortOrder
    fuel_type?: SortOrder
    transmission?: SortOrder
    body_type?: SortOrder
    description?: SortOrder
    seating_capacity?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    images?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CarsAvgOrderByAggregateInput = {
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    seating_capacity?: SortOrder
  }

  export type CarsMaxOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    color?: SortOrder
    fuel_type?: SortOrder
    transmission?: SortOrder
    body_type?: SortOrder
    description?: SortOrder
    seating_capacity?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CarsMinOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    color?: SortOrder
    fuel_type?: SortOrder
    transmission?: SortOrder
    body_type?: SortOrder
    description?: SortOrder
    seating_capacity?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CarsSumOrderByAggregateInput = {
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    seating_capacity?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type EnumCar_StatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Car_Status | EnumCar_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Car_Status[] | ListEnumCar_StatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Car_Status[] | ListEnumCar_StatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCar_StatusWithAggregatesFilter<$PrismaModel> | $Enums.Car_Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCar_StatusFilter<$PrismaModel>
    _max?: NestedEnumCar_StatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Working_HoursListRelationFilter = {
    every?: Working_HoursWhereInput
    some?: Working_HoursWhereInput
    none?: Working_HoursWhereInput
  }

  export type Working_HoursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Dealership_InfoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Dealership_InfoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Dealership_InfoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumDay_Of_WeekFilter<$PrismaModel = never> = {
    equals?: $Enums.Day_Of_Week | EnumDay_Of_WeekFieldRefInput<$PrismaModel>
    in?: $Enums.Day_Of_Week[] | ListEnumDay_Of_WeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.Day_Of_Week[] | ListEnumDay_Of_WeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDay_Of_WeekFilter<$PrismaModel> | $Enums.Day_Of_Week
  }

  export type Dealership_InfoScalarRelationFilter = {
    is?: Dealership_InfoWhereInput
    isNot?: Dealership_InfoWhereInput
  }

  export type Working_HoursDealership_idDay_of_weekCompoundUniqueInput = {
    dealership_id: string
    day_of_week: $Enums.Day_Of_Week
  }

  export type Working_HoursCountOrderByAggregateInput = {
    id?: SortOrder
    dealership_id?: SortOrder
    day_of_week?: SortOrder
    open_time?: SortOrder
    close_time?: SortOrder
    is_open?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Working_HoursMaxOrderByAggregateInput = {
    id?: SortOrder
    dealership_id?: SortOrder
    day_of_week?: SortOrder
    open_time?: SortOrder
    close_time?: SortOrder
    is_open?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Working_HoursMinOrderByAggregateInput = {
    id?: SortOrder
    dealership_id?: SortOrder
    day_of_week?: SortOrder
    open_time?: SortOrder
    close_time?: SortOrder
    is_open?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumDay_Of_WeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Day_Of_Week | EnumDay_Of_WeekFieldRefInput<$PrismaModel>
    in?: $Enums.Day_Of_Week[] | ListEnumDay_Of_WeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.Day_Of_Week[] | ListEnumDay_Of_WeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDay_Of_WeekWithAggregatesFilter<$PrismaModel> | $Enums.Day_Of_Week
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDay_Of_WeekFilter<$PrismaModel>
    _max?: NestedEnumDay_Of_WeekFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CarsScalarRelationFilter = {
    is?: CarsWhereInput
    isNot?: CarsWhereInput
  }

  export type Saved_CarsUser_idCar_idCompoundUniqueInput = {
    user_id: string
    car_id: string
  }

  export type Saved_CarsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    car_id?: SortOrder
    saved_at?: SortOrder
  }

  export type Saved_CarsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    car_id?: SortOrder
    saved_at?: SortOrder
  }

  export type Saved_CarsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    car_id?: SortOrder
    saved_at?: SortOrder
  }

  export type EnumBooking_StatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Booking_Status | EnumBooking_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Booking_Status[] | ListEnumBooking_StatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Booking_Status[] | ListEnumBooking_StatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBooking_StatusFilter<$PrismaModel> | $Enums.Booking_Status
  }

  export type Test_Drive_BookingCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    car_id?: SortOrder
    booking_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type Test_Drive_BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    car_id?: SortOrder
    booking_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type Test_Drive_BookingMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    car_id?: SortOrder
    booking_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type EnumBooking_StatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Booking_Status | EnumBooking_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Booking_Status[] | ListEnumBooking_StatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Booking_Status[] | ListEnumBooking_StatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBooking_StatusWithAggregatesFilter<$PrismaModel> | $Enums.Booking_Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBooking_StatusFilter<$PrismaModel>
    _max?: NestedEnumBooking_StatusFilter<$PrismaModel>
  }

  export type Saved_CarsCreateNestedManyWithoutUserInput = {
    create?: XOR<Saved_CarsCreateWithoutUserInput, Saved_CarsUncheckedCreateWithoutUserInput> | Saved_CarsCreateWithoutUserInput[] | Saved_CarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Saved_CarsCreateOrConnectWithoutUserInput | Saved_CarsCreateOrConnectWithoutUserInput[]
    createMany?: Saved_CarsCreateManyUserInputEnvelope
    connect?: Saved_CarsWhereUniqueInput | Saved_CarsWhereUniqueInput[]
  }

  export type Test_Drive_BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<Test_Drive_BookingCreateWithoutUserInput, Test_Drive_BookingUncheckedCreateWithoutUserInput> | Test_Drive_BookingCreateWithoutUserInput[] | Test_Drive_BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Test_Drive_BookingCreateOrConnectWithoutUserInput | Test_Drive_BookingCreateOrConnectWithoutUserInput[]
    createMany?: Test_Drive_BookingCreateManyUserInputEnvelope
    connect?: Test_Drive_BookingWhereUniqueInput | Test_Drive_BookingWhereUniqueInput[]
  }

  export type Saved_CarsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Saved_CarsCreateWithoutUserInput, Saved_CarsUncheckedCreateWithoutUserInput> | Saved_CarsCreateWithoutUserInput[] | Saved_CarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Saved_CarsCreateOrConnectWithoutUserInput | Saved_CarsCreateOrConnectWithoutUserInput[]
    createMany?: Saved_CarsCreateManyUserInputEnvelope
    connect?: Saved_CarsWhereUniqueInput | Saved_CarsWhereUniqueInput[]
  }

  export type Test_Drive_BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Test_Drive_BookingCreateWithoutUserInput, Test_Drive_BookingUncheckedCreateWithoutUserInput> | Test_Drive_BookingCreateWithoutUserInput[] | Test_Drive_BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Test_Drive_BookingCreateOrConnectWithoutUserInput | Test_Drive_BookingCreateOrConnectWithoutUserInput[]
    createMany?: Test_Drive_BookingCreateManyUserInputEnvelope
    connect?: Test_Drive_BookingWhereUniqueInput | Test_Drive_BookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUser_RoleFieldUpdateOperationsInput = {
    set?: $Enums.User_Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Saved_CarsUpdateManyWithoutUserNestedInput = {
    create?: XOR<Saved_CarsCreateWithoutUserInput, Saved_CarsUncheckedCreateWithoutUserInput> | Saved_CarsCreateWithoutUserInput[] | Saved_CarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Saved_CarsCreateOrConnectWithoutUserInput | Saved_CarsCreateOrConnectWithoutUserInput[]
    upsert?: Saved_CarsUpsertWithWhereUniqueWithoutUserInput | Saved_CarsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Saved_CarsCreateManyUserInputEnvelope
    set?: Saved_CarsWhereUniqueInput | Saved_CarsWhereUniqueInput[]
    disconnect?: Saved_CarsWhereUniqueInput | Saved_CarsWhereUniqueInput[]
    delete?: Saved_CarsWhereUniqueInput | Saved_CarsWhereUniqueInput[]
    connect?: Saved_CarsWhereUniqueInput | Saved_CarsWhereUniqueInput[]
    update?: Saved_CarsUpdateWithWhereUniqueWithoutUserInput | Saved_CarsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Saved_CarsUpdateManyWithWhereWithoutUserInput | Saved_CarsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Saved_CarsScalarWhereInput | Saved_CarsScalarWhereInput[]
  }

  export type Test_Drive_BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<Test_Drive_BookingCreateWithoutUserInput, Test_Drive_BookingUncheckedCreateWithoutUserInput> | Test_Drive_BookingCreateWithoutUserInput[] | Test_Drive_BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Test_Drive_BookingCreateOrConnectWithoutUserInput | Test_Drive_BookingCreateOrConnectWithoutUserInput[]
    upsert?: Test_Drive_BookingUpsertWithWhereUniqueWithoutUserInput | Test_Drive_BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Test_Drive_BookingCreateManyUserInputEnvelope
    set?: Test_Drive_BookingWhereUniqueInput | Test_Drive_BookingWhereUniqueInput[]
    disconnect?: Test_Drive_BookingWhereUniqueInput | Test_Drive_BookingWhereUniqueInput[]
    delete?: Test_Drive_BookingWhereUniqueInput | Test_Drive_BookingWhereUniqueInput[]
    connect?: Test_Drive_BookingWhereUniqueInput | Test_Drive_BookingWhereUniqueInput[]
    update?: Test_Drive_BookingUpdateWithWhereUniqueWithoutUserInput | Test_Drive_BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Test_Drive_BookingUpdateManyWithWhereWithoutUserInput | Test_Drive_BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Test_Drive_BookingScalarWhereInput | Test_Drive_BookingScalarWhereInput[]
  }

  export type Saved_CarsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Saved_CarsCreateWithoutUserInput, Saved_CarsUncheckedCreateWithoutUserInput> | Saved_CarsCreateWithoutUserInput[] | Saved_CarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Saved_CarsCreateOrConnectWithoutUserInput | Saved_CarsCreateOrConnectWithoutUserInput[]
    upsert?: Saved_CarsUpsertWithWhereUniqueWithoutUserInput | Saved_CarsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Saved_CarsCreateManyUserInputEnvelope
    set?: Saved_CarsWhereUniqueInput | Saved_CarsWhereUniqueInput[]
    disconnect?: Saved_CarsWhereUniqueInput | Saved_CarsWhereUniqueInput[]
    delete?: Saved_CarsWhereUniqueInput | Saved_CarsWhereUniqueInput[]
    connect?: Saved_CarsWhereUniqueInput | Saved_CarsWhereUniqueInput[]
    update?: Saved_CarsUpdateWithWhereUniqueWithoutUserInput | Saved_CarsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Saved_CarsUpdateManyWithWhereWithoutUserInput | Saved_CarsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Saved_CarsScalarWhereInput | Saved_CarsScalarWhereInput[]
  }

  export type Test_Drive_BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Test_Drive_BookingCreateWithoutUserInput, Test_Drive_BookingUncheckedCreateWithoutUserInput> | Test_Drive_BookingCreateWithoutUserInput[] | Test_Drive_BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Test_Drive_BookingCreateOrConnectWithoutUserInput | Test_Drive_BookingCreateOrConnectWithoutUserInput[]
    upsert?: Test_Drive_BookingUpsertWithWhereUniqueWithoutUserInput | Test_Drive_BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Test_Drive_BookingCreateManyUserInputEnvelope
    set?: Test_Drive_BookingWhereUniqueInput | Test_Drive_BookingWhereUniqueInput[]
    disconnect?: Test_Drive_BookingWhereUniqueInput | Test_Drive_BookingWhereUniqueInput[]
    delete?: Test_Drive_BookingWhereUniqueInput | Test_Drive_BookingWhereUniqueInput[]
    connect?: Test_Drive_BookingWhereUniqueInput | Test_Drive_BookingWhereUniqueInput[]
    update?: Test_Drive_BookingUpdateWithWhereUniqueWithoutUserInput | Test_Drive_BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Test_Drive_BookingUpdateManyWithWhereWithoutUserInput | Test_Drive_BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Test_Drive_BookingScalarWhereInput | Test_Drive_BookingScalarWhereInput[]
  }

  export type CarsCreateimagesInput = {
    set: string[]
  }

  export type Saved_CarsCreateNestedManyWithoutCarInput = {
    create?: XOR<Saved_CarsCreateWithoutCarInput, Saved_CarsUncheckedCreateWithoutCarInput> | Saved_CarsCreateWithoutCarInput[] | Saved_CarsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Saved_CarsCreateOrConnectWithoutCarInput | Saved_CarsCreateOrConnectWithoutCarInput[]
    createMany?: Saved_CarsCreateManyCarInputEnvelope
    connect?: Saved_CarsWhereUniqueInput | Saved_CarsWhereUniqueInput[]
  }

  export type Test_Drive_BookingCreateNestedManyWithoutCarInput = {
    create?: XOR<Test_Drive_BookingCreateWithoutCarInput, Test_Drive_BookingUncheckedCreateWithoutCarInput> | Test_Drive_BookingCreateWithoutCarInput[] | Test_Drive_BookingUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Test_Drive_BookingCreateOrConnectWithoutCarInput | Test_Drive_BookingCreateOrConnectWithoutCarInput[]
    createMany?: Test_Drive_BookingCreateManyCarInputEnvelope
    connect?: Test_Drive_BookingWhereUniqueInput | Test_Drive_BookingWhereUniqueInput[]
  }

  export type Saved_CarsUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<Saved_CarsCreateWithoutCarInput, Saved_CarsUncheckedCreateWithoutCarInput> | Saved_CarsCreateWithoutCarInput[] | Saved_CarsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Saved_CarsCreateOrConnectWithoutCarInput | Saved_CarsCreateOrConnectWithoutCarInput[]
    createMany?: Saved_CarsCreateManyCarInputEnvelope
    connect?: Saved_CarsWhereUniqueInput | Saved_CarsWhereUniqueInput[]
  }

  export type Test_Drive_BookingUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<Test_Drive_BookingCreateWithoutCarInput, Test_Drive_BookingUncheckedCreateWithoutCarInput> | Test_Drive_BookingCreateWithoutCarInput[] | Test_Drive_BookingUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Test_Drive_BookingCreateOrConnectWithoutCarInput | Test_Drive_BookingCreateOrConnectWithoutCarInput[]
    createMany?: Test_Drive_BookingCreateManyCarInputEnvelope
    connect?: Test_Drive_BookingWhereUniqueInput | Test_Drive_BookingWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCar_StatusFieldUpdateOperationsInput = {
    set?: $Enums.Car_Status
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CarsUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type Saved_CarsUpdateManyWithoutCarNestedInput = {
    create?: XOR<Saved_CarsCreateWithoutCarInput, Saved_CarsUncheckedCreateWithoutCarInput> | Saved_CarsCreateWithoutCarInput[] | Saved_CarsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Saved_CarsCreateOrConnectWithoutCarInput | Saved_CarsCreateOrConnectWithoutCarInput[]
    upsert?: Saved_CarsUpsertWithWhereUniqueWithoutCarInput | Saved_CarsUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: Saved_CarsCreateManyCarInputEnvelope
    set?: Saved_CarsWhereUniqueInput | Saved_CarsWhereUniqueInput[]
    disconnect?: Saved_CarsWhereUniqueInput | Saved_CarsWhereUniqueInput[]
    delete?: Saved_CarsWhereUniqueInput | Saved_CarsWhereUniqueInput[]
    connect?: Saved_CarsWhereUniqueInput | Saved_CarsWhereUniqueInput[]
    update?: Saved_CarsUpdateWithWhereUniqueWithoutCarInput | Saved_CarsUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: Saved_CarsUpdateManyWithWhereWithoutCarInput | Saved_CarsUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: Saved_CarsScalarWhereInput | Saved_CarsScalarWhereInput[]
  }

  export type Test_Drive_BookingUpdateManyWithoutCarNestedInput = {
    create?: XOR<Test_Drive_BookingCreateWithoutCarInput, Test_Drive_BookingUncheckedCreateWithoutCarInput> | Test_Drive_BookingCreateWithoutCarInput[] | Test_Drive_BookingUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Test_Drive_BookingCreateOrConnectWithoutCarInput | Test_Drive_BookingCreateOrConnectWithoutCarInput[]
    upsert?: Test_Drive_BookingUpsertWithWhereUniqueWithoutCarInput | Test_Drive_BookingUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: Test_Drive_BookingCreateManyCarInputEnvelope
    set?: Test_Drive_BookingWhereUniqueInput | Test_Drive_BookingWhereUniqueInput[]
    disconnect?: Test_Drive_BookingWhereUniqueInput | Test_Drive_BookingWhereUniqueInput[]
    delete?: Test_Drive_BookingWhereUniqueInput | Test_Drive_BookingWhereUniqueInput[]
    connect?: Test_Drive_BookingWhereUniqueInput | Test_Drive_BookingWhereUniqueInput[]
    update?: Test_Drive_BookingUpdateWithWhereUniqueWithoutCarInput | Test_Drive_BookingUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: Test_Drive_BookingUpdateManyWithWhereWithoutCarInput | Test_Drive_BookingUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: Test_Drive_BookingScalarWhereInput | Test_Drive_BookingScalarWhereInput[]
  }

  export type Saved_CarsUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<Saved_CarsCreateWithoutCarInput, Saved_CarsUncheckedCreateWithoutCarInput> | Saved_CarsCreateWithoutCarInput[] | Saved_CarsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Saved_CarsCreateOrConnectWithoutCarInput | Saved_CarsCreateOrConnectWithoutCarInput[]
    upsert?: Saved_CarsUpsertWithWhereUniqueWithoutCarInput | Saved_CarsUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: Saved_CarsCreateManyCarInputEnvelope
    set?: Saved_CarsWhereUniqueInput | Saved_CarsWhereUniqueInput[]
    disconnect?: Saved_CarsWhereUniqueInput | Saved_CarsWhereUniqueInput[]
    delete?: Saved_CarsWhereUniqueInput | Saved_CarsWhereUniqueInput[]
    connect?: Saved_CarsWhereUniqueInput | Saved_CarsWhereUniqueInput[]
    update?: Saved_CarsUpdateWithWhereUniqueWithoutCarInput | Saved_CarsUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: Saved_CarsUpdateManyWithWhereWithoutCarInput | Saved_CarsUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: Saved_CarsScalarWhereInput | Saved_CarsScalarWhereInput[]
  }

  export type Test_Drive_BookingUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<Test_Drive_BookingCreateWithoutCarInput, Test_Drive_BookingUncheckedCreateWithoutCarInput> | Test_Drive_BookingCreateWithoutCarInput[] | Test_Drive_BookingUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Test_Drive_BookingCreateOrConnectWithoutCarInput | Test_Drive_BookingCreateOrConnectWithoutCarInput[]
    upsert?: Test_Drive_BookingUpsertWithWhereUniqueWithoutCarInput | Test_Drive_BookingUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: Test_Drive_BookingCreateManyCarInputEnvelope
    set?: Test_Drive_BookingWhereUniqueInput | Test_Drive_BookingWhereUniqueInput[]
    disconnect?: Test_Drive_BookingWhereUniqueInput | Test_Drive_BookingWhereUniqueInput[]
    delete?: Test_Drive_BookingWhereUniqueInput | Test_Drive_BookingWhereUniqueInput[]
    connect?: Test_Drive_BookingWhereUniqueInput | Test_Drive_BookingWhereUniqueInput[]
    update?: Test_Drive_BookingUpdateWithWhereUniqueWithoutCarInput | Test_Drive_BookingUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: Test_Drive_BookingUpdateManyWithWhereWithoutCarInput | Test_Drive_BookingUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: Test_Drive_BookingScalarWhereInput | Test_Drive_BookingScalarWhereInput[]
  }

  export type Working_HoursCreateNestedManyWithoutDealershipInput = {
    create?: XOR<Working_HoursCreateWithoutDealershipInput, Working_HoursUncheckedCreateWithoutDealershipInput> | Working_HoursCreateWithoutDealershipInput[] | Working_HoursUncheckedCreateWithoutDealershipInput[]
    connectOrCreate?: Working_HoursCreateOrConnectWithoutDealershipInput | Working_HoursCreateOrConnectWithoutDealershipInput[]
    createMany?: Working_HoursCreateManyDealershipInputEnvelope
    connect?: Working_HoursWhereUniqueInput | Working_HoursWhereUniqueInput[]
  }

  export type Working_HoursUncheckedCreateNestedManyWithoutDealershipInput = {
    create?: XOR<Working_HoursCreateWithoutDealershipInput, Working_HoursUncheckedCreateWithoutDealershipInput> | Working_HoursCreateWithoutDealershipInput[] | Working_HoursUncheckedCreateWithoutDealershipInput[]
    connectOrCreate?: Working_HoursCreateOrConnectWithoutDealershipInput | Working_HoursCreateOrConnectWithoutDealershipInput[]
    createMany?: Working_HoursCreateManyDealershipInputEnvelope
    connect?: Working_HoursWhereUniqueInput | Working_HoursWhereUniqueInput[]
  }

  export type Working_HoursUpdateManyWithoutDealershipNestedInput = {
    create?: XOR<Working_HoursCreateWithoutDealershipInput, Working_HoursUncheckedCreateWithoutDealershipInput> | Working_HoursCreateWithoutDealershipInput[] | Working_HoursUncheckedCreateWithoutDealershipInput[]
    connectOrCreate?: Working_HoursCreateOrConnectWithoutDealershipInput | Working_HoursCreateOrConnectWithoutDealershipInput[]
    upsert?: Working_HoursUpsertWithWhereUniqueWithoutDealershipInput | Working_HoursUpsertWithWhereUniqueWithoutDealershipInput[]
    createMany?: Working_HoursCreateManyDealershipInputEnvelope
    set?: Working_HoursWhereUniqueInput | Working_HoursWhereUniqueInput[]
    disconnect?: Working_HoursWhereUniqueInput | Working_HoursWhereUniqueInput[]
    delete?: Working_HoursWhereUniqueInput | Working_HoursWhereUniqueInput[]
    connect?: Working_HoursWhereUniqueInput | Working_HoursWhereUniqueInput[]
    update?: Working_HoursUpdateWithWhereUniqueWithoutDealershipInput | Working_HoursUpdateWithWhereUniqueWithoutDealershipInput[]
    updateMany?: Working_HoursUpdateManyWithWhereWithoutDealershipInput | Working_HoursUpdateManyWithWhereWithoutDealershipInput[]
    deleteMany?: Working_HoursScalarWhereInput | Working_HoursScalarWhereInput[]
  }

  export type Working_HoursUncheckedUpdateManyWithoutDealershipNestedInput = {
    create?: XOR<Working_HoursCreateWithoutDealershipInput, Working_HoursUncheckedCreateWithoutDealershipInput> | Working_HoursCreateWithoutDealershipInput[] | Working_HoursUncheckedCreateWithoutDealershipInput[]
    connectOrCreate?: Working_HoursCreateOrConnectWithoutDealershipInput | Working_HoursCreateOrConnectWithoutDealershipInput[]
    upsert?: Working_HoursUpsertWithWhereUniqueWithoutDealershipInput | Working_HoursUpsertWithWhereUniqueWithoutDealershipInput[]
    createMany?: Working_HoursCreateManyDealershipInputEnvelope
    set?: Working_HoursWhereUniqueInput | Working_HoursWhereUniqueInput[]
    disconnect?: Working_HoursWhereUniqueInput | Working_HoursWhereUniqueInput[]
    delete?: Working_HoursWhereUniqueInput | Working_HoursWhereUniqueInput[]
    connect?: Working_HoursWhereUniqueInput | Working_HoursWhereUniqueInput[]
    update?: Working_HoursUpdateWithWhereUniqueWithoutDealershipInput | Working_HoursUpdateWithWhereUniqueWithoutDealershipInput[]
    updateMany?: Working_HoursUpdateManyWithWhereWithoutDealershipInput | Working_HoursUpdateManyWithWhereWithoutDealershipInput[]
    deleteMany?: Working_HoursScalarWhereInput | Working_HoursScalarWhereInput[]
  }

  export type Dealership_InfoCreateNestedOneWithoutWorking_hoursInput = {
    create?: XOR<Dealership_InfoCreateWithoutWorking_hoursInput, Dealership_InfoUncheckedCreateWithoutWorking_hoursInput>
    connectOrCreate?: Dealership_InfoCreateOrConnectWithoutWorking_hoursInput
    connect?: Dealership_InfoWhereUniqueInput
  }

  export type EnumDay_Of_WeekFieldUpdateOperationsInput = {
    set?: $Enums.Day_Of_Week
  }

  export type Dealership_InfoUpdateOneRequiredWithoutWorking_hoursNestedInput = {
    create?: XOR<Dealership_InfoCreateWithoutWorking_hoursInput, Dealership_InfoUncheckedCreateWithoutWorking_hoursInput>
    connectOrCreate?: Dealership_InfoCreateOrConnectWithoutWorking_hoursInput
    upsert?: Dealership_InfoUpsertWithoutWorking_hoursInput
    connect?: Dealership_InfoWhereUniqueInput
    update?: XOR<XOR<Dealership_InfoUpdateToOneWithWhereWithoutWorking_hoursInput, Dealership_InfoUpdateWithoutWorking_hoursInput>, Dealership_InfoUncheckedUpdateWithoutWorking_hoursInput>
  }

  export type UserCreateNestedOneWithoutSaved_carsInput = {
    create?: XOR<UserCreateWithoutSaved_carsInput, UserUncheckedCreateWithoutSaved_carsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSaved_carsInput
    connect?: UserWhereUniqueInput
  }

  export type CarsCreateNestedOneWithoutSaved_byInput = {
    create?: XOR<CarsCreateWithoutSaved_byInput, CarsUncheckedCreateWithoutSaved_byInput>
    connectOrCreate?: CarsCreateOrConnectWithoutSaved_byInput
    connect?: CarsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSaved_carsNestedInput = {
    create?: XOR<UserCreateWithoutSaved_carsInput, UserUncheckedCreateWithoutSaved_carsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSaved_carsInput
    upsert?: UserUpsertWithoutSaved_carsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSaved_carsInput, UserUpdateWithoutSaved_carsInput>, UserUncheckedUpdateWithoutSaved_carsInput>
  }

  export type CarsUpdateOneRequiredWithoutSaved_byNestedInput = {
    create?: XOR<CarsCreateWithoutSaved_byInput, CarsUncheckedCreateWithoutSaved_byInput>
    connectOrCreate?: CarsCreateOrConnectWithoutSaved_byInput
    upsert?: CarsUpsertWithoutSaved_byInput
    connect?: CarsWhereUniqueInput
    update?: XOR<XOR<CarsUpdateToOneWithWhereWithoutSaved_byInput, CarsUpdateWithoutSaved_byInput>, CarsUncheckedUpdateWithoutSaved_byInput>
  }

  export type UserCreateNestedOneWithoutTest_drive_bookingsInput = {
    create?: XOR<UserCreateWithoutTest_drive_bookingsInput, UserUncheckedCreateWithoutTest_drive_bookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTest_drive_bookingsInput
    connect?: UserWhereUniqueInput
  }

  export type CarsCreateNestedOneWithoutTest_drive_bookingsInput = {
    create?: XOR<CarsCreateWithoutTest_drive_bookingsInput, CarsUncheckedCreateWithoutTest_drive_bookingsInput>
    connectOrCreate?: CarsCreateOrConnectWithoutTest_drive_bookingsInput
    connect?: CarsWhereUniqueInput
  }

  export type EnumBooking_StatusFieldUpdateOperationsInput = {
    set?: $Enums.Booking_Status
  }

  export type UserUpdateOneRequiredWithoutTest_drive_bookingsNestedInput = {
    create?: XOR<UserCreateWithoutTest_drive_bookingsInput, UserUncheckedCreateWithoutTest_drive_bookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTest_drive_bookingsInput
    upsert?: UserUpsertWithoutTest_drive_bookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTest_drive_bookingsInput, UserUpdateWithoutTest_drive_bookingsInput>, UserUncheckedUpdateWithoutTest_drive_bookingsInput>
  }

  export type CarsUpdateOneRequiredWithoutTest_drive_bookingsNestedInput = {
    create?: XOR<CarsCreateWithoutTest_drive_bookingsInput, CarsUncheckedCreateWithoutTest_drive_bookingsInput>
    connectOrCreate?: CarsCreateOrConnectWithoutTest_drive_bookingsInput
    upsert?: CarsUpsertWithoutTest_drive_bookingsInput
    connect?: CarsWhereUniqueInput
    update?: XOR<XOR<CarsUpdateToOneWithWhereWithoutTest_drive_bookingsInput, CarsUpdateWithoutTest_drive_bookingsInput>, CarsUncheckedUpdateWithoutTest_drive_bookingsInput>
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

  export type NestedEnumUser_RoleFilter<$PrismaModel = never> = {
    equals?: $Enums.User_Role | EnumUser_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.User_Role[] | ListEnumUser_RoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.User_Role[] | ListEnumUser_RoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUser_RoleFilter<$PrismaModel> | $Enums.User_Role
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

  export type NestedEnumUser_RoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.User_Role | EnumUser_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.User_Role[] | ListEnumUser_RoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.User_Role[] | ListEnumUser_RoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUser_RoleWithAggregatesFilter<$PrismaModel> | $Enums.User_Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUser_RoleFilter<$PrismaModel>
    _max?: NestedEnumUser_RoleFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumCar_StatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Car_Status | EnumCar_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Car_Status[] | ListEnumCar_StatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Car_Status[] | ListEnumCar_StatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCar_StatusFilter<$PrismaModel> | $Enums.Car_Status
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedEnumCar_StatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Car_Status | EnumCar_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Car_Status[] | ListEnumCar_StatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Car_Status[] | ListEnumCar_StatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCar_StatusWithAggregatesFilter<$PrismaModel> | $Enums.Car_Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCar_StatusFilter<$PrismaModel>
    _max?: NestedEnumCar_StatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDay_Of_WeekFilter<$PrismaModel = never> = {
    equals?: $Enums.Day_Of_Week | EnumDay_Of_WeekFieldRefInput<$PrismaModel>
    in?: $Enums.Day_Of_Week[] | ListEnumDay_Of_WeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.Day_Of_Week[] | ListEnumDay_Of_WeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDay_Of_WeekFilter<$PrismaModel> | $Enums.Day_Of_Week
  }

  export type NestedEnumDay_Of_WeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Day_Of_Week | EnumDay_Of_WeekFieldRefInput<$PrismaModel>
    in?: $Enums.Day_Of_Week[] | ListEnumDay_Of_WeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.Day_Of_Week[] | ListEnumDay_Of_WeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDay_Of_WeekWithAggregatesFilter<$PrismaModel> | $Enums.Day_Of_Week
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDay_Of_WeekFilter<$PrismaModel>
    _max?: NestedEnumDay_Of_WeekFilter<$PrismaModel>
  }

  export type NestedEnumBooking_StatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Booking_Status | EnumBooking_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Booking_Status[] | ListEnumBooking_StatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Booking_Status[] | ListEnumBooking_StatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBooking_StatusFilter<$PrismaModel> | $Enums.Booking_Status
  }

  export type NestedEnumBooking_StatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Booking_Status | EnumBooking_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Booking_Status[] | ListEnumBooking_StatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Booking_Status[] | ListEnumBooking_StatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBooking_StatusWithAggregatesFilter<$PrismaModel> | $Enums.Booking_Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBooking_StatusFilter<$PrismaModel>
    _max?: NestedEnumBooking_StatusFilter<$PrismaModel>
  }

  export type Saved_CarsCreateWithoutUserInput = {
    id?: string
    saved_at?: Date | string
    car: CarsCreateNestedOneWithoutSaved_byInput
  }

  export type Saved_CarsUncheckedCreateWithoutUserInput = {
    id?: string
    car_id: string
    saved_at?: Date | string
  }

  export type Saved_CarsCreateOrConnectWithoutUserInput = {
    where: Saved_CarsWhereUniqueInput
    create: XOR<Saved_CarsCreateWithoutUserInput, Saved_CarsUncheckedCreateWithoutUserInput>
  }

  export type Saved_CarsCreateManyUserInputEnvelope = {
    data: Saved_CarsCreateManyUserInput | Saved_CarsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Test_Drive_BookingCreateWithoutUserInput = {
    id?: string
    booking_date: Date | string
    start_time: string
    end_time: string
    status?: $Enums.Booking_Status
    notes?: string | null
    created_at?: Date | string
    modified_at?: Date | string
    car: CarsCreateNestedOneWithoutTest_drive_bookingsInput
  }

  export type Test_Drive_BookingUncheckedCreateWithoutUserInput = {
    id?: string
    car_id: string
    booking_date: Date | string
    start_time: string
    end_time: string
    status?: $Enums.Booking_Status
    notes?: string | null
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type Test_Drive_BookingCreateOrConnectWithoutUserInput = {
    where: Test_Drive_BookingWhereUniqueInput
    create: XOR<Test_Drive_BookingCreateWithoutUserInput, Test_Drive_BookingUncheckedCreateWithoutUserInput>
  }

  export type Test_Drive_BookingCreateManyUserInputEnvelope = {
    data: Test_Drive_BookingCreateManyUserInput | Test_Drive_BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Saved_CarsUpsertWithWhereUniqueWithoutUserInput = {
    where: Saved_CarsWhereUniqueInput
    update: XOR<Saved_CarsUpdateWithoutUserInput, Saved_CarsUncheckedUpdateWithoutUserInput>
    create: XOR<Saved_CarsCreateWithoutUserInput, Saved_CarsUncheckedCreateWithoutUserInput>
  }

  export type Saved_CarsUpdateWithWhereUniqueWithoutUserInput = {
    where: Saved_CarsWhereUniqueInput
    data: XOR<Saved_CarsUpdateWithoutUserInput, Saved_CarsUncheckedUpdateWithoutUserInput>
  }

  export type Saved_CarsUpdateManyWithWhereWithoutUserInput = {
    where: Saved_CarsScalarWhereInput
    data: XOR<Saved_CarsUpdateManyMutationInput, Saved_CarsUncheckedUpdateManyWithoutUserInput>
  }

  export type Saved_CarsScalarWhereInput = {
    AND?: Saved_CarsScalarWhereInput | Saved_CarsScalarWhereInput[]
    OR?: Saved_CarsScalarWhereInput[]
    NOT?: Saved_CarsScalarWhereInput | Saved_CarsScalarWhereInput[]
    id?: StringFilter<"Saved_Cars"> | string
    user_id?: StringFilter<"Saved_Cars"> | string
    car_id?: StringFilter<"Saved_Cars"> | string
    saved_at?: DateTimeFilter<"Saved_Cars"> | Date | string
  }

  export type Test_Drive_BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: Test_Drive_BookingWhereUniqueInput
    update: XOR<Test_Drive_BookingUpdateWithoutUserInput, Test_Drive_BookingUncheckedUpdateWithoutUserInput>
    create: XOR<Test_Drive_BookingCreateWithoutUserInput, Test_Drive_BookingUncheckedCreateWithoutUserInput>
  }

  export type Test_Drive_BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: Test_Drive_BookingWhereUniqueInput
    data: XOR<Test_Drive_BookingUpdateWithoutUserInput, Test_Drive_BookingUncheckedUpdateWithoutUserInput>
  }

  export type Test_Drive_BookingUpdateManyWithWhereWithoutUserInput = {
    where: Test_Drive_BookingScalarWhereInput
    data: XOR<Test_Drive_BookingUpdateManyMutationInput, Test_Drive_BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type Test_Drive_BookingScalarWhereInput = {
    AND?: Test_Drive_BookingScalarWhereInput | Test_Drive_BookingScalarWhereInput[]
    OR?: Test_Drive_BookingScalarWhereInput[]
    NOT?: Test_Drive_BookingScalarWhereInput | Test_Drive_BookingScalarWhereInput[]
    id?: StringFilter<"Test_Drive_Booking"> | string
    user_id?: StringFilter<"Test_Drive_Booking"> | string
    car_id?: StringFilter<"Test_Drive_Booking"> | string
    booking_date?: DateTimeFilter<"Test_Drive_Booking"> | Date | string
    start_time?: StringFilter<"Test_Drive_Booking"> | string
    end_time?: StringFilter<"Test_Drive_Booking"> | string
    status?: EnumBooking_StatusFilter<"Test_Drive_Booking"> | $Enums.Booking_Status
    notes?: StringNullableFilter<"Test_Drive_Booking"> | string | null
    created_at?: DateTimeFilter<"Test_Drive_Booking"> | Date | string
    modified_at?: DateTimeFilter<"Test_Drive_Booking"> | Date | string
  }

  export type Saved_CarsCreateWithoutCarInput = {
    id?: string
    saved_at?: Date | string
    user: UserCreateNestedOneWithoutSaved_carsInput
  }

  export type Saved_CarsUncheckedCreateWithoutCarInput = {
    id?: string
    user_id: string
    saved_at?: Date | string
  }

  export type Saved_CarsCreateOrConnectWithoutCarInput = {
    where: Saved_CarsWhereUniqueInput
    create: XOR<Saved_CarsCreateWithoutCarInput, Saved_CarsUncheckedCreateWithoutCarInput>
  }

  export type Saved_CarsCreateManyCarInputEnvelope = {
    data: Saved_CarsCreateManyCarInput | Saved_CarsCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type Test_Drive_BookingCreateWithoutCarInput = {
    id?: string
    booking_date: Date | string
    start_time: string
    end_time: string
    status?: $Enums.Booking_Status
    notes?: string | null
    created_at?: Date | string
    modified_at?: Date | string
    user: UserCreateNestedOneWithoutTest_drive_bookingsInput
  }

  export type Test_Drive_BookingUncheckedCreateWithoutCarInput = {
    id?: string
    user_id: string
    booking_date: Date | string
    start_time: string
    end_time: string
    status?: $Enums.Booking_Status
    notes?: string | null
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type Test_Drive_BookingCreateOrConnectWithoutCarInput = {
    where: Test_Drive_BookingWhereUniqueInput
    create: XOR<Test_Drive_BookingCreateWithoutCarInput, Test_Drive_BookingUncheckedCreateWithoutCarInput>
  }

  export type Test_Drive_BookingCreateManyCarInputEnvelope = {
    data: Test_Drive_BookingCreateManyCarInput | Test_Drive_BookingCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type Saved_CarsUpsertWithWhereUniqueWithoutCarInput = {
    where: Saved_CarsWhereUniqueInput
    update: XOR<Saved_CarsUpdateWithoutCarInput, Saved_CarsUncheckedUpdateWithoutCarInput>
    create: XOR<Saved_CarsCreateWithoutCarInput, Saved_CarsUncheckedCreateWithoutCarInput>
  }

  export type Saved_CarsUpdateWithWhereUniqueWithoutCarInput = {
    where: Saved_CarsWhereUniqueInput
    data: XOR<Saved_CarsUpdateWithoutCarInput, Saved_CarsUncheckedUpdateWithoutCarInput>
  }

  export type Saved_CarsUpdateManyWithWhereWithoutCarInput = {
    where: Saved_CarsScalarWhereInput
    data: XOR<Saved_CarsUpdateManyMutationInput, Saved_CarsUncheckedUpdateManyWithoutCarInput>
  }

  export type Test_Drive_BookingUpsertWithWhereUniqueWithoutCarInput = {
    where: Test_Drive_BookingWhereUniqueInput
    update: XOR<Test_Drive_BookingUpdateWithoutCarInput, Test_Drive_BookingUncheckedUpdateWithoutCarInput>
    create: XOR<Test_Drive_BookingCreateWithoutCarInput, Test_Drive_BookingUncheckedCreateWithoutCarInput>
  }

  export type Test_Drive_BookingUpdateWithWhereUniqueWithoutCarInput = {
    where: Test_Drive_BookingWhereUniqueInput
    data: XOR<Test_Drive_BookingUpdateWithoutCarInput, Test_Drive_BookingUncheckedUpdateWithoutCarInput>
  }

  export type Test_Drive_BookingUpdateManyWithWhereWithoutCarInput = {
    where: Test_Drive_BookingScalarWhereInput
    data: XOR<Test_Drive_BookingUpdateManyMutationInput, Test_Drive_BookingUncheckedUpdateManyWithoutCarInput>
  }

  export type Working_HoursCreateWithoutDealershipInput = {
    id?: string
    day_of_week: $Enums.Day_Of_Week
    open_time: string
    close_time: string
    is_open?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Working_HoursUncheckedCreateWithoutDealershipInput = {
    id?: string
    day_of_week: $Enums.Day_Of_Week
    open_time: string
    close_time: string
    is_open?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Working_HoursCreateOrConnectWithoutDealershipInput = {
    where: Working_HoursWhereUniqueInput
    create: XOR<Working_HoursCreateWithoutDealershipInput, Working_HoursUncheckedCreateWithoutDealershipInput>
  }

  export type Working_HoursCreateManyDealershipInputEnvelope = {
    data: Working_HoursCreateManyDealershipInput | Working_HoursCreateManyDealershipInput[]
    skipDuplicates?: boolean
  }

  export type Working_HoursUpsertWithWhereUniqueWithoutDealershipInput = {
    where: Working_HoursWhereUniqueInput
    update: XOR<Working_HoursUpdateWithoutDealershipInput, Working_HoursUncheckedUpdateWithoutDealershipInput>
    create: XOR<Working_HoursCreateWithoutDealershipInput, Working_HoursUncheckedCreateWithoutDealershipInput>
  }

  export type Working_HoursUpdateWithWhereUniqueWithoutDealershipInput = {
    where: Working_HoursWhereUniqueInput
    data: XOR<Working_HoursUpdateWithoutDealershipInput, Working_HoursUncheckedUpdateWithoutDealershipInput>
  }

  export type Working_HoursUpdateManyWithWhereWithoutDealershipInput = {
    where: Working_HoursScalarWhereInput
    data: XOR<Working_HoursUpdateManyMutationInput, Working_HoursUncheckedUpdateManyWithoutDealershipInput>
  }

  export type Working_HoursScalarWhereInput = {
    AND?: Working_HoursScalarWhereInput | Working_HoursScalarWhereInput[]
    OR?: Working_HoursScalarWhereInput[]
    NOT?: Working_HoursScalarWhereInput | Working_HoursScalarWhereInput[]
    id?: StringFilter<"Working_Hours"> | string
    dealership_id?: StringFilter<"Working_Hours"> | string
    day_of_week?: EnumDay_Of_WeekFilter<"Working_Hours"> | $Enums.Day_Of_Week
    open_time?: StringFilter<"Working_Hours"> | string
    close_time?: StringFilter<"Working_Hours"> | string
    is_open?: BoolFilter<"Working_Hours"> | boolean
    created_at?: DateTimeFilter<"Working_Hours"> | Date | string
    updated_at?: DateTimeFilter<"Working_Hours"> | Date | string
  }

  export type Dealership_InfoCreateWithoutWorking_hoursInput = {
    id?: string
    name: string
    address: string
    phone_number: string
    email: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Dealership_InfoUncheckedCreateWithoutWorking_hoursInput = {
    id?: string
    name: string
    address: string
    phone_number: string
    email: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Dealership_InfoCreateOrConnectWithoutWorking_hoursInput = {
    where: Dealership_InfoWhereUniqueInput
    create: XOR<Dealership_InfoCreateWithoutWorking_hoursInput, Dealership_InfoUncheckedCreateWithoutWorking_hoursInput>
  }

  export type Dealership_InfoUpsertWithoutWorking_hoursInput = {
    update: XOR<Dealership_InfoUpdateWithoutWorking_hoursInput, Dealership_InfoUncheckedUpdateWithoutWorking_hoursInput>
    create: XOR<Dealership_InfoCreateWithoutWorking_hoursInput, Dealership_InfoUncheckedCreateWithoutWorking_hoursInput>
    where?: Dealership_InfoWhereInput
  }

  export type Dealership_InfoUpdateToOneWithWhereWithoutWorking_hoursInput = {
    where?: Dealership_InfoWhereInput
    data: XOR<Dealership_InfoUpdateWithoutWorking_hoursInput, Dealership_InfoUncheckedUpdateWithoutWorking_hoursInput>
  }

  export type Dealership_InfoUpdateWithoutWorking_hoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Dealership_InfoUncheckedUpdateWithoutWorking_hoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSaved_carsInput = {
    id?: string
    clerk_user_id: string
    email: string
    name?: string | null
    phone_number?: string | null
    profile_picture?: string | null
    role?: $Enums.User_Role
    created_at?: Date | string
    updated_at?: Date | string
    test_drive_bookings?: Test_Drive_BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSaved_carsInput = {
    id?: string
    clerk_user_id: string
    email: string
    name?: string | null
    phone_number?: string | null
    profile_picture?: string | null
    role?: $Enums.User_Role
    created_at?: Date | string
    updated_at?: Date | string
    test_drive_bookings?: Test_Drive_BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSaved_carsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSaved_carsInput, UserUncheckedCreateWithoutSaved_carsInput>
  }

  export type CarsCreateWithoutSaved_byInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuel_type: string
    transmission: string
    body_type: string
    description: string
    seating_capacity?: number | null
    status?: $Enums.Car_Status
    featured?: boolean
    images?: CarsCreateimagesInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
    test_drive_bookings?: Test_Drive_BookingCreateNestedManyWithoutCarInput
  }

  export type CarsUncheckedCreateWithoutSaved_byInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuel_type: string
    transmission: string
    body_type: string
    description: string
    seating_capacity?: number | null
    status?: $Enums.Car_Status
    featured?: boolean
    images?: CarsCreateimagesInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
    test_drive_bookings?: Test_Drive_BookingUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarsCreateOrConnectWithoutSaved_byInput = {
    where: CarsWhereUniqueInput
    create: XOR<CarsCreateWithoutSaved_byInput, CarsUncheckedCreateWithoutSaved_byInput>
  }

  export type UserUpsertWithoutSaved_carsInput = {
    update: XOR<UserUpdateWithoutSaved_carsInput, UserUncheckedUpdateWithoutSaved_carsInput>
    create: XOR<UserCreateWithoutSaved_carsInput, UserUncheckedCreateWithoutSaved_carsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSaved_carsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSaved_carsInput, UserUncheckedUpdateWithoutSaved_carsInput>
  }

  export type UserUpdateWithoutSaved_carsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerk_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUser_RoleFieldUpdateOperationsInput | $Enums.User_Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    test_drive_bookings?: Test_Drive_BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSaved_carsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerk_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUser_RoleFieldUpdateOperationsInput | $Enums.User_Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    test_drive_bookings?: Test_Drive_BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CarsUpsertWithoutSaved_byInput = {
    update: XOR<CarsUpdateWithoutSaved_byInput, CarsUncheckedUpdateWithoutSaved_byInput>
    create: XOR<CarsCreateWithoutSaved_byInput, CarsUncheckedCreateWithoutSaved_byInput>
    where?: CarsWhereInput
  }

  export type CarsUpdateToOneWithWhereWithoutSaved_byInput = {
    where?: CarsWhereInput
    data: XOR<CarsUpdateWithoutSaved_byInput, CarsUncheckedUpdateWithoutSaved_byInput>
  }

  export type CarsUpdateWithoutSaved_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuel_type?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    body_type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCar_StatusFieldUpdateOperationsInput | $Enums.Car_Status
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarsUpdateimagesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    test_drive_bookings?: Test_Drive_BookingUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateWithoutSaved_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuel_type?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    body_type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCar_StatusFieldUpdateOperationsInput | $Enums.Car_Status
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarsUpdateimagesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    test_drive_bookings?: Test_Drive_BookingUncheckedUpdateManyWithoutCarNestedInput
  }

  export type UserCreateWithoutTest_drive_bookingsInput = {
    id?: string
    clerk_user_id: string
    email: string
    name?: string | null
    phone_number?: string | null
    profile_picture?: string | null
    role?: $Enums.User_Role
    created_at?: Date | string
    updated_at?: Date | string
    saved_cars?: Saved_CarsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTest_drive_bookingsInput = {
    id?: string
    clerk_user_id: string
    email: string
    name?: string | null
    phone_number?: string | null
    profile_picture?: string | null
    role?: $Enums.User_Role
    created_at?: Date | string
    updated_at?: Date | string
    saved_cars?: Saved_CarsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTest_drive_bookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTest_drive_bookingsInput, UserUncheckedCreateWithoutTest_drive_bookingsInput>
  }

  export type CarsCreateWithoutTest_drive_bookingsInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuel_type: string
    transmission: string
    body_type: string
    description: string
    seating_capacity?: number | null
    status?: $Enums.Car_Status
    featured?: boolean
    images?: CarsCreateimagesInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
    saved_by?: Saved_CarsCreateNestedManyWithoutCarInput
  }

  export type CarsUncheckedCreateWithoutTest_drive_bookingsInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuel_type: string
    transmission: string
    body_type: string
    description: string
    seating_capacity?: number | null
    status?: $Enums.Car_Status
    featured?: boolean
    images?: CarsCreateimagesInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
    saved_by?: Saved_CarsUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarsCreateOrConnectWithoutTest_drive_bookingsInput = {
    where: CarsWhereUniqueInput
    create: XOR<CarsCreateWithoutTest_drive_bookingsInput, CarsUncheckedCreateWithoutTest_drive_bookingsInput>
  }

  export type UserUpsertWithoutTest_drive_bookingsInput = {
    update: XOR<UserUpdateWithoutTest_drive_bookingsInput, UserUncheckedUpdateWithoutTest_drive_bookingsInput>
    create: XOR<UserCreateWithoutTest_drive_bookingsInput, UserUncheckedCreateWithoutTest_drive_bookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTest_drive_bookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTest_drive_bookingsInput, UserUncheckedUpdateWithoutTest_drive_bookingsInput>
  }

  export type UserUpdateWithoutTest_drive_bookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerk_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUser_RoleFieldUpdateOperationsInput | $Enums.User_Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    saved_cars?: Saved_CarsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTest_drive_bookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerk_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUser_RoleFieldUpdateOperationsInput | $Enums.User_Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    saved_cars?: Saved_CarsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CarsUpsertWithoutTest_drive_bookingsInput = {
    update: XOR<CarsUpdateWithoutTest_drive_bookingsInput, CarsUncheckedUpdateWithoutTest_drive_bookingsInput>
    create: XOR<CarsCreateWithoutTest_drive_bookingsInput, CarsUncheckedCreateWithoutTest_drive_bookingsInput>
    where?: CarsWhereInput
  }

  export type CarsUpdateToOneWithWhereWithoutTest_drive_bookingsInput = {
    where?: CarsWhereInput
    data: XOR<CarsUpdateWithoutTest_drive_bookingsInput, CarsUncheckedUpdateWithoutTest_drive_bookingsInput>
  }

  export type CarsUpdateWithoutTest_drive_bookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuel_type?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    body_type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCar_StatusFieldUpdateOperationsInput | $Enums.Car_Status
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarsUpdateimagesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    saved_by?: Saved_CarsUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateWithoutTest_drive_bookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuel_type?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    body_type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCar_StatusFieldUpdateOperationsInput | $Enums.Car_Status
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarsUpdateimagesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    saved_by?: Saved_CarsUncheckedUpdateManyWithoutCarNestedInput
  }

  export type Saved_CarsCreateManyUserInput = {
    id?: string
    car_id: string
    saved_at?: Date | string
  }

  export type Test_Drive_BookingCreateManyUserInput = {
    id?: string
    car_id: string
    booking_date: Date | string
    start_time: string
    end_time: string
    status?: $Enums.Booking_Status
    notes?: string | null
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type Saved_CarsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    saved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarsUpdateOneRequiredWithoutSaved_byNestedInput
  }

  export type Saved_CarsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    car_id?: StringFieldUpdateOperationsInput | string
    saved_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Saved_CarsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    car_id?: StringFieldUpdateOperationsInput | string
    saved_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Test_Drive_BookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: EnumBooking_StatusFieldUpdateOperationsInput | $Enums.Booking_Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarsUpdateOneRequiredWithoutTest_drive_bookingsNestedInput
  }

  export type Test_Drive_BookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    car_id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: EnumBooking_StatusFieldUpdateOperationsInput | $Enums.Booking_Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Test_Drive_BookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    car_id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: EnumBooking_StatusFieldUpdateOperationsInput | $Enums.Booking_Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Saved_CarsCreateManyCarInput = {
    id?: string
    user_id: string
    saved_at?: Date | string
  }

  export type Test_Drive_BookingCreateManyCarInput = {
    id?: string
    user_id: string
    booking_date: Date | string
    start_time: string
    end_time: string
    status?: $Enums.Booking_Status
    notes?: string | null
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type Saved_CarsUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    saved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSaved_carsNestedInput
  }

  export type Saved_CarsUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    saved_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Saved_CarsUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    saved_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Test_Drive_BookingUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: EnumBooking_StatusFieldUpdateOperationsInput | $Enums.Booking_Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTest_drive_bookingsNestedInput
  }

  export type Test_Drive_BookingUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: EnumBooking_StatusFieldUpdateOperationsInput | $Enums.Booking_Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Test_Drive_BookingUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: EnumBooking_StatusFieldUpdateOperationsInput | $Enums.Booking_Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Working_HoursCreateManyDealershipInput = {
    id?: string
    day_of_week: $Enums.Day_Of_Week
    open_time: string
    close_time: string
    is_open?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Working_HoursUpdateWithoutDealershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    day_of_week?: EnumDay_Of_WeekFieldUpdateOperationsInput | $Enums.Day_Of_Week
    open_time?: StringFieldUpdateOperationsInput | string
    close_time?: StringFieldUpdateOperationsInput | string
    is_open?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Working_HoursUncheckedUpdateWithoutDealershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    day_of_week?: EnumDay_Of_WeekFieldUpdateOperationsInput | $Enums.Day_Of_Week
    open_time?: StringFieldUpdateOperationsInput | string
    close_time?: StringFieldUpdateOperationsInput | string
    is_open?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Working_HoursUncheckedUpdateManyWithoutDealershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    day_of_week?: EnumDay_Of_WeekFieldUpdateOperationsInput | $Enums.Day_Of_Week
    open_time?: StringFieldUpdateOperationsInput | string
    close_time?: StringFieldUpdateOperationsInput | string
    is_open?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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