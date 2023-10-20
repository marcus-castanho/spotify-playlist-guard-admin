import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from '@/components/FormField';

const meta = {
    title: 'Components/FormField/Input/TextInput',
    component: FormField.TextInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof FormField.TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: 'example',
        defaultValue: 'Example',
        required: true,
        placeHolder: 'Type some text',
    },
};
