import React from 'react';
import { Decorator } from '@storybook/react';

export const withColorScheme: Decorator = (Story, context) => {
    const { theme } = context.globals;

    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    return <Story />;
};
