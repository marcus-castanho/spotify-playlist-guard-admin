import React from 'react';
import { AppContextProvider } from '@/contexts';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getPageCookie } from '@/storage/cookies/server';
import { THEME_COOKIE_KEY } from '@/contexts/ThemeContext';
import { match } from 'ts-pattern';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Admin - Spotify Playlist Guard',
    description:
        'A portal for the Spotify Playlist Guard application administration',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const initialTheme =
        getPageCookie(THEME_COOKIE_KEY) === 'dark' ? 'dark' : 'light';
    return (
        <html
            lang="en"
            className={match(initialTheme)
                .with('light', () => '')
                .otherwise(() => initialTheme)}
        >
            <body
                className={`${inter.className} dark:bg-black dark:text-white`}
            >
                <AppContextProvider initialTheme={initialTheme}>
                    {children}
                </AppContextProvider>
            </body>
        </html>
    );
}
