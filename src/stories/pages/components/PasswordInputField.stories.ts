import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInputField } from '@/components/PasswordInputField';
import { withColorScheme } from './decorators';

const meta = {
    title: 'Components/PasswordInputField',
    component: PasswordInputField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [withColorScheme],
} satisfies Meta<typeof PasswordInputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputField: Story = {
    //@ts-ignore - theme arg is passed in withColorScheme decorator
    args: { id: 'password', label: 'Password' },
    decorators: [withColorScheme],
};
