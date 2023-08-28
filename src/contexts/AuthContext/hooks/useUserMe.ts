import { QueryKey } from '@/contexts/QueryContext';
import { getMe } from '@/services/spotifyPlaylistGuardApi';
import { getCookie } from '@/storage/cookies/client';
import { useQuery } from '@tanstack/react-query';

export function useUserMe(signOut: (sessionEnd?: boolean) => void) {
    const token = getCookie('s-p-guard-admin:token') || '';
    const userMeQueryKey: QueryKey = 'user-me';

    const userMeQuery = useQuery([userMeQueryKey], {
        queryFn: () =>
            getMe(token)
                .then(({ data, status, success }) => {
                    if (status === 401) signOut(true);
                    if (!success) throw new Error('Failed');

                    return data;
                })
                .catch(() => null),
        initialData: null,
    });

    return {
        me: userMeQuery.data,
        refetch: userMeQuery.refetch,
    };
}
