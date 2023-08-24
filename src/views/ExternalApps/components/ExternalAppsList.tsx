'use client';

import React, { FC } from 'react';
import { ExternalApp } from '@/services/spotifyPlaylistGuardApi';
import { useExternalApps } from '../hooks/useExternalApps';
import { useModal } from '@/contexts/ModalContext';
import { PaginationNav } from '@/components/PaginationNav';
import { EditExternalAppModal } from './EditExternalAppModal';

export type ExternalAppsListProps = {
    externalApps: ExternalApp[];
};

export const ExternalAppsList: FC<ExternalAppsListProps> = ({
    externalApps: initialExternalApps,
}) => {
    const { externalApps, page, changePage, getPagesIndexes } =
        useExternalApps(initialExternalApps);
    const { indexesArr: pagesIndexes } = getPagesIndexes(20, 5);
    const { openModal } = useModal();

    const handleEditExternalApp = (id: string) => {
        openModal(<EditExternalAppModal externalAppId={id} />);
    };

    return (
        <>
            {externalApps.map((externalApp) => (
                <ExternalAppComponent
                    key={externalApp.id}
                    externalApp={externalApp}
                    handleEditExternalApp={handleEditExternalApp}
                />
            ))}
            <br />
            <PaginationNav
                page={page}
                changePage={changePage}
                pagesIndexes={pagesIndexes}
            />
        </>
    );
};

type ExternalAppComponentProps = {
    externalApp: ExternalApp;
    handleEditExternalApp: (id: string) => void;
};

function ExternalAppComponent({
    externalApp,
    handleEditExternalApp,
}: ExternalAppComponentProps) {
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
                select external app
            </button>
        </>
    );
}
