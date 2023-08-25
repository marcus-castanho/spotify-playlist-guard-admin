import React, { FC } from 'react';
import { useExternalApp } from '../hooks/useExternalApp';
import { ExternalAppForm } from './ExternalAppForm';

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
                        id={externalAppId}
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
