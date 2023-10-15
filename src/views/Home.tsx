import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { PageContainer } from '@/components/PageContainer';
import { Footer } from '@/components/Footer';
import { Main } from '@/components/Main';

export const Home = () => {
    return (
        <PageContainer>
            <Header />
            <Main>
                <div className="flex gap-4">
                    <Link href="/external-apps">External Apps</Link>
                </div>
            </Main>
            <Footer />
        </PageContainer>
    );
};
