import React from 'react';
import Link from 'next/link';
import { SignInForm } from './components/SignInForm';
import { Header } from '@/components/Header';

export const SignIn = () => {
    return (
        <div className="flex h-screen flex-col from-gray-900 to-black dark:bg-gradient-to-b">
            <div className="flex">
                <Header />
                <h1>Sign In</h1>
                <Link href="/">Index</Link>
            </div>
            <br />
            <div className="flex w-full flex-1 items-center justify-center">
                <SignInForm />
            </div>
        </div>
    );
};
