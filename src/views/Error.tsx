'use client';

import React, { useEffect, FC } from 'react';
import { handleUncaughtClientError } from '@/errors/clientErrorHandlers';

export type ErrorProps = {
    error: Error;
    reset: () => void;
};

export const Error: FC<ErrorProps> = ({ error, reset }) => {
    useEffect(() => {
        if (!error) return;
        handleUncaughtClientError(error);
    }, [error]);

    return (
        <>
            <h2>Some unexpcted error happened!</h2>
            <button onClick={() => reset()}>Try again</button>
        </>
    );
};
