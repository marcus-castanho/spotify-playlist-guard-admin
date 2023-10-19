import React, { FC, ReactNode } from 'react';
import { ExternalApp } from '@/services/spotifyPlaylistGuardApi';
import { PencilIcon } from '@/components/icons/PencilIcon';
import { useTheme } from '@/contexts/ThemeContext';
import { TrashIcon } from '@/components/icons/TrashIcon';

type ActionButtonProps = {
    children: ReactNode;
    onClick: () => void;
};
const ActionButton: FC<ActionButtonProps> = ({ children, onClick }) => {
    return (
        <button
            onClick={() => onClick()}
            className="rounded-md border-2 border-transparent p-2 hover:border-gray-100"
        >
            {children}
        </button>
    );
};

type ExternalAppCardProps = {
    externalApp: ExternalApp;
    handleEditExternalApp: (id: string) => void;
    handleDeleteExternalApp: (id: string) => void;
};
export const ExternalAppCard: FC<ExternalAppCardProps> = ({
    externalApp,
    handleEditExternalApp,
    handleDeleteExternalApp,
}) => {
    const { theme } = useTheme();
    return (
        <div className="rounded-lg bg-white p-1 shadow-md dark:bg-gray-950 dark:hover:bg-gray-800 max-sm:h-full sm:w-[200px]">
            <div className="p-4">
                <div className="font-bold">{externalApp.name}</div>
            </div>
            <div className="flex gap-2 p-2 max-sm:justify-center">
                <ActionButton
                    onClick={() => handleEditExternalApp(externalApp.id)}
                >
                    <PencilIcon
                        size={24}
                        fillColor={theme === 'dark' ? 'white' : 'black'}
                    />
                </ActionButton>
                <ActionButton
                    onClick={() => handleDeleteExternalApp(externalApp.id)}
                >
                    <TrashIcon
                        size={24}
                        fillColor={theme === 'dark' ? 'white' : 'black'}
                    />
                </ActionButton>
            </div>
        </div>
    );
};
