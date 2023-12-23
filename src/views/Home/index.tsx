import React from 'react';
import { ExternalAppsList } from './components/ExternalAppsList';
import { getExternalApps } from '@/services/spotifyPlaylistGuardApi';
import { getPageCookie } from '@/storage/cookies/server';
import { TOKEN_COOKIE_KEY } from '@/contexts/AuthContext';
import { Header } from '@/components/Header';
import { PageContainer } from '@/components/PageContainer';
import { Main } from '@/components/Main';

export const Home = async () => {
    const token = getPageCookie(TOKEN_COOKIE_KEY) || '';
    const { pages, items: externalApps } = await getExternalApps(
        {
            page: 1,
            authToken: token,
        },
        { type: 'SSR', options: { cache: 'no-store' } },
    ).then(({ success, data }) => {
        if (!success) return { pages: 1, items: [] };

        return data;
    });

    return (
        <PageContainer>
            <Header />
            <Main>
                <div className="flex w-full justify-center">
                    <ExternalAppsList
                        pages={pages}
                        externalApps={externalApps}
                    />
                </div>
            </Main>
        </PageContainer>
    );
};
