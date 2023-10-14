import React from 'react';
import { SignInForm } from './components/SignInForm';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const SignIn = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex w-full flex-1 items-center justify-center">
                <SignInForm />
            </main>
            <Footer />
        </div>
    );
};
