import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '@/components/Toast';

const meta = {
    title: 'Components/Toast',
    component: Toast,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
    args: {
        display: true,
        message: 'Toast message',
        type: 'success',
    },
};

export const Warning: Story = {
    args: {
        display: true,
        message: 'Toast message',
        type: 'warning',
    },
};

export const Info: Story = {
    args: {
        display: true,
        message: 'Toast message',
        type: 'info',
    },
};

export const Error: Story = {
    args: {
        display: true,
        message: 'Toast message',
        type: 'error',
    },
};
