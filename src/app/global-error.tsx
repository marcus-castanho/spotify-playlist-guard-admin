'use client';

import React, { useEffect } from 'react';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
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
