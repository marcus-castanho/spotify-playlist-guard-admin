'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { PageContainer } from '@/components/PageContainer';
import { Footer } from '@/components/Footer';
import { Main } from '@/components/Main';
import { useAuth } from '@/contexts/AuthContext';

export const Home = () => {
    const { user } = useAuth();
    return (
        <PageContainer>
            <Header user={user} />
            <Main>
                <div className="flex gap-4">
                    <Link href="/external-apps">External Apps</Link>
                </div>
            </Main>
            <Footer />
        </PageContainer>
    );
};
