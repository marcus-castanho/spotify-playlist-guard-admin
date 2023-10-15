'use client';

import React, { FC } from 'react';
import { DefaultAvatarIcon } from './icons/DefaultAvatarIcon';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';

type AvatarProps = {
    src?: string;
};
export const Avatar: FC<AvatarProps> = ({ src }) => {
    const { theme } = useTheme();
    const size = 24;

    return (
        <>
            {src ? (
                <Image
                    alt="Avatar image"
                    src={src}
                    width={size}
                    height={size}
                />
            ) : (
                <DefaultAvatarIcon
                    size={size}
                    fillColor={theme === 'dark' ? 'white' : 'black'}
                />
            )}
        </>
    );
};
