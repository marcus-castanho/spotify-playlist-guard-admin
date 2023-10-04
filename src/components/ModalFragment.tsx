import React, { ReactNode, FC } from 'react';
import { useModal } from '@/contexts/ModalContext';

type ModalFragmentProps = {
    display: boolean;
    content: ReactNode;
};

export const ModalFragment: FC<ModalFragmentProps> = ({ display, content }) => {
    const { closeModal } = useModal();

    if (!display) return <></>;
    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    background: 'rgba(0, 0, 0, 0.5)',
                }}
            />
            <dialog
                open={display}
                style={{
                    position: 'fixed',
                    top: '50%',
                    transform: 'translate(0%, -50%)',
                }}
            >
                <div>
                    <button onClick={() => closeModal()}>x</button>
                </div>
                {content}
            </dialog>
        </>
    );
};
