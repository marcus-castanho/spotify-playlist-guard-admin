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
                <div className={'absolute bottom-0 right-0 translate-y-[100%]'}>
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
