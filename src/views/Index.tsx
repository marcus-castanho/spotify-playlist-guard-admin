'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { useAuth } from '@/contexts/AuthContext';

export const Index = () => {
    const { user } = useAuth();
    return (
        <>
            <Header user={user} />
            <Link href="/signin">Sign in</Link>
        </>
    );
};
