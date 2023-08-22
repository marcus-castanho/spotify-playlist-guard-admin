import React, { ReactNode, ComponentType, PropsWithChildren } from 'react';
import { AuthProvider } from './AuthContext';
import { ModalProvider } from './ModalContext';

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
        <ComposedContexts components={[AuthProvider, ModalProvider]}>
            {children}
        </ComposedContexts>
    );
}
