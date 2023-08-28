'use client';

import React, { FC, useState } from 'react';
import { patchUser } from '@/services/spotifyPlaylistGuardApi/routes/patchUser';
import { getCookie } from '@/storage/cookies/client';
import {
    handleUncaughtClientError,
    useClientErrorHandler,
} from '@/errors/clientErrorHandlers';
import { useToast } from '@/contexts/ToastContext';

export type ProfileFormProps = {
    id: string;
    defaultForm: { name: string; email: string };
    onSubmit: () => void;
};

export const ProfileForm: FC<ProfileFormProps> = ({
    id,
    defaultForm,
    onSubmit,
}) => {
    const token = getCookie('s-p-guard-admin:token') || '';
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
            <div>
                name:{' '}
                <input
                    type="text"
                    value={form.name}
                    onChange={({ target }) =>
                        setForm((state) => ({
                            ...state,
                            name: target.value,
                        }))
                    }
                />
            </div>
            <div>
                email:{' '}
                <input
                    type="text"
                    value={form.email}
                    onChange={({ target }) =>
                        setForm((state) => ({
                            ...state,
                            email: target.value,
                        }))
                    }
                />
            </div>
            <button onClick={() => onSubmit()} disabled={isSubmiting}>
                cancel
            </button>
            <button disabled={isSubmiting}>save</button>
        </form>
    );
};
