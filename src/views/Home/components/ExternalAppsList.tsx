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
import { PlusIcon } from '@/components/icons/PlusIcon';

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
    return (
        <div className="flex w-[90vw] flex-col rounded-lg p-1 dark:bg-gradient-to-b dark:from-gray-950 dark:to-black">
            <div className="flex p-3.5">
                <ButtonPrimary
                    onClick={() => handleCreateExternalApp()}
                    scale={false}
                    round
                >
                    <PlusIcon size={24} />
                </ButtonPrimary>
            </div>
            <div className="flex flex-1 items-center justify-center">
                <div
                    className={
                        externalApps.length < 5
                            ? 'flex justify-center gap-3.5 p-3.5 max-sm:flex-col'
                            : 'grid grid-cols-5 gap-3.5 p-3.5 max-sm:grid-cols-1'
                    }
                >
                    {externalApps.map((externalApp) => (
                        <ExternalAppCard
                            key={externalApp.id}
                            externalApp={externalApp}
                            handleDeleteExternalApp={handleDeleteExternalApp}
                            handleEditExternalApp={handleEditExternalApp}
                        />
                    ))}
                </div>
            </div>
            <PaginationNav
                page={page}
                changePage={changePage}
                pagesIndexes={pagesIndexes}
            />
        </div>
    );
};
