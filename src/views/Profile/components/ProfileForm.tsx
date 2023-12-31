import React, { FC, useState } from 'react';
import { patchUser } from '@/services/spotifyPlaylistGuardApi/routes/patchUser';
import { useCookies } from '@/contexts/CookiesContext';
import {
    handleClientError,
    useClientErrorHandler,
} from '@/errors/clientErrorHandlers';
import { useToast } from '@/contexts/ToastContext';
import { TOKEN_COOKIE_KEY } from '@/contexts/AuthContext';
import { FormRow } from '@/components/FormRow';
import { ButtonPrimary } from '@/components/ButtonPrimary';
import { ButtonSecondary } from '@/components/ButtonSecondary';
import { FormField } from '@/components/FormField';

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
    const { getCookie } = useCookies();
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
                handleClientError(error);
                toast('Error while performing this operation', 'error');
            })
            .finally(() => setIsSubmitting(false));
    };

    return (
        <form onSubmit={handleSaveUserInfo}>
            <FormRow columns={1}>
                <FormField.Root inputId="name" label="Name" required>
                    <FormField.TextInput
                        inputId="name"
                        defaultValue={defaultForm.name}
                        required
                        onChange={(value) =>
                            setForm((state) => ({
                                ...state,
                                name: value,
                            }))
                        }
                    />
                </FormField.Root>
            </FormRow>
            <FormRow columns={1}>
                <FormField.Root inputId="email" label="e-mail" required>
                    <FormField.TextInput
                        inputId="email"
                        defaultValue={defaultForm.email}
                        required
                        onChange={(value) =>
                            setForm((state) => ({
                                ...state,
                                email: value,
                            }))
                        }
                    />
                </FormField.Root>
            </FormRow>
            <div className="flex flex-col gap-3.5 p-4 sm:flex-row">
                <ButtonPrimary type="submit" disabled={isSubmiting}>
                    Save
                </ButtonPrimary>
                <ButtonSecondary onClick={() => onCancel()}>
                    Cancel
                </ButtonSecondary>
            </div>
        </form>
    );
};
