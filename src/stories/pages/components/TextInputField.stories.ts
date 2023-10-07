import type { Meta, StoryObj } from '@storybook/react';
import { TextInputField } from '@/components/TextInputField';
import { withColorScheme } from './decorators';

const meta = {
    title: 'Components/TextInputField',
    component: TextInputField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [withColorScheme],
} satisfies Meta<typeof TextInputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputField: Story = {
    args: { id: 'example-id', label: 'Name' },
    decorators: [withColorScheme],
};
