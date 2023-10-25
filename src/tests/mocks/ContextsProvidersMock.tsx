import React, { ComponentProps, ReactNode } from 'react';
import { AppRouterContextProviderMock } from './AppRouterContextProviderMock';
import { AppContextProvider } from '@/contexts';
import './windoMock';

const initialTheme: ComponentProps<typeof AppContextProvider>['initialTheme'] =
    'light';

const defaultUser: ComponentProps<typeof AppContextProvider>['defaultUser'] = {
    id: '00000000-0000-0000-0000-000000000000',
    name: 'Test user',
    email: 'test@test.com',
    roles: ['admin'],
    createdAt: '2023-08-13T02:31:45.610Z',
    updatedAt: '2023-10-11T01:18:06.082Z',
};

export function ContextsProvidersMock({ children }: { children: ReactNode }) {
    const push = jest.fn();

    return (
        <AppRouterContextProviderMock router={{ push }}>
            <AppContextProvider
                initialTheme={initialTheme}
                defaultUser={defaultUser}
            >
                {children}
            </AppContextProvider>
        </AppRouterContextProviderMock>
    );
}
