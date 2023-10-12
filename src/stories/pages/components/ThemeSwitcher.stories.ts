import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

const meta = {
    title: 'Components/ThemeSwitcher',
    component: ThemeSwitcher,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Switcher: Story = {
    args: {},
};
