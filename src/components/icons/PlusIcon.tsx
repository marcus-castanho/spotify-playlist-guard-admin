import React, { FC } from 'react';

type PlusIconProps = {
    size: number;
    fillColor?: 'black' | 'white';
};

export const PlusIcon: FC<PlusIconProps> = ({ size, fillColor = 'black' }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 12H20M12 4V20"
                stroke={fillColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
