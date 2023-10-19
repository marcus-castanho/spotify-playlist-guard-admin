import { TOKEN_COOKIE_KEY } from '@/contexts/AuthContext';
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
    const token = getCookie(TOKEN_COOKIE_KEY) || '';
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

    const { indexesArr: pagesIndexes } = getPagesIndexes(1, 5);

    return {
        externalApps: externalAppsQuery.data,
        isFetching: externalAppsQuery.isFetching,
        page,
        changePage,
        pagesIndexes,
        externalAppsQuery,
    };
}
