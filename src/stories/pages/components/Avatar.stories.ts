import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@/components/Avatar';

const meta = {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { size: 52 },
};

export const Example: Story = {
    args: {
        size: 52,
        src: 'https://raw.githubusercontent.com/marcus-castanho/spotify_playlist_guard/main/public/images/guardBot-1db954-circle.png',
    },
};
