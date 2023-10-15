import React, { FC } from 'react';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import Link from 'next/link';
import { GuardBotLogo } from './GuardBotLogo';
import { AvatarMenu } from './AvatarMenu';
import { useAuth } from '@/contexts/AuthContext';

type HeaderProps = {
    user: ReturnType<typeof useAuth>['user'];
};
export const Header: FC<HeaderProps> = ({ user }) => {
    return (
        <header className="flex justify-between p-5">
            <Link href="/" className="flex items-center gap-4">
                <GuardBotLogo />
                <div>for Admin</div>
            </Link>
            <div className="flex gap-4">
                <ThemeSwitcher />
                {user && (
                    <div className="flex items-center">
                        <AvatarMenu user={user} />
                    </div>
                )}
            </div>
        </header>
    );
};
