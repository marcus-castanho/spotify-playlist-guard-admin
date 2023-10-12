import type { Meta, StoryObj } from '@storybook/react';
import { ButtonSecondary } from '@/components/ButtonSecondary';

const meta = {
    title: 'Components/ButtonSecondary',
    component: ButtonSecondary,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ButtonSecondary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
    args: { content: 'Button' },
};
