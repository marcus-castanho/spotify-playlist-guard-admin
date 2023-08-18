'use client';

import { useClientErrorHandler } from '@/errors/useClientErrorHandler';
import React, { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    const { handleUncaughtClientError } = useClientErrorHandler();

    useEffect(() => {
        if (!error) return;
        handleUncaughtClientError(error);
    }, [error, handleUncaughtClientError]);

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}
