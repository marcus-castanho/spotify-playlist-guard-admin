import React from 'react';
import Link from 'next/link';
import { SignOutButton } from '@/components/SignOutButton';

export const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Link href="/profile">Profile</Link>
            <SignOutButton />
        </>
    );
};
