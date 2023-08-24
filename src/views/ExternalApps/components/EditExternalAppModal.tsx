import React, { FC, useState } from 'react';
import { useExternalApp } from '../hooks/useExternalApp';
import { ExternalApp } from '@/services/spotifyPlaylistGuardApi';

export type EditExternalAppModalProps = {
    externalAppId: string;
};

export const EditExternalAppModal: FC<EditExternalAppModalProps> = ({
    externalAppId,
}) => {
    const { externalApp } = useExternalApp(externalAppId);

    if (!externalApp) return <>loading</>;
    return (
        <>
            {externalApp && (
                <>
                    <div style={{ border: '1px solid gray' }}>
                        <div>{`id: ${externalApp.id}`}</div>
                        <div>{`createdAt: ${externalApp.createdAt}`}</div>
                        <div>{`updatedAt: ${externalApp.updatedAt}`}</div>
                    </div>
                    <ExternalAppForm
                        defaultForm={{
                            name: externalApp.name,
                            baseUrl: externalApp.baseUrl,
                            recoverEmail: externalApp.recoverEmail,
                        }}
                    />
                </>
            )}
        </>
    );
};

type ExternalAppFormProps = {
    defaultForm: Pick<ExternalApp, 'name' | 'recoverEmail' | 'baseUrl'>;
};

function ExternalAppForm({ defaultForm }: ExternalAppFormProps) {
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
}
