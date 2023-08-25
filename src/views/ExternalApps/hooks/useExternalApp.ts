import { QueryKey } from '@/contexts/QueryContext';
import { useClientErrorHandler } from '@/errors/clientErrorHandlers';
import { getExternalApp } from '@/services/spotifyPlaylistGuardApi';
import { getCookie } from '@/storage/cookies/client';
import { useQuery } from '@tanstack/react-query';

export function useExternalApp(id?: string) {
    const token = getCookie('s-p-guard-admin:token') || '';
    const { handleGuardApiResponse } = useClientErrorHandler();
    const externalAppsQueryKey: QueryKey = 'external-app';

    const externalAppsQuery = useQuery([externalAppsQueryKey, id], {
        queryFn: () => {
            if (!id) return null;
            return getExternalApp({ id, authToken: token })
                .then(handleGuardApiResponse)
                .catch(() => null);
        },
        initialData: null,
        enabled: !!id,
    });

    return {
        externalApp: externalAppsQuery.data,
    };
}
