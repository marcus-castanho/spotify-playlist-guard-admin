import React, { useEffect } from 'react';
import { Decorator } from '@storybook/react';
import { AppContextProvider } from '@/contexts';
import { CookiesProvider } from '@/contexts/CookiesContext';
import { ThemeProvider, withTheme } from '@/contexts/ThemeContext';
import { emitBackgroundChange } from './events';

export const useWithColorScheme: Decorator = (Story, context) => {
    const { backgrounds } = context.globals;
    const backgroundTheme = backgrounds?.value === 'black' ? 'dark' : 'light';
    const htmlElement = document.documentElement;

    /**Update story's background on manual theme switch via ThemeSwitcher */
    const onHtmlThemeClassChange: MutationCallback = (mutations) => {
        const htmlClassMutation = mutations.find(({ type, attributeName }) => {
            return type === 'attributes' && attributeName === 'class';
        });

        if (!htmlClassMutation) return;

        const currentHtmlElement = htmlClassMutation.target as HTMLElement;

        const theme = currentHtmlElement.classList.contains('dark')
            ? 'dark'
            : 'light';

        if (theme !== backgroundTheme) {
            emitBackgroundChange(theme);
        }
    };

    useEffect(() => {
        const observer = new MutationObserver(onHtmlThemeClassChange);

        observer.observe(htmlElement, { attributes: true });

        return () => observer.disconnect();
    }, [backgroundTheme]);

    return (
        <AppContextProvider
            initialTheme={backgroundTheme}
            providers={[
                CookiesProvider,
                withTheme(ThemeProvider, { initialTheme: backgroundTheme }),
            ]}
        >
            <Story />
        </AppContextProvider>
    );
};
