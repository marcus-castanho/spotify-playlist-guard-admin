import React from 'react';
import Link from 'next/link';
import { SignOutButton } from '@/components/SignOutButton';
import { UserProfile } from './components/UserProfile';

export const Profile = () => {
    return (
        <>
            <h1>Profile</h1>
            <Link href="/home">Home</Link>
            <SignOutButton />
            <UserProfile />
        </>
    );
};
