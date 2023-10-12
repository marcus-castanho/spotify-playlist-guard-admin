import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { withColorScheme } from './decorators';

const meta = {
    title: 'Components/ThemeSwitcher',
    component: ThemeSwitcher,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [withColorScheme],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Switcher: Story = {
    args: {},
    decorators: [withColorScheme],
};
