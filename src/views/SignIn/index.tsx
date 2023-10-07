import React from 'react';
import Link from 'next/link';
import { SignInForm } from './components/SignInForm';
import { Header } from '@/components/Header';

export const SignIn = () => {
    return (
        <>
            <Header />
            <h1>Sign In</h1>
            <Link href="/">Index</Link>
            <br />
            <SignInForm />
        </>
    );
};
