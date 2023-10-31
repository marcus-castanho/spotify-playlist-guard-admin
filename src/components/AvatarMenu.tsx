'use client';

import React, { FC } from 'react';
import { User } from '@/services/spotifyPlaylistGuardApi';
import { Avatar } from './Avatar';
import { DropdownMenuList } from './DropdownMenuList';
import { useVisibleComponent } from '@/hooks/useVisibleComponent';
import Link from 'next/link';
import { SignOutButton } from './SignOutButton';

type AvatarMenuHeaderProps = {
    userName: string;
};
const AvatarMenuHeader: FC<AvatarMenuHeaderProps> = ({ userName }) => {
    return (
        <div className="flex items-center gap-2">
            <Avatar size={30} />
            {userName}
        </div>
    );
};

const ProfileLink = () => {
    return (
        <Link href="/profile" className="w-full">
            Profile
        </Link>
    );
};

type AvatarMenuProps = {
    user: User;
    defaultVisibilty?: boolean;
};
export const AvatarMenu: FC<AvatarMenuProps> = ({
    user,
    defaultVisibilty = false,
}) => {
    const { ref, isVisible, switchVisibility, setIsVisible } =
        useVisibleComponent<HTMLDivElement>(defaultVisibilty);

    return (
        <div className="relative flex" ref={ref}>
            <button
                onClick={() => switchVisibility()}
                className="py-2 hover:scale-105"
            >
                <Avatar />
            </button>
            {isVisible && (
                <div
                    className={
                        'fixed max-sm:left-0 max-sm:top-0 max-sm:h-screen max-sm:w-screen max-sm:p-2 sm:absolute sm:bottom-0 sm:right-0 sm:translate-y-[100%]'
                    }
                >
                    <DropdownMenuList
                        header={<AvatarMenuHeader userName={user.name} />}
                        onClose={() => setIsVisible(false)}
                        itemsGroups={[
                            [<ProfileLink key="profile-link" />],
                            [<SignOutButton key="sign-out-button" />],
                        ]}
                    />
                </div>
            )}
        </div>
    );
};
