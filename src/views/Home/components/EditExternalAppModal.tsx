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
                <ExternalAppForm
                    id={externalAppId}
                    defaultForm={{
                        name: externalApp.name,
                        baseUrl: externalApp.baseUrl,
                        recoverEmail: externalApp.recoverEmail,
                    }}
                    onSubmit={onSubmit}
                    onCancel={closeModal}
                />
            ) : (
                <ExternalAppForm
                    defaultForm={{
                        name: '',
                        baseUrl: '',
                        recoverEmail: '',
                    }}
                    onSubmit={onSubmit}
                    onCancel={closeModal}
                />
            )}
        </>
    );
};
