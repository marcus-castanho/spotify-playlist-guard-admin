'use client';

import React from 'react';
import Link from 'next/link';
import { GitHubIcon } from './icons/GitHubIcon';
import { useTheme } from '@/contexts/ThemeContext';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

export const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer className="flex justify-center gap-4 border-t-2 p-5 dark:border-black">
            <Link
                href="https://github.com/marcus-castanho/spotify-playlist-guard-admin"
                target="_blank"
            >
                <GitHubIcon
                    size={24}
                    fillColor={theme === 'dark' ? 'white' : 'black'}
                />
            </Link>
            <div className="border-l-2 border-black dark:border-white" />
            <div className="flex gap-1">
                Developed by
                <Link
                    href="https://github.com/marcus-castanho"
                    target="_blank"
                    className="flex hover:underline"
                >
                    Marcus
                    <ExternalLinkIcon
                        size={22}
                        fillColor={theme === 'dark' ? 'white' : 'black'}
                    />
                </Link>
            </div>
        </footer>
    );
};
