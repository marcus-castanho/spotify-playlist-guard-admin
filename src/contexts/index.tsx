import React, { ReactNode, ComponentType, PropsWithChildren } from 'react';
import { AuthProvider } from './AuthContext';
import { ModalProvider } from './ModalContext';
import { ToastProvider } from './ToastContext';
import { QueryProvider } from './QueryContext';

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

export type AppContextProviderProps = { children: ReactNode };

export function AppContextProvider({ children }: AppContextProviderProps) {
    return (
        <ComposedContexts
            components={[
                QueryProvider,
                AuthProvider,
                ToastProvider,
                ModalProvider,
            ]}
        >
            {children}
        </ComposedContexts>
    );
}
