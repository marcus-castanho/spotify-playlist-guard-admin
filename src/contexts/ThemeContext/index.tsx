import React, { ReactNode } from 'react';
import { Theme, ThemeProvider } from './Provider';

export * from './Provider';

export const THEME_COOKIE_KEY = 's-p-guard-admin_theme' as const;

export function withInitialTheme(
    Component: typeof ThemeProvider,
    { initialTheme }: { initialTheme: Theme },
) {
    const ComponentWrapper = ({ children }: { children?: ReactNode }) => {
        return <Component initialTheme={initialTheme}>{children}</Component>;
    };

    return ComponentWrapper;
}
