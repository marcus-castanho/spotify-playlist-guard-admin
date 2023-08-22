'use client';

import React, { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
    ExternalApp,
    getExternalApps,
} from '../services/spotifyPlaylistGuardApi';
import { useClientErrorHandler } from '../errors/clientErrorHandlers';
import { QueryKey } from '../contexts/QueryContext';
import { getCookie } from '@/storage/cookies/client';

export type ExternalAppsListProps = {
    externalApps: ExternalApp[];
};

export const ExternalAppsList: FC<ExternalAppsListProps> = ({
    externalApps,
}) => {
    const token = getCookie('s-p-guard-admin:token') || '';
    const { handleGuardApiResponse } = useClientErrorHandler();
    const externalAppsQueryKey: QueryKey = 'external-apps';
    const externalAppsQuery = useQuery([externalAppsQueryKey], {
        queryFn: () =>
            getExternalApps({ page: 1, authToken: token })
                .then(handleGuardApiResponse)
                .catch(() => []),
        initialData: externalApps,
        keepPreviousData: true,
    });

    return (
        <>
            {externalAppsQuery.data &&
                externalAppsQuery.data.map((externalApp) => {
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
