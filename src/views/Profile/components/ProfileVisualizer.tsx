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
                <FormField.Root inputId="name" label="Name">
                    <FormField.TextInput
                        inputId="name"
                        defaultValue={defaultForm.name}
                        onChange={() => {}}
                        disabled
                    />
                </FormField.Root>
            </FormRow>
            <FormRow columns={1}>
                <FormField.Root inputId="email" label="e-mail">
                    <FormField.TextInput
                        inputId="email"
                        defaultValue={defaultForm.email}
                        onChange={() => {}}
                        disabled
                    />
                </FormField.Root>
            </FormRow>
            <div className="flex flex-col justify-center p-4 sm:flex-row">
                <ButtonPrimary type="submit" onClick={() => onEdit()}>
                    Edit
                </ButtonPrimary>
            </div>
        </div>
    );
};
