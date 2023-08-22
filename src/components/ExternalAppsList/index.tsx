'use client';

import React, { FC } from 'react';
import { ExternalApp } from '../../services/spotifyPlaylistGuardApi';
import { useExternalApps } from './hooks/useExternalApps';

export type ExternalAppsListProps = {
    externalApps: ExternalApp[];
};

export const ExternalAppsList: FC<ExternalAppsListProps> = ({
    externalApps: initialExternalApps,
}) => {
    const { externalApps } = useExternalApps(initialExternalApps);

    return (
        <>
            {externalApps.map((externalApp) => {
                const { id } = externalApp;
                return (
                    <div key={id}>
                        {'{'}
                        {Object.keys(externalApp).map((key) => {
                            return (
                                <div key={key}>
                                    {`${key}: ${
                                        externalApp[
                                            key as keyof typeof externalApp
                                        ]
                                    }`}
                                </div>
                            );
                        })}
                        {'}'}
                    </div>
                );
            })}
        </>
    );
};
