import React, { ReactNode, FC } from 'react';
import { CrossMarkIcon } from './icons/CrossMarkIcon';
import { colors } from '@/styles/theme';
import { useTheme } from '@/contexts/ThemeContext';

type ModalFragmentProps = {
    display: boolean;
    content: ReactNode;
    closeModal: () => void;
};

export const ModalFragment: FC<ModalFragmentProps> = ({
    display,
    content,
    closeModal,
}) => {
    const { theme } = useTheme();

    if (!display) return <></>;
    return (
        <>
            <div className="fixed left-0 top-0 h-screen w-screen bg-black opacity-50" />
            <dialog
                open={display}
                className="fixed top-1/2 translate-y-[-50%] rounded-lg border-[1px] text-inherit dark:border-gray-100 dark:bg-black"
            >
                <div className="flex justify-end p-4">
                    <button onClick={() => closeModal()}>
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
