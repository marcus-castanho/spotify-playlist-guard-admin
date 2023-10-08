import React from 'react';
import Link from 'next/link';
import { SignInForm } from './components/SignInForm';
import { Header } from '@/components/Header';

export const SignIn = () => {
    return (
        <div className="h-full bg-gradient-to-b from-gray-900">
            <Header />
            <h1>Sign In</h1>
            <Link href="/">Index</Link>
            <br />
            <div className="flex justify-center">
                <SignInForm />
            </div>
        </div>
    );
};
