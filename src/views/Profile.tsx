import React from 'react';
import Link from 'next/link';

export const Profile = () => {
    return (
        <>
            <h1>Profile</h1>
            <Link href="/home">Home</Link>
            <br />
            <Link href="/">Log out</Link>
        </>
    );
};
