import React, { FC, useState } from 'react';
import { useModal } from '@/contexts/ModalContext';
import { deleteExternalApp } from '@/services/spotifyPlaylistGuardApi';
import { useToast } from '@/contexts/ToastContext';
import {
    handleUncaughtClientError,
    useClientErrorHandler,
} from '@/errors/clientErrorHandlers';
import { getCookie } from '@/storage/cookies/client';
import { TOKEN_COOKIE_KEY } from '@/contexts/AuthContext';

export type DeleteExternalAppModalProps = {
    externalAppId: string;
    onClose: () => void;
};

export const DeleteExternalAppModal: FC<DeleteExternalAppModalProps> = ({
    externalAppId,
    onClose,
}) => {
    const { closeModal } = useModal();
    const token = getCookie(TOKEN_COOKIE_KEY) || '';
    const { toast } = useToast();
    const { handleGuardApiResponse } = useClientErrorHandler();
    const [isSubmiting, setIsSubmitting] = useState(false);

    const onSubmit = () => {
        onClose();
        closeModal();
    };

    const handleConfirmDelete = async (id: string) => {
        setIsSubmitting(true);

        await deleteExternalApp({
            id,
            authToken: token,
        })
            .then(handleGuardApiResponse)
            .then(() => toast('Successfully deleted.', 'success'))
            .then(() => onSubmit())
            .catch((error) => {
                handleUncaughtClientError(error);
                toast('Error while performing this operation', 'error');
            })
            .finally(() => setIsSubmitting(false));
    };

    return (
        <>
            <>
                <p>Are you sure you want to delete this item?</p>
                <button onClick={() => closeModal()}>cancel</button>
                <button
                    onClick={() => handleConfirmDelete(externalAppId)}
                    disabled={isSubmiting}
                >
                    confirm
                </button>
            </>
        </>
    );
};
