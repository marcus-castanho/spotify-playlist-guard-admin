import React, { ReactNode, ComponentType, PropsWithChildren } from 'react';
import { AuthProvider, withDefaultUser } from './AuthContext';
import { ModalProvider } from './ModalContext';
import { ToastProvider } from './ToastContext';
import { QueryProvider } from './QueryContext';
import { CookiesProvider } from './CookiesContext';
import { ThemeProvider, Theme, withInitialTheme } from './ThemeContext';
import { User } from '@/services/spotifyPlaylistGuardApi';

type ComposedContextsProps = {
    components: ComponentType<PropsWithChildren<unknown>>[];
    children: ReactNode;
};

function ComposedContexts(props: ComposedContextsProps) {
    const { components, children } = props;

    return (
        <>
            {components.reduceRight((acc, CurrContext) => {
                return <CurrContext>{acc}</CurrContext>;
            }, children)}
        </>
    );
}

export type AppContextProviderProps = {
    children: ReactNode;
    initialTheme: Theme;
    defaultUser?: User;
    providers?: ComposedContextsProps['components'];
};

export function AppContextProvider({
    children,
    initialTheme,
    defaultUser,
    providers = [
        CookiesProvider,
        QueryProvider,
        AuthProvider,
        withDefaultUser(AuthProvider, { defaultUser }),
        withInitialTheme(ThemeProvider, { initialTheme }),
        ToastProvider,
        ModalProvider,
    ],
}: AppContextProviderProps) {
    return (
        <ComposedContexts components={providers}>{children}</ComposedContexts>
    );
}
