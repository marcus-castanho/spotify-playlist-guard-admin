'use client';

import React, { FC } from 'react';
import { User } from '@/services/spotifyPlaylistGuardApi';
import { Avatar } from './Avatar';
import { DropdownMenuList } from './DropdownMenuList';
import { useVisibleComponent } from '@/hooks/useVisibleComponent';
import Link from 'next/link';
import { SignOutButton } from './SignOutButton';

type AvatarMenuProps = {
    user: User;
    defaultVisibilty?: boolean;
};
export const AvatarMenu: FC<AvatarMenuProps> = ({
    user,
    defaultVisibilty = false,
}) => {
    const { ref, isVisible, switchVisibility } =
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
                        header={
                            <div className="flex items-center gap-2 p-3">
                                <Avatar size={30} fillColor="white" />
                                {user.name}
                            </div>
                        }
                        itemsGroups={[
                            [
                                <Link
                                    key="profile-link"
                                    href="/profile"
                                    className="w-full"
                                >
                                    Profile
                                </Link>,
                            ],
                            [<SignOutButton key="sign-out-button" />],
                        ]}
                    />
                </div>
            )}
        </div>
    );
};
