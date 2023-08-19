import React from 'react';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Admin - Spotify Playlist Guard</title>
                <meta
                    name="description"
                    content="A portal for the Spotify Playlist Guard application administration"
                />
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;
