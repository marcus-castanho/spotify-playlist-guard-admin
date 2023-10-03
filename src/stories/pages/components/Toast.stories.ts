import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '@/components/Toast';
import { withColorScheme } from './decorators';

const meta = {
    title: 'Components/Toast',
    component: Toast,
    parameters: {
        layout: 'centered',
        docs: {
            story: {
                iframeHeight: 'auto',
            },
        },
    },
    tags: ['autodocs'],
    decorators: [withColorScheme],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
    args: {
        display: true,
        message: 'Toast message',
        type: 'success',
    },
    decorators: [withColorScheme],
};

export const Warning: Story = {
    args: {
        display: true,
        message: 'Toast message',
        type: 'warning',
    },
    decorators: [withColorScheme],
};

export const Info: Story = {
    args: {
        display: true,
        message: 'Toast message',
        type: 'info',
    },
    decorators: [withColorScheme],
};

export const Error: Story = {
    args: {
        display: true,
        message: 'Toast message',
        type: 'error',
    },
    decorators: [withColorScheme],
};
