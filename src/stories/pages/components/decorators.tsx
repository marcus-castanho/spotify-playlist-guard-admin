import React from 'react';
import { Decorator } from '@storybook/react';

export const withColorScheme: Decorator = (Story, context) => {
    const { backgrounds } = context.globals;
    const { args } = context;
    const theme = backgrounds?.value === 'black' ? 'dark' : 'light';

    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    /**Components in the application that have variations for themes accept a 'theme' prop */
    return <Story args={{ ...args, theme }} />;
};
