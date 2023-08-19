'use client';

import React from 'react';
import { Error } from '@/views/Error';

export type GlobalErrorProps = {
    error: Error;
    reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
    return (
        <html>
            <body>
                <Error error={error} reset={reset} />
            </body>
        </html>
    );
}
