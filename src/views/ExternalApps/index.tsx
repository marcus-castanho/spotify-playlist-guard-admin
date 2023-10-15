'use client';

import React from 'react';
import Link from 'next/link';
import { SignOutButton } from '@/components/SignOutButton';
import { ExternalAppsList } from './components/ExternalAppsList';
import { getExternalApps } from '@/services/spotifyPlaylistGuardApi';
import { getPageCookie } from '@/storage/cookies/server';
import { TOKEN_COOKIE_KEY, useAuth } from '@/contexts/AuthContext';
import { Header } from '@/components/Header';

export const ExternalApps = async () => {
    const { user } = useAuth();
    const token = getPageCookie(TOKEN_COOKIE_KEY) || '';
    const externalApps = await getExternalApps({
        page: 1,
        authToken: token,
    }).then(({ success, data }) => {
        if (!success) return [];

        return data;
    });

    return (
        <>
            <Header user={user} />
            <h1>External Apps</h1>
            <Link href="/home">Home</Link>
            <SignOutButton />
            <br />
            <ExternalAppsList externalApps={externalApps} />
        </>
    );
};
