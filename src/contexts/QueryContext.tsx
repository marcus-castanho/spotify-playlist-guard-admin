'use client';

import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export type QueryKey = never;

export type QueryProviderProps = {
    children?: ReactNode;
};

export function QueryProvider({ children }: QueryProviderProps) {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
