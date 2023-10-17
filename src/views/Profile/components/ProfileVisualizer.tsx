import React, { FC } from 'react';
import { ButtonPrimary } from '@/components/ButtonPrimary';
import { FormRow } from '@/components/FormRow';
import { TextInputField } from '@/components/TextInputField';

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
                <TextInputField
                    id="name"
                    label="Name"
                    defaultValue={defaultForm.name}
                    onChange={() => {}}
                    disabled
                />
            </FormRow>
            <FormRow columns={1}>
                <TextInputField
                    id="email"
                    label="E-mail"
                    defaultValue={defaultForm.email}
                    onChange={() => {}}
                    disabled
                />
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
