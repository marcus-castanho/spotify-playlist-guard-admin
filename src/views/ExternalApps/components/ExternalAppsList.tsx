'use client';

import React, { FC, Fragment, useEffect, useState } from 'react';
import { ExternalApp } from '@/services/spotifyPlaylistGuardApi';
import { useExternalApps } from '../hooks/useExternalApps';
import { useModal } from '@/contexts/ModalContext';
import { PaginationNav } from '@/components/PaginationNav';
import { EditExternalAppModal } from './EditExternalAppModal';
import { DeleteExternalAppModal } from './DeleteExternalAppModal';

export type ExternalAppsListProps = {
    externalApps: ExternalApp[];
};

export const ExternalAppsList: FC<ExternalAppsListProps> = ({
    externalApps: initialExternalApps,
}) => {
    const {
        externalApps,
        isFetching,
        page,
        changePage,
        getPagesIndexes,
        externalAppsQuery,
    } = useExternalApps(initialExternalApps);
    const { indexesArr: pagesIndexes } = getPagesIndexes(20, 5);
    const [isUpdating, setIsUpdating] = useState(false);
    const { openModal } = useModal();

    const onMutate = () => {
        setIsUpdating(true);
        externalAppsQuery.refetch();
    };

    const handleEditExternalApp = (id: string) => {
        openModal(
            <EditExternalAppModal
                externalAppId={id}
                onClose={() => onMutate()}
            />,
        );
    };

    const handleCreateExternalApp = () => {
        openModal(<EditExternalAppModal onClose={() => onMutate()} />);
    };

    const handleDeleteExternalApp = async (id: string) => {
        openModal(
            <DeleteExternalAppModal
                externalAppId={id}
                onClose={() => onMutate()}
            />,
        );
    };

    useEffect(() => {
        if (!isFetching) {
            setIsUpdating(false);
        }
    }, [isFetching]);

    if (isUpdating) return <>loading</>;
    return (
        <>
            <button onClick={() => handleCreateExternalApp()}>create</button>
            {externalApps.map((externalApp) => (
                <Fragment key={externalApp.id}>
                    <div>
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
                    <button
                        onClick={() => handleEditExternalApp(externalApp.id)}
                    >
                        edit external app
                    </button>
                    <button
                        onClick={() => handleDeleteExternalApp(externalApp.id)}
                    >
                        delete external app
                    </button>
                </Fragment>
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
