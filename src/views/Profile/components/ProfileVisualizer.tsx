import React, { FC } from 'react';
import { ButtonPrimary } from '@/components/ButtonPrimary';
import { FormRow } from '@/components/FormRow';
import { FormField } from '@/components/FormField';

type ProfileVisualizerProps = {
    defaultForm: { name: string; email: string };
    onEdit: () => void;
};

export const ProfileVisualizer: FC<ProfileVisualizerProps> = ({
    defaultForm,
    onEdit,
}) => {
    return (
        <div>
            <FormRow columns={1}>
                <FormField.Root id="name" label="Name" required>
                    <FormField.TextInput
                        id="name"
                        defaultValue={defaultForm.name}
                        required
                        onChange={() => {}}
                        disabled
                    />
                </FormField.Root>
            </FormRow>
            <FormRow columns={1}>
                <FormField.Root id="email" label="e-mail" required>
                    <FormField.TextInput
                        id="email"
                        defaultValue={defaultForm.email}
                        required
                        onChange={() => {}}
                        disabled
                    />
                </FormField.Root>
            </FormRow>
            <div className="flex flex-col justify-center p-4 sm:flex-row">
                <ButtonPrimary
                    content="Edit"
                    type="submit"
                    onClick={() => onEdit()}
                />
            </div>
        </div>
    );
};
