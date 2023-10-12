import React from 'react';
import { SignInForm } from './components/SignInForm';
import { Header } from '@/components/Header';

export const SignIn = () => {
    return (
        <>
            <Header />
            <div className="flex flex-1 flex-col from-gray-900 to-black dark:bg-gradient-to-b">
                <div className="flex"></div>
                <br />
                <div className="flex w-full flex-1 items-center justify-center">
                    <SignInForm />
                </div>
            </div>
        </>
    );
};
