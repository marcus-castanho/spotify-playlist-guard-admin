import React, { FC, ReactNode } from 'react';

type MainProps = {
    children: ReactNode;
};
export const Main: FC<MainProps> = ({ children }) => {
    return (
        <main className="flex w-full flex-1 items-center justify-center">
            {children}
        </main>
    );
};
