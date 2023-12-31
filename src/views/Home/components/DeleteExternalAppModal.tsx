import React, { FC, useState } from 'react';
import { useModal } from '@/contexts/ModalContext';
import { deleteExternalApp } from '@/services/spotifyPlaylistGuardApi';
import { useToast } from '@/contexts/ToastContext';
import {
    handleClientError,
    useClientErrorHandler,
} from '@/errors/clientErrorHandlers';
import { useCookies } from '@/contexts/CookiesContext';
import { TOKEN_COOKIE_KEY } from '@/contexts/AuthContext';
import { ButtonPrimary } from '@/components/ButtonPrimary';
import { ButtonSecondary } from '@/components/ButtonSecondary';
import { WarningIcon } from '@/components/icons/WarningIcon';
import { useTheme } from '@/contexts/ThemeContext';

export type DeleteExternalAppModalProps = {
    externalAppId: string;
    onClose: () => void;
};

export const DeleteExternalAppModal: FC<DeleteExternalAppModalProps> = ({
    externalAppId,
    onClose,
}) => {
    const { closeModal } = useModal();
    const { getCookie } = useCookies();
    const token = getCookie(TOKEN_COOKIE_KEY) || '';
    const { toast } = useToast();
    const { handleGuardApiResponse } = useClientErrorHandler();
    const [isSubmiting, setIsSubmitting] = useState(false);
    const { theme } = useTheme();

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
                handleClientError(error);
                toast('Error while performing this operation', 'error');
            })
            .finally(() => setIsSubmitting(false));
    };

    return (
        <form
            onSubmit={() => handleConfirmDelete(externalAppId)}
            className="p-3.5"
        >
            <div className="p-3.5">
                <div className="flex justify-center p-3.5">
                    <WarningIcon
                        size={50}
                        fillColor={theme === 'dark' ? 'white' : 'black'}
                    />
                </div>
                <div className="flex justify-center pb-3.5">
                    Are you sure you want to delete this external app?
                </div>
            </div>
            <div className="flex justify-center gap-3.5">
                <ButtonPrimary type="submit" disabled={isSubmiting}>
                    Confirm
                </ButtonPrimary>
                <ButtonSecondary onClick={() => closeModal()}>
                    Cancel
                </ButtonSecondary>
            </div>
        </form>
    );
};
