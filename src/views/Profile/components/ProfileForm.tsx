'use client';

import React, { FC, useState } from 'react';
import { patchUser } from '@/services/spotifyPlaylistGuardApi/routes/patchUser';
import { getCookie } from '@/storage/cookies/client';
import {
    handleUncaughtClientError,
    useClientErrorHandler,
} from '@/errors/clientErrorHandlers';
import { useToast } from '@/contexts/ToastContext';
import { TOKEN_COOKIE_KEY } from '@/contexts/AuthContext';
import { FormRow } from '@/components/FormRow';
import { TextInputField } from '@/components/TextInputField';
import { ButtonPrimary } from '@/components/ButtonPrimary';
import { ButtonSecondary } from '@/components/ButtonSecondary';

export type ProfileFormProps = {
    id: string;
    defaultForm: { name: string; email: string };
    onSubmit: () => void;
    onCancel: () => void;
};

export const ProfileForm: FC<ProfileFormProps> = ({
    id,
    defaultForm,
    onSubmit,
    onCancel,
}) => {
    const token = getCookie(TOKEN_COOKIE_KEY) || '';
    const [isSubmiting, setIsSubmitting] = useState(false);
    const { handleGuardApiResponse } = useClientErrorHandler();
    const { toast } = useToast();
    const [form, setForm] = useState(defaultForm);

    const handleSaveUserInfo = async (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();
        setIsSubmitting(true);

        await patchUser({
            id,
            ...form,
            authToken: token,
        })
            .then(handleGuardApiResponse)
            .then(() => toast('Successfully updated.', 'success'))
            .then(() => onSubmit())
            .catch((error) => {
                handleUncaughtClientError(error);
                toast('Error while performing this operation', 'error');
            })
            .finally(() => setIsSubmitting(false));
    };

    return (
        <form onSubmit={handleSaveUserInfo}>
            <FormRow columns={1}>
                <TextInputField
                    id="name"
                    label="Name"
                    defaultValue={defaultForm.name}
                    required
                    onChange={(value) =>
                        setForm((state) => ({
                            ...state,
                            name: value,
                        }))
                    }
                />
            </FormRow>
            <FormRow columns={1}>
                <TextInputField
                    id="email"
                    label="E-mail"
                    defaultValue={defaultForm.email}
                    required
                    onChange={(value) =>
                        setForm((state) => ({
                            ...state,
                            email: value,
                        }))
                    }
                />
            </FormRow>
            <div className="flex flex-col gap-3.5 p-4 sm:flex-row">
                <ButtonPrimary
                    content="Save"
                    type="submit"
                    disabled={isSubmiting}
                    stretch
                />
                <ButtonSecondary
                    content="Cancel"
                    onClick={() => onCancel()}
                    stretch
                />
            </div>
        </form>
    );
};
