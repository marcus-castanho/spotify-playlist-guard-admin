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
    const { externalApps, page, changePage, getPagesIndexes } =
        useExternalApps(initialExternalApps);
    const { indexesArr: pagesIndexes } = getPagesIndexes(20, 5);

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
            <button onClick={() => changePage('previous')}>
                previous page
            </button>
            {pagesIndexes.map((pageIndex) => {
                if (pageIndex === null) return '...';
                return (
                    <button
                        key={pageIndex}
                        onClick={() => changePage(pageIndex)}
                        style={{
                            border: page === pageIndex ? '1px red solid' : '',
                        }}
                    >
                        {pageIndex}
                    </button>
                );
            })}
            <button
                onClick={() => {
                    if (page === pagesIndexes[pagesIndexes.length - 1]) return;
                    return changePage('next');
                }}
            >
                next page
            </button>
        </>
    );
};
