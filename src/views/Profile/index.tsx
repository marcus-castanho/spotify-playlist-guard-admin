'use client';

import React from 'react';
import Link from 'next/link';
import { SignOutButton } from '@/components/SignOutButton';
import { UserProfile } from './components/UserProfile';
import { Header } from '@/components/Header';
import { useAuth } from '@/contexts/AuthContext';

export const Profile = () => {
    const { user } = useAuth();
    return (
        <>
            <Header user={user} />
            <h1>Profile</h1>
            <Link href="/home">Home</Link>
            <SignOutButton />
            <UserProfile />
        </>
    );
};
