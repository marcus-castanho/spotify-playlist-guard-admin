import React, { FC, useState } from 'react';
import {
    ExternalApp,
    postExternalApp,
    patchExternalApp,
} from '@/services/spotifyPlaylistGuardApi';
import { getCookie } from '@/storage/cookies/client';
import { useClientErrorHandler } from '@/errors/clientErrorHandlers';

export type ExternalAppFormProps = {
    id?: string;
    defaultForm: Pick<ExternalApp, 'name' | 'recoverEmail' | 'baseUrl'>;
};

export const ExternalAppForm: FC<ExternalAppFormProps> = ({
    id,
    defaultForm,
}) => {
    const token = getCookie('s-p-guard-admin:token') || '';
    const { handleGuardApiResponse } = useClientErrorHandler();
    const [form, setForm] = useState(defaultForm);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (id) {
            await patchExternalApp({
                id,
                ...form,
                authToken: token,
            })
                .then(handleGuardApiResponse)
                .catch((error) => {
                    console.log(error);
                });

            return;
        }

        postExternalApp({
            ...form,
            authToken: token,
        })
            .then(handleGuardApiResponse)
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label style={{ display: 'flex', justifyContent: 'space-between' }}>
                Name
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
            </label>
            <label style={{ display: 'flex', justifyContent: 'space-between' }}>
                Recover email
                <input
                    type="text"
                    value={form.recoverEmail}
                    onChange={({ target }) =>
                        setForm((state) => ({
                            ...state,
                            recoverEmail: target.value,
                        }))
                    }
                />
            </label>
            <label style={{ display: 'flex', justifyContent: 'space-between' }}>
                Base URL
                <input
                    type="text"
                    value={form.baseUrl}
                    onChange={({ target }) =>
                        setForm((state) => ({
                            ...state,
                            baseUrl: target.value,
                        }))
                    }
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};
