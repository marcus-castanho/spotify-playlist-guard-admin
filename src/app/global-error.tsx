'use client';

import { log } from '@/logger';
import React, { useEffect } from 'react';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        log({
            message: 'Uncaught error',
            payload: {
                message: error.message,
                stack: error.stack,
            },
        });
    }, [error]);

    return (
        <html>
            <body>
                <h2>Some unexpcted error happened!</h2>
                <button onClick={() => reset()}>Try again</button>
            </body>
        </html>
    );
}
