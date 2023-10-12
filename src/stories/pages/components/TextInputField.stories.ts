import type { Meta, StoryObj } from '@storybook/react';
import { TextInputField } from '@/components/TextInputField';

const meta = {
    title: 'Components/TextInputField',
    component: TextInputField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TextInputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputField: Story = {
    args: { id: 'name', label: 'Name' },
};
