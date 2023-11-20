export * from './routes';

export type ReturnValue<T = never> =
    | {
          success: true;
          status: number;
          data: [T] extends [never] ? undefined : T;
      }
    | {
          success: false;
          status: number;
          data: null;
      };

export type FetchType =
    | {
          type: 'SSR';
          options: { cache: NonNullable<RequestCache> };
      }
    | {
          type: 'SSG';
          options: { next: NextFetchRequestConfig };
      };

export type Fetch<R, T = never> = [T] extends [never]
    ? (fetchType?: FetchType) => Promise<ReturnValue<R>>
    : (payload: T, fetchType?: FetchType) => Promise<ReturnValue<R>>;
