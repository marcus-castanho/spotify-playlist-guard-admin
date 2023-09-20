import React, { FC, ReactNode } from 'react';

type IconsListProps = {
    icons: { title: string; component: ReactNode }[];
};

export const IconsList: FC<IconsListProps> = ({ icons }) => {
    return (
        <div style={{ paddingTop: '24px' }}>
            {icons.map((icon) => (
                <div key={icon.title} style={{ display: 'inline-block' }}>
                    {icon.component}
                </div>
            ))}
        </div>
    );
};
