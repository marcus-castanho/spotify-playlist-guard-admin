import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from '@/components/FormField';

const meta = {
    title: 'Components/FormField/Input/PasswordInput',
    component: FormField.PasswordInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof FormField.PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { id: 'example', required: true, placeHolder: 'Type the password' },
};
