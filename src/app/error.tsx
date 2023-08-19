'use client';

import React from 'react';
import { Error as ErrorPage } from '@/views/Error';

export type ErrorProps = {
    error: Error;
    reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
    return (
        <html>
            <body>
                <ErrorPage error={error} reset={reset} />
            </body>
        </html>
    );
}
