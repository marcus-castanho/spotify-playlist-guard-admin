import React, { ReactNode } from 'react';
import { User } from '@/services/spotifyPlaylistGuardApi';
import { AuthProvider } from './Provider';

export * from './Provider';

export const TOKEN_COOKIE_KEY = 's-p-guard-admin_token' as const;

export function withDefaultUser(
    Component: typeof AuthProvider,
    { defaultUser }: { defaultUser?: User },
) {
    const ComponentWrapper = ({ children }: { children?: ReactNode }) => {
        return <Component defaultUser={defaultUser}>{children}</Component>;
    };

    return ComponentWrapper;
}
