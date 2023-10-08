import type { Meta, StoryObj } from '@storybook/react';
import { ButtonSecondary } from '@/components/ButtonSecondary';
import { withColorScheme } from './decorators';

const meta = {
    title: 'Components/ButtonSecondary',
    component: ButtonSecondary,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [withColorScheme],
} satisfies Meta<typeof ButtonSecondary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
    args: { content: 'Button' },
    decorators: [withColorScheme],
};
