import React from 'react';
import Link from 'next/link';
import { SignOutButton } from '@/components/SignOutButton';
import { Header } from '@/components/Header';

export const Home = () => {
    return (
        <>
            <Header />
            <h1>Home</h1>
            <SignOutButton />
            <br />
            <Link href="/profile">Profile</Link>
            <br />
            <Link href="/external-apps">External Apps</Link>
        </>
    );
};
