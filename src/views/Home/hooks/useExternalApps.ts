import { TOKEN_COOKIE_KEY } from '@/contexts/AuthContext';
import { QueryKey } from '@/contexts/QueryContext';
import { useClientErrorHandler } from '@/errors/clientErrorHandlers';
import { usePagination } from '@/hooks/usePagination';
import {
    getExternalApps,
    ExternalApp,
} from '@/services/spotifyPlaylistGuardApi';
import { useCookies } from '@/contexts/CookiesContext';
import { useQuery } from '@tanstack/react-query';

export function useExternalApps(initialData: {
    pages: number;
    items: ExternalApp[];
}) {
    const { getCookie } = useCookies();
    const token = getCookie(TOKEN_COOKIE_KEY) || '';
    const { handleGuardApiResponse } = useClientErrorHandler();
    const externalAppsQueryKey: QueryKey = 'external-apps';
    const { page, changePage, getPagesIndexes } = usePagination();

    const externalAppsQuery = useQuery({
        queryFn: () =>
            getExternalApps({ page, authToken: token })
                .then(handleGuardApiResponse)
                .catch(() => initialData),
        initialData,
        queryKey: [externalAppsQueryKey, page],
    });

    const { indexesArr: pagesIndexes } = getPagesIndexes(
        externalAppsQuery.data?.pages || 1,
        5,
    );

    return {
        externalApps: externalAppsQuery.data?.items || [],
        isFetching: externalAppsQuery.isFetching,
        page,
        changePage,
        pagesIndexes,
        externalAppsQuery,
    };
}
