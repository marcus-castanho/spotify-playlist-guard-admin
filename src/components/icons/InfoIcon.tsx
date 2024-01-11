import React, { FC } from 'react';

type InfoIconProps = {
    size?: number;
    fillColor?: 'black' | 'white';
};

export const InfoIcon: FC<InfoIconProps> = ({ size, fillColor = 'black' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill={fillColor}
        >
            <title>info-icon</title>
            <path d="M24,4C12.972,4,4,12.972,4,24s8.972,20,20,20s20-8.972,20-20S35.028,4,24,4z M25.5,33.5c0,0.828-0.672,1.5-1.5,1.5	s-1.5-0.672-1.5-1.5v-11c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5V33.5z M24,18c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2	s2,0.895,2,2C26,17.105,25.105,18,24,18z"></path>
        </svg>
    );
};
