import React, { FC } from 'react';
import { Spinner } from '@/components/Spinner';
import { PageContainer } from '@/components/PageContainer';

export const Loading: FC = () => {
    return (
        <PageContainer>
            <div className="flex flex-1 items-center justify-center">
                <Spinner size="large" />
            </div>
        </PageContainer>
    );
};
