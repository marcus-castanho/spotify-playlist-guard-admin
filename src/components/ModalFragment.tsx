import React, { ReactNode, FC } from 'react';
import { CrossMarkIcon } from './icons/CrossMarkIcon';
import { colors } from '@/styles/theme';
import { Theme } from '@/contexts/ThemeContext';

type ModalFragmentProps = {
    display: boolean;
    content: ReactNode;
    closeModal: () => void;
    theme: Theme;
};

export const ModalFragment: FC<ModalFragmentProps> = ({
    display,
    content,
    closeModal,
    theme,
}) => {
    if (!display) return <></>;
    return (
        <>
            <div className="fixed left-0 top-0 h-screen w-screen bg-black opacity-50" />
            <dialog
                open={display}
                className="fixed top-1/2 translate-y-[-50%] rounded text-inherit dark:bg-gray-700"
            >
                <div className="flex justify-end">
                    <button className="p-1" onClick={() => closeModal()}>
                        <CrossMarkIcon
                            size={14}
                            fillColor={
                                theme === 'dark'
                                    ? colors.gray[50]
                                    : colors.gray[100]
                            }
                        />
                    </button>
                </div>
                {content}
            </dialog>
        </>
    );
};
