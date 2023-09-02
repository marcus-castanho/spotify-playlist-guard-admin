import { Unauthorized } from '@/errors';
import { getRequestCookie } from '@/storage/cookies/server';
import { NextRequest } from 'next/server';

export const validateSession = (req: NextRequest) => {
    const token = getRequestCookie('s-p-guard-admin:token', req);

    if (!token) throw new Unauthorized({});
};
