import React from 'react';
import Link from 'next/link';
import { SignOutButton } from '@/components/SignOutButton';
import { ExternalAppsList } from './components/ExternalAppsList';
import { getExternalApps } from '@/services/spotifyPlaylistGuardApi';
import { getPageCookie } from '@/storage/cookies/server';

export const ExternalApps = async () => {
    const token = getPageCookie('s-p-guard-admin:token') || '';
    const externalApps = await getExternalApps({
        page: 1,
        authToken: token,
    }).then(({ success, data }) => {
        if (!success) return [];

        return data;
    });

    return (
        <>
            <h1>External Apps</h1>
            <Link href="/home">Home</Link>
            <SignOutButton />
            <ExternalAppsList externalApps={externalApps} />
        </>
    );
};
