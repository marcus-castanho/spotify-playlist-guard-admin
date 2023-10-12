import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInputField } from '@/components/PasswordInputField';

const meta = {
    title: 'Components/PasswordInputField',
    component: PasswordInputField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PasswordInputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputField: Story = {
    args: { id: 'password', label: 'Password' },
};
