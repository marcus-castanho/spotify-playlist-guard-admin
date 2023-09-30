import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';
import '../src/stories/styles/globals.css';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Global theme for components',
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                icon: 'mirror',
                items: ['light', 'dark'],
                dynamicTitle: true,
            },
        },
    },
};

export default preview;
