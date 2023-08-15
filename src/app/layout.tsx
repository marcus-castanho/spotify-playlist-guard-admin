import React from 'react';
import { AppContextProvider } from '@/contexts';
import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
    return (
        <html lang="en">
            <AppContextProvider>
                <body className={inter.className}>{children}</body>
            </AppContextProvider>
        </html>
    );
}
