import React from 'react';
import { PageContainer } from '@/components/PageContainer';
import { Main } from '@/components/Main';
import { Anchor } from '@/components/Anchor';
import { GuardBotLogo } from '@/components/GuardBotLogo';

export const NotFound = () => {
    return (
        <PageContainer>
            <Main>
                <div className="flex w-full items-center justify-center">
                    <div className="flex flex-col items-center">
                        <GuardBotLogo size={60} />
                        <h2 className="pb-4 pt-10 text-5xl font-bold">
                            404 - Page not found
                        </h2>
                        <p className="pb-10 text-gray-100">
                            The resourve you are looking for could not be found
                        </p>
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
