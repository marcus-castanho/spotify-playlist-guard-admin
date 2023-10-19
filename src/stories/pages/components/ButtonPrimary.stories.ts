import type { Meta, StoryObj } from '@storybook/react';
import { ButtonPrimary } from '@/components/ButtonPrimary';

const meta = {
    title: 'Components/ButtomPrimary',
    component: ButtonPrimary,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ButtonPrimary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
    args: { children: 'Button' },
};
