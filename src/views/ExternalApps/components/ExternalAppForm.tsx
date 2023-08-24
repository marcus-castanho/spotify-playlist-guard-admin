import React, { FC, useState } from 'react';
import { ExternalApp } from '@/services/spotifyPlaylistGuardApi';

export type ExternalAppFormProps = {
    defaultForm: Pick<ExternalApp, 'name' | 'recoverEmail' | 'baseUrl'>;
};

export const ExternalAppForm: FC<ExternalAppFormProps> = ({ defaultForm }) => {
    const [form, setForm] = useState(defaultForm);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
