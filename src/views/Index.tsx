import React from 'react';
import Link from 'next/link';
import { ThemeSwitcherWithHook as ThemeSwitcher } from '@/components/ThemeSwitcher';

export const Index = () => {
    return (
        <>
            <Link href="/signin">Sign in</Link>
            <ThemeSwitcher />
        </>
    );
};
