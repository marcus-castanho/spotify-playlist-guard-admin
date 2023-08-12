import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const Profile: NextPage = () => {
    return (
        <>
            <h1>Profile</h1>
            <Link href="/home">Home</Link>
            <br />
            <Link href="/">Log out</Link>
        </>
    );
};

export default Profile;
