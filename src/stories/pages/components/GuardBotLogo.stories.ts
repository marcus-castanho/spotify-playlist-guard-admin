import type { Meta, StoryObj } from '@storybook/react';
import { GuardBotLogo } from '@/components/GuardBotLogo';
import { withColorScheme } from './decorators';

const meta = {
    title: 'Components/GuardBotLogo',
    component: GuardBotLogo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [withColorScheme],
} satisfies Meta<typeof GuardBotLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Logo: Story = {
    args: {},
    decorators: [withColorScheme],
};
