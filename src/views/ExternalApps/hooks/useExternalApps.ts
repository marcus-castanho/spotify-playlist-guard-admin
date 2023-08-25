import { QueryKey } from '@/contexts/QueryContext';
import { useClientErrorHandler } from '@/errors/clientErrorHandlers';
import { usePagination } from '@/hooks/usePagination';
import {
    getExternalApps,
    ExternalApp,
} from '@/services/spotifyPlaylistGuardApi';
import { getCookie } from '@/storage/cookies/client';
import { useQuery } from '@tanstack/react-query';

export function useExternalApps(externalApps: ExternalApp[]) {
    const token = getCookie('s-p-guard-admin:token') || '';
    const { handleGuardApiResponse } = useClientErrorHandler();
    const externalAppsQueryKey: QueryKey = 'external-apps';
    const { page, changePage, getPagesIndexes } = usePagination();

    const externalAppsQuery = useQuery([externalAppsQueryKey, page], {
        queryFn: () =>
            getExternalApps({ page, authToken: token })
                .then(handleGuardApiResponse)
                .catch(() => []),
        initialData: externalApps,
    });

    return {
        externalApps: externalAppsQuery.data,
        isFetching: externalAppsQuery.isFetching,
        page,
        changePage,
        getPagesIndexes,
        externalAppsQuery,
    };
}
