import React from 'react';
import Link from 'next/link';
import { SignOutButton } from '@/components/SignOutButton';

export const ExternalApps = () => {
    return (
        <>
            <h1>External Apps</h1>
            <Link href="/home">Home</Link>
            <SignOutButton />
        </>
    );
};
