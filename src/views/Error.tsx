'use client';

import React, { useEffect, FC } from 'react';
import { handleClientError } from '@/errors/clientErrorHandlers';
import { PageContainer } from '@/components/PageContainer';
import { Main } from '@/components/Main';
import { ServerWarningIcon } from '@/components/icons/ServerWarningIcon';
import { Anchor } from '@/components/Anchor';
import { ButtonSecondary } from '@/components/ButtonSecondary';
import { useTheme } from '@/contexts/ThemeContext';

export type ErrorProps = {
    error: Error;
    reset: () => void;
};

export const Error: FC<ErrorProps> = ({ error, reset }) => {
    const { theme } = useTheme();

    useEffect(() => {
        if (!error) return;
        handleClientError(error);
    }, [error]);

    return (
        <PageContainer>
            <Main>
                <div className="flex w-full items-center justify-center">
                    <div className="flex flex-col items-center">
                        <ServerWarningIcon
                            size={60}
                            fillColor={theme === 'dark' ? 'white' : 'black'}
                        />
                        <h1 className="flex justify-center px-6 py-10 text-center text-3xl font-bold sm:text-left">
                            Sorry, something went wrong
                        </h1>
                        <div className="pb-10">
                            <ButtonSecondary
                                scale={false}
                                onClick={() => reset()}
                            >
                                Try again
                            </ButtonSecondary>
                        </div>
                        <Anchor
                            text="Go Home"
                            href="/"
                            target="_self"
                            label="home-link"
                        />
                    </div>
                </div>
            </Main>
        </PageContainer>
    );
};
