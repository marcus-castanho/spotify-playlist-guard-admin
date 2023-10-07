import React, { ReactNode, FC } from 'react';
import { useModal } from '@/contexts/ModalContext';
import { CrossMarkIcon } from './icons/CrossMarkIcon';
import { colors } from '@/styles/theme';

type ModalFragmentProps = {
    display: boolean;
    content: ReactNode;
};

export const ModalFragment: FC<ModalFragmentProps> = ({ display, content }) => {
    const { closeModal } = useModal();

    if (!display) return <></>;
    return (
        <>
            <div className="fixed left-0 top-0 h-screen w-screen bg-black opacity-50" />
            <dialog
                open={display}
                className="fixed top-1/2 translate-y-[-50%] rounded dark:bg-gray-700"
            >
                <div className="flex justify-end">
                    <button className="p-1" onClick={() => closeModal()}>
                        <CrossMarkIcon size={14} fillColor={colors.gray[50]} />
                    </button>
                </div>
                {content}
            </dialog>
        </>
    );
};
