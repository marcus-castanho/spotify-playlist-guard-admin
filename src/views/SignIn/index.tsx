'use client';

import React from 'react';
import { SignInForm } from './components/SignInForm';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageContainer } from '@/components/PageContainer';
import { Main } from '@/components/Main';
import { useAuth } from '@/contexts/AuthContext';

export const SignIn = () => {
    const { user } = useAuth();
    return (
        <PageContainer>
            <Header user={user} />
            <Main>
                <div>
                    <h1 className="px-4 text-4xl md:py-4">Sign in</h1>
                    <SignInForm />
                </div>
            </Main>
            <Footer />
        </PageContainer>
    );
};
