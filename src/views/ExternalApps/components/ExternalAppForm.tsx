import React, { FC, useState } from 'react';
import {
    ExternalApp,
    postExternalApp,
    patchExternalApp,
} from '@/services/spotifyPlaylistGuardApi';
import { getCookie } from '@/storage/cookies/client';
import {
    handleUncaughtClientError,
    useClientErrorHandler,
} from '@/errors/clientErrorHandlers';
import { useToast } from '@/contexts/ToastContext';
import { TOKEN_COOKIE_KEY } from '@/contexts/AuthContext';
import { TextInputField } from '@/components/TextInputField';
import { FormRow } from '@/components/FormRow';
import { ButtonPrimary } from '@/components/ButtonPrimary';
import { ButtonSecondary } from '@/components/ButtonSecondary';

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
                    handleUncaughtClientError(error);
                    toast('Error while performing this operation', 'error');
                })
                .finally(() => setIsSubmitting(false));

            return;
        }

        await postExternalApp({
            ...form,
            authToken: token,
        })
            .then(() => {
                throw new Error();
            })
            .then(handleGuardApiResponse)
            .then(() => toast('Successfully created.', 'success'))
            .then(() => onSubmit())
            .catch((error) => {
                handleUncaughtClientError(error);
                toast('Error while performing this operation', 'error');
            })
            .finally(() => setIsSubmitting(false));
    };

    return (
        <form onSubmit={handleSubmit} className="p-3.5">
            <FormRow columns={2}>
                <TextInputField
                    id="name"
                    label="Name"
                    defaultValue={defaultForm.name}
                    required
                    onChange={(value) =>
                        setForm((state) => ({ ...state, name: value }))
                    }
                />
                <TextInputField
                    id="recover-email"
                    label="Recover e-mail"
                    defaultValue={defaultForm.recoverEmail}
                    required
                    onChange={(value) =>
                        setForm((state) => ({
                            ...state,
                            recoverEmail: value,
                        }))
                    }
                />
            </FormRow>
            <FormRow columns={1}>
                <TextInputField
                    id="base-url"
                    label="Base URL"
                    defaultValue={defaultForm.baseUrl}
                    required
                    onChange={(value) =>
                        setForm((state) => ({ ...state, baseUrl: value }))
                    }
                />
            </FormRow>
            <div className="flex gap-3.5 p-4">
                <ButtonPrimary
                    content="Save"
                    type="submit"
                    disabled={isSubmiting}
                />
                <ButtonSecondary content="Cancel" onClick={onCancel} />
            </div>
        </form>
    );
};
