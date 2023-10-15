import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';

export const Index = () => {
    return (
        <>
            <Header />
            <Link href="/signin">Sign in</Link>
        </>
    );
};
