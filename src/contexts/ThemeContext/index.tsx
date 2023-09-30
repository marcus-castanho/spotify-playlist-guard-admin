import React, { ReactNode } from 'react';
import { Theme, ThemeProvider } from './Provider';

export * from './Provider';

export const THEME_COOKIE_KEY = 's-p-guard-admin_theme' as const;

export function withTheme(
    Component: typeof ThemeProvider,
    { theme }: { theme: Theme },
) {
    const ComponentWrapper = ({ children }: { children?: ReactNode }) => {
        return <Component theme={theme}>{children}</Component>;
    };

    return ComponentWrapper;
}
