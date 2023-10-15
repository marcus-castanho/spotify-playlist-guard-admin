import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenuList } from '@/components/DropdownMenuList';

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
