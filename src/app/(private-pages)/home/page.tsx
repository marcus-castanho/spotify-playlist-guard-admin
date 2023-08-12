import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
    return (
        <>
            <h1>Home</h1>
            <Link href="/profile">Profile</Link>
            <br />
            <Link href="/">Log out</Link>
        </>
    );
};

export default Home;
