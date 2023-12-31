import React, { ComponentProps, ReactNode } from 'react';
import { AppRouterContextProviderMock } from './AppRouterContextProviderMock';
import { AppContextProvider } from '@/contexts';
import './windowMock';

export const INITIAL_THEME: ComponentProps<
    typeof AppContextProvider
>['initialTheme'] = 'light';

export const DEFAULT_USER: NonNullable<
    ComponentProps<typeof AppContextProvider>['defaultUser']
> = {
    id: '00000000-0000-0000-0000-000000000000',
    name: 'Test user',
    email: 'test@test.com',
    roles: ['admin'],
    createdAt: '2023-08-13T02:31:45.610Z',
    updatedAt: '2023-10-11T01:18:06.082Z',
};

type ContextsProvidersMockProps = {
    children: ReactNode;
    initialTheme?: ComponentProps<typeof AppContextProvider>['initialTheme'];
    defaultUser?: ComponentProps<typeof AppContextProvider>['defaultUser'];
};
export function ContextsProvidersMock({
    children,
    initialTheme = INITIAL_THEME,
    defaultUser = DEFAULT_USER,
}: ContextsProvidersMockProps) {
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
