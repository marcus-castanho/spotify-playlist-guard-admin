import React from 'react';
import Link from 'next/link';
import { SignOutButton } from '@/components/SignOutButton';

export const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <SignOutButton />
            <br />
            <Link href="/profile">Profile</Link>
            <br />
            <Link href="/users">Users</Link>
            <br />
            <Link href="/external-apps">External Apps</Link>
        </>
    );
};
