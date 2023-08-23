import { QueryKey } from '@/contexts/QueryContext';
import { useClientErrorHandler } from '@/errors/clientErrorHandlers';
import {
    getExternalApps,
    ExternalApp,
} from '@/services/spotifyPlaylistGuardApi';
import { getCookie } from '@/storage/cookies/client';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export function useExternalApps(externalApps: ExternalApp[]) {
    const [page, setPage] = useState(1);
    const token = getCookie('s-p-guard-admin:token') || '';
    const { handleGuardApiResponse } = useClientErrorHandler();
    const externalAppsQueryKey: QueryKey = 'external-apps';

    const externalAppsQuery = useQuery([externalAppsQueryKey, page], {
        queryFn: () =>
            getExternalApps({ page, authToken: token })
                .then(handleGuardApiResponse)
                .catch(() => []),
        initialData: externalApps,
    });

    const changePage = (selectedPage: 'previous' | 'next' | number) => {
        setPage((state) => {
            if (selectedPage === 'previous') return state === 1 ? 1 : state - 1;
            if (selectedPage === 'next') return state + 1;

            return selectedPage;
        });
    };

    const getPagesIndexes = (numPages: number, maxVisiblePages: number) => {
        const pagesLength = numPages;
        const pages = new Array(pagesLength)
            .fill(0)
            .map((_, index) => index + 1);
        const lastPage = pagesLength;
        const firstPage = 1;

        if (
            maxVisiblePages >= pagesLength ||
            maxVisiblePages === pagesLength - 1
        ) {
            return {
                indexesStr: `${pages.join(', ')}`,
                indexesArr: pages,
            };
        }

        if (page - firstPage < maxVisiblePages) {
            const firstPart = pages.slice(0, maxVisiblePages);
            return {
                indexesStr: `${firstPart.join(', ')}...${lastPage}`,
                indexesArr: [...firstPart, null, lastPage],
            };
        }

        if (page > maxVisiblePages && page + maxVisiblePages < lastPage) {
            const middlePart = pages.slice(
                page - 1,
                page - 1 + maxVisiblePages,
            );

            return {
                indexesStr: `${firstPage}...${middlePart.join(
                    ', ',
                )}...${lastPage}`,
                indexesArr: [firstPage, null, ...middlePart, null, lastPage],
            };
        }

        if (page > maxVisiblePages && page + maxVisiblePages === lastPage) {
            const lastPart = pages.slice(page - 1, lastPage + 1);
            return {
                indexesStr: `${firstPage}...${lastPart.join(', ')}`,
                indexesArr: [firstPage, null, ...lastPart],
            };
        }

        const lastPart = pages.slice(lastPage - maxVisiblePages, lastPage + 1);
        return {
            indexesStr: `${firstPage}...${lastPart.join(', ')}`,
            indexesArr: [firstPage, null, ...lastPart],
        };
    };

    return {
        externalApps: externalAppsQuery.data,
        page,
        changePage,
        getPagesIndexes,
    };
}
