import { getRequestCookie } from '@/storage/cookies/server';
import { NextRequest } from 'next/server';

export const sessionIsActive = (req: NextRequest) => {
    const token = getRequestCookie('s-p-guard-admin:token', req);

    return !!token;
};
