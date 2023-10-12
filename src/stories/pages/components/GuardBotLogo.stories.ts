import type { Meta, StoryObj } from '@storybook/react';
import { GuardBotLogo } from '@/components/GuardBotLogo';

const meta = {
    title: 'Components/GuardBotLogo',
    component: GuardBotLogo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof GuardBotLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Logo: Story = {
    args: {},
};
