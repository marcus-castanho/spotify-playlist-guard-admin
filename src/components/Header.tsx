import React from 'react';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import Link from 'next/link';
import { GuardBotLogo } from './GuardBotLogo';

export const Header = () => {
    return (
        <header className="flex justify-between border-b-2 p-5 dark:border-black">
            <Link href="/" className="flex items-center gap-4">
                <GuardBotLogo />
                <div>for Admin</div>
            </Link>
            <ThemeSwitcher />
        </header>
    );
};
