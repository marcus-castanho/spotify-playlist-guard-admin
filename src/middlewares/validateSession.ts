import { TOKEN_COOKIE_KEY } from '@/contexts/AuthContext';
import { Unauthorized } from '@/errors';
import { getRequestCookie } from '@/storage/cookies/server';
import { NextRequest } from 'next/server';

export const validateSession = (req: NextRequest) => {
    const token = getRequestCookie(TOKEN_COOKIE_KEY, req);

    if (!token) throw new Unauthorized({});
};
