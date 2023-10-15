import React from 'react';
import { Decorator } from '@storybook/react';
import { AppContextProvider } from '@/contexts';
import { useStoryBackgroundUpdate } from './hooks';

export const useWithContexts: Decorator = (Story, context) => {
    const { backgrounds } = context.globals;
    const backgroundTheme = backgrounds?.value === 'black' ? 'dark' : 'light';
    useStoryBackgroundUpdate(backgroundTheme);

    return (
        <AppContextProvider initialTheme={backgroundTheme}>
            <Story />
        </AppContextProvider>
    );
};
