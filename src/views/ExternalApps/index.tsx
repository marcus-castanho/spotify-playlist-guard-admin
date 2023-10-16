import React from 'react';
import { ExternalAppsList } from './components/ExternalAppsList';
import { getExternalApps } from '@/services/spotifyPlaylistGuardApi';
import { getPageCookie } from '@/storage/cookies/server';
import { TOKEN_COOKIE_KEY } from '@/contexts/AuthContext';
import { Header } from '@/components/Header';
import { PageContainer } from '@/components/PageContainer';
import { Main } from '@/components/Main';

export const ExternalApps = async () => {
    const token = getPageCookie(TOKEN_COOKIE_KEY) || '';
    const externalApps = await getExternalApps({
        page: 1,
        authToken: token,
    }).then(({ success, data }) => {
        if (!success) return [];

        return data;
    });

    return (
        <PageContainer>
            <Header />
            <Main>
                <div>
                    <ExternalAppsList externalApps={externalApps} />
                </div>
            </Main>
        </PageContainer>
    );
};
