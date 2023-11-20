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
        options: {
            next: { revalidate: 3600 },
        },
    },
}: {
    path: string;
    authToken?: string;
    options?: RequestInit;
    fetchType?: FetchType;
}) {
    const apiUrl = PROXY_URL;
    const headers = options?.headers;

    if (!authToken) {
        return fetch(`${apiUrl}${path}`, {
            ...options,
            ...fetchType.options,
        });
    }

    return fetch(`${apiUrl}${path}`, {
        ...options,
        headers: {
            Authorization: `Bearer ${authToken}`,
            ...headers,
        },
        ...fetchType.options,
    });
}
