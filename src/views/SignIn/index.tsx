import React from 'react';
import { SignInForm } from './components/SignInForm';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageContainer } from '@/components/PageContainer';

export const SignIn = () => {
    return (
        <PageContainer>
            <Header />
            <main className="flex w-full flex-1 items-center justify-center">
                <div>
                    <h1 className="px-4 text-4xl md:py-4">Sign in</h1>
                    <SignInForm />
                </div>
            </main>
            <Footer />
        </PageContainer>
    );
};
