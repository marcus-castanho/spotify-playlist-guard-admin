import { FetchType } from '.';

export const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
export const PROXY_URL = `${
    process.env.NEXT_PUBLIC_APP_URL || ''
}/api/external`;

export function request({
    path,
    authToken,
    options,
    fetchType = {
        type: 'SSG',
    },
}: {
    path: string;
    authToken?: string;
    options?: RequestInit;
    fetchType?: FetchType;
}) {
    const apiUrl = PROXY_URL;
    const headers = options?.headers;
    const { type } = fetchType;
    const fetchTypeOptions = {
        ...(type === 'SSR' ? { cache: 'no-store' } : {}),
        ...(type === 'SSG' && fetchType?.revalidate
            ? {
                  next: {
                      revalidate: fetchType.revalidate,
                  },
              }
            : {}),
    };

    if (!authToken) {
        return fetch(`${apiUrl}${path}`, {
            ...options,
            ...{ fetchTypeOptions },
        });
    }

    return fetch(`${apiUrl}${path}`, {
        ...options,
        headers: {
            Authorization: `Bearer ${authToken}`,
            ...headers,
        },
        ...{ fetchTypeOptions },
    });
}
