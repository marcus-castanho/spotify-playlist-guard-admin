import React from 'react';
import { Decorator } from '@storybook/react';
import { AppContextProvider } from '@/contexts';
import { CookiesProvider } from '@/contexts/CookiesContext';
import { ThemeProvider, withTheme } from '@/contexts/ThemeContext';

export const withColorScheme: Decorator = (Story, context) => {
    const { backgrounds } = context.globals;
    const theme = backgrounds?.value === 'black' ? 'dark' : 'light';

    return (
        <AppContextProvider
            initialTheme={theme}
            providers={[
                CookiesProvider,
                withTheme(ThemeProvider, { initialTheme: theme }),
            ]}
        >
            <Story />
        </AppContextProvider>
    );
};
