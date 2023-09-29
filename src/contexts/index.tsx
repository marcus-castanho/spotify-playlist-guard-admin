import React, { ReactNode, ComponentType, PropsWithChildren } from 'react';
import { AuthProvider } from './AuthContext';
import { ModalProvider } from './ModalContext';
import { ToastProvider } from './ToastContext';
import { QueryProvider } from './QueryContext';
import { CookiesProvider } from './CookiesContext';
import { ThemeProvider, Theme, withTheme } from './ThemeContext';

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

export type AppContextProviderProps = { children: ReactNode; theme: Theme };

export function AppContextProvider({
    children,
    theme,
}: AppContextProviderProps) {
    return (
        <ComposedContexts
            components={[
                CookiesProvider,
                QueryProvider,
                AuthProvider,
                withTheme(ThemeProvider, { theme }),
                ToastProvider,
                ModalProvider,
            ]}
        >
            {children}
        </ComposedContexts>
    );
}
