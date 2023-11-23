import { useAuth } from '@/contexts/AuthContext';
import { log } from '@/logger';
import { ReturnValue } from '@/services/spotifyPlaylistGuardApi';

export function handleClientError(error) {
    const { digest } = error;
    log({
        message: 'Uncaught error',
        payload: {
            ...(digest ? { digest } : {}),
            message: error.message,
            stack: error.stack,
        },
    });
}

export function useClientErrorHandler() {
    const { signOut } = useAuth();

    const handleGuardApiResponse = <T>({
        success,
        status,
        data,
    }: ReturnValue<T>) => {
        if (status === 401) signOut(true);
        if (!success) throw new Error('Failed');

        return data;
    };

    return {
        handleGuardApiResponse,
    };
}
