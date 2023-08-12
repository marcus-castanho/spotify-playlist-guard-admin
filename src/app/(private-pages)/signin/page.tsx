import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const SignIn: NextPage = () => {
    return (
        <>
            <h1>Sign In</h1>
            <Link href="/">Index</Link>
            <br />
            <Link href="/home">Sign in</Link>
        </>
    );
};

export default SignIn;
