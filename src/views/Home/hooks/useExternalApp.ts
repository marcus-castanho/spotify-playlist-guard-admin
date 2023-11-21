import { TOKEN_COOKIE_KEY } from '@/contexts/AuthContext';
import { QueryKey } from '@/contexts/QueryContext';
import { useClientErrorHandler } from '@/errors/clientErrorHandlers';
import { getExternalApp } from '@/services/spotifyPlaylistGuardApi';
import { getCookie } from '@/storage/cookies/client';
import { useQuery } from '@tanstack/react-query';

export function useExternalApp(id?: string) {
    const token = getCookie(TOKEN_COOKIE_KEY) || '';
    const { handleGuardApiResponse } = useClientErrorHandler();
    const externalAppsQueryKey: QueryKey = 'external-app';

    const externalAppsQuery = useQuery({
        queryFn: () => {
            if (!id) return null;
            return getExternalApp({ id, authToken: token })
                .then(handleGuardApiResponse)
                .catch(() => null);
        },
        initialData: null,
        enabled: !!id,
        queryKey: [externalAppsQueryKey, id],
    });

    return {
        externalApp: externalAppsQuery.data,
    };
}
