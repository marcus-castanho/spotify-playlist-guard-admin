import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { SignInForm } from '@/components/SignInForm';

const SignIn: NextPage = () => {
    return (
        <>
            <h1>Sign In</h1>
            <Link href="/">Index</Link>
            <br />
            <SignInForm />
        </>
    );
};

export default SignIn;
