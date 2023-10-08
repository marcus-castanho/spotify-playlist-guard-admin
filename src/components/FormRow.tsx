import React, { FC, ReactNode } from 'react';
import { match } from 'ts-pattern';

type FormRowProps = {
    columns: number;
    children?: ReactNode;
};

export const FormRow: FC<FormRowProps> = ({ columns, children }) => {
    const styleClass = match(columns)
        .with(1, () => 'mb-3.5 grid grid-cols-1 gap-3.5')
        .with(2, () => 'mb-3.5 grid grid-cols-2 gap-3.5')
        .with(3, () => 'mb-3.5 grid grid-cols-3 gap-3.5')
        .with(4, () => 'mb-3.5 grid grid-cols-4 gap-3.5')
        .otherwise(() => 'mb-3.5 grid grid-cols-1 gap-3.5');

    return <div className={styleClass}>{children}</div>;
};
