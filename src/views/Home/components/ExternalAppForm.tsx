import React, { FC, useState } from 'react';
import {
    ExternalApp,
    postExternalApp,
    patchExternalApp,
} from '@/services/spotifyPlaylistGuardApi';
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

export type ExternalAppFormProps = {
    id?: string;
    defaultForm: Pick<ExternalApp, 'name' | 'recoverEmail' | 'baseUrl'>;
    onSubmit: () => void;
    onCancel: () => void;
};

export const ExternalAppForm: FC<ExternalAppFormProps> = ({
    id,
    defaultForm,
    onSubmit,
    onCancel,
}) => {
    const { getCookie } = useCookies();
    const token = getCookie(TOKEN_COOKIE_KEY) || '';
    const { handleGuardApiResponse } = useClientErrorHandler();
    const [form, setForm] = useState(defaultForm);
    const { toast } = useToast();
    const [isSubmiting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        if (id) {
            await patchExternalApp({
                id,
                ...form,
                authToken: token,
            })
                .then(() => toast('Successfully updated.', 'success'))
                .then(() => onSubmit())
                .catch((error) => {
                    handleClientError(error);
                    toast('Error while performing this operation', 'error');
                })
                .finally(() => setIsSubmitting(false));

            return;
        }

        await postExternalApp({
            ...form,
            authToken: token,
        })
            .then(handleGuardApiResponse)
            .then(() => toast('Successfully created.', 'success'))
            .then(() => onSubmit())
            .catch((error) => {
                handleClientError(error);
                toast('Error while performing this operation', 'error');
            })
            .finally(() => setIsSubmitting(false));
    };

    return (
        <form onSubmit={handleSubmit} className="p-3.5">
            <FormRow columns={2}>
                <FormField.Root inputId="name" label="Name" required>
                    <FormField.TextInput
                        inputId="name"
                        defaultValue={defaultForm.name}
                        required
                        onChange={(value) =>
                            setForm((state) => ({ ...state, name: value }))
                        }
                    />
                </FormField.Root>
                <FormField.Root
                    inputId="recover-email"
                    label="Recover e-mail"
                    required
                >
                    <FormField.TextInput
                        inputId="recover-email"
                        defaultValue={defaultForm.recoverEmail}
                        required
                        onChange={(value) =>
                            setForm((state) => ({
                                ...state,
                                recoverEmail: value,
                            }))
                        }
                    />
                </FormField.Root>
            </FormRow>
            <FormRow columns={1}>
                <FormField.Root inputId="base-url" label="Base URL" required>
                    <FormField.TextInput
                        inputId="base-url"
                        defaultValue={defaultForm.baseUrl}
                        required
                        onChange={(value) =>
                            setForm((state) => ({ ...state, baseUrl: value }))
                        }
                    />
                </FormField.Root>
            </FormRow>
            <div className="flex gap-3.5 p-4 max-sm:flex-col">
                <ButtonPrimary type="submit" disabled={isSubmiting}>
                    Save
                </ButtonPrimary>
                <ButtonSecondary onClick={onCancel}>Cancel</ButtonSecondary>
            </div>
        </form>
    );
};
