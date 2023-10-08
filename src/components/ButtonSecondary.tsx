import React, { FC, ButtonHTMLAttributes } from 'react';

type ButtonSecondaryProps = {
    content: string;
    onClick?: () => void;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

export const ButtonSecondary: FC<ButtonSecondaryProps> = ({
    content,
    onClick = () => {},
    type = 'button',
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="rounded-[500px] border-[1px] border-gray-100 bg-white px-8 py-3 font-bold text-gray-100 hover:scale-105 hover:text-black dark:bg-black dark:hover:text-white"
        >
            {content}
        </button>
    );
};
