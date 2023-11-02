import React, { ComponentProps, ReactNode } from 'react';
import { AuthProvider } from './Provider';

export * from './Provider';

export const TOKEN_COOKIE_KEY = 's-p-guard-admin_token' as const;

export function withDefaultUser(
    Component: typeof AuthProvider,
    { defaultUser }: ComponentProps<typeof AuthProvider>,
) {
    const ComponentWrapper = ({ children }: { children?: ReactNode }) => {
        return <Component defaultUser={defaultUser}>{children}</Component>;
    };

    return ComponentWrapper;
}
