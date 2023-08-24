'use client';

import React, { FC } from 'react';
import { ExternalApp } from '../../services/spotifyPlaylistGuardApi';
import { useExternalApps } from './hooks/useExternalApps';
import { useExternalApp } from './hooks/useExternalApp';
import { useModal } from '@/contexts/ModalContext';
import { PaginationNav } from '../PaginationNav';

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
            {externalApps.map((item) => {
                const { id } = item;
                return (
                    <>
                        <ExternalAppComponent key={id} externalApp={item} />;
                        <button onClick={() => handleEditExternalApp(id)}>
                            select external app
                        </button>
                    </>
                );
            })}
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
};

function ExternalAppComponent({ externalApp }: ExternalAppComponentProps) {
    return (
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
    );
}

type EditExternalAppModalProps = {
    externalAppId: string;
};

function EditExternalAppModal({ externalAppId }: EditExternalAppModalProps) {
    const { externalApp } = useExternalApp(externalAppId);

    return (
        <>
            {externalApp && (
                <ExternalAppComponent
                    key={externalAppId}
                    externalApp={externalApp}
                />
            )}
        </>
    );
}
