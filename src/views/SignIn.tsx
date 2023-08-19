import React from 'react';
import Link from 'next/link';
import { SignInForm } from '@/components/SignInForm';

export const SignIn = () => {
    return (
        <>
            <h1>Sign In</h1>
            <Link href="/">Index</Link>
            <br />
            <SignInForm />
        </>
    );
};
