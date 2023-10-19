'use client';

import React, { FC, Fragment, useEffect, useState } from 'react';
import { ExternalApp } from '@/services/spotifyPlaylistGuardApi';
import { useExternalApps } from '../hooks/useExternalApps';
import { useModal } from '@/contexts/ModalContext';
import { PaginationNav } from '@/components/PaginationNav';
import { EditExternalAppModal } from './EditExternalAppModal';
import { DeleteExternalAppModal } from './DeleteExternalAppModal';
import { ButtonPrimary } from '@/components/ButtonPrimary';
import { ExternalAppCard } from './ExternalAppCard';

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
        pagesIndexes,
        externalAppsQuery,
    } = useExternalApps(initialExternalApps);
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
    const externalApps1 = new Array(11)
        .fill(externalApps[0])
        .map((item, index) => ({ ...item, id: `${index}` }));
    return (
        <div>
            <div className="flex min-w-[50vw] p-3.5">
                <ButtonPrimary
                    content="+"
                    onClick={() => handleCreateExternalApp()}
                    scale={false}
                />
            </div>
            <div
                className={
                    externalApps1.length < 5
                        ? 'flex justify-center gap-3.5 p-3.5 max-sm:flex-col'
                        : 'grid grid-cols-5 gap-3.5 p-3.5 max-sm:grid-cols-1'
                }
            >
                {externalApps1.map((externalApp) => (
                    <ExternalAppCard
                        key={externalApp.id}
                        externalApp={externalApp}
                        handleDeleteExternalApp={handleDeleteExternalApp}
                        handleEditExternalApp={handleEditExternalApp}
                    />
                ))}
            </div>
            <br />
            <PaginationNav
                page={page}
                changePage={changePage}
                pagesIndexes={pagesIndexes}
            />
        </div>
    );
};
