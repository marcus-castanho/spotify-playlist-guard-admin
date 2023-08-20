'use client';

import React, { useEffect, FC } from 'react';
import { useClientErrorHandler } from '@/errors/clientErrorHandlers';

export type ErrorProps = {
    error: Error;
    reset: () => void;
};

export const Error: FC<ErrorProps> = ({ error, reset }) => {
    const { handleUncaughtClientError } = useClientErrorHandler();

    useEffect(() => {
        if (!error) return;
        handleUncaughtClientError(error);
    }, [error, handleUncaughtClientError]);

    return (
        <>
            <h2>Some unexpcted error happened!</h2>
            <button onClick={() => reset()}>Try again</button>
        </>
    );
};
