import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '@/components/Header';
import { withColorScheme } from './decorators';

const meta = {
    title: 'Components/Header',
    component: Header,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [withColorScheme],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    decorators: [withColorScheme],
};
