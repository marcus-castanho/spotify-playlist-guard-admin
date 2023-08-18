'use client';

import { useClientErrorHandler } from '@/errors/useClientErrorHandler';
import React, { useEffect } from 'react';

export default function GlobalError({
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
        <html>
            <body>
                <h2>Some unexpcted error happened!</h2>
                <button onClick={() => reset()}>Try again</button>
            </body>
        </html>
    );
}
