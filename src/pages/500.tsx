/**
 * Custom 500 page is still not available in /app dir. Maintain this custom 500 page for now.
 */

import React from 'react';
import { InternalServerError } from '@/views/InternalServerError';
import { getCookie } from '@/storage/cookies/client';
import { TOKEN_COOKIE_KEY } from '@/contexts/AuthContext';
import { Theme } from '@/contexts/ThemeContext';

export default function Custom500() {
    const theme = getCookie(TOKEN_COOKIE_KEY) || 'light';

    return <InternalServerError theme={theme as Theme} />;
}
