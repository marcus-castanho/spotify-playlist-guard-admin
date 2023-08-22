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
        keepPreviousData: true,
    });

    return {
        externalApps: externalAppsQuery.data,
        currentPage: page,
        changePage: (selectedPage: number) => setPage(selectedPage),
    };
}
