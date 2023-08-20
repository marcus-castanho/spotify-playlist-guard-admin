import { log } from '@/logger';

export function useClientErrorHandler() {
    const handleUncaughtClientError = (error) => {
        const { digest } = error;
        log({
            message: 'Uncaught error',
            payload: {
                ...(digest ? { digest } : {}),
                message: error.message,
                stack: error.stack,
            },
        });
    };

    return {
        handleUncaughtClientError,
    };
}
