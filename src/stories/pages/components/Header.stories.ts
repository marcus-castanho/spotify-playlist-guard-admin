import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '@/components/Header';

const meta = {
    title: 'Components/Header',
    component: Header,
    tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { user: null },
};

export const Authenticated: Story = {
    args: {
        user: {
            id: '00000000-0000-0000-0000-000000000000',
            name: 'Test user',
            email: 'test@test.com',
            roles: ['admin'],
            createdAt: '2023-08-13T02:31:45.610Z',
            updatedAt: '2023-10-11T01:18:06.082Z',
        },
    },
};
