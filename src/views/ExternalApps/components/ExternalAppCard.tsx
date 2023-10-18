import React, { FC } from 'react';
import { ExternalApp } from '@/services/spotifyPlaylistGuardApi';

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
    return (
        <>
            <div>
                {'{'}
                {Object.keys(externalApp).map((key) => {
                    return (
                        <div key={key}>
                            {`${key}: ${
                                externalApp[key as keyof typeof externalApp]
                            }`}
                        </div>
                    );
                })}
                {'}'}
            </div>
            <button onClick={() => handleEditExternalApp(externalApp.id)}>
                edit external app
            </button>
            <button onClick={() => handleDeleteExternalApp(externalApp.id)}>
                delete external app
            </button>
        </>
    );
};
