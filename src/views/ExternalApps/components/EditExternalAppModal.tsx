import React, { FC } from 'react';
import { useExternalApp } from '../hooks/useExternalApp';
import { ExternalAppForm } from './ExternalAppForm';
import { useModal } from '@/contexts/ModalContext';

export type EditExternalAppModalProps = {
    externalAppId?: string;
    onClose: () => void;
};

export const EditExternalAppModal: FC<EditExternalAppModalProps> = ({
    externalAppId,
    onClose,
}) => {
    const { externalApp } = useExternalApp(externalAppId);
    const { closeModal } = useModal();

    const onSubmit = () => {
        onClose();
        closeModal();
    };

    if (externalAppId && !externalApp) return <>loading</>;
    return (
        <>
            {externalApp ? (
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
                        onSubmit={onSubmit}
                    />
                </>
            ) : (
                <ExternalAppForm
                    defaultForm={{
                        name: '',
                        baseUrl: '',
                        recoverEmail: '',
                    }}
                    onSubmit={onSubmit}
                />
            )}
        </>
    );
};
