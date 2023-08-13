import { getCookie } from '@/storage/cookies/client';
import { getRequestCookie } from '@/storage/cookies/server';
import { NextRequest } from 'next/server';

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
        : getCookie('s-p-guard-admin:token');

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
