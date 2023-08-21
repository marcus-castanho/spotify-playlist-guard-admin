import React from 'react';
import Link from 'next/link';
import { SignOutButton } from '@/components/SignOutButton';

export const Users = () => {
    return (
        <>
            <h1>Users</h1>
            <Link href="/home">Home</Link>
            <SignOutButton />
        </>
    );
};
