import { getCookie } from '@/storage/cookies/client';
import { getPageCookie, getRequestCookie } from '@/storage/cookies/server';
import { NextRequest } from 'next/server';

/**
 * Request function can be called from within a handler/middleware, client component or server component. If function is called from a route handler, the request instance must be passed down.
 */
export function request({
    path,
    authenticated = true,
    options,
    req,
}: {
    path: string;
    authenticated?: boolean;
    options?: RequestInit;
    req?: NextRequest;
}) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
    const headers = options?.headers;
    const token = req
        ? getRequestCookie('s-p-guard-admin:token', req)
        : getCookie('s-p-guard-admin:token') ||
          getPageCookie('s-p-guard-admin:token');

    if (!authenticated) {
        return fetch(`${apiUrl}${path}`, {
            ...options,
        });
    }

    return fetch(`${apiUrl}${path}`, {
        ...options,
        headers: {
            Authorization: `Bearer ${token}`,
            ...headers,
        },
    });
}
