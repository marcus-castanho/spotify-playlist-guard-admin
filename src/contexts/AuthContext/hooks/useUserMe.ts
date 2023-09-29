import { isPrivatePage } from '@/config/pages';
import { QueryKey } from '@/contexts/QueryContext';
import { getMe } from '@/services/spotifyPlaylistGuardApi';
import { getCookie } from '@/storage/cookies/client';
import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import { TOKEN_COOKIE_KEY } from '..';

export function useUserMe(signOut: (sessionEnd?: boolean) => void) {
    const token = getCookie(TOKEN_COOKIE_KEY) || '';
    const userMeQueryKey: QueryKey = 'user-me';
    const pathname = usePathname();

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
        enabled: isPrivatePage(pathname || ''),
    });

    return {
        me: userMeQuery.data,
        refetch: userMeQuery.refetch,
    };
}
