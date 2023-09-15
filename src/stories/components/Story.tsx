import React, { ReactNode } from 'react';

interface Props {
    title: string;
    children: ReactNode;
}

export function Story({ children, title }: Props) {
    return (
        <div style={{}}>
            <h1>{title}</h1>
            <div style={{}}>{children}</div>
        </div>
    );
}
