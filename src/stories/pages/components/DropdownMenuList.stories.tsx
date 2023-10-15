import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenuList } from '@/components/DropdownMenuList';
import { Avatar } from '@/components/Avatar';

const meta = {
    title: 'Components/DropdownMenuList',
    component: DropdownMenuList,
    tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenuList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        itemsGroups: [
            ['Group1 - Item1', 'Group1 - Item2'],
            ['Group2 - Item1', 'Group2 - Item2', 'Group2 - Item3'],
            ['Group3 - Item1'],
        ],
    },
};

export const WithHeader: Story = {
    args: {
        header: (
            <div className="flex items-center gap-2">
                <Avatar size={30} fillColor="white" />
                {'Test user'}
            </div>
        ),
        itemsGroups: [['Profile', 'Configuration'], ['Sign out']],
    },
};
