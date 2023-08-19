import React from 'react';
import Link from 'next/link';

export const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Link href="/profile">Profile</Link>
            <br />
            <Link href="/">Log out</Link>
        </>
    );
};
